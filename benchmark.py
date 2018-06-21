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
    self.scenario('yaml_invoice_example')

    with open('samples/yaml_invoice_example/invoice.eno') as file:
      eno_invoice = file.read()
    with open('samples/yaml_invoice_example/invoice.toml') as file:
      toml_invoice = file.read()
    with open('samples/yaml_invoice_example/invoice.yaml') as file:
      yaml_invoice = file.read()

    self.benchmark('enopy', ENOPY_VERSION, lambda: enopy.parse(eno_invoice))
    self.benchmark('pyyaml', PYYAML_VERSION, lambda: yaml.load(yaml_invoice))
    self.benchmark('ruamel.yaml', RUAMEL_YAML_VERSION, lambda: ruamel.load(yaml_invoice))

    self.scenario('jekyll_post_example')

    with open('samples/jekyll_post_example/post.eno') as file:
      eno_post = file.read()
    with open('samples/jekyll_post_example/post.toml') as file:
      toml_post = file.read()
    with open('samples/jekyll_post_example/post.yaml') as file:
      yaml_post = file.read()

    self.benchmark('enopy', ENOPY_VERSION, lambda: enopy.parse(eno_post))
    self.benchmark('pyyaml', PYYAML_VERSION, lambda: yaml.load(yaml_post))
    self.benchmark('ruamel.yaml', RUAMEL_YAML_VERSION, lambda: ruamel.load(yaml_post))

    with open('reports/python.eno', 'w') as file:
      file.write(self.report)

  def scenario(self, file):
    self.report += f"\n## {file}\n\n"

  def benchmark(self, library, version, perform):
    before = time.clock()
    for i in range(0, self.ITERATIONS):
      perform()
    after = time.clock()

    self.report += f"{library} {version}".ljust(20) + ':' + f"{(after - before):.3f}".rjust(12) + '\n'

report = PythonReport()
report.generate()
