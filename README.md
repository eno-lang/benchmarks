
# Benchmarks

**Last updated March 31st, 2019**

These benchmarks evaluate the performance of all enolib implementations,
compared also to the most popular yaml/toml parsers out there. As with all
statistics please take these findings with a grain of salt, and feel invited to
re-run these benchmarks or point out flaws and possible improvements to the
methodology and code (some instructions are provided below the results).

Benchmarks are currently performed on Ubuntu 18.10 on an Intel® Xeon(R) CPU E5-1650 v3 @ 3.50GHz × 12 (see language sections below for detailed runtime info).

## Graphical results

**[-]** indicates a pure **parsing** run with unsafe results. **(\*)**

**[✓]** indicates a benchmark for **parsing plus querying and validating** the whole document. **(\*\*)**

**░░ 0.123** Shorter bars/numbers indicate **better performance**.

**░░░░░░░░░ 456789** Larger bars/numbers indicate **worse performance**.

Each ░ represents one second.

### JavaScript

Evaluated in **node v11.12.0 [linux-x64]** on **March 31st 2019**.

#### *abstract_hierarchy*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.3.5             [▓] 1.161 seconds
[✓] enolib 0.3.5             [▓] 1.889 seconds
[-] js-yaml 3.13.0           [░░] 2.041 seconds
[-] toml-j0.4 1.1.1          [░░░░░░░] 7.845 seconds

...  ...                     OFF THE SCALE

[-] toml 3.0.0               1+ minutes
```

#### *content_heavy*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.3.5             [] 0.753 seconds
[✓] enolib 0.3.5             [] 0.834 seconds
[-] js-yaml 3.13.0           [░░░░░░░] 7.627 seconds

...  ...                     OFF THE SCALE

[-] toml-j0.4 1.1.1          7+ minutes
[-] toml 3.0.0               170+ minutes
```

#### *invented_server_configuration*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.3.5             [▓] 1.272 seconds
[-] js-yaml 3.13.0           [░░] 2.051 seconds
[✓] enolib 0.3.5             [▓▓] 2.433 seconds
[-] toml-j0.4 1.1.1          [░░░░░░░░░░░] 11.584 seconds

...  ...                     OFF THE SCALE

[-] toml 3.0.0               2+ minutes
```

#### *jekyll_post_example*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.3.5             [] 0.593 seconds
[-] js-yaml 3.13.0           [░] 1.013 seconds
[✓] enolib 0.3.5             [▓] 1.078 seconds
[-] toml-j0.4 1.1.1          [░░░░░░░░░░░░░░░] 15.021 seconds

...  ...                     OFF THE SCALE

[-] toml 3.0.0               3+ minutes
```

#### *journey_route_data*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.3.5             [▓▓] 2.462 seconds
[✓] enolib 0.3.5             [▓▓▓▓] 4.102 seconds
[-] js-yaml 3.13.0           [░░░░] 4.661 seconds
[-] toml-j0.4 1.1.1          [░░░░░░░░░░░░░░░░░░░] 19.072 seconds

...  ...                     OFF THE SCALE

[-] toml 3.0.0               2+ minutes
```

#### *yaml_invoice_example*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.3.5             [▓▓] 2.329 seconds
[-] js-yaml 3.13.0           [░░░] 3.248 seconds
[✓] enolib 0.3.5             [▓▓▓] 3.936 seconds
[-] toml-j0.4 1.1.1          [░░░░░░░░░░░░░░] 14.796 seconds

...  ...                     OFF THE SCALE

[-] toml 3.0.0               1+ minutes
```

### Python

Evaluated in **CPython 3.6.7 [Linux-4.18.0-16-generic-x86_64-with-Ubuntu-18.10-cosmic]** on **March 31st 2019**.

#### *abstract_hierarchy*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.4.0             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 14.403 seconds
[-] pyyaml (CLoader) 5.1     [░░░░░░░░░░░░░░░░░░░░░] 21.669 seconds
[-] toml 0.10.0              [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 29.299 seconds
[-] ruamel.yaml 0.15.89      [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 50.703 seconds
[-] qtoml 0.2.4              [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 53.913 seconds

...  ...                     OFF THE SCALE

[-] tomlkit 0.5.3            3+ minutes
[-] pyyaml (FullLoader) 5.1  3+ minutes
```

#### *content_heavy*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.4.0             [▓▓▓▓▓▓▓▓▓▓] 10.733 seconds
[-] pyyaml (CLoader) 5.1     [░░░░░░░░░░░░░] 13.573 seconds
[-] ruamel.yaml 0.15.89      [░░░░░░░░░░░░░░░░░░░░░░░] 23.448 seconds

...  ...                     OFF THE SCALE

[-] toml 0.10.0              16+ minutes
[-] qtoml 0.2.4              18+ minutes
[-] pyyaml (FullLoader) 5.1  23+ minutes
[-] tomlkit 0.5.3            125+ minutes
```

#### *invented_server_configuration*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.4.0             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 14.393 seconds
[-] pyyaml (CLoader) 5.1     [░░░░░░░░░░░░░░░░░░░░░░] 22.753 seconds
[-] toml 0.10.0              [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 44.881 seconds
[-] ruamel.yaml 0.15.89      [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 51.900 seconds

...  ...                     OFF THE SCALE

[-] qtoml 0.2.4              1+ minutes
[-] pyyaml (FullLoader) 5.1  3+ minutes
[-] tomlkit 0.5.3            7+ minutes
```

#### *jekyll_post_example*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.4.0             [▓▓▓▓▓▓] 6.404 seconds
[-] pyyaml (CLoader) 5.1     [░░░░░░░░] 8.458 seconds
[-] ruamel.yaml 0.15.89      [░░░░░░░░░░░░░░░░░░░░░░░] 23.144 seconds
[-] toml 0.10.0              [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 38.877 seconds
[-] qtoml 0.2.4              [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 49.045 seconds

...  ...                     OFF THE SCALE

[-] pyyaml (FullLoader) 5.1  2+ minutes
[-] tomlkit 0.5.3            4+ minutes
```

#### *journey_route_data*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.4.0             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 35.889 seconds
[-] pyyaml (CLoader) 5.1     [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 43.585 seconds

...  ...                     OFF THE SCALE

[-] toml 0.10.0              1+ minutes
[-] ruamel.yaml 0.15.89      2+ minutes
[-] qtoml 0.2.4              2+ minutes
[-] pyyaml (FullLoader) 5.1  7+ minutes
[-] tomlkit 0.5.3            9+ minutes
```

#### *yaml_invoice_example*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.4.0             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 23.722 seconds
[-] pyyaml (CLoader) 5.1     [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 31.904 seconds
[-] toml 0.10.0              [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 54.322 seconds

...  ...                     OFF THE SCALE

[-] ruamel.yaml 0.15.89      1+ minutes
[-] qtoml 0.2.4              2+ minutes
[-] pyyaml (FullLoader) 5.1  5+ minutes
[-] tomlkit 0.5.3            6+ minutes
```

### Ruby

Evaluated in **ruby 2.6.2p47 (2019-03-13 revision 67232) [x86_64-linux]** on **March 31st 2019**.

#### *abstract_hierarchy*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enorb 0.10.3             [▓▓▓▓▓▓▓▓▓▓▓▓▓] 13.946 seconds
[-] yaml 2.6.2               [░░░░░░░░░░░░░░░░] 16.395 seconds
[-] tomlrb 1.2.8             [░░░░░░░░░░░░░░░░░░░░░░░] 23.230 seconds

...  ...                     OFF THE SCALE

[-] toml-rb 1.1.2            7+ minutes
[-] toml 0.2.0               9+ minutes
```

#### *content_heavy*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enorb 0.10.3             [▓▓▓▓▓▓▓▓▓] 9.816 seconds
[-] yaml 2.6.2               [░░░░░░░░░░░░░] 13.884 seconds
[-] tomlrb 1.2.8             [░░░░░░░░░░░░░░░░░] 17.989 seconds

...  ...                     OFF THE SCALE

[-] toml-rb 1.1.2            70+ minutes
```

#### *invented_server_configuration*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] yaml 2.6.2               [░░░░░░░░░░░░░░░░] 16.961 seconds
[-] enorb 0.10.3             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 17.518 seconds
[-] tomlrb 1.2.8             [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 40.055 seconds

...  ...                     OFF THE SCALE

[-] toml-rb 1.1.2            13+ minutes
[-] toml 0.2.0               16+ minutes
```

#### *jekyll_post_example*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] tomlrb 1.2.8             [░░░░░░] 6.564 seconds
[-] enorb 0.10.3             [▓▓▓▓▓▓▓▓] 8.172 seconds
[-] yaml 2.6.2               [░░░░░░░░] 8.506 seconds

...  ...                     OFF THE SCALE

[-] toml-rb 1.1.2            4+ minutes
```

#### *journey_route_data*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enorb 0.10.3             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 29.033 seconds
[-] yaml 2.6.2               [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 36.431 seconds
[-] tomlrb 1.2.8             [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 39.147 seconds

...  ...                     OFF THE SCALE

[-] toml-rb 1.1.2            14+ minutes
[-] toml 0.2.0               22+ minutes
```

#### *yaml_invoice_example*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] yaml 2.6.2               [░░░░░░░░░░░░░░░░░░░░░░░░░░] 26.157 seconds
[-] enorb 0.10.3             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 28.202 seconds
[-] tomlrb 1.2.8             [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 31.536 seconds

...  ...                     OFF THE SCALE

[-] toml-rb 1.1.2            14+ minutes
```

## Numerical results

**[-]** indicates a pure **parsing** run with unsafe results. **(\*)**

**[✓]** indicates a benchmark for **parsing plus querying and validating** the whole document. **(\*\*)**

**0.123** Smaller numbers indicate **better performance**.

**4565789** Larger numbers indicate **worse performance**.


### JavaScript

Evaluated in **node v11.12.0 [linux-x64]** on **March 31st 2019**.

#### *abstract_hierarchy*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.3.5** | **1.161** |
| **[✓] enolib 0.3.5** | **1.889** |
| [-] js-yaml 3.13.0 | 2.041 |
| [-] toml-j0.4 1.1.1 | 7.845 |
| [-] toml 3.0.0 | 81.516 |

#### *content_heavy*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.3.5** | **0.753** |
| **[✓] enolib 0.3.5** | **0.834** |
| [-] js-yaml 3.13.0 | 7.627 |
| [-] toml-j0.4 1.1.1 | 418.090 |
| [-] toml 3.0.0 | 10186.413 |

#### *invented_server_configuration*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.3.5** | **1.272** |
| [-] js-yaml 3.13.0 | 2.051 |
| **[✓] enolib 0.3.5** | **2.433** |
| [-] toml-j0.4 1.1.1 | 11.584 |
| [-] toml 3.0.0 | 132.039 |

#### *jekyll_post_example*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.3.5** | **0.593** |
| [-] js-yaml 3.13.0 | 1.013 |
| **[✓] enolib 0.3.5** | **1.078** |
| [-] toml-j0.4 1.1.1 | 15.021 |
| [-] toml 3.0.0 | 193.913 |

#### *journey_route_data*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.3.5** | **2.462** |
| **[✓] enolib 0.3.5** | **4.102** |
| [-] js-yaml 3.13.0 | 4.661 |
| [-] toml-j0.4 1.1.1 | 19.072 |
| [-] toml 3.0.0 | 117.933 |

#### *yaml_invoice_example*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.3.5** | **2.329** |
| [-] js-yaml 3.13.0 | 3.248 |
| **[✓] enolib 0.3.5** | **3.936** |
| [-] toml-j0.4 1.1.1 | 14.796 |
| [-] toml 3.0.0 | 65.351 |

### Python

Evaluated in **CPython 3.6.7 [Linux-4.18.0-16-generic-x86_64-with-Ubuntu-18.10-cosmic]** on **March 31st 2019**.

#### *abstract_hierarchy*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.4.0** | **14.403** |
| [-] pyyaml (CLoader) 5.1 | 21.669 |
| [-] toml 0.10.0 | 29.299 |
| [-] ruamel.yaml 0.15.89 | 50.703 |
| [-] qtoml 0.2.4 | 53.913 |
| [-] tomlkit 0.5.3 | 183.931 |
| [-] pyyaml (FullLoader) 5.1 | 209.510 |

#### *content_heavy*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.4.0** | **10.733** |
| [-] pyyaml (CLoader) 5.1 | 13.573 |
| [-] ruamel.yaml 0.15.89 | 23.448 |
| [-] toml 0.10.0 | 938.125 |
| [-] qtoml 0.2.4 | 1090.629 |
| [-] pyyaml (FullLoader) 5.1 | 1384.641 |
| [-] tomlkit 0.5.3 | 7521.255 |

#### *invented_server_configuration*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.4.0** | **14.393** |
| [-] pyyaml (CLoader) 5.1 | 22.753 |
| [-] toml 0.10.0 | 44.881 |
| [-] ruamel.yaml 0.15.89 | 51.900 |
| [-] qtoml 0.2.4 | 80.227 |
| [-] pyyaml (FullLoader) 5.1 | 206.118 |
| [-] tomlkit 0.5.3 | 397.722 |

#### *jekyll_post_example*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.4.0** | **6.404** |
| [-] pyyaml (CLoader) 5.1 | 8.458 |
| [-] ruamel.yaml 0.15.89 | 23.144 |
| [-] toml 0.10.0 | 38.877 |
| [-] qtoml 0.2.4 | 49.045 |
| [-] pyyaml (FullLoader) 5.1 | 105.733 |
| [-] tomlkit 0.5.3 | 242.368 |

#### *journey_route_data*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.4.0** | **35.889** |
| [-] pyyaml (CLoader) 5.1 | 43.585 |
| [-] toml 0.10.0 | 76.120 |
| [-] ruamel.yaml 0.15.89 | 95.303 |
| [-] qtoml 0.2.4 | 122.091 |
| [-] pyyaml (FullLoader) 5.1 | 419.647 |
| [-] tomlkit 0.5.3 | 513.059 |

#### *yaml_invoice_example*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.4.0** | **23.722** |
| [-] pyyaml (CLoader) 5.1 | 31.904 |
| [-] toml 0.10.0 | 54.322 |
| [-] ruamel.yaml 0.15.89 | 75.724 |
| [-] qtoml 0.2.4 | 92.225 |
| [-] pyyaml (FullLoader) 5.1 | 294.104 |
| [-] tomlkit 0.5.3 | 367.029 |

### Ruby

Evaluated in **ruby 2.6.2p47 (2019-03-13 revision 67232) [x86_64-linux]** on **March 31st 2019**.

#### *abstract_hierarchy*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enorb 0.10.3** | **13.946** |
| [-] yaml 2.6.2 | 16.395 |
| [-] tomlrb 1.2.8 | 23.230 |
| [-] toml-rb 1.1.2 | 420.420 |
| [-] toml 0.2.0 | 564.027 |

#### *content_heavy*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enorb 0.10.3** | **9.816** |
| [-] yaml 2.6.2 | 13.884 |
| [-] tomlrb 1.2.8 | 17.989 |
| [-] toml-rb 1.1.2 | 4198.683 |

#### *invented_server_configuration*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| [-] yaml 2.6.2 | 16.961 |
| **[-] enorb 0.10.3** | **17.518** |
| [-] tomlrb 1.2.8 | 40.055 |
| [-] toml-rb 1.1.2 | 759.639 |
| [-] toml 0.2.0 | 983.371 |

#### *jekyll_post_example*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| [-] tomlrb 1.2.8 | 6.564 |
| **[-] enorb 0.10.3** | **8.172** |
| [-] yaml 2.6.2 | 8.506 |
| [-] toml-rb 1.1.2 | 257.501 |

#### *journey_route_data*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enorb 0.10.3** | **29.033** |
| [-] yaml 2.6.2 | 36.431 |
| [-] tomlrb 1.2.8 | 39.147 |
| [-] toml-rb 1.1.2 | 819.687 |
| [-] toml 0.2.0 | 1349.509 |

#### *yaml_invoice_example*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| [-] yaml 2.6.2 | 26.157 |
| **[-] enorb 0.10.3** | **28.202** |
| [-] tomlrb 1.2.8 | 31.536 |
| [-] toml-rb 1.1.2 | 855.629 |

---

## How the data is gathered

To see how the measurements were obtained, please take a look at the source of `benchmark.js/py/rb` inside this repository.
To see how the report was compiled, please study `report.js` inside this repository.


## Notes

**(\*)**: The majority of YAML/TOML parsers produce plain object dumps which are inherently unvalidated.

**(\*\*)**: In the enolib libraries a document is validated through querying.
If the whole document is queried, the whole document is validated. If only a portion of the document is queried
less validation and less memory allocation happens and the performance thereby increases too. The results displayed
here represent the (performance-wise worst) case of using all data present in a document.

**(\*\*\*)**: Some libraries included in the benchmarks exhibit an up to 1000x
slower performance compared to the top ranking parsers, these have been
partially sampled with up to only 1k iterations, with the total duration
extrapolated for the global comparison again.
