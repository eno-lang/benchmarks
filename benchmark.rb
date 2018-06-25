require 'benchmark'

require 'enorb'
ENORB_VERSION = Gem.loaded_specs['enorb'].version

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

  def benchmark(library, version, iteration_cutback_factor = 1)
    iterations = (ITERATIONS / iteration_cutback_factor).to_i

    result = Benchmark.measure do
      iterations.times { yield }
    end

    duration = result.total
    duration_normalized = duration * iteration_cutback_factor

    @report += "#{library} #{version}: #{duration_normalized}\n"

    if iteration_cutback_factor > 1
      puts "\x1b[33m#{library} - #{iterations/1000}k iterations => #{duration} seconds / #{duration_normalized} normalized seconds\x1b[0m"
    else
      puts "#{library} - #{iterations/1000}k iterations => #{duration} seconds / #{duration_normalized} normalized seconds"
    end
  end

  def generate
    scenario('abstract_hierarchy')

    eno_hierarchy = File.read('samples/abstract_hierarchy/hierarchy.eno')
    toml_hierarchy = File.read('samples/abstract_hierarchy/hierarchy.toml')
    yaml_hierarchy = File.read('samples/abstract_hierarchy/hierarchy.yaml')

    benchmark('enorb', ENORB_VERSION) { Eno.parse(eno_hierarchy) }
    benchmark('toml', TOML_VERSION, 10) { TOML.load(toml_hierarchy) }
    benchmark('toml-rb', TOML_RB_VERSION, 10) { TomlRB.parse(toml_hierarchy) }
    benchmark('tomlrb', TOMLRB_VERSION) { Tomlrb.parse(toml_hierarchy) }
    benchmark('yaml', YAML_VERSION) { YAML.load(yaml_hierarchy) }


    scenario('content_heavy')

    eno_content = File.read('samples/content_heavy/content.eno')
    toml_content = File.read('samples/content_heavy/content.toml')
    yaml_content = File.read('samples/content_heavy/content.yaml')

    benchmark('enorb', ENORB_VERSION) { Eno.parse(eno_content) }
    # benchmark('toml', TOML_VERSION, 100) { TOML.load(toml_content) } ERRORS
    benchmark('toml-rb', TOML_RB_VERSION, 100) { TomlRB.parse(toml_content) }
    benchmark('tomlrb', TOMLRB_VERSION, 10) { Tomlrb.parse(toml_content) }
    benchmark('yaml', YAML_VERSION, 10) { YAML.load(yaml_content) }


    scenario('invented_server_configuration')

    eno_configuration = File.read('samples/invented_server_configuration/configuration.eno')
    toml_configuration = File.read('samples/invented_server_configuration/configuration.toml')
    yaml_configuration = File.read('samples/invented_server_configuration/configuration.yaml')

    benchmark('enorb', ENORB_VERSION) { Eno.parse(eno_configuration) }
    benchmark('toml', TOML_VERSION, 100) { TOML.load(toml_configuration) }
    benchmark('toml-rb', TOML_RB_VERSION, 10) { TomlRB.parse(toml_configuration) }
    benchmark('tomlrb', TOMLRB_VERSION) { Tomlrb.parse(toml_configuration) }
    benchmark('yaml', YAML_VERSION) { YAML.load(yaml_configuration) }


    scenario('jekyll_post_example')

    eno_post = File.read('samples/jekyll_post_example/post.eno')
    toml_post = File.read('samples/jekyll_post_example/post.toml')
    yaml_post = File.read('samples/jekyll_post_example/post.yaml')

    benchmark('enorb', ENORB_VERSION) { Eno.parse(eno_post) }
    # benchmark('toml', TOML_VERSION, 100) { TOML.load(toml_post) } ERRORS
    benchmark('toml-rb', TOML_RB_VERSION, 10) { TomlRB.parse(toml_post) }
    benchmark('tomlrb', TOMLRB_VERSION) { Tomlrb.parse(toml_post) }
    benchmark('yaml', YAML_VERSION) { YAML.load(yaml_post) }


    scenario('journey_route_data')

    eno_journey = File.read('samples/journey_route_data/journey.eno')
    toml_journey = File.read('samples/journey_route_data/journey.toml')
    yaml_journey = File.read('samples/journey_route_data/journey.yaml')

    benchmark('enorb', ENORB_VERSION) { Eno.parse(eno_journey) }
    benchmark('toml', TOML_VERSION, 100) { TOML.load(toml_journey) }
    benchmark('toml-rb', TOML_RB_VERSION, 10) { TomlRB.parse(toml_journey) }
    benchmark('tomlrb', TOMLRB_VERSION) { Tomlrb.parse(toml_journey) }
    benchmark('yaml', YAML_VERSION) { YAML.load(yaml_journey) }


    scenario('yaml_invoice_example')

    eno_invoice = File.read('samples/yaml_invoice_example/invoice.eno')
    toml_invoice = File.read('samples/yaml_invoice_example/invoice.toml')
    yaml_invoice = File.read('samples/yaml_invoice_example/invoice.yaml')

    benchmark('enorb', ENORB_VERSION) { Eno.parse(eno_invoice) }
    # benchmark('toml', TOML_VERSION) { TOML.load(toml_invoice) } ERRORS
    benchmark('toml-rb', TOML_RB_VERSION, 10) { TomlRB.parse(toml_invoice) }
    benchmark('tomlrb', TOMLRB_VERSION) { Tomlrb.parse(toml_invoice) }
    benchmark('yaml', YAML_VERSION) { YAML.load(yaml_invoice) }

    File.write('reports/ruby.eno', @report)
  end

  def scenario(file)
    @report += "\n## #{file}\n\n"
    puts file
  end
end

report = RubyReport.new
report.generate
