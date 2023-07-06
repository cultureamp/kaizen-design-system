# Change Log

## 1.6.0

### Minor Changes

- [#3848](https://github.com/cultureamp/kaizen-design-system/pull/3848) [`dcaecf4db`](https://github.com/cultureamp/kaizen-design-system/commit/dcaecf4db860db059e6cf5e38e47b3a1a023ddeb) - add security notification variant

## 1.5.10

### Patch Changes

- [#3731](https://github.com/cultureamp/kaizen-design-system/pull/3731) [`3421da907`](https://github.com/cultureamp/kaizen-design-system/commit/3421da907e3e4e235da4f6a733e33cffbd258a74) - InlineNotification width has changed from `100%` to `auto` so that it can be used side by side with other components. Should not affect any current usages.

## 1.5.9

### Patch Changes

- [#3677](https://github.com/cultureamp/kaizen-design-system/pull/3677) [`06c48bb35`](https://github.com/cultureamp/kaizen-design-system/commit/06c48bb3593cd348c393369b6bc17d04a997c9e0) - Bump outdated `component-library` and `draft-form` dependencies to latest

## 1.5.8

### Patch Changes

- [#3621](https://github.com/cultureamp/kaizen-design-system/pull/3621) [`4967215eb`](https://github.com/cultureamp/kaizen-design-system/commit/4967215eb05298f69dbdf8e9cb44f4e0665e7d8f) - Fix files whitelist to include scss files

- Updated dependencies [[`4967215eb`](https://github.com/cultureamp/kaizen-design-system/commit/4967215eb05298f69dbdf8e9cb44f4e0665e7d8f)]:
  - @kaizen/component-library@16.7.6
  - @kaizen/component-base@1.1.7

## 1.5.7

### Patch Changes

- [#3595](https://github.com/cultureamp/kaizen-design-system/pull/3595) [`0e0750e87`](https://github.com/cultureamp/kaizen-design-system/commit/0e0750e872e3381420df7bf2947d9deb9db8b705) - Remove .turbo from distributed files

- [#3616](https://github.com/cultureamp/kaizen-design-system/pull/3616) [`e4f5f5ce5`](https://github.com/cultureamp/kaizen-design-system/commit/e4f5f5ce50b4e1a4aa8b189c247d0f2a8fea722f) - Fix packagejson files whitelist to only include publish files

- [#3611](https://github.com/cultureamp/kaizen-design-system/pull/3611) [`589244ad0`](https://github.com/cultureamp/kaizen-design-system/commit/589244ad0c307edca845d19843f2db282050fe29) - Fix supported design-tokens versions

- Updated dependencies [[`0e0750e87`](https://github.com/cultureamp/kaizen-design-system/commit/0e0750e872e3381420df7bf2947d9deb9db8b705), [`e4f5f5ce5`](https://github.com/cultureamp/kaizen-design-system/commit/e4f5f5ce50b4e1a4aa8b189c247d0f2a8fea722f), [`589244ad0`](https://github.com/cultureamp/kaizen-design-system/commit/589244ad0c307edca845d19843f2db282050fe29)]:
  - @kaizen/component-library@16.7.5
  - @kaizen/component-base@1.1.6

## 1.5.6

### Patch Changes

- [#3608](https://github.com/cultureamp/kaizen-design-system/pull/3608) [`cc96d9835`](https://github.com/cultureamp/kaizen-design-system/commit/cc96d98351ae380fe1a1e8a33d65d80232ed7a57) - Update usages of classnames to not use object syntax

- Updated dependencies [[`cc96d9835`](https://github.com/cultureamp/kaizen-design-system/commit/cc96d98351ae380fe1a1e8a33d65d80232ed7a57)]:
  - @kaizen/component-library@16.7.4
  - @kaizen/design-tokens@10.3.7

## 1.5.5

### Patch Changes

- [#3582](https://github.com/cultureamp/kaizen-design-system/pull/3582) [`0ab615756`](https://github.com/cultureamp/kaizen-design-system/commit/0ab615756d0cb4bda40db2c2811171acccb478b0) - Deprecate autohide props on toasts and set more a11y friendly defaults

- Updated dependencies [[`739d87b0c`](https://github.com/cultureamp/kaizen-design-system/commit/739d87b0cd917e7c0f3becf2cc0fd8f9667f7a6c), [`739d87b0c`](https://github.com/cultureamp/kaizen-design-system/commit/739d87b0cd917e7c0f3becf2cc0fd8f9667f7a6c)]:
  - @kaizen/component-library@16.7.3
  - @kaizen/design-tokens@10.3.6

## 1.5.4

### Patch Changes

- [#3558](https://github.com/cultureamp/kaizen-design-system/pull/3558) [`f09c085ee`](https://github.com/cultureamp/kaizen-design-system/commit/f09c085ee78c6dc79afc291faa6e284b333d1e93) - Use native focus-visible selector for focus styling instead of polyfill class

## 1.5.3

### Patch Changes

- [#3536](https://github.com/cultureamp/kaizen-design-system/pull/3536) [`82ba2fa0d`](https://github.com/cultureamp/kaizen-design-system/commit/82ba2fa0d20c66a1688d2609d4bd7775b129349c) - - enforced no-implicit-any across kaizen

- Updated dependencies [[`82ba2fa0d`](https://github.com/cultureamp/kaizen-design-system/commit/82ba2fa0d20c66a1688d2609d4bd7775b129349c)]:
  - @kaizen/component-library@16.7.1

## 1.5.2

### Patch Changes

- c2f568022: Make toast notification into an aria live region
- Updated dependencies [fb901eec2]
  - @kaizen/component-library@16.7.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.5.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.5.0...@kaizen/notification@1.5.1) (2023-04-06)

**Note:** Version bump only for package @kaizen/notification

# [1.5.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.4.9...@kaizen/notification@1.5.0) (2023-04-05)

### Features

- **notification:** add isSubtle prop to inline notification ([#3438](https://github.com/cultureamp/kaizen-design-system/issues/3438)) ([3d980cb](https://github.com/cultureamp/kaizen-design-system/commit/3d980cbb101a12a2ceb611705f518bf9186ea05f))

## [1.4.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.4.8...@kaizen/notification@1.4.9) (2023-04-05)

**Note:** Version bump only for package @kaizen/notification

## [1.4.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.4.7...@kaizen/notification@1.4.8) (2023-03-29)

**Note:** Version bump only for package @kaizen/notification

## [1.4.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.4.6...@kaizen/notification@1.4.7) (2023-03-29)

**Note:** Version bump only for package @kaizen/notification

## [1.4.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.4.5...@kaizen/notification@1.4.6) (2023-03-23)

**Note:** Version bump only for package @kaizen/notification

## [1.4.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.4.4...@kaizen/notification@1.4.5) (2023-03-22)

**Note:** Version bump only for package @kaizen/notification

## [1.4.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.4.3...@kaizen/notification@1.4.4) (2023-03-14)

**Note:** Version bump only for package @kaizen/notification

## [1.4.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.4.2...@kaizen/notification@1.4.3) (2023-03-02)

**Note:** Version bump only for package @kaizen/notification

## [1.4.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.4.1...@kaizen/notification@1.4.2) (2023-03-02)

**Note:** Version bump only for package @kaizen/notification

## [1.4.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.4.0...@kaizen/notification@1.4.1) (2023-03-02)

**Note:** Version bump only for package @kaizen/notification

# [1.4.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.3.0...@kaizen/notification@1.4.0) (2023-02-28)

### Features

- update components to use Caution Icon ([#3327](https://github.com/cultureamp/kaizen-design-system/issues/3327)) ([93d7647](https://github.com/cultureamp/kaizen-design-system/commit/93d764734a68e42c9717f42cdbd626d8eda3c1ea))

# [1.3.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.2.4...@kaizen/notification@1.3.0) (2023-02-23)

### Features

- Update Toast Notification to handle long strings KZN-1005 ([#3299](https://github.com/cultureamp/kaizen-design-system/issues/3299)) ([47ddf28](https://github.com/cultureamp/kaizen-design-system/commit/47ddf28d921186b6fa7bf89b6b67753507fc1216))

## [1.2.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.2.3...@kaizen/notification@1.2.4) (2023-02-23)

**Note:** Version bump only for package @kaizen/notification

## [1.2.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.2.2...@kaizen/notification@1.2.3) (2023-02-23)

**Note:** Version bump only for package @kaizen/notification

## [1.2.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.2.1...@kaizen/notification@1.2.2) (2023-02-22)

**Note:** Version bump only for package @kaizen/notification

## [1.2.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.2.0...@kaizen/notification@1.2.1) (2023-02-17)

**Note:** Version bump only for package @kaizen/notification

# [1.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.1.18...@kaizen/notification@1.2.0) (2023-02-13)

### Features

- add visible focus state to close button & centre close icon ([#3267](https://github.com/cultureamp/kaizen-design-system/issues/3267)) ([06e6052](https://github.com/cultureamp/kaizen-design-system/commit/06e6052418adacbb7f85a8fdadcc213187a03417))

## [1.1.18](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.1.17...@kaizen/notification@1.1.18) (2023-02-09)

**Note:** Version bump only for package @kaizen/notification

## [1.1.17](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.1.16...@kaizen/notification@1.1.17) (2023-02-01)

**Note:** Version bump only for package @kaizen/notification

## [1.1.16](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.1.15...@kaizen/notification@1.1.16) (2023-01-30)

**Note:** Version bump only for package @kaizen/notification

## [1.1.15](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.1.14...@kaizen/notification@1.1.15) (2023-01-23)

**Note:** Version bump only for package @kaizen/notification

## [1.1.14](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.1.13...@kaizen/notification@1.1.14) (2023-01-18)

**Note:** Version bump only for package @kaizen/notification

## [1.1.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.1.12...@kaizen/notification@1.1.13) (2023-01-04)

**Note:** Version bump only for package @kaizen/notification

## [1.1.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.1.11...@kaizen/notification@1.1.12) (2023-01-04)

**Note:** Version bump only for package @kaizen/notification

## [1.1.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.1.10...@kaizen/notification@1.1.11) (2023-01-03)

**Note:** Version bump only for package @kaizen/notification

## [1.1.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.1.9...@kaizen/notification@1.1.10) (2022-12-01)

**Note:** Version bump only for package @kaizen/notification

## [1.1.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.1.8...@kaizen/notification@1.1.9) (2022-11-25)

**Note:** Version bump only for package @kaizen/notification

## [1.1.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.1.7...@kaizen/notification@1.1.8) (2022-11-17)

**Note:** Version bump only for package @kaizen/notification

## [1.1.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.1.6...@kaizen/notification@1.1.7) (2022-11-13)

**Note:** Version bump only for package @kaizen/notification

## [1.1.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.1.5...@kaizen/notification@1.1.6) (2022-11-10)

### Bug Fixes

- **deps:** update dependency uuid to v9 ([#3025](https://github.com/cultureamp/kaizen-design-system/issues/3025)) ([46c513c](https://github.com/cultureamp/kaizen-design-system/commit/46c513c8b84fd48e57f2bf3f7802a06c018366ce))

## [1.1.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.1.4...@kaizen/notification@1.1.5) (2022-11-09)

**Note:** Version bump only for package @kaizen/notification

## [1.1.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.1.3...@kaizen/notification@1.1.4) (2022-11-01)

**Note:** Version bump only for package @kaizen/notification

## [1.1.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.1.2...@kaizen/notification@1.1.3) (2022-10-26)

**Note:** Version bump only for package @kaizen/notification

## [1.1.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.1.1...@kaizen/notification@1.1.2) (2022-10-24)

**Note:** Version bump only for package @kaizen/notification

## [1.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.1.0...@kaizen/notification@1.1.1) (2022-10-19)

**Note:** Version bump only for package @kaizen/notification

# [1.1.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@1.0.1...@kaizen/notification@1.1.0) (2022-10-10)

### Features

- use headingProps in notification to control heading level ([#2991](https://github.com/cultureamp/kaizen-design-system/issues/2991)) ([17b6685](https://github.com/cultureamp/kaizen-design-system/commit/17b6685f2b7a0d6e62731837547e0c4f3b56f329))

## [1.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.11.8...@kaizen/notification@1.0.1) (2022-10-03)

**Note:** Version bump only for package @kaizen/notification

## [0.11.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.11.7...@kaizen/notification@0.11.8) (2022-09-30)

**Note:** Version bump only for package @kaizen/notification

## [0.11.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.11.6...@kaizen/notification@0.11.7) (2022-09-14)

**Note:** Version bump only for package @kaizen/notification

## [0.11.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.11.5...@kaizen/notification@0.11.6) (2022-09-14)

**Note:** Version bump only for package @kaizen/notification

## [0.11.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.11.4...@kaizen/notification@0.11.5) (2022-09-12)

**Note:** Version bump only for package @kaizen/notification

## [0.11.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.11.3...@kaizen/notification@0.11.4) (2022-09-07)

**Note:** Version bump only for package @kaizen/notification

## [0.11.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.11.2...@kaizen/notification@0.11.3) (2022-09-05)

**Note:** Version bump only for package @kaizen/notification

## [0.11.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.11.1...@kaizen/notification@0.11.2) (2022-09-02)

**Note:** Version bump only for package @kaizen/notification

## [0.11.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.11.0...@kaizen/notification@0.11.1) (2022-08-19)

**Note:** Version bump only for package @kaizen/notification

# [0.11.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.10.7...@kaizen/notification@0.11.0) (2022-08-18)

### Features

- update react to 16.14.0 ([#2922](https://github.com/cultureamp/kaizen-design-system/issues/2922)) ([22878be](https://github.com/cultureamp/kaizen-design-system/commit/22878beee1884e2f58d0447b3908321937175228))

## [0.10.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.10.6...@kaizen/notification@0.10.7) (2022-08-16)

**Note:** Version bump only for package @kaizen/notification

## [0.10.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.10.5...@kaizen/notification@0.10.6) (2022-08-01)

**Note:** Version bump only for package @kaizen/notification

## [0.10.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.10.4...@kaizen/notification@0.10.5) (2022-07-27)

**Note:** Version bump only for package @kaizen/notification

## [0.10.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.10.3...@kaizen/notification@0.10.4) (2022-07-27)

**Note:** Version bump only for package @kaizen/notification

## [0.10.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.10.2...@kaizen/notification@0.10.3) (2022-07-26)

**Note:** Version bump only for package @kaizen/notification

## [0.10.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.10.1...@kaizen/notification@0.10.2) (2022-07-22)

**Note:** Version bump only for package @kaizen/notification

## [0.10.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.10.0...@kaizen/notification@0.10.1) (2022-07-21)

**Note:** Version bump only for package @kaizen/notification

# [0.10.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.9.17...@kaizen/notification@0.10.0) (2022-07-21)

### Features

- remove all deprecated styles ([#2862](https://github.com/cultureamp/kaizen-design-system/issues/2862)) ([dd1819b](https://github.com/cultureamp/kaizen-design-system/commit/dd1819b83750a0aaa43ef35b807a30cb4ef30c42))

## [0.9.17](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.9.16...@kaizen/notification@0.9.17) (2022-07-20)

**Note:** Version bump only for package @kaizen/notification

## [0.9.16](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.9.15...@kaizen/notification@0.9.16) (2022-06-29)

### Bug Fixes

- Update styles to use import instead of require ([#2840](https://github.com/cultureamp/kaizen-design-system/issues/2840)) ([5b49adb](https://github.com/cultureamp/kaizen-design-system/commit/5b49adb5b0c9ebb952e9c5dce1219fc7a9930056))

## [0.9.15](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.9.14...@kaizen/notification@0.9.15) (2022-06-23)

**Note:** Version bump only for package @kaizen/notification

## [0.9.14](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.9.13...@kaizen/notification@0.9.14) (2022-06-22)

**Note:** Version bump only for package @kaizen/notification

## [0.9.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.9.12...@kaizen/notification@0.9.13) (2022-06-21)

**Note:** Version bump only for package @kaizen/notification

## [0.9.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.9.11...@kaizen/notification@0.9.12) (2022-06-21)

**Note:** Version bump only for package @kaizen/notification

## [0.9.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.9.10...@kaizen/notification@0.9.11) (2022-06-21)

**Note:** Version bump only for package @kaizen/notification

## [0.9.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.9.9...@kaizen/notification@0.9.10) (2022-06-21)

**Note:** Version bump only for package @kaizen/notification

## [0.9.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.9.8...@kaizen/notification@0.9.9) (2022-06-20)

**Note:** Version bump only for package @kaizen/notification

## [0.9.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.9.7...@kaizen/notification@0.9.8) (2022-06-20)

**Note:** Version bump only for package @kaizen/notification

## [0.9.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.9.6...@kaizen/notification@0.9.7) (2022-06-16)

**Note:** Version bump only for package @kaizen/notification

## [0.9.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.9.5...@kaizen/notification@0.9.6) (2022-06-09)

**Note:** Version bump only for package @kaizen/notification

## [0.9.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.9.4...@kaizen/notification@0.9.5) (2022-05-30)

**Note:** Version bump only for package @kaizen/notification

## [0.9.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.9.3...@kaizen/notification@0.9.4) (2022-05-30)

**Note:** Version bump only for package @kaizen/notification

## [0.9.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.9.2...@kaizen/notification@0.9.3) (2022-05-30)

**Note:** Version bump only for package @kaizen/notification

## [0.9.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.9.1...@kaizen/notification@0.9.2) (2022-05-30)

**Note:** Version bump only for package @kaizen/notification

## [0.9.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.9.0...@kaizen/notification@0.9.1) (2022-05-24)

**Note:** Version bump only for package @kaizen/notification

# [0.9.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.8.12...@kaizen/notification@0.9.0) (2022-05-20)

### Features

- add compatibility for react-18 ([#2731](https://github.com/cultureamp/kaizen-design-system/issues/2731)) ([0051f4c](https://github.com/cultureamp/kaizen-design-system/commit/0051f4cee82895acc2c2f44fc7bf8063857de57e))

## [0.8.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.8.11...@kaizen/notification@0.8.12) (2022-05-19)

**Note:** Version bump only for package @kaizen/notification

## [0.8.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.8.10...@kaizen/notification@0.8.11) (2022-05-19)

**Note:** Version bump only for package @kaizen/notification

## [0.8.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.8.9...@kaizen/notification@0.8.10) (2022-05-12)

**Note:** Version bump only for package @kaizen/notification

## [0.8.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.8.8...@kaizen/notification@0.8.9) (2022-05-11)

**Note:** Version bump only for package @kaizen/notification

## [0.8.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.8.7...@kaizen/notification@0.8.8) (2022-05-04)

**Note:** Version bump only for package @kaizen/notification

## [0.8.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.8.6...@kaizen/notification@0.8.7) (2022-05-03)

**Note:** Version bump only for package @kaizen/notification

## [0.8.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.8.5...@kaizen/notification@0.8.6) (2022-05-02)

**Note:** Version bump only for package @kaizen/notification

## [0.8.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.8.4...@kaizen/notification@0.8.5) (2022-04-29)

**Note:** Version bump only for package @kaizen/notification

## [0.8.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.8.3...@kaizen/notification@0.8.4) (2022-04-27)

**Note:** Version bump only for package @kaizen/notification

## [0.8.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.8.2...@kaizen/notification@0.8.3) (2022-04-27)

**Note:** Version bump only for package @kaizen/notification

## [0.8.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.8.1...@kaizen/notification@0.8.2) (2022-04-22)

**Note:** Version bump only for package @kaizen/notification

## [0.8.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.8.0...@kaizen/notification@0.8.1) (2022-04-14)

**Note:** Version bump only for package @kaizen/notification

# [0.8.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.7.12...@kaizen/notification@0.8.0) (2022-04-13)

### Features

- remove elm related files, styles and config from Kaizen ([#2686](https://github.com/cultureamp/kaizen-design-system/issues/2686)) ([2fdf913](https://github.com/cultureamp/kaizen-design-system/commit/2fdf913dd4221d10e91cea2bb88208faf958efcc))

### BREAKING CHANGES

-     * remove .elm files
  - remove Elm specific .scss files
  - remove Elm specific package folders
  - remove Elm config and devDependencies on Elm
  - remove Elm specific classes and declarations from modal stylesheets
  - update documentation on Elm

## [0.7.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.7.11...@kaizen/notification@0.7.12) (2022-04-03)

**Note:** Version bump only for package @kaizen/notification

## [0.7.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.7.10...@kaizen/notification@0.7.11) (2022-04-01)

**Note:** Version bump only for package @kaizen/notification

## [0.7.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.7.9...@kaizen/notification@0.7.10) (2022-03-31)

**Note:** Version bump only for package @kaizen/notification

## [0.7.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.7.8...@kaizen/notification@0.7.9) (2022-03-31)

**Note:** Version bump only for package @kaizen/notification

## [0.7.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.7.7...@kaizen/notification@0.7.8) (2022-03-30)

**Note:** Version bump only for package @kaizen/notification

## [0.7.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.7.6...@kaizen/notification@0.7.7) (2022-03-29)

**Note:** Version bump only for package @kaizen/notification

## [0.7.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.7.5...@kaizen/notification@0.7.6) (2022-03-23)

**Note:** Version bump only for package @kaizen/notification

## [0.7.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.7.4...@kaizen/notification@0.7.5) (2022-03-22)

**Note:** Version bump only for package @kaizen/notification

## [0.7.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.7.3...@kaizen/notification@0.7.4) (2022-03-21)

**Note:** Version bump only for package @kaizen/notification

## [0.7.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.7.2...@kaizen/notification@0.7.3) (2022-03-18)

**Note:** Version bump only for package @kaizen/notification

## [0.7.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.7.1...@kaizen/notification@0.7.2) (2022-03-17)

**Note:** Version bump only for package @kaizen/notification

## [0.7.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.7.0...@kaizen/notification@0.7.1) (2022-03-17)

**Note:** Version bump only for package @kaizen/notification

# [0.7.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.6.17...@kaizen/notification@0.7.0) (2022-03-16)

### Features

- rename `classNameAndIHaveSpokenToDST` to `classNameOverride` ([#2623](https://github.com/cultureamp/kaizen-design-system/issues/2623)) ([0ad2710](https://github.com/cultureamp/kaizen-design-system/commit/0ad2710f5e4b9a9d6b5a40ae72741a88669792c1))

### BREAKING CHANGES

- `classNameAndIHaveSpokenToDST` renamed to `classNameOverride`

## [0.6.17](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.6.16...@kaizen/notification@0.6.17) (2022-03-16)

**Note:** Version bump only for package @kaizen/notification

## [0.6.16](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.6.15...@kaizen/notification@0.6.16) (2022-03-16)

**Note:** Version bump only for package @kaizen/notification

## [0.6.15](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.6.14...@kaizen/notification@0.6.15) (2022-03-09)

**Note:** Version bump only for package @kaizen/notification

## [0.6.14](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.6.13...@kaizen/notification@0.6.14) (2022-03-09)

**Note:** Version bump only for package @kaizen/notification

## [0.6.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.6.12...@kaizen/notification@0.6.13) (2022-03-07)

**Note:** Version bump only for package @kaizen/notification

## [0.6.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.6.11...@kaizen/notification@0.6.12) (2022-03-07)

**Note:** Version bump only for package @kaizen/notification

## [0.6.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.6.10...@kaizen/notification@0.6.11) (2022-03-07)

**Note:** Version bump only for package @kaizen/notification

## [0.6.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.6.9...@kaizen/notification@0.6.10) (2022-03-03)

**Note:** Version bump only for package @kaizen/notification

## [0.6.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.6.8...@kaizen/notification@0.6.9) (2022-03-01)

**Note:** Version bump only for package @kaizen/notification

## [0.6.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.6.7...@kaizen/notification@0.6.8) (2022-03-01)

**Note:** Version bump only for package @kaizen/notification

## [0.6.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.6.6...@kaizen/notification@0.6.7) (2022-02-28)

**Note:** Version bump only for package @kaizen/notification

## [0.6.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.6.5...@kaizen/notification@0.6.6) (2022-02-28)

**Note:** Version bump only for package @kaizen/notification

## [0.6.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.6.4...@kaizen/notification@0.6.5) (2022-02-22)

**Note:** Version bump only for package @kaizen/notification

## [0.6.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.6.3...@kaizen/notification@0.6.4) (2022-02-18)

**Note:** Version bump only for package @kaizen/notification

## [0.6.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.6.2...@kaizen/notification@0.6.3) (2022-02-17)

**Note:** Version bump only for package @kaizen/notification

## [0.6.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.6.1...@kaizen/notification@0.6.2) (2022-02-15)

**Note:** Version bump only for package @kaizen/notification

## [0.6.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.6.0...@kaizen/notification@0.6.1) (2022-02-11)

**Note:** Version bump only for package @kaizen/notification

# [0.6.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.5.6...@kaizen/notification@0.6.0) (2022-02-10)

### Features

- Updated the allowable React version range to include React 17 ([#2521](https://github.com/cultureamp/kaizen-design-system/issues/2521)) ([0889ae8](https://github.com/cultureamp/kaizen-design-system/commit/0889ae82cc2836fe606957cd1f39a2eb94df00c1))

## [0.5.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.5.5...@kaizen/notification@0.5.6) (2022-02-09)

**Note:** Version bump only for package @kaizen/notification

## [0.5.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.5.4...@kaizen/notification@0.5.5) (2022-02-09)

**Note:** Version bump only for package @kaizen/notification

## [0.5.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.5.3...@kaizen/notification@0.5.4) (2022-02-02)

**Note:** Version bump only for package @kaizen/notification

## [0.5.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.5.2...@kaizen/notification@0.5.3) (2022-02-02)

**Note:** Version bump only for package @kaizen/notification

## [0.5.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.5.1...@kaizen/notification@0.5.2) (2022-02-02)

**Note:** Version bump only for package @kaizen/notification

## [0.5.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.5.0...@kaizen/notification@0.5.1) (2022-01-27)

**Note:** Version bump only for package @kaizen/notification

# [0.5.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.4.5...@kaizen/notification@0.5.0) (2022-01-24)

### Features

- Bump design-tokens in peer dependencies to include v6 ([#2412](https://github.com/cultureamp/kaizen-design-system/issues/2412)) ([fbbfa80](https://github.com/cultureamp/kaizen-design-system/commit/fbbfa80d334db9311b228568b5632cb2f8022136))

## [0.4.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.4.4...@kaizen/notification@0.4.5) (2022-01-19)

**Note:** Version bump only for package @kaizen/notification

## [0.4.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.4.3...@kaizen/notification@0.4.4) (2022-01-19)

**Note:** Version bump only for package @kaizen/notification

## [0.4.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.4.2...@kaizen/notification@0.4.3) (2022-01-10)

**Note:** Version bump only for package @kaizen/notification

## [0.4.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.4.1...@kaizen/notification@0.4.2) (2022-01-06)

**Note:** Version bump only for package @kaizen/notification

## [0.4.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.4.0...@kaizen/notification@0.4.1) (2022-01-04)

**Note:** Version bump only for package @kaizen/notification

# [0.4.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.3.19...@kaizen/notification@0.4.0) (2021-12-16)

### Features

- Add new variants to Global Notification [KDS-49] ([#2349](https://github.com/cultureamp/kaizen-design-system/issues/2349)) ([5fe2650](https://github.com/cultureamp/kaizen-design-system/commit/5fe2650ff6d34e36906f83d706fad75f507f4872))

### BREAKING CHANGES

- The `affirmative` variant is now called `positive`

## [0.3.19](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.3.18...@kaizen/notification@0.3.19) (2021-12-13)

**Note:** Version bump only for package @kaizen/notification

## [0.3.18](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.3.17...@kaizen/notification@0.3.18) (2021-12-13)

**Note:** Version bump only for package @kaizen/notification

## [0.3.17](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.3.16...@kaizen/notification@0.3.17) (2021-12-09)

**Note:** Version bump only for package @kaizen/notification

## [0.3.16](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.3.15...@kaizen/notification@0.3.16) (2021-12-08)

**Note:** Version bump only for package @kaizen/notification

## [0.3.15](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.3.14...@kaizen/notification@0.3.15) (2021-12-02)

**Note:** Version bump only for package @kaizen/notification

## [0.3.14](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.3.13...@kaizen/notification@0.3.14) (2021-12-02)

**Note:** Version bump only for package @kaizen/notification

## [0.3.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.3.12...@kaizen/notification@0.3.13) (2021-11-30)

**Note:** Version bump only for package @kaizen/notification

## [0.3.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.3.11...@kaizen/notification@0.3.12) (2021-11-29)

**Note:** Version bump only for package @kaizen/notification

## [0.3.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.3.10...@kaizen/notification@0.3.11) (2021-11-15)

**Note:** Version bump only for package @kaizen/notification

## [0.3.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.3.9...@kaizen/notification@0.3.10) (2021-11-09)

**Note:** Version bump only for package @kaizen/notification

## [0.3.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.3.8...@kaizen/notification@0.3.9) (2021-11-05)

**Note:** Version bump only for package @kaizen/notification

## [0.3.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.3.7...@kaizen/notification@0.3.8) (2021-11-02)

**Note:** Version bump only for package @kaizen/notification

## [0.3.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.3.6...@kaizen/notification@0.3.7) (2021-10-31)

**Note:** Version bump only for package @kaizen/notification

## [0.3.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.3.5...@kaizen/notification@0.3.6) (2021-10-26)

### Bug Fixes

- Update snapshots after removing IDs from Icon ([#2125](https://github.com/cultureamp/kaizen-design-system/issues/2125)) ([be4a5c8](https://github.com/cultureamp/kaizen-design-system/commit/be4a5c8ccb588bee660868f04bb5910547196121))

## [0.3.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.3.4...@kaizen/notification@0.3.5) (2021-10-26)

**Note:** Version bump only for package @kaizen/notification

## [0.3.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.3.3...@kaizen/notification@0.3.4) (2021-10-25)

**Note:** Version bump only for package @kaizen/notification

## [0.3.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.3.2...@kaizen/notification@0.3.3) (2021-10-22)

**Note:** Version bump only for package @kaizen/notification

## [0.3.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.3.1...@kaizen/notification@0.3.2) (2021-10-22)

**Note:** Version bump only for package @kaizen/notification

## [0.3.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.3.0...@kaizen/notification@0.3.1) (2021-10-21)

**Note:** Version bump only for package @kaizen/notification

# [0.3.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.2.7...@kaizen/notification@0.3.0) (2021-10-18)

### Features

- stylelint plugin to switch from super legacy component-library styles to equivalent deprecated-component-library-helpers ones ([#1740](https://github.com/cultureamp/kaizen-design-system/issues/1740)) ([cacfc8b](https://github.com/cultureamp/kaizen-design-system/commit/cacfc8b6c364c62b4f53d5025e7eddeb26a35929))

## [0.2.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.2.6...@kaizen/notification@0.2.7) (2021-10-15)

**Note:** Version bump only for package @kaizen/notification

## [0.2.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.2.5...@kaizen/notification@0.2.6) (2021-10-14)

**Note:** Version bump only for package @kaizen/notification

## [0.2.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.2.4...@kaizen/notification@0.2.5) (2021-10-12)

**Note:** Version bump only for package @kaizen/notification

## [0.2.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.2.3...@kaizen/notification@0.2.4) (2021-10-07)

**Note:** Version bump only for package @kaizen/notification

## [0.2.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.2.2...@kaizen/notification@0.2.3) (2021-09-28)

### Bug Fixes

- a11Y change for aria label on hidden for undefined ([#1976](https://github.com/cultureamp/kaizen-design-system/issues/1976)) ([02ddae0](https://github.com/cultureamp/kaizen-design-system/commit/02ddae0645e87e544be366bc64c18ceec3b1f94a))

## [0.2.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.2.1...@kaizen/notification@0.2.2) (2021-09-28)

**Note:** Version bump only for package @kaizen/notification

## [0.2.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.2.0...@kaizen/notification@0.2.1) (2021-09-23)

**Note:** Version bump only for package @kaizen/notification

# [0.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.1.1...@kaizen/notification@0.2.0) (2021-09-22)

### Features

- Remove all usages of var() in scss to provide Zen fallbacks ([#1960](https://github.com/cultureamp/kaizen-design-system/issues/1960)) ([49fcf67](https://github.com/cultureamp/kaizen-design-system/commit/49fcf67d58ea700c8b9b483a2b02b0a0777a3a1a))

## [0.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/notification@0.1.0...@kaizen/notification@0.1.1) (2021-08-31)

**Note:** Version bump only for package @kaizen/notification

# 0.1.0 (2021-08-30)

### Features

- Move notification components out of component-library ([#1901](https://github.com/cultureamp/kaizen-design-system/issues/1901)) ([849a5f9](https://github.com/cultureamp/kaizen-design-system/commit/849a5f910988c8dd7f55364d0edc1f97bdab8ce1))

### BREAKING CHANGES

- You will need update imports of the following components from @kaizen/component-library to @kaizen/notification:

* InlineNotification
* GlobalNotification
* ToastNotification
* addToastNotification/clearToastNotifications/removeToastNotification

Elm imports will need to change from `import Notification.Notification` to `import Kaizen.Notification`
