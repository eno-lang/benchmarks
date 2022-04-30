# enolib benchmarks

**Last updated April 30, 2022**

These benchmarks evaluate the performance of all enolib implementations,
compared also to the most popular yaml/toml parsers out there. As with all
statistics please take these findings with a grain of salt, and feel invited to
re-run these benchmarks or point out flaws and possible improvements to the
methodology and code (some instructions are provided below the results).

Benchmarks are currently performed on Arch Linux on an Intel® Xeon(R) CPU E5-1650 v3 @ 3.50GHz × 12 (see language sections below for detailed runtime info).

## Graphical results

**[-]** indicates a pure **parsing** run with unsafe results. **(\*)**

**[✓]** indicates a benchmark for **parsing plus querying and validating** the whole document. **(\*\*)**

**░░ 0.123** Shorter bars/numbers indicate **better performance**.

**░░░░░░░░░ 456789** Larger bars/numbers indicate **worse performance**.

Each ░ represents one second.

### JavaScript

Evaluated in **node v16.14.2 [linux-x64]** on **April 29, 2022**.

#### *abstract_hierarchy*

&nbsp;  
```
VAL LIBRARY                  NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib (git)             [] 0.991 seconds
[✓] enolib (git)             [▓] 1.355 seconds
[-] js-yaml 4.1.0            [░░] 2.113 seconds
[-] toml-j0.4 1.1.1          [░░░░░] 5.836 seconds

...  ...                     OFF THE SCALE

[-] toml 3.0.0               1+ minutes
```

#### *content_heavy*

&nbsp;  
```
VAL LIBRARY                  NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[✓] enolib (git)             [] 0.621 seconds
[-] enolib (git)             [] 0.653 seconds
[-] js-yaml 4.1.0            [░░░░░░░░] 8.989 seconds

...  ...                     OFF THE SCALE

[-] toml-j0.4 1.1.1          5+ minutes
[-] toml 3.0.0               166+ minutes
```

#### *invented_server_configuration*

&nbsp;  
```
VAL LIBRARY                  NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib (git)             [] 0.862 seconds
[✓] enolib (git)             [▓] 1.232 seconds
[-] js-yaml 4.1.0            [░░] 2.478 seconds
[-] toml-j0.4 1.1.1          [░░░░░░░░] 8.671 seconds

...  ...                     OFF THE SCALE

[-] toml 3.0.0               3+ minutes
```

#### *jekyll_post_example*

&nbsp;  
```
VAL LIBRARY                  NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib (git)             [] 0.516 seconds
[✓] enolib (git)             [] 0.746 seconds
[-] js-yaml 4.1.0            [░] 1.068 seconds
[-] toml-j0.4 1.1.1          [░░░░░░░░░░░] 11.397 seconds

...  ...                     OFF THE SCALE

[-] toml 3.0.0               3+ minutes
```

#### *journey_route_data*

&nbsp;  
```
VAL LIBRARY                  NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib (git)             [▓▓] 2.375 seconds
[✓] enolib (git)             [▓▓▓] 3.490 seconds
[-] js-yaml 4.1.0            [░░░░] 4.431 seconds
[-] toml-j0.4 1.1.1          [░░░░░░░░░░░░░] 13.878 seconds

...  ...                     OFF THE SCALE

[-] toml 3.0.0               2+ minutes
```

#### *yaml_invoice_example*

&nbsp;  
```
VAL LIBRARY                  NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib (git)             [▓▓] 2.071 seconds
[-] js-yaml 4.1.0            [░░░] 3.144 seconds
[✓] enolib (git)             [▓▓▓] 3.323 seconds
[-] toml-j0.4 1.1.1          [░░░░░░░░░░░] 11.032 seconds

...  ...                     OFF THE SCALE

[-] toml 3.0.0               1+ minutes
```

### Python

Evaluated in **CPython 3.10.4 [Linux-5.17.4-arch1-1-x86_64-with-glibc2.35]** on **April 29, 2022**.

#### *abstract_hierarchy*

&nbsp;  
```
VAL LIBRARY                  NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.8.1             [▓▓▓▓▓▓▓▓▓] 9.722 seconds
[-] pyyaml (CLoader) 6.0     [░░░░░░░░░░░░] 12.872 seconds
[✓] enolib 0.8.1             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 18.011 seconds
[-] toml 0.10.2              [░░░░░░░░░░░░░░░░░░░░] 20.201 seconds
[-] qtoml 0.3.1              [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 31.738 seconds
[-] ruamel.yaml 0.17.21      [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 31.934 seconds

...  ...                     OFF THE SCALE

[-] pyyaml (FullLoader) 6.0  2+ minutes
[-] tomlkit 0.10.2           3+ minutes
```

#### *content_heavy*

&nbsp;  
```
VAL LIBRARY                  NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.8.1             [▓▓▓▓▓▓▓▓▓] 9.377 seconds
[✓] enolib 0.8.1             [▓▓▓▓▓▓▓▓▓▓] 10.980 seconds
[-] pyyaml (CLoader) 6.0     [░░░░░░░░░░░] 11.789 seconds
[-] ruamel.yaml 0.17.21      [░░░░░░░░░░░░░░░░░░░░] 20.965 seconds

...  ...                     OFF THE SCALE

[-] toml 0.10.2              9+ minutes
[-] qtoml 0.3.1              11+ minutes
[-] pyyaml (FullLoader) 6.0  17+ minutes
[-] tomlkit 0.10.2           101+ minutes
```

#### *invented_server_configuration*

&nbsp;  
```
VAL LIBRARY                  NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.8.1             [▓▓▓▓▓▓▓▓▓] 9.745 seconds
[-] pyyaml (CLoader) 6.0     [░░░░░░░░░░░░░] 13.371 seconds
[✓] enolib 0.8.1             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 23.574 seconds
[-] toml 0.10.2              [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 30.444 seconds
[-] ruamel.yaml 0.17.21      [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 32.375 seconds
[-] qtoml 0.3.1              [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 49.098 seconds

...  ...                     OFF THE SCALE

[-] pyyaml (FullLoader) 6.0  2+ minutes
[-] tomlkit 0.10.2           5+ minutes
```

#### *jekyll_post_example*

&nbsp;  
```
VAL LIBRARY                  NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.8.1             [▓▓▓▓] 4.358 seconds
[-] pyyaml (CLoader) 6.0     [░░░░░] 5.185 seconds
[✓] enolib 0.8.1             [▓▓▓▓▓▓▓▓▓▓] 10.486 seconds
[-] ruamel.yaml 0.17.21      [░░░░░░░░░░░░░░░] 15.789 seconds
[-] toml 0.10.2              [░░░░░░░░░░░░░░░░░░░░░░░░░] 25.397 seconds
[-] qtoml 0.3.1              [░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 28.791 seconds

...  ...                     OFF THE SCALE

[-] pyyaml (FullLoader) 6.0  1+ minutes
[-] tomlkit 0.10.2           3+ minutes
```

#### *journey_route_data*

&nbsp;  
```
VAL LIBRARY                  NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.8.1             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 22.366 seconds
[-] pyyaml (CLoader) 6.0     [░░░░░░░░░░░░░░░░░░░░░░░░░] 25.494 seconds
[✓] enolib 0.8.1             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 38.252 seconds
[-] toml 0.10.2              [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 48.619 seconds
[-] ruamel.yaml 0.17.21      [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 57.387 seconds

...  ...                     OFF THE SCALE

[-] qtoml 0.3.1              1+ minutes
[-] pyyaml (FullLoader) 6.0  4+ minutes
[-] tomlkit 0.10.2           6+ minutes
```

#### *yaml_invoice_example*

&nbsp;  
```
VAL LIBRARY                  NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] pyyaml (CLoader) 6.0     [░░░░░░░░░░░░░░░░░░░] 19.352 seconds
[-] enolib 0.8.1             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 20.276 seconds
[✓] enolib 0.8.1             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 35.178 seconds
[-] toml 0.10.2              [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 37.578 seconds
[-] ruamel.yaml 0.17.21      [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 46.486 seconds
[-] qtoml 0.3.1              [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 56.400 seconds

...  ...                     OFF THE SCALE

[-] pyyaml (FullLoader) 6.0  3+ minutes
[-] tomlkit 0.10.2           5+ minutes
```

### Ruby

Evaluated in **ruby 3.0.0p0 (2020-12-25 revision 95aff21468) [x86_64-linux]** on **April 30, 2022**.

#### *abstract_hierarchy*

&nbsp;  
```
VAL LIBRARY                  NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.8.1             [▓▓▓▓▓▓] 6.566 seconds
[✓] enolib 0.8.1             [▓▓▓▓▓▓▓▓▓▓▓] 11.042 seconds
[-] yaml 3.0.0               [░░░░░░░░░░░] 11.542 seconds
[-] tomlrb 2.0.1             [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 33.200 seconds

...  ...                     OFF THE SCALE

[-] toml-rb 2.1.2            6+ minutes
[-] toml 0.3.0               8+ minutes
```

#### *content_heavy*

&nbsp;  
```
VAL LIBRARY                  NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.8.1             [▓▓▓▓▓] 5.882 seconds
[✓] enolib 0.8.1             [▓▓▓▓▓▓▓] 7.130 seconds
[-] yaml 3.0.0               [░░░░░░░░░░░░] 12.834 seconds

...  ...                     OFF THE SCALE

[-] tomlrb 2.0.1             1+ minutes
[-] toml-rb 2.1.2            42+ minutes
```

#### *invented_server_configuration*

&nbsp;  
```
VAL LIBRARY                  NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.8.1             [▓▓▓▓▓▓] 6.806 seconds
[-] yaml 3.0.0               [░░░░░░░░░░░░] 12.082 seconds
[✓] enolib 0.8.1             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 15.213 seconds
[-] tomlrb 2.0.1             [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 58.850 seconds

...  ...                     OFF THE SCALE

[-] toml-rb 2.1.2            10+ minutes
[-] toml 0.3.0               14+ minutes
```

#### *jekyll_post_example*

&nbsp;  
```
VAL LIBRARY                  NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.8.1             [▓▓▓▓▓] 5.189 seconds
[-] yaml 3.0.0               [░░░░░░░] 7.283 seconds
[✓] enolib 0.8.1             [▓▓▓▓▓▓▓▓] 8.222 seconds
[-] tomlrb 2.0.1             [░░░░░░░░░░░] 11.753 seconds
```

#### *journey_route_data*

&nbsp;  
```
VAL LIBRARY                  NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.8.1             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 14.216 seconds
[✓] enolib 0.8.1             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 23.535 seconds
[-] yaml 3.0.0               [░░░░░░░░░░░░░░░░░░░░░░░░░] 25.262 seconds

...  ...                     OFF THE SCALE

[-] tomlrb 2.0.1             1+ minutes
[-] toml 0.3.0               18+ minutes
```

#### *yaml_invoice_example*

&nbsp;  
```
VAL LIBRARY                  NUMBER OF SECONDS FOR 100K (***) ITERATIONS

[-] enolib 0.8.1             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 17.903 seconds
[-] yaml 3.0.0               [░░░░░░░░░░░░░░░░░░] 18.520 seconds
[✓] enolib 0.8.1             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 28.548 seconds
[-] tomlrb 2.0.1             [░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 53.659 seconds
```

## Numerical results

**[-]** indicates a pure **parsing** run with unsafe results. **(\*)**

**[✓]** indicates a benchmark for **parsing plus querying and validating** the whole document. **(\*\*)**

**0.123** Smaller numbers indicate **better performance**.

**4565789** Larger numbers indicate **worse performance**.


### JavaScript

Evaluated in **node v16.14.2 [linux-x64]** on **April 29, 2022**.

#### *abstract_hierarchy*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib (git)** | **0.991** |
| **[✓] enolib (git)** | **1.355** |
| [-] js-yaml 4.1.0 | 2.113 |
| [-] toml-j0.4 1.1.1 | 5.836 |
| [-] toml 3.0.0 | 86.159 |

#### *content_heavy*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[✓] enolib (git)** | **0.621** |
| **[-] enolib (git)** | **0.653** |
| [-] js-yaml 4.1.0 | 8.989 |
| [-] toml-j0.4 1.1.1 | 322.459 |
| [-] toml 3.0.0 | 9945.710 |

#### *invented_server_configuration*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib (git)** | **0.862** |
| **[✓] enolib (git)** | **1.232** |
| [-] js-yaml 4.1.0 | 2.478 |
| [-] toml-j0.4 1.1.1 | 8.671 |
| [-] toml 3.0.0 | 155.783 |

#### *jekyll_post_example*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib (git)** | **0.516** |
| **[✓] enolib (git)** | **0.746** |
| [-] js-yaml 4.1.0 | 1.068 |
| [-] toml-j0.4 1.1.1 | 11.397 |
| [-] toml 3.0.0 | 204.921 |

#### *journey_route_data*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib (git)** | **2.375** |
| **[✓] enolib (git)** | **3.490** |
| [-] js-yaml 4.1.0 | 4.431 |
| [-] toml-j0.4 1.1.1 | 13.878 |
| [-] toml 3.0.0 | 132.145 |

#### *yaml_invoice_example*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib (git)** | **2.071** |
| [-] js-yaml 4.1.0 | 3.144 |
| **[✓] enolib (git)** | **3.323** |
| [-] toml-j0.4 1.1.1 | 11.032 |
| [-] toml 3.0.0 | 75.226 |

### Python

Evaluated in **CPython 3.10.4 [Linux-5.17.4-arch1-1-x86_64-with-glibc2.35]** on **April 29, 2022**.

#### *abstract_hierarchy*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.8.1** | **9.722** |
| [-] pyyaml (CLoader) 6.0 | 12.872 |
| **[✓] enolib 0.8.1** | **18.011** |
| [-] toml 0.10.2 | 20.201 |
| [-] qtoml 0.3.1 | 31.738 |
| [-] ruamel.yaml 0.17.21 | 31.934 |
| [-] pyyaml (FullLoader) 6.0 | 128.326 |
| [-] tomlkit 0.10.2 | 150.259 |

#### *content_heavy*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.8.1** | **9.377** |
| **[✓] enolib 0.8.1** | **10.980** |
| [-] pyyaml (CLoader) 6.0 | 11.789 |
| [-] ruamel.yaml 0.17.21 | 20.965 |
| [-] toml 0.10.2 | 567.749 |
| [-] qtoml 0.3.1 | 632.328 |
| [-] pyyaml (FullLoader) 6.0 | 1016.106 |
| [-] tomlkit 0.10.2 | 6078.838 |

#### *invented_server_configuration*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.8.1** | **9.745** |
| [-] pyyaml (CLoader) 6.0 | 13.371 |
| **[✓] enolib 0.8.1** | **23.574** |
| [-] toml 0.10.2 | 30.444 |
| [-] ruamel.yaml 0.17.21 | 32.375 |
| [-] qtoml 0.3.1 | 49.098 |
| [-] pyyaml (FullLoader) 6.0 | 128.064 |
| [-] tomlkit 0.10.2 | 275.489 |

#### *jekyll_post_example*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.8.1** | **4.358** |
| [-] pyyaml (CLoader) 6.0 | 5.185 |
| **[✓] enolib 0.8.1** | **10.486** |
| [-] ruamel.yaml 0.17.21 | 15.789 |
| [-] toml 0.10.2 | 25.397 |
| [-] qtoml 0.3.1 | 28.791 |
| [-] pyyaml (FullLoader) 6.0 | 69.788 |
| [-] tomlkit 0.10.2 | 196.152 |

#### *journey_route_data*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.8.1** | **22.366** |
| [-] pyyaml (CLoader) 6.0 | 25.494 |
| **[✓] enolib 0.8.1** | **38.252** |
| [-] toml 0.10.2 | 48.619 |
| [-] ruamel.yaml 0.17.21 | 57.387 |
| [-] qtoml 0.3.1 | 72.072 |
| [-] pyyaml (FullLoader) 6.0 | 262.894 |
| [-] tomlkit 0.10.2 | 383.605 |

#### *yaml_invoice_example*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| [-] pyyaml (CLoader) 6.0 | 19.352 |
| **[-] enolib 0.8.1** | **20.276** |
| **[✓] enolib 0.8.1** | **35.178** |
| [-] toml 0.10.2 | 37.578 |
| [-] ruamel.yaml 0.17.21 | 46.486 |
| [-] qtoml 0.3.1 | 56.400 |
| [-] pyyaml (FullLoader) 6.0 | 186.652 |
| [-] tomlkit 0.10.2 | 305.260 |

### Ruby

Evaluated in **ruby 3.0.0p0 (2020-12-25 revision 95aff21468) [x86_64-linux]** on **April 30, 2022**.

#### *abstract_hierarchy*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.8.1** | **6.566** |
| **[✓] enolib 0.8.1** | **11.042** |
| [-] yaml 3.0.0 | 11.542 |
| [-] tomlrb 2.0.1 | 33.200 |
| [-] toml-rb 2.1.2 | 370.530 |
| [-] toml 0.3.0 | 501.418 |

#### *content_heavy*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.8.1** | **5.882** |
| **[✓] enolib 0.8.1** | **7.130** |
| [-] yaml 3.0.0 | 12.834 |
| [-] tomlrb 2.0.1 | 61.495 |
| [-] toml-rb 2.1.2 | 2508.009 |

#### *invented_server_configuration*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.8.1** | **6.806** |
| [-] yaml 3.0.0 | 12.082 |
| **[✓] enolib 0.8.1** | **15.213** |
| [-] tomlrb 2.0.1 | 58.850 |
| [-] toml-rb 2.1.2 | 623.452 |
| [-] toml 0.3.0 | 828.296 |

#### *jekyll_post_example*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.8.1** | **5.189** |
| [-] yaml 3.0.0 | 7.283 |
| **[✓] enolib 0.8.1** | **8.222** |
| [-] tomlrb 2.0.1 | 11.753 |

#### *journey_route_data*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.8.1** | **14.216** |
| **[✓] enolib 0.8.1** | **23.535** |
| [-] yaml 3.0.0 | 25.262 |
| [-] tomlrb 2.0.1 | 61.633 |
| [-] toml 0.3.0 | 1098.928 |

#### *yaml_invoice_example*

| Library | Number of seconds for 100k (***) iterations |
| ------- | ------------------------------------- |
| **[-] enolib 0.8.1** | **17.903** |
| [-] yaml 3.0.0 | 18.520 |
| **[✓] enolib 0.8.1** | **28.548** |
| [-] tomlrb 2.0.1 | 53.659 |

---

## How the data is gathered

To see how the measurements were obtained, please take a look at the source of `benchmark.js/py/rb` inside this repository.
To see how the report was compiled, please study `report.js` inside this repository.


## Notes

As you might have noticed, the benchmark figures for ruby are occasionally
missing one or two libraries for specific benchmarks – the reason for this is
simply that these libraries failed on those respective benchmarks, either by
raising an error or even by segfaulting.

**(\*)**: The majority of YAML/TOML parsers produce plain object dumps which are inherently unvalidated.

**(\*\*)**: In the enolib libraries a document is validated through querying.
If the whole document is queried, the whole document is validated. If only a portion of the document is queried
less validation and less memory allocation happens and the performance thereby increases too. The results displayed
here represent the (performance-wise worst) case of using all data present in a document.

**(\*\*\*)**: Some libraries included in the benchmarks exhibit an up to 1000x
slower performance compared to the top ranking parsers, these have been
partially sampled with up to only 1k iterations, with the total duration
extrapolated for the global comparison again.
