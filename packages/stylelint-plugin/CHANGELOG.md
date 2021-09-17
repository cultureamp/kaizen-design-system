# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.3.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/stylelint-plugin@2.2.2...@kaizen/stylelint-plugin@2.3.0) (2021-09-17)


### Features

* Change defaultTheme to Heart ([#1957](https://github.com/cultureamp/kaizen-design-system/issues/1957)) ([c45f639](https://github.com/cultureamp/kaizen-design-system/commit/c45f639872fa6d4d3c2b3c9c1256235760c0fadf))





## [2.2.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/stylelint-plugin@2.2.1...@kaizen/stylelint-plugin@2.2.2) (2021-08-31)

**Note:** Version bump only for package @kaizen/stylelint-plugin





## [2.2.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/stylelint-plugin@2.2.0...@kaizen/stylelint-plugin@2.2.1) (2021-08-30)


### Bug Fixes

* Incorrect import caused release failure ([#1902](https://github.com/cultureamp/kaizen-design-system/issues/1902)) ([dd7ed2a](https://github.com/cultureamp/kaizen-design-system/commit/dd7ed2aba42c60348d3ada37fc1ff35deaccef39))





# [2.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/stylelint-plugin@2.1.1...@kaizen/stylelint-plugin@2.2.0) (2021-08-30)


### Features

* Prefer color tokens rule ([#1816](https://github.com/cultureamp/kaizen-design-system/issues/1816)) ([8fefc1f](https://github.com/cultureamp/kaizen-design-system/commit/8fefc1f28903e6d5bfa57457009a60842357db17))





## [2.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/stylelint-plugin@2.1.0...@kaizen/stylelint-plugin@2.1.1) (2021-08-30)


### Bug Fixes

* Incorrect stylelint plugin design-token peer ([#1900](https://github.com/cultureamp/kaizen-design-system/issues/1900)) ([f03fe4b](https://github.com/cultureamp/kaizen-design-system/commit/f03fe4b9e5cbbd76f5d4116ae4b904896ab9a49c))





# [2.1.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/stylelint-plugin@2.0.0...@kaizen/stylelint-plugin@2.1.0) (2021-08-13)


### Features

* Bump design-tokens in peer dependencies to v3 ([#1840](https://github.com/cultureamp/kaizen-design-system/issues/1840)) ([ca45bf4](https://github.com/cultureamp/kaizen-design-system/commit/ca45bf4707b5fbf907163653549e17682c46f636))





# [2.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/stylelint-plugin@1.2.3...@kaizen/stylelint-plugin@2.0.0) (2021-08-12)


### Features

* Removal of deprecated tokens ([#1833](https://github.com/cultureamp/kaizen-design-system/issues/1833)) ([2a76935](https://github.com/cultureamp/kaizen-design-system/commit/2a76935b5cb4f32b8a7bf47880a81820c885270c))


### BREAKING CHANGES

* All deprecated tokens from version 2 no longer exist. No variables start with kz or kz-var anymore.

* CSS variable declaration files `css/heart-theme.css`, `css/zen-theme.css` and `css/default-theme.css` no longer exist.

* `*-vars.scss`, `*-vars.less`, `*-vars.json`  no longer exist.

* Exported utilities from `@kaizen/design-tokens` have been renamed and pruned.





## [1.2.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/stylelint-plugin@1.2.2...@kaizen/stylelint-plugin@1.2.3) (2021-08-12)


### Bug Fixes

* Support design-tokens v3 in stylelint plugin ([#1836](https://github.com/cultureamp/kaizen-design-system/issues/1836)) ([d905096](https://github.com/cultureamp/kaizen-design-system/commit/d9050960571919034e0d9bb6139f07ee35e5ea52))





## [1.2.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/stylelint-plugin@1.2.1...@kaizen/stylelint-plugin@1.2.2) (2021-08-09)


### Bug Fixes

* Stylelint plugin code polish ([#1819](https://github.com/cultureamp/kaizen-design-system/issues/1819)) ([4930255](https://github.com/cultureamp/kaizen-design-system/commit/4930255cf8ef4870cfe2532d1e20b3fe158ca817))





## [1.2.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/stylelint-plugin@1.2.0...@kaizen/stylelint-plugin@1.2.1) (2021-08-09)


### Bug Fixes

* Design tokens peer version on stylelint plugin ([#1821](https://github.com/cultureamp/kaizen-design-system/issues/1821)) ([1dc4a0e](https://github.com/cultureamp/kaizen-design-system/commit/1dc4a0e88a3f6d1eca27ad507dbaea35dd62eed3))





# [1.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/stylelint-plugin@1.1.2...@kaizen/stylelint-plugin@1.2.0) (2021-08-06)


### Features

* Deprecated and removed tokens rule uplift ([#1743](https://github.com/cultureamp/kaizen-design-system/issues/1743)) ([33411db](https://github.com/cultureamp/kaizen-design-system/commit/33411db1d02e09539dea98ec43e5183815c9974b))





## [1.1.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/stylelint-plugin@1.1.1...@kaizen/stylelint-plugin@1.1.2) (2021-07-02)

**Note:** Version bump only for package @kaizen/stylelint-plugin





## [1.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/stylelint-plugin@1.1.0...@kaizen/stylelint-plugin@1.1.1) (2021-06-28)


### Bug Fixes

* use module.exports to fix stylelint plugin ([#1728](https://github.com/cultureamp/kaizen-design-system/issues/1728)) ([71ff851](https://github.com/cultureamp/kaizen-design-system/commit/71ff851b2d938135145d3406f540d903798fcaff))





# 1.1.0 (2021-06-15)


### Features

* Stylelint plugin and codemod (for updating deprecated tokens etc) ([#1520](https://github.com/cultureamp/kaizen-design-system/issues/1520)) ([fbcf8a7](https://github.com/cultureamp/kaizen-design-system/commit/fbcf8a77c5b0692bb547d23429ff922311a2d0c6))
