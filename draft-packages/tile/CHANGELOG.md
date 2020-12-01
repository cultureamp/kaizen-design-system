# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.0.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tile@3.0.3...@kaizen/draft-tile@3.0.4) (2020-12-01)


### Bug Fixes

* Added missing dependencies. Updated eslint. ([#875](https://github.com/cultureamp/kaizen-design-system/issues/875)) ([182a9ca](https://github.com/cultureamp/kaizen-design-system/commit/182a9cafa9cf9795dcdd936cfef7bac432d3c28f))





## [3.0.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tile@3.0.2...@kaizen/draft-tile@3.0.3) (2020-11-25)

**Note:** Version bump only for package @kaizen/draft-tile





## [3.0.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tile@3.0.1...@kaizen/draft-tile@3.0.2) (2020-11-13)

**Note:** Version bump only for package @kaizen/draft-tile





## [3.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tile@3.0.0...@kaizen/draft-tile@3.0.1) (2020-11-12)

**Note:** Version bump only for package @kaizen/draft-tile





# [3.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tile@2.1.2...@kaizen/draft-tile@3.0.0) (2020-11-12)


### Bug Fixes

* Clean up eslint warnings ([#850](https://github.com/cultureamp/kaizen-design-system/issues/850)) ([78d0f20](https://github.com/cultureamp/kaizen-design-system/commit/78d0f207b03e6449f6c5f4e3000926d91c3094e1))


### BREAKING CHANGES

* Consumers that were passing in a now-restricted type
to a prop that accepted e.g. "any" as a type may now break.

* Fix eslint errors as result of rule change

* Fix type error in getCustomProps for Buttons

* Add missing key to MenuItem

* Fix line order syntax in Popover





## [2.1.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tile@2.1.1...@kaizen/draft-tile@2.1.2) (2020-11-09)

**Note:** Version bump only for package @kaizen/draft-tile





## [2.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tile@2.1.0...@kaizen/draft-tile@2.1.1) (2020-11-09)

**Note:** Version bump only for package @kaizen/draft-tile





# [2.1.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tile@2.0.9...@kaizen/draft-tile@2.1.0) (2020-10-28)


### Features

* Add working variant of button ([#815](https://github.com/cultureamp/kaizen-design-system/issues/815)) ([8a22ebc](https://github.com/cultureamp/kaizen-design-system/commit/8a22ebc197525522a824209c76b17c7b2178b80e))





## [2.0.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tile@2.0.8...@kaizen/draft-tile@2.0.9) (2020-10-21)

**Note:** Version bump only for package @kaizen/draft-tile





## [2.0.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tile@2.0.7...@kaizen/draft-tile@2.0.8) (2020-10-08)

**Note:** Version bump only for package @kaizen/draft-tile





## [2.0.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tile@2.0.6...@kaizen/draft-tile@2.0.7) (2020-10-01)

**Note:** Version bump only for package @kaizen/draft-tile





## [2.0.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tile@2.0.5...@kaizen/draft-tile@2.0.6) (2020-10-01)

**Note:** Version bump only for package @kaizen/draft-tile





## [2.0.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tile@2.0.4...@kaizen/draft-tile@2.0.5) (2020-09-30)

**Note:** Version bump only for package @kaizen/draft-tile





## [2.0.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tile@2.0.3...@kaizen/draft-tile@2.0.4) (2020-09-28)

**Note:** Version bump only for package @kaizen/draft-tile





## [2.0.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tile@2.0.2...@kaizen/draft-tile@2.0.3) (2020-09-28)

**Note:** Version bump only for package @kaizen/draft-tile





## [2.0.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tile@2.0.1...@kaizen/draft-tile@2.0.2) (2020-09-24)


### Bug Fixes

* Change styles from require to use import ([#782](https://github.com/cultureamp/kaizen-design-system/issues/782)) ([defd448](https://github.com/cultureamp/kaizen-design-system/commit/defd4483faa3459d9af48e272c63656798008a28))





## [2.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tile@2.0.0...@kaizen/draft-tile@2.0.1) (2020-09-23)


### Bug Fixes

* Changed icons to use import, added types for icons ([#781](https://github.com/cultureamp/kaizen-design-system/issues/781)) ([e0856a8](https://github.com/cultureamp/kaizen-design-system/commit/e0856a84e3b39d3dc1bfa910b0b973bd65e170c9))





# [2.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tile@1.2.2...@kaizen/draft-tile@2.0.0) (2020-09-13)


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





## [1.2.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tile@1.2.1...@kaizen/draft-tile@1.2.2) (2020-09-09)


### Bug Fixes

* Added missing dependencies for Modal, FilterDrawer, and Tile ([#773](https://github.com/cultureamp/kaizen-design-system/issues/773)) ([60fc136](https://github.com/cultureamp/kaizen-design-system/commit/60fc136e131cca15fbc5b6dcbc8953c567d8e23c))





## [1.2.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tile@1.2.0...@kaizen/draft-tile@1.2.1) (2020-09-07)


### Bug Fixes

* Bump design-tokens peer dependency to the latest version ([#760](https://github.com/cultureamp/kaizen-design-system/issues/760)) ([37e5414](https://github.com/cultureamp/kaizen-design-system/commit/37e5414b2e2c0befb4127c588120eb2e8bdc4d39))





# [1.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tile@1.1.0...@kaizen/draft-tile@1.2.0) (2020-08-17)


### Features

* Tile refinements ([#709](https://github.com/cultureamp/kaizen-design-system/issues/709)) ([e433a52](https://github.com/cultureamp/kaizen-design-system/commit/e433a5219682cd8db90f0833818a10fa8a8db6b0))





# 1.1.0 (2020-08-11)


### Features

* Tile component ([#697](https://github.com/cultureamp/kaizen-design-system/issues/697)) ([010744c](https://github.com/cultureamp/kaizen-design-system/commit/010744c5444a293335bc2c17e4f6fe4005163593))
