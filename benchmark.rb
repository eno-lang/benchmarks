require 'benchmark'
require 'time'

require 'enolib'
ENOLIB_VERSION = Gem.loaded_specs['enolib'].version

require 'enotype'
Enolib.register(
  boolean: ->(value) { Enotype::boolean(value) },
  date: ->(value) { Enotype::date(value) },
  datetime: ->(value) { Enotype::datetime(value) },
  float: ->(value) { Enotype::float(value) },
  integer: ->(value) { Enotype::integer(value) }
)

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
    @report = <<~ENO
      evaluated: #{Time.now.utc.iso8601}
      iterations: #{ITERATIONS}
      runtime: #{RUBY_DESCRIPTION}

      # scenarios
    ENO
  end

  def benchmark(library, version, iteration_cutback_factor = 1)
    iterations = (ITERATIONS / iteration_cutback_factor).to_i

    result = Benchmark.measure do
      iterations.times { yield }
    end

    duration = result.total
    duration_normalized = duration * iteration_cutback_factor

    @report += "#{library} #{version} = #{duration_normalized}\n"

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

    benchmark('[-] enolib', ENOLIB_VERSION) { Enolib.parse(eno_hierarchy) }
    benchmark('[✓] enolib', ENOLIB_VERSION) do
      document = Enolib.parse(eno_hierarchy)
      doc = document.section('doc')
      doc.list('colors').required_string_values
      traits = doc.fieldset('traits')
      traits.entry('tired').required_string_value
      traits.entry('extroverted').required_string_value
      traits.entry('funny').required_string_value
      traits.entry('inventive').required_string_value
      doc.list('things').required_string_values
      deep = doc.section('deep')
      deep.field('sea').required_string_value
      deeper = deep.section('deep')
      deeper.field('sea').required_string_value
      deepest = deeper.section('deep')
      deepest.field('sea').required_string_value
    end
    benchmark('[-] toml', TOML_VERSION, 10) { TOML.load(toml_hierarchy) }
    benchmark('[-] toml-rb', TOML_RB_VERSION, 10) { TomlRB.parse(toml_hierarchy) }
    benchmark('[-] tomlrb', TOMLRB_VERSION) { Tomlrb.parse(toml_hierarchy) }
    benchmark('[-] yaml', YAML_VERSION) { YAML.load(yaml_hierarchy) }


    scenario('content_heavy')

    eno_content = File.read('samples/content_heavy/content.eno')
    toml_content = File.read('samples/content_heavy/content.toml')
    yaml_content = File.read('samples/content_heavy/content.yaml')

    benchmark('[-] enolib', ENOLIB_VERSION) { Enolib.parse(eno_content) }
    benchmark('[✓] enolib', ENOLIB_VERSION) do
      Enolib.parse(eno_content).field('content').required_string_value
    end
    # benchmark('[-] toml', TOML_VERSION, 100) { TOML.load(toml_content) } ERRORS
    benchmark('[-] toml-rb', TOML_RB_VERSION, 100) { TomlRB.parse(toml_content) }
    benchmark('[-] tomlrb', TOMLRB_VERSION) { Tomlrb.parse(toml_content) }
    benchmark('[-] yaml', YAML_VERSION) { YAML.load(yaml_content) }


    scenario('invented_server_configuration')

    eno_configuration = File.read('samples/invented_server_configuration/configuration.eno')
    toml_configuration = File.read('samples/invented_server_configuration/configuration.toml')
    yaml_configuration = File.read('samples/invented_server_configuration/configuration.yaml')

    benchmark('[-] enolib', ENOLIB_VERSION) { Enolib.parse(eno_configuration) }
    benchmark('[✓] enolib', ENOLIB_VERSION) do
      document = Enolib.parse(eno_configuration)
      document.sections.each do |environment|
        environment.sections.each do |server|
          conf = server.fieldset('conf')
          conf.entry('ruby').required_boolean_value
          conf.entry('python').required_boolean_value
          server.field('clean').required_boolean_value
          server.list('steps').required_string_values
        end
      end
    end
    benchmark('[-] toml', TOML_VERSION, 100) { TOML.load(toml_configuration) }
    benchmark('[-] toml-rb', TOML_RB_VERSION, 10) { TomlRB.parse(toml_configuration) }
    benchmark('[-] tomlrb', TOMLRB_VERSION) { Tomlrb.parse(toml_configuration) }
    benchmark('[-] yaml', YAML_VERSION) { YAML.load(yaml_configuration) }


    scenario('jekyll_post_example')

    eno_post = File.read('samples/jekyll_post_example/post.eno')
    toml_post = File.read('samples/jekyll_post_example/post.toml')
    yaml_post = File.read('samples/jekyll_post_example/post.yaml')

    benchmark('[-] enolib', ENOLIB_VERSION) { Enolib.parse(eno_post) }
    benchmark('[✓] enolib', ENOLIB_VERSION) do
      document = Enolib.parse(eno_post)
      document.field('layout').required_string_value
      document.field('title').required_string_value
      document.field('date').required_datetime_value
      document.field('categories').required_string_value
      document.field('markdown').required_string_value
    end
    # benchmark('[-] toml', TOML_VERSION, 100) { TOML.load(toml_post) } ERRORS
    benchmark('[-] toml-rb', TOML_RB_VERSION, 10) { TomlRB.parse(toml_post) }
    benchmark('[-] tomlrb', TOMLRB_VERSION) { Tomlrb.parse(toml_post) }
    benchmark('[-] yaml', YAML_VERSION) { YAML.load(yaml_post) }


    scenario('journey_route_data')

    eno_journey = File.read('samples/journey_route_data/journey.eno')
    toml_journey = File.read('samples/journey_route_data/journey.toml')
    yaml_journey = File.read('samples/journey_route_data/journey.yaml')

    benchmark('[-] enolib', ENOLIB_VERSION) { Enolib.parse(eno_journey) }
    benchmark('[✓] enolib', ENOLIB_VERSION) do
      document = Enolib.parse(eno_journey)
      document.field('title').required_string_value
      document.field('date').required_date_value
      document.field('time').required_string_value
      document.field('abstract').required_string_value
      document.sections('checkpoint').each do |checkpoint|
        checkpoint.field('coordinates').required_string_value
        checkpoint.field('hint').optional_string_value
        checkpoint.field('special').optional_string_value
        checkpoint.field('location').required_string_value
        safezone = checkpoint.optional_section('safezone')
        if safezone
          safezone.field('shape').required_string_value
          safezone.field('center').required_string_value
          safezone.field('radius').required_integer_value
        end
      end
    end
    benchmark('[-] toml', TOML_VERSION, 100) { TOML.load(toml_journey) }
    benchmark('[-] toml-rb', TOML_RB_VERSION, 10) { TomlRB.parse(toml_journey) }
    benchmark('[-] tomlrb', TOMLRB_VERSION) { Tomlrb.parse(toml_journey) }
    benchmark('[-] yaml', YAML_VERSION) { YAML.load(yaml_journey) }


    scenario('yaml_invoice_example')

    eno_invoice = File.read('samples/yaml_invoice_example/invoice.eno')
    toml_invoice = File.read('samples/yaml_invoice_example/invoice.toml')
    yaml_invoice = File.read('samples/yaml_invoice_example/invoice.yaml')

    benchmark('[-] enolib', ENOLIB_VERSION) { Enolib.parse(eno_invoice) }
    benchmark('[✓] enolib', ENOLIB_VERSION) do
      document = Enolib.parse(eno_invoice)
      document.field('invoice').required_integer_value
      document.field('date').required_date_value
      document.field('tax').required_float_value
      document.field('total').required_float_value
      document.field('comments').required_string_value
      ['bill-to', 'ship-to'].each do |type|
        contact = document.section(type)
        contact.field('given').required_string_value
        contact.field('family').required_string_value
        address = contact.section('address')
        address.field('lines').required_string_value
        address.field('city').required_string_value
        address.field('state').required_string_value
        address.field('postal').required_string_value
      end
      document.sections('product').each do |product|
        product.field('sku').required_string_value
        product.field('quantity').required_integer_value
        product.field('description').required_string_value
        product.field('price').required_string_value
      end
    end
    # benchmark('[-] toml', TOML_VERSION) { TOML.load(toml_invoice) } ERRORS
    benchmark('[-] toml-rb', TOML_RB_VERSION, 10) { TomlRB.parse(toml_invoice) }
    benchmark('[-] tomlrb', TOMLRB_VERSION) { Tomlrb.parse(toml_invoice) }
    benchmark('[-] yaml', YAML_VERSION) { YAML.load(yaml_invoice) }

    File.write('reports/ruby.eno', @report)
  end

  def scenario(file)
    @report += "\n#{file}:\n"
    puts file
  end
end

report = RubyReport.new
report.generate
