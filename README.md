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
▓&nbsp;&nbsp;12.502 - **enorb 0.4.5** - *ruby*  
░&nbsp;&nbsp;13.860 - **yaml 2.5.0** - *ruby*  
░&nbsp;&nbsp;18.194 - **tomlrb 1.2.7** - *ruby*  
▓&nbsp;&nbsp;20.242 - **enopy 0.2.6** - *python*  
░░░&nbsp;&nbsp;65.040 - **toml 2.3.3** - *javascript*  
░░░░░░░░&nbsp;&nbsp;185.509 - **pyyaml 3.12** - *python*  
░░░░░░░░░░░&nbsp;&nbsp;269.123 - **toml-rb 1.1.1** - *ruby*  
░░░░░░░░░░░░░░░░░&nbsp;&nbsp;420.945 - **toml 0.2.0** - *ruby*  
░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;630.105 - **ruamel.yaml 0.15.40** - *python*  

## content_heavy

▓&nbsp;&nbsp;6.437 - **enojs 0.10.5** - *javascript*  
░&nbsp;&nbsp;7.095 - **js-yaml 3.12.0** - *javascript*  
░&nbsp;&nbsp;14.602 - **yaml 2.5.0** - *ruby*  
░&nbsp;&nbsp;15.269 - **tomlrb 1.2.7** - *ruby*  
▓▓&nbsp;&nbsp;27.824 - **enorb 0.4.5** - *ruby*  
▓▓&nbsp;&nbsp;32.798 - **enopy 0.2.6** - *python*  
░░░░░░░░░░░░░&nbsp;&nbsp;318.403 - **toml-j0.4 1.1.1** - *javascript*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;1265.182 - **pyyaml 3.12** - *python*  

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░  
2257.717 - **toml-rb 1.1.1** - *ruby*  

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
3150.259 - **ruamel.yaml 0.15.40** - *python*  

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
▓&nbsp;&nbsp;14.010 - **enorb 0.4.5** - *ruby*  
░&nbsp;&nbsp;14.094 - **yaml 2.5.0** - *ruby*  
▓&nbsp;&nbsp;23.380 - **enopy 0.2.6** - *python*  
░░&nbsp;&nbsp;31.530 - **tomlrb 1.2.7** - *ruby*  
░░░░&nbsp;&nbsp;98.842 - **toml 2.3.3** - *javascript*  
░░░░░░░░&nbsp;&nbsp;185.940 - **pyyaml 3.12** - *python*  
░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;486.192 - **toml-rb 1.1.1** - *ruby*  
░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;636.411 - **ruamel.yaml 0.15.40** - *python*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;729.333 - **toml 0.2.0** - *ruby*  

## jekyll_post_example

░&nbsp;&nbsp;0.836 - **js-yaml 3.12.0** - *javascript*  
▓&nbsp;&nbsp;0.890 - **enojs 0.10.5** - *javascript*  
░&nbsp;&nbsp;5.833 - **tomlrb 1.2.7** - *ruby*  
▓&nbsp;&nbsp;6.318 - **enorb 0.4.5** - *ruby*  
░&nbsp;&nbsp;8.344 - **yaml 2.5.0** - *ruby*  
▓&nbsp;&nbsp;8.705 - **enopy 0.2.6** - *python*  
░&nbsp;&nbsp;11.639 - **toml-j0.4 1.1.1** - *javascript*  
░░░░&nbsp;&nbsp;95.583 - **pyyaml 3.12** - *python*  
░░░░░░░&nbsp;&nbsp;151.942 - **toml 2.3.3** - *javascript*  
░░░░░░░&nbsp;&nbsp;157.598 - **toml-rb 1.1.1** - *ruby*  
░░░░░░░░░░░░&nbsp;&nbsp;292.783 - **ruamel.yaml 0.15.40** - *python*  

## journey_route_data

░&nbsp;&nbsp;3.540 - **js-yaml 3.12.0** - *javascript*  
▓&nbsp;&nbsp;3.583 - **enojs 0.10.5** - *javascript*  
░&nbsp;&nbsp;15.632 - **toml-j0.4 1.1.1** - *javascript*  
▓&nbsp;&nbsp;21.082 - **enorb 0.4.5** - *ruby*  
░░&nbsp;&nbsp;31.621 - **tomlrb 1.2.7** - *ruby*  
░░&nbsp;&nbsp;32.422 - **yaml 2.5.0** - *ruby*  
▓▓&nbsp;&nbsp;36.784 - **enopy 0.2.6** - *python*  
░░░░░&nbsp;&nbsp;100.486 - **toml 2.3.3** - *javascript*  
░░░░░░░░░░░░░░░░&nbsp;&nbsp;377.369 - **pyyaml 3.12** - *python*  
░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;518.126 - **toml-rb 1.1.1** - *ruby*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;960.871 - **toml 0.2.0** - *ruby*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;1283.101 - **ruamel.yaml 0.15.40** - *python*  

## yaml_invoice_example

░&nbsp;&nbsp;2.798 - **js-yaml 3.12.0** - *javascript*  
▓&nbsp;&nbsp;4.407 - **enojs 0.10.5** - *javascript*  
░&nbsp;&nbsp;12.843 - **toml-j0.4 1.1.1** - *javascript*  
▓&nbsp;&nbsp;22.402 - **enorb 0.4.5** - *ruby*  
░&nbsp;&nbsp;24.157 - **yaml 2.5.0** - *ruby*  
░░&nbsp;&nbsp;26.592 - **tomlrb 1.2.7** - *ruby*  
▓▓&nbsp;&nbsp;36.231 - **enopy 0.2.6** - *python*  
░░░&nbsp;&nbsp;55.951 - **toml 2.3.3** - *javascript*  
░░░░░░░░░░░&nbsp;&nbsp;264.542 - **pyyaml 3.12** - *python*  
░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;535.804 - **toml-rb 1.1.1** - *ruby*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;933.336 - **ruamel.yaml 0.15.40** - *python*  
