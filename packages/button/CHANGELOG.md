# Change Log

## 3.0.4

### Patch Changes

- [#3677](https://github.com/cultureamp/kaizen-design-system/pull/3677) [`06c48bb35`](https://github.com/cultureamp/kaizen-design-system/commit/06c48bb3593cd348c393369b6bc17d04a997c9e0) - Bump outdated `component-library` and `draft-form` dependencies to latest

## 3.0.3

### Patch Changes

- [#3621](https://github.com/cultureamp/kaizen-design-system/pull/3621) [`4967215eb`](https://github.com/cultureamp/kaizen-design-system/commit/4967215eb05298f69dbdf8e9cb44f4e0665e7d8f) - Fix files whitelist to include scss files

- Updated dependencies [[`4967215eb`](https://github.com/cultureamp/kaizen-design-system/commit/4967215eb05298f69dbdf8e9cb44f4e0665e7d8f)]:
  - @kaizen/component-library@16.7.6
  - @kaizen/loading-spinner@2.3.11
  - @kaizen/draft-badge@1.13.11

## 3.0.2

### Patch Changes

- [#3607](https://github.com/cultureamp/kaizen-design-system/pull/3607) [`de50c2b00`](https://github.com/cultureamp/kaizen-design-system/commit/de50c2b00ebd44d0cf5d7c62ac789c57d9a3c00d) - - Fix props destructuring in GenericButton

  - Add test coverage for form submit using button outside of parent
  - Add story to document Button API change

- [#3595](https://github.com/cultureamp/kaizen-design-system/pull/3595) [`0e0750e87`](https://github.com/cultureamp/kaizen-design-system/commit/0e0750e872e3381420df7bf2947d9deb9db8b705) - Remove .turbo from distributed files

- [#3616](https://github.com/cultureamp/kaizen-design-system/pull/3616) [`e4f5f5ce5`](https://github.com/cultureamp/kaizen-design-system/commit/e4f5f5ce50b4e1a4aa8b189c247d0f2a8fea722f) - Fix packagejson files whitelist to only include publish files

- [#3611](https://github.com/cultureamp/kaizen-design-system/pull/3611) [`589244ad0`](https://github.com/cultureamp/kaizen-design-system/commit/589244ad0c307edca845d19843f2db282050fe29) - Fix supported design-tokens versions

- Updated dependencies [[`0e0750e87`](https://github.com/cultureamp/kaizen-design-system/commit/0e0750e872e3381420df7bf2947d9deb9db8b705), [`e4f5f5ce5`](https://github.com/cultureamp/kaizen-design-system/commit/e4f5f5ce50b4e1a4aa8b189c247d0f2a8fea722f), [`589244ad0`](https://github.com/cultureamp/kaizen-design-system/commit/589244ad0c307edca845d19843f2db282050fe29)]:
  - @kaizen/component-library@16.7.5
  - @kaizen/loading-spinner@2.3.10
  - @kaizen/draft-badge@1.13.10

## 3.0.1

### Patch Changes

- [#3608](https://github.com/cultureamp/kaizen-design-system/pull/3608) [`cc96d9835`](https://github.com/cultureamp/kaizen-design-system/commit/cc96d98351ae380fe1a1e8a33d65d80232ed7a57) - Update usages of classnames to not use object syntax

- Updated dependencies [[`cc96d9835`](https://github.com/cultureamp/kaizen-design-system/commit/cc96d98351ae380fe1a1e8a33d65d80232ed7a57)]:
  - @kaizen/component-library@16.7.4
  - @kaizen/design-tokens@10.3.7
  - @kaizen/draft-badge@1.13.9

## 3.0.0

### Major Changes

- [#3576](https://github.com/cultureamp/kaizen-design-system/pull/3576) [`e9ec5c174`](https://github.com/cultureamp/kaizen-design-system/commit/e9ec5c17466b4e21b7a7cfeb5778b967fdea4995) - - Replace form with size prop
  - size prop can take "small" or "regular" as a value
  - "small" will acheive the previous form style
  - "regular" will be the default and will be unstyled
  - Extend native button form HTML attributes
    - Button can now take all native button form attributes

### Patch Changes

- Updated dependencies [[`739d87b0c`](https://github.com/cultureamp/kaizen-design-system/commit/739d87b0cd917e7c0f3becf2cc0fd8f9667f7a6c), [`739d87b0c`](https://github.com/cultureamp/kaizen-design-system/commit/739d87b0cd917e7c0f3becf2cc0fd8f9667f7a6c)]:
  - @kaizen/component-library@16.7.3
  - @kaizen/design-tokens@10.3.6

## 2.1.5

### Patch Changes

- [#3558](https://github.com/cultureamp/kaizen-design-system/pull/3558) [`f09c085ee`](https://github.com/cultureamp/kaizen-design-system/commit/f09c085ee78c6dc79afc291faa6e284b333d1e93) - Use native focus-visible selector for focus styling instead of polyfill class

## 2.1.4

### Patch Changes

- [#3540](https://github.com/cultureamp/kaizen-design-system/pull/3540) [`1228800bc`](https://github.com/cultureamp/kaizen-design-system/commit/1228800bc215bc33731888bc81ef68be1a3c19d9) - Add type="button" to buttons missing an explicit type

- Updated dependencies [[`1228800bc`](https://github.com/cultureamp/kaizen-design-system/commit/1228800bc215bc33731888bc81ef68be1a3c19d9), [`11691d3dd`](https://github.com/cultureamp/kaizen-design-system/commit/11691d3dd152f013241233474ea9409fe76e7796)]:
  - @kaizen/component-library@16.7.2

## 2.1.3

### Patch Changes

- [#3536](https://github.com/cultureamp/kaizen-design-system/pull/3536) [`82ba2fa0d`](https://github.com/cultureamp/kaizen-design-system/commit/82ba2fa0d20c66a1688d2609d4bd7775b129349c) - - enforced no-implicit-any across kaizen

- Updated dependencies [[`82ba2fa0d`](https://github.com/cultureamp/kaizen-design-system/commit/82ba2fa0d20c66a1688d2609d4bd7775b129349c)]:
  - @kaizen/component-library@16.7.1

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.1.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.1.1...@kaizen/button@2.1.2) (2023-04-06)

**Note:** Version bump only for package @kaizen/button

## [2.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.1.0...@kaizen/button@2.1.1) (2023-04-05)

**Note:** Version bump only for package @kaizen/button

# [2.1.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.29...@kaizen/button@2.1.0) (2023-03-30)

### Features

- 71-working-button-state-needs-to-be-announced-with-a-live-region ([#3406](https://github.com/cultureamp/kaizen-design-system/issues/3406)) ([ae55e7a](https://github.com/cultureamp/kaizen-design-system/commit/ae55e7acd8ef6d9d0797a5f9adc9e206a9995f66))

## [2.0.29](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.28...@kaizen/button@2.0.29) (2023-03-29)

**Note:** Version bump only for package @kaizen/button

## [2.0.28](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.27...@kaizen/button@2.0.28) (2023-03-29)

**Note:** Version bump only for package @kaizen/button

## [2.0.27](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.26...@kaizen/button@2.0.27) (2023-03-23)

**Note:** Version bump only for package @kaizen/button

## [2.0.26](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.25...@kaizen/button@2.0.26) (2023-03-22)

**Note:** Version bump only for package @kaizen/button

## [2.0.25](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.24...@kaizen/button@2.0.25) (2023-03-14)

**Note:** Version bump only for package @kaizen/button

## [2.0.24](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.23...@kaizen/button@2.0.24) (2023-03-10)

### Bug Fixes

- custom button now forwards custom props ([#3356](https://github.com/cultureamp/kaizen-design-system/issues/3356)) ([a82863a](https://github.com/cultureamp/kaizen-design-system/commit/a82863a0ce25082e3ae56fd1ca8d7bafdd52377a))

## [2.0.23](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.22...@kaizen/button@2.0.23) (2023-03-02)

**Note:** Version bump only for package @kaizen/button

## [2.0.22](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.21...@kaizen/button@2.0.22) (2023-03-02)

**Note:** Version bump only for package @kaizen/button

## [2.0.21](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.20...@kaizen/button@2.0.21) (2023-03-02)

**Note:** Version bump only for package @kaizen/button

## [2.0.20](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.19...@kaizen/button@2.0.20) (2023-02-23)

**Note:** Version bump only for package @kaizen/button

## [2.0.19](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.18...@kaizen/button@2.0.19) (2023-02-23)

**Note:** Version bump only for package @kaizen/button

## [2.0.18](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.17...@kaizen/button@2.0.18) (2023-02-22)

**Note:** Version bump only for package @kaizen/button

## [2.0.17](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.16...@kaizen/button@2.0.17) (2023-02-09)

**Note:** Version bump only for package @kaizen/button

## [2.0.16](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.15...@kaizen/button@2.0.16) (2023-02-01)

**Note:** Version bump only for package @kaizen/button

## [2.0.15](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.14...@kaizen/button@2.0.15) (2023-01-30)

**Note:** Version bump only for package @kaizen/button

## [2.0.14](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.13...@kaizen/button@2.0.14) (2023-01-23)

**Note:** Version bump only for package @kaizen/button

## [2.0.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.12...@kaizen/button@2.0.13) (2023-01-18)

**Note:** Version bump only for package @kaizen/button

## [2.0.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.11...@kaizen/button@2.0.12) (2023-01-04)

**Note:** Version bump only for package @kaizen/button

## [2.0.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.10...@kaizen/button@2.0.11) (2023-01-04)

**Note:** Version bump only for package @kaizen/button

## [2.0.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.9...@kaizen/button@2.0.10) (2023-01-03)

**Note:** Version bump only for package @kaizen/button

## [2.0.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.8...@kaizen/button@2.0.9) (2022-12-01)

**Note:** Version bump only for package @kaizen/button

## [2.0.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.7...@kaizen/button@2.0.8) (2022-11-25)

**Note:** Version bump only for package @kaizen/button

## [2.0.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.6...@kaizen/button@2.0.7) (2022-11-17)

**Note:** Version bump only for package @kaizen/button

## [2.0.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.5...@kaizen/button@2.0.6) (2022-11-13)

**Note:** Version bump only for package @kaizen/button

## [2.0.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.4...@kaizen/button@2.0.5) (2022-11-09)

**Note:** Version bump only for package @kaizen/button

## [2.0.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.3...@kaizen/button@2.0.4) (2022-11-01)

**Note:** Version bump only for package @kaizen/button

## [2.0.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.2...@kaizen/button@2.0.3) (2022-10-26)

**Note:** Version bump only for package @kaizen/button

## [2.0.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.1...@kaizen/button@2.0.2) (2022-10-24)

**Note:** Version bump only for package @kaizen/button

## [2.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@2.0.0...@kaizen/button@2.0.1) (2022-10-19)

**Note:** Version bump only for package @kaizen/button

# [2.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.3.5...@kaizen/button@2.0.0) (2022-10-04)

### Bug Fixes

- **button:** Remove ref from custom component render to avoid forwardRef console warnings ([#2997](https://github.com/cultureamp/kaizen-design-system/issues/2997)) ([5eeca19](https://github.com/cultureamp/kaizen-design-system/commit/5eeca19d65295aeba9a8de58a924ff95d1d77c91))

### BREAKING CHANGES

- **button:** Ref is no longer passed through when using the 'component' render prop. I don't think anyone is using this. If your TS build passes then there's nothing to worry about.

## [1.3.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.3.4...@kaizen/button@1.3.5) (2022-09-30)

**Note:** Version bump only for package @kaizen/button

## [1.3.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.3.3...@kaizen/button@1.3.4) (2022-09-14)

**Note:** Version bump only for package @kaizen/button

## [1.3.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.3.2...@kaizen/button@1.3.3) (2022-09-05)

**Note:** Version bump only for package @kaizen/button

## [1.3.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.3.1...@kaizen/button@1.3.2) (2022-09-02)

**Note:** Version bump only for package @kaizen/button

## [1.3.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.3.0...@kaizen/button@1.3.1) (2022-08-19)

**Note:** Version bump only for package @kaizen/button

# [1.3.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.2.21...@kaizen/button@1.3.0) (2022-08-18)

### Features

- update react to 16.14.0 ([#2922](https://github.com/cultureamp/kaizen-design-system/issues/2922)) ([22878be](https://github.com/cultureamp/kaizen-design-system/commit/22878beee1884e2f58d0447b3908321937175228))

## [1.2.21](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.2.20...@kaizen/button@1.2.21) (2022-08-01)

**Note:** Version bump only for package @kaizen/button

## [1.2.20](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.2.19...@kaizen/button@1.2.20) (2022-07-27)

**Note:** Version bump only for package @kaizen/button

## [1.2.19](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.2.18...@kaizen/button@1.2.19) (2022-07-27)

**Note:** Version bump only for package @kaizen/button

## [1.2.18](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.2.17...@kaizen/button@1.2.18) (2022-07-27)

**Note:** Version bump only for package @kaizen/button

## [1.2.17](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.2.16...@kaizen/button@1.2.17) (2022-07-26)

**Note:** Version bump only for package @kaizen/button

## [1.2.16](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.2.15...@kaizen/button@1.2.16) (2022-07-22)

**Note:** Version bump only for package @kaizen/button

## [1.2.15](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.2.14...@kaizen/button@1.2.15) (2022-07-21)

**Note:** Version bump only for package @kaizen/button

## [1.2.14](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.2.13...@kaizen/button@1.2.14) (2022-06-22)

**Note:** Version bump only for package @kaizen/button

## [1.2.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.2.12...@kaizen/button@1.2.13) (2022-06-21)

**Note:** Version bump only for package @kaizen/button

## [1.2.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.2.11...@kaizen/button@1.2.12) (2022-06-21)

**Note:** Version bump only for package @kaizen/button

## [1.2.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.2.10...@kaizen/button@1.2.11) (2022-06-21)

**Note:** Version bump only for package @kaizen/button

## [1.2.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.2.9...@kaizen/button@1.2.10) (2022-06-20)

**Note:** Version bump only for package @kaizen/button

## [1.2.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.2.8...@kaizen/button@1.2.9) (2022-06-16)

**Note:** Version bump only for package @kaizen/button

## [1.2.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.2.7...@kaizen/button@1.2.8) (2022-06-09)

**Note:** Version bump only for package @kaizen/button

## [1.2.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.2.6...@kaizen/button@1.2.7) (2022-06-06)

**Note:** Version bump only for package @kaizen/button

## [1.2.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.2.5...@kaizen/button@1.2.6) (2022-05-31)

**Note:** Version bump only for package @kaizen/button

## [1.2.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.2.4...@kaizen/button@1.2.5) (2022-05-30)

**Note:** Version bump only for package @kaizen/button

## [1.2.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.2.3...@kaizen/button@1.2.4) (2022-05-30)

**Note:** Version bump only for package @kaizen/button

## [1.2.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.2.2...@kaizen/button@1.2.3) (2022-05-30)

**Note:** Version bump only for package @kaizen/button

## [1.2.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.2.1...@kaizen/button@1.2.2) (2022-05-30)

**Note:** Version bump only for package @kaizen/button

## [1.2.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.2.0...@kaizen/button@1.2.1) (2022-05-24)

**Note:** Version bump only for package @kaizen/button

# [1.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.1.5...@kaizen/button@1.2.0) (2022-05-20)

### Features

- add compatibility for react-18 ([#2731](https://github.com/cultureamp/kaizen-design-system/issues/2731)) ([0051f4c](https://github.com/cultureamp/kaizen-design-system/commit/0051f4cee82895acc2c2f44fc7bf8063857de57e))

## [1.1.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.1.4...@kaizen/button@1.1.5) (2022-05-19)

**Note:** Version bump only for package @kaizen/button

## [1.1.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.1.3...@kaizen/button@1.1.4) (2022-05-19)

**Note:** Version bump only for package @kaizen/button

## [1.1.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.1.2...@kaizen/button@1.1.3) (2022-05-11)

**Note:** Version bump only for package @kaizen/button

## [1.1.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.1.1...@kaizen/button@1.1.2) (2022-05-03)

### Bug Fixes

- button focus styling ([#2711](https://github.com/cultureamp/kaizen-design-system/issues/2711)) ([860b2f9](https://github.com/cultureamp/kaizen-design-system/commit/860b2f9b74db1bc3f1f007107e48a4e6a77acc0d))

## [1.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.1.0...@kaizen/button@1.1.1) (2022-05-03)

**Note:** Version bump only for package @kaizen/button

# [1.1.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.29...@kaizen/button@1.1.0) (2022-05-02)

### Features

- DirectionalLink and BreadcrumbLink button variant ([#2571](https://github.com/cultureamp/kaizen-design-system/issues/2571)) ([de5b3c1](https://github.com/cultureamp/kaizen-design-system/commit/de5b3c1daac712fc38cb088e1de96b757e3c6e86))

## [1.0.29](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.28...@kaizen/button@1.0.29) (2022-04-29)

**Note:** Version bump only for package @kaizen/button

## [1.0.28](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.27...@kaizen/button@1.0.28) (2022-04-27)

**Note:** Version bump only for package @kaizen/button

## [1.0.27](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.26...@kaizen/button@1.0.27) (2022-04-14)

**Note:** Version bump only for package @kaizen/button

## [1.0.26](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.25...@kaizen/button@1.0.26) (2022-04-13)

**Note:** Version bump only for package @kaizen/button

## [1.0.25](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.24...@kaizen/button@1.0.25) (2022-04-03)

**Note:** Version bump only for package @kaizen/button

## [1.0.24](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.23...@kaizen/button@1.0.24) (2022-03-31)

**Note:** Version bump only for package @kaizen/button

## [1.0.23](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.22...@kaizen/button@1.0.23) (2022-03-30)

**Note:** Version bump only for package @kaizen/button

## [1.0.22](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.21...@kaizen/button@1.0.22) (2022-03-29)

**Note:** Version bump only for package @kaizen/button

## [1.0.21](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.20...@kaizen/button@1.0.21) (2022-03-22)

**Note:** Version bump only for package @kaizen/button

## [1.0.20](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.19...@kaizen/button@1.0.20) (2022-03-21)

**Note:** Version bump only for package @kaizen/button

## [1.0.19](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.18...@kaizen/button@1.0.19) (2022-03-18)

**Note:** Version bump only for package @kaizen/button

## [1.0.18](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.17...@kaizen/button@1.0.18) (2022-03-17)

**Note:** Version bump only for package @kaizen/button

## [1.0.17](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.16...@kaizen/button@1.0.17) (2022-03-17)

**Note:** Version bump only for package @kaizen/button

## [1.0.16](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.15...@kaizen/button@1.0.16) (2022-03-16)

**Note:** Version bump only for package @kaizen/button

## [1.0.15](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.14...@kaizen/button@1.0.15) (2022-03-16)

**Note:** Version bump only for package @kaizen/button

## [1.0.14](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.13...@kaizen/button@1.0.14) (2022-03-16)

**Note:** Version bump only for package @kaizen/button

## [1.0.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.12...@kaizen/button@1.0.13) (2022-03-10)

**Note:** Version bump only for package @kaizen/button

## [1.0.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.11...@kaizen/button@1.0.12) (2022-03-09)

**Note:** Version bump only for package @kaizen/button

## [1.0.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.10...@kaizen/button@1.0.11) (2022-03-07)

**Note:** Version bump only for package @kaizen/button

## [1.0.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.9...@kaizen/button@1.0.10) (2022-03-07)

**Note:** Version bump only for package @kaizen/button

## [1.0.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.8...@kaizen/button@1.0.9) (2022-03-07)

**Note:** Version bump only for package @kaizen/button

## [1.0.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.7...@kaizen/button@1.0.8) (2022-03-07)

**Note:** Version bump only for package @kaizen/button

## [1.0.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.6...@kaizen/button@1.0.7) (2022-03-02)

**Note:** Version bump only for package @kaizen/button

## [1.0.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.5...@kaizen/button@1.0.6) (2022-03-01)

**Note:** Version bump only for package @kaizen/button

## [1.0.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.4...@kaizen/button@1.0.5) (2022-03-01)

**Note:** Version bump only for package @kaizen/button

## [1.0.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.3...@kaizen/button@1.0.4) (2022-02-28)

**Note:** Version bump only for package @kaizen/button

## [1.0.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.2...@kaizen/button@1.0.3) (2022-02-28)

**Note:** Version bump only for package @kaizen/button

## [1.0.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@1.0.1...@kaizen/button@1.0.2) (2022-02-28)

**Note:** Version bump only for package @kaizen/button

## [1.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@0.3.0...@kaizen/button@1.0.1) (2022-02-22)

### Bug Fixes

- button initial stable release ([#2551](https://github.com/cultureamp/kaizen-design-system/issues/2551)) ([8194cdb](https://github.com/cultureamp/kaizen-design-system/commit/8194cdbd652697a4eae9452267e2232a68593e41))

# [0.3.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@0.2.1...@kaizen/button@0.3.0) (2022-02-21)

### chore

- force major version bump for Button package 0.2.0 to 1.0.0 ([#2542](https://github.com/cultureamp/kaizen-design-system/issues/2542)) ([616c12c](https://github.com/cultureamp/kaizen-design-system/commit/616c12ce23dea6758c8fd04db43eb66d3aa6ff76))

### BREAKING CHANGES

- - docs: add minor docs update for button to force a major release

## [0.2.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@0.2.0...@kaizen/button@0.2.1) (2022-02-17)

**Note:** Version bump only for package @kaizen/button

# [0.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@0.1.0...@kaizen/button@0.2.0) (2022-02-15)

### Features

- Install eslint-plugin-jsx-a11y ([#2527](https://github.com/cultureamp/kaizen-design-system/issues/2527)) ([f106089](https://github.com/cultureamp/kaizen-design-system/commit/f1060891a8771d61ec6329f9e854e15683b30382))

# [0.1.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/button@0.0.1...@kaizen/button@0.1.0) (2022-02-10)

### Features

- Updated the allowable React version range to include React 17 ([#2521](https://github.com/cultureamp/kaizen-design-system/issues/2521)) ([0889ae8](https://github.com/cultureamp/kaizen-design-system/commit/0889ae82cc2836fe606957cd1f39a2eb94df00c1))

## 0.0.1 (2022-02-09)

**Note:** Version bump only for package @kaizen/button
