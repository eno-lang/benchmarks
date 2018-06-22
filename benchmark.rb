require 'benchmark'

require 'enorb'
ENORB_VERSION = Gem.loaded_specs['enorb'].version

# require 'safe_yaml/load' ERRORS
# SAFE_YAML_VERSION = Gem.loaded_specs['safe_yaml'].version

require 'toml'
TOML_VERSION = Gem.loaded_specs['toml'].version

require 'toml-rb'
TOML_RB_VERSION = Gem.loaded_specs['toml-rb'].version

require 'tomlrb'
TOMLRB_VERSION = Gem.loaded_specs['tomlrb'].version

require 'yaml'
YAML_VERSION = RUBY_VERSION

class RubyReport
  ITERATIONS = 100000

  def initialize
    @report = "# ruby\n\niterations: #{ITERATIONS}\nevaluated: #{Time.now}\n"
  end

  def benchmark(library, version)
    result = Benchmark.measure do
      ITERATIONS.times do
        yield
      end
    end

    @report += "#{library} #{version}".ljust(20) + ':' +  ('%.3f' % result.total).rjust(12) + "\n"
  end

  def generate
    scenario('abstract_hierarchy')

    eno_hierarchy = File.read('samples/abstract_hierarchy/hierarchy.eno')
    toml_hierarchy = File.read('samples/abstract_hierarchy/hierarchy.toml')
    yaml_hierarchy = File.read('samples/abstract_hierarchy/hierarchy.yaml')

    benchmark('enorb', ENORB_VERSION) { Eno.parse(eno_hierarchy) }
    # benchmark('safe_yaml', SAFE_YAML_VERSION) { SafeYAML.load(yaml_hierarchy) }
    benchmark('toml', TOML_VERSION) { TOML.load(toml_hierarchy) }
    benchmark('toml-rb', TOML_RB_VERSION) { TomlRB.parse(toml_hierarchy) }
    benchmark('tomlrb', TOMLRB_VERSION) { Tomlrb.parse(toml_hierarchy) }
    benchmark('yaml', YAML_VERSION) { YAML.load(yaml_hierarchy) }


    scenario('invented_server_configuration')

    eno_configuration = File.read('samples/invented_server_configuration/configuration.eno')
    toml_configuration = File.read('samples/invented_server_configuration/configuration.toml')
    yaml_configuration = File.read('samples/invented_server_configuration/configuration.yaml')

    benchmark('enorb', ENORB_VERSION) { Eno.parse(eno_configuration) }
    # benchmark('safe_yaml', SAFE_YAML_VERSION) { SafeYAML.load(yaml_configuration) }
    benchmark('toml', TOML_VERSION) { TOML.load(toml_configuration) }
    benchmark('toml-rb', TOML_RB_VERSION) { TomlRB.parse(toml_configuration) }
    benchmark('tomlrb', TOMLRB_VERSION) { Tomlrb.parse(toml_configuration) }
    benchmark('yaml', YAML_VERSION) { YAML.load(yaml_configuration) }


    scenario('jekyll_post_example')

    eno_post = File.read('samples/jekyll_post_example/post.eno')
    toml_post = File.read('samples/jekyll_post_example/post.toml')
    yaml_post = File.read('samples/jekyll_post_example/post.yaml')

    benchmark('enorb', ENORB_VERSION) { Eno.parse(eno_post) }
    # benchmark('safe_yaml', SAFE_YAML_VERSION) { SafeYAML.load(yaml_post) }
    # benchmark('toml', TOML_VERSION) { TOML.load(toml_post) } ERRORS
    benchmark('toml-rb', TOML_RB_VERSION) { TomlRB.parse(toml_post) }
    benchmark('tomlrb', TOMLRB_VERSION) { Tomlrb.parse(toml_post) }
    benchmark('yaml', YAML_VERSION) { YAML.load(yaml_post) }


    scenario('journey_route_data')

    eno_journey = File.read('samples/journey_route_data/journey.eno')
    toml_journey = File.read('samples/journey_route_data/journey.toml')
    yaml_journey = File.read('samples/journey_route_data/journey.yaml')

    benchmark('enorb', ENORB_VERSION) { Eno.parse(eno_journey) }
    # benchmark('safe_yaml', SAFE_YAML_VERSION) { SafeYAML.load(yaml_journey) }
    benchmark('toml', TOML_VERSION) { TOML.load(toml_journey) }
    benchmark('toml-rb', TOML_RB_VERSION) { TomlRB.parse(toml_journey) }
    benchmark('tomlrb', TOMLRB_VERSION) { Tomlrb.parse(toml_journey) }
    benchmark('yaml', YAML_VERSION) { YAML.load(yaml_journey) }


    scenario('yaml_invoice_example')

    eno_invoice = File.read('samples/yaml_invoice_example/invoice.eno')
    toml_invoice = File.read('samples/yaml_invoice_example/invoice.toml')
    yaml_invoice = File.read('samples/yaml_invoice_example/invoice.yaml')

    benchmark('enorb', ENORB_VERSION) { Eno.parse(eno_invoice) }
    # benchmark('safe_yaml', SAFE_YAML_VERSION) { SafeYAML.load(yaml_invoice) }
    # benchmark('toml', TOML_VERSION) { TOML.load(toml_invoice) }
    benchmark('toml-rb', TOML_RB_VERSION) { TomlRB.parse(toml_invoice) }
    benchmark('tomlrb', TOMLRB_VERSION) { Tomlrb.parse(toml_invoice) }
    benchmark('yaml', YAML_VERSION) { YAML.load(yaml_invoice) }

    File.write('reports/ruby.eno', @report)
  end

  def scenario(file)
    @report += "\n## #{file}\n\n"
  end
end

report = RubyReport.new
report.generate
