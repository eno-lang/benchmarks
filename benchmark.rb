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
  ITERATIONS = 10000

  def initialize
    @report = "# ruby\n\niterations: #{ITERATIONS}\nevaluated: #{Time.now}\n"
  end

  def generate
    scenario('yaml_invoice_example')

    eno_invoice = File.read('samples/yaml_invoice_example/invoice.eno')
    toml_invoice = File.read('samples/yaml_invoice_example/invoice.toml')
    yaml_invoice = File.read('samples/yaml_invoice_example/invoice.yaml')

    benchmark('enorb', ENORB_VERSION) { Eno.parse(eno_invoice) }
    # benchmark('safe_yaml', SAFE_YAML_VERSION) { SafeYAML.load(yaml_invoice) }
    # benchmark('toml', TOML_VERSION) { TOML.load(toml_invoice) } ERRORS
    benchmark('toml-rb', TOML_RB_VERSION) { TomlRB.parse(toml_invoice) }
    benchmark('tomlrb', TOMLRB_VERSION) { Tomlrb.parse(toml_invoice) }
    benchmark('yaml', YAML_VERSION) { YAML.load(yaml_invoice) }

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

    File.write('reports/ruby.eno', @report)
  end

  def scenario(file)
    @report += "\n# #{file}\n\n"
  end

  def benchmark(library, version)
    result = Benchmark.measure do
      ITERATIONS.times do
        yield
      end
    end

    @report += "#{library} #{version}".ljust(20) + ": #{result.total}\n"
  end
end

report = RubyReport.new
report.generate
