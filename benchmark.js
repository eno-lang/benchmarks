const fs = require('fs');
const path = require('path');
const { performance } = require('perf_hooks');

const eno = require('enojs');
const enoVersion = require('enojs/package').version;
const fm = require('front-matter');
const fmVersion = require('front-matter/package').version;
const jsYaml = require('js-yaml');
const jsYamlVersion = require('js-yaml/package').version;
const toml = require('toml');
const tomlVersion = require('toml/package').version;
const tomlJ04 = require('toml-j0.4');
const tomlJ04Version = require('toml-j0.4/package').version;

const ITERATIONS = 100000;

let enoInput, mdInput, tomlInput, yamlInput;

let report = `# javascript\n\niterations: ${ITERATIONS}\nevaluated: ${new Date()}\n`;

const scenario = (file) => { report += `\n## ${file}\n\n`; };

const benchmark = (library, version, perform) => {
  const before = performance.now();

  for(let i = 0; i < ITERATIONS; i++)
    perform();

  const after = performance.now();

  report += `${library} ${version}`.padEnd(20) + ':' + ((after - before) / 1000.0).toFixed(3).padStart(12) + '\n';
};


scenario('abstract_hierarchy');

const enoHierarchy = fs.readFileSync(path.join(__dirname, 'samples/abstract_hierarchy/hierarchy.eno'), 'utf-8');
const yamlHierarchy = fs.readFileSync(path.join(__dirname, 'samples/abstract_hierarchy/hierarchy.yaml'), 'utf-8');
const tomlHierarchy = fs.readFileSync(path.join(__dirname, 'samples/abstract_hierarchy/hierarchy.toml'), 'utf-8');

benchmark('enojs', enoVersion, () => eno.parse(enoHierarchy));
benchmark('js-yaml', jsYamlVersion, () => jsYaml.load(yamlHierarchy));
benchmark('toml', tomlVersion, () => toml.parse(tomlHierarchy));
benchmark('toml-j0.4', tomlJ04Version, () => tomlJ04.parse(tomlHierarchy));


scenario('invented_server_configuration');

const enoConfiguration = fs.readFileSync(path.join(__dirname, 'samples/invented_server_configuration/configuration.eno'), 'utf-8');
const yamlConfiguration = fs.readFileSync(path.join(__dirname, 'samples/invented_server_configuration/configuration.yaml'), 'utf-8');
const tomlConfiguration = fs.readFileSync(path.join(__dirname, 'samples/invented_server_configuration/configuration.toml'), 'utf-8');

benchmark('enojs', enoVersion, () => eno.parse(enoConfiguration));
benchmark('js-yaml', jsYamlVersion, () => jsYaml.load(yamlConfiguration));
benchmark('toml', tomlVersion, () => toml.parse(tomlConfiguration));
benchmark('toml-j0.4', tomlJ04Version, () => tomlJ04.parse(tomlConfiguration));


scenario('jekyll_post_example');

const enoPost = fs.readFileSync(path.join(__dirname, 'samples/jekyll_post_example/post.eno'), 'utf-8');
const tomlPost = fs.readFileSync(path.join(__dirname, 'samples/jekyll_post_example/post.toml'), 'utf-8');
const yamlPost = fs.readFileSync(path.join(__dirname, 'samples/jekyll_post_example/post.yaml'), 'utf-8');

benchmark('enojs', enoVersion, () => eno.parse(enoPost));
benchmark('front-matter', fmVersion, () => fm(mdPost));
benchmark('js-yaml', jsYamlVersion, () => jsYaml.load(yamlPost));
benchmark('toml', tomlVersion, () => toml.parse(tomlPost));
benchmark('toml-j0.4', tomlJ04Version, () => tomlJ04.parse(tomlPost));


scenario('journey_route_data');

const enoJourney = fs.readFileSync(path.join(__dirname, 'samples/journey_route_data/journey.eno'), 'utf-8');
const yamlJourney = fs.readFileSync(path.join(__dirname, 'samples/journey_route_data/journey.yaml'), 'utf-8');
const tomlJourney = fs.readFileSync(path.join(__dirname, 'samples/journey_route_data/journey.toml'), 'utf-8');

benchmark('enojs', enoVersion, () => eno.parse(enoJourney));
benchmark('js-yaml', jsYamlVersion, () => jsYaml.load(yamlJourney));
benchmark('toml', tomlVersion, () => toml.parse(tomlJourney));
benchmark('toml-j0.4', tomlJ04Version, () => tomlJ04.parse(tomlJourney));


scenario('yaml_invoice_example');

const enoInvoice = fs.readFileSync(path.join(__dirname, 'samples/yaml_invoice_example/invoice.eno'), 'utf-8');
const yamlInvoice = fs.readFileSync(path.join(__dirname, 'samples/yaml_invoice_example/invoice.yaml'), 'utf-8');
const tomlInvoice = fs.readFileSync(path.join(__dirname, 'samples/yaml_invoice_example/invoice.toml'), 'utf-8');

benchmark('enojs', enoVersion, () => eno.parse(enoInvoice));
benchmark('js-yaml', jsYamlVersion, () => jsYaml.load(yamlInvoice));
benchmark('toml', tomlVersion, () => toml.parse(tomlInvoice));
benchmark('toml-j0.4', tomlJ04Version, () => tomlJ04.parse(tomlInvoice));


fs.writeFileSync(path.join(__dirname, 'reports/javascript.eno'), report);
