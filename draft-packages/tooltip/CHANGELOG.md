# Change Log

## 5.4.47

### Patch Changes

- [#3806](https://github.com/cultureamp/kaizen-design-system/pull/3806) [`c8cf582b9`](https://github.com/cultureamp/kaizen-design-system/commit/c8cf582b99c7f9644bf73ef2902c49461f23dd7e) - Updates tooltip to pass accessible descriptions only into native or custom semantic components and only when in the DOM

  - aria-describedby should not be attach to non semantic elements, ie: div and spans
  - id for aria-describedby is undefined until the tooltip is in the dom
  - This will stop the a11y error of pointing to an id of an element that does exists
  - Increases test coverage to validate semantic elements of the tooltip with receive aria-describedby
  - Moves tooltip animation tests to separate file so mock does not interfere with return value

- [#3815](https://github.com/cultureamp/kaizen-design-system/pull/3815) [`52e3d1f44`](https://github.com/cultureamp/kaizen-design-system/commit/52e3d1f441765f409ddb5c98dce1e407b707be0a) - Update dependencies
  - update to prettier v3 cause minor linting changes
  - update to prettier v3 required minor type fixes for format function in design-tokens
- Updated dependencies [[`52e3d1f44`](https://github.com/cultureamp/kaizen-design-system/commit/52e3d1f441765f409ddb5c98dce1e407b707be0a)]:
  - @kaizen/component-library@16.9.3

## 5.4.46

### Patch Changes

- [#3678](https://github.com/cultureamp/kaizen-design-system/pull/3678) [`d434bda3e`](https://github.com/cultureamp/kaizen-design-system/commit/d434bda3e5d520c71899d30dabdba02f97d911a0) - Dependency upgrades

- Updated dependencies [[`959541e4d`](https://github.com/cultureamp/kaizen-design-system/commit/959541e4dc02655577dfee98931e84df2c079576)]:
  - @kaizen/component-library@16.9.0

## 5.4.45

### Patch Changes

- [#3677](https://github.com/cultureamp/kaizen-design-system/pull/3677) [`06c48bb35`](https://github.com/cultureamp/kaizen-design-system/commit/06c48bb3593cd348c393369b6bc17d04a997c9e0) - Bump outdated `component-library` and `draft-form` dependencies to latest

## 5.4.44

### Patch Changes

- [#3621](https://github.com/cultureamp/kaizen-design-system/pull/3621) [`4967215eb`](https://github.com/cultureamp/kaizen-design-system/commit/4967215eb05298f69dbdf8e9cb44f4e0665e7d8f) - Fix files whitelist to include scss files

- Updated dependencies [[`4967215eb`](https://github.com/cultureamp/kaizen-design-system/commit/4967215eb05298f69dbdf8e9cb44f4e0665e7d8f)]:
  - @kaizen/component-library@16.7.6

## 5.4.43

### Patch Changes

- [#3595](https://github.com/cultureamp/kaizen-design-system/pull/3595) [`0e0750e87`](https://github.com/cultureamp/kaizen-design-system/commit/0e0750e872e3381420df7bf2947d9deb9db8b705) - Remove .turbo from distributed files

- [#3616](https://github.com/cultureamp/kaizen-design-system/pull/3616) [`e4f5f5ce5`](https://github.com/cultureamp/kaizen-design-system/commit/e4f5f5ce50b4e1a4aa8b189c247d0f2a8fea722f) - Fix packagejson files whitelist to only include publish files

- [#3611](https://github.com/cultureamp/kaizen-design-system/pull/3611) [`589244ad0`](https://github.com/cultureamp/kaizen-design-system/commit/589244ad0c307edca845d19843f2db282050fe29) - Fix supported design-tokens versions

- Updated dependencies [[`0e0750e87`](https://github.com/cultureamp/kaizen-design-system/commit/0e0750e872e3381420df7bf2947d9deb9db8b705), [`e4f5f5ce5`](https://github.com/cultureamp/kaizen-design-system/commit/e4f5f5ce50b4e1a4aa8b189c247d0f2a8fea722f), [`589244ad0`](https://github.com/cultureamp/kaizen-design-system/commit/589244ad0c307edca845d19843f2db282050fe29)]:
  - @kaizen/component-library@16.7.5

## 5.4.42

### Patch Changes

- [#3608](https://github.com/cultureamp/kaizen-design-system/pull/3608) [`cc96d9835`](https://github.com/cultureamp/kaizen-design-system/commit/cc96d98351ae380fe1a1e8a33d65d80232ed7a57) - Update usages of classnames to not use object syntax

- Updated dependencies [[`cc96d9835`](https://github.com/cultureamp/kaizen-design-system/commit/cc96d98351ae380fe1a1e8a33d65d80232ed7a57)]:
  - @kaizen/component-library@16.7.4
  - @kaizen/design-tokens@10.3.7

## 5.4.41

### Patch Changes

- [#3593](https://github.com/cultureamp/kaizen-design-system/pull/3593) [`acb0fdf3d`](https://github.com/cultureamp/kaizen-design-system/commit/acb0fdf3de2c1e852971b30fa0db4691e2a4ad0d) - Update dependencies:
  - `use-debounce` to `^9.0.4`
- Updated dependencies [[`739d87b0c`](https://github.com/cultureamp/kaizen-design-system/commit/739d87b0cd917e7c0f3becf2cc0fd8f9667f7a6c), [`739d87b0c`](https://github.com/cultureamp/kaizen-design-system/commit/739d87b0cd917e7c0f3becf2cc0fd8f9667f7a6c)]:
  - @kaizen/component-library@16.7.3
  - @kaizen/design-tokens@10.3.6

## 5.4.40

### Patch Changes

- [#3536](https://github.com/cultureamp/kaizen-design-system/pull/3536) [`82ba2fa0d`](https://github.com/cultureamp/kaizen-design-system/commit/82ba2fa0d20c66a1688d2609d4bd7775b129349c) - - enforced no-implicit-any across kaizen

- Updated dependencies [[`82ba2fa0d`](https://github.com/cultureamp/kaizen-design-system/commit/82ba2fa0d20c66a1688d2609d4bd7775b129349c)]:
  - @kaizen/component-library@16.7.1

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [5.4.39](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.38...@kaizen/draft-tooltip@5.4.39) (2023-04-06)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.38](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.37...@kaizen/draft-tooltip@5.4.38) (2023-04-05)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.37](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.36...@kaizen/draft-tooltip@5.4.37) (2023-03-29)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.36](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.35...@kaizen/draft-tooltip@5.4.36) (2023-03-29)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.35](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.34...@kaizen/draft-tooltip@5.4.35) (2023-03-23)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.34](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.33...@kaizen/draft-tooltip@5.4.34) (2023-03-22)

### Bug Fixes

- Tooltip named export ([#3373](https://github.com/cultureamp/kaizen-design-system/issues/3373)) ([f212750](https://github.com/cultureamp/kaizen-design-system/commit/f212750e6ecfb369b8375eb2bc66a416bbb8a082))

## [5.4.33](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.32...@kaizen/draft-tooltip@5.4.33) (2023-03-22)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.32](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.31...@kaizen/draft-tooltip@5.4.32) (2023-03-14)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.31](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.30...@kaizen/draft-tooltip@5.4.31) (2023-03-02)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.30](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.29...@kaizen/draft-tooltip@5.4.30) (2023-03-02)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.29](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.28...@kaizen/draft-tooltip@5.4.29) (2023-03-02)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.28](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.27...@kaizen/draft-tooltip@5.4.28) (2023-02-23)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.27](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.26...@kaizen/draft-tooltip@5.4.27) (2023-02-23)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.26](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.25...@kaizen/draft-tooltip@5.4.26) (2023-02-22)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.25](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.24...@kaizen/draft-tooltip@5.4.25) (2023-02-09)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.24](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.23...@kaizen/draft-tooltip@5.4.24) (2023-02-01)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.23](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.22...@kaizen/draft-tooltip@5.4.23) (2023-01-30)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.22](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.21...@kaizen/draft-tooltip@5.4.22) (2023-01-23)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.21](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.20...@kaizen/draft-tooltip@5.4.21) (2023-01-18)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.20](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.19...@kaizen/draft-tooltip@5.4.20) (2023-01-04)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.19](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.18...@kaizen/draft-tooltip@5.4.19) (2023-01-04)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.18](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.17...@kaizen/draft-tooltip@5.4.18) (2023-01-03)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.17](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.16...@kaizen/draft-tooltip@5.4.17) (2022-12-01)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.16](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.15...@kaizen/draft-tooltip@5.4.16) (2022-11-25)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.15](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.14...@kaizen/draft-tooltip@5.4.15) (2022-11-17)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.14](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.13...@kaizen/draft-tooltip@5.4.14) (2022-11-13)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.12...@kaizen/draft-tooltip@5.4.13) (2022-11-10)

### Bug Fixes

- **deps:** update dependency uuid to v9 ([#3025](https://github.com/cultureamp/kaizen-design-system/issues/3025)) ([46c513c](https://github.com/cultureamp/kaizen-design-system/commit/46c513c8b84fd48e57f2bf3f7802a06c018366ce))

## [5.4.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.11...@kaizen/draft-tooltip@5.4.12) (2022-11-09)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.10...@kaizen/draft-tooltip@5.4.11) (2022-11-01)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.9...@kaizen/draft-tooltip@5.4.10) (2022-10-31)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.8...@kaizen/draft-tooltip@5.4.9) (2022-10-26)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.7...@kaizen/draft-tooltip@5.4.8) (2022-10-24)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.6...@kaizen/draft-tooltip@5.4.7) (2022-10-20)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.5...@kaizen/draft-tooltip@5.4.6) (2022-10-19)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.4...@kaizen/draft-tooltip@5.4.5) (2022-09-30)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.3...@kaizen/draft-tooltip@5.4.4) (2022-09-14)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.2...@kaizen/draft-tooltip@5.4.3) (2022-09-05)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.1...@kaizen/draft-tooltip@5.4.2) (2022-09-02)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.4.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.4.0...@kaizen/draft-tooltip@5.4.1) (2022-08-19)

**Note:** Version bump only for package @kaizen/draft-tooltip

# [5.4.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.3.0...@kaizen/draft-tooltip@5.4.0) (2022-08-18)

### Features

- update react to 16.14.0 ([#2922](https://github.com/cultureamp/kaizen-design-system/issues/2922)) ([22878be](https://github.com/cultureamp/kaizen-design-system/commit/22878beee1884e2f58d0447b3908321937175228))

# [5.3.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.2.19...@kaizen/draft-tooltip@5.3.0) (2022-08-04)

### Features

- **tooltip:** allow consumer to override animation duration through … ([#2889](https://github.com/cultureamp/kaizen-design-system/issues/2889)) ([d6659ee](https://github.com/cultureamp/kaizen-design-system/commit/d6659ee78bd446a660b73da535e07ed118a427a2)), closes [#2887](https://github.com/cultureamp/kaizen-design-system/issues/2887) [#2888](https://github.com/cultureamp/kaizen-design-system/issues/2888) [#2890](https://github.com/cultureamp/kaizen-design-system/issues/2890)

## [5.2.19](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.2.18...@kaizen/draft-tooltip@5.2.19) (2022-08-01)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.2.18](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.2.17...@kaizen/draft-tooltip@5.2.18) (2022-07-27)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.2.17](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.2.16...@kaizen/draft-tooltip@5.2.17) (2022-07-27)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.2.16](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.2.15...@kaizen/draft-tooltip@5.2.16) (2022-07-27)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.2.15](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.2.14...@kaizen/draft-tooltip@5.2.15) (2022-07-26)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.2.14](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.2.13...@kaizen/draft-tooltip@5.2.14) (2022-07-22)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.2.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.2.12...@kaizen/draft-tooltip@5.2.13) (2022-07-21)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.2.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.2.11...@kaizen/draft-tooltip@5.2.12) (2022-07-20)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.2.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.2.10...@kaizen/draft-tooltip@5.2.11) (2022-06-22)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.2.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.2.9...@kaizen/draft-tooltip@5.2.10) (2022-06-21)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.2.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.2.8...@kaizen/draft-tooltip@5.2.9) (2022-06-21)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.2.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.2.7...@kaizen/draft-tooltip@5.2.8) (2022-06-21)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.2.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.2.6...@kaizen/draft-tooltip@5.2.7) (2022-06-20)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.2.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.2.5...@kaizen/draft-tooltip@5.2.6) (2022-06-16)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.2.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.2.4...@kaizen/draft-tooltip@5.2.5) (2022-06-09)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.2.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.2.3...@kaizen/draft-tooltip@5.2.4) (2022-05-30)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.2.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.2.2...@kaizen/draft-tooltip@5.2.3) (2022-05-30)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.2.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.2.1...@kaizen/draft-tooltip@5.2.2) (2022-05-30)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.2.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.1.1...@kaizen/draft-tooltip@5.2.1) (2022-05-24)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.1.0...@kaizen/draft-tooltip@5.1.1) (2022-05-24)

**Note:** Version bump only for package @kaizen/draft-tooltip

# [5.1.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.0.9...@kaizen/draft-tooltip@5.1.0) (2022-05-20)

### Features

- add compatibility for react-18 ([#2731](https://github.com/cultureamp/kaizen-design-system/issues/2731)) ([0051f4c](https://github.com/cultureamp/kaizen-design-system/commit/0051f4cee82895acc2c2f44fc7bf8063857de57e))

## [5.0.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.0.8...@kaizen/draft-tooltip@5.0.9) (2022-05-19)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.0.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.0.7...@kaizen/draft-tooltip@5.0.8) (2022-05-19)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.0.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.0.6...@kaizen/draft-tooltip@5.0.7) (2022-05-11)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.0.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.0.5...@kaizen/draft-tooltip@5.0.6) (2022-05-03)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.0.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.0.4...@kaizen/draft-tooltip@5.0.5) (2022-05-02)

### Bug Fixes

- **deps:** update dependency use-debounce to v8 ([#2707](https://github.com/cultureamp/kaizen-design-system/issues/2707)) ([27203c5](https://github.com/cultureamp/kaizen-design-system/commit/27203c53b49d8c2fbe4998412f12aadbe96c0140))

## [5.0.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.0.3...@kaizen/draft-tooltip@5.0.4) (2022-04-29)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.0.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.0.2...@kaizen/draft-tooltip@5.0.3) (2022-04-27)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.0.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.0.1...@kaizen/draft-tooltip@5.0.2) (2022-04-27)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [5.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@5.0.0...@kaizen/draft-tooltip@5.0.1) (2022-04-14)

**Note:** Version bump only for package @kaizen/draft-tooltip

# [5.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@4.0.9...@kaizen/draft-tooltip@5.0.0) (2022-04-13)

### Features

- remove elm related files, styles and config from Kaizen ([#2686](https://github.com/cultureamp/kaizen-design-system/issues/2686)) ([2fdf913](https://github.com/cultureamp/kaizen-design-system/commit/2fdf913dd4221d10e91cea2bb88208faf958efcc))

### BREAKING CHANGES

-     * remove .elm files
  - remove Elm specific .scss files
  - remove Elm specific package folders
  - remove Elm config and devDependencies on Elm
  - remove Elm specific classes and declarations from modal stylesheets
  - update documentation on Elm

## [4.0.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@4.0.8...@kaizen/draft-tooltip@4.0.9) (2022-04-03)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [4.0.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@4.0.7...@kaizen/draft-tooltip@4.0.8) (2022-03-31)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [4.0.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@4.0.6...@kaizen/draft-tooltip@4.0.7) (2022-03-30)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [4.0.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@4.0.5...@kaizen/draft-tooltip@4.0.6) (2022-03-29)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [4.0.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@4.0.4...@kaizen/draft-tooltip@4.0.5) (2022-03-22)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [4.0.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@4.0.3...@kaizen/draft-tooltip@4.0.4) (2022-03-21)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [4.0.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@4.0.2...@kaizen/draft-tooltip@4.0.3) (2022-03-18)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [4.0.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@4.0.1...@kaizen/draft-tooltip@4.0.2) (2022-03-17)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [4.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@4.0.0...@kaizen/draft-tooltip@4.0.1) (2022-03-17)

**Note:** Version bump only for package @kaizen/draft-tooltip

# [4.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.7.11...@kaizen/draft-tooltip@4.0.0) (2022-03-16)

### Features

- rename `classNameAndIHaveSpokenToDST` to `classNameOverride` ([#2623](https://github.com/cultureamp/kaizen-design-system/issues/2623)) ([0ad2710](https://github.com/cultureamp/kaizen-design-system/commit/0ad2710f5e4b9a9d6b5a40ae72741a88669792c1))

### BREAKING CHANGES

- `classNameAndIHaveSpokenToDST` renamed to `classNameOverride`

## [3.7.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.7.10...@kaizen/draft-tooltip@3.7.11) (2022-03-16)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [3.7.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.7.9...@kaizen/draft-tooltip@3.7.10) (2022-03-16)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [3.7.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.7.8...@kaizen/draft-tooltip@3.7.9) (2022-03-09)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [3.7.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.7.7...@kaizen/draft-tooltip@3.7.8) (2022-03-07)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [3.7.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.7.6...@kaizen/draft-tooltip@3.7.7) (2022-03-07)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [3.7.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.7.5...@kaizen/draft-tooltip@3.7.6) (2022-03-07)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [3.7.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.7.4...@kaizen/draft-tooltip@3.7.5) (2022-03-01)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [3.7.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.7.3...@kaizen/draft-tooltip@3.7.4) (2022-03-01)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [3.7.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.7.2...@kaizen/draft-tooltip@3.7.3) (2022-02-28)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [3.7.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.7.1...@kaizen/draft-tooltip@3.7.2) (2022-02-28)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [3.7.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.7.0...@kaizen/draft-tooltip@3.7.1) (2022-02-17)

**Note:** Version bump only for package @kaizen/draft-tooltip

# [3.7.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.6.2...@kaizen/draft-tooltip@3.7.0) (2022-02-15)

### Features

- Install eslint-plugin-jsx-a11y ([#2527](https://github.com/cultureamp/kaizen-design-system/issues/2527)) ([f106089](https://github.com/cultureamp/kaizen-design-system/commit/f1060891a8771d61ec6329f9e854e15683b30382))

## [3.6.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.6.1...@kaizen/draft-tooltip@3.6.2) (2022-02-15)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [3.6.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.6.0...@kaizen/draft-tooltip@3.6.1) (2022-02-14)

**Note:** Version bump only for package @kaizen/draft-tooltip

# [3.6.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.5.0...@kaizen/draft-tooltip@3.6.0) (2022-02-10)

### Features

- Updated the allowable React version range to include React 17 ([#2521](https://github.com/cultureamp/kaizen-design-system/issues/2521)) ([0889ae8](https://github.com/cultureamp/kaizen-design-system/commit/0889ae82cc2836fe606957cd1f39a2eb94df00c1))

# [3.5.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.4.6...@kaizen/draft-tooltip@3.5.0) (2022-02-07)

### Features

- add highlight mood to tooltip ([#2512](https://github.com/cultureamp/kaizen-design-system/issues/2512)) ([fdaccca](https://github.com/cultureamp/kaizen-design-system/commit/fdacccae8fb9368a8509bc83a9558e0f219eacd3))

## [3.4.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.4.5...@kaizen/draft-tooltip@3.4.6) (2022-02-03)

### Bug Fixes

- **deps:** update dependency use-debounce to v7 ([#2485](https://github.com/cultureamp/kaizen-design-system/issues/2485)) ([fa2557d](https://github.com/cultureamp/kaizen-design-system/commit/fa2557d7598c254e3a909ac56304b0cf369e81d4))

## [3.4.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.4.4...@kaizen/draft-tooltip@3.4.5) (2022-02-02)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [3.4.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.4.3...@kaizen/draft-tooltip@3.4.4) (2022-02-02)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [3.4.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.4.2...@kaizen/draft-tooltip@3.4.3) (2022-01-31)

### Bug Fixes

- calc function syntax error ([#2495](https://github.com/cultureamp/kaizen-design-system/issues/2495)) ([8e507d9](https://github.com/cultureamp/kaizen-design-system/commit/8e507d97e3d53c79c0ea1aedf303099cfa769f7f))

## [3.4.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.4.1...@kaizen/draft-tooltip@3.4.2) (2022-01-28)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [3.4.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.4.0...@kaizen/draft-tooltip@3.4.1) (2022-01-27)

**Note:** Version bump only for package @kaizen/draft-tooltip

# [3.4.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.3.0...@kaizen/draft-tooltip@3.4.0) (2022-01-24)

### Features

- Bump design-tokens in peer dependencies to include v6 ([#2412](https://github.com/cultureamp/kaizen-design-system/issues/2412)) ([fbbfa80](https://github.com/cultureamp/kaizen-design-system/commit/fbbfa80d334db9311b228568b5632cb2f8022136))

# [3.3.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.2.0...@kaizen/draft-tooltip@3.3.0) (2022-01-21)

### Features

- Tooltip component uplift ([#2399](https://github.com/cultureamp/kaizen-design-system/issues/2399)) ([5aa8919](https://github.com/cultureamp/kaizen-design-system/commit/5aa891959b0535a29d20d3654b7d2770ace43934)), closes [#2386](https://github.com/cultureamp/kaizen-design-system/issues/2386) [#2389](https://github.com/cultureamp/kaizen-design-system/issues/2389)

# [3.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.1.10...@kaizen/draft-tooltip@3.2.0) (2022-01-19)

### Features

- Make kaizen prerendering friendly (nextjs related) ([#2406](https://github.com/cultureamp/kaizen-design-system/issues/2406)) ([b53bb11](https://github.com/cultureamp/kaizen-design-system/commit/b53bb118157c98874554bd565853797beb72e590))

## [3.1.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.1.9...@kaizen/draft-tooltip@3.1.10) (2022-01-10)

### Bug Fixes

- Chris/node engine support v16 ([#2365](https://github.com/cultureamp/kaizen-design-system/issues/2365)) ([366fa6d](https://github.com/cultureamp/kaizen-design-system/commit/366fa6d156d2a4a2b35b1356bbcf18adf2189f2b))

## [3.1.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.1.8...@kaizen/draft-tooltip@3.1.9) (2022-01-06)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [3.1.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.1.7...@kaizen/draft-tooltip@3.1.8) (2022-01-04)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [3.1.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.1.6...@kaizen/draft-tooltip@3.1.7) (2021-12-13)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [3.1.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.1.5...@kaizen/draft-tooltip@3.1.6) (2021-12-08)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [3.1.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.1.4...@kaizen/draft-tooltip@3.1.5) (2021-11-15)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [3.1.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.1.3...@kaizen/draft-tooltip@3.1.4) (2021-11-09)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [3.1.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.1.2...@kaizen/draft-tooltip@3.1.3) (2021-11-05)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [3.1.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.1.1...@kaizen/draft-tooltip@3.1.2) (2021-11-02)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [3.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.1.0...@kaizen/draft-tooltip@3.1.1) (2021-10-31)

**Note:** Version bump only for package @kaizen/draft-tooltip

# [3.1.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.0.3...@kaizen/draft-tooltip@3.1.0) (2021-10-27)

### Features

- Adjust Menu structure again to allow content separate from the list of items ([#2126](https://github.com/cultureamp/kaizen-design-system/issues/2126)) ([b56864b](https://github.com/cultureamp/kaizen-design-system/commit/b56864b6982232d4360352bcfc724fa1cc6c37e8))

## [3.0.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.0.2...@kaizen/draft-tooltip@3.0.3) (2021-10-26)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [3.0.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.0.1...@kaizen/draft-tooltip@3.0.2) (2021-10-26)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [3.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@3.0.0...@kaizen/draft-tooltip@3.0.1) (2021-10-25)

**Note:** Version bump only for package @kaizen/draft-tooltip

# [3.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.11.7...@kaizen/draft-tooltip@3.0.0) (2021-10-25)

### Features

- BREAKING CHANGE: complete restructure of Menu component for accessibility audit ([#2093](https://github.com/cultureamp/kaizen-design-system/issues/2093)) ([2a4f5a4](https://github.com/cultureamp/kaizen-design-system/commit/2a4f5a4ad1e5a947a064e70f840cadbaece45dbf))

### BREAKING CHANGES

No impact on Tooltip, only triggered due to a story change in a breaking change PR

## [2.11.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.11.6...@kaizen/draft-tooltip@2.11.7) (2021-10-22)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.11.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.11.5...@kaizen/draft-tooltip@2.11.6) (2021-10-18)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.11.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.11.4...@kaizen/draft-tooltip@2.11.5) (2021-10-15)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.11.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.11.3...@kaizen/draft-tooltip@2.11.4) (2021-10-14)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.11.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.11.2...@kaizen/draft-tooltip@2.11.3) (2021-09-28)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.11.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.11.1...@kaizen/draft-tooltip@2.11.2) (2021-09-28)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.11.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.11.0...@kaizen/draft-tooltip@2.11.1) (2021-09-23)

**Note:** Version bump only for package @kaizen/draft-tooltip

# [2.11.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.10.5...@kaizen/draft-tooltip@2.11.0) (2021-09-22)

### Features

- Remove all usages of var() in scss to provide Zen fallbacks ([#1960](https://github.com/cultureamp/kaizen-design-system/issues/1960)) ([49fcf67](https://github.com/cultureamp/kaizen-design-system/commit/49fcf67d58ea700c8b9b483a2b02b0a0777a3a1a))

## [2.10.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.10.4...@kaizen/draft-tooltip@2.10.5) (2021-08-30)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.10.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.10.3...@kaizen/draft-tooltip@2.10.4) (2021-08-24)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.10.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.10.2...@kaizen/draft-tooltip@2.10.3) (2021-08-20)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.10.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.10.1...@kaizen/draft-tooltip@2.10.2) (2021-08-17)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.10.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.10.0...@kaizen/draft-tooltip@2.10.1) (2021-08-17)

**Note:** Version bump only for package @kaizen/draft-tooltip

# [2.10.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.9.0...@kaizen/draft-tooltip@2.10.0) (2021-08-13)

### Features

- Bump design-tokens in peer dependencies to v3 ([#1840](https://github.com/cultureamp/kaizen-design-system/issues/1840)) ([ca45bf4](https://github.com/cultureamp/kaizen-design-system/commit/ca45bf4707b5fbf907163653549e17682c46f636))

# [2.9.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.8.15...@kaizen/draft-tooltip@2.9.0) (2021-08-11)

### Features

- Migrate scss to use new design-tokens ([#1813](https://github.com/cultureamp/kaizen-design-system/issues/1813)) ([ec777a3](https://github.com/cultureamp/kaizen-design-system/commit/ec777a306cec1988894a9518b43f5247d500aa7d))

## [2.8.15](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.8.14...@kaizen/draft-tooltip@2.8.15) (2021-08-09)

### Bug Fixes

- Bump peer versions of design-tokens everywhere ([#1823](https://github.com/cultureamp/kaizen-design-system/issues/1823)) ([65da761](https://github.com/cultureamp/kaizen-design-system/commit/65da761807b4d907a342b9bb4ed2bbbe40a06048))

## [2.8.14](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.8.13...@kaizen/draft-tooltip@2.8.14) (2021-08-09)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.8.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.8.12...@kaizen/draft-tooltip@2.8.13) (2021-08-02)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.8.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.8.11...@kaizen/draft-tooltip@2.8.12) (2021-08-02)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.8.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.8.10...@kaizen/draft-tooltip@2.8.11) (2021-08-02)

### Bug Fixes

- show tooltips in chromatic tests ([#1800](https://github.com/cultureamp/kaizen-design-system/issues/1800)) ([0b0ad08](https://github.com/cultureamp/kaizen-design-system/commit/0b0ad085abf2fe631e5399ee53095fcc2c36d100))

## [2.8.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.8.9...@kaizen/draft-tooltip@2.8.10) (2021-07-30)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.8.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.8.8...@kaizen/draft-tooltip@2.8.9) (2021-07-28)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.8.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.8.7...@kaizen/draft-tooltip@2.8.8) (2021-07-20)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.8.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.8.6...@kaizen/draft-tooltip@2.8.7) (2021-07-16)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.8.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.8.5...@kaizen/draft-tooltip@2.8.6) (2021-07-14)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.8.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.8.4...@kaizen/draft-tooltip@2.8.5) (2021-07-02)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.8.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.8.3...@kaizen/draft-tooltip@2.8.4) (2021-06-17)

### Bug Fixes

- elm tooltip heart uplift quick fix ([#1705](https://github.com/cultureamp/kaizen-design-system/issues/1705)) ([2f07ff6](https://github.com/cultureamp/kaizen-design-system/commit/2f07ff677645cc112db5bac6ec5408488eeaf45b))

## [2.8.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.8.2...@kaizen/draft-tooltip@2.8.3) (2021-06-11)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.8.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.8.1...@kaizen/draft-tooltip@2.8.2) (2021-06-02)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.8.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.8.0...@kaizen/draft-tooltip@2.8.1) (2021-05-25)

**Note:** Version bump only for package @kaizen/draft-tooltip

# [2.8.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.7.5...@kaizen/draft-tooltip@2.8.0) (2021-05-21)

### Features

- quickfix option for Elm Tooltip to not take up space ([#1611](https://github.com/cultureamp/kaizen-design-system/issues/1611)) ([21fddb6](https://github.com/cultureamp/kaizen-design-system/commit/21fddb639d070ead22d750834519b35052069e19))

## [2.7.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.7.4...@kaizen/draft-tooltip@2.7.5) (2021-05-17)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.7.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.7.3...@kaizen/draft-tooltip@2.7.4) (2021-05-17)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.7.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.7.2...@kaizen/draft-tooltip@2.7.3) (2021-05-17)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.7.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.7.1...@kaizen/draft-tooltip@2.7.2) (2021-05-16)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.7.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.7.0...@kaizen/draft-tooltip@2.7.1) (2021-05-13)

**Note:** Version bump only for package @kaizen/draft-tooltip

# [2.7.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.6.12...@kaizen/draft-tooltip@2.7.0) (2021-05-06)

### Features

- export TooltipProps ([#1549](https://github.com/cultureamp/kaizen-design-system/issues/1549)) ([c2d7956](https://github.com/cultureamp/kaizen-design-system/commit/c2d795622935a04025882cce00bb14c09cf0c560))

## [2.6.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.6.11...@kaizen/draft-tooltip@2.6.12) (2021-05-05)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.6.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.6.10...@kaizen/draft-tooltip@2.6.11) (2021-05-03)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.6.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.6.9...@kaizen/draft-tooltip@2.6.10) (2021-04-30)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.6.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.6.8...@kaizen/draft-tooltip@2.6.9) (2021-04-13)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.6.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.6.7...@kaizen/draft-tooltip@2.6.8) (2021-04-07)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.6.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.6.6...@kaizen/draft-tooltip@2.6.7) (2021-04-07)

### Bug Fixes

- bump tooltip z-index to a much higher value using layers vars, flatten DOM ([#1312](https://github.com/cultureamp/kaizen-design-system/issues/1312)) ([1d60a3c](https://github.com/cultureamp/kaizen-design-system/commit/1d60a3c175640f3c59978028c66140d78171fe92))

## [2.6.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.6.5...@kaizen/draft-tooltip@2.6.6) (2021-03-31)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.6.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.6.4...@kaizen/draft-tooltip@2.6.5) (2021-03-30)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.6.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.6.3...@kaizen/draft-tooltip@2.6.4) (2021-03-29)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.6.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.6.2...@kaizen/draft-tooltip@2.6.3) (2021-03-25)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.6.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.6.1...@kaizen/draft-tooltip@2.6.2) (2021-03-25)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.6.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.6.0...@kaizen/draft-tooltip@2.6.1) (2021-03-25)

**Note:** Version bump only for package @kaizen/draft-tooltip

# [2.6.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.5.7...@kaizen/draft-tooltip@2.6.0) (2021-03-23)

### Features

- Update tooltip to heart theme ([#1255](https://github.com/cultureamp/kaizen-design-system/issues/1255)) ([213dba1](https://github.com/cultureamp/kaizen-design-system/commit/213dba1676912a62f70b31d32d720eaa90a119bc))

## [2.5.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.5.6...@kaizen/draft-tooltip@2.5.7) (2021-03-22)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.5.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.5.5...@kaizen/draft-tooltip@2.5.6) (2021-03-22)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.5.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.5.4...@kaizen/draft-tooltip@2.5.5) (2021-03-17)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.5.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.5.3...@kaizen/draft-tooltip@2.5.4) (2021-03-15)

### Bug Fixes

- add deprecation warnings to ultra legacy style, type and layout mixins + remove internal usage ([#1046](https://github.com/cultureamp/kaizen-design-system/issues/1046)) ([893ba13](https://github.com/cultureamp/kaizen-design-system/commit/893ba134d49468dc1cda3ffd847a056cf4886071))

## [2.5.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.5.2...@kaizen/draft-tooltip@2.5.3) (2021-03-15)

### Bug Fixes

- upgrade to Elm 0.19.1 ([#1038](https://github.com/cultureamp/kaizen-design-system/issues/1038)) ([07cd9e4](https://github.com/cultureamp/kaizen-design-system/commit/07cd9e4039d5cacfc64f752e1d3a966507ebc377))

## [2.5.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.5.1...@kaizen/draft-tooltip@2.5.2) (2021-03-11)

### Bug Fixes

- Use named v4 import from uuid ([#1231](https://github.com/cultureamp/kaizen-design-system/issues/1231)) ([367d709](https://github.com/cultureamp/kaizen-design-system/commit/367d709fddc371875b133718f6aabce5a79f113d))

## [2.5.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.5.0...@kaizen/draft-tooltip@2.5.1) (2021-02-26)

**Note:** Version bump only for package @kaizen/draft-tooltip

# [2.5.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.4.4...@kaizen/draft-tooltip@2.5.0) (2021-02-25)

### Features

- Add automatic positioning for the Menu component, using popper ([#1110](https://github.com/cultureamp/kaizen-design-system/issues/1110)) ([aa1f289](https://github.com/cultureamp/kaizen-design-system/commit/aa1f2892364294fb5d959e3a57d3af910ac3f88f))

## [2.4.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.4.3...@kaizen/draft-tooltip@2.4.4) (2021-02-25)

### Bug Fixes

- Update minimum design-token dependency ([#1131](https://github.com/cultureamp/kaizen-design-system/issues/1131)) ([ce8182c](https://github.com/cultureamp/kaizen-design-system/commit/ce8182c054c9e8bc96bfdba8457bcd169d449204))

## [2.4.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.4.2...@kaizen/draft-tooltip@2.4.3) (2021-02-25)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.4.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.4.1...@kaizen/draft-tooltip@2.4.2) (2021-02-22)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.4.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.4.0...@kaizen/draft-tooltip@2.4.1) (2021-02-19)

**Note:** Version bump only for package @kaizen/draft-tooltip

# [2.4.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.3.1...@kaizen/draft-tooltip@2.4.0) (2021-02-18)

### Features

- Add portal support to Tooltip ([#1058](https://github.com/cultureamp/kaizen-design-system/issues/1058)) ([4926878](https://github.com/cultureamp/kaizen-design-system/commit/4926878cc7484979c75a3685579eaca857e6fdc9))

## [2.3.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.3.0...@kaizen/draft-tooltip@2.3.1) (2021-02-18)

**Note:** Version bump only for package @kaizen/draft-tooltip

# [2.3.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.2.13...@kaizen/draft-tooltip@2.3.0) (2021-02-16)

### Features

- Tooltip positioning improvements + allow it to work inside an `overflow: hidden` element ([#1041](https://github.com/cultureamp/kaizen-design-system/issues/1041)) ([2891f83](https://github.com/cultureamp/kaizen-design-system/commit/2891f83261bc8c3b4e350732fdbd92c3cc17b3f9))

## [2.2.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.2.12...@kaizen/draft-tooltip@2.2.13) (2021-02-15)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.2.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.2.11...@kaizen/draft-tooltip@2.2.12) (2021-02-12)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.2.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.2.10...@kaizen/draft-tooltip@2.2.11) (2021-02-11)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.2.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.2.9...@kaizen/draft-tooltip@2.2.10) (2021-02-09)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.2.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.2.8...@kaizen/draft-tooltip@2.2.9) (2021-02-09)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.2.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.2.7...@kaizen/draft-tooltip@2.2.8) (2021-02-08)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.2.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.2.6...@kaizen/draft-tooltip@2.2.7) (2021-02-08)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.2.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.2.5...@kaizen/draft-tooltip@2.2.6) (2021-02-05)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.2.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.2.4...@kaizen/draft-tooltip@2.2.5) (2021-02-02)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.2.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.2.3...@kaizen/draft-tooltip@2.2.4) (2021-01-18)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.2.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.2.2...@kaizen/draft-tooltip@2.2.3) (2021-01-14)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.2.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.2.1...@kaizen/draft-tooltip@2.2.2) (2021-01-11)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.2.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.2.0...@kaizen/draft-tooltip@2.2.1) (2021-01-08)

**Note:** Version bump only for package @kaizen/draft-tooltip

# [2.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.1.6...@kaizen/draft-tooltip@2.2.0) (2021-01-07)

### Features

- Export \*Props from packages ([#917](https://github.com/cultureamp/kaizen-design-system/issues/917)) ([53656b6](https://github.com/cultureamp/kaizen-design-system/commit/53656b60ff51da40b22d0e489149dbf9eee22386))

## [2.1.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.1.5...@kaizen/draft-tooltip@2.1.6) (2020-12-16)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.1.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.1.4...@kaizen/draft-tooltip@2.1.5) (2020-12-09)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.1.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.1.3...@kaizen/draft-tooltip@2.1.4) (2020-12-09)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.1.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.1.2...@kaizen/draft-tooltip@2.1.3) (2020-12-08)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.1.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.1.1...@kaizen/draft-tooltip@2.1.2) (2020-12-04)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.1.0...@kaizen/draft-tooltip@2.1.1) (2020-12-01)

**Note:** Version bump only for package @kaizen/draft-tooltip

# [2.1.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.0.3...@kaizen/draft-tooltip@2.1.0) (2020-12-01)

### Features

- Tooltip to allow for React.ReactNode, instead of just string ([#874](https://github.com/cultureamp/kaizen-design-system/issues/874)) ([596eaf3](https://github.com/cultureamp/kaizen-design-system/commit/596eaf3f05d9261f34388cf9b50e249838739b65))

## [2.0.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.0.2...@kaizen/draft-tooltip@2.0.3) (2020-11-25)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.0.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.0.1...@kaizen/draft-tooltip@2.0.2) (2020-11-13)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [2.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@2.0.0...@kaizen/draft-tooltip@2.0.1) (2020-11-12)

**Note:** Version bump only for package @kaizen/draft-tooltip

# [2.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.7.0...@kaizen/draft-tooltip@2.0.0) (2020-11-12)

### Bug Fixes

- Clean up eslint warnings ([#850](https://github.com/cultureamp/kaizen-design-system/issues/850)) ([78d0f20](https://github.com/cultureamp/kaizen-design-system/commit/78d0f207b03e6449f6c5f4e3000926d91c3094e1))

### BREAKING CHANGES

- Consumers that were passing in a now-restricted type
  to a prop that accepted e.g. "any" as a type may now break.

- Fix eslint errors as result of rule change

- Fix type error in getCustomProps for Buttons

- Add missing key to MenuItem

- Fix line order syntax in Popover

# [1.7.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.6.3...@kaizen/draft-tooltip@1.7.0) (2020-11-11)

### Features

- Add tooltip to the Table header ([#859](https://github.com/cultureamp/kaizen-design-system/issues/859)) ([aeafcc9](https://github.com/cultureamp/kaizen-design-system/commit/aeafcc9421aa5ca27b9e1476924c97af144f6e1e))

## [1.6.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.6.2...@kaizen/draft-tooltip@1.6.3) (2020-11-09)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.6.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.6.1...@kaizen/draft-tooltip@1.6.2) (2020-11-09)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.6.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.6.0...@kaizen/draft-tooltip@1.6.1) (2020-10-21)

**Note:** Version bump only for package @kaizen/draft-tooltip

# [1.6.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.44...@kaizen/draft-tooltip@1.6.0) (2020-10-18)

### Features

- Change tooltip tag to span and add inline option ([#821](https://github.com/cultureamp/kaizen-design-system/issues/821)) ([d04d180](https://github.com/cultureamp/kaizen-design-system/commit/d04d18058a55fbd652ebc2864c15a0d804dd7dad))

## [1.5.44](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.43...@kaizen/draft-tooltip@1.5.44) (2020-10-08)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.43](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.42...@kaizen/draft-tooltip@1.5.43) (2020-10-01)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.42](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.41...@kaizen/draft-tooltip@1.5.42) (2020-10-01)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.41](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.40...@kaizen/draft-tooltip@1.5.41) (2020-09-30)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.40](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.39...@kaizen/draft-tooltip@1.5.40) (2020-09-28)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.39](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.38...@kaizen/draft-tooltip@1.5.39) (2020-09-28)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.38](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.37...@kaizen/draft-tooltip@1.5.38) (2020-09-24)

### Bug Fixes

- Change styles from require to use import ([#782](https://github.com/cultureamp/kaizen-design-system/issues/782)) ([defd448](https://github.com/cultureamp/kaizen-design-system/commit/defd4483faa3459d9af48e272c63656798008a28))

## [1.5.37](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.36...@kaizen/draft-tooltip@1.5.37) (2020-09-23)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.36](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.35...@kaizen/draft-tooltip@1.5.36) (2020-09-11)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.35](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.34...@kaizen/draft-tooltip@1.5.35) (2020-09-11)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.34](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.33...@kaizen/draft-tooltip@1.5.34) (2020-09-09)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.33](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.32...@kaizen/draft-tooltip@1.5.33) (2020-09-07)

### Bug Fixes

- Bump design-tokens peer dependency to the latest version ([#760](https://github.com/cultureamp/kaizen-design-system/issues/760)) ([37e5414](https://github.com/cultureamp/kaizen-design-system/commit/37e5414b2e2c0befb4127c588120eb2e8bdc4d39))

## [1.5.32](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.31...@kaizen/draft-tooltip@1.5.32) (2020-09-04)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.31](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.30...@kaizen/draft-tooltip@1.5.31) (2020-08-28)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.30](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.29...@kaizen/draft-tooltip@1.5.30) (2020-08-27)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.29](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.28...@kaizen/draft-tooltip@1.5.29) (2020-08-24)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.28](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.27...@kaizen/draft-tooltip@1.5.28) (2020-08-19)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.27](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.26...@kaizen/draft-tooltip@1.5.27) (2020-08-12)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.26](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.25...@kaizen/draft-tooltip@1.5.26) (2020-08-10)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.25](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.24...@kaizen/draft-tooltip@1.5.25) (2020-07-31)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.24](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.23...@kaizen/draft-tooltip@1.5.24) (2020-07-30)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.23](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.22...@kaizen/draft-tooltip@1.5.23) (2020-07-15)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.22](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.21...@kaizen/draft-tooltip@1.5.22) (2020-07-15)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.21](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.20...@kaizen/draft-tooltip@1.5.21) (2020-07-10)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.20](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.19...@kaizen/draft-tooltip@1.5.20) (2020-07-09)

### Bug Fixes

- Switch from TSlint to ESlint ([#621](https://github.com/cultureamp/kaizen-design-system/issues/621)) ([59e64d4](https://github.com/cultureamp/kaizen-design-system/commit/59e64d4d0cd14302544ae7f41fd76a101d313aee))

## [1.5.19](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.18...@kaizen/draft-tooltip@1.5.19) (2020-07-09)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.18](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.17...@kaizen/draft-tooltip@1.5.18) (2020-07-09)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.17](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.16...@kaizen/draft-tooltip@1.5.17) (2020-07-06)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.16](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.15...@kaizen/draft-tooltip@1.5.16) (2020-07-01)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.15](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.14...@kaizen/draft-tooltip@1.5.15) (2020-06-29)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.14](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.13...@kaizen/draft-tooltip@1.5.14) (2020-06-26)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.12...@kaizen/draft-tooltip@1.5.13) (2020-06-22)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.11...@kaizen/draft-tooltip@1.5.12) (2020-06-22)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.10...@kaizen/draft-tooltip@1.5.11) (2020-06-22)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.9...@kaizen/draft-tooltip@1.5.10) (2020-06-19)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.8...@kaizen/draft-tooltip@1.5.9) (2020-06-18)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.7...@kaizen/draft-tooltip@1.5.8) (2020-06-17)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.6...@kaizen/draft-tooltip@1.5.7) (2020-06-16)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.5...@kaizen/draft-tooltip@1.5.6) (2020-06-12)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.4...@kaizen/draft-tooltip@1.5.5) (2020-06-12)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.3...@kaizen/draft-tooltip@1.5.4) (2020-06-11)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.2...@kaizen/draft-tooltip@1.5.3) (2020-06-11)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.1...@kaizen/draft-tooltip@1.5.2) (2020-06-11)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.5.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.5.0...@kaizen/draft-tooltip@1.5.1) (2020-06-10)

**Note:** Version bump only for package @kaizen/draft-tooltip

# [1.5.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.4.13...@kaizen/draft-tooltip@1.5.0) (2020-06-09)

### Features

- Rollout inter ([#530](https://github.com/cultureamp/kaizen-design-system/issues/530)) ([a1b2059](https://github.com/cultureamp/kaizen-design-system/commit/a1b2059980ea753036caa5cb15ba6b1235d52ba4))

## [1.4.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.4.12...@kaizen/draft-tooltip@1.4.13) (2020-06-05)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.4.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.4.11...@kaizen/draft-tooltip@1.4.12) (2020-06-05)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.4.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.4.10...@kaizen/draft-tooltip@1.4.11) (2020-06-05)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.4.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.4.9...@kaizen/draft-tooltip@1.4.10) (2020-06-04)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.4.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.4.8...@kaizen/draft-tooltip@1.4.9) (2020-06-02)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.4.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.4.7...@kaizen/draft-tooltip@1.4.8) (2020-06-02)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.4.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.4.6...@kaizen/draft-tooltip@1.4.7) (2020-05-28)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.4.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.4.5...@kaizen/draft-tooltip@1.4.6) (2020-05-27)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.4.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.4.4...@kaizen/draft-tooltip@1.4.5) (2020-05-26)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.4.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.4.3...@kaizen/draft-tooltip@1.4.4) (2020-05-26)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.4.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.4.2...@kaizen/draft-tooltip@1.4.3) (2020-05-26)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.4.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.4.1...@kaizen/draft-tooltip@1.4.2) (2020-05-21)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.4.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.4.0...@kaizen/draft-tooltip@1.4.1) (2020-05-21)

**Note:** Version bump only for package @kaizen/draft-tooltip

# [1.4.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.3.16...@kaizen/draft-tooltip@1.4.0) (2020-05-20)

### Features

- removed references to the old draft packages ([#504](https://github.com/cultureamp/kaizen-design-system/issues/504)) ([ddda156](https://github.com/cultureamp/kaizen-design-system/commit/ddda156513445ca8da8bcc64364f15dc4b94b1a6))

## [1.3.16](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.3.15...@kaizen/draft-tooltip@1.3.16) (2020-05-20)

### Bug Fixes

- unpin unintentionally pinned @kaizen/design-token peer dependencies ([#503](https://github.com/cultureamp/kaizen-design-system/issues/503)) ([aa6f1d3](https://github.com/cultureamp/kaizen-design-system/commit/aa6f1d3a63cd7f2e3dac9cd631aa7a9e88b153ac))

## [1.3.15](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.3.14...@kaizen/draft-tooltip@1.3.15) (2020-05-19)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.3.14](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.3.13...@kaizen/draft-tooltip@1.3.14) (2020-05-19)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.3.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.3.12...@kaizen/draft-tooltip@1.3.13) (2020-05-19)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.3.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.3.11...@kaizen/draft-tooltip@1.3.12) (2020-05-18)

### Bug Fixes

- sync old and new draft components ([#492](https://github.com/cultureamp/kaizen-design-system/issues/492)) ([6755e4b](https://github.com/cultureamp/kaizen-design-system/commit/6755e4beedf5d3953c5a50e152cfd181389d9be0))

## [1.3.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.3.10...@kaizen/draft-tooltip@1.3.11) (2020-05-15)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.3.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.3.9...@kaizen/draft-tooltip@1.3.10) (2020-05-13)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.3.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.3.8...@kaizen/draft-tooltip@1.3.9) (2020-05-08)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.3.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.3.7...@kaizen/draft-tooltip@1.3.8) (2020-05-08)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.3.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.3.6...@kaizen/draft-tooltip@1.3.7) (2020-05-08)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.3.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.3.5...@kaizen/draft-tooltip@1.3.6) (2020-05-07)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.3.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.3.4...@kaizen/draft-tooltip@1.3.5) (2020-05-06)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.3.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.3.3...@kaizen/draft-tooltip@1.3.4) (2020-05-06)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.3.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.3.2...@kaizen/draft-tooltip@1.3.3) (2020-05-05)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.3.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.3.1...@kaizen/draft-tooltip@1.3.2) (2020-05-05)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.3.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.3.0...@kaizen/draft-tooltip@1.3.1) (2020-05-05)

**Note:** Version bump only for package @kaizen/draft-tooltip

# [1.3.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.2.1...@kaizen/draft-tooltip@1.3.0) (2020-05-05)

### Features

- Updated all draft packages to accept all minor releases ([#451](https://github.com/cultureamp/kaizen-design-system/issues/451)) ([80453f6](https://github.com/cultureamp/kaizen-design-system/commit/80453f6c04300dcef61c14e39200ce154863eb0d))

## [1.2.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.2.0...@kaizen/draft-tooltip@1.2.1) (2020-05-04)

**Note:** Version bump only for package @kaizen/draft-tooltip

# [1.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.1.2...@kaizen/draft-tooltip@1.2.0) (2020-05-04)

### Features

- Added missing dependencies to packages ([#449](https://github.com/cultureamp/kaizen-design-system/issues/449)) ([cb1dc2a](https://github.com/cultureamp/kaizen-design-system/commit/cb1dc2aead68e591cc21c665fb25c1817633c4d7))

## [1.1.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.1.1...@kaizen/draft-tooltip@1.1.2) (2020-05-04)

**Note:** Version bump only for package @kaizen/draft-tooltip

## [1.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/draft-tooltip@1.1.0...@kaizen/draft-tooltip@1.1.1) (2020-05-04)

**Note:** Version bump only for package @kaizen/draft-tooltip

# 1.1.0 (2020-05-01)

### Features

- Copy All Drafts **except Form** Into Draft Packages ([#431](https://github.com/cultureamp/kaizen-design-system/issues/431)) ([55bfde9](https://github.com/cultureamp/kaizen-design-system/commit/55bfde98611d2c4070d26ba082e478f96ddca1fd))
