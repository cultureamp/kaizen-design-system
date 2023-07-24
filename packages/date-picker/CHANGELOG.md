# Change Log

## 6.2.3

### Patch Changes

- [#3815](https://github.com/cultureamp/kaizen-design-system/pull/3815) [`52e3d1f44`](https://github.com/cultureamp/kaizen-design-system/commit/52e3d1f441765f409ddb5c98dce1e407b707be0a) - Update dependencies
  - update to prettier v3 cause minor linting changes
  - update to prettier v3 required minor type fixes for format function in design-tokens
- Updated dependencies [[`c8cf582b9`](https://github.com/cultureamp/kaizen-design-system/commit/c8cf582b99c7f9644bf73ef2902c49461f23dd7e), [`52e3d1f44`](https://github.com/cultureamp/kaizen-design-system/commit/52e3d1f441765f409ddb5c98dce1e407b707be0a)]:
  - @kaizen/draft-tooltip@5.4.47
  - @kaizen/draft-form@10.4.8

## 6.2.2

### Patch Changes

- [#3852](https://github.com/cultureamp/kaizen-design-system/pull/3852) [`2e0a8db1d`](https://github.com/cultureamp/kaizen-design-system/commit/2e0a8db1db16f7a7bda4ab3c7dbad5691238facf) - Minor fix to the types in `useDateInputHandlers` changing `setInputValue` from expecting a `SetStateAction` to just a `string`.

- Updated dependencies [[`6621d8912`](https://github.com/cultureamp/kaizen-design-system/commit/6621d89125658392205963f89e230660bc6fddc2)]:
  - @kaizen/draft-form@10.4.7

## 6.2.1

### Patch Changes

- [#3862](https://github.com/cultureamp/kaizen-design-system/pull/3862) [`5afdddade`](https://github.com/cultureamp/kaizen-design-system/commit/5afdddaded55b173dc39e469a2dfa15fe135155f) - Replace SVG imports with SVG React components
  - This addresses the SVGs not rendering as expected in consuming repos

## 6.2.0

### Minor Changes

- [#3790](https://github.com/cultureamp/kaizen-design-system/pull/3790) [`042e5971d`](https://github.com/cultureamp/kaizen-design-system/commit/042e5971d8ca883656b14e4f4438bb716b7c88c7) - Allow for the export of DatePicker utils

### Patch Changes

- [#3793](https://github.com/cultureamp/kaizen-design-system/pull/3793) [`a791bd50d`](https://github.com/cultureamp/kaizen-design-system/commit/a791bd50d6538d5b8e18b02831d0108922b6199c) - Patch `react-focus-on` depdendency

## 6.1.0

### Minor Changes

- [#3667](https://github.com/cultureamp/kaizen-design-system/pull/3667) [`91f4f9a29`](https://github.com/cultureamp/kaizen-design-system/commit/91f4f9a297531bf56fad381184a9c11b21814e5b) - Exported internal util and hook functions

## 6.0.2

### Patch Changes

- [#3678](https://github.com/cultureamp/kaizen-design-system/pull/3678) [`d434bda3e`](https://github.com/cultureamp/kaizen-design-system/commit/d434bda3e5d520c71899d30dabdba02f97d911a0) - Dependency upgrades

- Updated dependencies [[`d434bda3e`](https://github.com/cultureamp/kaizen-design-system/commit/d434bda3e5d520c71899d30dabdba02f97d911a0), [`959541e4d`](https://github.com/cultureamp/kaizen-design-system/commit/959541e4dc02655577dfee98931e84df2c079576)]:
  - @kaizen/draft-tooltip@5.4.46
  - @kaizen/component-library@16.9.0

## 6.0.1

### Patch Changes

- [#3675](https://github.com/cultureamp/kaizen-design-system/pull/3675) [`430d0aade`](https://github.com/cultureamp/kaizen-design-system/commit/430d0aade9d4737d48ef61ef078938c11ef18206) - Fix for regression in DatePicker validation, marking correct dates as invalid

- [#3677](https://github.com/cultureamp/kaizen-design-system/pull/3677) [`06c48bb35`](https://github.com/cultureamp/kaizen-design-system/commit/06c48bb3593cd348c393369b6bc17d04a997c9e0) - Bump outdated `component-library` and `draft-form` dependencies to latest

- Updated dependencies [[`06c48bb35`](https://github.com/cultureamp/kaizen-design-system/commit/06c48bb3593cd348c393369b6bc17d04a997c9e0)]:
  - @kaizen/draft-tooltip@5.4.45
  - @kaizen/draft-form@10.4.6

## 6.0.0

### Major Changes

- [#3628](https://github.com/cultureamp/kaizen-design-system/pull/3628) [`21e381314`](https://github.com/cultureamp/kaizen-design-system/commit/21e381314daffd8171208f33e3627bccf54ddd6a) - Delete `<FilterDateRangePicker>` from `@kaizen/date-picker` as it has been moved to `@kaizen/components`.

### Patch Changes

- Updated dependencies [[`b6480c659`](https://github.com/cultureamp/kaizen-design-system/commit/b6480c6591a6f1b73ce4388ee9c341b5c421666c)]:
  - @kaizen/draft-form@10.4.4

## 5.21.17

### Patch Changes

- [#3621](https://github.com/cultureamp/kaizen-design-system/pull/3621) [`4967215eb`](https://github.com/cultureamp/kaizen-design-system/commit/4967215eb05298f69dbdf8e9cb44f4e0665e7d8f) - Fix files whitelist to include scss files

- Updated dependencies [[`4967215eb`](https://github.com/cultureamp/kaizen-design-system/commit/4967215eb05298f69dbdf8e9cb44f4e0665e7d8f)]:
  - @kaizen/component-library@16.7.6
  - @kaizen/component-base@1.1.7
  - @kaizen/draft-tooltip@5.4.44
  - @kaizen/draft-form@10.4.3
  - @kaizen/typography@2.3.11
  - @kaizen/a11y@1.7.12

## 5.21.16

### Patch Changes

- [#3595](https://github.com/cultureamp/kaizen-design-system/pull/3595) [`0e0750e87`](https://github.com/cultureamp/kaizen-design-system/commit/0e0750e872e3381420df7bf2947d9deb9db8b705) - Remove .turbo from distributed files

- [#3618](https://github.com/cultureamp/kaizen-design-system/pull/3618) [`b4eaa8c45`](https://github.com/cultureamp/kaizen-design-system/commit/b4eaa8c45b10abe795138638f273fabe416580da) - Update dependency date-fns to ^2.30.0

- [#3616](https://github.com/cultureamp/kaizen-design-system/pull/3616) [`e4f5f5ce5`](https://github.com/cultureamp/kaizen-design-system/commit/e4f5f5ce50b4e1a4aa8b189c247d0f2a8fea722f) - Fix packagejson files whitelist to only include publish files

- [#3611](https://github.com/cultureamp/kaizen-design-system/pull/3611) [`589244ad0`](https://github.com/cultureamp/kaizen-design-system/commit/589244ad0c307edca845d19843f2db282050fe29) - Fix supported design-tokens versions

- Updated dependencies [[`0e0750e87`](https://github.com/cultureamp/kaizen-design-system/commit/0e0750e872e3381420df7bf2947d9deb9db8b705), [`e4f5f5ce5`](https://github.com/cultureamp/kaizen-design-system/commit/e4f5f5ce50b4e1a4aa8b189c247d0f2a8fea722f), [`589244ad0`](https://github.com/cultureamp/kaizen-design-system/commit/589244ad0c307edca845d19843f2db282050fe29)]:
  - @kaizen/component-library@16.7.5
  - @kaizen/component-base@1.1.6
  - @kaizen/draft-tooltip@5.4.43
  - @kaizen/draft-form@10.4.2
  - @kaizen/typography@2.3.10
  - @kaizen/a11y@1.7.11

## 5.21.15

### Patch Changes

- [#3608](https://github.com/cultureamp/kaizen-design-system/pull/3608) [`cc96d9835`](https://github.com/cultureamp/kaizen-design-system/commit/cc96d98351ae380fe1a1e8a33d65d80232ed7a57) - Update usages of classnames to not use object syntax

- Updated dependencies [[`cc96d9835`](https://github.com/cultureamp/kaizen-design-system/commit/cc96d98351ae380fe1a1e8a33d65d80232ed7a57)]:
  - @kaizen/component-library@16.7.4
  - @kaizen/draft-tooltip@5.4.42
  - @kaizen/design-tokens@10.3.7
  - @kaizen/draft-form@10.4.1
  - @kaizen/typography@2.3.9

## 5.21.14

### Patch Changes

- [#3592](https://github.com/cultureamp/kaizen-design-system/pull/3592) [`dcd98eb9f`](https://github.com/cultureamp/kaizen-design-system/commit/dcd98eb9fbb5d03356d803bb90685e33b151075d) - Update dependencies:

  - `@react-aria/datepicker` to `^3.4.0`

- [#3585](https://github.com/cultureamp/kaizen-design-system/pull/3585) [`739d87b0c`](https://github.com/cultureamp/kaizen-design-system/commit/739d87b0cd917e7c0f3becf2cc0fd8f9667f7a6c) - Update dependencies:
  - `@internationalized/date` to `^3.2.0`
  - `@react-aria/i18n` to `^3.7.1`
  - `react-focus-on` to `^3.8.1`
- Updated dependencies [[`739d87b0c`](https://github.com/cultureamp/kaizen-design-system/commit/739d87b0cd917e7c0f3becf2cc0fd8f9667f7a6c), [`acb0fdf3d`](https://github.com/cultureamp/kaizen-design-system/commit/acb0fdf3de2c1e852971b30fa0db4691e2a4ad0d), [`c2f5be19e`](https://github.com/cultureamp/kaizen-design-system/commit/c2f5be19e5868aafd6771bab3a15e016664aa949), [`739d87b0c`](https://github.com/cultureamp/kaizen-design-system/commit/739d87b0cd917e7c0f3becf2cc0fd8f9667f7a6c)]:
  - @kaizen/component-library@16.7.3
  - @kaizen/draft-tooltip@5.4.41
  - @kaizen/draft-form@10.3.13
  - @kaizen/design-tokens@10.3.6

## 5.21.13

### Patch Changes

- [#3563](https://github.com/cultureamp/kaizen-design-system/pull/3563) [`3244a9f39`](https://github.com/cultureamp/kaizen-design-system/commit/3244a9f398e7a78cc6c3ab9226e1f182ee3f21b8) - Fix a typescript error by bumping the minimum required @react-stately/datepicker package

  Version 3.3.0 of react-stately/datepicker generated a TS issue, which was handled in Kaizen with a @ts-expect-error comment. But newer releases (3.4.0 onwards) don't have the problem, and so no error is found.

  Because of a problem with Kaizen packaging accidentally shipping TS source files, consuming projects, which had different versions of this package, got TS errors saying that the "ts-expect-error" was unnecessary.

  In this release we have bumped the minimum version for this package and removed the `@ts-expect-error`.

## 5.21.12

### Patch Changes

- [#3565](https://github.com/cultureamp/kaizen-design-system/pull/3565) [`2fcba667e`](https://github.com/cultureamp/kaizen-design-system/commit/2fcba667e576ff974d9f790172e894351eba3875) - \* Add selectedDay to DatePicker useEffect Hook to trigger a re-render on change

  - Adds test to validate async return of selectedDay from server

- [#3558](https://github.com/cultureamp/kaizen-design-system/pull/3558) [`f09c085ee`](https://github.com/cultureamp/kaizen-design-system/commit/f09c085ee78c6dc79afc291faa6e284b333d1e93) - Use native focus-visible selector for focus styling instead of polyfill class

- Updated dependencies [[`f09c085ee`](https://github.com/cultureamp/kaizen-design-system/commit/f09c085ee78c6dc79afc291faa6e284b333d1e93)]:
  - @kaizen/draft-form@10.3.12
  - @kaizen/a11y@1.7.10

## 5.21.11

### Patch Changes

- [#3540](https://github.com/cultureamp/kaizen-design-system/pull/3540) [`1228800bc`](https://github.com/cultureamp/kaizen-design-system/commit/1228800bc215bc33731888bc81ef68be1a3c19d9) - Add type="button" to buttons missing an explicit type

- Updated dependencies [[`1228800bc`](https://github.com/cultureamp/kaizen-design-system/commit/1228800bc215bc33731888bc81ef68be1a3c19d9), [`11691d3dd`](https://github.com/cultureamp/kaizen-design-system/commit/11691d3dd152f013241233474ea9409fe76e7796)]:
  - @kaizen/component-library@16.7.2

## 5.21.10

### Patch Changes

- [#3536](https://github.com/cultureamp/kaizen-design-system/pull/3536) [`82ba2fa0d`](https://github.com/cultureamp/kaizen-design-system/commit/82ba2fa0d20c66a1688d2609d4bd7775b129349c) - - enforced no-implicit-any across kaizen

- Updated dependencies [[`82ba2fa0d`](https://github.com/cultureamp/kaizen-design-system/commit/82ba2fa0d20c66a1688d2609d4bd7775b129349c)]:
  - @kaizen/component-library@16.7.1
  - @kaizen/draft-tooltip@5.4.40

## 5.21.9

### Patch Changes

- a7ffc2239: \* Deprecate `FilterDateRangePicker` (replaced by `FilterDateRangePicker` in `@kaizen/components`)
  - Changes seen in the new component:
    - Use `Filter` structure where open state and Filter Button are passed in by consumer
    - Validation structure changed from `status: FieldMessageStatus` & `validationMessage: string` to `validationMessage: { status: FieldMessageStatus; message: string }`
    - Rename `inputRangeStartProps` to `inputStartDateProps`
    - Rename `inputRangeEndProps` to `inputEndDateProps`
    - Prop `disabledDays` replaces the multiple disabled props to closer match the `react-day-picker` api
  - Fix `isSelectingDayInCalendar` util (classList may be undefined)
  - Add `DisabledDays` type
    - Uses type from `react-day-picker`
    - Update hooks/utils to use `DisabledDays` instead of `Matcher[]`
  - Improve tests for `useDateInputHandlers`
- Updated dependencies [fb901eec2]
  - @kaizen/component-library@16.7.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [5.21.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.21.7...@kaizen/date-picker@5.21.8) (2023-04-06)

**Note:** Version bump only for package @kaizen/date-picker

## [5.21.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.21.6...@kaizen/date-picker@5.21.7) (2023-04-05)

**Note:** Version bump only for package @kaizen/date-picker

## [5.21.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.21.5...@kaizen/date-picker@5.21.6) (2023-03-29)

**Note:** Version bump only for package @kaizen/date-picker

## [5.21.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.21.4...@kaizen/date-picker@5.21.5) (2023-03-29)

**Note:** Version bump only for package @kaizen/date-picker

## [5.21.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.21.3...@kaizen/date-picker@5.21.4) (2023-03-23)

**Note:** Version bump only for package @kaizen/date-picker

## [5.21.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.21.2...@kaizen/date-picker@5.21.3) (2023-03-23)

**Note:** Version bump only for package @kaizen/date-picker

## [5.21.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.21.1...@kaizen/date-picker@5.21.2) (2023-03-22)

**Note:** Version bump only for package @kaizen/date-picker

## [5.21.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.21.0...@kaizen/date-picker@5.21.1) (2023-03-22)

**Note:** Version bump only for package @kaizen/date-picker

# [5.21.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.20.1...@kaizen/date-picker@5.21.0) (2023-03-15)

### Features

- **filter-drp:** add inbuilt validation ([#3344](https://github.com/cultureamp/kaizen-design-system/issues/3344)) ([31baaf5](https://github.com/cultureamp/kaizen-design-system/commit/31baaf54caf7c1ec0db6d736e493d654e72cde5a))

## [5.20.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.20.0...@kaizen/date-picker@5.20.1) (2023-03-14)

**Note:** Version bump only for package @kaizen/date-picker

# [5.20.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.19.4...@kaizen/date-picker@5.20.0) (2023-03-03)

### Features

- update aria labels for validation ([#3329](https://github.com/cultureamp/kaizen-design-system/issues/3329)) ([c80bbce](https://github.com/cultureamp/kaizen-design-system/commit/c80bbce02e5a5bbfa4fd759f369ed4e92bfe6b0d))

## [5.19.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.19.3...@kaizen/date-picker@5.19.4) (2023-03-02)

**Note:** Version bump only for package @kaizen/date-picker

## [5.19.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.19.2...@kaizen/date-picker@5.19.3) (2023-03-02)

**Note:** Version bump only for package @kaizen/date-picker

## [5.19.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.19.1...@kaizen/date-picker@5.19.2) (2023-03-02)

**Note:** Version bump only for package @kaizen/date-picker

## [5.19.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.19.0...@kaizen/date-picker@5.19.1) (2023-03-01)

**Note:** Version bump only for package @kaizen/date-picker

# [5.19.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.18.5...@kaizen/date-picker@5.19.0) (2023-02-28)

### Features

- add validation to DateRangePicker ([#3277](https://github.com/cultureamp/kaizen-design-system/issues/3277)) ([5cbdf6a](https://github.com/cultureamp/kaizen-design-system/commit/5cbdf6a2f3979b22d03f7b6722953ea6c26fb7cd))

## [5.18.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.18.4...@kaizen/date-picker@5.18.5) (2023-02-23)

**Note:** Version bump only for package @kaizen/date-picker

## [5.18.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.18.3...@kaizen/date-picker@5.18.4) (2023-02-23)

**Note:** Version bump only for package @kaizen/date-picker

## [5.18.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.18.2...@kaizen/date-picker@5.18.3) (2023-02-23)

**Note:** Version bump only for package @kaizen/date-picker

## [5.18.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.18.1...@kaizen/date-picker@5.18.2) (2023-02-22)

**Note:** Version bump only for package @kaizen/date-picker

## [5.18.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.18.0...@kaizen/date-picker@5.18.1) (2023-02-22)

**Note:** Version bump only for package @kaizen/date-picker

# [5.18.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.17.11...@kaizen/date-picker@5.18.0) (2023-02-21)

### Features

- **filter-drp:** update the calendar when start input is changed ([#3301](https://github.com/cultureamp/kaizen-design-system/issues/3301)) ([f360fee](https://github.com/cultureamp/kaizen-design-system/commit/f360fee6d75c74e6b687882dc8b5aab6bddd4ddb))

## [5.17.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.17.10...@kaizen/date-picker@5.17.11) (2023-02-20)

### Bug Fixes

- **filter-trigger-button:** prevent trigger label text wrapping ([#3298](https://github.com/cultureamp/kaizen-design-system/issues/3298)) ([0e0511d](https://github.com/cultureamp/kaizen-design-system/commit/0e0511d873663e0b11195844cafbd1aa0e4d861c))

## [5.17.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.17.9...@kaizen/date-picker@5.17.10) (2023-02-16)

### Bug Fixes

- increase timeout for filter DRP long test ([#3283](https://github.com/cultureamp/kaizen-design-system/issues/3283)) ([dd878ff](https://github.com/cultureamp/kaizen-design-system/commit/dd878ff6cdb59fbc322e8250f4c09355dcd80738))

## [5.17.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.17.8...@kaizen/date-picker@5.17.9) (2023-02-13)

### Bug Fixes

- **filter-drp:** allow updating FilterDRP input values via external trigger ([#3268](https://github.com/cultureamp/kaizen-design-system/issues/3268)) ([d677832](https://github.com/cultureamp/kaizen-design-system/commit/d677832e3d7d68e9105480ab2181b37294f47d75))

## [5.17.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.17.7...@kaizen/date-picker@5.17.8) (2023-02-09)

**Note:** Version bump only for package @kaizen/date-picker

## [5.17.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.17.6...@kaizen/date-picker@5.17.7) (2023-02-06)

**Note:** Version bump only for package @kaizen/date-picker

## [5.17.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.17.5...@kaizen/date-picker@5.17.6) (2023-02-01)

**Note:** Version bump only for package @kaizen/date-picker

## [5.17.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.17.4...@kaizen/date-picker@5.17.5) (2023-01-30)

**Note:** Version bump only for package @kaizen/date-picker

## [5.17.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.17.3...@kaizen/date-picker@5.17.4) (2023-01-24)

### Bug Fixes

- **date-picker:** remove Calendar global class for dayToday ([#3226](https://github.com/cultureamp/kaizen-design-system/issues/3226)) ([cf15706](https://github.com/cultureamp/kaizen-design-system/commit/cf15706cbabc0a85520506f23432196291ee4b4f))

## [5.17.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.17.2...@kaizen/date-picker@5.17.3) (2023-01-23)

**Note:** Version bump only for package @kaizen/date-picker

## [5.17.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.17.1...@kaizen/date-picker@5.17.2) (2023-01-20)

### Bug Fixes

- **date-picker:** fix function wiring to onRemove ([#3219](https://github.com/cultureamp/kaizen-design-system/issues/3219)) ([67f9004](https://github.com/cultureamp/kaizen-design-system/commit/67f90049106162dc8c79e674d4ae339d8c88f021))

## [5.17.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.17.0...@kaizen/date-picker@5.17.1) (2023-01-18)

**Note:** Version bump only for package @kaizen/date-picker

# [5.17.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.16.1...@kaizen/date-picker@5.17.0) (2023-01-17)

### Features

- **date-picker:** add RTL support to FilterDateRangePicker ([#3199](https://github.com/cultureamp/kaizen-design-system/issues/3199)) ([c5a3d65](https://github.com/cultureamp/kaizen-design-system/commit/c5a3d65f3cb00cc432ab19faa6c6615e90d71233))

## [5.16.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.16.0...@kaizen/date-picker@5.16.1) (2023-01-16)

### Bug Fixes

- **deps:** update dependency ([#3202](https://github.com/cultureamp/kaizen-design-system/issues/3202)) ([1922224](https://github.com/cultureamp/kaizen-design-system/commit/1922224c7f3b16a1e72f481fcd44e8a7b73f9e9f))

# [5.16.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.15.6...@kaizen/date-picker@5.16.0) (2023-01-16)

### Features

- **date-picker:** allow custom description for FilterDRP ([#3200](https://github.com/cultureamp/kaizen-design-system/issues/3200)) ([e216b0f](https://github.com/cultureamp/kaizen-design-system/commit/e216b0f560ec0bee44b87a54dc7d03232bb9cd73))

## [5.15.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.15.5...@kaizen/date-picker@5.15.6) (2023-01-11)

**Note:** Version bump only for package @kaizen/date-picker

## [5.15.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.15.4...@kaizen/date-picker@5.15.5) (2023-01-06)

### Bug Fixes

- **deps:** upgrade stylelint to 14.x ([#3186](https://github.com/cultureamp/kaizen-design-system/issues/3186)) ([712bb81](https://github.com/cultureamp/kaizen-design-system/commit/712bb815ef534f3ad289dd96ea06e5954f3bd22c))

## [5.15.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.15.3...@kaizen/date-picker@5.15.4) (2023-01-04)

**Note:** Version bump only for package @kaizen/date-picker

## [5.15.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.15.2...@kaizen/date-picker@5.15.3) (2023-01-04)

**Note:** Version bump only for package @kaizen/date-picker

## [5.15.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.15.1...@kaizen/date-picker@5.15.2) (2023-01-04)

**Note:** Version bump only for package @kaizen/date-picker

## [5.15.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.15.0...@kaizen/date-picker@5.15.1) (2023-01-03)

**Note:** Version bump only for package @kaizen/date-picker

# [5.15.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.14.0...@kaizen/date-picker@5.15.0) (2022-12-16)

### Features

- **date-picker:** add inputs to FilterDateRangePicker ([#3157](https://github.com/cultureamp/kaizen-design-system/issues/3157)) ([b283c31](https://github.com/cultureamp/kaizen-design-system/commit/b283c313af0fbef3a37368df3da51ad87c6a6a09))

# [5.14.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.13.2...@kaizen/date-picker@5.14.0) (2022-12-06)

### Features

- **date-picker:** allow FilterDateRangePicker to be removable ([#3129](https://github.com/cultureamp/kaizen-design-system/issues/3129)) ([531c1db](https://github.com/cultureamp/kaizen-design-system/commit/531c1dbc37c95ee4e8e1548052a5620f34720653))

## [5.13.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.13.1...@kaizen/date-picker@5.13.2) (2022-12-01)

**Note:** Version bump only for package @kaizen/date-picker

## [5.13.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.13.0...@kaizen/date-picker@5.13.1) (2022-12-01)

**Note:** Version bump only for package @kaizen/date-picker

# [5.13.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.12.15...@kaizen/date-picker@5.13.0) (2022-11-28)

### Features

- **date-picker:** add FilterDateRangePicker ([#3118](https://github.com/cultureamp/kaizen-design-system/issues/3118)) ([00f0665](https://github.com/cultureamp/kaizen-design-system/commit/00f0665d3193ae096a53b9ff3a88890c58b617b3))

## [5.12.15](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.12.14...@kaizen/date-picker@5.12.15) (2022-11-25)

**Note:** Version bump only for package @kaizen/date-picker

## [5.12.14](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.12.13...@kaizen/date-picker@5.12.14) (2022-11-18)

**Note:** Version bump only for package @kaizen/date-picker

## [5.12.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.12.12...@kaizen/date-picker@5.12.13) (2022-11-18)

### Bug Fixes

- **deps:** update dependency react-day-picker to ^8.3.6 ([#3107](https://github.com/cultureamp/kaizen-design-system/issues/3107)) ([b3d062b](https://github.com/cultureamp/kaizen-design-system/commit/b3d062bf278db7ac82b5b5cdc8d1f56e1cad2eff))

## [5.12.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.12.11...@kaizen/date-picker@5.12.12) (2022-11-17)

**Note:** Version bump only for package @kaizen/date-picker

## [5.12.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.12.10...@kaizen/date-picker@5.12.11) (2022-11-13)

**Note:** Version bump only for package @kaizen/date-picker

## [5.12.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.12.9...@kaizen/date-picker@5.12.10) (2022-11-09)

**Note:** Version bump only for package @kaizen/date-picker

## [5.12.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.12.8...@kaizen/date-picker@5.12.9) (2022-11-04)

**Note:** Version bump only for package @kaizen/date-picker

## [5.12.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.12.7...@kaizen/date-picker@5.12.8) (2022-11-02)

**Note:** Version bump only for package @kaizen/date-picker

## [5.12.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.12.6...@kaizen/date-picker@5.12.7) (2022-11-01)

**Note:** Version bump only for package @kaizen/date-picker

## [5.12.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.12.5...@kaizen/date-picker@5.12.6) (2022-10-26)

**Note:** Version bump only for package @kaizen/date-picker

## [5.12.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.12.4...@kaizen/date-picker@5.12.5) (2022-10-24)

**Note:** Version bump only for package @kaizen/date-picker

## [5.12.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.12.3...@kaizen/date-picker@5.12.4) (2022-10-24)

### Bug Fixes

- **renamed timepicker to timefield:** using patch as it only has 1 consuming team ([#3033](https://github.com/cultureamp/kaizen-design-system/issues/3033)) ([0165560](https://github.com/cultureamp/kaizen-design-system/commit/016556051391a3536b0bb0b36e2179f84eeda6cd))

## [5.12.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.12.2...@kaizen/date-picker@5.12.3) (2022-10-24)

**Note:** Version bump only for package @kaizen/date-picker

## [5.12.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.12.1...@kaizen/date-picker@5.12.2) (2022-10-20)

**Note:** Version bump only for package @kaizen/date-picker

## [5.12.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.12.0...@kaizen/date-picker@5.12.1) (2022-10-19)

**Note:** Version bump only for package @kaizen/date-picker

# [5.12.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.11.11...@kaizen/date-picker@5.12.0) (2022-10-18)

### Features

- **timepicker:** add timepicker component ([#3017](https://github.com/cultureamp/kaizen-design-system/issues/3017)) ([225f85d](https://github.com/cultureamp/kaizen-design-system/commit/225f85dd0a2b33791320cc56b3d53a50fbfb5d2b))

## [5.11.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.11.10...@kaizen/date-picker@5.11.11) (2022-10-06)

**Note:** Version bump only for package @kaizen/date-picker

## [5.11.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.11.9...@kaizen/date-picker@5.11.10) (2022-10-02)

**Note:** Version bump only for package @kaizen/date-picker

## [5.11.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.11.8...@kaizen/date-picker@5.11.9) (2022-09-30)

**Note:** Version bump only for package @kaizen/date-picker

## [5.11.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.11.7...@kaizen/date-picker@5.11.8) (2022-09-26)

**Note:** Version bump only for package @kaizen/date-picker

## [5.11.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.11.6...@kaizen/date-picker@5.11.7) (2022-09-14)

**Note:** Version bump only for package @kaizen/date-picker

## [5.11.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.11.5...@kaizen/date-picker@5.11.6) (2022-09-14)

**Note:** Version bump only for package @kaizen/date-picker

## [5.11.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.11.4...@kaizen/date-picker@5.11.5) (2022-09-14)

**Note:** Version bump only for package @kaizen/date-picker

## [5.11.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.11.3...@kaizen/date-picker@5.11.4) (2022-09-13)

**Note:** Version bump only for package @kaizen/date-picker

## [5.11.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.11.2...@kaizen/date-picker@5.11.3) (2022-09-12)

**Note:** Version bump only for package @kaizen/date-picker

## [5.11.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.11.1...@kaizen/date-picker@5.11.2) (2022-09-12)

**Note:** Version bump only for package @kaizen/date-picker

## [5.11.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.11.0...@kaizen/date-picker@5.11.1) (2022-09-12)

**Note:** Version bump only for package @kaizen/date-picker

# [5.11.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.10.6...@kaizen/date-picker@5.11.0) (2022-09-08)

### Features

- **date-picker:** update DatePicker description from "Format" to "Input format" ([#2906](https://github.com/cultureamp/kaizen-design-system/issues/2906)) ([95258bf](https://github.com/cultureamp/kaizen-design-system/commit/95258bf5e4a9347fcc38465c1f3a8c3cf9eee1df))

## [5.10.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.10.5...@kaizen/date-picker@5.10.6) (2022-09-07)

**Note:** Version bump only for package @kaizen/date-picker

## [5.10.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.10.4...@kaizen/date-picker@5.10.5) (2022-09-05)

**Note:** Version bump only for package @kaizen/date-picker

## [5.10.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.10.3...@kaizen/date-picker@5.10.4) (2022-09-02)

**Note:** Version bump only for package @kaizen/date-picker

## [5.10.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.10.2...@kaizen/date-picker@5.10.3) (2022-08-22)

**Note:** Version bump only for package @kaizen/date-picker

## [5.10.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.10.1...@kaizen/date-picker@5.10.2) (2022-08-19)

**Note:** Version bump only for package @kaizen/date-picker

## [5.10.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.10.0...@kaizen/date-picker@5.10.1) (2022-08-18)

**Note:** Version bump only for package @kaizen/date-picker

# [5.10.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.9.3...@kaizen/date-picker@5.10.0) (2022-08-18)

### Features

- update react to 16.14.0 ([#2922](https://github.com/cultureamp/kaizen-design-system/issues/2922)) ([22878be](https://github.com/cultureamp/kaizen-design-system/commit/22878beee1884e2f58d0447b3908321937175228))

## [5.9.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.9.2...@kaizen/date-picker@5.9.3) (2022-08-18)

**Note:** Version bump only for package @kaizen/date-picker

## [5.9.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.9.1...@kaizen/date-picker@5.9.2) (2022-08-16)

**Note:** Version bump only for package @kaizen/date-picker

## [5.9.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.9.0...@kaizen/date-picker@5.9.1) (2022-08-11)

**Note:** Version bump only for package @kaizen/date-picker

# [5.9.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.8.2...@kaizen/date-picker@5.9.0) (2022-08-10)

### Features

- **date-picker:** render inbuilt validation when props not set ([#2903](https://github.com/cultureamp/kaizen-design-system/issues/2903)) ([1c31048](https://github.com/cultureamp/kaizen-design-system/commit/1c310483dbd83fab892d669711811e6a0648de6a))

## [5.8.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.8.1...@kaizen/date-picker@5.8.2) (2022-08-09)

**Note:** Version bump only for package @kaizen/date-picker

## [5.8.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.8.0...@kaizen/date-picker@5.8.1) (2022-08-08)

**Note:** Version bump only for package @kaizen/date-picker

# [5.8.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.7.0...@kaizen/date-picker@5.8.0) (2022-08-08)

### Features

- **date-picker:** validate input on pressing Enter key ([#2897](https://github.com/cultureamp/kaizen-design-system/issues/2897)) ([58baa42](https://github.com/cultureamp/kaizen-design-system/commit/58baa420ca755ae074a76d1c12c42f453b29b6e3))

# [5.7.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.6.11...@kaizen/date-picker@5.7.0) (2022-08-04)

### Features

- **date-picker:** add fallback date to focus on for calendar ([#2894](https://github.com/cultureamp/kaizen-design-system/issues/2894)) ([c26b6ec](https://github.com/cultureamp/kaizen-design-system/commit/c26b6ecec1bc6902068ca4db261f71be916da067))

## [5.6.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.6.10...@kaizen/date-picker@5.6.11) (2022-08-04)

**Note:** Version bump only for package @kaizen/date-picker

## [5.6.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.6.9...@kaizen/date-picker@5.6.10) (2022-08-03)

### Bug Fixes

- **date-picker:** remove unnecessary :not(.outside) selectors in Calendar styles ([#2890](https://github.com/cultureamp/kaizen-design-system/issues/2890)) ([c354d04](https://github.com/cultureamp/kaizen-design-system/commit/c354d042092ab35c5e4decfc565ea8d5663318e3))

## [5.6.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.6.8...@kaizen/date-picker@5.6.9) (2022-08-02)

**Note:** Version bump only for package @kaizen/date-picker

## [5.6.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.6.7...@kaizen/date-picker@5.6.8) (2022-08-01)

**Note:** Version bump only for package @kaizen/date-picker

## [5.6.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.6.6...@kaizen/date-picker@5.6.7) (2022-07-27)

**Note:** Version bump only for package @kaizen/date-picker

## [5.6.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.6.5...@kaizen/date-picker@5.6.6) (2022-07-27)

**Note:** Version bump only for package @kaizen/date-picker

## [5.6.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.6.4...@kaizen/date-picker@5.6.5) (2022-07-27)

**Note:** Version bump only for package @kaizen/date-picker

## [5.6.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.6.3...@kaizen/date-picker@5.6.4) (2022-07-26)

**Note:** Version bump only for package @kaizen/date-picker

## [5.6.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.6.2...@kaizen/date-picker@5.6.3) (2022-07-22)

**Note:** Version bump only for package @kaizen/date-picker

## [5.6.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.6.1...@kaizen/date-picker@5.6.2) (2022-07-21)

**Note:** Version bump only for package @kaizen/date-picker

## [5.6.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.6.0...@kaizen/date-picker@5.6.1) (2022-07-20)

**Note:** Version bump only for package @kaizen/date-picker

# [5.6.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.5.2...@kaizen/date-picker@5.6.0) (2022-07-10)

### Features

- update focus and hover styles for Calendar component ([#2855](https://github.com/cultureamp/kaizen-design-system/issues/2855)) ([909622d](https://github.com/cultureamp/kaizen-design-system/commit/909622d225889e64e93c2c19d111b200757b01fd))

## [5.5.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.5.1...@kaizen/date-picker@5.5.2) (2022-07-08)

**Note:** Version bump only for package @kaizen/date-picker

## [5.5.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.5.0...@kaizen/date-picker@5.5.1) (2022-07-07)

**Note:** Version bump only for package @kaizen/date-picker

# [5.5.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.4.2...@kaizen/date-picker@5.5.0) (2022-07-06)

### Features

- update package file structure ([#2851](https://github.com/cultureamp/kaizen-design-system/issues/2851)) ([6b9902b](https://github.com/cultureamp/kaizen-design-system/commit/6b9902bc4cf726928a73317d4b1fc8d2f5c4683a))

## [5.4.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.4.1...@kaizen/date-picker@5.4.2) (2022-07-06)

**Note:** Version bump only for package @kaizen/date-picker

## [5.4.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.4.0...@kaizen/date-picker@5.4.1) (2022-07-06)

**Note:** Version bump only for package @kaizen/date-picker

# [5.4.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.3.2...@kaizen/date-picker@5.4.0) (2022-07-05)

### Features

- Add RTL styles to Calendar and DateInput ([#2842](https://github.com/cultureamp/kaizen-design-system/issues/2842)) ([b1eece4](https://github.com/cultureamp/kaizen-design-system/commit/b1eece45056b57043d445509d47f2e8fd9362c69))

## [5.3.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.3.1...@kaizen/date-picker@5.3.2) (2022-06-30)

### Bug Fixes

- lexical error on sass variable ([#2843](https://github.com/cultureamp/kaizen-design-system/issues/2843)) ([596d554](https://github.com/cultureamp/kaizen-design-system/commit/596d55425deaa5f4f1e6cb76c6f98cbc84a2d884))

## [5.3.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.3.0...@kaizen/date-picker@5.3.1) (2022-06-30)

**Note:** Version bump only for package @kaizen/date-picker

# [5.3.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.2.0...@kaizen/date-picker@5.3.0) (2022-06-30)

### Features

- Add en-AU and en-US localisation ([#2839](https://github.com/cultureamp/kaizen-design-system/issues/2839)) ([4d89517](https://github.com/cultureamp/kaizen-design-system/commit/4d89517a2a98a6b3bc2bff74e43954ba369fc9a8))

# [5.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.1.3...@kaizen/date-picker@5.2.0) (2022-06-28)

### Features

- refactor DateRangePicker and add tests ([#2791](https://github.com/cultureamp/kaizen-design-system/issues/2791)) ([47cdd9e](https://github.com/cultureamp/kaizen-design-system/commit/47cdd9ed5e54675ff247109fd89a958570bdc439))

## [5.1.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.1.2...@kaizen/date-picker@5.1.3) (2022-06-28)

### Bug Fixes

- **date-picker:** Update popper to be fixed ([#2838](https://github.com/cultureamp/kaizen-design-system/issues/2838)) ([6889c6a](https://github.com/cultureamp/kaizen-design-system/commit/6889c6af321b1688499e8b29f7e4ea812901ddbc))

## [5.1.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.1.1...@kaizen/date-picker@5.1.2) (2022-06-28)

### Bug Fixes

- update calendar to check for Invalid Date type Date ([#2835](https://github.com/cultureamp/kaizen-design-system/issues/2835)) ([121890d](https://github.com/cultureamp/kaizen-design-system/commit/121890d38e19ec743eca9efce00f0bd76a71303a))

## [5.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.1.0...@kaizen/date-picker@5.1.1) (2022-06-23)

**Note:** Version bump only for package @kaizen/date-picker

# [5.1.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.0.9...@kaizen/date-picker@5.1.0) (2022-06-23)

### Features

- open calendar on click and focus on input ([#2794](https://github.com/cultureamp/kaizen-design-system/issues/2794)) ([b96d549](https://github.com/cultureamp/kaizen-design-system/commit/b96d54958394303a195dbe2aa65a5f49848a05cb))

## [5.0.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.0.8...@kaizen/date-picker@5.0.9) (2022-06-22)

**Note:** Version bump only for package @kaizen/date-picker

## [5.0.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.0.7...@kaizen/date-picker@5.0.8) (2022-06-21)

**Note:** Version bump only for package @kaizen/date-picker

## [5.0.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.0.6...@kaizen/date-picker@5.0.7) (2022-06-21)

**Note:** Version bump only for package @kaizen/date-picker

## [5.0.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.0.5...@kaizen/date-picker@5.0.6) (2022-06-21)

**Note:** Version bump only for package @kaizen/date-picker

## [5.0.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.0.4...@kaizen/date-picker@5.0.5) (2022-06-21)

**Note:** Version bump only for package @kaizen/date-picker

## [5.0.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.0.3...@kaizen/date-picker@5.0.4) (2022-06-20)

**Note:** Version bump only for package @kaizen/date-picker

## [5.0.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.0.2...@kaizen/date-picker@5.0.3) (2022-06-20)

**Note:** Version bump only for package @kaizen/date-picker

## [5.0.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.0.1...@kaizen/date-picker@5.0.2) (2022-06-16)

**Note:** Version bump only for package @kaizen/date-picker

## [5.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@5.0.0...@kaizen/date-picker@5.0.1) (2022-06-09)

**Note:** Version bump only for package @kaizen/date-picker

# [5.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@4.0.1...@kaizen/date-picker@5.0.0) (2022-06-07)

### Features

- Upgrade react-day-picker to v8 ([#2761](https://github.com/cultureamp/kaizen-design-system/issues/2761)) ([2dccc54](https://github.com/cultureamp/kaizen-design-system/commit/2dccc54e029492b1a5398a9e6d52550ed5de13cf))

### BREAKING CHANGES

- upgrade react-day-picker to v8

- rename Calendar prop `styles` to `popperStyles`

- rename Calendar prop `attributes` to `popperAttributes`

- rename Calendar, DatePicker, DateRangePicker prop `initialMonth` to `defaultMonth`

- rename Calendar, DatePicker, DateRangePicker prop `firstDayOfWeek` to `weekStartsOn`

- update Calendar props `disabledDays`, `onDayChange`, `selectedRange`, `modifiers` to match new rdp types

- remove Calendar props `range` and `onKeyDown`

- add Calendar prop `mode`

- update DateInput `disabledDays` type to `Matcher`

- update DatePicker, DateRangePicker props `disabledRange`, `disabledBeforeAfter` to match new rdp types

- update DateRangePicker prop `onChange` to match new rdp type

- feat: remove CalendarNav component

- test: add more tests to calculateDisabledDays

- refactor: add type guard to allow DayOfWeek to be compatible with weekStartsOn

Co-authored-by: Cassandra Tam <cassandra.tam@cultureamp.com>

## [4.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@4.0.0...@kaizen/date-picker@4.0.1) (2022-06-06)

**Note:** Version bump only for package @kaizen/date-picker

# [4.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@3.1.5...@kaizen/date-picker@4.0.0) (2022-05-31)

### Features

- Add validation to DatePicker ([#2729](https://github.com/cultureamp/kaizen-design-system/issues/2729)) ([9982c85](https://github.com/cultureamp/kaizen-design-system/commit/9982c858fcbca9a0d5c7ef42cb3bda5ce45a4781))

### BREAKING CHANGES

- Handle validation within DatePicker.
  Add new required props for validation: -`onValidate` callback function as a prop of DatePicker.

* `status`
* `validationMessage`

* Remove deprecated Input Props

## [3.1.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@3.1.4...@kaizen/date-picker@3.1.5) (2022-05-30)

**Note:** Version bump only for package @kaizen/date-picker

## [3.1.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@3.1.3...@kaizen/date-picker@3.1.4) (2022-05-30)

**Note:** Version bump only for package @kaizen/date-picker

## [3.1.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@3.1.2...@kaizen/date-picker@3.1.3) (2022-05-30)

**Note:** Version bump only for package @kaizen/date-picker

## [3.1.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@3.1.1...@kaizen/date-picker@3.1.2) (2022-05-30)

**Note:** Version bump only for package @kaizen/date-picker

## [3.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@3.1.0...@kaizen/date-picker@3.1.1) (2022-05-24)

**Note:** Version bump only for package @kaizen/date-picker

# [3.1.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@3.0.6...@kaizen/date-picker@3.1.0) (2022-05-20)

### Features

- add compatibility for react-18 ([#2731](https://github.com/cultureamp/kaizen-design-system/issues/2731)) ([0051f4c](https://github.com/cultureamp/kaizen-design-system/commit/0051f4cee82895acc2c2f44fc7bf8063857de57e))

## [3.0.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@3.0.5...@kaizen/date-picker@3.0.6) (2022-05-19)

**Note:** Version bump only for package @kaizen/date-picker

## [3.0.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@3.0.4...@kaizen/date-picker@3.0.5) (2022-05-19)

**Note:** Version bump only for package @kaizen/date-picker

## [3.0.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@3.0.3...@kaizen/date-picker@3.0.4) (2022-05-16)

**Note:** Version bump only for package @kaizen/date-picker

## [3.0.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@3.0.2...@kaizen/date-picker@3.0.3) (2022-05-12)

**Note:** Version bump only for package @kaizen/date-picker

## [3.0.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@3.0.1...@kaizen/date-picker@3.0.2) (2022-05-11)

### Bug Fixes

- update DateRangePicker props name ([#2722](https://github.com/cultureamp/kaizen-design-system/issues/2722)) ([a53fff0](https://github.com/cultureamp/kaizen-design-system/commit/a53fff075a06d7d885d87e9720f579544b9d5f25))

## [3.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@3.0.0...@kaizen/date-picker@3.0.1) (2022-05-11)

**Note:** Version bump only for package @kaizen/date-picker

# [3.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@2.1.10...@kaizen/date-picker@3.0.0) (2022-05-10)

### Features

- DateInputPicker ([#2718](https://github.com/cultureamp/kaizen-design-system/issues/2718)) ([ac1bdf0](https://github.com/cultureamp/kaizen-design-system/commit/ac1bdf0ab81f5a14a0f3eda3810d2a026a57125c))

### BREAKING CHANGES

- Complete refactor of DatePicker to utilise the new 'DateInput' sub component. This enables users to type a date via the input, as well as select a date through the 'Calendar' dialog picker. Note the UX and design have also been updated as a result of this change.

- 'value' prop has been renamed to 'selectedDay'.
- 'onChange' prop has been renamed to 'OnDayChange'.
- New 'description' prop (optional) - Displays a description message on the input, by default "format: mm/dd/yyyy" will display.
- New 'onButtonClick' prop (optional) - Overrides the calendar icon button onClick event.
- 'id' prop is now required on the sub-component 'Calendar' if you are using it directly.

Co-authored-by: Lloyd Stubber <lloyd@squareyes.info>

## [2.1.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@2.1.9...@kaizen/date-picker@2.1.10) (2022-05-03)

**Note:** Version bump only for package @kaizen/date-picker

## [2.1.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@2.1.8...@kaizen/date-picker@2.1.9) (2022-05-02)

**Note:** Version bump only for package @kaizen/date-picker

## [2.1.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@2.1.7...@kaizen/date-picker@2.1.8) (2022-04-29)

**Note:** Version bump only for package @kaizen/date-picker

## [2.1.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@2.1.6...@kaizen/date-picker@2.1.7) (2022-04-27)

**Note:** Version bump only for package @kaizen/date-picker

## [2.1.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@2.1.5...@kaizen/date-picker@2.1.6) (2022-04-27)

**Note:** Version bump only for package @kaizen/date-picker

## [2.1.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@2.1.4...@kaizen/date-picker@2.1.5) (2022-04-22)

**Note:** Version bump only for package @kaizen/date-picker

## [2.1.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@2.1.3...@kaizen/date-picker@2.1.4) (2022-04-14)

**Note:** Version bump only for package @kaizen/date-picker

## [2.1.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@2.1.2...@kaizen/date-picker@2.1.3) (2022-04-14)

**Note:** Version bump only for package @kaizen/date-picker

## [2.1.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@2.1.1...@kaizen/date-picker@2.1.2) (2022-04-13)

**Note:** Version bump only for package @kaizen/date-picker

## [2.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@2.1.0...@kaizen/date-picker@2.1.1) (2022-04-11)

**Note:** Version bump only for package @kaizen/date-picker

# [2.1.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@2.0.12...@kaizen/date-picker@2.1.0) (2022-04-08)

### Features

- create daterangepicker, formatting utils and tests ([#2649](https://github.com/cultureamp/kaizen-design-system/issues/2649)) ([d4787fa](https://github.com/cultureamp/kaizen-design-system/commit/d4787fa09f396313df612ce24bab3d23b22814e4))

## [2.0.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@2.0.11...@kaizen/date-picker@2.0.12) (2022-04-03)

**Note:** Version bump only for package @kaizen/date-picker

## [2.0.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@2.0.10...@kaizen/date-picker@2.0.11) (2022-04-01)

**Note:** Version bump only for package @kaizen/date-picker

## [2.0.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@2.0.9...@kaizen/date-picker@2.0.10) (2022-03-31)

**Note:** Version bump only for package @kaizen/date-picker

## [2.0.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@2.0.8...@kaizen/date-picker@2.0.9) (2022-03-31)

**Note:** Version bump only for package @kaizen/date-picker

## [2.0.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@2.0.7...@kaizen/date-picker@2.0.8) (2022-03-30)

**Note:** Version bump only for package @kaizen/date-picker

## [2.0.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@2.0.6...@kaizen/date-picker@2.0.7) (2022-03-29)

**Note:** Version bump only for package @kaizen/date-picker

## [2.0.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@2.0.5...@kaizen/date-picker@2.0.6) (2022-03-23)

**Note:** Version bump only for package @kaizen/date-picker

## [2.0.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@2.0.4...@kaizen/date-picker@2.0.5) (2022-03-22)

**Note:** Version bump only for package @kaizen/date-picker

## [2.0.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@2.0.3...@kaizen/date-picker@2.0.4) (2022-03-21)

**Note:** Version bump only for package @kaizen/date-picker

## [2.0.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@2.0.2...@kaizen/date-picker@2.0.3) (2022-03-18)

**Note:** Version bump only for package @kaizen/date-picker

## [2.0.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@2.0.1...@kaizen/date-picker@2.0.2) (2022-03-17)

**Note:** Version bump only for package @kaizen/date-picker

## [2.0.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@2.0.0...@kaizen/date-picker@2.0.1) (2022-03-17)

**Note:** Version bump only for package @kaizen/date-picker

# [2.0.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@1.5.4...@kaizen/date-picker@2.0.0) (2022-03-16)

### Features

- rename `classNameAndIHaveSpokenToDST` to `classNameOverride` ([#2623](https://github.com/cultureamp/kaizen-design-system/issues/2623)) ([0ad2710](https://github.com/cultureamp/kaizen-design-system/commit/0ad2710f5e4b9a9d6b5a40ae72741a88669792c1))

### BREAKING CHANGES

- `classNameAndIHaveSpokenToDST` renamed to `classNameOverride`

## [1.5.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@1.5.3...@kaizen/date-picker@1.5.4) (2022-03-16)

**Note:** Version bump only for package @kaizen/date-picker

## [1.5.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@1.5.2...@kaizen/date-picker@1.5.3) (2022-03-16)

**Note:** Version bump only for package @kaizen/date-picker

## [1.5.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@1.5.1...@kaizen/date-picker@1.5.2) (2022-03-11)

**Note:** Version bump only for package @kaizen/date-picker

## [1.5.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@1.5.0...@kaizen/date-picker@1.5.1) (2022-03-09)

**Note:** Version bump only for package @kaizen/date-picker

# [1.5.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@1.4.3...@kaizen/date-picker@1.5.0) (2022-03-08)

### Features

- update to use FocusOn ([#2587](https://github.com/cultureamp/kaizen-design-system/issues/2587)) ([f310223](https://github.com/cultureamp/kaizen-design-system/commit/f310223a22ee8d9f8a22badedc74171baec80cc0))

## [1.4.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@1.4.2...@kaizen/date-picker@1.4.3) (2022-03-07)

**Note:** Version bump only for package @kaizen/date-picker

## [1.4.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@1.4.1...@kaizen/date-picker@1.4.2) (2022-03-07)

**Note:** Version bump only for package @kaizen/date-picker

## [1.4.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@1.4.0...@kaizen/date-picker@1.4.1) (2022-03-07)

**Note:** Version bump only for package @kaizen/date-picker

# [1.4.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@1.3.1...@kaizen/date-picker@1.4.0) (2022-03-04)

### Features

- use focus-visible for focus styling ([#2582](https://github.com/cultureamp/kaizen-design-system/issues/2582)) ([2131189](https://github.com/cultureamp/kaizen-design-system/commit/213118901870538f910ca3cd605b74bd1c0b6f1f))

## [1.3.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@1.3.0...@kaizen/date-picker@1.3.1) (2022-03-03)

**Note:** Version bump only for package @kaizen/date-picker

# [1.3.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@1.2.3...@kaizen/date-picker@1.3.0) (2022-03-03)

### Features

- Datepicker chromatic stories ([#2579](https://github.com/cultureamp/kaizen-design-system/issues/2579)) ([649fc1e](https://github.com/cultureamp/kaizen-design-system/commit/649fc1ef4c6e5ccce682f5b42b0cb169f49b18b3))

## [1.2.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@1.2.2...@kaizen/date-picker@1.2.3) (2022-03-01)

**Note:** Version bump only for package @kaizen/date-picker

## [1.2.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@1.2.1...@kaizen/date-picker@1.2.2) (2022-03-01)

**Note:** Version bump only for package @kaizen/date-picker

## [1.2.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@1.2.0...@kaizen/date-picker@1.2.1) (2022-03-01)

**Note:** Version bump only for package @kaizen/date-picker

# [1.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@1.1.9...@kaizen/date-picker@1.2.0) (2022-03-01)

### Features

- convert date picker input to button for better a11y support ([#2543](https://github.com/cultureamp/kaizen-design-system/issues/2543)) ([e8ce160](https://github.com/cultureamp/kaizen-design-system/commit/e8ce1600116de0bf41fe0ce843ea5fe28401d958))

## [1.1.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@1.1.8...@kaizen/date-picker@1.1.9) (2022-02-28)

**Note:** Version bump only for package @kaizen/date-picker

## [1.1.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@1.1.7...@kaizen/date-picker@1.1.8) (2022-02-28)

**Note:** Version bump only for package @kaizen/date-picker

## [1.1.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@1.1.6...@kaizen/date-picker@1.1.7) (2022-02-28)

**Note:** Version bump only for package @kaizen/date-picker

## [1.1.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@1.1.5...@kaizen/date-picker@1.1.6) (2022-02-23)

**Note:** Version bump only for package @kaizen/date-picker

## [1.1.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@1.1.4...@kaizen/date-picker@1.1.5) (2022-02-22)

**Note:** Version bump only for package @kaizen/date-picker

## [1.1.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@1.1.3...@kaizen/date-picker@1.1.4) (2022-02-21)

### Bug Fixes

- give calendar popup a z-index and background-color ([#2548](https://github.com/cultureamp/kaizen-design-system/issues/2548)) ([14bb305](https://github.com/cultureamp/kaizen-design-system/commit/14bb3055e3f3ab5bb837cd5d8e725480971af0ab))

## [1.1.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@1.1.2...@kaizen/date-picker@1.1.3) (2022-02-18)

**Note:** Version bump only for package @kaizen/date-picker

## [1.1.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@1.1.1...@kaizen/date-picker@1.1.2) (2022-02-17)

**Note:** Version bump only for package @kaizen/date-picker

## [1.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/date-picker@1.1.0...@kaizen/date-picker@1.1.1) (2022-02-17)

### Bug Fixes

- export date picker props to fix build ([#2541](https://github.com/cultureamp/kaizen-design-system/issues/2541)) ([44004c9](https://github.com/cultureamp/kaizen-design-system/commit/44004c939d5162a5cd3c7ff37929c1107edd0480))

# 1.1.0 (2022-02-16)

### Features

- DatePicker ([#2526](https://github.com/cultureamp/kaizen-design-system/issues/2526)) ([f9d6da6](https://github.com/cultureamp/kaizen-design-system/commit/f9d6da6c857d201a0088619f8a75a7078c962cbc)), closes [#2511](https://github.com/cultureamp/kaizen-design-system/issues/2511)
