
# Benchmarks

This report was generated on **March 31st 2019**.

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

Evaluated in **node v11.12.0 [linux-x64]** on **March 31st 2019**.

#### *abstract_hierarchy*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] enolib 0.3.5          [▓] 1.161 seconds
[✓] enolib 0.3.5          [▓] 1.889 seconds
[-] js-yaml 3.13.0        [░░] 2.041 seconds
[-] toml-j0.4 1.1.1       [░░░░░░░] 7.845 seconds

...  ...                  OFF THE SCALE

[-] toml 3.0.0            1+ minutes
```

#### *content_heavy*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] enolib 0.3.5          [] 0.753 seconds
[✓] enolib 0.3.5          [] 0.834 seconds
[-] js-yaml 3.13.0        [░░░░░░░] 7.627 seconds

...  ...                  OFF THE SCALE

[-] toml-j0.4 1.1.1       7+ minutes
[-] toml 3.0.0            170+ minutes
```

#### *invented_server_configuration*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] enolib 0.3.5          [▓] 1.272 seconds
[-] js-yaml 3.13.0        [░░] 2.051 seconds
[✓] enolib 0.3.5          [▓▓] 2.433 seconds
[-] toml-j0.4 1.1.1       [░░░░░░░░░░░] 11.584 seconds

...  ...                  OFF THE SCALE

[-] toml 3.0.0            2+ minutes
```

#### *jekyll_post_example*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] enolib 0.3.5          [] 0.593 seconds
[-] js-yaml 3.13.0        [░] 1.013 seconds
[✓] enolib 0.3.5          [▓] 1.078 seconds
[-] toml-j0.4 1.1.1       [░░░░░░░░░░░░░░░] 15.021 seconds

...  ...                  OFF THE SCALE

[-] toml 3.0.0            3+ minutes
```

#### *journey_route_data*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] enolib 0.3.5          [▓▓] 2.462 seconds
[✓] enolib 0.3.5          [▓▓▓▓] 4.102 seconds
[-] js-yaml 3.13.0        [░░░░] 4.661 seconds
[-] toml-j0.4 1.1.1       [░░░░░░░░░░░░░░░░░░░] 19.072 seconds

...  ...                  OFF THE SCALE

[-] toml 3.0.0            2+ minutes
```

#### *yaml_invoice_example*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] enolib 0.3.5          [▓▓] 2.329 seconds
[-] js-yaml 3.13.0        [░░░] 3.248 seconds
[✓] enolib 0.3.5          [▓▓▓] 3.936 seconds
[-] toml-j0.4 1.1.1       [░░░░░░░░░░░░░░] 14.796 seconds

...  ...                  OFF THE SCALE

[-] toml 3.0.0            1+ minutes
```

### Python

Evaluated in **CPython 3.6.7 [Linux-4.18.0-16-generic-x86_64-with-Ubuntu-18.10-cosmic]** on **March 31st 2019**.

#### *abstract_hierarchy*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] enopy 0.9.2           [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 21.912 seconds
[-] pyyaml (libyaml) 3.13 [░░░░░░░░░░░░░░░░░░░░░░] 22.243 seconds
[-] toml 0.10.0           [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 29.876 seconds
[-] ruamel.yaml 0.15.85   [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 52.053 seconds
[-] qtoml 0.2.3           [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 55.593 seconds

...  ...                  OFF THE SCALE

[-] tomlkit 0.5.3         3+ minutes
[-] pyyaml (default) 3.13 4+ minutes
```

#### *content_heavy*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] pyyaml (libyaml) 3.13 [░░░░░░░░░░░░░] 13.407 seconds
[-] enopy 0.9.2           [▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 14.165 seconds
[-] ruamel.yaml 0.15.85   [░░░░░░░░░░░░░░░░░░░░░░░] 23.853 seconds

...  ...                  OFF THE SCALE

[-] toml 0.10.0           16+ minutes
[-] qtoml 0.2.3           18+ minutes
[-] pyyaml (default) 3.13 23+ minutes
[-] tomlkit 0.5.3         127+ minutes
```

#### *invented_server_configuration*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] pyyaml (libyaml) 3.13 [░░░░░░░░░░░░░░░░░░░░░░] 22.392 seconds
[-] enopy 0.9.2           [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 25.666 seconds
[-] toml 0.10.0           [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 45.217 seconds
[-] ruamel.yaml 0.15.85   [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 52.138 seconds

...  ...                  OFF THE SCALE

[-] qtoml 0.2.3           1+ minutes
[-] pyyaml (default) 3.13 3+ minutes
[-] tomlkit 0.5.3         7+ minutes
```

#### *jekyll_post_example*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] pyyaml (libyaml) 3.13 [░░░░░░░░] 8.289 seconds
[-] enopy 0.9.2           [▓▓▓▓▓▓▓▓] 8.702 seconds
[-] ruamel.yaml 0.15.85   [░░░░░░░░░░░░░░░░░░░░░░] 22.733 seconds
[-] toml 0.10.0           [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 38.215 seconds
[-] qtoml 0.2.3           [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 49.407 seconds

...  ...                  OFF THE SCALE

[-] pyyaml (default) 3.13 2+ minutes
[-] tomlkit 0.5.3         4+ minutes
```

#### *journey_route_data*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] pyyaml (libyaml) 3.13 [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 43.590 seconds
[-] enopy 0.9.2           [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 47.962 seconds

...  ...                  OFF THE SCALE

[-] toml 0.10.0           1+ minutes
[-] ruamel.yaml 0.15.85   2+ minutes
[-] qtoml 0.2.3           2+ minutes
[-] pyyaml (default) 3.13 7+ minutes
[-] tomlkit 0.5.3         9+ minutes
```

#### *yaml_invoice_example*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] pyyaml (libyaml) 3.13 [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 31.492 seconds
[-] enopy 0.9.2           [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 37.006 seconds
[-] toml 0.10.0           [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 53.853 seconds

...  ...                  OFF THE SCALE

[-] ruamel.yaml 0.15.85   1+ minutes
[-] qtoml 0.2.3           2+ minutes
[-] pyyaml (default) 3.13 5+ minutes
[-] tomlkit 0.5.3         6+ minutes
```

### Ruby

Evaluated in **ruby 2.6.2p47 (2019-03-13 revision 67232) [x86_64-linux]** on **March 31st 2019**.

#### *abstract_hierarchy*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] enorb 0.10.3          [▓▓▓▓▓▓▓▓▓▓▓▓▓] 13.946 seconds
[-] yaml 2.6.2            [░░░░░░░░░░░░░░░░] 16.395 seconds
[-] tomlrb 1.2.8          [░░░░░░░░░░░░░░░░░░░░░░░] 23.230 seconds

...  ...                  OFF THE SCALE

[-] toml-rb 1.1.2         7+ minutes
[-] toml 0.2.0            9+ minutes
```

#### *content_heavy*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] enorb 0.10.3          [▓▓▓▓▓▓▓▓▓] 9.816 seconds
[-] yaml 2.6.2            [░░░░░░░░░░░░░] 13.884 seconds
[-] tomlrb 1.2.8          [░░░░░░░░░░░░░░░░░] 17.989 seconds

...  ...                  OFF THE SCALE

[-] toml-rb 1.1.2         70+ minutes
```

#### *invented_server_configuration*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] yaml 2.6.2            [░░░░░░░░░░░░░░░░] 16.961 seconds
[-] enorb 0.10.3          [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 17.518 seconds
[-] tomlrb 1.2.8          [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 40.055 seconds

...  ...                  OFF THE SCALE

[-] toml-rb 1.1.2         13+ minutes
[-] toml 0.2.0            16+ minutes
```

#### *jekyll_post_example*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] tomlrb 1.2.8          [░░░░░░] 6.564 seconds
[-] enorb 0.10.3          [▓▓▓▓▓▓▓▓] 8.172 seconds
[-] yaml 2.6.2            [░░░░░░░░] 8.506 seconds

...  ...                  OFF THE SCALE

[-] toml-rb 1.1.2         4+ minutes
```

#### *journey_route_data*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] enorb 0.10.3          [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 29.033 seconds
[-] yaml 2.6.2            [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 36.431 seconds
[-] tomlrb 1.2.8          [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 39.147 seconds

...  ...                  OFF THE SCALE

[-] toml-rb 1.1.2         14+ minutes
[-] toml 0.2.0            22+ minutes
```

#### *yaml_invoice_example*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (*) ITERATIONS

[-] yaml 2.6.2            [░░░░░░░░░░░░░░░░░░░░░░░░░░] 26.157 seconds
[-] enorb 0.10.3          [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 28.202 seconds
[-] tomlrb 1.2.8          [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 31.536 seconds

...  ...                  OFF THE SCALE

[-] toml-rb 1.1.2         14+ minutes
```

## Numerical results

**[-]** indicates a pure **parsing** run with unsafe results. **(\*\*)**

**[✓]** indicates a benchmark for **parsing plus querying and validating** the whole document. **(\*\*\*)**

**0.123** Smaller numbers indicate **better performance**.

**4565789** Larger numbers indicate **worse performance**.


### JavaScript

Evaluated in **node v11.12.0 [linux-x64]** on **March 31st 2019**.

#### *abstract_hierarchy*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.3.5** | **1.161** |
| **[✓] enolib 0.3.5** | **1.889** |
| [-] js-yaml 3.13.0 | 2.041 |
| [-] toml-j0.4 1.1.1 | 7.845 |
| [-] toml 3.0.0 | 81.516 |

#### *content_heavy*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.3.5** | **0.753** |
| **[✓] enolib 0.3.5** | **0.834** |
| [-] js-yaml 3.13.0 | 7.627 |
| [-] toml-j0.4 1.1.1 | 418.090 |
| [-] toml 3.0.0 | 10186.413 |

#### *invented_server_configuration*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.3.5** | **1.272** |
| [-] js-yaml 3.13.0 | 2.051 |
| **[✓] enolib 0.3.5** | **2.433** |
| [-] toml-j0.4 1.1.1 | 11.584 |
| [-] toml 3.0.0 | 132.039 |

#### *jekyll_post_example*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.3.5** | **0.593** |
| [-] js-yaml 3.13.0 | 1.013 |
| **[✓] enolib 0.3.5** | **1.078** |
| [-] toml-j0.4 1.1.1 | 15.021 |
| [-] toml 3.0.0 | 193.913 |

#### *journey_route_data*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.3.5** | **2.462** |
| **[✓] enolib 0.3.5** | **4.102** |
| [-] js-yaml 3.13.0 | 4.661 |
| [-] toml-j0.4 1.1.1 | 19.072 |
| [-] toml 3.0.0 | 117.933 |

#### *yaml_invoice_example*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.3.5** | **2.329** |
| [-] js-yaml 3.13.0 | 3.248 |
| **[✓] enolib 0.3.5** | **3.936** |
| [-] toml-j0.4 1.1.1 | 14.796 |
| [-] toml 3.0.0 | 65.351 |

### Python

Evaluated in **CPython 3.6.7 [Linux-4.18.0-16-generic-x86_64-with-Ubuntu-18.10-cosmic]** on **March 31st 2019**.

#### *abstract_hierarchy*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| **[-] enopy 0.9.2** | **21.912** |
| [-] pyyaml (libyaml) 3.13 | 22.243 |
| [-] toml 0.10.0 | 29.876 |
| [-] ruamel.yaml 0.15.85 | 52.053 |
| [-] qtoml 0.2.3 | 55.593 |
| [-] tomlkit 0.5.3 | 185.242 |
| [-] pyyaml (default) 3.13 | 211.494 |

#### *content_heavy*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| [-] pyyaml (libyaml) 3.13 | 13.407 |
| **[-] enopy 0.9.2** | **14.165** |
| [-] ruamel.yaml 0.15.85 | 23.853 |
| [-] toml 0.10.0 | 987.291 |
| [-] qtoml 0.2.3 | 1102.472 |
| [-] pyyaml (default) 3.13 | 1392.185 |
| [-] tomlkit 0.5.3 | 7624.436 |

#### *invented_server_configuration*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| [-] pyyaml (libyaml) 3.13 | 22.392 |
| **[-] enopy 0.9.2** | **25.666** |
| [-] toml 0.10.0 | 45.217 |
| [-] ruamel.yaml 0.15.85 | 52.138 |
| [-] qtoml 0.2.3 | 79.970 |
| [-] pyyaml (default) 3.13 | 208.552 |
| [-] tomlkit 0.5.3 | 392.103 |

#### *jekyll_post_example*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| [-] pyyaml (libyaml) 3.13 | 8.289 |
| **[-] enopy 0.9.2** | **8.702** |
| [-] ruamel.yaml 0.15.85 | 22.733 |
| [-] toml 0.10.0 | 38.215 |
| [-] qtoml 0.2.3 | 49.407 |
| [-] pyyaml (default) 3.13 | 107.063 |
| [-] tomlkit 0.5.3 | 240.611 |

#### *journey_route_data*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| [-] pyyaml (libyaml) 3.13 | 43.590 |
| **[-] enopy 0.9.2** | **47.962** |
| [-] toml 0.10.0 | 76.509 |
| [-] ruamel.yaml 0.15.85 | 96.306 |
| [-] qtoml 0.2.3 | 122.750 |
| [-] pyyaml (default) 3.13 | 421.398 |
| [-] tomlkit 0.5.3 | 512.751 |

#### *yaml_invoice_example*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| [-] pyyaml (libyaml) 3.13 | 31.492 |
| **[-] enopy 0.9.2** | **37.006** |
| [-] toml 0.10.0 | 53.853 |
| [-] ruamel.yaml 0.15.85 | 76.268 |
| [-] qtoml 0.2.3 | 92.111 |
| [-] pyyaml (default) 3.13 | 296.003 |
| [-] tomlkit 0.5.3 | 365.228 |

### Ruby

Evaluated in **ruby 2.6.2p47 (2019-03-13 revision 67232) [x86_64-linux]** on **March 31st 2019**.

#### *abstract_hierarchy*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| **[-] enorb 0.10.3** | **13.946** |
| [-] yaml 2.6.2 | 16.395 |
| [-] tomlrb 1.2.8 | 23.230 |
| [-] toml-rb 1.1.2 | 420.420 |
| [-] toml 0.2.0 | 564.027 |

#### *content_heavy*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| **[-] enorb 0.10.3** | **9.816** |
| [-] yaml 2.6.2 | 13.884 |
| [-] tomlrb 1.2.8 | 17.989 |
| [-] toml-rb 1.1.2 | 4198.683 |

#### *invented_server_configuration*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| [-] yaml 2.6.2 | 16.961 |
| **[-] enorb 0.10.3** | **17.518** |
| [-] tomlrb 1.2.8 | 40.055 |
| [-] toml-rb 1.1.2 | 759.639 |
| [-] toml 0.2.0 | 983.371 |

#### *jekyll_post_example*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| [-] tomlrb 1.2.8 | 6.564 |
| **[-] enorb 0.10.3** | **8.172** |
| [-] yaml 2.6.2 | 8.506 |
| [-] toml-rb 1.1.2 | 257.501 |

#### *journey_route_data*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| **[-] enorb 0.10.3** | **29.033** |
| [-] yaml 2.6.2 | 36.431 |
| [-] tomlrb 1.2.8 | 39.147 |
| [-] toml-rb 1.1.2 | 819.687 |
| [-] toml 0.2.0 | 1349.509 |

#### *yaml_invoice_example*

| Library | Number of seconds for 100k (*) iterations |
| ------- | ------------------------------------- |
| [-] yaml 2.6.2 | 26.157 |
| **[-] enorb 0.10.3** | **28.202** |
| [-] tomlrb 1.2.8 | 31.536 |
| [-] toml-rb 1.1.2 | 855.629 |

---

## Notes

**(\*)**: Some libraries included in the benchmarks exhibit an up to 1000x
slower performance compared to the top ranking parsers, these have been
partially sampled with up to only 1k iterations, with the total duration
extrapolated for the global comparison again.

**(\*\*)**: The majority of YAML/TOML parsers produce plain object dumps which are inherently unvalidated.

**(\*\*\*)**: In the enolib/enopy/enorb libraries a document is validated through querying.
If the whole document is queried, the whole document is validated. If only a portion of the document is queried
less validation and less memory allocation happens and the performance thereby increases too. The results displayed
here represent the (performance-wise worst) case of using all data present in a document.
