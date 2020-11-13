# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.14](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-filter-drawer@2.0.13...@kaizen/draft-filter-drawer@2.0.14) (2020-11-12)

**Note:** Version bump only for package @kaizen/draft-filter-drawer





## [2.0.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-filter-drawer@2.0.12...@kaizen/draft-filter-drawer@2.0.13) (2020-11-12)

**Note:** Version bump only for package @kaizen/draft-filter-drawer





## [2.0.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-filter-drawer@2.0.11...@kaizen/draft-filter-drawer@2.0.12) (2020-11-09)

**Note:** Version bump only for package @kaizen/draft-filter-drawer





## [2.0.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-filter-drawer@2.0.10...@kaizen/draft-filter-drawer@2.0.11) (2020-11-09)

**Note:** Version bump only for package @kaizen/draft-filter-drawer





## [2.0.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-filter-drawer@2.0.9...@kaizen/draft-filter-drawer@2.0.10) (2020-10-21)

**Note:** Version bump only for package @kaizen/draft-filter-drawer





## [2.0.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-filter-drawer@2.0.8...@kaizen/draft-filter-drawer@2.0.9) (2020-10-08)

**Note:** Version bump only for package @kaizen/draft-filter-drawer





## [2.0.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-filter-drawer@2.0.7...@kaizen/draft-filter-drawer@2.0.8) (2020-10-01)

**Note:** Version bump only for package @kaizen/draft-filter-drawer





## [2.0.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-filter-drawer@2.0.6...@kaizen/draft-filter-drawer@2.0.7) (2020-10-01)

**Note:** Version bump only for package @kaizen/draft-filter-drawer





## [2.0.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-filter-drawer@2.0.5...@kaizen/draft-filter-drawer@2.0.6) (2020-09-30)

**Note:** Version bump only for package @kaizen/draft-filter-drawer





## [2.0.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-filter-drawer@2.0.4...@kaizen/draft-filter-drawer@2.0.5) (2020-09-29)

**Note:** Version bump only for package @kaizen/draft-filter-drawer





## [2.0.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-filter-drawer@2.0.3...@kaizen/draft-filter-drawer@2.0.4) (2020-09-28)

**Note:** Version bump only for package @kaizen/draft-filter-drawer





## [2.0.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-filter-drawer@2.0.2...@kaizen/draft-filter-drawer@2.0.3) (2020-09-28)

**Note:** Version bump only for package @kaizen/draft-filter-drawer





## [2.0.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-filter-drawer@2.0.1...@kaizen/draft-filter-drawer@2.0.2) (2020-09-24)


### Bug Fixes

* Change styles from require to use import ([#782](https://github.com/cultureamp/kaizen-design-system/issues/782)) ([defd448](https://github.com/cultureamp/kaizen-design-system/commit/defd4483faa3459d9af48e272c63656798008a28))





## [2.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-filter-drawer@2.0.0...@kaizen/draft-filter-drawer@2.0.1) (2020-09-23)


### Bug Fixes

* Changed icons to use import, added types for icons ([#781](https://github.com/cultureamp/kaizen-design-system/issues/781)) ([e0856a8](https://github.com/cultureamp/kaizen-design-system/commit/e0856a84e3b39d3dc1bfa910b0b973bd65e170c9))





# [2.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-filter-drawer@1.1.5...@kaizen/draft-filter-drawer@2.0.0) (2020-09-13)


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





## [1.1.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-filter-drawer@1.1.4...@kaizen/draft-filter-drawer@1.1.5) (2020-09-11)

**Note:** Version bump only for package @kaizen/draft-filter-drawer





## [1.1.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-filter-drawer@1.1.3...@kaizen/draft-filter-drawer@1.1.4) (2020-09-11)

**Note:** Version bump only for package @kaizen/draft-filter-drawer





## [1.1.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-filter-drawer@1.1.2...@kaizen/draft-filter-drawer@1.1.3) (2020-09-09)

**Note:** Version bump only for package @kaizen/draft-filter-drawer





## [1.1.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-filter-drawer@1.1.1...@kaizen/draft-filter-drawer@1.1.2) (2020-09-09)


### Bug Fixes

* Added missing dependencies for Modal, FilterDrawer, and Tile ([#773](https://github.com/cultureamp/kaizen-design-system/issues/773)) ([60fc136](https://github.com/cultureamp/kaizen-design-system/commit/60fc136e131cca15fbc5b6dcbc8953c567d8e23c))





## [1.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-filter-drawer@1.1.0...@kaizen/draft-filter-drawer@1.1.1) (2020-07-09)


### Bug Fixes

* reversed filter button class was not being applied ([#634](https://github.com/cultureamp/kaizen-design-system/issues/634)) ([f6c5c73](https://github.com/cultureamp/kaizen-design-system/commit/f6c5c73c1979851664e576377b2644e6917c9f2d))





# 1.1.0 (2020-07-09)


### Features

* @kaizen/draft-filter-drawer (React, new package) ([#590](https://github.com/cultureamp/kaizen-design-system/issues/590)) ([a44ef9e](https://github.com/cultureamp/kaizen-design-system/commit/a44ef9e2efd82855412c8d334b063208bfc5be28))
