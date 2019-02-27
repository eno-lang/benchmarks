const fs = require('fs');
const path = require('path');
const { performance } = require('perf_hooks');

const enolib = require('enolib');
const { boolean, date, datetime, float, integer } = require('enotype');
const enolibVersion = require('enolib/package').version;
const jsYaml = require('js-yaml');
const jsYamlVersion = require('js-yaml/package').version;
const toml = require('toml');
const tomlVersion = require('toml/package').version;
const tomlJ04 = require('toml-j0.4');
const tomlJ04Version = require('toml-j0.4/package').version;

const ITERATIONS = 100000;

enolib.register({ boolean, date, datetime, float, integer });

let enoInput, mdInput, tomlInput, yamlInput;

let report = `
# javascript

evaluated: ${(new Date()).toISOString().replace(/\.[0-9]{3}/, '')}
iterations: ${ITERATIONS}
runtime: node ${process.version} [${process.platform}-${process.arch}]
`.trimStart();

const scenario = (file) => {
  report += `\n## ${file}\n\n`;

  console.log(file);
};

const benchmark = (library, version, perform, iteration_cutback_factor = 1) => {
  const iterations = ITERATIONS / iteration_cutback_factor;

  const before = performance.now();
  for(let i = 0; i < iterations; i++)
    perform();
  const after = performance.now();

  const duration = ((after - before) / 1000.0);
  const durationNormalized = duration * iteration_cutback_factor;

  report += `${library} ${version}: ${durationNormalized}\n`;

  if(iteration_cutback_factor > 1) {
    console.log(`\x1b[33m${library} - ${iterations / 1000}k iterations => ${duration} seconds / ${durationNormalized} normalized seconds\x1b[0m`);
  } else {
    console.log(`${library} - ${iterations / 1000}k iterations => ${duration} seconds / ${durationNormalized} normalized seconds`);
  }
};


scenario('abstract_hierarchy');

const enoHierarchy = fs.readFileSync(path.join(__dirname, 'samples/abstract_hierarchy/hierarchy.eno'), 'utf-8');
const yamlHierarchy = fs.readFileSync(path.join(__dirname, 'samples/abstract_hierarchy/hierarchy.yaml'), 'utf-8');
const tomlHierarchy = fs.readFileSync(path.join(__dirname, 'samples/abstract_hierarchy/hierarchy.toml'), 'utf-8');

benchmark('enolib', enolibVersion, () => enolib.parse(enoHierarchy));
benchmark('enolib (with full validation)', enolibVersion, () => {
  const document = enolib.parse(enoHierarchy);
  const doc = document.section('doc');
  doc.list('colors').requiredStringValues();
  const traits = doc.fieldset('traits');
  traits.entry('tired').requiredStringValue();
  traits.entry('extroverted').requiredStringValue();
  traits.entry('funny').requiredStringValue();
  traits.entry('inventive').requiredStringValue();
  doc.list('things').requiredStringValues();
  const deep = doc.section('deep');
  deep.field('sea').requiredStringValue();
  const deeper = deep.section('deep');
  deeper.field('sea').requiredStringValue();
  const deepest = deeper.section('deep');
  deepest.field('sea').requiredStringValue();
});
benchmark('js-yaml', jsYamlVersion, () => jsYaml.load(yamlHierarchy));
benchmark('toml', tomlVersion, () => toml.parse(tomlHierarchy), 10);
benchmark('toml-j0.4', tomlJ04Version, () => tomlJ04.parse(tomlHierarchy));


scenario('content_heavy');

const enoContent = fs.readFileSync(path.join(__dirname, 'samples/content_heavy/content.eno'), 'utf-8');
const yamlContent = fs.readFileSync(path.join(__dirname, 'samples/content_heavy/content.yaml'), 'utf-8');
const tomlContent = fs.readFileSync(path.join(__dirname, 'samples/content_heavy/content.toml'), 'utf-8');

benchmark('enolib', enolibVersion, () => enolib.parse(enoContent));
benchmark('enolib (with full validation)', enolibVersion, () => {
  enolib.parse(enoContent).field('content').requiredStringValue();
});
benchmark('js-yaml', jsYamlVersion, () => jsYaml.load(yamlContent));
benchmark('toml', tomlVersion, () => toml.parse(tomlContent), 100);
benchmark('toml-j0.4', tomlJ04Version, () => tomlJ04.parse(tomlContent), 10);


scenario('invented_server_configuration');

const enoConfiguration = fs.readFileSync(path.join(__dirname, 'samples/invented_server_configuration/configuration.eno'), 'utf-8');
const yamlConfiguration = fs.readFileSync(path.join(__dirname, 'samples/invented_server_configuration/configuration.yaml'), 'utf-8');
const tomlConfiguration = fs.readFileSync(path.join(__dirname, 'samples/invented_server_configuration/configuration.toml'), 'utf-8');

benchmark('enolib', enolibVersion, () => enolib.parse(enoConfiguration));
benchmark('enolib (with full validation)', enolibVersion, () => {
  const document = enolib.parse(enoConfiguration);
  for(const environment of document.elements()) {
    for(const server of environment.elements()) {
      const conf = server.fieldset('conf');
      conf.entry('ruby').requiredBooleanValue();
      conf.entry('python').requiredBooleanValue();
      server.field('clean').requiredBooleanValue();
      server.list('steps').requiredStringValues();
    }
  }
});
benchmark('js-yaml', jsYamlVersion, () => jsYaml.load(yamlConfiguration));
benchmark('toml', tomlVersion, () => toml.parse(tomlConfiguration), 10);
benchmark('toml-j0.4', tomlJ04Version, () => tomlJ04.parse(tomlConfiguration));


scenario('jekyll_post_example');

const enoPost = fs.readFileSync(path.join(__dirname, 'samples/jekyll_post_example/post.eno'), 'utf-8');
const tomlPost = fs.readFileSync(path.join(__dirname, 'samples/jekyll_post_example/post.toml'), 'utf-8');
const yamlPost = fs.readFileSync(path.join(__dirname, 'samples/jekyll_post_example/post.yaml'), 'utf-8');

benchmark('enolib', enolibVersion, () => enolib.parse(enoPost));
benchmark('enolib (with full validation)', enolibVersion, () => {
  const document = enolib.parse(enoPost);
  document.field('layout').requiredStringValue();
  document.field('title').requiredStringValue();
  document.field('date').requiredDatetimeValue();
  document.field('categories').requiredStringValue();
  document.field('markdown').requiredStringValue();
});
benchmark('js-yaml', jsYamlVersion, () => jsYaml.load(yamlPost));
benchmark('toml', tomlVersion, () => toml.parse(tomlPost), 10);
benchmark('toml-j0.4', tomlJ04Version, () => tomlJ04.parse(tomlPost));


scenario('journey_route_data');

const enoJourney = fs.readFileSync(path.join(__dirname, 'samples/journey_route_data/journey.eno'), 'utf-8');
const yamlJourney = fs.readFileSync(path.join(__dirname, 'samples/journey_route_data/journey.yaml'), 'utf-8');
const tomlJourney = fs.readFileSync(path.join(__dirname, 'samples/journey_route_data/journey.toml'), 'utf-8');

benchmark('enolib', enolibVersion, () => enolib.parse(enoJourney));
benchmark('enolib (with full validation)', enolibVersion, () => {
  const document = enolib.parse(enoJourney);
  document.field('title').requiredStringValue();
  document.field('date').requiredDateValue();
  document.field('time').requiredStringValue();
  document.field('abstract').requiredStringValue();
  for(const checkpoint of document.sections('checkpoint')) {
    checkpoint.field('coordinates').requiredStringValue();
    checkpoint.field('hint').optionalStringValue();
    checkpoint.field('special').optionalStringValue();
    checkpoint.field('location').requiredStringValue();
    const safezone = checkpoint.optionalSection('safezone');
    if(safezone) {
      safezone.field('shape').requiredStringValue();
      safezone.field('center').requiredStringValue();
      safezone.field('radius').requiredIntegerValue();
    }
  }
});
benchmark('js-yaml', jsYamlVersion, () => jsYaml.load(yamlJourney));
benchmark('toml', tomlVersion, () => toml.parse(tomlJourney), 10);
benchmark('toml-j0.4', tomlJ04Version, () => tomlJ04.parse(tomlJourney));


scenario('yaml_invoice_example');

const enoInvoice = fs.readFileSync(path.join(__dirname, 'samples/yaml_invoice_example/invoice.eno'), 'utf-8');
const yamlInvoice = fs.readFileSync(path.join(__dirname, 'samples/yaml_invoice_example/invoice.yaml'), 'utf-8');
const tomlInvoice = fs.readFileSync(path.join(__dirname, 'samples/yaml_invoice_example/invoice.toml'), 'utf-8');

benchmark('enolib', enolibVersion, () => enolib.parse(enoInvoice));
benchmark('enolib (with full validation)', enolibVersion, () => {
  const document = enolib.parse(enoInvoice);
  document.field('invoice').requiredIntegerValue();
  document.field('date').requiredDateValue();
  document.field('tax').requiredFloatValue();
  document.field('total').requiredFloatValue();
  document.field('comments').requiredStringValue();
  for(const type of ['bill-to', 'ship-to']) {
    const contact = document.section(type);
    contact.field('given').requiredStringValue();
    contact.field('family').requiredStringValue();
    const address = contact.section('address');
    address.field('lines').requiredStringValue();
    address.field('city').requiredStringValue();
    address.field('state').requiredStringValue();
    address.field('postal').requiredStringValue();
  }
  for(const product of document.sections('product')) {
    product.field('sku').requiredStringValue();
    product.field('quantity').requiredIntegerValue();
    product.field('description').requiredStringValue();
    product.field('price').requiredStringValue();
  }
});
benchmark('js-yaml', jsYamlVersion, () => jsYaml.load(yamlInvoice));
benchmark('toml', tomlVersion, () => toml.parse(tomlInvoice));
benchmark('toml-j0.4', tomlJ04Version, () => tomlJ04.parse(tomlInvoice));


fs.writeFileSync(path.join(__dirname, 'reports/javascript.eno'), report);
