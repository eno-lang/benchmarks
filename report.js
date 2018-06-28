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
These are benchmarks to evaluate the performance of all current eno library
implementations in comparism to each other, as well as in comparism to the most
popular yaml/toml parsers out there.

As with all statistics please take these findings with a grain of salt,
and feel warmly invited to re-run these benchmarks or point out flaws and
possible improvements to the methodology and code.

## How the data is gathered

To get an impression how the measurements were obtained, please take a look at the source of \`benchmark.js/py/rb\` inside this repository.
To get an impression how the report was compiled, please study \`report.js\` inside this repository.

Benchmarks are currently performed on Ubuntu 17.10 on an Intel® Xeon(R) CPU E5-1650 v3 @ 3.50GHz × 12 and in recent language runtimes (node 10.5.0, python 3.6.3, ruby 2.5.0p0).

## How to interpret the results below

Numerical values represent the number of seconds elapsed during 100k (\*) iterations of the respective code example, or in other words, smaller numbers indicate better performance.

Each ░ represents one second, the maximum bar width displayed in a line is 60 seconds, so this represents one minute in the graphs below:

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

(\*) Note: Some libraries included in the benchmark exhibit an up to 1000x
slower performance speed compared to the top ranking parsers, these have been
partially sampled with up to only 1k iterations, with the total duration
extrapolated for the global comparison again. Although they somewhat destroy the
layout, their graphical bar representations are included in the report
nonetheless, it should give us some thought that popular libraries with
downloads going up into the millions exhibit that kind of performance in a
simple, random benchmark.

## The latest report

Generated on ${new Date()}

`;

for(let scenario of Object.keys(results)) {
  report += `\n### ${scenario}\n\n`;

  for(let benchmark of results[scenario]) {
    const barChar = benchmark.library.includes('eno') ? '▓' : '░';

    let bar = 60 * (benchmark.time / 60);

    if(bar > 60) {
      report += '\n';
      while(bar > 0) {
        report += barChar.repeat(Math.min(bar, 60)) + '  \n';
        bar -= 60;
      }

      report += `${benchmark.time.toFixed(3)} - **${benchmark.library}** - *${benchmark.language}*  \n`;
    } else {
      report += `${barChar.repeat(bar)}&nbsp;&nbsp;${benchmark.time.toFixed(3)} - **${benchmark.library}** - *${benchmark.language}*  \n`;
    }

  }
}

fs.writeFileSync(path.join(__dirname, 'README.md'), report);
