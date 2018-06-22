# Benchmarks

This is an initial draft report, and as with all statistics please take it with a big grain of salt.

To get an impression how the measurements were obtained, please take a look at the source of `benchmark.js/py/rb` inside this repository.
To get an impression how the report was compiled, please study `report.js` inside this repository.

Numerical values represent the number of seconds elapsed during 100.000 (*) iterations of the respective code example, or in other words, smaller numbers indicated better performance.

(*) Note: Some libraries included in the benchmark exhibit an up to 500x slower performance speed compared to the top ranking parsers, these have been partially sampled only at 10.000 iterations with the total duration extrapolated for the global comparison again.

## abstract_hierarchy

▓&nbsp;&nbsp;1.668 - **enojs 0.10.4** - *javascript*  
░&nbsp;&nbsp;1.691 - **js-yaml 3.12.0** - *javascript*  
░░&nbsp;&nbsp;6.495 - **toml-j0.4 1.1.1** - *javascript*  
░░░░&nbsp;&nbsp;13.845 - **yaml 2.5.0** - *ruby*  
▓▓▓▓▓&nbsp;&nbsp;18.406 - **enorb 0.4.3** - *ruby*  
░░░░░&nbsp;&nbsp;19.014 - **tomlrb 1.2.7** - *ruby*  
▓▓▓▓▓▓▓▓&nbsp;&nbsp;31.692 - **enopy 0.2.3** - *python*  
░░░░░░░░░░░░░░░░&nbsp;&nbsp;64.250 - **toml 2.3.3** - *javascript*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;191.298 - **pyyaml 3.12** - *python*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;281.379 - **toml-rb 1.1.1** - *ruby*  

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░░░░░░░░░░░░  
425.575 - **toml 0.2.0** - *ruby*  

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░  
651.258 - **ruamel.yaml 0.15.40** - *python*  

## invented_server_configuration

░&nbsp;&nbsp;1.726 - **js-yaml 3.12.0** - *javascript*  
▓&nbsp;&nbsp;2.334 - **enojs 0.10.4** - *javascript*  
░░░&nbsp;&nbsp;9.961 - **toml-j0.4 1.1.1** - *javascript*  
░░░░&nbsp;&nbsp;13.515 - **yaml 2.5.0** - *ruby*  
▓▓▓▓▓&nbsp;&nbsp;18.344 - **enorb 0.4.3** - *ruby*  
░░░░░░░░&nbsp;&nbsp;31.088 - **tomlrb 1.2.7** - *ruby*  
▓▓▓▓▓▓▓▓▓&nbsp;&nbsp;32.718 - **enopy 0.2.3** - *python*  
░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;100.743 - **toml 2.3.3** - *javascript*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;187.192 - **pyyaml 3.12** - *python*  

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
482.646 - **toml-rb 1.1.1** - *ruby*  

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
645.989 - **ruamel.yaml 0.15.40** - *python*  

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░░░░░░░░  
734.270 - **toml 0.2.0** - *ruby*  

## jekyll_post_example

░&nbsp;&nbsp;0.696 - **front-matter 2.3.0** - *javascript*  
░&nbsp;&nbsp;0.876 - **js-yaml 3.12.0** - *javascript*  
▓&nbsp;&nbsp;1.103 - **enojs 0.10.4** - *javascript*  
░░&nbsp;&nbsp;5.781 - **tomlrb 1.2.7** - *ruby*  
░░░&nbsp;&nbsp;8.386 - **yaml 2.5.0** - *ruby*  
░░░&nbsp;&nbsp;11.916 - **toml-j0.4 1.1.1** - *javascript*  
▓▓▓▓▓▓▓&nbsp;&nbsp;28.006 - **enorb 0.4.3** - *ruby*  
▓▓▓▓▓▓▓▓▓▓▓▓▓&nbsp;&nbsp;52.146 - **enopy 0.2.3** - *python*  
░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;96.941 - **pyyaml 3.12** - *python*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;147.371 - **toml 2.3.3** - *javascript*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;157.389 - **toml-rb 1.1.1** - *ruby*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;299.217 - **ruamel.yaml 0.15.40** - *python*  

## journey_route_data

░&nbsp;&nbsp;3.758 - **js-yaml 3.12.0** - *javascript*  
▓&nbsp;&nbsp;3.801 - **enojs 0.10.4** - *javascript*  
░░░░&nbsp;&nbsp;15.813 - **toml-j0.4 1.1.1** - *javascript*  
░░░░░░░░&nbsp;&nbsp;30.598 - **tomlrb 1.2.7** - *ruby*  
░░░░░░░░&nbsp;&nbsp;31.159 - **yaml 2.5.0** - *ruby*  
▓▓▓▓▓▓▓▓▓▓▓▓&nbsp;&nbsp;45.618 - **enorb 0.4.3** - *ruby*  
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓&nbsp;&nbsp;98.601 - **enopy 0.2.3** - *python*  
░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;102.543 - **toml 2.3.3** - *javascript*  

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░  
378.732 - **pyyaml 3.12** - *python*  

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
513.578 - **toml-rb 1.1.1** - *ruby*  

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
916.287 - **toml 0.2.0** - *ruby*  

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░  
1300.474 - **ruamel.yaml 0.15.40** - *python*  

## yaml_invoice_example

░&nbsp;&nbsp;2.692 - **js-yaml 3.12.0** - *javascript*  
▓▓&nbsp;&nbsp;4.156 - **enojs 0.10.4** - *javascript*  
░░░░&nbsp;&nbsp;12.422 - **toml-j0.4 1.1.1** - *javascript*  
░░░░░░&nbsp;&nbsp;23.043 - **yaml 2.5.0** - *ruby*  
░░░░░░░&nbsp;&nbsp;25.589 - **tomlrb 1.2.7** - *ruby*  
▓▓▓▓▓▓▓▓&nbsp;&nbsp;31.299 - **enorb 0.4.3** - *ruby*  
░░░░░░░░░░░░░░░&nbsp;&nbsp;57.210 - **toml 2.3.3** - *javascript*  
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓&nbsp;&nbsp;60.515 - **enopy 0.2.3** - *python*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;270.663 - **pyyaml 3.12** - *python*  

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
533.380 - **toml-rb 1.1.1** - *ruby*  

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
960.438 - **ruamel.yaml 0.15.40** - *python*  
