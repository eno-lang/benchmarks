
# Benchmarks

**Last updated April 21st, 2019**

These benchmarks evaluate the performance of all enolib implementations,
compared also to the most popular yaml/toml parsers out there. As with all
statistics please take these findings with a grain of salt, and feel invited to
re-run these benchmarks or point out flaws and possible improvements to the
methodology and code (some instructions are provided below the results).

Benchmarks are currently performed on Ubuntu 19.04 on an Intel® Xeon(R) CPU E5-1650 v3 @ 3.50GHz × 12 (see language sections below for detailed runtime info).

## Graphical results

**[-]** indicates a pure **parsing** run with unsafe results. **(\*)**

**[✓]** indicates a benchmark for **parsing plus querying and validating** the whole document. **(\*\*)**

**░░ 0.123** Shorter bars/numbers indicate **better performance**.

**░░░░░░░░░ 456789** Larger bars/numbers indicate **worse performance**.

Each ░ represents one second.

### JavaScript

Evaluated in **node v11.14.0 [linux-x64]** on **April 21st 2019**.

#### *abstract_hierarchy*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.5.0             [▓] 1.072 seconds
[✓] enolib 0.5.0             [▓] 1.697 seconds
[-] js-yaml 3.13.1           [░] 1.764 seconds
[-] toml-j0.4 1.1.1          [░░░░░░] 6.425 seconds

...  ...                     OFF THE SCALE

[-] toml 3.0.0               1+ minutes
```

#### *content_heavy*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.5.0             [] 0.677 seconds
[✓] enolib 0.5.0             [] 0.796 seconds
[-] js-yaml 3.13.1           [░░░░░░░] 7.679 seconds

...  ...                     OFF THE SCALE

[-] toml-j0.4 1.1.1          5+ minutes
[-] toml 3.0.0               171+ minutes
```

#### *invented_server_configuration*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.5.0             [▓] 1.210 seconds
[-] js-yaml 3.13.1           [░] 1.759 seconds
[✓] enolib 0.5.0             [▓▓] 2.271 seconds
[-] toml-j0.4 1.1.1          [░░░░░░░░░] 9.804 seconds

...  ...                     OFF THE SCALE

[-] toml 3.0.0               2+ minutes
```

#### *jekyll_post_example*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.5.0             [] 0.598 seconds
[-] js-yaml 3.13.1           [] 0.920 seconds
[✓] enolib 0.5.0             [▓] 1.055 seconds
[-] toml-j0.4 1.1.1          [░░░░░░░░░░░] 11.599 seconds

...  ...                     OFF THE SCALE

[-] toml 3.0.0               3+ minutes
```

#### *journey_route_data*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.5.0             [▓▓] 2.381 seconds
[-] js-yaml 3.13.1           [░░░░] 4.025 seconds
[✓] enolib 0.5.0             [▓▓▓▓] 4.084 seconds
[-] toml-j0.4 1.1.1          [░░░░░░░░░░░░░░░░] 16.047 seconds

...  ...                     OFF THE SCALE

[-] toml 3.0.0               2+ minutes
```

#### *yaml_invoice_example*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.5.0             [▓▓] 2.160 seconds
[-] js-yaml 3.13.1           [░░] 2.933 seconds
[✓] enolib 0.5.0             [▓▓▓] 3.881 seconds
[-] toml-j0.4 1.1.1          [░░░░░░░░░░░░] 12.719 seconds

...  ...                     OFF THE SCALE

[-] toml 3.0.0               1+ minutes
```

### Python

Evaluated in **CPython 3.7.3 [Linux-5.0.0-13-generic-x86_64-with-Ubuntu-19.04-disco]** on **April 21st 2019**.

#### *abstract_hierarchy*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.5.0             [▓▓▓▓▓▓▓▓] 8.152 seconds
[-] pyyaml (CLoader) 5.1     [░░░░░░░░░░░░░] 13.295 seconds
[✓] enolib 0.5.0             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 15.576 seconds
[-] toml 0.10.0              [░░░░░░░░░░░░░░░░░] 17.811 seconds
[-] ruamel.yaml 0.15.92      [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 31.981 seconds
[-] qtoml 0.2.4              [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 37.508 seconds

...  ...                     OFF THE SCALE

[-] tomlkit 0.5.3            2+ minutes
[-] pyyaml (FullLoader) 5.1  2+ minutes
```

#### *content_heavy*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.5.0             [▓▓▓▓▓▓▓▓] 8.017 seconds
[✓] enolib 0.5.0             [▓▓▓▓▓▓▓▓▓] 9.285 seconds
[-] pyyaml (CLoader) 5.1     [░░░░░░░░░░░░] 12.360 seconds
[-] ruamel.yaml 0.15.92      [░░░░░░░░░░░░░░░░░░░░░] 21.099 seconds

...  ...                     OFF THE SCALE

[-] toml 0.10.0              9+ minutes
[-] qtoml 0.2.4              10+ minutes
[-] pyyaml (FullLoader) 5.1  17+ minutes
[-] tomlkit 0.5.3            91+ minutes
```

#### *invented_server_configuration*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.5.0             [▓▓▓▓▓▓▓▓] 8.175 seconds
[-] pyyaml (CLoader) 5.1     [░░░░░░░░░░░░░] 13.955 seconds
[✓] enolib 0.5.0             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 21.709 seconds
[-] toml 0.10.0              [░░░░░░░░░░░░░░░░░░░░░░░░░░] 26.189 seconds
[-] ruamel.yaml 0.15.92      [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 32.207 seconds
[-] qtoml 0.2.4              [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 53.372 seconds

...  ...                     OFF THE SCALE

[-] pyyaml (FullLoader) 5.1  2+ minutes
[-] tomlkit 0.5.3            5+ minutes
```

#### *jekyll_post_example*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.5.0             [▓▓▓] 3.752 seconds
[-] pyyaml (CLoader) 5.1     [░░░░░] 5.613 seconds
[✓] enolib 0.5.0             [▓▓▓▓▓▓▓▓▓] 9.796 seconds
[-] ruamel.yaml 0.15.92      [░░░░░░░░░░░░░░░░] 16.460 seconds
[-] toml 0.10.0              [░░░░░░░░░░░░░░░░░░░░░░] 22.921 seconds
[-] qtoml 0.2.4              [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 30.146 seconds

...  ...                     OFF THE SCALE

[-] pyyaml (FullLoader) 5.1  1+ minutes
[-] tomlkit 0.5.3            3+ minutes
```

#### *journey_route_data*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.5.0             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 17.609 seconds
[-] pyyaml (CLoader) 5.1     [░░░░░░░░░░░░░░░░░░░░░░░░░░░] 27.608 seconds
[✓] enolib 0.5.0             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 33.668 seconds
[-] toml 0.10.0              [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 43.380 seconds
[-] ruamel.yaml 0.15.92      [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 58.859 seconds

...  ...                     OFF THE SCALE

[-] qtoml 0.2.4              1+ minutes
[-] pyyaml (FullLoader) 5.1  5+ minutes
[-] tomlkit 0.5.3            6+ minutes
```

#### *yaml_invoice_example*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.5.0             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 14.489 seconds
[-] pyyaml (CLoader) 5.1     [░░░░░░░░░░░░░░░░░░░░] 20.087 seconds
[✓] enolib 0.5.0             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 29.295 seconds
[-] toml 0.10.0              [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 33.046 seconds
[-] ruamel.yaml 0.15.92      [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 47.331 seconds

...  ...                     OFF THE SCALE

[-] qtoml 0.2.4              1+ minutes
[-] pyyaml (FullLoader) 5.1  3+ minutes
[-] tomlkit 0.5.3            5+ minutes
```

### Ruby

Evaluated in **ruby 2.6.3p62 (2019-04-16 revision 67580) [x86_64-linux]** on **April 21st 2019**.

#### *abstract_hierarchy*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.5.0             [▓▓▓▓▓] 5.852 seconds
[✓] enolib 0.5.0             [▓▓▓▓▓▓▓▓▓▓] 10.165 seconds
[-] yaml 2.6.3               [░░░░░░░░░░░░] 12.624 seconds
[-] tomlrb 1.2.8             [░░░░░░░░░░░░░░░░░░] 18.984 seconds

...  ...                     OFF THE SCALE

[-] toml-rb 1.1.2            4+ minutes
[-] toml 0.2.0               7+ minutes
```

#### *content_heavy*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.5.0             [▓▓▓▓▓] 5.774 seconds
[✓] enolib 0.5.0             [▓▓▓▓▓▓] 6.864 seconds
[-] yaml 2.6.3               [░░░░░░░░░░░░░] 13.161 seconds
[-] tomlrb 1.2.8             [░░░░░░░░░░░░░░░░░░░░] 20.412 seconds

...  ...                     OFF THE SCALE

[-] toml-rb 1.1.2            39+ minutes
```

#### *invented_server_configuration*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.5.0             [▓▓▓▓▓] 5.961 seconds
[-] yaml 2.6.3               [░░░░░░░░░░░░] 12.944 seconds
[✓] enolib 0.5.0             [▓▓▓▓▓▓▓▓▓▓▓▓▓] 13.624 seconds
[-] tomlrb 1.2.8             [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 32.959 seconds

...  ...                     OFF THE SCALE

[-] toml-rb 1.1.2            8+ minutes
[-] toml 0.2.0               11+ minutes
```

#### *jekyll_post_example*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.5.0             [▓▓▓▓] 4.970 seconds
[-] tomlrb 1.2.8             [░░░░░] 5.618 seconds
[-] yaml 2.6.3               [░░░░░░░] 7.047 seconds
[✓] enolib 0.5.0             [▓▓▓▓▓▓▓] 7.779 seconds

...  ...                     OFF THE SCALE

[-] toml-rb 1.1.2            3+ minutes
```

#### *journey_route_data*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.5.0             [▓▓▓▓▓▓▓▓▓▓▓▓] 12.539 seconds
[✓] enolib 0.5.0             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 21.619 seconds
[-] yaml 2.6.3               [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 30.278 seconds
[-] tomlrb 1.2.8             [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 32.343 seconds

...  ...                     OFF THE SCALE

[-] toml-rb 1.1.2            8+ minutes
[-] toml 0.2.0               15+ minutes
```

#### *yaml_invoice_example*

&nbsp;  
```
VAL LIBRARY               NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.5.0             [▓▓▓▓▓▓▓▓▓▓▓▓▓] 13.409 seconds
[-] yaml 2.6.3               [░░░░░░░░░░░░░░░░░░░░░] 21.778 seconds
[✓] enolib 0.5.0             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 23.270 seconds
[-] tomlrb 1.2.8             [░░░░░░░░░░░░░░░░░░░░░░░░░░░] 27.707 seconds

...  ...                     OFF THE SCALE

[-] toml-rb 1.1.2            9+ minutes
```

## Numerical results

**[-]** indicates a pure **parsing** run with unsafe results. **(\*)**

**[✓]** indicates a benchmark for **parsing plus querying and validating** the whole document. **(\*\*)**

**0.123** Smaller numbers indicate **better performance**.

**4565789** Larger numbers indicate **worse performance**.


### JavaScript

Evaluated in **node v11.14.0 [linux-x64]** on **April 21st 2019**.

#### *abstract_hierarchy*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.5.0** | **1.072** |
| **[✓] enolib 0.5.0** | **1.697** |
| [-] js-yaml 3.13.1 | 1.764 |
| [-] toml-j0.4 1.1.1 | 6.425 |
| [-] toml 3.0.0 | 79.103 |

#### *content_heavy*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.5.0** | **0.677** |
| **[✓] enolib 0.5.0** | **0.796** |
| [-] js-yaml 3.13.1 | 7.679 |
| [-] toml-j0.4 1.1.1 | 325.046 |
| [-] toml 3.0.0 | 10243.735 |

#### *invented_server_configuration*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.5.0** | **1.210** |
| [-] js-yaml 3.13.1 | 1.759 |
| **[✓] enolib 0.5.0** | **2.271** |
| [-] toml-j0.4 1.1.1 | 9.804 |
| [-] toml 3.0.0 | 127.792 |

#### *jekyll_post_example*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.5.0** | **0.598** |
| [-] js-yaml 3.13.1 | 0.920 |
| **[✓] enolib 0.5.0** | **1.055** |
| [-] toml-j0.4 1.1.1 | 11.599 |
| [-] toml 3.0.0 | 191.061 |

#### *journey_route_data*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.5.0** | **2.381** |
| [-] js-yaml 3.13.1 | 4.025 |
| **[✓] enolib 0.5.0** | **4.084** |
| [-] toml-j0.4 1.1.1 | 16.047 |
| [-] toml 3.0.0 | 115.412 |

#### *yaml_invoice_example*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.5.0** | **2.160** |
| [-] js-yaml 3.13.1 | 2.933 |
| **[✓] enolib 0.5.0** | **3.881** |
| [-] toml-j0.4 1.1.1 | 12.719 |
| [-] toml 3.0.0 | 63.191 |

### Python

Evaluated in **CPython 3.7.3 [Linux-5.0.0-13-generic-x86_64-with-Ubuntu-19.04-disco]** on **April 21st 2019**.

#### *abstract_hierarchy*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.5.0** | **8.152** |
| [-] pyyaml (CLoader) 5.1 | 13.295 |
| **[✓] enolib 0.5.0** | **15.576** |
| [-] toml 0.10.0 | 17.811 |
| [-] ruamel.yaml 0.15.92 | 31.981 |
| [-] qtoml 0.2.4 | 37.508 |
| [-] tomlkit 0.5.3 | 136.390 |
| [-] pyyaml (FullLoader) 5.1 | 141.798 |

#### *content_heavy*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.5.0** | **8.017** |
| **[✓] enolib 0.5.0** | **9.285** |
| [-] pyyaml (CLoader) 5.1 | 12.360 |
| [-] ruamel.yaml 0.15.92 | 21.099 |
| [-] toml 0.10.0 | 521.554 |
| [-] qtoml 0.2.4 | 607.126 |
| [-] pyyaml (FullLoader) 5.1 | 1010.192 |
| [-] tomlkit 0.5.3 | 5483.473 |

#### *invented_server_configuration*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.5.0** | **8.175** |
| [-] pyyaml (CLoader) 5.1 | 13.955 |
| **[✓] enolib 0.5.0** | **21.709** |
| [-] toml 0.10.0 | 26.189 |
| [-] ruamel.yaml 0.15.92 | 32.207 |
| [-] qtoml 0.2.4 | 53.372 |
| [-] pyyaml (FullLoader) 5.1 | 140.939 |
| [-] tomlkit 0.5.3 | 295.773 |

#### *jekyll_post_example*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.5.0** | **3.752** |
| [-] pyyaml (CLoader) 5.1 | 5.613 |
| **[✓] enolib 0.5.0** | **9.796** |
| [-] ruamel.yaml 0.15.92 | 16.460 |
| [-] toml 0.10.0 | 22.921 |
| [-] qtoml 0.2.4 | 30.146 |
| [-] pyyaml (FullLoader) 5.1 | 75.435 |
| [-] tomlkit 0.5.3 | 177.148 |

#### *journey_route_data*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.5.0** | **17.609** |
| [-] pyyaml (CLoader) 5.1 | 27.608 |
| **[✓] enolib 0.5.0** | **33.668** |
| [-] toml 0.10.0 | 43.380 |
| [-] ruamel.yaml 0.15.92 | 58.859 |
| [-] qtoml 0.2.4 | 83.912 |
| [-] pyyaml (FullLoader) 5.1 | 293.306 |
| [-] tomlkit 0.5.3 | 380.463 |

#### *yaml_invoice_example*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.5.0** | **14.489** |
| [-] pyyaml (CLoader) 5.1 | 20.087 |
| **[✓] enolib 0.5.0** | **29.295** |
| [-] toml 0.10.0 | 33.046 |
| [-] ruamel.yaml 0.15.92 | 47.331 |
| [-] qtoml 0.2.4 | 63.233 |
| [-] pyyaml (FullLoader) 5.1 | 205.240 |
| [-] tomlkit 0.5.3 | 281.423 |

### Ruby

Evaluated in **ruby 2.6.3p62 (2019-04-16 revision 67580) [x86_64-linux]** on **April 21st 2019**.

#### *abstract_hierarchy*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.5.0** | **5.852** |
| **[✓] enolib 0.5.0** | **10.165** |
| [-] yaml 2.6.3 | 12.624 |
| [-] tomlrb 1.2.8 | 18.984 |
| [-] toml-rb 1.1.2 | 258.676 |
| [-] toml 0.2.0 | 396.678 |

#### *content_heavy*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.5.0** | **5.774** |
| **[✓] enolib 0.5.0** | **6.864** |
| [-] yaml 2.6.3 | 13.161 |
| [-] tomlrb 1.2.8 | 20.412 |
| [-] toml-rb 1.1.2 | 2348.184 |

#### *invented_server_configuration*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.5.0** | **5.961** |
| [-] yaml 2.6.3 | 12.944 |
| **[✓] enolib 0.5.0** | **13.624** |
| [-] tomlrb 1.2.8 | 32.959 |
| [-] toml-rb 1.1.2 | 464.022 |
| [-] toml 0.2.0 | 680.482 |

#### *jekyll_post_example*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.5.0** | **4.970** |
| [-] tomlrb 1.2.8 | 5.618 |
| [-] yaml 2.6.3 | 7.047 |
| **[✓] enolib 0.5.0** | **7.779** |
| [-] toml-rb 1.1.2 | 153.972 |

#### *journey_route_data*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.5.0** | **12.539** |
| **[✓] enolib 0.5.0** | **21.619** |
| [-] yaml 2.6.3 | 30.278 |
| [-] tomlrb 1.2.8 | 32.343 |
| [-] toml-rb 1.1.2 | 488.594 |
| [-] toml 0.2.0 | 923.540 |

#### *yaml_invoice_example*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.5.0** | **13.409** |
| [-] yaml 2.6.3 | 21.778 |
| **[✓] enolib 0.5.0** | **23.270** |
| [-] tomlrb 1.2.8 | 27.707 |
| [-] toml-rb 1.1.2 | 539.664 |

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
