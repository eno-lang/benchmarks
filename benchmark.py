import pkg_resources, time
from datetime import datetime, timezone
from platform import platform, python_implementation, python_version

import enopy
ENOPY_VERSION = pkg_resources.get_distribution('enopy').version

import yaml
PYYAML_VERSION = pkg_resources.get_distribution('pyyaml').version

from ruamel.yaml import YAML
ruamel = YAML(typ='safe')
RUAMEL_YAML_VERSION = pkg_resources.get_distribution('ruamel.yaml').version

class PythonReport:
  ITERATIONS = 100000

  def __init__(self):
    self.report = f"""
# python

evaluated: {datetime.utcnow().replace(microsecond=0, tzinfo=timezone.utc).isoformat()}
iterations: {self.ITERATIONS}
runtime: {python_implementation()} {python_version()} [{platform()}]
    """.lstrip()

  def generate(self):
    self.scenario('abstract_hierarchy')

    with open('samples/abstract_hierarchy/hierarchy.eno') as file:
      eno_hierarchy = file.read()
    with open('samples/abstract_hierarchy/hierarchy.toml') as file:
      toml_hierarchy = file.read()
    with open('samples/abstract_hierarchy/hierarchy.yaml') as file:
      yaml_hierarchy = file.read()

    self.benchmark('enopy', ENOPY_VERSION, lambda: enopy.parse(eno_hierarchy))
    self.benchmark('pyyaml', PYYAML_VERSION, lambda: yaml.load(yaml_hierarchy), 10)
    self.benchmark('ruamel.yaml', RUAMEL_YAML_VERSION, lambda: ruamel.load(yaml_hierarchy))


    self.scenario('content_heavy')

    with open('samples/content_heavy/content.eno') as file:
      eno_content = file.read()
    with open('samples/content_heavy/content.toml') as file:
      toml_content = file.read()
    with open('samples/content_heavy/content.yaml') as file:
      yaml_content = file.read()

    self.benchmark('enopy', ENOPY_VERSION, lambda: enopy.parse(eno_content))
    self.benchmark('pyyaml', PYYAML_VERSION, lambda: yaml.load(yaml_content), 100)
    self.benchmark('ruamel.yaml', RUAMEL_YAML_VERSION, lambda: ruamel.load(yaml_content))


    self.scenario('invented_server_configuration')

    with open('samples/invented_server_configuration/configuration.eno') as file:
      eno_configuration = file.read()
    with open('samples/invented_server_configuration/configuration.toml') as file:
      toml_configuration = file.read()
    with open('samples/invented_server_configuration/configuration.yaml') as file:
      yaml_configuration = file.read()

    self.benchmark('enopy', ENOPY_VERSION, lambda: enopy.parse(eno_configuration))
    self.benchmark('pyyaml', PYYAML_VERSION, lambda: yaml.load(yaml_configuration), 10)
    self.benchmark('ruamel.yaml', RUAMEL_YAML_VERSION, lambda: ruamel.load(yaml_configuration))


    self.scenario('jekyll_post_example')

    with open('samples/jekyll_post_example/post.eno') as file:
      eno_post = file.read()
    with open('samples/jekyll_post_example/post.toml') as file:
      toml_post = file.read()
    with open('samples/jekyll_post_example/post.yaml') as file:
      yaml_post = file.read()

    self.benchmark('enopy', ENOPY_VERSION, lambda: enopy.parse(eno_post))
    self.benchmark('pyyaml', PYYAML_VERSION, lambda: yaml.load(yaml_post), 10)
    self.benchmark('ruamel.yaml', RUAMEL_YAML_VERSION, lambda: ruamel.load(yaml_post))


    self.scenario('journey_route_data')

    with open('samples/journey_route_data/journey.eno') as file:
      eno_journey = file.read()
    with open('samples/journey_route_data/journey.toml') as file:
      toml_journey = file.read()
    with open('samples/journey_route_data/journey.yaml') as file:
      yaml_journey = file.read()

    self.benchmark('enopy', ENOPY_VERSION, lambda: enopy.parse(eno_journey))
    self.benchmark('pyyaml', PYYAML_VERSION, lambda: yaml.load(yaml_journey), 10)
    self.benchmark('ruamel.yaml', RUAMEL_YAML_VERSION, lambda: ruamel.load(yaml_journey))


    self.scenario('yaml_invoice_example')

    with open('samples/yaml_invoice_example/invoice.eno') as file:
      eno_invoice = file.read()
    with open('samples/yaml_invoice_example/invoice.toml') as file:
      toml_invoice = file.read()
    with open('samples/yaml_invoice_example/invoice.yaml') as file:
      yaml_invoice = file.read()

    self.benchmark('enopy', ENOPY_VERSION, lambda: enopy.parse(eno_invoice))
    self.benchmark('pyyaml', PYYAML_VERSION, lambda: yaml.load(yaml_invoice), 10)
    self.benchmark('ruamel.yaml', RUAMEL_YAML_VERSION, lambda: ruamel.load(yaml_invoice))


    with open('reports/python.eno', 'w') as file:
      file.write(self.report)

  def scenario(self, file):
    self.report += f"\n## {file}\n\n"

    print(file)

  def benchmark(self, library, version, perform, iteration_cutback_factor=1):
    iterations = int(self.ITERATIONS / iteration_cutback_factor)

    before = time.clock()
    for i in range(0, iterations):
      perform()
    after = time.clock()

    duration = after - before
    duration_normalized = (after - before) * iteration_cutback_factor

    self.report += f"{library} {version}: {duration_normalized}\n"

    if iteration_cutback_factor > 1:
      print(f"\x1b[33m{library} - {int(iterations/1000)}k iterations => {duration} seconds / {duration_normalized} normalized seconds\x1b[0m")
    else:
      print(f"{library} - {int(iterations/1000)}k iterations => {duration} seconds / {duration_normalized} normalized seconds")

report = PythonReport()
report.generate()
