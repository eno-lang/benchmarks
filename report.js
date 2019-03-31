const fs = require('fs');
const enolib = require('enolib');
const { Section, TerminalReporter } = require('enolib');
const { datetime, float, integer } = require('enotype');
const moment = require('moment');
const path = require('path');

enolib.register({ datetime, float, integer });

const results = {
  'JavaScript': {
    scenarios: {}
  },
  'Python': {
    scenarios: {}
  },
  'Ruby': {
    scenarios: {}
  }
};

let maxTime = 0;
let previousIterations;

for(const language of Object.keys(results)) {
  const file = path.join(__dirname, `reports/${language.toLowerCase()}.eno`);
  const input = fs.readFileSync(file, 'utf-8');
  const document = enolib.parse(input, { reporter: TerminalReporter, source: file });

  const iterations = document.field('iterations').requiredIntegerValue();

  if(previousIterations && iterations !== previousIterations) {
    throw document.field('iterations').error(`This benchmark has a different number of iterations (${iterations}) than one of the others (${previousIterations}).`);
  } else {
    previousIterations = iterations;
  }

  results[language].evaluated = document.field('evaluated').requiredDatetimeValue();
  results[language].runtime = document.field('runtime').requiredStringValue();

  for(const scenarioFieldset of document.requiredSection('scenarios').fieldsets()) {
    const scenario = scenarioFieldset.stringKey();

    results[language].scenarios[scenario] = [];

    for(const benchmark of scenarioFieldset.entries()) {
      const time = benchmark.requiredFloatValue();

      results[language].scenarios[scenario].push({
        library: benchmark.stringKey(),
        time: time
      });

      maxTime = Math.max(maxTime, time);
    }

    results[language].scenarios[scenario] = results[language].scenarios[scenario].sort((a, b) => a.time - b.time);
  }
}

let report = `
# Benchmarks

**Last updated ${moment().format('MMMM Do, YYYY')}**

These benchmarks evaluate the performance of all enolib implementations,
compared also to the most popular yaml/toml parsers out there. As with all
statistics please take these findings with a grain of salt, and feel invited to
re-run these benchmarks or point out flaws and possible improvements to the
methodology and code (some instructions are provided below the results).

Benchmarks are currently performed on Ubuntu 18.10 on an Intel® Xeon(R) CPU E5-1650 v3 @ 3.50GHz × 12 (see language sections below for detailed runtime info).
`;

report += `
## Graphical results

**[-]** indicates a pure **parsing** run with unsafe results. **(\\*)**

**[✓]** indicates a benchmark for **parsing plus querying and validating** the whole document. **(\\*\\*)**

**░░ 0.123** Shorter bars/numbers indicate **better performance**.

**░░░░░░░░░ 456789** Larger bars/numbers indicate **worse performance**.

Each ░ represents one second.
`;

for(let [language, languageData] of Object.entries(results)) {
  report += `
### ${language}

Evaluated in **${languageData.runtime}** on **${moment(languageData.evaluated).format('MMMM Do YYYY')}**.
`;

  for(let [scenario, benchmarks] of Object.entries(languageData.scenarios)) {
    report += `\n#### *${scenario}*\n\n&nbsp;  \n\`\`\`\n`;

    report += 'VAL LIBRARY'.padEnd(25) + ' NUMBER OF SECONDS FOR 100K (***) ITERATIONS\n\n';

    let offTheScale = false;
    for(let benchmark of benchmarks) {
      const isEno = benchmark.library.includes('eno');
      let bar = benchmark.time;
      const block = isEno ? '▓' : '░';

      if(bar < 60) {
        report += `${benchmark.library.padEnd(28)} [${block.repeat(bar)}] ${benchmark.time.toFixed(3)} seconds\n`;
      } else {
        if(!offTheScale) {
          report += '\n' + '...  ...'.padEnd(28) + ' OFF THE SCALE\n\n';
          offTheScale = true;
        }

        const minutes = Math.round(bar/60);
        report += `${benchmark.library.padEnd(28)} ${minutes}+ minutes\n`;
      }

    }

    report += `\`\`\`\n`;
  }
}


report += `
## Numerical results

**[-]** indicates a pure **parsing** run with unsafe results. **(\\*)**

**[✓]** indicates a benchmark for **parsing plus querying and validating** the whole document. **(\\*\\*)**

**0.123** Smaller numbers indicate **better performance**.

**4565789** Larger numbers indicate **worse performance**.

`;


for(let [language, languageData] of Object.entries(results)) {
  report += `
### ${language}

Evaluated in **${languageData.runtime}** on **${moment(languageData.evaluated).format('MMMM Do YYYY')}**.
`;

  for(let [scenario, benchmarks] of Object.entries(languageData.scenarios)) {
    report += `\n#### *${scenario}*\n\n`;

    report += `| Library | Number of seconds for 100k (***) iterations |\n`;
    report += `| ------- | ------------------------------------- |\n`;

    for(let benchmark of benchmarks) {
      const isEno = benchmark.library.includes('eno');
      report += `| ${isEno ? '**':''}${benchmark.library}${isEno ? '**':''} | ${isEno ? '**':''}${benchmark.time.toFixed(3)}${isEno ? '**':''} |\n`;
    }
  }
}

report += `
---

## How the data is gathered

To see how the measurements were obtained, please take a look at the source of \`benchmark.js/py/rb\` inside this repository.
To see how the report was compiled, please study \`report.js\` inside this repository.


## Notes

**(\\*)**: The majority of YAML/TOML parsers produce plain object dumps which are inherently unvalidated.

**(\\*\\*)**: In the enolib libraries a document is validated through querying.
If the whole document is queried, the whole document is validated. If only a portion of the document is queried
less validation and less memory allocation happens and the performance thereby increases too. The results displayed
here represent the (performance-wise worst) case of using all data present in a document.

**(\\*\\*\\*)**: Some libraries included in the benchmarks exhibit an up to 1000x
slower performance compared to the top ranking parsers, these have been
partially sampled with up to only 1k iterations, with the total duration
extrapolated for the global comparison again.
`;

fs.writeFileSync(path.join(__dirname, 'README.md'), report);
