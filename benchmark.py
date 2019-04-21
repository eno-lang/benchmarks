import pkg_resources
from datetime import datetime as python_datetime, timezone
from platform import platform, python_implementation, python_version
from timeit import default_timer

import enolib
ENOLIB_VERSION = pkg_resources.get_distribution('enolib').version

from enotype import boolean, date, datetime, float, integer
enolib.register(boolean, date, datetime, float, integer)

import qtoml
QTOML_VERSION = pkg_resources.get_distribution('qtoml').version

import toml
TOML_VERSION = pkg_resources.get_distribution('toml').version

import tomlkit
TOMLKIT_VERSION = pkg_resources.get_distribution('tomlkit').version

import yaml
PYYAML_VERSION = pkg_resources.get_distribution('pyyaml').version

from ruamel.yaml import YAML
ruamel = YAML(typ='safe')
RUAMEL_YAML_VERSION = pkg_resources.get_distribution('ruamel.yaml').version

class PythonReport:
    ITERATIONS = 100000

    def __init__(self):
        self.report = f"""
evaluated: {python_datetime.utcnow().replace(microsecond=0, tzinfo=timezone.utc).isoformat()}
iterations: {self.ITERATIONS}
runtime: {python_implementation()} {python_version()} [{platform()}]

# scenarios
        """.lstrip()

    def generate(self):
        self.scenario('abstract_hierarchy')

        with open('samples/abstract_hierarchy/hierarchy.eno') as file:
            eno_hierarchy = file.read()
        with open('samples/abstract_hierarchy/hierarchy.toml') as file:
            toml_hierarchy = file.read()
        with open('samples/abstract_hierarchy/hierarchy.yaml') as file:
            yaml_hierarchy = file.read()

        def eno_hierarchy_query():
            document = enolib.parse(eno_hierarchy)
            doc = document.section('doc')
            doc.list('colors').required_string_values()
            traits = doc.fieldset('traits')
            traits.entry('tired').required_string_value()
            traits.entry('extroverted').required_string_value()
            traits.entry('funny').required_string_value()
            traits.entry('inventive').required_string_value()
            doc.list('things').required_string_values()
            deep = doc.section('deep')
            deep.field('sea').required_string_value()
            deeper = deep.section('deep')
            deeper.field('sea').required_string_value()
            deepest = deeper.section('deep')
            deepest.field('sea').required_string_value()

        self.benchmark('[-] enolib', ENOLIB_VERSION, lambda: enolib.parse(eno_hierarchy))
        self.benchmark('[✓] enolib', ENOLIB_VERSION, eno_hierarchy_query)
        self.benchmark('[-] pyyaml (FullLoader)', PYYAML_VERSION, lambda: yaml.load(yaml_hierarchy, Loader=yaml.FullLoader), 10)
        self.benchmark('[-] pyyaml (CLoader)', PYYAML_VERSION, lambda: yaml.load(yaml_hierarchy, Loader=yaml.CLoader))
        self.benchmark('[-] qtoml', QTOML_VERSION, lambda: qtoml.loads(toml_hierarchy))
        self.benchmark('[-] ruamel.yaml', RUAMEL_YAML_VERSION, lambda: ruamel.load(yaml_hierarchy))
        self.benchmark('[-] toml', TOML_VERSION, lambda: toml.loads(toml_hierarchy))
        self.benchmark('[-] tomlkit', TOMLKIT_VERSION, lambda: tomlkit.parse(toml_hierarchy), 10)


        self.scenario('content_heavy')

        with open('samples/content_heavy/content.eno') as file:
            eno_content = file.read()
        with open('samples/content_heavy/content.toml') as file:
            toml_content = file.read()
        with open('samples/content_heavy/content.yaml') as file:
            yaml_content = file.read()

        def eno_content_query():
            enolib.parse(eno_content).field('content').required_string_value()

        self.benchmark('[-] enolib', ENOLIB_VERSION, lambda: enolib.parse(eno_content))
        self.benchmark('[✓] enolib', ENOLIB_VERSION, eno_content_query)
        self.benchmark('[-] pyyaml (FullLoader)', PYYAML_VERSION, lambda: yaml.load(yaml_content, Loader=yaml.FullLoader), 100)
        self.benchmark('[-] pyyaml (CLoader)', PYYAML_VERSION, lambda: yaml.load(yaml_content, Loader=yaml.CLoader))
        self.benchmark('[-] qtoml', QTOML_VERSION, lambda: qtoml.loads(toml_content), 100)
        self.benchmark('[-] ruamel.yaml', RUAMEL_YAML_VERSION, lambda: ruamel.load(yaml_content))
        self.benchmark('[-] toml', TOML_VERSION, lambda: toml.loads(toml_content), 10)
        self.benchmark('[-] tomlkit', TOMLKIT_VERSION, lambda: tomlkit.parse(toml_content), 100)


        self.scenario('invented_server_configuration')

        with open('samples/invented_server_configuration/configuration.eno') as file:
            eno_configuration = file.read()
        with open('samples/invented_server_configuration/configuration.toml') as file:
            toml_configuration = file.read()
        with open('samples/invented_server_configuration/configuration.yaml') as file:
            yaml_configuration = file.read()

        def eno_configuration_query():
            document = enolib.parse(eno_configuration)
            for environment in document.sections():
                for server in environment.sections():
                    conf = server.fieldset('conf')
                    conf.entry('ruby').required_boolean_value()
                    conf.entry('python').required_boolean_value()
                    server.field('clean').required_boolean_value()
                    server.list('steps').required_string_values()

        self.benchmark('[-] enolib', ENOLIB_VERSION, lambda: enolib.parse(eno_configuration))
        self.benchmark('[✓] enolib', ENOLIB_VERSION, eno_configuration_query)
        self.benchmark('[-] pyyaml (FullLoader)', PYYAML_VERSION, lambda: yaml.load(yaml_configuration, Loader=yaml.FullLoader), 10)
        self.benchmark('[-] pyyaml (CLoader)', PYYAML_VERSION, lambda: yaml.load(yaml_configuration, Loader=yaml.CLoader))
        self.benchmark('[-] qtoml', QTOML_VERSION, lambda: qtoml.loads(toml_configuration))
        self.benchmark('[-] ruamel.yaml', RUAMEL_YAML_VERSION, lambda: ruamel.load(yaml_configuration))
        self.benchmark('[-] toml', TOML_VERSION, lambda: toml.loads(toml_configuration))
        self.benchmark('[-] tomlkit', TOMLKIT_VERSION, lambda: tomlkit.parse(toml_configuration), 10)

        self.scenario('jekyll_post_example')

        with open('samples/jekyll_post_example/post.eno') as file:
            eno_post = file.read()
        with open('samples/jekyll_post_example/post.toml') as file:
            toml_post = file.read()
        with open('samples/jekyll_post_example/post.yaml') as file:
            yaml_post = file.read()

        def eno_post_query():
            document = enolib.parse(eno_post)
            document.field('layout').required_string_value()
            document.field('title').required_string_value()
            document.field('date').required_datetime_value()
            document.field('categories').required_string_value()
            document.field('markdown').required_string_value()

        self.benchmark('[-] enolib', ENOLIB_VERSION, lambda: enolib.parse(eno_post))
        self.benchmark('[✓] enolib', ENOLIB_VERSION, eno_post_query)
        self.benchmark('[-] pyyaml (FullLoader)', PYYAML_VERSION, lambda: yaml.load(yaml_post, Loader=yaml.FullLoader), 10)
        self.benchmark('[-] pyyaml (CLoader)', PYYAML_VERSION, lambda: yaml.load(yaml_post, Loader=yaml.CLoader))
        self.benchmark('[-] qtoml', QTOML_VERSION, lambda: qtoml.loads(toml_post))
        self.benchmark('[-] ruamel.yaml', RUAMEL_YAML_VERSION, lambda: ruamel.load(yaml_post))
        self.benchmark('[-] toml', TOML_VERSION, lambda: toml.loads(toml_post))
        self.benchmark('[-] tomlkit', TOMLKIT_VERSION, lambda: tomlkit.parse(toml_post), 10)

        self.scenario('journey_route_data')

        with open('samples/journey_route_data/journey.eno') as file:
            eno_journey = file.read()
        with open('samples/journey_route_data/journey.toml') as file:
            toml_journey = file.read()
        with open('samples/journey_route_data/journey.yaml') as file:
            yaml_journey = file.read()

        def eno_journey_query():
            document = enolib.parse(eno_journey)
            document.field('title').required_string_value()
            document.field('date').required_date_value()
            document.field('time').required_string_value()
            document.field('abstract').required_string_value()
            for checkpoint in document.sections('checkpoint'):
                checkpoint.field('coordinates').required_string_value()
                checkpoint.field('hint').optional_string_value()
                checkpoint.field('special').optional_string_value()
                checkpoint.field('location').required_string_value()
                safezone = checkpoint.optional_section('safezone')
                if safezone:
                    safezone.field('shape').required_string_value()
                    safezone.field('center').required_string_value()
                    safezone.field('radius').required_integer_value()

        self.benchmark('[-] enolib', ENOLIB_VERSION, lambda: enolib.parse(eno_journey))
        self.benchmark('[✓] enolib', ENOLIB_VERSION, eno_journey_query)
        self.benchmark('[-] pyyaml (FullLoader)', PYYAML_VERSION, lambda: yaml.load(yaml_journey, Loader=yaml.FullLoader), 10)
        self.benchmark('[-] pyyaml (CLoader)', PYYAML_VERSION, lambda: yaml.load(yaml_journey, Loader=yaml.CLoader))
        self.benchmark('[-] qtoml', QTOML_VERSION, lambda: qtoml.loads(toml_journey), 10)
        self.benchmark('[-] ruamel.yaml', RUAMEL_YAML_VERSION, lambda: ruamel.load(yaml_journey), 10)
        self.benchmark('[-] toml', TOML_VERSION, lambda: toml.loads(toml_journey))
        self.benchmark('[-] tomlkit', TOMLKIT_VERSION, lambda: tomlkit.parse(toml_journey), 10)

        self.scenario('yaml_invoice_example')

        with open('samples/yaml_invoice_example/invoice.eno') as file:
            eno_invoice = file.read()
        with open('samples/yaml_invoice_example/invoice.toml') as file:
            toml_invoice = file.read()
        with open('samples/yaml_invoice_example/invoice.yaml') as file:
            yaml_invoice = file.read()

        def eno_invoice_query():
            document = enolib.parse(eno_invoice)
            document.field('invoice').required_integer_value()
            document.field('date').required_date_value()
            document.field('tax').required_float_value()
            document.field('total').required_float_value()
            document.field('comments').required_string_value()
            for type in ['bill-to', 'ship-to']:
                contact = document.section(type)
                contact.field('given').required_string_value()
                contact.field('family').required_string_value()
                address = contact.section('address')
                address.field('lines').required_string_value()
                address.field('city').required_string_value()
                address.field('state').required_string_value()
                address.field('postal').required_string_value()
            for product in document.sections('product'):
                product.field('sku').required_string_value()
                product.field('quantity').required_integer_value()
                product.field('description').required_string_value()
                product.field('price').required_string_value()

        self.benchmark('[-] enolib', ENOLIB_VERSION, lambda: enolib.parse(eno_invoice))
        self.benchmark('[✓] enolib', ENOLIB_VERSION, eno_invoice_query)
        self.benchmark('[-] pyyaml (FullLoader)', PYYAML_VERSION, lambda: yaml.load(yaml_invoice, Loader=yaml.FullLoader), 10)
        self.benchmark('[-] pyyaml (CLoader)', PYYAML_VERSION, lambda: yaml.load(yaml_invoice, Loader=yaml.CLoader))
        self.benchmark('[-] qtoml', QTOML_VERSION, lambda: qtoml.loads(toml_invoice), 10)
        self.benchmark('[-] ruamel.yaml', RUAMEL_YAML_VERSION, lambda: ruamel.load(yaml_invoice))
        self.benchmark('[-] toml', TOML_VERSION, lambda: toml.loads(toml_invoice))
        self.benchmark('[-] tomlkit', TOMLKIT_VERSION, lambda: tomlkit.parse(toml_invoice), 10)

        with open('reports/python.eno', 'w') as file:
            file.write(self.report)

    def scenario(self, file):
        self.report += f"\n{file}:\n"

        print(file)

    def benchmark(self, library, version, perform, iteration_cutback_factor=1):
        iterations = int(self.ITERATIONS / iteration_cutback_factor)

        before = default_timer()
        for i in range(0, iterations):
            perform()
        after = default_timer()

        duration = after - before
        duration_normalized = (after - before) * iteration_cutback_factor

        self.report += f"{library} {version} = {duration_normalized}\n"

        if iteration_cutback_factor > 1:
            print(f"\x1b[33m{library} - {int(iterations/1000)}k iterations => {duration} seconds / {duration_normalized} normalized seconds\x1b[0m")
        else:
            print(f"{library} - {int(iterations/1000)}k iterations => {duration} seconds / {duration_normalized} normalized seconds")

report = PythonReport()
report.generate()
