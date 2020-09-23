# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@2.0.0...@kaizen/draft-button@2.0.1) (2020-09-23)

**Note:** Version bump only for package @kaizen/draft-button





# [2.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.13.12...@kaizen/draft-button@2.0.0) (2020-09-13)


### Features

* Allow routing libraries to be used with Button ([#763](https://github.com/cultureamp/kaizen-design-system/issues/763)) ([f6f55be](https://github.com/cultureamp/kaizen-design-system/commit/f6f55becff90bcce3aed8c4ccf62a6a393696857))


### BREAKING CHANGES

* This will cause TS to error for usages of the Zen Button with an onClick prop using the event param

* fix: Remove preventDefault when specifying an onClick prop
* There may be usages relying on this preventDefault, so we'll need to do a sweep of all usages to check

* chore: Remove analytics related code on Button
* I don't imagine there are any places where this is used on the new button, but we'll need to make sure.
These attributes were used for the old system (Treasure Data) and should no longer be required. In the off change that they are - onClick can still be used, or data properties can still be sent to buttons

* chore: Remove specific aria props on button
* Any usages of ariaControls, ariaDescribedby, and ariaExpanded will need to be replaced with kebab case equivalents
These specific props are no longer required since the work done to allow any kebab case props to be sent to buttons.

* Send href to custom component

* Allow any type of MouseEvent onClick

* Pass component as an arg to renderCustomComponent rather than having to null check props.component

* Remove component var declarations in renderLink and renderButton

* Remove automationId prop
The kebab case 'data-automation-id' prop can be used directly instead
* Any usages of the automationId prop will need to be replaced with data-automation-id





## [1.13.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.13.11...@kaizen/draft-button@1.13.12) (2020-09-11)

**Note:** Version bump only for package @kaizen/draft-button





## [1.13.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.13.10...@kaizen/draft-button@1.13.11) (2020-09-11)

**Note:** Version bump only for package @kaizen/draft-button





## [1.13.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.13.9...@kaizen/draft-button@1.13.10) (2020-09-09)

**Note:** Version bump only for package @kaizen/draft-button





## [1.13.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.13.8...@kaizen/draft-button@1.13.9) (2020-09-07)


### Bug Fixes

* Bump design-tokens peer dependency to the latest version ([#760](https://github.com/cultureamp/kaizen-design-system/issues/760)) ([37e5414](https://github.com/cultureamp/kaizen-design-system/commit/37e5414b2e2c0befb4127c588120eb2e8bdc4d39))





## [1.13.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.13.7...@kaizen/draft-button@1.13.8) (2020-09-04)

**Note:** Version bump only for package @kaizen/draft-button





## [1.13.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.13.6...@kaizen/draft-button@1.13.7) (2020-08-28)


### Bug Fixes

* consider icon position end when additional content is used on generic button ([#741](https://github.com/cultureamp/kaizen-design-system/issues/741)) ([e985948](https://github.com/cultureamp/kaizen-design-system/commit/e985948db86ae972732bbbe049914c1fb608e4b8))





## [1.13.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.13.5...@kaizen/draft-button@1.13.6) (2020-08-28)

**Note:** Version bump only for package @kaizen/draft-button





## [1.13.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.13.4...@kaizen/draft-button@1.13.5) (2020-08-27)

**Note:** Version bump only for package @kaizen/draft-button





## [1.13.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.13.3...@kaizen/draft-button@1.13.4) (2020-08-24)

**Note:** Version bump only for package @kaizen/draft-button





## [1.13.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.13.2...@kaizen/draft-button@1.13.3) (2020-08-19)

**Note:** Version bump only for package @kaizen/draft-button





## [1.13.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.13.1...@kaizen/draft-button@1.13.2) (2020-08-12)

**Note:** Version bump only for package @kaizen/draft-button





## [1.13.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.13.0...@kaizen/draft-button@1.13.1) (2020-08-10)

**Note:** Version bump only for package @kaizen/draft-button





# [1.13.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.12.7...@kaizen/draft-button@1.13.0) (2020-07-31)


### Features

* Add focus support to the Button components ([#662](https://github.com/cultureamp/kaizen-design-system/issues/662)) ([55a862d](https://github.com/cultureamp/kaizen-design-system/commit/55a862da6f198f2b48a4ee4af6f2dd685809fb9c))





## [1.12.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.12.6...@kaizen/draft-button@1.12.7) (2020-07-30)

**Note:** Version bump only for package @kaizen/draft-button





## [1.12.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.12.5...@kaizen/draft-button@1.12.6) (2020-07-15)

**Note:** Version bump only for package @kaizen/draft-button





## [1.12.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.12.4...@kaizen/draft-button@1.12.5) (2020-07-15)

**Note:** Version bump only for package @kaizen/draft-button





## [1.12.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.12.3...@kaizen/draft-button@1.12.4) (2020-07-13)


### Bug Fixes

* Adds overflow:visible to buttons to fix IE11 clipping issue ([#647](https://github.com/cultureamp/kaizen-design-system/issues/647)) ([e737fc3](https://github.com/cultureamp/kaizen-design-system/commit/e737fc33c8888fb00a3cb21c20c90e65a9db3653))





## [1.12.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.12.2...@kaizen/draft-button@1.12.3) (2020-07-10)

**Note:** Version bump only for package @kaizen/draft-button





## [1.12.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.12.1...@kaizen/draft-button@1.12.2) (2020-07-09)


### Bug Fixes

* Switch from TSlint to ESlint ([#621](https://github.com/cultureamp/kaizen-design-system/issues/621)) ([59e64d4](https://github.com/cultureamp/kaizen-design-system/commit/59e64d4d0cd14302544ae7f41fd76a101d313aee))





## [1.12.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.12.0...@kaizen/draft-button@1.12.1) (2020-07-09)

**Note:** Version bump only for package @kaizen/draft-button





# [1.12.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.11.1...@kaizen/draft-button@1.12.0) (2020-07-09)


### Features

* @kaizen/draft-filter-drawer (React, new package) ([#590](https://github.com/cultureamp/kaizen-design-system/issues/590)) ([a44ef9e](https://github.com/cultureamp/kaizen-design-system/commit/a44ef9e2efd82855412c8d334b063208bfc5be28))





## [1.11.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.11.0...@kaizen/draft-button@1.11.1) (2020-07-09)

**Note:** Version bump only for package @kaizen/draft-button





# [1.11.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.10.0...@kaizen/draft-button@1.11.0) (2020-07-08)


### Features

* abillity to add additional content to GenericButton ([#608](https://github.com/cultureamp/kaizen-design-system/issues/608)) ([bff3345](https://github.com/cultureamp/kaizen-design-system/commit/bff3345d861f23086d872bbc852c1cf112678530))





# [1.10.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.9.1...@kaizen/draft-button@1.10.0) (2020-07-07)


### Features

* add aria-expanded and aria-controls props to Zen Button ([#619](https://github.com/cultureamp/kaizen-design-system/issues/619)) ([1a8e638](https://github.com/cultureamp/kaizen-design-system/commit/1a8e638f56bc219e90f1b326d10dceb299bda211))





## [1.9.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.9.0...@kaizen/draft-button@1.9.1) (2020-07-06)

**Note:** Version bump only for package @kaizen/draft-button





# [1.9.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.8.1...@kaizen/draft-button@1.9.0) (2020-07-05)


### Features

* Add ariaDescribedBy prop to Button ([#617](https://github.com/cultureamp/kaizen-design-system/issues/617)) ([23c9a4c](https://github.com/cultureamp/kaizen-design-system/commit/23c9a4caebbb88607438d1e18e4fbbcef3500f64))





## [1.8.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.8.0...@kaizen/draft-button@1.8.1) (2020-07-03)


### Bug Fixes

* Remove IconButton opacity styles ([#600](https://github.com/cultureamp/kaizen-design-system/issues/600)) ([0197fd1](https://github.com/cultureamp/kaizen-design-system/commit/0197fd19d76431a4dac6382c6f9c4a9befe776cd))





# [1.8.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.7.8...@kaizen/draft-button@1.8.0) (2020-07-02)


### Features

* Build MVP of TitleBlock ([#603](https://github.com/cultureamp/kaizen-design-system/issues/603)) ([ff2ffac](https://github.com/cultureamp/kaizen-design-system/commit/ff2ffacd80e3f651faa435865537f25e9ccef598))





## [1.7.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.7.7...@kaizen/draft-button@1.7.8) (2020-07-01)

**Note:** Version bump only for package @kaizen/draft-button





## [1.7.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.7.6...@kaizen/draft-button@1.7.7) (2020-06-29)


### Bug Fixes

* Add stylelint ignores for all preexisting usages of !important ([#568](https://github.com/cultureamp/kaizen-design-system/issues/568)) ([baa2a56](https://github.com/cultureamp/kaizen-design-system/commit/baa2a566277bdd6d2e7ff9b101ccbbcdf88718d2))





## [1.7.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.7.5...@kaizen/draft-button@1.7.6) (2020-06-29)

**Note:** Version bump only for package @kaizen/draft-button





## [1.7.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.7.4...@kaizen/draft-button@1.7.5) (2020-06-26)

**Note:** Version bump only for package @kaizen/draft-button





## [1.7.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.7.3...@kaizen/draft-button@1.7.4) (2020-06-23)


### Bug Fixes

* Properly disable buttons when a href is supplied ([#570](https://github.com/cultureamp/kaizen-design-system/issues/570)) ([4c61c73](https://github.com/cultureamp/kaizen-design-system/commit/4c61c73e5af0d27f5f550a8c97616227bf7cf9e8))





## [1.7.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.7.2...@kaizen/draft-button@1.7.3) (2020-06-22)

**Note:** Version bump only for package @kaizen/draft-button





## [1.7.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.7.1...@kaizen/draft-button@1.7.2) (2020-06-22)

**Note:** Version bump only for package @kaizen/draft-button





## [1.7.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.7.0...@kaizen/draft-button@1.7.1) (2020-06-22)

**Note:** Version bump only for package @kaizen/draft-button





# [1.7.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.6.1...@kaizen/draft-button@1.7.0) (2020-06-22)


### Features

* Add focus rings to TextField & TextAreaField + reversed support for TextAreaField ([#544](https://github.com/cultureamp/kaizen-design-system/issues/544)) ([ba4334e](https://github.com/cultureamp/kaizen-design-system/commit/ba4334e273be1aa8f8d9bfa820268b41e5373773))





## [1.6.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.6.0...@kaizen/draft-button@1.6.1) (2020-06-19)

**Note:** Version bump only for package @kaizen/draft-button





# [1.6.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.5.7...@kaizen/draft-button@1.6.0) (2020-06-19)


### Features

* Expose ButtonProps ([#559](https://github.com/cultureamp/kaizen-design-system/issues/559)) ([cc1cfad](https://github.com/cultureamp/kaizen-design-system/commit/cc1cfade7e270fca6b8f6535ed1e92c394c9625f))





## [1.5.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.5.6...@kaizen/draft-button@1.5.7) (2020-06-18)

**Note:** Version bump only for package @kaizen/draft-button





## [1.5.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.5.5...@kaizen/draft-button@1.5.6) (2020-06-17)

**Note:** Version bump only for package @kaizen/draft-button





## [1.5.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.5.4...@kaizen/draft-button@1.5.5) (2020-06-16)

**Note:** Version bump only for package @kaizen/draft-button





## [1.5.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.5.3...@kaizen/draft-button@1.5.4) (2020-06-12)

**Note:** Version bump only for package @kaizen/draft-button





## [1.5.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.5.2...@kaizen/draft-button@1.5.3) (2020-06-12)

**Note:** Version bump only for package @kaizen/draft-button





## [1.5.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.5.1...@kaizen/draft-button@1.5.2) (2020-06-11)

**Note:** Version bump only for package @kaizen/draft-button





## [1.5.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.5.0...@kaizen/draft-button@1.5.1) (2020-06-11)

**Note:** Version bump only for package @kaizen/draft-button





# [1.5.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.4.0...@kaizen/draft-button@1.5.0) (2020-06-11)


### Features

* replace remaining usages of ca-type-ideal-sans-xxx ([#538](https://github.com/cultureamp/kaizen-design-system/issues/538)) ([4f6618f](https://github.com/cultureamp/kaizen-design-system/commit/4f6618feb2bfe894c56ee994c15d3fddd87c048e))





# [1.4.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.3.0...@kaizen/draft-button@1.4.0) (2020-06-10)


### Features

* Add blur and focus callbacks to form components ([#537](https://github.com/cultureamp/kaizen-design-system/issues/537)) ([5bd717b](https://github.com/cultureamp/kaizen-design-system/commit/5bd717b019d89da27cee0cd4b198c606b458b795))





# [1.3.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.2.2...@kaizen/draft-button@1.3.0) (2020-06-09)


### Features

* Rollout inter ([#530](https://github.com/cultureamp/kaizen-design-system/issues/530)) ([a1b2059](https://github.com/cultureamp/kaizen-design-system/commit/a1b2059980ea753036caa5cb15ba6b1235d52ba4))





## [1.2.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.2.1...@kaizen/draft-button@1.2.2) (2020-06-09)

**Note:** Version bump only for package @kaizen/draft-button





## [1.2.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.2.0...@kaizen/draft-button@1.2.1) (2020-06-05)

**Note:** Version bump only for package @kaizen/draft-button





# [1.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.1.6...@kaizen/draft-button@1.2.0) (2020-06-05)


### Features

* add mousedown event handler ([#531](https://github.com/cultureamp/kaizen-design-system/issues/531)) ([271140f](https://github.com/cultureamp/kaizen-design-system/commit/271140f0570d90e989ef752309010aa819bdca23))





## [1.1.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.1.5...@kaizen/draft-button@1.1.6) (2020-06-05)

**Note:** Version bump only for package @kaizen/draft-button





## [1.1.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.1.4...@kaizen/draft-button@1.1.5) (2020-06-05)

**Note:** Version bump only for package @kaizen/draft-button





## [1.1.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.1.3...@kaizen/draft-button@1.1.4) (2020-06-04)

**Note:** Version bump only for package @kaizen/draft-button





## [1.1.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.1.2...@kaizen/draft-button@1.1.3) (2020-06-02)

**Note:** Version bump only for package @kaizen/draft-button





## [1.1.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.1.1...@kaizen/draft-button@1.1.2) (2020-06-02)

**Note:** Version bump only for package @kaizen/draft-button





## [1.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-button@1.1.0...@kaizen/draft-button@1.1.1) (2020-06-02)

**Note:** Version bump only for package @kaizen/draft-button





# 1.1.0 (2020-05-28)


### Features

* Create new Button package ([#460](https://github.com/cultureamp/kaizen-design-system/issues/460)) ([9f8d95d](https://github.com/cultureamp/kaizen-design-system/commit/9f8d95d0fdc64385dfbdf305d5773e8703600393))
