const fs = require('fs');
const eno = require('enojs');
const loaders = require('enojs-exploaders');
const path = require('path');

const results = {
  abstract_hierarchy: [],
  content_heavy: [],
  invented_server_configuration: [],
  jekyll_post_example: [],
  journey_route_data: [],
  yaml_invoice_example: []
};

let maxTime = 0;
let previousIterations;

for(language of ['javascript', 'python', 'ruby']) {
  const input = fs.readFileSync(path.join(__dirname, `reports/${language}.eno`), 'utf-8');
  const report = eno.parse(input, { reporter: 'terminal' });
  const body = report.section(language);

  const iterations = body.field('iterations', loaders.integer);
  if(previousIterations && iterations !== previousIterations) {
    throw body.element('iterations').error(`This benchmark has a different number of iterations (${iterations}) than one of the others (${previousIterations}).`);
  } else {
    previousIterations = iterations;
  }

  for(let scenario of Object.keys(results)) {
    const section = body.section(scenario);

    for(let benchmark of section.elements()) {
      const time = benchmark.value(loaders.float);

      results[scenario].push({
        language: language,
        library: benchmark.name,
        time: time
      });

      maxTime = Math.max(maxTime, time);
    }

    results[scenario] = results[scenario].sort((a, b) => a.time - b.time);
  }
}

let report = '# Benchmarks\n';

report += `
This is an initial draft report, and as with all statistics please take it with a big grain of salt.

To get an impression how the measurements were obtained, please take a look at the source of \`benchmark.js/py/rb\` inside this repository.
To get an impression how the report was compiled, please study \`report.js\` inside this repository.

Numerical values represent the number of seconds elapsed during 100k (\*) iterations of the respective code example, or in other words, smaller numbers indicate better performance.

(\*) Note: Some libraries included in the benchmark exhibit an up to 1000x slower performance speed compared to the top ranking parsers, these have been partially sampled with up to only 1k iterations with the total duration extrapolated for the global comparison again.
`;

for(let scenario of Object.keys(results)) {
  report += `\n## ${scenario}\n\n`;

  for(let benchmark of results[scenario]) {
    const barChar = benchmark.library.includes('eno') ? '▓' : '░';

    let bar = 1 + 320 * (benchmark.time / maxTime);

    if(bar > 80) {
      report += '\n';
      while(bar > 0) {
        report += barChar.repeat(Math.min(bar, 80)) + '  \n';
        bar -= 80;
      }

      report += `${benchmark.time.toFixed(3)} - **${benchmark.library}** - *${benchmark.language}*  \n`;
    } else {
      report += `${barChar.repeat(bar)}&nbsp;&nbsp;${benchmark.time.toFixed(3)} - **${benchmark.library}** - *${benchmark.language}*  \n`;
    }

  }
}

fs.writeFileSync(path.join(__dirname, 'README.md'), report);
