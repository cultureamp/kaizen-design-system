# Change Log

## 10.4.9

### Patch Changes

- [#3945](https://github.com/cultureamp/kaizen-design-system/pull/3945) [`60c405966`](https://github.com/cultureamp/kaizen-design-system/commit/60c405966d5e3fc8c8b57d51bf038490fd8594db) - Make id props optional, using uuid to generate one if not supplied

## 10.4.8

### Patch Changes

- [#3815](https://github.com/cultureamp/kaizen-design-system/pull/3815) [`52e3d1f44`](https://github.com/cultureamp/kaizen-design-system/commit/52e3d1f441765f409ddb5c98dce1e407b707be0a) - Update dependencies
  - update to prettier v3 cause minor linting changes
  - update to prettier v3 required minor type fixes for format function in design-tokens
- Updated dependencies [[`52e3d1f44`](https://github.com/cultureamp/kaizen-design-system/commit/52e3d1f441765f409ddb5c98dce1e407b707be0a)]:
  - @kaizen/component-library@16.9.3

## 10.4.7

### Patch Changes

- [#3865](https://github.com/cultureamp/kaizen-design-system/pull/3865) [`6621d8912`](https://github.com/cultureamp/kaizen-design-system/commit/6621d89125658392205963f89e230660bc6fddc2) - - Update Input components `type` condition to supersede the deprecated `inputType` prop
  - Add test coverage to ensure TextField components have the correct type
  - Update stories to use `type` instead of `inputType`

## 10.4.6

### Patch Changes

- [#3677](https://github.com/cultureamp/kaizen-design-system/pull/3677) [`06c48bb35`](https://github.com/cultureamp/kaizen-design-system/commit/06c48bb3593cd348c393369b6bc17d04a997c9e0) - Bump outdated `component-library` and `draft-form` dependencies to latest

## 10.4.5

### Patch Changes

- [#3647](https://github.com/cultureamp/kaizen-design-system/pull/3647) [`066d044d2`](https://github.com/cultureamp/kaizen-design-system/commit/066d044d2eee90bf63d2fd0b033b522eda30d027) - Add custom aria label 'clear search' to InputSearch for improved screen reader context

- Updated dependencies [[`936275bad`](https://github.com/cultureamp/kaizen-design-system/commit/936275badfa5ad21801238cd98a2e6e5880f9b6f), [`6a99a9455`](https://github.com/cultureamp/kaizen-design-system/commit/6a99a94558300388bd5680adebeed5e52dc30671), [`87e27ff8f`](https://github.com/cultureamp/kaizen-design-system/commit/87e27ff8f8ce74bdf68d16e168c5c6ebaff8c56d)]:
  - @kaizen/component-library@16.8.0

## 10.4.4

### Patch Changes

- [#3634](https://github.com/cultureamp/kaizen-design-system/pull/3634) [`b6480c659`](https://github.com/cultureamp/kaizen-design-system/commit/b6480c6591a6f1b73ce4388ee9c341b5c421666c) - A11y fix: Added role=presentation to icon within ToggleSwitch

## 10.4.3

### Patch Changes

- [#3621](https://github.com/cultureamp/kaizen-design-system/pull/3621) [`4967215eb`](https://github.com/cultureamp/kaizen-design-system/commit/4967215eb05298f69dbdf8e9cb44f4e0665e7d8f) - Fix files whitelist to include scss files

- Updated dependencies [[`4967215eb`](https://github.com/cultureamp/kaizen-design-system/commit/4967215eb05298f69dbdf8e9cb44f4e0665e7d8f)]:
  - @kaizen/component-library@16.7.6
  - @kaizen/loading-spinner@2.3.11
  - @kaizen/component-base@1.1.7
  - @kaizen/typography@2.3.11

## 10.4.2

### Patch Changes

- [#3595](https://github.com/cultureamp/kaizen-design-system/pull/3595) [`0e0750e87`](https://github.com/cultureamp/kaizen-design-system/commit/0e0750e872e3381420df7bf2947d9deb9db8b705) - Remove .turbo from distributed files

- [#3616](https://github.com/cultureamp/kaizen-design-system/pull/3616) [`e4f5f5ce5`](https://github.com/cultureamp/kaizen-design-system/commit/e4f5f5ce50b4e1a4aa8b189c247d0f2a8fea722f) - Fix packagejson files whitelist to only include publish files

- [#3611](https://github.com/cultureamp/kaizen-design-system/pull/3611) [`589244ad0`](https://github.com/cultureamp/kaizen-design-system/commit/589244ad0c307edca845d19843f2db282050fe29) - Fix supported design-tokens versions

- Updated dependencies [[`0e0750e87`](https://github.com/cultureamp/kaizen-design-system/commit/0e0750e872e3381420df7bf2947d9deb9db8b705), [`e4f5f5ce5`](https://github.com/cultureamp/kaizen-design-system/commit/e4f5f5ce50b4e1a4aa8b189c247d0f2a8fea722f), [`589244ad0`](https://github.com/cultureamp/kaizen-design-system/commit/589244ad0c307edca845d19843f2db282050fe29)]:
  - @kaizen/component-library@16.7.5
  - @kaizen/loading-spinner@2.3.10
  - @kaizen/component-base@1.1.6
  - @kaizen/typography@2.3.10

## 10.4.1

### Patch Changes

- [#3608](https://github.com/cultureamp/kaizen-design-system/pull/3608) [`cc96d9835`](https://github.com/cultureamp/kaizen-design-system/commit/cc96d98351ae380fe1a1e8a33d65d80232ed7a57) - Update usages of classnames to not use object syntax

- Updated dependencies [[`cc96d9835`](https://github.com/cultureamp/kaizen-design-system/commit/cc96d98351ae380fe1a1e8a33d65d80232ed7a57)]:
  - @kaizen/component-library@16.7.4
  - @kaizen/design-tokens@10.3.7
  - @kaizen/typography@2.3.9

## 10.4.0

### Minor Changes

- [#3579](https://github.com/cultureamp/kaizen-design-system/pull/3579) [`8de6f6701`](https://github.com/cultureamp/kaizen-design-system/commit/8de6f67017c62a905634d8388f4dd68d579325d3) - Accessibility fix: improved color contrast for ToggleSwitchField; it also now shows a check icon when active/on

## 10.3.13

### Patch Changes

- [#3581](https://github.com/cultureamp/kaizen-design-system/pull/3581) [`c2f5be19e`](https://github.com/cultureamp/kaizen-design-system/commit/c2f5be19e5868aafd6771bab3a15e016664aa949) - - Remove capitalize function from field message title string

- Updated dependencies [[`739d87b0c`](https://github.com/cultureamp/kaizen-design-system/commit/739d87b0cd917e7c0f3becf2cc0fd8f9667f7a6c), [`739d87b0c`](https://github.com/cultureamp/kaizen-design-system/commit/739d87b0cd917e7c0f3becf2cc0fd8f9667f7a6c)]:
  - @kaizen/component-library@16.7.3
  - @kaizen/design-tokens@10.3.6

## 10.3.12

### Patch Changes

- [#3558](https://github.com/cultureamp/kaizen-design-system/pull/3558) [`f09c085ee`](https://github.com/cultureamp/kaizen-design-system/commit/f09c085ee78c6dc79afc291faa6e284b333d1e93) - Use native focus-visible selector for focus styling instead of polyfill class

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [10.3.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@10.3.10...@kaizen/draft-form@10.3.11) (2023-04-06)

**Note:** Version bump only for package @kaizen/draft-form

## [10.3.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@10.3.9...@kaizen/draft-form@10.3.10) (2023-04-05)

**Note:** Version bump only for package @kaizen/draft-form

## [10.3.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@10.3.8...@kaizen/draft-form@10.3.9) (2023-03-29)

**Note:** Version bump only for package @kaizen/draft-form

## [10.3.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@10.3.7...@kaizen/draft-form@10.3.8) (2023-03-29)

**Note:** Version bump only for package @kaizen/draft-form

## [10.3.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@10.3.6...@kaizen/draft-form@10.3.7) (2023-03-23)

**Note:** Version bump only for package @kaizen/draft-form

## [10.3.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@10.3.5...@kaizen/draft-form@10.3.6) (2023-03-23)

### Bug Fixes

- **form:** Link RadioGroup/CheckboxGroup label to input group ([#3370](https://github.com/cultureamp/kaizen-design-system/issues/3370)) ([25de944](https://github.com/cultureamp/kaizen-design-system/commit/25de944b0811a7981c94509261e64397e710a163))

## [10.3.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@10.3.4...@kaizen/draft-form@10.3.5) (2023-03-22)

**Note:** Version bump only for package @kaizen/draft-form

## [10.3.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@10.3.3...@kaizen/draft-form@10.3.4) (2023-03-14)

**Note:** Version bump only for package @kaizen/draft-form

## [10.3.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@10.3.2...@kaizen/draft-form@10.3.3) (2023-03-02)

**Note:** Version bump only for package @kaizen/draft-form

## [10.3.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@10.3.1...@kaizen/draft-form@10.3.2) (2023-03-02)

**Note:** Version bump only for package @kaizen/draft-form

## [10.3.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@10.3.0...@kaizen/draft-form@10.3.1) (2023-03-02)

**Note:** Version bump only for package @kaizen/draft-form

# [10.3.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@10.2.0...@kaizen/draft-form@10.3.0) (2023-03-01)

### Features

- update FieldMessage React.Node wrapper ([#3333](https://github.com/cultureamp/kaizen-design-system/issues/3333)) ([bb8b20c](https://github.com/cultureamp/kaizen-design-system/commit/bb8b20c805d283fa2c110a07d4e653fa19c4cd39))

# [10.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@10.1.2...@kaizen/draft-form@10.2.0) (2023-02-28)

### Features

- add validation to DateRangePicker ([#3277](https://github.com/cultureamp/kaizen-design-system/issues/3277)) ([5cbdf6a](https://github.com/cultureamp/kaizen-design-system/commit/5cbdf6a2f3979b22d03f7b6722953ea6c26fb7cd))

## [10.1.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@10.1.1...@kaizen/draft-form@10.1.2) (2023-02-23)

**Note:** Version bump only for package @kaizen/draft-form

## [10.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@10.1.0...@kaizen/draft-form@10.1.1) (2023-02-23)

**Note:** Version bump only for package @kaizen/draft-form

# [10.1.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@10.0.1...@kaizen/draft-form@10.1.0) (2023-02-23)

### Features

- update field message caution icon ([#3313](https://github.com/cultureamp/kaizen-design-system/issues/3313)) ([869b2af](https://github.com/cultureamp/kaizen-design-system/commit/869b2afb0beeec5105fba04fdecf75df7914e210))

## [10.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@10.0.0...@kaizen/draft-form@10.0.1) (2023-02-22)

**Note:** Version bump only for package @kaizen/draft-form

# [10.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@9.0.1...@kaizen/draft-form@10.0.0) (2023-02-16)

### Bug Fixes

- **searchfield:** update styles to match UI kit ([#3266](https://github.com/cultureamp/kaizen-design-system/issues/3266)) ([68d54b3](https://github.com/cultureamp/kaizen-design-system/commit/68d54b3d0284c31c4c0c74871deb20b8a4939d45)), closes [cultureamp/kaizen-discourse#4](https://github.com/cultureamp/kaizen-discourse/issues/4)

### BREAKING CHANGES

- **searchfield:** classNameOverride has been moved to the outermost div

- feat(searchfield): remove bottom margin
- **searchfield:** remove bottom margin from SearchField

## [9.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@9.0.0...@kaizen/draft-form@9.0.1) (2023-02-09)

**Note:** Version bump only for package @kaizen/draft-form

# [9.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.3.23...@kaizen/draft-form@9.0.0) (2023-02-06)

### Features

- remove max-width in form groups ([#3255](https://github.com/cultureamp/kaizen-design-system/issues/3255)) ([7c2b4bd](https://github.com/cultureamp/kaizen-design-system/commit/7c2b4bd41b1be6b2df683193914837b2bed27aa6))

### BREAKING CHANGES

- Layouts that rely on a `max-width: 400px` checkbox or radio groups may be affected

## [8.3.23](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.3.22...@kaizen/draft-form@8.3.23) (2023-02-01)

**Note:** Version bump only for package @kaizen/draft-form

## [8.3.22](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.3.21...@kaizen/draft-form@8.3.22) (2023-01-30)

**Note:** Version bump only for package @kaizen/draft-form

## [8.3.21](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.3.20...@kaizen/draft-form@8.3.21) (2023-01-23)

### Bug Fixes

- update Slider story argTypes to allow text input ([#3222](https://github.com/cultureamp/kaizen-design-system/issues/3222)) ([00a1ade](https://github.com/cultureamp/kaizen-design-system/commit/00a1ade066ad7c540ca6c9eaba92a7c943856d19))

## [8.3.20](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.3.19...@kaizen/draft-form@8.3.20) (2023-01-18)

**Note:** Version bump only for package @kaizen/draft-form

## [8.3.19](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.3.18...@kaizen/draft-form@8.3.19) (2023-01-04)

**Note:** Version bump only for package @kaizen/draft-form

## [8.3.18](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.3.17...@kaizen/draft-form@8.3.18) (2023-01-04)

**Note:** Version bump only for package @kaizen/draft-form

## [8.3.17](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.3.16...@kaizen/draft-form@8.3.17) (2023-01-03)

**Note:** Version bump only for package @kaizen/draft-form

## [8.3.16](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.3.15...@kaizen/draft-form@8.3.16) (2022-12-01)

**Note:** Version bump only for package @kaizen/draft-form

## [8.3.15](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.3.14...@kaizen/draft-form@8.3.15) (2022-12-01)

### Bug Fixes

- **input:** add z-index to input pseudo styles ([#3133](https://github.com/cultureamp/kaizen-design-system/issues/3133)) ([77ab25b](https://github.com/cultureamp/kaizen-design-system/commit/77ab25b6252bf41d8325f4cfb0474c726c3ae136))

## [8.3.14](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.3.13...@kaizen/draft-form@8.3.14) (2022-11-25)

**Note:** Version bump only for package @kaizen/draft-form

## [8.3.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.3.12...@kaizen/draft-form@8.3.13) (2022-11-17)

**Note:** Version bump only for package @kaizen/draft-form

## [8.3.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.3.11...@kaizen/draft-form@8.3.12) (2022-11-13)

**Note:** Version bump only for package @kaizen/draft-form

## [8.3.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.3.10...@kaizen/draft-form@8.3.11) (2022-11-09)

**Note:** Version bump only for package @kaizen/draft-form

## [8.3.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.3.9...@kaizen/draft-form@8.3.10) (2022-11-01)

**Note:** Version bump only for package @kaizen/draft-form

## [8.3.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.3.8...@kaizen/draft-form@8.3.9) (2022-10-26)

**Note:** Version bump only for package @kaizen/draft-form

## [8.3.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.3.7...@kaizen/draft-form@8.3.8) (2022-10-24)

**Note:** Version bump only for package @kaizen/draft-form

## [8.3.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.3.6...@kaizen/draft-form@8.3.7) (2022-10-24)

### Bug Fixes

- **searchfield:** update onClear to return focus to input ([#3043](https://github.com/cultureamp/kaizen-design-system/issues/3043)) ([5efd41c](https://github.com/cultureamp/kaizen-design-system/commit/5efd41c6fca7040e9b2529378dcf1989c1286f67))

## [8.3.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.3.5...@kaizen/draft-form@8.3.6) (2022-10-19)

**Note:** Version bump only for package @kaizen/draft-form

## [8.3.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.3.4...@kaizen/draft-form@8.3.5) (2022-10-06)

### Bug Fixes

- **draft-form:** move InputSearch global cancel button styles under .input class ([#3007](https://github.com/cultureamp/kaizen-design-system/issues/3007)) ([961fb50](https://github.com/cultureamp/kaizen-design-system/commit/961fb50f66f585966d13aad115ee26da4af66b86))

## [8.3.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.3.3...@kaizen/draft-form@8.3.4) (2022-10-02)

### Bug Fixes

- **draft-form:** Label margin should be 6px and not 10px ([#2980](https://github.com/cultureamp/kaizen-design-system/issues/2980)) ([8500add](https://github.com/cultureamp/kaizen-design-system/commit/8500add45d8399cd97894177e62c2f29b1ef4560))

## [8.3.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.3.2...@kaizen/draft-form@8.3.3) (2022-09-30)

**Note:** Version bump only for package @kaizen/draft-form

## [8.3.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.3.1...@kaizen/draft-form@8.3.2) (2022-09-26)

### Bug Fixes

- correct ID on validation message used for describedBy on text field ([#2983](https://github.com/cultureamp/kaizen-design-system/issues/2983)) ([ad4ae22](https://github.com/cultureamp/kaizen-design-system/commit/ad4ae22ce0b7a5a83e34b1c78cd28d061dee2f4a))

## [8.3.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.3.0...@kaizen/draft-form@8.3.1) (2022-09-14)

**Note:** Version bump only for package @kaizen/draft-form

# [8.3.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.2.0...@kaizen/draft-form@8.3.0) (2022-09-14)

### Features

- remove deprecated styles from form primitives ([#2963](https://github.com/cultureamp/kaizen-design-system/issues/2963)) ([da9eed2](https://github.com/cultureamp/kaizen-design-system/commit/da9eed228fafc33293aeecf095d106456e1cae46))

# [8.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.1.0...@kaizen/draft-form@8.2.0) (2022-09-13)

### Features

- remove deprecated styles and add stories ([#2957](https://github.com/cultureamp/kaizen-design-system/issues/2957)) ([edba01b](https://github.com/cultureamp/kaizen-design-system/commit/edba01b79c2aba08711eab9a043e84162c801d28))

# [8.1.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@8.0.0...@kaizen/draft-form@8.1.0) (2022-09-12)

### Features

- remove deprecated styles ([#2958](https://github.com/cultureamp/kaizen-design-system/issues/2958)) ([5914f55](https://github.com/cultureamp/kaizen-design-system/commit/5914f5548337021ad45eacb19025fdaa43eb5b41))

# [8.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.5.3...@kaizen/draft-form@8.0.0) (2022-09-12)

### Bug Fixes

- **radio-field:** remove children prop from RadioField ([#2956](https://github.com/cultureamp/kaizen-design-system/issues/2956)) ([5589652](https://github.com/cultureamp/kaizen-design-system/commit/5589652b05f489a5b90580fdb6638db0dadceedf))

### BREAKING CHANGES

- **radio-field:** children can no longer be passed to RadioField

## [7.5.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.5.2...@kaizen/draft-form@7.5.3) (2022-09-05)

**Note:** Version bump only for package @kaizen/draft-form

## [7.5.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.5.1...@kaizen/draft-form@7.5.2) (2022-09-02)

**Note:** Version bump only for package @kaizen/draft-form

## [7.5.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.5.0...@kaizen/draft-form@7.5.1) (2022-08-19)

**Note:** Version bump only for package @kaizen/draft-form

# [7.5.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.4.0...@kaizen/draft-form@7.5.0) (2022-08-18)

### Features

- remove deprecated styles to radio field components ([#2925](https://github.com/cultureamp/kaizen-design-system/issues/2925)) ([abd6166](https://github.com/cultureamp/kaizen-design-system/commit/abd61668c5a7bf770ac9a277ae8f85dbfd30d676))

# [7.4.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.3.0...@kaizen/draft-form@7.4.0) (2022-08-18)

### Features

- update react to 16.14.0 ([#2922](https://github.com/cultureamp/kaizen-design-system/issues/2922)) ([22878be](https://github.com/cultureamp/kaizen-design-system/commit/22878beee1884e2f58d0447b3908321937175228))

# [7.3.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.2.22...@kaizen/draft-form@7.3.0) (2022-08-18)

### Features

- remove deprecated styles from checkbox ([#2924](https://github.com/cultureamp/kaizen-design-system/issues/2924)) ([9747a6f](https://github.com/cultureamp/kaizen-design-system/commit/9747a6fc73083ce85a1ee75a396e113b293ea2c2))

## [7.2.22](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.2.21...@kaizen/draft-form@7.2.22) (2022-08-11)

### Bug Fixes

- use max-width on label ([#2908](https://github.com/cultureamp/kaizen-design-system/issues/2908)) ([c59c49b](https://github.com/cultureamp/kaizen-design-system/commit/c59c49b02f29afbb39971032a3865fb12623d1d7))

## [7.2.21](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.2.20...@kaizen/draft-form@7.2.21) (2022-08-01)

**Note:** Version bump only for package @kaizen/draft-form

## [7.2.20](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.2.19...@kaizen/draft-form@7.2.20) (2022-07-27)

**Note:** Version bump only for package @kaizen/draft-form

## [7.2.19](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.2.18...@kaizen/draft-form@7.2.19) (2022-07-27)

**Note:** Version bump only for package @kaizen/draft-form

## [7.2.18](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.2.17...@kaizen/draft-form@7.2.18) (2022-07-27)

**Note:** Version bump only for package @kaizen/draft-form

## [7.2.17](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.2.16...@kaizen/draft-form@7.2.17) (2022-07-26)

**Note:** Version bump only for package @kaizen/draft-form

## [7.2.16](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.2.15...@kaizen/draft-form@7.2.16) (2022-07-22)

**Note:** Version bump only for package @kaizen/draft-form

## [7.2.15](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.2.14...@kaizen/draft-form@7.2.15) (2022-07-21)

**Note:** Version bump only for package @kaizen/draft-form

## [7.2.14](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.2.13...@kaizen/draft-form@7.2.14) (2022-06-22)

**Note:** Version bump only for package @kaizen/draft-form

## [7.2.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.2.12...@kaizen/draft-form@7.2.13) (2022-06-21)

**Note:** Version bump only for package @kaizen/draft-form

## [7.2.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.2.11...@kaizen/draft-form@7.2.12) (2022-06-21)

**Note:** Version bump only for package @kaizen/draft-form

## [7.2.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.2.10...@kaizen/draft-form@7.2.11) (2022-06-21)

**Note:** Version bump only for package @kaizen/draft-form

## [7.2.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.2.9...@kaizen/draft-form@7.2.10) (2022-06-21)

**Note:** Version bump only for package @kaizen/draft-form

## [7.2.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.2.8...@kaizen/draft-form@7.2.9) (2022-06-20)

**Note:** Version bump only for package @kaizen/draft-form

## [7.2.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.2.7...@kaizen/draft-form@7.2.8) (2022-06-16)

**Note:** Version bump only for package @kaizen/draft-form

## [7.2.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.2.6...@kaizen/draft-form@7.2.7) (2022-06-09)

**Note:** Version bump only for package @kaizen/draft-form

## [7.2.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.2.5...@kaizen/draft-form@7.2.6) (2022-06-06)

**Note:** Version bump only for package @kaizen/draft-form

## [7.2.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.2.4...@kaizen/draft-form@7.2.5) (2022-05-30)

**Note:** Version bump only for package @kaizen/draft-form

## [7.2.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.2.3...@kaizen/draft-form@7.2.4) (2022-05-30)

**Note:** Version bump only for package @kaizen/draft-form

## [7.2.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.2.2...@kaizen/draft-form@7.2.3) (2022-05-30)

**Note:** Version bump only for package @kaizen/draft-form

## [7.2.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.2.1...@kaizen/draft-form@7.2.2) (2022-05-30)

### Bug Fixes

- wrap scss calc variables with interpolated values ([#2759](https://github.com/cultureamp/kaizen-design-system/issues/2759)) ([a70fa29](https://github.com/cultureamp/kaizen-design-system/commit/a70fa293f39f126ee86a296d9b4ec6af66135966))

## [7.2.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.2.0...@kaizen/draft-form@7.2.1) (2022-05-24)

**Note:** Version bump only for package @kaizen/draft-form

# [7.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.1.8...@kaizen/draft-form@7.2.0) (2022-05-20)

### Features

- add compatibility for react-18 ([#2731](https://github.com/cultureamp/kaizen-design-system/issues/2731)) ([0051f4c](https://github.com/cultureamp/kaizen-design-system/commit/0051f4cee82895acc2c2f44fc7bf8063857de57e))

## [7.1.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.1.7...@kaizen/draft-form@7.1.8) (2022-05-19)

**Note:** Version bump only for package @kaizen/draft-form

## [7.1.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.1.6...@kaizen/draft-form@7.1.7) (2022-05-19)

**Note:** Version bump only for package @kaizen/draft-form

## [7.1.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.1.5...@kaizen/draft-form@7.1.6) (2022-05-16)

### Bug Fixes

- Kds 267 checkbox adds a div into span when clicked ([#2732](https://github.com/cultureamp/kaizen-design-system/issues/2732)) ([ab7ed2f](https://github.com/cultureamp/kaizen-design-system/commit/ab7ed2f26edf168d35938691ae2a2034adc1fbe1))

## [7.1.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.1.4...@kaizen/draft-form@7.1.5) (2022-05-11)

**Note:** Version bump only for package @kaizen/draft-form

## [7.1.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.1.3...@kaizen/draft-form@7.1.4) (2022-05-03)

**Note:** Version bump only for package @kaizen/draft-form

## [7.1.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.1.2...@kaizen/draft-form@7.1.3) (2022-04-29)

**Note:** Version bump only for package @kaizen/draft-form

## [7.1.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.1.1...@kaizen/draft-form@7.1.2) (2022-04-27)

**Note:** Version bump only for package @kaizen/draft-form

## [7.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.1.0...@kaizen/draft-form@7.1.1) (2022-04-14)

**Note:** Version bump only for package @kaizen/draft-form

# [7.1.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@7.0.0...@kaizen/draft-form@7.1.0) (2022-04-14)

### Features

- update components to extend HTML attributes with classNameOverride (part 5) ([#2632](https://github.com/cultureamp/kaizen-design-system/issues/2632)) ([a87ac09](https://github.com/cultureamp/kaizen-design-system/commit/a87ac09a1e9d398adeb84526df00c1d6a4ef0151))

# [7.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@6.0.10...@kaizen/draft-form@7.0.0) (2022-04-13)

### Features

- remove elm related files, styles and config from Kaizen ([#2686](https://github.com/cultureamp/kaizen-design-system/issues/2686)) ([2fdf913](https://github.com/cultureamp/kaizen-design-system/commit/2fdf913dd4221d10e91cea2bb88208faf958efcc))

### BREAKING CHANGES

-     * remove .elm files
  - remove Elm specific .scss files
  - remove Elm specific package folders
  - remove Elm config and devDependencies on Elm
  - remove Elm specific classes and declarations from modal stylesheets
  - update documentation on Elm

## [6.0.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@6.0.9...@kaizen/draft-form@6.0.10) (2022-04-11)

**Note:** Version bump only for package @kaizen/draft-form

## [6.0.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@6.0.8...@kaizen/draft-form@6.0.9) (2022-04-03)

**Note:** Version bump only for package @kaizen/draft-form

## [6.0.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@6.0.7...@kaizen/draft-form@6.0.8) (2022-03-31)

**Note:** Version bump only for package @kaizen/draft-form

## [6.0.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@6.0.6...@kaizen/draft-form@6.0.7) (2022-03-30)

**Note:** Version bump only for package @kaizen/draft-form

## [6.0.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@6.0.5...@kaizen/draft-form@6.0.6) (2022-03-29)

**Note:** Version bump only for package @kaizen/draft-form

## [6.0.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@6.0.4...@kaizen/draft-form@6.0.5) (2022-03-22)

**Note:** Version bump only for package @kaizen/draft-form

## [6.0.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@6.0.3...@kaizen/draft-form@6.0.4) (2022-03-21)

**Note:** Version bump only for package @kaizen/draft-form

## [6.0.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@6.0.2...@kaizen/draft-form@6.0.3) (2022-03-18)

**Note:** Version bump only for package @kaizen/draft-form

## [6.0.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@6.0.1...@kaizen/draft-form@6.0.2) (2022-03-17)

**Note:** Version bump only for package @kaizen/draft-form

## [6.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@6.0.0...@kaizen/draft-form@6.0.1) (2022-03-17)

**Note:** Version bump only for package @kaizen/draft-form

# [6.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.6.13...@kaizen/draft-form@6.0.0) (2022-03-16)

### Features

- rename `classNameAndIHaveSpokenToDST` to `classNameOverride` ([#2623](https://github.com/cultureamp/kaizen-design-system/issues/2623)) ([0ad2710](https://github.com/cultureamp/kaizen-design-system/commit/0ad2710f5e4b9a9d6b5a40ae72741a88669792c1))

### BREAKING CHANGES

- `classNameAndIHaveSpokenToDST` renamed to `classNameOverride`

## [5.6.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.6.12...@kaizen/draft-form@5.6.13) (2022-03-16)

**Note:** Version bump only for package @kaizen/draft-form

## [5.6.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.6.11...@kaizen/draft-form@5.6.12) (2022-03-16)

**Note:** Version bump only for package @kaizen/draft-form

## [5.6.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.6.10...@kaizen/draft-form@5.6.11) (2022-03-11)

**Note:** Version bump only for package @kaizen/draft-form

## [5.6.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.6.9...@kaizen/draft-form@5.6.10) (2022-03-09)

**Note:** Version bump only for package @kaizen/draft-form

## [5.6.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.6.8...@kaizen/draft-form@5.6.9) (2022-03-07)

**Note:** Version bump only for package @kaizen/draft-form

## [5.6.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.6.7...@kaizen/draft-form@5.6.8) (2022-03-07)

**Note:** Version bump only for package @kaizen/draft-form

## [5.6.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.6.6...@kaizen/draft-form@5.6.7) (2022-03-07)

**Note:** Version bump only for package @kaizen/draft-form

## [5.6.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.6.5...@kaizen/draft-form@5.6.6) (2022-03-01)

**Note:** Version bump only for package @kaizen/draft-form

## [5.6.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.6.4...@kaizen/draft-form@5.6.5) (2022-03-01)

**Note:** Version bump only for package @kaizen/draft-form

## [5.6.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.6.3...@kaizen/draft-form@5.6.4) (2022-03-01)

**Note:** Version bump only for package @kaizen/draft-form

## [5.6.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.6.2...@kaizen/draft-form@5.6.3) (2022-02-28)

**Note:** Version bump only for package @kaizen/draft-form

## [5.6.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.6.1...@kaizen/draft-form@5.6.2) (2022-02-28)

**Note:** Version bump only for package @kaizen/draft-form

## [5.6.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.6.0...@kaizen/draft-form@5.6.1) (2022-02-28)

**Note:** Version bump only for package @kaizen/draft-form

# [5.6.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.5.1...@kaizen/draft-form@5.6.0) (2022-02-23)

### Features

- add StoryWrapper for storybook ([#2379](https://github.com/cultureamp/kaizen-design-system/issues/2379)) ([d44fe87](https://github.com/cultureamp/kaizen-design-system/commit/d44fe87093a39ec25efd013a5d246f821122cc14))

## [5.5.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.5.0...@kaizen/draft-form@5.5.1) (2022-02-17)

**Note:** Version bump only for package @kaizen/draft-form

# [5.5.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.4.0...@kaizen/draft-form@5.5.0) (2022-02-15)

### Features

- Install eslint-plugin-jsx-a11y ([#2527](https://github.com/cultureamp/kaizen-design-system/issues/2527)) ([f106089](https://github.com/cultureamp/kaizen-design-system/commit/f1060891a8771d61ec6329f9e854e15683b30382))

# [5.4.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.3.1...@kaizen/draft-form@5.4.0) (2022-02-10)

### Features

- Updated the allowable React version range to include React 17 ([#2521](https://github.com/cultureamp/kaizen-design-system/issues/2521)) ([0889ae8](https://github.com/cultureamp/kaizen-design-system/commit/0889ae82cc2836fe606957cd1f39a2eb94df00c1))

## [5.3.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.3.0...@kaizen/draft-form@5.3.1) (2022-02-08)

**Note:** Version bump only for package @kaizen/draft-form

# [5.3.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.2.4...@kaizen/draft-form@5.3.0) (2022-02-04)

### Features

- text area uplift - add stories and missing variant, disabled support ([aeccfec](https://github.com/cultureamp/kaizen-design-system/commit/aeccfecd9498e589b57b8213927733099a866b6a))

## [5.2.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.2.3...@kaizen/draft-form@5.2.4) (2022-02-02)

**Note:** Version bump only for package @kaizen/draft-form

## [5.2.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.2.2...@kaizen/draft-form@5.2.3) (2022-02-02)

**Note:** Version bump only for package @kaizen/draft-form

## [5.2.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.2.1...@kaizen/draft-form@5.2.2) (2022-01-30)

**Note:** Version bump only for package @kaizen/draft-form

## [5.2.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.2.0...@kaizen/draft-form@5.2.1) (2022-01-27)

**Note:** Version bump only for package @kaizen/draft-form

# [5.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.1.1...@kaizen/draft-form@5.2.0) (2022-01-26)

### Features

- realign toggle switch with design with reverse option ([#2407](https://github.com/cultureamp/kaizen-design-system/issues/2407)) ([d2663ba](https://github.com/cultureamp/kaizen-design-system/commit/d2663ba796d97ff4697aee1866add95722f92e03))

## [5.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.1.0...@kaizen/draft-form@5.1.1) (2022-01-26)

### Bug Fixes

- extended props availability ([#2436](https://github.com/cultureamp/kaizen-design-system/issues/2436)) ([6869687](https://github.com/cultureamp/kaizen-design-system/commit/6869687531c5984e7f8fb90822b04c5938daec31))

# [5.1.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@5.0.0...@kaizen/draft-form@5.1.0) (2022-01-25)

### Features

- improve RadioGroup accessibility ([b86ed79](https://github.com/cultureamp/kaizen-design-system/commit/b86ed794910cf93c10a2516c7b001d1324e54a6c))

# [5.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@4.2.0...@kaizen/draft-form@5.0.0) (2022-01-25)

### Features

- Remove freemium code from ToggleSwitch & ToggleSwitchField ([#2417](https://github.com/cultureamp/kaizen-design-system/issues/2417)) ([e6d2b96](https://github.com/cultureamp/kaizen-design-system/commit/e6d2b969c4407eb2eeb40e6ce8055239d0708df6))

### BREAKING CHANGES

- Remove theme prop from ToggleSwitchField and ToggleSwitch for both React & Elm components. Remove ToggleTheme references and any storybook stories.

Co-authored-by: Harry Ta <harry.ta@cultureamp.com>

# [4.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@4.1.0...@kaizen/draft-form@4.2.0) (2022-01-24)

### Features

- Bump design-tokens in peer dependencies to include v6 ([#2412](https://github.com/cultureamp/kaizen-design-system/issues/2412)) ([fbbfa80](https://github.com/cultureamp/kaizen-design-system/commit/fbbfa80d334db9311b228568b5632cb2f8022136))

# [4.1.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@4.0.3...@kaizen/draft-form@4.1.0) (2022-01-21)

### Features

- Uplift TextField component and add variants to Kaizen ([#2391](https://github.com/cultureamp/kaizen-design-system/issues/2391)) ([950c543](https://github.com/cultureamp/kaizen-design-system/commit/950c543e2ce039f01c684cceb4bdd93d0947dbb7))

## [4.0.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@4.0.2...@kaizen/draft-form@4.0.3) (2022-01-10)

**Note:** Version bump only for package @kaizen/draft-form

## [4.0.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@4.0.1...@kaizen/draft-form@4.0.2) (2022-01-06)

**Note:** Version bump only for package @kaizen/draft-form

## [4.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@4.0.0...@kaizen/draft-form@4.0.1) (2022-01-04)

**Note:** Version bump only for package @kaizen/draft-form

# [4.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.14.3...@kaizen/draft-form@4.0.0) (2021-12-13)

### Bug Fixes

- 🐛 Update ID prop on SearchField to be required and update name. ([#2359](https://github.com/cultureamp/kaizen-design-system/issues/2359)) ([3654cac](https://github.com/cultureamp/kaizen-design-system/commit/3654cacfd1fc31a6be26dd42e6453409c61bd3ec)), closes [#2329](https://github.com/cultureamp/kaizen-design-system/issues/2329)

### BREAKING CHANGES

- 🧨 Fixed SearchField to have a required ID prop to avoid any undefined errors. Also updates the ID itself to remove '-search-field-input' suffix.

## [3.14.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.14.2...@kaizen/draft-form@3.14.3) (2021-12-13)

**Note:** Version bump only for package @kaizen/draft-form

## [3.14.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.14.1...@kaizen/draft-form@3.14.2) (2021-12-08)

**Note:** Version bump only for package @kaizen/draft-form

## [3.14.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.14.0...@kaizen/draft-form@3.14.1) (2021-11-30)

### Bug Fixes

- Upgrade to typescript 4 ([#2328](https://github.com/cultureamp/kaizen-design-system/issues/2328)) ([accf5df](https://github.com/cultureamp/kaizen-design-system/commit/accf5dfccaf086d5bd3de060bb2d1612d3a34fb0))

# [3.14.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.13.13...@kaizen/draft-form@3.14.0) (2021-11-25)

### Features

- Update checkbox group design and stories ([#2306](https://github.com/cultureamp/kaizen-design-system/issues/2306)) ([e51119f](https://github.com/cultureamp/kaizen-design-system/commit/e51119fc06d6abfcb9867b84c6a298aafa120da0))

## [3.13.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.13.12...@kaizen/draft-form@3.13.13) (2021-11-23)

**Note:** Version bump only for package @kaizen/draft-form

## [3.13.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.13.11...@kaizen/draft-form@3.13.12) (2021-11-15)

**Note:** Version bump only for package @kaizen/draft-form

## [3.13.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.13.10...@kaizen/draft-form@3.13.11) (2021-11-09)

**Note:** Version bump only for package @kaizen/draft-form

## [3.13.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.13.9...@kaizen/draft-form@3.13.10) (2021-11-09)

### Bug Fixes

- Add type=search specificity to override perf-ui materialize ([#2271](https://github.com/cultureamp/kaizen-design-system/issues/2271)) ([279c02d](https://github.com/cultureamp/kaizen-design-system/commit/279c02d202316f2fee5b42ebe4eff069c2822934))

## [3.13.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.13.8...@kaizen/draft-form@3.13.9) (2021-11-05)

**Note:** Version bump only for package @kaizen/draft-form

## [3.13.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.13.7...@kaizen/draft-form@3.13.8) (2021-11-03)

### Bug Fixes

- Add type=button to SearchField clear button ([#2199](https://github.com/cultureamp/kaizen-design-system/issues/2199)) ([526003f](https://github.com/cultureamp/kaizen-design-system/commit/526003f6286bac058649e9a9e0bfd72ef887c13f))

## [3.13.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.13.6...@kaizen/draft-form@3.13.7) (2021-11-02)

**Note:** Version bump only for package @kaizen/draft-form

## [3.13.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.13.5...@kaizen/draft-form@3.13.6) (2021-10-31)

**Note:** Version bump only for package @kaizen/draft-form

## [3.13.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.13.4...@kaizen/draft-form@3.13.5) (2021-10-26)

**Note:** Version bump only for package @kaizen/draft-form

## [3.13.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.13.3...@kaizen/draft-form@3.13.4) (2021-10-26)

**Note:** Version bump only for package @kaizen/draft-form

## [3.13.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.13.2...@kaizen/draft-form@3.13.3) (2021-10-25)

**Note:** Version bump only for package @kaizen/draft-form

## [3.13.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.13.1...@kaizen/draft-form@3.13.2) (2021-10-22)

**Note:** Version bump only for package @kaizen/draft-form

## [3.13.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.13.0...@kaizen/draft-form@3.13.1) (2021-10-22)

### Bug Fixes

- elm field description styles ([#2115](https://github.com/cultureamp/kaizen-design-system/issues/2115)) ([da43631](https://github.com/cultureamp/kaizen-design-system/commit/da436315ea21c17f4feaac870d525d416da9f64a))

# [3.13.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.12.1...@kaizen/draft-form@3.13.0) (2021-10-22)

### Features

- Add reversed variants of RadioFields and RadioGroups ([#2101](https://github.com/cultureamp/kaizen-design-system/issues/2101)) ([14ca855](https://github.com/cultureamp/kaizen-design-system/commit/14ca855fd797ff186b83c5dce8328d5136763bb9))

## [3.12.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.12.0...@kaizen/draft-form@3.12.1) (2021-10-21)

**Note:** Version bump only for package @kaizen/draft-form

# [3.12.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.11.8...@kaizen/draft-form@3.12.0) (2021-10-20)

### Features

- Add reversed variants of checkbox fields ([#2087](https://github.com/cultureamp/kaizen-design-system/issues/2087)) ([e262dd5](https://github.com/cultureamp/kaizen-design-system/commit/e262dd5fb339b4487840c28167d27d521bce468a))

## [3.11.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.11.7...@kaizen/draft-form@3.11.8) (2021-10-18)

### Bug Fixes

- Put id on InputRange input ([#2092](https://github.com/cultureamp/kaizen-design-system/issues/2092)) ([d629f7a](https://github.com/cultureamp/kaizen-design-system/commit/d629f7a44fe6daebfab91b72cb93b9aa3147104b))

## [3.11.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.11.6...@kaizen/draft-form@3.11.7) (2021-10-18)

**Note:** Version bump only for package @kaizen/draft-form

## [3.11.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.11.5...@kaizen/draft-form@3.11.6) (2021-10-15)

**Note:** Version bump only for package @kaizen/draft-form

## [3.11.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.11.4...@kaizen/draft-form@3.11.5) (2021-10-15)

### Bug Fixes

- Show SearchField label on default, not on secondary ([#2085](https://github.com/cultureamp/kaizen-design-system/issues/2085)) ([0b7fb0a](https://github.com/cultureamp/kaizen-design-system/commit/0b7fb0aa9acd3f5ff0885908e66cc22141fd97aa))

## [3.11.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.11.3...@kaizen/draft-form@3.11.4) (2021-10-15)

### Bug Fixes

- Avoid divs inside labels for valid HTML ([#2084](https://github.com/cultureamp/kaizen-design-system/issues/2084)) ([6c235a2](https://github.com/cultureamp/kaizen-design-system/commit/6c235a204bae362d68681e8b537a153afe8fc36c))

## [3.11.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.11.2...@kaizen/draft-form@3.11.3) (2021-10-14)

### Bug Fixes

- Use Label disabled styling for Checkbox, Radio & ToggleSwitch ([#2082](https://github.com/cultureamp/kaizen-design-system/issues/2082)) ([0ff0311](https://github.com/cultureamp/kaizen-design-system/commit/0ff0311caa73dcfe6578786cbead712ab9d9a493))

## [3.11.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.11.1...@kaizen/draft-form@3.11.2) (2021-10-14)

### Bug Fixes

- add override css in form/slider for performance ui ([#2077](https://github.com/cultureamp/kaizen-design-system/issues/2077)) ([217a3a2](https://github.com/cultureamp/kaizen-design-system/commit/217a3a2dfecb3481a1476a476c11b65f91c57eb8))

## [3.11.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.11.0...@kaizen/draft-form@3.11.1) (2021-10-14)

**Note:** Version bump only for package @kaizen/draft-form

# [3.11.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.10.0...@kaizen/draft-form@3.11.0) (2021-10-07)

### Features

- Create new version of Slider in Form package ([#1956](https://github.com/cultureamp/kaizen-design-system/issues/1956)) ([0aad050](https://github.com/cultureamp/kaizen-design-system/commit/0aad0503c3d870dd3f8b69bd16e7543826646477))

# [3.10.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.9.4...@kaizen/draft-form@3.10.0) (2021-10-01)

### Features

- add SearchField and InputSearch to Kaizen ([#1975](https://github.com/cultureamp/kaizen-design-system/issues/1975)) ([127aa1c](https://github.com/cultureamp/kaizen-design-system/commit/127aa1c26c7972c1ac2a089793ad67e53c8d42ac))

## [3.9.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.9.3...@kaizen/draft-form@3.9.4) (2021-09-29)

### Bug Fixes

- Wrong background-color for the checkbox after transition from mixed to off state ([#1818](https://github.com/cultureamp/kaizen-design-system/issues/1818)) ([babcad6](https://github.com/cultureamp/kaizen-design-system/commit/babcad63765474cc21210065099ba3c9b257a233))

## [3.9.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.9.2...@kaizen/draft-form@3.9.3) (2021-09-28)

**Note:** Version bump only for package @kaizen/draft-form

## [3.9.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.9.1...@kaizen/draft-form@3.9.2) (2021-09-28)

**Note:** Version bump only for package @kaizen/draft-form

## [3.9.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.9.0...@kaizen/draft-form@3.9.1) (2021-09-23)

**Note:** Version bump only for package @kaizen/draft-form

# [3.9.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.8.7...@kaizen/draft-form@3.9.0) (2021-09-22)

### Bug Fixes

- Add default value to variant to ensure description displays ([#1963](https://github.com/cultureamp/kaizen-design-system/issues/1963)) ([012ccd4](https://github.com/cultureamp/kaizen-design-system/commit/012ccd425c2d8d8ba82b8b70e96e292aa4fedbc1))

### Features

- Remove all usages of var() in scss to provide Zen fallbacks ([#1960](https://github.com/cultureamp/kaizen-design-system/issues/1960)) ([49fcf67](https://github.com/cultureamp/kaizen-design-system/commit/49fcf67d58ea700c8b9b483a2b02b0a0777a3a1a))

## [3.8.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.8.6...@kaizen/draft-form@3.8.7) (2021-09-13)

### Bug Fixes

- update text field error styles ([#1828](https://github.com/cultureamp/kaizen-design-system/issues/1828)) ([da72a4c](https://github.com/cultureamp/kaizen-design-system/commit/da72a4c24209006da5141eee6349a2fb45e61dc1))

## [3.8.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.8.5...@kaizen/draft-form@3.8.6) (2021-08-30)

**Note:** Version bump only for package @kaizen/draft-form

## [3.8.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.8.4...@kaizen/draft-form@3.8.5) (2021-08-24)

**Note:** Version bump only for package @kaizen/draft-form

## [3.8.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.8.3...@kaizen/draft-form@3.8.4) (2021-08-20)

**Note:** Version bump only for package @kaizen/draft-form

## [3.8.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.8.2...@kaizen/draft-form@3.8.3) (2021-08-17)

**Note:** Version bump only for package @kaizen/draft-form

## [3.8.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.8.1...@kaizen/draft-form@3.8.2) (2021-08-17)

**Note:** Version bump only for package @kaizen/draft-form

## [3.8.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.8.0...@kaizen/draft-form@3.8.1) (2021-08-17)

**Note:** Version bump only for package @kaizen/draft-form

# [3.8.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.7.0...@kaizen/draft-form@3.8.0) (2021-08-13)

### Features

- Bump design-tokens in peer dependencies to v3 ([#1840](https://github.com/cultureamp/kaizen-design-system/issues/1840)) ([ca45bf4](https://github.com/cultureamp/kaizen-design-system/commit/ca45bf4707b5fbf907163653549e17682c46f636))

# [3.7.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.6.12...@kaizen/draft-form@3.7.0) (2021-08-11)

### Features

- Migrate scss to use new design-tokens ([#1813](https://github.com/cultureamp/kaizen-design-system/issues/1813)) ([ec777a3](https://github.com/cultureamp/kaizen-design-system/commit/ec777a306cec1988894a9518b43f5247d500aa7d))

## [3.6.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.6.11...@kaizen/draft-form@3.6.12) (2021-08-09)

### Bug Fixes

- Bump peer versions of design-tokens everywhere ([#1823](https://github.com/cultureamp/kaizen-design-system/issues/1823)) ([65da761](https://github.com/cultureamp/kaizen-design-system/commit/65da761807b4d907a342b9bb4ed2bbbe40a06048))

## [3.6.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.6.10...@kaizen/draft-form@3.6.11) (2021-08-09)

**Note:** Version bump only for package @kaizen/draft-form

## [3.6.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.6.9...@kaizen/draft-form@3.6.10) (2021-08-02)

**Note:** Version bump only for package @kaizen/draft-form

## [3.6.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.6.8...@kaizen/draft-form@3.6.9) (2021-08-02)

**Note:** Version bump only for package @kaizen/draft-form

## [3.6.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.6.7...@kaizen/draft-form@3.6.8) (2021-07-30)

### Bug Fixes

- Update Storybook background colour references ([#1803](https://github.com/cultureamp/kaizen-design-system/issues/1803)) ([118f242](https://github.com/cultureamp/kaizen-design-system/commit/118f24201133aa5fd42839b67ad7cd74273d02e9))

## [3.6.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.6.6...@kaizen/draft-form@3.6.7) (2021-07-28)

**Note:** Version bump only for package @kaizen/draft-form

## [3.6.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.6.5...@kaizen/draft-form@3.6.6) (2021-07-20)

**Note:** Version bump only for package @kaizen/draft-form

## [3.6.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.6.4...@kaizen/draft-form@3.6.5) (2021-07-19)

### Bug Fixes

- Change checkbox inactive hover colour to stone ([#1775](https://github.com/cultureamp/kaizen-design-system/issues/1775)) ([21e59d7](https://github.com/cultureamp/kaizen-design-system/commit/21e59d7b999765db5fb88b5689bfb6597645fe67)), closes [#1696](https://github.com/cultureamp/kaizen-design-system/issues/1696)

## [3.6.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.6.3...@kaizen/draft-form@3.6.4) (2021-07-16)

**Note:** Version bump only for package @kaizen/draft-form

## [3.6.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.6.2...@kaizen/draft-form@3.6.3) (2021-07-14)

**Note:** Version bump only for package @kaizen/draft-form

## [3.6.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.6.1...@kaizen/draft-form@3.6.2) (2021-07-02)

**Note:** Version bump only for package @kaizen/draft-form

## [3.6.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.6.0...@kaizen/draft-form@3.6.1) (2021-07-01)

**Note:** Version bump only for package @kaizen/draft-form

# [3.6.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.5.1...@kaizen/draft-form@3.6.0) (2021-06-24)

### Features

- controlHasUnconstrainedHeight option for Elm Select ([#1715](https://github.com/cultureamp/kaizen-design-system/issues/1715)) ([374edce](https://github.com/cultureamp/kaizen-design-system/commit/374edce3c130153ec90b86a55b8eb6f581382e8c))

## [3.5.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.5.0...@kaizen/draft-form@3.5.1) (2021-06-11)

**Note:** Version bump only for package @kaizen/draft-form

# [3.5.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.4.11...@kaizen/draft-form@3.5.0) (2021-06-07)

### Features

- elm tag allow text wrapping option + dismiss button size fix ([#1671](https://github.com/cultureamp/kaizen-design-system/issues/1671)) ([9d42e38](https://github.com/cultureamp/kaizen-design-system/commit/9d42e3887bff7f4417fc56d1d9bba845877b89ec))

## [3.4.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.4.10...@kaizen/draft-form@3.4.11) (2021-06-02)

**Note:** Version bump only for package @kaizen/draft-form

## [3.4.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.4.9...@kaizen/draft-form@3.4.10) (2021-05-25)

**Note:** Version bump only for package @kaizen/draft-form

## [3.4.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.4.8...@kaizen/draft-form@3.4.9) (2021-05-18)

**Note:** Version bump only for package @kaizen/draft-form

## [3.4.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.4.7...@kaizen/draft-form@3.4.8) (2021-05-17)

**Note:** Version bump only for package @kaizen/draft-form

## [3.4.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.4.6...@kaizen/draft-form@3.4.7) (2021-05-17)

**Note:** Version bump only for package @kaizen/draft-form

## [3.4.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.4.5...@kaizen/draft-form@3.4.6) (2021-05-17)

**Note:** Version bump only for package @kaizen/draft-form

## [3.4.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.4.4...@kaizen/draft-form@3.4.5) (2021-05-16)

**Note:** Version bump only for package @kaizen/draft-form

## [3.4.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.4.3...@kaizen/draft-form@3.4.4) (2021-05-13)

**Note:** Version bump only for package @kaizen/draft-form

## [3.4.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.4.2...@kaizen/draft-form@3.4.3) (2021-05-05)

**Note:** Version bump only for package @kaizen/draft-form

## [3.4.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.4.1...@kaizen/draft-form@3.4.2) (2021-05-03)

**Note:** Version bump only for package @kaizen/draft-form

## [3.4.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.4.0...@kaizen/draft-form@3.4.1) (2021-04-30)

**Note:** Version bump only for package @kaizen/draft-form

# [3.4.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.3.3...@kaizen/draft-form@3.4.0) (2021-04-15)

### Features

- add disabled variant of Elm Select and SelectField ([#1431](https://github.com/cultureamp/kaizen-design-system/issues/1431)) ([37bceae](https://github.com/cultureamp/kaizen-design-system/commit/37bceaef24cee39cadfdc24b9f02cc947595cd68))

## [3.3.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.3.2...@kaizen/draft-form@3.3.3) (2021-04-13)

**Note:** Version bump only for package @kaizen/draft-form

## [3.3.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.3.1...@kaizen/draft-form@3.3.2) (2021-04-13)

### Bug Fixes

- expose isLoading from SelectField.elm ([#1419](https://github.com/cultureamp/kaizen-design-system/issues/1419)) ([8090116](https://github.com/cultureamp/kaizen-design-system/commit/809011667aeafb62df4fb8013a461cba4429579f))

## [3.3.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.3.0...@kaizen/draft-form@3.3.1) (2021-04-09)

### Bug Fixes

- export elm select field clearable ([#1398](https://github.com/cultureamp/kaizen-design-system/issues/1398)) ([ae25013](https://github.com/cultureamp/kaizen-design-system/commit/ae25013e84090348095b3b90e025729dbaf78915))

# [3.3.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.2.19...@kaizen/draft-form@3.3.0) (2021-04-09)

### Features

- add clearable option for SelectField.elm ([#1385](https://github.com/cultureamp/kaizen-design-system/issues/1385)) ([c1f7736](https://github.com/cultureamp/kaizen-design-system/commit/c1f7736c44f2d45baaf03a9fbdc70e487a6ff36a))

## [3.2.19](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.2.18...@kaizen/draft-form@3.2.19) (2021-04-07)

**Note:** Version bump only for package @kaizen/draft-form

## [3.2.18](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.2.17...@kaizen/draft-form@3.2.18) (2021-03-31)

**Note:** Version bump only for package @kaizen/draft-form

## [3.2.17](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.2.16...@kaizen/draft-form@3.2.17) (2021-03-30)

**Note:** Version bump only for package @kaizen/draft-form

## [3.2.16](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.2.15...@kaizen/draft-form@3.2.16) (2021-03-29)

**Note:** Version bump only for package @kaizen/draft-form

## [3.2.15](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.2.14...@kaizen/draft-form@3.2.15) (2021-03-25)

**Note:** Version bump only for package @kaizen/draft-form

## [3.2.14](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.2.13...@kaizen/draft-form@3.2.14) (2021-03-25)

**Note:** Version bump only for package @kaizen/draft-form

## [3.2.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.2.12...@kaizen/draft-form@3.2.13) (2021-03-25)

**Note:** Version bump only for package @kaizen/draft-form

## [3.2.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.2.11...@kaizen/draft-form@3.2.12) (2021-03-22)

**Note:** Version bump only for package @kaizen/draft-form

## [3.2.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.2.10...@kaizen/draft-form@3.2.11) (2021-03-22)

**Note:** Version bump only for package @kaizen/draft-form

## [3.2.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.2.9...@kaizen/draft-form@3.2.10) (2021-03-17)

**Note:** Version bump only for package @kaizen/draft-form

## [3.2.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.2.8...@kaizen/draft-form@3.2.9) (2021-03-15)

### Bug Fixes

- add deprecation warnings to ultra legacy style, type and layout mixins + remove internal usage ([#1046](https://github.com/cultureamp/kaizen-design-system/issues/1046)) ([893ba13](https://github.com/cultureamp/kaizen-design-system/commit/893ba134d49468dc1cda3ffd847a056cf4886071))

## [3.2.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.2.7...@kaizen/draft-form@3.2.8) (2021-03-15)

### Bug Fixes

- Allow ReactNode for TextField and TextAreaField validationMessage ([#1249](https://github.com/cultureamp/kaizen-design-system/issues/1249)) ([48607af](https://github.com/cultureamp/kaizen-design-system/commit/48607af2bf9b067656b6b8c1c74f5dac95087fed))

## [3.2.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.2.6...@kaizen/draft-form@3.2.7) (2021-03-15)

### Bug Fixes

- upgrade to Elm 0.19.1 ([#1038](https://github.com/cultureamp/kaizen-design-system/issues/1038)) ([07cd9e4](https://github.com/cultureamp/kaizen-design-system/commit/07cd9e4039d5cacfc64f752e1d3a966507ebc377))

## [3.2.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.2.5...@kaizen/draft-form@3.2.6) (2021-02-26)

**Note:** Version bump only for package @kaizen/draft-form

## [3.2.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.2.4...@kaizen/draft-form@3.2.5) (2021-02-25)

### Bug Fixes

- Update minimum design-token dependency ([#1131](https://github.com/cultureamp/kaizen-design-system/issues/1131)) ([ce8182c](https://github.com/cultureamp/kaizen-design-system/commit/ce8182c054c9e8bc96bfdba8457bcd169d449204))

## [3.2.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.2.3...@kaizen/draft-form@3.2.4) (2021-02-25)

### Bug Fixes

- Use rgb-param variables in rgba ([#1094](https://github.com/cultureamp/kaizen-design-system/issues/1094)) ([4e7f0c7](https://github.com/cultureamp/kaizen-design-system/commit/4e7f0c7cbdadd5a0d606b58ed4b0f1344b8b9d99))

## [3.2.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.2.2...@kaizen/draft-form@3.2.3) (2021-02-22)

**Note:** Version bump only for package @kaizen/draft-form

## [3.2.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.2.1...@kaizen/draft-form@3.2.2) (2021-02-19)

**Note:** Version bump only for package @kaizen/draft-form

## [3.2.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.2.0...@kaizen/draft-form@3.2.1) (2021-02-18)

**Note:** Version bump only for package @kaizen/draft-form

# [3.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.1.9...@kaizen/draft-form@3.2.0) (2021-02-17)

### Features

- Update form to support Heart ([#1015](https://github.com/cultureamp/kaizen-design-system/issues/1015)) ([9ed1ca0](https://github.com/cultureamp/kaizen-design-system/commit/9ed1ca07752cf38342f323d0d9460b10e1d1bf2d))

## [3.1.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.1.8...@kaizen/draft-form@3.1.9) (2021-02-15)

### Bug Fixes

- Remove usage of add-tint, add-shade, and add-alpha ([#1047](https://github.com/cultureamp/kaizen-design-system/issues/1047)) ([4164904](https://github.com/cultureamp/kaizen-design-system/commit/4164904cd5bac74488ab47963e10b0f314b56228))

## [3.1.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.1.7...@kaizen/draft-form@3.1.8) (2021-02-12)

**Note:** Version bump only for package @kaizen/draft-form

## [3.1.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.1.6...@kaizen/draft-form@3.1.7) (2021-02-11)

**Note:** Version bump only for package @kaizen/draft-form

## [3.1.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.1.5...@kaizen/draft-form@3.1.6) (2021-02-09)

**Note:** Version bump only for package @kaizen/draft-form

## [3.1.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.1.4...@kaizen/draft-form@3.1.5) (2021-02-09)

**Note:** Version bump only for package @kaizen/draft-form

## [3.1.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.1.3...@kaizen/draft-form@3.1.4) (2021-02-08)

**Note:** Version bump only for package @kaizen/draft-form

## [3.1.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.1.2...@kaizen/draft-form@3.1.3) (2021-02-08)

**Note:** Version bump only for package @kaizen/draft-form

## [3.1.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.1.1...@kaizen/draft-form@3.1.2) (2021-02-05)

**Note:** Version bump only for package @kaizen/draft-form

## [3.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.1.0...@kaizen/draft-form@3.1.1) (2021-02-02)

**Note:** Version bump only for package @kaizen/draft-form

# [3.1.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.0.3...@kaizen/draft-form@3.1.0) (2021-01-28)

### Features

- Add value to checkbox ([#982](https://github.com/cultureamp/kaizen-design-system/issues/982)) ([055255d](https://github.com/cultureamp/kaizen-design-system/commit/055255d0317781e3cb205ec3b4a09d8bb98f461d))

## [3.0.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.0.2...@kaizen/draft-form@3.0.3) (2021-01-18)

**Note:** Version bump only for package @kaizen/draft-form

## [3.0.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.0.1...@kaizen/draft-form@3.0.2) (2021-01-14)

**Note:** Version bump only for package @kaizen/draft-form

## [3.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@3.0.0...@kaizen/draft-form@3.0.1) (2021-01-11)

**Note:** Version bump only for package @kaizen/draft-form

# [3.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.12.0...@kaizen/draft-form@3.0.0) (2021-01-10)

### Features

- Consolidate form packages ([#906](https://github.com/cultureamp/kaizen-design-system/issues/906)) ([28e4b8f](https://github.com/cultureamp/kaizen-design-system/commit/28e4b8f6851d7e2f1eba827c0ed1763a29f47774))

### BREAKING CHANGES

- RadioInput, Radio, and RadioGroup now within the KaizenDraft.Form Elm namespace
- Regenerate snapshots
- Rename Radio to RadioField, Form/RadioInput becomes Form/Radio, to be consistent with naming in other packages

# [2.12.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.11.0...@kaizen/draft-form@2.12.0) (2021-01-08)

### Features

- add checkbox validation and reverse states ([#858](https://github.com/cultureamp/kaizen-design-system/issues/858)) ([be74040](https://github.com/cultureamp/kaizen-design-system/commit/be7404071414dfaa7765e8c1977434edd8939665))

# [2.11.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.10.9...@kaizen/draft-form@2.11.0) (2021-01-07)

### Features

- Export \*Props from packages ([#917](https://github.com/cultureamp/kaizen-design-system/issues/917)) ([53656b6](https://github.com/cultureamp/kaizen-design-system/commit/53656b60ff51da40b22d0e489149dbf9eee22386))

## [2.10.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.10.8...@kaizen/draft-form@2.10.9) (2020-12-16)

**Note:** Version bump only for package @kaizen/draft-form

## [2.10.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.10.7...@kaizen/draft-form@2.10.8) (2020-12-14)

### Bug Fixes

- Restore defaultValue on textarea ([#901](https://github.com/cultureamp/kaizen-design-system/issues/901)) ([680c40b](https://github.com/cultureamp/kaizen-design-system/commit/680c40b15a131df3967b3c7e94efcd5d9acf7815))

## [2.10.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.10.6...@kaizen/draft-form@2.10.7) (2020-12-09)

**Note:** Version bump only for package @kaizen/draft-form

## [2.10.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.10.5...@kaizen/draft-form@2.10.6) (2020-12-09)

**Note:** Version bump only for package @kaizen/draft-form

## [2.10.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.10.4...@kaizen/draft-form@2.10.5) (2020-12-08)

**Note:** Version bump only for package @kaizen/draft-form

## [2.10.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.10.3...@kaizen/draft-form@2.10.4) (2020-12-07)

### Bug Fixes

- Don't set TextArea if calculated height is 0 ([#885](https://github.com/cultureamp/kaizen-design-system/issues/885)) ([aa9da77](https://github.com/cultureamp/kaizen-design-system/commit/aa9da77158065909611b907fd65ff86a6bdf0c27))

## [2.10.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.10.2...@kaizen/draft-form@2.10.3) (2020-12-04)

**Note:** Version bump only for package @kaizen/draft-form

## [2.10.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.10.1...@kaizen/draft-form@2.10.2) (2020-12-01)

### Bug Fixes

- Added missing dependencies. Updated eslint. ([#875](https://github.com/cultureamp/kaizen-design-system/issues/875)) ([182a9ca](https://github.com/cultureamp/kaizen-design-system/commit/182a9cafa9cf9795dcdd936cfef7bac432d3c28f))

## [2.10.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.10.0...@kaizen/draft-form@2.10.1) (2020-12-01)

**Note:** Version bump only for package @kaizen/draft-form

# [2.10.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.9.0...@kaizen/draft-form@2.10.0) (2020-11-30)

### Features

- Allow generic textarea props on TextArea and TextAreaField ([#871](https://github.com/cultureamp/kaizen-design-system/issues/871)) ([adfe3cf](https://github.com/cultureamp/kaizen-design-system/commit/adfe3cf8139318fa289188d457f4226bcb34cf14))

# [2.9.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.8.1...@kaizen/draft-form@2.9.0) (2020-11-26)

### Features

- Add prominent variant to TextAreaField (React) ([#869](https://github.com/cultureamp/kaizen-design-system/issues/869)) ([27ede16](https://github.com/cultureamp/kaizen-design-system/commit/27ede1645b6ef9cceeacd575eead3cd465d6ebca))

## [2.8.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.8.0...@kaizen/draft-form@2.8.1) (2020-11-25)

**Note:** Version bump only for package @kaizen/draft-form

# [2.8.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.7.14...@kaizen/draft-form@2.8.0) (2020-11-19)

### Features

- Add autogrow feature to TextArea/TextAreaField ([#866](https://github.com/cultureamp/kaizen-design-system/issues/866)) ([651bc05](https://github.com/cultureamp/kaizen-design-system/commit/651bc05fd57a0cb409aa466c16fdcdaa01312ab2))

## [2.7.14](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.7.13...@kaizen/draft-form@2.7.14) (2020-11-13)

**Note:** Version bump only for package @kaizen/draft-form

## [2.7.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.7.12...@kaizen/draft-form@2.7.13) (2020-11-12)

**Note:** Version bump only for package @kaizen/draft-form

## [2.7.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.7.11...@kaizen/draft-form@2.7.12) (2020-11-12)

**Note:** Version bump only for package @kaizen/draft-form

## [2.7.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.7.10...@kaizen/draft-form@2.7.11) (2020-11-09)

**Note:** Version bump only for package @kaizen/draft-form

## [2.7.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.7.9...@kaizen/draft-form@2.7.10) (2020-11-09)

**Note:** Version bump only for package @kaizen/draft-form

## [2.7.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.7.8...@kaizen/draft-form@2.7.9) (2020-10-21)

**Note:** Version bump only for package @kaizen/draft-form

## [2.7.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.7.7...@kaizen/draft-form@2.7.8) (2020-10-08)

**Note:** Version bump only for package @kaizen/draft-form

## [2.7.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.7.6...@kaizen/draft-form@2.7.7) (2020-10-01)

**Note:** Version bump only for package @kaizen/draft-form

## [2.7.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.7.5...@kaizen/draft-form@2.7.6) (2020-10-01)

**Note:** Version bump only for package @kaizen/draft-form

## [2.7.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.7.4...@kaizen/draft-form@2.7.5) (2020-09-30)

**Note:** Version bump only for package @kaizen/draft-form

## [2.7.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.7.3...@kaizen/draft-form@2.7.4) (2020-09-28)

**Note:** Version bump only for package @kaizen/draft-form

## [2.7.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.7.2...@kaizen/draft-form@2.7.3) (2020-09-28)

**Note:** Version bump only for package @kaizen/draft-form

## [2.7.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.7.1...@kaizen/draft-form@2.7.2) (2020-09-24)

### Bug Fixes

- Change styles from require to use import ([#782](https://github.com/cultureamp/kaizen-design-system/issues/782)) ([defd448](https://github.com/cultureamp/kaizen-design-system/commit/defd4483faa3459d9af48e272c63656798008a28))

## [2.7.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.7.0...@kaizen/draft-form@2.7.1) (2020-09-23)

### Bug Fixes

- Changed icons to use import, added types for icons ([#781](https://github.com/cultureamp/kaizen-design-system/issues/781)) ([e0856a8](https://github.com/cultureamp/kaizen-design-system/commit/e0856a84e3b39d3dc1bfa910b0b973bd65e170c9))

# [2.7.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.6.10...@kaizen/draft-form@2.7.0) (2020-09-22)

### Features

- allow uncontrolled Elm TextArea to be pre-fillable ([#783](https://github.com/cultureamp/kaizen-design-system/issues/783)) ([25ab00a](https://github.com/cultureamp/kaizen-design-system/commit/25ab00a1304b4b687e01c3cf612989ab6dcc0c6a))

## [2.6.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.6.9...@kaizen/draft-form@2.6.10) (2020-09-21)

### Bug Fixes

- Apply spacing to labels when inline with form controls ([#784](https://github.com/cultureamp/kaizen-design-system/issues/784)) ([6874853](https://github.com/cultureamp/kaizen-design-system/commit/687485399bf8103096e44eed5c3465582cc56a01))

## [2.6.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.6.8...@kaizen/draft-form@2.6.9) (2020-09-11)

**Note:** Version bump only for package @kaizen/draft-form

## [2.6.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.6.7...@kaizen/draft-form@2.6.8) (2020-09-11)

**Note:** Version bump only for package @kaizen/draft-form

## [2.6.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.6.6...@kaizen/draft-form@2.6.7) (2020-09-09)

**Note:** Version bump only for package @kaizen/draft-form

## [2.6.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.6.5...@kaizen/draft-form@2.6.6) (2020-09-07)

### Bug Fixes

- Bump design-tokens peer dependency to the latest version ([#760](https://github.com/cultureamp/kaizen-design-system/issues/760)) ([37e5414](https://github.com/cultureamp/kaizen-design-system/commit/37e5414b2e2c0befb4127c588120eb2e8bdc4d39))

## [2.6.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.6.4...@kaizen/draft-form@2.6.5) (2020-09-04)

**Note:** Version bump only for package @kaizen/draft-form

## [2.6.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.6.3...@kaizen/draft-form@2.6.4) (2020-09-03)

### Bug Fixes

- Realign label margins for Checkbox and Radio ([#740](https://github.com/cultureamp/kaizen-design-system/issues/740)) ([918cf94](https://github.com/cultureamp/kaizen-design-system/commit/918cf94351156598a6a2f69169e1f3877ecb0220))

## [2.6.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.6.2...@kaizen/draft-form@2.6.3) (2020-09-01)

**Note:** Version bump only for package @kaizen/draft-form

## [2.6.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.6.1...@kaizen/draft-form@2.6.2) (2020-08-28)

**Note:** Version bump only for package @kaizen/draft-form

## [2.6.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.6.0...@kaizen/draft-form@2.6.1) (2020-08-28)

**Note:** Version bump only for package @kaizen/draft-form

# [2.6.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.5.1...@kaizen/draft-form@2.6.0) (2020-08-27)

### Features

- Add toggle switch with label after the toggle control ([#665](https://github.com/cultureamp/kaizen-design-system/issues/665)) ([e05bd5a](https://github.com/cultureamp/kaizen-design-system/commit/e05bd5a50644ae0b0a7b798c89047e4a02f2b1be))

## [2.5.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.5.0...@kaizen/draft-form@2.5.1) (2020-08-27)

**Note:** Version bump only for package @kaizen/draft-form

# [2.5.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.4.5...@kaizen/draft-form@2.5.0) (2020-08-26)

### Features

- Elm SelectField component ([#731](https://github.com/cultureamp/kaizen-design-system/issues/731)) ([f0775dc](https://github.com/cultureamp/kaizen-design-system/commit/f0775dc253d5d44d3f53084deeebd60fbd9073cf))

## [2.4.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.4.4...@kaizen/draft-form@2.4.5) (2020-08-25)

### Bug Fixes

- ensure validation message is only shown when the actual status i… ([#730](https://github.com/cultureamp/kaizen-design-system/issues/730)) ([a3757bc](https://github.com/cultureamp/kaizen-design-system/commit/a3757bcf333f3f90802b70bda153590405a89fd7))

## [2.4.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.4.3...@kaizen/draft-form@2.4.4) (2020-08-24)

**Note:** Version bump only for package @kaizen/draft-form

## [2.4.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.4.2...@kaizen/draft-form@2.4.3) (2020-08-19)

**Note:** Version bump only for package @kaizen/draft-form

## [2.4.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.4.1...@kaizen/draft-form@2.4.2) (2020-08-12)

**Note:** Version bump only for package @kaizen/draft-form

## [2.4.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.4.0...@kaizen/draft-form@2.4.1) (2020-08-10)

**Note:** Version bump only for package @kaizen/draft-form

# [2.4.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.3.2...@kaizen/draft-form@2.4.0) (2020-08-07)

### Features

- add textarea for Elm ([#698](https://github.com/cultureamp/kaizen-design-system/issues/698)) ([cfd366f](https://github.com/cultureamp/kaizen-design-system/commit/cfd366f4682709b10c57eeb2951b7cb7d3424ee4))

## [2.3.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.3.1...@kaizen/draft-form@2.3.2) (2020-07-31)

**Note:** Version bump only for package @kaizen/draft-form

## [2.3.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.3.0...@kaizen/draft-form@2.3.1) (2020-07-30)

**Note:** Version bump only for package @kaizen/draft-form

# [2.3.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.2.10...@kaizen/draft-form@2.3.0) (2020-07-29)

### Features

- allow arbitrary Html in TextField description fields (Elm & React) ([#671](https://github.com/cultureamp/kaizen-design-system/issues/671)) ([6c39181](https://github.com/cultureamp/kaizen-design-system/commit/6c391811410e1fc76b515e1f19be916d681c791c))

## [2.2.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.2.9...@kaizen/draft-form@2.2.10) (2020-07-15)

**Note:** Version bump only for package @kaizen/draft-form

## [2.2.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.2.8...@kaizen/draft-form@2.2.9) (2020-07-15)

**Note:** Version bump only for package @kaizen/draft-form

## [2.2.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.2.7...@kaizen/draft-form@2.2.8) (2020-07-10)

**Note:** Version bump only for package @kaizen/draft-form

## [2.2.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.2.6...@kaizen/draft-form@2.2.7) (2020-07-09)

### Bug Fixes

- Switch from TSlint to ESlint ([#621](https://github.com/cultureamp/kaizen-design-system/issues/621)) ([59e64d4](https://github.com/cultureamp/kaizen-design-system/commit/59e64d4d0cd14302544ae7f41fd76a101d313aee))

## [2.2.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.2.5...@kaizen/draft-form@2.2.6) (2020-07-09)

**Note:** Version bump only for package @kaizen/draft-form

## [2.2.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.2.4...@kaizen/draft-form@2.2.5) (2020-07-09)

**Note:** Version bump only for package @kaizen/draft-form

## [2.2.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.2.3...@kaizen/draft-form@2.2.4) (2020-07-06)

**Note:** Version bump only for package @kaizen/draft-form

## [2.2.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.2.2...@kaizen/draft-form@2.2.3) (2020-07-01)

**Note:** Version bump only for package @kaizen/draft-form

## [2.2.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.2.1...@kaizen/draft-form@2.2.2) (2020-06-29)

**Note:** Version bump only for package @kaizen/draft-form

## [2.2.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.2.0...@kaizen/draft-form@2.2.1) (2020-06-26)

**Note:** Version bump only for package @kaizen/draft-form

# [2.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.1.4...@kaizen/draft-form@2.2.0) (2020-06-26)

### Features

- add radio styles to label ([#585](https://github.com/cultureamp/kaizen-design-system/issues/585)) ([68f428f](https://github.com/cultureamp/kaizen-design-system/commit/68f428f330b76762aec4650d48df63228a01cb9c))

## [2.1.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.1.3...@kaizen/draft-form@2.1.4) (2020-06-23)

### Bug Fixes

- Explicitly set the box-sizing for the checkbox & radio focus ring ([#572](https://github.com/cultureamp/kaizen-design-system/issues/572)) ([a93b289](https://github.com/cultureamp/kaizen-design-system/commit/a93b289703463f66c7b46d234dc3843ca737cd2f))

## [2.1.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.1.2...@kaizen/draft-form@2.1.3) (2020-06-22)

**Note:** Version bump only for package @kaizen/draft-form

## [2.1.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.1.1...@kaizen/draft-form@2.1.2) (2020-06-22)

**Note:** Version bump only for package @kaizen/draft-form

## [2.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.1.0...@kaizen/draft-form@2.1.1) (2020-06-22)

**Note:** Version bump only for package @kaizen/draft-form

# [2.1.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.0.13...@kaizen/draft-form@2.1.0) (2020-06-22)

### Features

- Add focus rings to TextField & TextAreaField + reversed support for TextAreaField ([#544](https://github.com/cultureamp/kaizen-design-system/issues/544)) ([ba4334e](https://github.com/cultureamp/kaizen-design-system/commit/ba4334e273be1aa8f8d9bfa820268b41e5373773))

## [2.0.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.0.12...@kaizen/draft-form@2.0.13) (2020-06-22)

### Bug Fixes

- Ensure inner elements don't conflict with label ([#556](https://github.com/cultureamp/kaizen-design-system/issues/556)) ([914daf7](https://github.com/cultureamp/kaizen-design-system/commit/914daf74aa8aadf59fe48d5a8f79a02c70bc0c81))

## [2.0.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.0.11...@kaizen/draft-form@2.0.12) (2020-06-19)

**Note:** Version bump only for package @kaizen/draft-form

## [2.0.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.0.10...@kaizen/draft-form@2.0.11) (2020-06-18)

**Note:** Version bump only for package @kaizen/draft-form

## [2.0.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.0.9...@kaizen/draft-form@2.0.10) (2020-06-18)

### Bug Fixes

- use specificity hack to overide bootstrap styles ([#555](https://github.com/cultureamp/kaizen-design-system/issues/555)) ([133c334](https://github.com/cultureamp/kaizen-design-system/commit/133c334daaf844f0eb4ca34c29b527d27664491b))

## [2.0.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.0.8...@kaizen/draft-form@2.0.9) (2020-06-18)

### Bug Fixes

- add pointer-events none to .box element ([#554](https://github.com/cultureamp/kaizen-design-system/issues/554)) ([43b6d6f](https://github.com/cultureamp/kaizen-design-system/commit/43b6d6fa895a3e3df1a35d77d2d27cf468f644e9))

## [2.0.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.0.7...@kaizen/draft-form@2.0.8) (2020-06-18)

### Bug Fixes

- Checkbox and radio button inconsistent behaviour on touch devices ([#550](https://github.com/cultureamp/kaizen-design-system/issues/550)) ([da66a82](https://github.com/cultureamp/kaizen-design-system/commit/da66a828aea401187ae99f7e6fa55975fce8b7a7))

## [2.0.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.0.6...@kaizen/draft-form@2.0.7) (2020-06-17)

**Note:** Version bump only for package @kaizen/draft-form

## [2.0.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.0.5...@kaizen/draft-form@2.0.6) (2020-06-16)

**Note:** Version bump only for package @kaizen/draft-form

## [2.0.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.0.4...@kaizen/draft-form@2.0.5) (2020-06-12)

**Note:** Version bump only for package @kaizen/draft-form

## [2.0.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.0.3...@kaizen/draft-form@2.0.4) (2020-06-12)

**Note:** Version bump only for package @kaizen/draft-form

## [2.0.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.0.2...@kaizen/draft-form@2.0.3) (2020-06-11)

**Note:** Version bump only for package @kaizen/draft-form

## [2.0.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.0.1...@kaizen/draft-form@2.0.2) (2020-06-11)

**Note:** Version bump only for package @kaizen/draft-form

## [2.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@2.0.0...@kaizen/draft-form@2.0.1) (2020-06-11)

**Note:** Version bump only for package @kaizen/draft-form

# [2.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.8.0...@kaizen/draft-form@2.0.0) (2020-06-10)

### Features

- Use new focus ring & size for checkbox & radio ([#420](https://github.com/cultureamp/kaizen-design-system/issues/420)) ([f287fb4](https://github.com/cultureamp/kaizen-design-system/commit/f287fb4f9d9f2322d44eb9581fea8d644e8a0f02))

### BREAKING CHANGES

- this PR has been raised from feat to major

We feel that usage of this PR in consuming repos will need
some QA, therefore we are upgrading to major/breaking. This is
inline with the direction we are heading in that feat releases
will not require QA.

Co-authored-by: Michael Bylstra <mbylstra@gmail.com>

# [1.8.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.7.0...@kaizen/draft-form@1.8.0) (2020-06-10)

### Features

- Add blur and focus callbacks to form components ([#537](https://github.com/cultureamp/kaizen-design-system/issues/537)) ([5bd717b](https://github.com/cultureamp/kaizen-design-system/commit/5bd717b019d89da27cee0cd4b198c606b458b795))

# [1.7.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.6.7...@kaizen/draft-form@1.7.0) (2020-06-09)

### Features

- Rollout inter ([#530](https://github.com/cultureamp/kaizen-design-system/issues/530)) ([a1b2059](https://github.com/cultureamp/kaizen-design-system/commit/a1b2059980ea753036caa5cb15ba6b1235d52ba4))

## [1.6.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.6.6...@kaizen/draft-form@1.6.7) (2020-06-05)

**Note:** Version bump only for package @kaizen/draft-form

## [1.6.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.6.5...@kaizen/draft-form@1.6.6) (2020-06-05)

**Note:** Version bump only for package @kaizen/draft-form

## [1.6.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.6.4...@kaizen/draft-form@1.6.5) (2020-06-05)

**Note:** Version bump only for package @kaizen/draft-form

## [1.6.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.6.3...@kaizen/draft-form@1.6.4) (2020-06-04)

**Note:** Version bump only for package @kaizen/draft-form

## [1.6.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.6.2...@kaizen/draft-form@1.6.3) (2020-06-02)

**Note:** Version bump only for package @kaizen/draft-form

## [1.6.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.6.1...@kaizen/draft-form@1.6.2) (2020-06-02)

**Note:** Version bump only for package @kaizen/draft-form

## [1.6.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.6.0...@kaizen/draft-form@1.6.1) (2020-06-02)

**Note:** Version bump only for package @kaizen/draft-form

# [1.6.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.5.4...@kaizen/draft-form@1.6.0) (2020-06-01)

### Features

- Add aria-label prop to Input ([#518](https://github.com/cultureamp/kaizen-design-system/issues/518)) ([537d49b](https://github.com/cultureamp/kaizen-design-system/commit/537d49bfcbeeb6222102d77b288118208cb6f0a2))

## [1.5.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.5.3...@kaizen/draft-form@1.5.4) (2020-05-28)

**Note:** Version bump only for package @kaizen/draft-form

## [1.5.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.5.2...@kaizen/draft-form@1.5.3) (2020-05-27)

**Note:** Version bump only for package @kaizen/draft-form

## [1.5.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.5.1...@kaizen/draft-form@1.5.2) (2020-05-26)

**Note:** Version bump only for package @kaizen/draft-form

## [1.5.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.5.0...@kaizen/draft-form@1.5.1) (2020-05-26)

**Note:** Version bump only for package @kaizen/draft-form

# [1.5.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.4.5...@kaizen/draft-form@1.5.0) (2020-05-26)

### Features

- Update border-color of TextAreaField and TextField to match Zen ([#510](https://github.com/cultureamp/kaizen-design-system/issues/510)) ([6e2b643](https://github.com/cultureamp/kaizen-design-system/commit/6e2b6438384073c854ca393b1be9e531ee4a10a3))

## [1.4.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.4.4...@kaizen/draft-form@1.4.5) (2020-05-26)

**Note:** Version bump only for package @kaizen/draft-form

## [1.4.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.4.3...@kaizen/draft-form@1.4.4) (2020-05-22)

**Note:** Version bump only for package @kaizen/draft-form

## [1.4.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.4.2...@kaizen/draft-form@1.4.3) (2020-05-22)

**Note:** Version bump only for package @kaizen/draft-form

## [1.4.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.4.1...@kaizen/draft-form@1.4.2) (2020-05-21)

**Note:** Version bump only for package @kaizen/draft-form

## [1.4.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.4.0...@kaizen/draft-form@1.4.1) (2020-05-21)

**Note:** Version bump only for package @kaizen/draft-form

# [1.4.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.3.7...@kaizen/draft-form@1.4.0) (2020-05-20)

### Features

- removed references to the old draft packages ([#504](https://github.com/cultureamp/kaizen-design-system/issues/504)) ([ddda156](https://github.com/cultureamp/kaizen-design-system/commit/ddda156513445ca8da8bcc64364f15dc4b94b1a6))

## [1.3.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.3.6...@kaizen/draft-form@1.3.7) (2020-05-20)

### Bug Fixes

- unpin unintentionally pinned @kaizen/design-token peer dependencies ([#503](https://github.com/cultureamp/kaizen-design-system/issues/503)) ([aa6f1d3](https://github.com/cultureamp/kaizen-design-system/commit/aa6f1d3a63cd7f2e3dac9cd631aa7a9e88b153ac))

## [1.3.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.3.5...@kaizen/draft-form@1.3.6) (2020-05-19)

**Note:** Version bump only for package @kaizen/draft-form

## [1.3.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.3.4...@kaizen/draft-form@1.3.5) (2020-05-19)

**Note:** Version bump only for package @kaizen/draft-form

## [1.3.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.3.3...@kaizen/draft-form@1.3.4) (2020-05-19)

**Note:** Version bump only for package @kaizen/draft-form

## [1.3.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.3.2...@kaizen/draft-form@1.3.3) (2020-05-18)

### Bug Fixes

- sync old and new draft components ([#492](https://github.com/cultureamp/kaizen-design-system/issues/492)) ([6755e4b](https://github.com/cultureamp/kaizen-design-system/commit/6755e4beedf5d3953c5a50e152cfd181389d9be0))

## [1.3.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.3.1...@kaizen/draft-form@1.3.2) (2020-05-15)

**Note:** Version bump only for package @kaizen/draft-form

## [1.3.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.3.0...@kaizen/draft-form@1.3.1) (2020-05-13)

**Note:** Version bump only for package @kaizen/draft-form

# [1.3.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.2.8...@kaizen/draft-form@1.3.0) (2020-05-08)

### Features

- Add description prop to TextAreaField ([#471](https://github.com/cultureamp/kaizen-design-system/issues/471)) ([5cbe468](https://github.com/cultureamp/kaizen-design-system/commit/5cbe4681fb1b75e49c78dbfc02aa4eb31e4c0ef2))

## [1.2.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.2.7...@kaizen/draft-form@1.2.8) (2020-05-08)

**Note:** Version bump only for package @kaizen/draft-form

## [1.2.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.2.6...@kaizen/draft-form@1.2.7) (2020-05-08)

**Note:** Version bump only for package @kaizen/draft-form

## [1.2.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.2.5...@kaizen/draft-form@1.2.6) (2020-05-08)

**Note:** Version bump only for package @kaizen/draft-form

## [1.2.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.2.4...@kaizen/draft-form@1.2.5) (2020-05-07)

**Note:** Version bump only for package @kaizen/draft-form

## [1.2.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.2.3...@kaizen/draft-form@1.2.4) (2020-05-06)

**Note:** Version bump only for package @kaizen/draft-form

## [1.2.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.2.2...@kaizen/draft-form@1.2.3) (2020-05-06)

**Note:** Version bump only for package @kaizen/draft-form

## [1.2.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.2.1...@kaizen/draft-form@1.2.2) (2020-05-05)

**Note:** Version bump only for package @kaizen/draft-form

## [1.2.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.2.0...@kaizen/draft-form@1.2.1) (2020-05-05)

**Note:** Version bump only for package @kaizen/draft-form

# [1.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.1.5...@kaizen/draft-form@1.2.0) (2020-05-05)

### Features

- Updated all draft packages to accept all minor releases ([#451](https://github.com/cultureamp/kaizen-design-system/issues/451)) ([80453f6](https://github.com/cultureamp/kaizen-design-system/commit/80453f6c04300dcef61c14e39200ce154863eb0d))

## [1.1.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.1.4...@kaizen/draft-form@1.1.5) (2020-05-04)

**Note:** Version bump only for package @kaizen/draft-form

## [1.1.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.1.3...@kaizen/draft-form@1.1.4) (2020-05-04)

**Note:** Version bump only for package @kaizen/draft-form

## [1.1.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.1.2...@kaizen/draft-form@1.1.3) (2020-05-04)

**Note:** Version bump only for package @kaizen/draft-form

## [1.1.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.1.1...@kaizen/draft-form@1.1.2) (2020-05-04)

**Note:** Version bump only for package @kaizen/draft-form

## [1.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-form@1.1.0...@kaizen/draft-form@1.1.1) (2020-05-01)

### Bug Fixes

- draft-package elm imports ([#444](https://github.com/cultureamp/kaizen-design-system/issues/444)) ([16c9ffd](https://github.com/cultureamp/kaizen-design-system/commit/16c9ffde3ecd6d4f361fb2ab40bf4452a77b0e8a))

# 1.1.0 (2020-05-01)

### Features

- copy draft Form into single draft-packages package ([#438](https://github.com/cultureamp/kaizen-design-system/issues/438)) ([6b14db5](https://github.com/cultureamp/kaizen-design-system/commit/6b14db540f72c6e2f153b499c24d022a0eeca2c6))
