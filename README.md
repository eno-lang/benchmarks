# Benchmarks

This is an initial draft report, and as with all statistics please take it with a big grain of salt.

To get an impression how the measurements were obtained, please take a look at the source of `benchmark.js/py/rb` inside this repository.
To get an impression how the report was compiled, please study `report.js` inside this repository.

Numerical values represent the number of seconds elapsed during 100k (*) iterations of the respective code example, or in other words, smaller numbers indicate better performance.

(*) Note: Some libraries included in the benchmark exhibit an up to 1000x slower performance speed compared to the top ranking parsers, these have been partially sampled with up to only 1k iterations with the total duration extrapolated for the global comparison again.

## abstract_hierarchy

░&nbsp;&nbsp;1.653 - **js-yaml 3.12.0** - *javascript*  
▓&nbsp;&nbsp;1.662 - **enojs 0.10.5** - *javascript*  
░&nbsp;&nbsp;6.267 - **toml-j0.4 1.1.1** - *javascript*  
░&nbsp;&nbsp;13.692 - **yaml 2.5.0** - *ruby*  
▓&nbsp;&nbsp;18.109 - **enorb 0.4.4** - *ruby*  
░&nbsp;&nbsp;18.552 - **tomlrb 1.2.7** - *ruby*  
▓▓&nbsp;&nbsp;31.229 - **enopy 0.2.5** - *python*  
░░░&nbsp;&nbsp;65.040 - **toml 2.3.3** - *javascript*  
░░░░░░░░&nbsp;&nbsp;186.776 - **pyyaml 3.12** - *python*  
░░░░░░░░░░░░&nbsp;&nbsp;277.788 - **toml-rb 1.1.1** - *ruby*  
░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;426.678 - **toml 0.2.0** - *ruby*  
░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;641.744 - **ruamel.yaml 0.15.40** - *python*  

## content_heavy

▓&nbsp;&nbsp;6.437 - **enojs 0.10.5** - *javascript*  
░&nbsp;&nbsp;7.095 - **js-yaml 3.12.0** - *javascript*  
░&nbsp;&nbsp;14.871 - **yaml 2.5.0** - *ruby*  
░&nbsp;&nbsp;15.289 - **tomlrb 1.2.7** - *ruby*  
▓▓&nbsp;&nbsp;28.153 - **enorb 0.4.4** - *ruby*  
▓▓&nbsp;&nbsp;33.661 - **enopy 0.2.5** - *python*  
░░░░░░░░░░░░░&nbsp;&nbsp;318.403 - **toml-j0.4 1.1.1** - *javascript*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;1291.377 - **pyyaml 3.12** - *python*  

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░░  
2350.924 - **toml-rb 1.1.1** - *ruby*  

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
3228.360 - **ruamel.yaml 0.15.40** - *python*  

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░  
7939.077 - **toml 2.3.3** - *javascript*  

## invented_server_configuration

░&nbsp;&nbsp;1.639 - **js-yaml 3.12.0** - *javascript*  
▓&nbsp;&nbsp;2.411 - **enojs 0.10.5** - *javascript*  
░&nbsp;&nbsp;9.986 - **toml-j0.4 1.1.1** - *javascript*  
░&nbsp;&nbsp;13.789 - **yaml 2.5.0** - *ruby*  
▓&nbsp;&nbsp;17.860 - **enorb 0.4.4** - *ruby*  
░░&nbsp;&nbsp;31.751 - **tomlrb 1.2.7** - *ruby*  
▓▓&nbsp;&nbsp;32.153 - **enopy 0.2.5** - *python*  
░░░░&nbsp;&nbsp;98.842 - **toml 2.3.3** - *javascript*  
░░░░░░░░&nbsp;&nbsp;185.861 - **pyyaml 3.12** - *python*  
░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;494.527 - **toml-rb 1.1.1** - *ruby*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;646.588 - **ruamel.yaml 0.15.40** - *python*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;722.456 - **toml 0.2.0** - *ruby*  

## jekyll_post_example

░&nbsp;&nbsp;0.836 - **js-yaml 3.12.0** - *javascript*  
▓&nbsp;&nbsp;0.890 - **enojs 0.10.5** - *javascript*  
░&nbsp;&nbsp;5.826 - **tomlrb 1.2.7** - *ruby*  
░&nbsp;&nbsp;8.219 - **yaml 2.5.0** - *ruby*  
▓&nbsp;&nbsp;9.503 - **enorb 0.4.4** - *ruby*  
░&nbsp;&nbsp;11.639 - **toml-j0.4 1.1.1** - *javascript*  
▓&nbsp;&nbsp;15.575 - **enopy 0.2.5** - *python*  
░░░░&nbsp;&nbsp;97.015 - **pyyaml 3.12** - *python*  
░░░░░░░&nbsp;&nbsp;151.942 - **toml 2.3.3** - *javascript*  
░░░░░░░&nbsp;&nbsp;159.965 - **toml-rb 1.1.1** - *ruby*  
░░░░░░░░░░░░░&nbsp;&nbsp;299.580 - **ruamel.yaml 0.15.40** - *python*  

## journey_route_data

░&nbsp;&nbsp;3.540 - **js-yaml 3.12.0** - *javascript*  
▓&nbsp;&nbsp;3.583 - **enojs 0.10.5** - *javascript*  
░&nbsp;&nbsp;15.632 - **toml-j0.4 1.1.1** - *javascript*  
░░&nbsp;&nbsp;31.233 - **tomlrb 1.2.7** - *ruby*  
░░&nbsp;&nbsp;31.545 - **yaml 2.5.0** - *ruby*  
▓▓&nbsp;&nbsp;46.299 - **enorb 0.4.4** - *ruby*  
▓▓▓▓&nbsp;&nbsp;97.296 - **enopy 0.2.5** - *python*  
░░░░░&nbsp;&nbsp;100.486 - **toml 2.3.3** - *javascript*  
░░░░░░░░░░░░░░░░&nbsp;&nbsp;378.597 - **pyyaml 3.12** - *python*  
░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;527.409 - **toml-rb 1.1.1** - *ruby*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;952.170 - **toml 0.2.0** - *ruby*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;1306.266 - **ruamel.yaml 0.15.40** - *python*  

## yaml_invoice_example

░&nbsp;&nbsp;2.798 - **js-yaml 3.12.0** - *javascript*  
▓&nbsp;&nbsp;4.407 - **enojs 0.10.5** - *javascript*  
░&nbsp;&nbsp;12.843 - **toml-j0.4 1.1.1** - *javascript*  
░&nbsp;&nbsp;23.465 - **yaml 2.5.0** - *ruby*  
░░&nbsp;&nbsp;25.934 - **tomlrb 1.2.7** - *ruby*  
▓▓&nbsp;&nbsp;30.278 - **enorb 0.4.4** - *ruby*  
▓▓▓&nbsp;&nbsp;54.967 - **enopy 0.2.5** - *python*  
░░░&nbsp;&nbsp;55.951 - **toml 2.3.3** - *javascript*  
░░░░░░░░░░░&nbsp;&nbsp;266.306 - **pyyaml 3.12** - *python*  
░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;545.169 - **toml-rb 1.1.1** - *ruby*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;952.732 - **ruamel.yaml 0.15.40** - *python*  
