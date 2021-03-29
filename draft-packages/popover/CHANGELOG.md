# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.1.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@2.1.5...@kaizen/draft-popover@2.1.6) (2021-03-29)

**Note:** Version bump only for package @kaizen/draft-popover





## [2.1.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@2.1.4...@kaizen/draft-popover@2.1.5) (2021-03-25)

**Note:** Version bump only for package @kaizen/draft-popover





## [2.1.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@2.1.3...@kaizen/draft-popover@2.1.4) (2021-03-25)

**Note:** Version bump only for package @kaizen/draft-popover





## [2.1.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@2.1.2...@kaizen/draft-popover@2.1.3) (2021-03-25)

**Note:** Version bump only for package @kaizen/draft-popover





## [2.1.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@2.1.1...@kaizen/draft-popover@2.1.2) (2021-03-22)

**Note:** Version bump only for package @kaizen/draft-popover





## [2.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@2.1.0...@kaizen/draft-popover@2.1.1) (2021-03-22)

**Note:** Version bump only for package @kaizen/draft-popover





# [2.1.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@2.0.3...@kaizen/draft-popover@2.1.0) (2021-03-18)


### Features

* Update Popover to support Heart ([#1228](https://github.com/cultureamp/kaizen-design-system/issues/1228)) ([71379be](https://github.com/cultureamp/kaizen-design-system/commit/71379be3ba580af0b638a3a14c21ab871108ca07))





## [2.0.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@2.0.2...@kaizen/draft-popover@2.0.3) (2021-03-17)

**Note:** Version bump only for package @kaizen/draft-popover





## [2.0.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@2.0.1...@kaizen/draft-popover@2.0.2) (2021-03-15)


### Bug Fixes

* add deprecation warnings to ultra legacy style, type and layout mixins + remove internal usage ([#1046](https://github.com/cultureamp/kaizen-design-system/issues/1046)) ([893ba13](https://github.com/cultureamp/kaizen-design-system/commit/893ba134d49468dc1cda3ffd847a056cf4886071))





## [2.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@2.0.0...@kaizen/draft-popover@2.0.1) (2021-03-15)


### Bug Fixes

* upgrade to Elm 0.19.1 ([#1038](https://github.com/cultureamp/kaizen-design-system/issues/1038)) ([07cd9e4](https://github.com/cultureamp/kaizen-design-system/commit/07cd9e4039d5cacfc64f752e1d3a966507ebc377))





# [2.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.8.1...@kaizen/draft-popover@2.0.0) (2021-03-03)


### Features

* Add popper layout engine to `Popover` ([#1178](https://github.com/cultureamp/kaizen-design-system/issues/1178)) ([9b96a06](https://github.com/cultureamp/kaizen-design-system/commit/9b96a06a2dbe687c3fa5d3b05a43be3e2a75e296))


### BREAKING CHANGES

* To quickly fix all breaking changes, simply import `PopoverLegacy` instead of `Popover` from `@kaizen/draft-popover`. Codemod:

```
codemod -m -d ./src --extensions tsx,jsx 'import \{([\,\w\s]*)Popover([\w\W]*)\} from "@kaizen\/draft-popover"' 'import {\1PopoverLegacy\2} from "@kaizen/draft-popover"'
codemod -m -d ./src --extensions tsx,jsx '<Popover([\w\W]*)<\/Popover>' '<PopoverLegacy\1</PopoverLegacy>'
```

With that said, it is recommended that you start using the `usePopover` hook (see the stories for more examples), or the new `Popover` component if you are using a class component (see the `usePopover` hook to see how this needs to be wired up).
* The `boxOffset` property has been removed. Now that the new `Popover` uses popper, it will automatically determine the offset. This property was also being overloaded with two types of offsets, depending on the value type, which was confusing.
* With the new version of `Popover`, the `side` and `position` props are no longer used. Use `placement` instead. Also note, the `placement` describes the position of the popover, relative to the referenceElement, which is unlike the legacy popover, where it describes the placement of the arrow.
* We now use popper as the positioning engine, which shouldn't cause any breaking change, but please test your popovers when upgrading this package.

# Side updates
* Fix the `automationId` prop not getting added to the root div element
* Remove the `id` prop, which wasn't getting used.





## [1.8.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.8.0...@kaizen/draft-popover@1.8.1) (2021-03-03)


### Bug Fixes

* Revert Add popper layout engine to  ([#1151](https://github.com/cultureamp/kaizen-design-system/issues/1151)) ([#1174](https://github.com/cultureamp/kaizen-design-system/issues/1174)) ([59b96b8](https://github.com/cultureamp/kaizen-design-system/commit/59b96b8d5f357b61207fec1dab65405a3ffb4e26))





# [1.8.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.7.24...@kaizen/draft-popover@1.8.0) (2021-03-02)


### Features

* Add popper layout engine to `Popover` ([#1151](https://github.com/cultureamp/kaizen-design-system/issues/1151)) ([193a65c](https://github.com/cultureamp/kaizen-design-system/commit/193a65cfc911280f284d52f5133e48e78d7449a1))





## [1.7.24](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.7.23...@kaizen/draft-popover@1.7.24) (2021-02-26)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.7.23](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.7.22...@kaizen/draft-popover@1.7.23) (2021-02-25)


### Bug Fixes

* Update minimum design-token dependency ([#1131](https://github.com/cultureamp/kaizen-design-system/issues/1131)) ([ce8182c](https://github.com/cultureamp/kaizen-design-system/commit/ce8182c054c9e8bc96bfdba8457bcd169d449204))





## [1.7.22](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.7.21...@kaizen/draft-popover@1.7.22) (2021-02-25)


### Bug Fixes

* Use rgb-param variables in rgba ([#1094](https://github.com/cultureamp/kaizen-design-system/issues/1094)) ([4e7f0c7](https://github.com/cultureamp/kaizen-design-system/commit/4e7f0c7cbdadd5a0d606b58ed4b0f1344b8b9d99))





## [1.7.21](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.7.20...@kaizen/draft-popover@1.7.21) (2021-02-22)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.7.20](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.7.19...@kaizen/draft-popover@1.7.20) (2021-02-19)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.7.19](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.7.18...@kaizen/draft-popover@1.7.19) (2021-02-18)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.7.18](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.7.17...@kaizen/draft-popover@1.7.18) (2021-02-15)


### Bug Fixes

* Remove usage of add-tint, add-shade, and add-alpha ([#1047](https://github.com/cultureamp/kaizen-design-system/issues/1047)) ([4164904](https://github.com/cultureamp/kaizen-design-system/commit/4164904cd5bac74488ab47963e10b0f314b56228))





## [1.7.17](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.7.16...@kaizen/draft-popover@1.7.17) (2021-02-12)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.7.16](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.7.15...@kaizen/draft-popover@1.7.16) (2021-02-11)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.7.15](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.7.14...@kaizen/draft-popover@1.7.15) (2021-02-09)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.7.14](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.7.13...@kaizen/draft-popover@1.7.14) (2021-02-09)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.7.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.7.12...@kaizen/draft-popover@1.7.13) (2021-02-08)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.7.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.7.11...@kaizen/draft-popover@1.7.12) (2021-02-08)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.7.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.7.10...@kaizen/draft-popover@1.7.11) (2021-02-05)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.7.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.7.9...@kaizen/draft-popover@1.7.10) (2021-02-02)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.7.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.7.8...@kaizen/draft-popover@1.7.9) (2021-01-18)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.7.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.7.7...@kaizen/draft-popover@1.7.8) (2021-01-14)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.7.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.7.6...@kaizen/draft-popover@1.7.7) (2021-01-11)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.7.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.7.5...@kaizen/draft-popover@1.7.6) (2021-01-08)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.7.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.7.4...@kaizen/draft-popover@1.7.5) (2020-12-16)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.7.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.7.3...@kaizen/draft-popover@1.7.4) (2020-12-09)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.7.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.7.2...@kaizen/draft-popover@1.7.3) (2020-12-09)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.7.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.7.1...@kaizen/draft-popover@1.7.2) (2020-12-08)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.7.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.7.0...@kaizen/draft-popover@1.7.1) (2020-12-04)

**Note:** Version bump only for package @kaizen/draft-popover





# [1.7.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.6.5...@kaizen/draft-popover@1.7.0) (2020-12-04)


### Features

* Allow for the modal confirmation button to be optional ([#882](https://github.com/cultureamp/kaizen-design-system/issues/882)) ([4014d70](https://github.com/cultureamp/kaizen-design-system/commit/4014d702c0f782ce28368c2e3f16712ad8481b49))





## [1.6.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.6.4...@kaizen/draft-popover@1.6.5) (2020-12-01)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.6.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.6.3...@kaizen/draft-popover@1.6.4) (2020-11-25)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.6.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.6.2...@kaizen/draft-popover@1.6.3) (2020-11-13)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.6.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.6.1...@kaizen/draft-popover@1.6.2) (2020-11-12)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.6.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.6.0...@kaizen/draft-popover@1.6.1) (2020-11-12)

**Note:** Version bump only for package @kaizen/draft-popover





# [1.6.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.5.2...@kaizen/draft-popover@1.6.0) (2020-11-10)


### Features

* Allow custom icons for popovers ([#857](https://github.com/cultureamp/kaizen-design-system/issues/857)) ([5f7a223](https://github.com/cultureamp/kaizen-design-system/commit/5f7a223505dc88e2f282e4dde47ae833aa9a1c13))





## [1.5.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.5.1...@kaizen/draft-popover@1.5.2) (2020-11-09)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.5.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.5.0...@kaizen/draft-popover@1.5.1) (2020-11-09)

**Note:** Version bump only for package @kaizen/draft-popover





# [1.5.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.45...@kaizen/draft-popover@1.5.0) (2020-10-29)


### Features

* Added y box offset option to Popover component ([#846](https://github.com/cultureamp/kaizen-design-system/issues/846)) ([43db639](https://github.com/cultureamp/kaizen-design-system/commit/43db6393865c25fe03396e5df5ba37020d6b15ca))





## [1.4.45](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.44...@kaizen/draft-popover@1.4.45) (2020-10-21)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.44](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.43...@kaizen/draft-popover@1.4.44) (2020-10-08)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.43](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.42...@kaizen/draft-popover@1.4.43) (2020-10-01)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.42](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.41...@kaizen/draft-popover@1.4.42) (2020-10-01)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.41](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.40...@kaizen/draft-popover@1.4.41) (2020-09-30)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.40](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.39...@kaizen/draft-popover@1.4.40) (2020-09-28)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.39](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.38...@kaizen/draft-popover@1.4.39) (2020-09-28)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.38](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.37...@kaizen/draft-popover@1.4.38) (2020-09-24)


### Bug Fixes

* Change styles from require to use import ([#782](https://github.com/cultureamp/kaizen-design-system/issues/782)) ([defd448](https://github.com/cultureamp/kaizen-design-system/commit/defd4483faa3459d9af48e272c63656798008a28))





## [1.4.37](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.36...@kaizen/draft-popover@1.4.37) (2020-09-23)


### Bug Fixes

* Changed icons to use import, added types for icons ([#781](https://github.com/cultureamp/kaizen-design-system/issues/781)) ([e0856a8](https://github.com/cultureamp/kaizen-design-system/commit/e0856a84e3b39d3dc1bfa910b0b973bd65e170c9))





## [1.4.36](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.35...@kaizen/draft-popover@1.4.36) (2020-09-11)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.35](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.34...@kaizen/draft-popover@1.4.35) (2020-09-11)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.34](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.33...@kaizen/draft-popover@1.4.34) (2020-09-09)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.33](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.32...@kaizen/draft-popover@1.4.33) (2020-09-07)


### Bug Fixes

* Bump design-tokens peer dependency to the latest version ([#760](https://github.com/cultureamp/kaizen-design-system/issues/760)) ([37e5414](https://github.com/cultureamp/kaizen-design-system/commit/37e5414b2e2c0befb4127c588120eb2e8bdc4d39))





## [1.4.32](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.31...@kaizen/draft-popover@1.4.32) (2020-08-28)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.31](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.30...@kaizen/draft-popover@1.4.31) (2020-08-27)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.30](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.29...@kaizen/draft-popover@1.4.30) (2020-08-24)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.29](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.28...@kaizen/draft-popover@1.4.29) (2020-08-19)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.28](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.27...@kaizen/draft-popover@1.4.28) (2020-08-12)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.27](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.26...@kaizen/draft-popover@1.4.27) (2020-08-10)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.26](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.25...@kaizen/draft-popover@1.4.26) (2020-08-04)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.25](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.24...@kaizen/draft-popover@1.4.25) (2020-07-31)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.24](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.23...@kaizen/draft-popover@1.4.24) (2020-07-30)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.23](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.22...@kaizen/draft-popover@1.4.23) (2020-07-15)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.22](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.21...@kaizen/draft-popover@1.4.22) (2020-07-15)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.21](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.20...@kaizen/draft-popover@1.4.21) (2020-07-10)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.20](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.19...@kaizen/draft-popover@1.4.20) (2020-07-09)


### Bug Fixes

* Switch from TSlint to ESlint ([#621](https://github.com/cultureamp/kaizen-design-system/issues/621)) ([59e64d4](https://github.com/cultureamp/kaizen-design-system/commit/59e64d4d0cd14302544ae7f41fd76a101d313aee))





## [1.4.19](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.18...@kaizen/draft-popover@1.4.19) (2020-07-09)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.18](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.17...@kaizen/draft-popover@1.4.18) (2020-07-09)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.17](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.16...@kaizen/draft-popover@1.4.17) (2020-07-06)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.16](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.15...@kaizen/draft-popover@1.4.16) (2020-07-01)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.15](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.14...@kaizen/draft-popover@1.4.15) (2020-06-29)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.14](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.13...@kaizen/draft-popover@1.4.14) (2020-06-26)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.12...@kaizen/draft-popover@1.4.13) (2020-06-22)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.11...@kaizen/draft-popover@1.4.12) (2020-06-22)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.10...@kaizen/draft-popover@1.4.11) (2020-06-22)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.9...@kaizen/draft-popover@1.4.10) (2020-06-19)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.8...@kaizen/draft-popover@1.4.9) (2020-06-18)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.7...@kaizen/draft-popover@1.4.8) (2020-06-17)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.6...@kaizen/draft-popover@1.4.7) (2020-06-16)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.5...@kaizen/draft-popover@1.4.6) (2020-06-12)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.4...@kaizen/draft-popover@1.4.5) (2020-06-12)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.3...@kaizen/draft-popover@1.4.4) (2020-06-11)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.2...@kaizen/draft-popover@1.4.3) (2020-06-11)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.1...@kaizen/draft-popover@1.4.2) (2020-06-11)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.4.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.4.0...@kaizen/draft-popover@1.4.1) (2020-06-10)

**Note:** Version bump only for package @kaizen/draft-popover





# [1.4.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.3.12...@kaizen/draft-popover@1.4.0) (2020-06-09)


### Features

* Rollout inter ([#530](https://github.com/cultureamp/kaizen-design-system/issues/530)) ([a1b2059](https://github.com/cultureamp/kaizen-design-system/commit/a1b2059980ea753036caa5cb15ba6b1235d52ba4))





## [1.3.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.3.11...@kaizen/draft-popover@1.3.12) (2020-06-05)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.3.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.3.10...@kaizen/draft-popover@1.3.11) (2020-06-05)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.3.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.3.9...@kaizen/draft-popover@1.3.10) (2020-06-05)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.3.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.3.8...@kaizen/draft-popover@1.3.9) (2020-06-04)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.3.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.3.7...@kaizen/draft-popover@1.3.8) (2020-06-02)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.3.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.3.6...@kaizen/draft-popover@1.3.7) (2020-06-02)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.3.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.3.5...@kaizen/draft-popover@1.3.6) (2020-05-28)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.3.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.3.4...@kaizen/draft-popover@1.3.5) (2020-05-27)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.3.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.3.3...@kaizen/draft-popover@1.3.4) (2020-05-26)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.3.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.3.2...@kaizen/draft-popover@1.3.3) (2020-05-26)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.3.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.3.1...@kaizen/draft-popover@1.3.2) (2020-05-26)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.3.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.3.0...@kaizen/draft-popover@1.3.1) (2020-05-21)

**Note:** Version bump only for package @kaizen/draft-popover





# [1.3.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.2.15...@kaizen/draft-popover@1.3.0) (2020-05-20)


### Features

* removed references to the old draft packages ([#504](https://github.com/cultureamp/kaizen-design-system/issues/504)) ([ddda156](https://github.com/cultureamp/kaizen-design-system/commit/ddda156513445ca8da8bcc64364f15dc4b94b1a6))





## [1.2.15](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.2.14...@kaizen/draft-popover@1.2.15) (2020-05-20)


### Bug Fixes

* unpin unintentionally pinned @kaizen/design-token peer dependencies ([#503](https://github.com/cultureamp/kaizen-design-system/issues/503)) ([aa6f1d3](https://github.com/cultureamp/kaizen-design-system/commit/aa6f1d3a63cd7f2e3dac9cd631aa7a9e88b153ac))





## [1.2.14](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.2.13...@kaizen/draft-popover@1.2.14) (2020-05-19)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.2.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.2.12...@kaizen/draft-popover@1.2.13) (2020-05-19)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.2.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.2.11...@kaizen/draft-popover@1.2.12) (2020-05-19)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.2.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.2.10...@kaizen/draft-popover@1.2.11) (2020-05-18)


### Bug Fixes

* sync old and new draft components ([#492](https://github.com/cultureamp/kaizen-design-system/issues/492)) ([6755e4b](https://github.com/cultureamp/kaizen-design-system/commit/6755e4beedf5d3953c5a50e152cfd181389d9be0))





## [1.2.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.2.9...@kaizen/draft-popover@1.2.10) (2020-05-15)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.2.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.2.8...@kaizen/draft-popover@1.2.9) (2020-05-13)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.2.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.2.7...@kaizen/draft-popover@1.2.8) (2020-05-08)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.2.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.2.6...@kaizen/draft-popover@1.2.7) (2020-05-08)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.2.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.2.5...@kaizen/draft-popover@1.2.6) (2020-05-08)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.2.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.2.4...@kaizen/draft-popover@1.2.5) (2020-05-07)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.2.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.2.3...@kaizen/draft-popover@1.2.4) (2020-05-06)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.2.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.2.2...@kaizen/draft-popover@1.2.3) (2020-05-06)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.2.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.2.1...@kaizen/draft-popover@1.2.2) (2020-05-05)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.2.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.2.0...@kaizen/draft-popover@1.2.1) (2020-05-05)

**Note:** Version bump only for package @kaizen/draft-popover





# [1.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.1.4...@kaizen/draft-popover@1.2.0) (2020-05-05)


### Features

* Updated all draft packages to accept all minor releases ([#451](https://github.com/cultureamp/kaizen-design-system/issues/451)) ([80453f6](https://github.com/cultureamp/kaizen-design-system/commit/80453f6c04300dcef61c14e39200ce154863eb0d))





## [1.1.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.1.3...@kaizen/draft-popover@1.1.4) (2020-05-04)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.1.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.1.2...@kaizen/draft-popover@1.1.3) (2020-05-04)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.1.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.1.1...@kaizen/draft-popover@1.1.2) (2020-05-04)

**Note:** Version bump only for package @kaizen/draft-popover





## [1.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-popover@1.1.0...@kaizen/draft-popover@1.1.1) (2020-05-04)

**Note:** Version bump only for package @kaizen/draft-popover





# 1.1.0 (2020-05-01)


### Features

* Copy All Drafts **except Form** Into Draft Packages ([#431](https://github.com/cultureamp/kaizen-design-system/issues/431)) ([55bfde9](https://github.com/cultureamp/kaizen-design-system/commit/55bfde98611d2c4070d26ba082e478f96ddca1fd))
