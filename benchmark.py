import pkg_resources, time
from datetime import datetime

import enopy
ENOPY_VERSION = pkg_resources.get_distribution('enopy').version

import yaml
PYYAML_VERSION = pkg_resources.get_distribution('pyyaml').version

from ruamel.yaml import YAML
ruamel = YAML()
RUAMEL_YAML_VERSION = pkg_resources.get_distribution('ruamel.yaml').version

class PythonReport:
  ITERATIONS = 100000

  def __init__(self):
    self.report = f"# python\n\niterations: {self.ITERATIONS}\nevaluated: {str(datetime.now())}\n"

  def generate(self):
    self.scenario('abstract_hierarchy')

    with open('samples/abstract_hierarchy/hierarchy.eno') as file:
      eno_hierarchy = file.read()
    with open('samples/abstract_hierarchy/hierarchy.toml') as file:
      toml_hierarchy = file.read()
    with open('samples/abstract_hierarchy/hierarchy.yaml') as file:
      yaml_hierarchy = file.read()

    self.benchmark('enopy', ENOPY_VERSION, lambda: enopy.parse(eno_hierarchy))
    self.benchmark('pyyaml', PYYAML_VERSION, lambda: yaml.load(yaml_hierarchy), long_duration_compensation_factor=10)
    self.benchmark('ruamel.yaml', RUAMEL_YAML_VERSION, lambda: ruamel.load(yaml_hierarchy), long_duration_compensation_factor=10)


    self.scenario('invented_server_configuration')

    with open('samples/invented_server_configuration/configuration.eno') as file:
      eno_configuration = file.read()
    with open('samples/invented_server_configuration/configuration.toml') as file:
      toml_configuration = file.read()
    with open('samples/invented_server_configuration/configuration.yaml') as file:
      yaml_configuration = file.read()

    self.benchmark('enopy', ENOPY_VERSION, lambda: enopy.parse(eno_configuration))
    self.benchmark('pyyaml', PYYAML_VERSION, lambda: yaml.load(yaml_configuration), long_duration_compensation_factor=10)
    self.benchmark('ruamel.yaml', RUAMEL_YAML_VERSION, lambda: ruamel.load(yaml_configuration), long_duration_compensation_factor=10)


    self.scenario('jekyll_post_example')

    with open('samples/jekyll_post_example/post.eno') as file:
      eno_post = file.read()
    with open('samples/jekyll_post_example/post.toml') as file:
      toml_post = file.read()
    with open('samples/jekyll_post_example/post.yaml') as file:
      yaml_post = file.read()

    self.benchmark('enopy', ENOPY_VERSION, lambda: enopy.parse(eno_post))
    self.benchmark('pyyaml', PYYAML_VERSION, lambda: yaml.load(yaml_post), long_duration_compensation_factor=10)
    self.benchmark('ruamel.yaml', RUAMEL_YAML_VERSION, lambda: ruamel.load(yaml_post), long_duration_compensation_factor=10)


    self.scenario('journey_route_data')

    with open('samples/journey_route_data/journey.eno') as file:
      eno_journey = file.read()
    with open('samples/journey_route_data/journey.toml') as file:
      toml_journey = file.read()
    with open('samples/journey_route_data/journey.yaml') as file:
      yaml_journey = file.read()

    self.benchmark('enopy', ENOPY_VERSION, lambda: enopy.parse(eno_journey))
    self.benchmark('pyyaml', PYYAML_VERSION, lambda: yaml.load(yaml_journey), long_duration_compensation_factor=10)
    self.benchmark('ruamel.yaml', RUAMEL_YAML_VERSION, lambda: ruamel.load(yaml_journey), long_duration_compensation_factor=10)


    self.scenario('yaml_invoice_example')

    with open('samples/yaml_invoice_example/invoice.eno') as file:
      eno_invoice = file.read()
    with open('samples/yaml_invoice_example/invoice.toml') as file:
      toml_invoice = file.read()
    with open('samples/yaml_invoice_example/invoice.yaml') as file:
      yaml_invoice = file.read()

    self.benchmark('enopy', ENOPY_VERSION, lambda: enopy.parse(eno_invoice))
    self.benchmark('pyyaml', PYYAML_VERSION, lambda: yaml.load(yaml_invoice), long_duration_compensation_factor=10)
    self.benchmark('ruamel.yaml', RUAMEL_YAML_VERSION, lambda: ruamel.load(yaml_invoice), long_duration_compensation_factor=10)


    with open('reports/python.eno', 'w') as file:
      file.write(self.report)

  def scenario(self, file):
    print(file)

    self.report += f"\n## {file}\n\n"

  def benchmark(self, library, version, perform, long_duration_compensation_factor=None):
    print(library)

    if long_duration_compensation_factor:
      before = time.clock()
      for i in range(0, int(self.ITERATIONS / long_duration_compensation_factor)):
        perform()
      after = time.clock()

      duration = (after - before) * long_duration_compensation_factor
    else:
      before = time.clock()
      for i in range(0, self.ITERATIONS):
        perform()
      after = time.clock()

      duration = after - before

    self.report += f"{library} {version}".ljust(20) + ':' + f"{(duration):.3f}".rjust(12) + '\n'

report = PythonReport()
report.generate()
