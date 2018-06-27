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
▓&nbsp;&nbsp;12.157 - **enorb 0.4.6** - *ruby*  
░&nbsp;&nbsp;13.722 - **yaml 2.5.0** - *ruby*  
░&nbsp;&nbsp;18.082 - **tomlrb 1.2.7** - *ruby*  
▓&nbsp;&nbsp;20.462 - **enopy 0.2.7** - *python*  
░░░&nbsp;&nbsp;65.040 - **toml 2.3.3** - *javascript*  
░░░░░░░░&nbsp;&nbsp;185.088 - **pyyaml 3.12** - *python*  
░░░░░░░░░░░░&nbsp;&nbsp;275.604 - **toml-rb 1.1.1** - *ruby*  
░░░░░░░░░░░░░░░░░&nbsp;&nbsp;415.206 - **toml 0.2.0** - *ruby*  
░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;631.886 - **ruamel.yaml 0.15.40** - *python*  

## content_heavy

▓&nbsp;&nbsp;6.437 - **enojs 0.10.5** - *javascript*  
░&nbsp;&nbsp;7.095 - **js-yaml 3.12.0** - *javascript*  
▓&nbsp;&nbsp;9.947 - **enorb 0.4.6** - *ruby*  
▓&nbsp;&nbsp;11.640 - **enopy 0.2.7** - *python*  
░&nbsp;&nbsp;14.670 - **yaml 2.5.0** - *ruby*  
░&nbsp;&nbsp;15.177 - **tomlrb 1.2.7** - *ruby*  
░░░░░░░░░░░░░&nbsp;&nbsp;318.403 - **toml-j0.4 1.1.1** - *javascript*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;1299.363 - **pyyaml 3.12** - *python*  

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░  
2309.812 - **toml-rb 1.1.1** - *ruby*  

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  
3205.757 - **ruamel.yaml 0.15.40** - *python*  

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
▓&nbsp;&nbsp;13.780 - **enorb 0.4.6** - *ruby*  
░&nbsp;&nbsp;14.024 - **yaml 2.5.0** - *ruby*  
▓&nbsp;&nbsp;23.170 - **enopy 0.2.7** - *python*  
░░&nbsp;&nbsp;31.269 - **tomlrb 1.2.7** - *ruby*  
░░░░&nbsp;&nbsp;98.842 - **toml 2.3.3** - *javascript*  
░░░░░░░░&nbsp;&nbsp;183.791 - **pyyaml 3.12** - *python*  
░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;490.898 - **toml-rb 1.1.1** - *ruby*  
░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;634.922 - **ruamel.yaml 0.15.40** - *python*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;713.324 - **toml 0.2.0** - *ruby*  

## jekyll_post_example

░&nbsp;&nbsp;0.836 - **js-yaml 3.12.0** - *javascript*  
▓&nbsp;&nbsp;0.890 - **enojs 0.10.5** - *javascript*  
░&nbsp;&nbsp;6.008 - **tomlrb 1.2.7** - *ruby*  
▓&nbsp;&nbsp;7.254 - **enopy 0.2.7** - *python*  
▓&nbsp;&nbsp;7.308 - **enorb 0.4.6** - *ruby*  
░&nbsp;&nbsp;8.766 - **yaml 2.5.0** - *ruby*  
░&nbsp;&nbsp;11.639 - **toml-j0.4 1.1.1** - *javascript*  
░░░░&nbsp;&nbsp;95.336 - **pyyaml 3.12** - *python*  
░░░░░░░&nbsp;&nbsp;151.942 - **toml 2.3.3** - *javascript*  
░░░░░░░&nbsp;&nbsp;169.486 - **toml-rb 1.1.1** - *ruby*  
░░░░░░░░░░░░&nbsp;&nbsp;291.521 - **ruamel.yaml 0.15.40** - *python*  

## journey_route_data

░&nbsp;&nbsp;3.540 - **js-yaml 3.12.0** - *javascript*  
▓&nbsp;&nbsp;3.583 - **enojs 0.10.5** - *javascript*  
░&nbsp;&nbsp;15.632 - **toml-j0.4 1.1.1** - *javascript*  
▓&nbsp;&nbsp;20.397 - **enorb 0.4.6** - *ruby*  
░░&nbsp;&nbsp;33.253 - **tomlrb 1.2.7** - *ruby*  
░░&nbsp;&nbsp;33.872 - **yaml 2.5.0** - *ruby*  
▓▓&nbsp;&nbsp;36.553 - **enopy 0.2.7** - *python*  
░░░░░&nbsp;&nbsp;100.486 - **toml 2.3.3** - *javascript*  
░░░░░░░░░░░░░░░░&nbsp;&nbsp;376.583 - **pyyaml 3.12** - *python*  
░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;540.481 - **toml-rb 1.1.1** - *ruby*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;946.237 - **toml 0.2.0** - *ruby*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;1281.363 - **ruamel.yaml 0.15.40** - *python*  

## yaml_invoice_example

░&nbsp;&nbsp;2.798 - **js-yaml 3.12.0** - *javascript*  
▓&nbsp;&nbsp;4.407 - **enojs 0.10.5** - *javascript*  
░&nbsp;&nbsp;12.843 - **toml-j0.4 1.1.1** - *javascript*  
▓&nbsp;&nbsp;22.710 - **enorb 0.4.6** - *ruby*  
░&nbsp;&nbsp;24.705 - **yaml 2.5.0** - *ruby*  
░░&nbsp;&nbsp;26.813 - **tomlrb 1.2.7** - *ruby*  
▓▓&nbsp;&nbsp;33.219 - **enopy 0.2.7** - *python*  
░░░&nbsp;&nbsp;55.951 - **toml 2.3.3** - *javascript*  
░░░░░░░░░░░&nbsp;&nbsp;265.648 - **pyyaml 3.12** - *python*  
░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;571.870 - **toml-rb 1.1.1** - *ruby*  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░&nbsp;&nbsp;937.901 - **ruamel.yaml 0.15.40** - *python*  
