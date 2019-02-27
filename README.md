
# Benchmarks

This report was generated on **February 27th 2019**.

These are benchmarks to evaluate the performance of all current eno library
implementations in comparism to each other, as well as in comparism to the most
popular yaml/toml parsers out there.

As with all statistics please take these findings with a grain of salt,
and feel warmly invited to re-run these benchmarks or point out flaws and
possible improvements to the methodology and code.

## How the data is gathered

To get an impression how the measurements were obtained, please take a look at the source of `benchmark.js/py/rb` inside this repository.
To get an impression how the report was compiled, please study `report.js` inside this repository.

Benchmarks are currently performed on Ubuntu 18.10 on an Intel® Xeon(R) CPU E5-1650 v3 @ 3.50GHz × 12 (see language sections below for detailed runtime info).

## Graphical results
(A numbers-only table report is provided further down)

**[-]** indicates a pure **parsing** run with unsafe results. **(\*\*)**

**[✓]** indicates a benchmark for **parsing plus querying and validating** the whole document. **(\*\*\*)**

**░░ 0.123** Shorter bars/numbers indicate **better performance**.

**░░░░░░░░░ 456789** Larger bars/numbers indicate **worse performance**.

Each ░ represents one second.

### JavaScript

Evaluated in **node v11.10.0 [linux-x64]** on **February 27th 2019**.

#### *abstract_hierarchy*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] enolib 0.1.0          [▓] 1.170 seconds
[✓] enolib 0.1.0          [▓] 1.644 seconds
[-] js-yaml 3.12.1        [░░] 2.062 seconds
[-] toml-j0.4 1.1.1       [░░░░░░░] 7.835 seconds

...  ...                  OFF THE SCALE

[-] toml 2.3.5            1+ minutes
```

#### *content_heavy*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] enolib 0.1.0          [] 0.812 seconds
[✓] enolib 0.1.0          [] 0.844 seconds
[-] js-yaml 3.12.1        [░░░░░░░] 7.663 seconds

...  ...                  OFF THE SCALE

[-] toml-j0.4 1.1.1       7+ minutes
[-] toml 2.3.5            134+ minutes
```

#### *invented_server_configuration*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] enolib 0.1.0          [▓] 1.281 seconds
[-] js-yaml 3.12.1        [░░] 2.044 seconds
[✓] enolib 0.1.0          [▓▓] 2.111 seconds
[-] toml-j0.4 1.1.1       [░░░░░░░░░░░] 11.744 seconds

...  ...                  OFF THE SCALE

[-] toml 2.3.5            2+ minutes
```

#### *jekyll_post_example*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] enolib 0.1.0          [] 0.662 seconds
[-] js-yaml 3.12.1        [] 0.994 seconds
[✓] enolib 0.1.0          [▓] 1.057 seconds
[-] toml-j0.4 1.1.1       [░░░░░░░░░░░░░░░] 15.088 seconds

...  ...                  OFF THE SCALE

[-] toml 2.3.5            3+ minutes
```

#### *journey_route_data*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] enolib 0.1.0          [▓▓] 2.490 seconds
[✓] enolib 0.1.0          [▓▓▓] 3.869 seconds
[-] js-yaml 3.12.1        [░░░░] 4.420 seconds
[-] toml-j0.4 1.1.1       [░░░░░░░░░░░░░░░░░░░] 19.394 seconds

...  ...                  OFF THE SCALE

[-] toml 2.3.5            2+ minutes
```

#### *yaml_invoice_example*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] enolib 0.1.0          [▓▓] 2.505 seconds
[-] js-yaml 3.12.1        [░░░] 3.252 seconds
[✓] enolib 0.1.0          [▓▓▓] 3.876 seconds
[-] toml-j0.4 1.1.1       [░░░░░░░░░░░░░░░] 15.072 seconds
[-] toml 2.3.5            [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 59.172 seconds
```

### Python

Evaluated in **CPython 3.6.7 [Linux-4.18.0-13-generic-x86_64-with-Ubuntu-18.10-cosmic]** on **January 13th 2019**.

#### *abstract_hierarchy*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] pyyaml (libyaml) 3.13 [░░░░░░░░░░░░░░] 14.675 seconds
[-] enopy 0.9.2           [▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 14.996 seconds
[-] toml 0.10.0           [░░░░░░░░░░░░░░░░░░] 18.513 seconds
[-] ruamel.yaml 0.15.85   [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 37.603 seconds
[-] qtoml 0.2.3           [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 39.653 seconds

...  ...                  OFF THE SCALE

[-] tomlkit 0.5.3         2+ minutes
[-] pyyaml (default) 3.13 3+ minutes
```

#### *content_heavy*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] enopy 0.9.2           [▓▓▓▓▓▓▓▓▓▓] 10.977 seconds
[-] pyyaml (libyaml) 3.13 [░░░░░░░░░░░░░] 13.110 seconds
[-] ruamel.yaml 0.15.85   [░░░░░░░░░░░░░░░░░░░░░░] 22.363 seconds

...  ...                  OFF THE SCALE

[-] toml 0.10.0           9+ minutes
[-] qtoml 0.2.3           12+ minutes
[-] pyyaml (default) 3.13 18+ minutes
[-] tomlkit 0.5.3         99+ minutes
```

#### *invented_server_configuration*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] pyyaml (libyaml) 3.13 [░░░░░░░░░░░░░░░] 15.379 seconds
[-] enopy 0.9.2           [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 18.505 seconds
[-] toml 0.10.0           [░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 28.007 seconds
[-] ruamel.yaml 0.15.85   [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 37.870 seconds
[-] qtoml 0.2.3           [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 57.580 seconds

...  ...                  OFF THE SCALE

[-] pyyaml (default) 3.13 3+ minutes
[-] tomlkit 0.5.3         5+ minutes
```

#### *jekyll_post_example*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] pyyaml (libyaml) 3.13 [░░░░░] 5.797 seconds
[-] enopy 0.9.2           [▓▓▓▓▓▓] 6.092 seconds
[-] ruamel.yaml 0.15.85   [░░░░░░░░░░░░░░░░░░] 18.740 seconds
[-] toml 0.10.0           [░░░░░░░░░░░░░░░░░░░░░░] 22.879 seconds
[-] qtoml 0.2.3           [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 32.805 seconds

...  ...                  OFF THE SCALE

[-] pyyaml (default) 3.13 1+ minutes
[-] tomlkit 0.5.3         3+ minutes
```

#### *journey_route_data*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] pyyaml (libyaml) 3.13 [░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 28.844 seconds
[-] enopy 0.9.2           [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 28.923 seconds
[-] toml 0.10.0           [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 44.576 seconds

...  ...                  OFF THE SCALE

[-] ruamel.yaml 0.15.85   1+ minutes
[-] qtoml 0.2.3           1+ minutes
[-] pyyaml (default) 3.13 5+ minutes
[-] tomlkit 0.5.3         7+ minutes
```

#### *yaml_invoice_example*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] pyyaml (libyaml) 3.13 [░░░░░░░░░░░░░░░░░░░░░] 21.566 seconds
[-] enopy 0.9.2           [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 26.655 seconds
[-] toml 0.10.0           [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 34.535 seconds
[-] ruamel.yaml 0.15.85   [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 55.466 seconds

...  ...                  OFF THE SCALE

[-] qtoml 0.2.3           1+ minutes
[-] pyyaml (default) 3.13 4+ minutes
[-] tomlkit 0.5.3         5+ minutes
```

### Ruby

Evaluated in **ruby 2.5.3p105 (2018-10-18 revision 65156) [x86_64-linux]** on **January 13th 2019**.

#### *abstract_hierarchy*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] enorb 0.10.3          [▓▓▓▓▓▓▓▓▓▓▓] 11.990 seconds
[-] yaml 2.5.3            [░░░░░░░░░░░░░] 13.647 seconds
[-] tomlrb 1.2.8          [░░░░░░░░░░░░░░░░░░░] 19.263 seconds

...  ...                  OFF THE SCALE

[-] toml-rb 1.1.2         5+ minutes
[-] toml 0.2.0            7+ minutes
```

#### *content_heavy*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] enorb 0.10.3          [▓▓▓▓▓▓▓▓▓▓] 10.205 seconds
[-] yaml 2.5.3            [░░░░░░░░░░░░░] 13.515 seconds
[-] tomlrb 1.2.8          [░░░░░░░░░░░░░░░░░] 17.559 seconds

...  ...                  OFF THE SCALE

[-] toml-rb 1.1.2         39+ minutes
```

#### *invented_server_configuration*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] yaml 2.5.3            [░░░░░░░░░░░░░] 13.891 seconds
[-] enorb 0.10.3          [▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 14.354 seconds
[-] tomlrb 1.2.8          [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 32.912 seconds

...  ...                  OFF THE SCALE

[-] toml-rb 1.1.2         8+ minutes
[-] toml 0.2.0            13+ minutes
```

#### *jekyll_post_example*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] tomlrb 1.2.8          [░░░░░] 5.834 seconds
[-] enorb 0.10.3          [▓▓▓▓▓▓▓] 7.381 seconds
[-] yaml 2.5.3            [░░░░░░░] 7.485 seconds

...  ...                  OFF THE SCALE

[-] toml-rb 1.1.2         3+ minutes
```

#### *journey_route_data*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] enorb 0.10.3          [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 21.796 seconds
[-] yaml 2.5.3            [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 31.978 seconds
[-] tomlrb 1.2.8          [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 32.281 seconds

...  ...                  OFF THE SCALE

[-] toml-rb 1.1.2         9+ minutes
[-] toml 0.2.0            16+ minutes
```

#### *yaml_invoice_example*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] yaml 2.5.3            [░░░░░░░░░░░░░░░░░░░░░░░] 23.412 seconds
[-] enorb 0.10.3          [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 24.327 seconds
[-] tomlrb 1.2.8          [░░░░░░░░░░░░░░░░░░░░░░░░░░] 26.571 seconds

...  ...                  OFF THE SCALE

[-] toml-rb 1.1.2         9+ minutes
```

## Numerical results

**[-]** indicates a pure **parsing** run with unsafe results. **(\*\*)**

**[✓]** indicates a benchmark for **parsing plus querying and validating** the whole document. **(\*\*\*)**

**0.123** Smaller numbers indicate **better performance**.

**4565789** Larger numbers indicate **worse performance**.


### JavaScript

Evaluated in **node v11.10.0 [linux-x64]** on **February 27th 2019**.

#### *abstract_hierarchy*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.1.0** | **1.170** |
| **[✓] enolib 0.1.0** | **1.644** |
| [-] js-yaml 3.12.1 | 2.062 |
| [-] toml-j0.4 1.1.1 | 7.835 |
| [-] toml 2.3.5 | 62.347 |

#### *content_heavy*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.1.0** | **0.812** |
| **[✓] enolib 0.1.0** | **0.844** |
| [-] js-yaml 3.12.1 | 7.663 |
| [-] toml-j0.4 1.1.1 | 419.521 |
| [-] toml 2.3.5 | 8061.969 |

#### *invented_server_configuration*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.1.0** | **1.281** |
| [-] js-yaml 3.12.1 | 2.044 |
| **[✓] enolib 0.1.0** | **2.111** |
| [-] toml-j0.4 1.1.1 | 11.744 |
| [-] toml 2.3.5 | 98.180 |

#### *jekyll_post_example*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.1.0** | **0.662** |
| [-] js-yaml 3.12.1 | 0.994 |
| **[✓] enolib 0.1.0** | **1.057** |
| [-] toml-j0.4 1.1.1 | 15.088 |
| [-] toml 2.3.5 | 151.983 |

#### *journey_route_data*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.1.0** | **2.490** |
| **[✓] enolib 0.1.0** | **3.869** |
| [-] js-yaml 3.12.1 | 4.420 |
| [-] toml-j0.4 1.1.1 | 19.394 |
| [-] toml 2.3.5 | 109.117 |

#### *yaml_invoice_example*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.1.0** | **2.505** |
| [-] js-yaml 3.12.1 | 3.252 |
| **[✓] enolib 0.1.0** | **3.876** |
| [-] toml-j0.4 1.1.1 | 15.072 |
| [-] toml 2.3.5 | 59.172 |

### Python

Evaluated in **CPython 3.6.7 [Linux-4.18.0-13-generic-x86_64-with-Ubuntu-18.10-cosmic]** on **January 13th 2019**.

#### *abstract_hierarchy*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| [-] pyyaml (libyaml) 3.13 | 14.675 |
| **[-] enopy 0.9.2** | **14.996** |
| [-] toml 0.10.0 | 18.513 |
| [-] ruamel.yaml 0.15.85 | 37.603 |
| [-] qtoml 0.2.3 | 39.653 |
| [-] tomlkit 0.5.3 | 147.213 |
| [-] pyyaml (default) 3.13 | 151.557 |

#### *content_heavy*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| **[-] enopy 0.9.2** | **10.977** |
| [-] pyyaml (libyaml) 3.13 | 13.110 |
| [-] ruamel.yaml 0.15.85 | 22.363 |
| [-] toml 0.10.0 | 541.757 |
| [-] qtoml 0.2.3 | 704.120 |
| [-] pyyaml (default) 3.13 | 1056.044 |
| [-] tomlkit 0.5.3 | 5931.583 |

#### *invented_server_configuration*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| [-] pyyaml (libyaml) 3.13 | 15.379 |
| **[-] enopy 0.9.2** | **18.505** |
| [-] toml 0.10.0 | 28.007 |
| [-] ruamel.yaml 0.15.85 | 37.870 |
| [-] qtoml 0.2.3 | 57.580 |
| [-] pyyaml (default) 3.13 | 151.723 |
| [-] tomlkit 0.5.3 | 303.892 |

#### *jekyll_post_example*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| [-] pyyaml (libyaml) 3.13 | 5.797 |
| **[-] enopy 0.9.2** | **6.092** |
| [-] ruamel.yaml 0.15.85 | 18.740 |
| [-] toml 0.10.0 | 22.879 |
| [-] qtoml 0.2.3 | 32.805 |
| [-] pyyaml (default) 3.13 | 79.754 |
| [-] tomlkit 0.5.3 | 187.424 |

#### *journey_route_data*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| [-] pyyaml (libyaml) 3.13 | 28.844 |
| **[-] enopy 0.9.2** | **28.923** |
| [-] toml 0.10.0 | 44.576 |
| [-] ruamel.yaml 0.15.85 | 67.619 |
| [-] qtoml 0.2.3 | 88.575 |
| [-] pyyaml (default) 3.13 | 307.934 |
| [-] tomlkit 0.5.3 | 404.817 |

#### *yaml_invoice_example*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| [-] pyyaml (libyaml) 3.13 | 21.566 |
| **[-] enopy 0.9.2** | **26.655** |
| [-] toml 0.10.0 | 34.535 |
| [-] ruamel.yaml 0.15.85 | 55.466 |
| [-] qtoml 0.2.3 | 67.282 |
| [-] pyyaml (default) 3.13 | 217.094 |
| [-] tomlkit 0.5.3 | 298.826 |

### Ruby

Evaluated in **ruby 2.5.3p105 (2018-10-18 revision 65156) [x86_64-linux]** on **January 13th 2019**.

#### *abstract_hierarchy*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| **[-] enorb 0.10.3** | **11.990** |
| [-] yaml 2.5.3 | 13.647 |
| [-] tomlrb 1.2.8 | 19.263 |
| [-] toml-rb 1.1.2 | 284.221 |
| [-] toml 0.2.0 | 430.020 |

#### *content_heavy*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| **[-] enorb 0.10.3** | **10.205** |
| [-] yaml 2.5.3 | 13.515 |
| [-] tomlrb 1.2.8 | 17.559 |
| [-] toml-rb 1.1.2 | 2319.662 |

#### *invented_server_configuration*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| [-] yaml 2.5.3 | 13.891 |
| **[-] enorb 0.10.3** | **14.354** |
| [-] tomlrb 1.2.8 | 32.912 |
| [-] toml-rb 1.1.2 | 503.839 |
| [-] toml 0.2.0 | 768.004 |

#### *jekyll_post_example*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| [-] tomlrb 1.2.8 | 5.834 |
| **[-] enorb 0.10.3** | **7.381** |
| [-] yaml 2.5.3 | 7.485 |
| [-] toml-rb 1.1.2 | 162.969 |

#### *journey_route_data*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| **[-] enorb 0.10.3** | **21.796** |
| [-] yaml 2.5.3 | 31.978 |
| [-] tomlrb 1.2.8 | 32.281 |
| [-] toml-rb 1.1.2 | 537.891 |
| [-] toml 0.2.0 | 936.542 |

#### *yaml_invoice_example*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| [-] yaml 2.5.3 | 23.412 |
| **[-] enorb 0.10.3** | **24.327** |
| [-] tomlrb 1.2.8 | 26.571 |
| [-] toml-rb 1.1.2 | 554.799 |

---

## Notes

**(\*)**: Some libraries included in the benchmarks exhibit an up to 1000x
slower performance compared to the top ranking parsers, these have been
partially sampled with up to only 1k iterations, with the total duration
extrapolated for the global comparison again.

**(\*\*)**: The majority of YAML/TOML parsers produce plain object dumps which are inherently unvalidated. Validation needs to be done manually or through third party validation libraries as there is no concept of built-in validation here.

**(\*\*\*)**: In the enolib/enopy/enorb libraries a document is validated through querying.
If the whole document is queried, the whole document is validated. If only a portion of the document is queried
less validation and memory allocation happens and the performance thereby increases too. The results displayed
here represent the (performance-wise worst) case of using all data present in a document.
