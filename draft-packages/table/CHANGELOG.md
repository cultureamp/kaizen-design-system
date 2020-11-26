# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.2.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@3.2.1...@kaizen/draft-table@3.2.2) (2020-11-26)

**Note:** Version bump only for package @kaizen/draft-table





## [3.2.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@3.2.0...@kaizen/draft-table@3.2.1) (2020-11-25)

**Note:** Version bump only for package @kaizen/draft-table





# [3.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@3.1.1...@kaizen/draft-table@3.2.0) (2020-11-24)


### Features

* created hover ability for header table row cells ([#867](https://github.com/cultureamp/kaizen-design-system/issues/867)) ([cbdd447](https://github.com/cultureamp/kaizen-design-system/commit/cbdd4479df8fafe0424bf5f0eef4858309f427c2))





## [3.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@3.1.0...@kaizen/draft-table@3.1.1) (2020-11-19)

**Note:** Version bump only for package @kaizen/draft-table





# [3.1.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@3.0.2...@kaizen/draft-table@3.1.0) (2020-11-16)


### Features

* Add ability to change the table sorting arrow from descending to ascending ([#864](https://github.com/cultureamp/kaizen-design-system/issues/864)) ([912f393](https://github.com/cultureamp/kaizen-design-system/commit/912f393bb45ad2ca8f1dffd57abceee313dbdfaa))





## [3.0.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@3.0.1...@kaizen/draft-table@3.0.2) (2020-11-13)

**Note:** Version bump only for package @kaizen/draft-table





## [3.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@3.0.0...@kaizen/draft-table@3.0.1) (2020-11-12)

**Note:** Version bump only for package @kaizen/draft-table





# [3.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@2.2.0...@kaizen/draft-table@3.0.0) (2020-11-12)


### Bug Fixes

* Clean up eslint warnings ([#850](https://github.com/cultureamp/kaizen-design-system/issues/850)) ([78d0f20](https://github.com/cultureamp/kaizen-design-system/commit/78d0f207b03e6449f6c5f4e3000926d91c3094e1))


### BREAKING CHANGES

* Consumers that were passing in a now-restricted type
to a prop that accepted e.g. "any" as a type may now break.

* Fix eslint errors as result of rule change

* Fix type error in getCustomProps for Buttons

* Add missing key to MenuItem

* Fix line order syntax in Popover





# [2.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@2.1.0...@kaizen/draft-table@2.2.0) (2020-11-11)


### Features

* Add tooltip to the Table header ([#859](https://github.com/cultureamp/kaizen-design-system/issues/859)) ([aeafcc9](https://github.com/cultureamp/kaizen-design-system/commit/aeafcc9421aa5ca27b9e1476924c97af144f6e1e))





# [2.1.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@2.0.5...@kaizen/draft-table@2.1.0) (2020-11-10)


### Features

* Add table header wrapping and alignment support ([#851](https://github.com/cultureamp/kaizen-design-system/issues/851)) ([b26df68](https://github.com/cultureamp/kaizen-design-system/commit/b26df6888d2c701711b55778138963163d51b17a))





## [2.0.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@2.0.4...@kaizen/draft-table@2.0.5) (2020-11-09)

**Note:** Version bump only for package @kaizen/draft-table





## [2.0.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@2.0.3...@kaizen/draft-table@2.0.4) (2020-11-09)

**Note:** Version bump only for package @kaizen/draft-table





## [2.0.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@2.0.2...@kaizen/draft-table@2.0.3) (2020-10-21)

**Note:** Version bump only for package @kaizen/draft-table





## [2.0.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@2.0.1...@kaizen/draft-table@2.0.2) (2020-10-16)

**Note:** Version bump only for package @kaizen/draft-table





## [2.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@2.0.0...@kaizen/draft-table@2.0.1) (2020-10-12)

**Note:** Version bump only for package @kaizen/draft-table





# [2.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.65...@kaizen/draft-table@2.0.0) (2020-10-12)


### Features

* Uplift the table to the new Zen designs ([#813](https://github.com/cultureamp/kaizen-design-system/issues/813)) ([90adce4](https://github.com/cultureamp/kaizen-design-system/commit/90adce46161b0cc04efdde75199da8293bdcd521))


### BREAKING CHANGES

* Table headers now have a transparent background. Inactive table headers use dark-reduced-opacity, and active sort headers are wisteria-800 for text colour.

Throw a warning in the console when using deprecated backgroundColor prop





## [1.6.65](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.7.0...@kaizen/draft-table@1.6.65) (2020-10-11)


### Bug Fixes

* Revert "feat: Uplift the table to the new Zen designs" ([#812](https://github.com/cultureamp/kaizen-design-system/issues/812)) ([e33e59d](https://github.com/cultureamp/kaizen-design-system/commit/e33e59d8e286e3db002cf88c843ac827470ee9e5)), closes [#803](https://github.com/cultureamp/kaizen-design-system/issues/803)





## [1.6.64](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.63...@kaizen/draft-table@1.6.64) (2020-10-08)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.63](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.62...@kaizen/draft-table@1.6.63) (2020-10-01)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.62](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.61...@kaizen/draft-table@1.6.62) (2020-10-01)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.61](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.60...@kaizen/draft-table@1.6.61) (2020-09-30)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.60](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.59...@kaizen/draft-table@1.6.60) (2020-09-28)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.59](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.58...@kaizen/draft-table@1.6.59) (2020-09-28)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.58](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.57...@kaizen/draft-table@1.6.58) (2020-09-24)


### Bug Fixes

* Change styles from require to use import ([#782](https://github.com/cultureamp/kaizen-design-system/issues/782)) ([defd448](https://github.com/cultureamp/kaizen-design-system/commit/defd4483faa3459d9af48e272c63656798008a28))





## [1.6.57](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.56...@kaizen/draft-table@1.6.57) (2020-09-23)


### Bug Fixes

* Changed icons to use import, added types for icons ([#781](https://github.com/cultureamp/kaizen-design-system/issues/781)) ([e0856a8](https://github.com/cultureamp/kaizen-design-system/commit/e0856a84e3b39d3dc1bfa910b0b973bd65e170c9))





## [1.6.56](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.55...@kaizen/draft-table@1.6.56) (2020-09-22)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.55](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.54...@kaizen/draft-table@1.6.55) (2020-09-21)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.54](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.53...@kaizen/draft-table@1.6.54) (2020-09-11)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.53](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.52...@kaizen/draft-table@1.6.53) (2020-09-11)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.52](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.51...@kaizen/draft-table@1.6.52) (2020-09-09)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.51](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.50...@kaizen/draft-table@1.6.51) (2020-09-07)


### Bug Fixes

* Bump design-tokens peer dependency to the latest version ([#760](https://github.com/cultureamp/kaizen-design-system/issues/760)) ([37e5414](https://github.com/cultureamp/kaizen-design-system/commit/37e5414b2e2c0befb4127c588120eb2e8bdc4d39))





## [1.6.50](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.49...@kaizen/draft-table@1.6.50) (2020-09-04)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.49](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.48...@kaizen/draft-table@1.6.49) (2020-09-03)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.48](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.47...@kaizen/draft-table@1.6.48) (2020-09-01)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.47](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.46...@kaizen/draft-table@1.6.47) (2020-08-28)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.46](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.45...@kaizen/draft-table@1.6.46) (2020-08-28)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.45](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.44...@kaizen/draft-table@1.6.45) (2020-08-27)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.44](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.43...@kaizen/draft-table@1.6.44) (2020-08-27)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.43](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.42...@kaizen/draft-table@1.6.43) (2020-08-26)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.42](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.41...@kaizen/draft-table@1.6.42) (2020-08-25)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.41](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.40...@kaizen/draft-table@1.6.41) (2020-08-24)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.40](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.39...@kaizen/draft-table@1.6.40) (2020-08-19)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.39](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.38...@kaizen/draft-table@1.6.39) (2020-08-12)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.38](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.37...@kaizen/draft-table@1.6.38) (2020-08-10)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.37](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.36...@kaizen/draft-table@1.6.37) (2020-08-07)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.36](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.35...@kaizen/draft-table@1.6.36) (2020-08-03)


### Bug Fixes

* Extend TableHeaderRowCell to have automationId options ([#686](https://github.com/cultureamp/kaizen-design-system/issues/686)) ([87e9303](https://github.com/cultureamp/kaizen-design-system/commit/87e9303b621e87bf229786565287b36ca82216e0))





## [1.6.35](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.34...@kaizen/draft-table@1.6.35) (2020-07-31)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.34](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.33...@kaizen/draft-table@1.6.34) (2020-07-30)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.33](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.32...@kaizen/draft-table@1.6.33) (2020-07-29)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.32](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.31...@kaizen/draft-table@1.6.32) (2020-07-16)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.31](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.30...@kaizen/draft-table@1.6.31) (2020-07-15)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.30](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.29...@kaizen/draft-table@1.6.30) (2020-07-15)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.29](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.28...@kaizen/draft-table@1.6.29) (2020-07-10)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.28](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.27...@kaizen/draft-table@1.6.28) (2020-07-09)


### Bug Fixes

* Switch from TSlint to ESlint ([#621](https://github.com/cultureamp/kaizen-design-system/issues/621)) ([59e64d4](https://github.com/cultureamp/kaizen-design-system/commit/59e64d4d0cd14302544ae7f41fd76a101d313aee))





## [1.6.27](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.26...@kaizen/draft-table@1.6.27) (2020-07-09)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.26](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.25...@kaizen/draft-table@1.6.26) (2020-07-09)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.25](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.24...@kaizen/draft-table@1.6.25) (2020-07-06)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.24](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.23...@kaizen/draft-table@1.6.24) (2020-07-01)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.23](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.22...@kaizen/draft-table@1.6.23) (2020-06-29)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.22](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.21...@kaizen/draft-table@1.6.22) (2020-06-26)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.21](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.20...@kaizen/draft-table@1.6.21) (2020-06-26)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.20](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.19...@kaizen/draft-table@1.6.20) (2020-06-23)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.19](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.18...@kaizen/draft-table@1.6.19) (2020-06-22)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.18](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.17...@kaizen/draft-table@1.6.18) (2020-06-22)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.17](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.16...@kaizen/draft-table@1.6.17) (2020-06-22)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.16](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.15...@kaizen/draft-table@1.6.16) (2020-06-22)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.15](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.14...@kaizen/draft-table@1.6.15) (2020-06-22)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.14](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.13...@kaizen/draft-table@1.6.14) (2020-06-19)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.12...@kaizen/draft-table@1.6.13) (2020-06-18)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.11...@kaizen/draft-table@1.6.12) (2020-06-18)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.10...@kaizen/draft-table@1.6.11) (2020-06-18)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.9...@kaizen/draft-table@1.6.10) (2020-06-18)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.8...@kaizen/draft-table@1.6.9) (2020-06-17)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.7...@kaizen/draft-table@1.6.8) (2020-06-16)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.6...@kaizen/draft-table@1.6.7) (2020-06-12)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.5...@kaizen/draft-table@1.6.6) (2020-06-12)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.4...@kaizen/draft-table@1.6.5) (2020-06-11)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.3...@kaizen/draft-table@1.6.4) (2020-06-11)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.2...@kaizen/draft-table@1.6.3) (2020-06-11)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.1...@kaizen/draft-table@1.6.2) (2020-06-10)

**Note:** Version bump only for package @kaizen/draft-table





## [1.6.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.6.0...@kaizen/draft-table@1.6.1) (2020-06-10)

**Note:** Version bump only for package @kaizen/draft-table





# [1.6.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.5.18...@kaizen/draft-table@1.6.0) (2020-06-09)


### Features

* Rollout inter ([#530](https://github.com/cultureamp/kaizen-design-system/issues/530)) ([a1b2059](https://github.com/cultureamp/kaizen-design-system/commit/a1b2059980ea753036caa5cb15ba6b1235d52ba4))





## [1.5.18](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.5.17...@kaizen/draft-table@1.5.18) (2020-06-05)

**Note:** Version bump only for package @kaizen/draft-table





## [1.5.17](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.5.16...@kaizen/draft-table@1.5.17) (2020-06-05)

**Note:** Version bump only for package @kaizen/draft-table





## [1.5.16](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.5.15...@kaizen/draft-table@1.5.16) (2020-06-05)

**Note:** Version bump only for package @kaizen/draft-table





## [1.5.15](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.5.14...@kaizen/draft-table@1.5.15) (2020-06-04)

**Note:** Version bump only for package @kaizen/draft-table





## [1.5.14](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.5.13...@kaizen/draft-table@1.5.14) (2020-06-02)

**Note:** Version bump only for package @kaizen/draft-table





## [1.5.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.5.12...@kaizen/draft-table@1.5.13) (2020-06-02)

**Note:** Version bump only for package @kaizen/draft-table





## [1.5.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.5.11...@kaizen/draft-table@1.5.12) (2020-06-02)

**Note:** Version bump only for package @kaizen/draft-table





## [1.5.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.5.10...@kaizen/draft-table@1.5.11) (2020-06-01)

**Note:** Version bump only for package @kaizen/draft-table





## [1.5.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.5.9...@kaizen/draft-table@1.5.10) (2020-05-28)

**Note:** Version bump only for package @kaizen/draft-table





## [1.5.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.5.8...@kaizen/draft-table@1.5.9) (2020-05-27)

**Note:** Version bump only for package @kaizen/draft-table





## [1.5.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.5.7...@kaizen/draft-table@1.5.8) (2020-05-26)

**Note:** Version bump only for package @kaizen/draft-table





## [1.5.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.5.6...@kaizen/draft-table@1.5.7) (2020-05-26)

**Note:** Version bump only for package @kaizen/draft-table





## [1.5.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.5.5...@kaizen/draft-table@1.5.6) (2020-05-26)

**Note:** Version bump only for package @kaizen/draft-table





## [1.5.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.5.4...@kaizen/draft-table@1.5.5) (2020-05-26)

**Note:** Version bump only for package @kaizen/draft-table





## [1.5.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.5.3...@kaizen/draft-table@1.5.4) (2020-05-22)

**Note:** Version bump only for package @kaizen/draft-table





## [1.5.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.5.2...@kaizen/draft-table@1.5.3) (2020-05-22)

**Note:** Version bump only for package @kaizen/draft-table





## [1.5.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.5.1...@kaizen/draft-table@1.5.2) (2020-05-21)

**Note:** Version bump only for package @kaizen/draft-table





## [1.5.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.5.0...@kaizen/draft-table@1.5.1) (2020-05-21)

**Note:** Version bump only for package @kaizen/draft-table





# [1.5.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.4.10...@kaizen/draft-table@1.5.0) (2020-05-20)


### Features

* removed references to the old draft packages ([#504](https://github.com/cultureamp/kaizen-design-system/issues/504)) ([ddda156](https://github.com/cultureamp/kaizen-design-system/commit/ddda156513445ca8da8bcc64364f15dc4b94b1a6))





## [1.4.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.4.9...@kaizen/draft-table@1.4.10) (2020-05-20)


### Bug Fixes

* unpin unintentionally pinned @kaizen/design-token peer dependencies ([#503](https://github.com/cultureamp/kaizen-design-system/issues/503)) ([aa6f1d3](https://github.com/cultureamp/kaizen-design-system/commit/aa6f1d3a63cd7f2e3dac9cd631aa7a9e88b153ac))





## [1.4.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.4.8...@kaizen/draft-table@1.4.9) (2020-05-19)

**Note:** Version bump only for package @kaizen/draft-table





## [1.4.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.4.7...@kaizen/draft-table@1.4.8) (2020-05-19)

**Note:** Version bump only for package @kaizen/draft-table





## [1.4.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.4.6...@kaizen/draft-table@1.4.7) (2020-05-19)

**Note:** Version bump only for package @kaizen/draft-table





## [1.4.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.4.5...@kaizen/draft-table@1.4.6) (2020-05-18)


### Bug Fixes

* sync old and new draft components ([#492](https://github.com/cultureamp/kaizen-design-system/issues/492)) ([6755e4b](https://github.com/cultureamp/kaizen-design-system/commit/6755e4beedf5d3953c5a50e152cfd181389d9be0))





## [1.4.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.4.4...@kaizen/draft-table@1.4.5) (2020-05-15)

**Note:** Version bump only for package @kaizen/draft-table





## [1.4.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.4.3...@kaizen/draft-table@1.4.4) (2020-05-13)

**Note:** Version bump only for package @kaizen/draft-table





## [1.4.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.4.2...@kaizen/draft-table@1.4.3) (2020-05-08)

**Note:** Version bump only for package @kaizen/draft-table





## [1.4.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.4.1...@kaizen/draft-table@1.4.2) (2020-05-08)

**Note:** Version bump only for package @kaizen/draft-table





## [1.4.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.4.0...@kaizen/draft-table@1.4.1) (2020-05-08)

**Note:** Version bump only for package @kaizen/draft-table





# [1.4.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.3.7...@kaizen/draft-table@1.4.0) (2020-05-08)


### Features

* Extend TableHeader API for bg colors + revert box shadow ([#469](https://github.com/cultureamp/kaizen-design-system/issues/469)) ([e1256d2](https://github.com/cultureamp/kaizen-design-system/commit/e1256d2bc64429d15e51214e961f8371e0b7d32f))





## [1.3.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.3.6...@kaizen/draft-table@1.3.7) (2020-05-08)

**Note:** Version bump only for package @kaizen/draft-table





## [1.3.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.3.5...@kaizen/draft-table@1.3.6) (2020-05-07)

**Note:** Version bump only for package @kaizen/draft-table





## [1.3.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.3.4...@kaizen/draft-table@1.3.5) (2020-05-06)

**Note:** Version bump only for package @kaizen/draft-table





## [1.3.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.3.3...@kaizen/draft-table@1.3.4) (2020-05-06)

**Note:** Version bump only for package @kaizen/draft-table





## [1.3.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.3.2...@kaizen/draft-table@1.3.3) (2020-05-05)

**Note:** Version bump only for package @kaizen/draft-table





## [1.3.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.3.1...@kaizen/draft-table@1.3.2) (2020-05-05)

**Note:** Version bump only for package @kaizen/draft-table





## [1.3.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.3.0...@kaizen/draft-table@1.3.1) (2020-05-05)

**Note:** Version bump only for package @kaizen/draft-table





# [1.3.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.2.1...@kaizen/draft-table@1.3.0) (2020-05-05)


### Features

* Updated all draft packages to accept all minor releases ([#451](https://github.com/cultureamp/kaizen-design-system/issues/451)) ([80453f6](https://github.com/cultureamp/kaizen-design-system/commit/80453f6c04300dcef61c14e39200ce154863eb0d))





## [1.2.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.2.0...@kaizen/draft-table@1.2.1) (2020-05-04)

**Note:** Version bump only for package @kaizen/draft-table





# [1.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.1.2...@kaizen/draft-table@1.2.0) (2020-05-04)


### Features

* Added missing dependencies to packages  ([#449](https://github.com/cultureamp/kaizen-design-system/issues/449)) ([cb1dc2a](https://github.com/cultureamp/kaizen-design-system/commit/cb1dc2aead68e591cc21c665fb25c1817633c4d7))





## [1.1.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.1.1...@kaizen/draft-table@1.1.2) (2020-05-04)

**Note:** Version bump only for package @kaizen/draft-table





## [1.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-table@1.1.0...@kaizen/draft-table@1.1.1) (2020-05-04)

**Note:** Version bump only for package @kaizen/draft-table





# 1.1.0 (2020-05-01)


### Features

* Copy All Drafts **except Form** Into Draft Packages ([#431](https://github.com/cultureamp/kaizen-design-system/issues/431)) ([55bfde9](https://github.com/cultureamp/kaizen-design-system/commit/55bfde98611d2c4070d26ba082e478f96ddca1fd))
