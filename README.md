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
░&nbsp;&nbsp;13.684 - **yaml 2.5.0** - *ruby*  
▓&nbsp;&nbsp;18.474 - **enorb 0.4.3** - *ruby*  
░&nbsp;&nbsp;19.202 - **tomlrb 1.2.7** - *ruby*  
▓▓&nbsp;&nbsp;31.008 - **enopy 0.2.4** - *python*  
░░░&nbsp;&nbsp;65.040 - **toml 2.3.3** - *javascript*  
░░░░░░░░&nbsp;&nbsp;183.892 - **pyyaml 3.12** - *python*  
░░░░░░░░░░░░&nbsp;&nbsp;278.317 - **toml-rb 1.1.1** - *ruby*  
░░░░░░░░░░░░░░░░░&nbsp;&nbsp;421.423 - **toml 0.2.0** - *ruby*  
░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;636.252 - **ruamel.yaml 0.15.40** - *python*  

## content_heavy

▓&nbsp;&nbsp;6.437 - **enojs 0.10.5** - *javascript*  
░&nbsp;&nbsp;7.095 - **js-yaml 3.12.0** - *javascript*  
░&nbsp;&nbsp;14.849 - **yaml 2.5.0** - *ruby*  
░&nbsp;&nbsp;15.915 - **tomlrb 1.2.7** - *ruby*  
░░░░░░░░░░░░░&nbsp;&nbsp;318.403 - **toml-j0.4 1.1.1** - *javascript*  
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓&nbsp;&nbsp;458.273 - **enorb 0.4.3** - *ruby*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;1271.589 - **pyyaml 3.12** - *python*  
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓&nbsp;&nbsp;1300.506 - **enopy 0.2.4** - *python*  

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░░  
2347.014 - **toml-rb 1.1.1** - *ruby*  

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
3169.187 - **ruamel.yaml 0.15.40** - *python*  

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
░&nbsp;&nbsp;13.987 - **yaml 2.5.0** - *ruby*  
▓&nbsp;&nbsp;18.535 - **enorb 0.4.3** - *ruby*  
▓▓&nbsp;&nbsp;31.461 - **enopy 0.2.4** - *python*  
░░&nbsp;&nbsp;31.660 - **tomlrb 1.2.7** - *ruby*  
░░░░&nbsp;&nbsp;98.842 - **toml 2.3.3** - *javascript*  
░░░░░░░░&nbsp;&nbsp;182.541 - **pyyaml 3.12** - *python*  
░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;489.477 - **toml-rb 1.1.1** - *ruby*  
░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;640.435 - **ruamel.yaml 0.15.40** - *python*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;732.367 - **toml 0.2.0** - *ruby*  

## jekyll_post_example

░&nbsp;&nbsp;0.836 - **js-yaml 3.12.0** - *javascript*  
▓&nbsp;&nbsp;0.890 - **enojs 0.10.5** - *javascript*  
░&nbsp;&nbsp;5.869 - **tomlrb 1.2.7** - *ruby*  
░&nbsp;&nbsp;8.167 - **yaml 2.5.0** - *ruby*  
░&nbsp;&nbsp;11.639 - **toml-j0.4 1.1.1** - *javascript*  
▓▓&nbsp;&nbsp;29.278 - **enorb 0.4.3** - *ruby*  
▓▓▓&nbsp;&nbsp;50.783 - **enopy 0.2.4** - *python*  
░░░░&nbsp;&nbsp;94.744 - **pyyaml 3.12** - *python*  
░░░░░░░&nbsp;&nbsp;151.942 - **toml 2.3.3** - *javascript*  
░░░░░░░&nbsp;&nbsp;159.020 - **toml-rb 1.1.1** - *ruby*  
░░░░░░░░░░░░&nbsp;&nbsp;293.236 - **ruamel.yaml 0.15.40** - *python*  

## journey_route_data

░&nbsp;&nbsp;3.540 - **js-yaml 3.12.0** - *javascript*  
▓&nbsp;&nbsp;3.583 - **enojs 0.10.5** - *javascript*  
░&nbsp;&nbsp;15.632 - **toml-j0.4 1.1.1** - *javascript*  
░░&nbsp;&nbsp;31.172 - **yaml 2.5.0** - *ruby*  
░░&nbsp;&nbsp;31.209 - **tomlrb 1.2.7** - *ruby*  
▓▓&nbsp;&nbsp;46.865 - **enorb 0.4.3** - *ruby*  
▓▓▓▓&nbsp;&nbsp;94.776 - **enopy 0.2.4** - *python*  
░░░░░&nbsp;&nbsp;100.486 - **toml 2.3.3** - *javascript*  
░░░░░░░░░░░░░░░&nbsp;&nbsp;371.695 - **pyyaml 3.12** - *python*  
░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;517.107 - **toml-rb 1.1.1** - *ruby*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;934.250 - **toml 0.2.0** - *ruby*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;1286.220 - **ruamel.yaml 0.15.40** - *python*  

## yaml_invoice_example

░&nbsp;&nbsp;2.798 - **js-yaml 3.12.0** - *javascript*  
▓&nbsp;&nbsp;4.407 - **enojs 0.10.5** - *javascript*  
░&nbsp;&nbsp;12.843 - **toml-j0.4 1.1.1** - *javascript*  
░&nbsp;&nbsp;23.041 - **yaml 2.5.0** - *ruby*  
░░&nbsp;&nbsp;26.475 - **tomlrb 1.2.7** - *ruby*  
▓▓&nbsp;&nbsp;33.637 - **enorb 0.4.3** - *ruby*  
░░░&nbsp;&nbsp;55.951 - **toml 2.3.3** - *javascript*  
▓▓▓&nbsp;&nbsp;59.032 - **enopy 0.2.4** - *python*  
░░░░░░░░░░░&nbsp;&nbsp;262.525 - **pyyaml 3.12** - *python*  
░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;546.481 - **toml-rb 1.1.1** - *ruby*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;943.478 - **ruamel.yaml 0.15.40** - *python*  
