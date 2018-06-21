# Benchmarks

**Heads up: This is an initial draft report, as with all statistics please take it with a big grain of salt.**

To get an impression how the measurements were obtained, please take a look at the source of `benchmark.js/py/rb` inside this repository.
To get an impression how the report was compiled, please study `report.js` inside this repository.

## yaml_invoice_example

&nbsp;&nbsp;2.649 - **js-yaml 3.12.0** - *javascript*  
█&nbsp;&nbsp;4.127 - **enojs 0.10.4** - *javascript*  
████&nbsp;&nbsp;12.402 - **toml-j0.4 1.1.1** - *javascript*  
████████&nbsp;&nbsp;24.585 - **yaml 2.5.0** - *ruby*  
████████&nbsp;&nbsp;26.479 - **tomlrb 1.2.7** - *ruby*  
███████████&nbsp;&nbsp;33.741 - **enorb 0.4.3** - *ruby*  
██████████████████&nbsp;&nbsp;55.079 - **toml 2.3.3** - *javascript*  
████████████████████&nbsp;&nbsp;59.697 - **enopy 0.2.3** - *python*  

████████████████████████████████████████████████████████████████████████████████  
█████████&nbsp;&nbsp;265.422 - **pyyaml 3.12** - *python*  

████████████████████████████████████████████████████████████████████████████████  
████████████████████████████████████████████████████████████████████████████████  
██████████████████████████&nbsp;&nbsp;551.679 - **toml-rb 1.1.1** - *ruby*  

████████████████████████████████████████████████████████████████████████████████  
████████████████████████████████████████████████████████████████████████████████  
████████████████████████████████████████████████████████████████████████████████  
████████████████████████████████████████████████████████████████████████████████&nbsp;&nbsp;944.340 - **ruamel.yaml 0.15.40** - *python*  

## jekyll_post_example

&nbsp;&nbsp;0.661 - **front-matter 2.3.0** - *javascript*  
&nbsp;&nbsp;0.799 - **js-yaml 3.12.0** - *javascript*  
&nbsp;&nbsp;1.042 - **enojs 0.10.4** - *javascript*  
██&nbsp;&nbsp;6.245 - **tomlrb 1.2.7** - *ruby*  
██&nbsp;&nbsp;8.843 - **yaml 2.5.0** - *ruby*  
████&nbsp;&nbsp;12.106 - **toml-j0.4 1.1.1** - *javascript*  
██████████&nbsp;&nbsp;29.784 - **enorb 0.4.3** - *ruby*  
█████████████████&nbsp;&nbsp;52.929 - **enopy 0.2.3** - *python*  
████████████████████████████████&nbsp;&nbsp;95.179 - **pyyaml 3.12** - *python*  
█████████████████████████████████████████████████&nbsp;&nbsp;146.472 - **toml 2.3.3** - *javascript*  
███████████████████████████████████████████████████████&nbsp;&nbsp;164.920 - **toml-rb 1.1.1** - *ruby*  

████████████████████████████████████████████████████████████████████████████████  
█████████████████████&nbsp;&nbsp;298.640 - **ruamel.yaml 0.15.40** - *python*  
