const fs = require('fs');
const eno = require('enojs');
const { Section, TerminalReporter } = require('enojs');
const path = require('path');

const results = {
  'JavaScript': {},
  'Python': {},
  'Ruby': {}
};

let maxTime = 0;
let previousIterations;

for(language of Object.keys(results)) {
  const input = fs.readFileSync(path.join(__dirname, `reports/${language.toLowerCase()}.eno`), 'utf-8');
  const report = eno.parse(input, { reporter: TerminalReporter });
  const body = report.section(language.toLowerCase());

  const iterations = body.integer('iterations');
  if(previousIterations && iterations !== previousIterations) {
    throw body.element('iterations').error(`This benchmark has a different number of iterations (${iterations}) than one of the others (${previousIterations}).`);
  } else {
    previousIterations = iterations;
  }

  for(let element of body.elements()) {
    if(!(element instanceof Section)) continue;

    const scenario = element.name;

    results[language][scenario] = [];

    for(let benchmark of element.elements()) {
      const time = benchmark.float();

      results[language][scenario].push({
        language: language,
        library: benchmark.name,
        time: time
      });

      maxTime = Math.max(maxTime, time);
    }

    results[language][scenario] = results[language][scenario].sort((a, b) => a.time - b.time);
  }
}

let report = `
# Benchmarks

Last generated on ${new Date()}

These are benchmarks to evaluate the performance of all current eno library
implementations in comparism to each other, as well as in comparism to the most
popular yaml/toml parsers out there.

As with all statistics please take these findings with a grain of salt,
and feel warmly invited to re-run these benchmarks or point out flaws and
possible improvements to the methodology and code.

## How the data is gathered

To get an impression how the measurements were obtained, please take a look at the source of \`benchmark.js/py/rb\` inside this repository.
To get an impression how the report was compiled, please study \`report.js\` inside this repository.

Benchmarks are currently performed on Ubuntu 18.10 on an Intel® Xeon(R) CPU E5-1650 v3 @ 3.50GHz × 12 and in recent language runtimes (node 11.5.0, python 3.6.7, ruby 2.5.3p105).
`;

report += `
## Graphical results
(A numbers-only table report is provided further down)

Shorter bars/smaller numbers indicate better performance.
Each ░ represents one second.
`;

for(let [language, scenarios] of Object.entries(results)) {
  // report += `\n---\n## \n\n`;
  report += `\n### ${language}\n`;

  for(let [scenario, benchmarks] of Object.entries(scenarios)) {
    report += `\n#### *${scenario}*\n\n&nbsp;  \n\`\`\`\n`;

    report += 'LIBRARY'.padEnd(20) + ' NUMBER OF SECONDS FOR 100K (*) ITERATIONS\n\n';

    for(let benchmark of benchmarks) {
      const isEno = benchmark.library.includes('eno');
      let bar = 60 * (benchmark.time / 60);
      const block = isEno ? '▓' : '░';

      report += `${benchmark.library.padEnd(20)} [${block.repeat(bar)}] ${benchmark.time.toFixed(3)}\n`;
    }

    report += `\`\`\`\n`;
  }
}


report += `
## Numerical results

Smaller numbers indicate better performance.

`;


for(let [language, scenarios] of Object.entries(results)) {
  report += `\n### ${language}\n`;

  for(let [scenario, benchmarks] of Object.entries(scenarios)) {
    report += `\n#### *${scenario}*\n\n`;

    report += `| Library | Number of seconds for 100k (*) iterations |\n`;
    report += `| ------- | ------------------------------------- |\n`;

    for(let benchmark of benchmarks) {
      const isEno = benchmark.library.includes('eno');
      report += `| ${isEno ? '**':''}${benchmark.library}${isEno ? '**':''} | ${isEno ? '**':''}${benchmark.time.toFixed(3)}${isEno ? '**':''} |\n`;
    }
  }
}

report += `
---

**(\*) Note**: Some libraries included in the benchmarks exhibit an up to 1000x
slower performance compared to the top ranking parsers, these have been
partially sampled with up to only 1k iterations, with the total duration
extrapolated for the global comparison again.
`;

fs.writeFileSync(path.join(__dirname, 'README.md'), report);
