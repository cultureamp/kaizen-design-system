# Change Log

## 1.0.4

### Patch Changes

- [#3842](https://github.com/cultureamp/kaizen-design-system/pull/3842) [`ff6ff4130`](https://github.com/cultureamp/kaizen-design-system/commit/ff6ff41308080599ec4f44ce644f698219db23f1) - Update filter method for tailwind spacing tokens to allow default tailwind width values
  - This fixes the !Nan filtered our tailwind percentile and string values
  - Updated stories that use w-100 to w-full since the original intention was to be compile to width: 100%

## 1.0.3

### Patch Changes

- [#3739](https://github.com/cultureamp/kaizen-design-system/pull/3739) [`c6434ffbf`](https://github.com/cultureamp/kaizen-design-system/commit/c6434ffbf95b4d3ddb35d906637864882628755d) - Introducing new tokens for max width of paragraphs for better readability

- Updated dependencies [[`c6434ffbf`](https://github.com/cultureamp/kaizen-design-system/commit/c6434ffbf95b4d3ddb35d906637864882628755d)]:
  - @kaizen/design-tokens@10.3.10

## 1.0.2

### Patch Changes

- [#3621](https://github.com/cultureamp/kaizen-design-system/pull/3621) [`4967215eb`](https://github.com/cultureamp/kaizen-design-system/commit/4967215eb05298f69dbdf8e9cb44f4e0665e7d8f) - Fix files whitelist to include scss files

- Updated dependencies [[`4967215eb`](https://github.com/cultureamp/kaizen-design-system/commit/4967215eb05298f69dbdf8e9cb44f4e0665e7d8f)]:
  - @kaizen/design-tokens@10.3.9

## 1.0.1

### Patch Changes

- [#3595](https://github.com/cultureamp/kaizen-design-system/pull/3595) [`0e0750e87`](https://github.com/cultureamp/kaizen-design-system/commit/0e0750e872e3381420df7bf2947d9deb9db8b705) - Remove .turbo from distributed files

- [#3616](https://github.com/cultureamp/kaizen-design-system/pull/3616) [`e4f5f5ce5`](https://github.com/cultureamp/kaizen-design-system/commit/e4f5f5ce50b4e1a4aa8b189c247d0f2a8fea722f) - Fix packagejson files whitelist to only include publish files

- [#3611](https://github.com/cultureamp/kaizen-design-system/pull/3611) [`589244ad0`](https://github.com/cultureamp/kaizen-design-system/commit/589244ad0c307edca845d19843f2db282050fe29) - Fix supported design-tokens versions

- Updated dependencies [[`0e0750e87`](https://github.com/cultureamp/kaizen-design-system/commit/0e0750e872e3381420df7bf2947d9deb9db8b705), [`e4f5f5ce5`](https://github.com/cultureamp/kaizen-design-system/commit/e4f5f5ce50b4e1a4aa8b189c247d0f2a8fea722f)]:
  - @kaizen/design-tokens@10.3.8

## 1.0.0

### Major Changes

- [#3591](https://github.com/cultureamp/kaizen-design-system/pull/3591) [`2aecb899e`](https://github.com/cultureamp/kaizen-design-system/commit/2aecb899e9f47c9324a2c06a0f76d641cb8620e5) - First official release. Reverts height, maxHeight, width and maxWidth to TW defaults, and removes custom max-width breakpoints.

  BREAKING CHANGES:
  Non-arbitrary uses of `w-`, `h-`, `max-w` and `max-h` utilities will need to be updated inline with Tailwind's defaults (if there is an equivalent). For example:
  `w-25` becomes `w-1/4`.
  If there is no equivalent in the TW default, an arbitrary value can be used. For example:
  `max-w-25` becomes `max-w-[25%]`

  Max width breakpoints have been removed, and will need to be replaced with an equivalent min-width breakpoint, or arbitrary breakpoint.
  For example: `bg-red-500 md-max:bg-green-500`
  This would ideally be reversed to it's mobile-first equivalent: `bg-green-500 md:bg-red-500`.
  If this isn't plausible, a max-width breakpoint can still be achieved with an arbitrary value: `bg-red-500 max-[768px]:bg-green-500`.

### Patch Changes

- Updated dependencies [[`cc96d9835`](https://github.com/cultureamp/kaizen-design-system/commit/cc96d98351ae380fe1a1e8a33d65d80232ed7a57)]:
  - @kaizen/design-tokens@10.3.7

## 0.6.6

### Patch Changes

- [#3585](https://github.com/cultureamp/kaizen-design-system/pull/3585) [`739d87b0c`](https://github.com/cultureamp/kaizen-design-system/commit/739d87b0cd917e7c0f3becf2cc0fd8f9667f7a6c) - Update dependencies:
  - `tailwindcss` to `^3.3.2`
- Updated dependencies [[`739d87b0c`](https://github.com/cultureamp/kaizen-design-system/commit/739d87b0cd917e7c0f3becf2cc0fd8f9667f7a6c)]:
  - @kaizen/design-tokens@10.3.6

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.6.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.6.4...@kaizen/tailwind@0.6.5) (2023-04-06)

**Note:** Version bump only for package @kaizen/tailwind

## [0.6.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.6.3...@kaizen/tailwind@0.6.4) (2023-03-31)

**Note:** Version bump only for package @kaizen/tailwind

## [0.6.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.6.2...@kaizen/tailwind@0.6.3) (2023-03-29)

**Note:** Version bump only for package @kaizen/tailwind

## [0.6.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.6.1...@kaizen/tailwind@0.6.2) (2023-03-29)

**Note:** Version bump only for package @kaizen/tailwind

## [0.6.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.6.0...@kaizen/tailwind@0.6.1) (2023-03-23)

**Note:** Version bump only for package @kaizen/tailwind

# [0.6.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.5.2...@kaizen/tailwind@0.6.0) (2023-03-21)

### Bug Fixes

- **tailwind:** remove w- from borderWidth utilities ([#3367](https://github.com/cultureamp/kaizen-design-system/issues/3367)) ([782b0ff](https://github.com/cultureamp/kaizen-design-system/commit/782b0ff4f4132c6e267b2a2127d0210267573dbd))

### BREAKING CHANGES

- **tailwind:** Any border width utilities will need to be renamed without the `w-`. These include:
  border-w-? border-x-w-? border-y-w-? border-t-w-? border-b-w-? border-r-w-? border-l-w-?

- docs(tailwind): adds card to border-width stories, explaining that other prefixes are available

## [0.5.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.5.1...@kaizen/tailwind@0.5.2) (2023-03-14)

**Note:** Version bump only for package @kaizen/tailwind

## [0.5.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.5.0...@kaizen/tailwind@0.5.1) (2023-02-21)

**Note:** Version bump only for package @kaizen/tailwind

# [0.5.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.4.2...@kaizen/tailwind@0.5.0) (2023-02-20)

### Features

- Backport new pixel-based spacing tokens to design tokens ([#3279](https://github.com/cultureamp/kaizen-design-system/issues/3279)) ([a13da27](https://github.com/cultureamp/kaizen-design-system/commit/a13da271af79daafa93a144109b60d00c9f6111a))

## [0.4.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.4.1...@kaizen/tailwind@0.4.2) (2023-02-17)

**Note:** Version bump only for package @kaizen/tailwind

## [0.4.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.4.0...@kaizen/tailwind@0.4.1) (2023-02-17)

**Note:** Version bump only for package @kaizen/tailwind

# [0.4.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.3.4...@kaizen/tailwind@0.4.0) (2023-02-14)

### Features

- **tailwind:** Add spacing token for 6px/.375 rem ([#3269](https://github.com/cultureamp/kaizen-design-system/issues/3269)) ([7020545](https://github.com/cultureamp/kaizen-design-system/commit/7020545a294bb072ca151e08ef8d1c628b32b4dd))

## [0.3.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.3.3...@kaizen/tailwind@0.3.4) (2023-02-13)

**Note:** Version bump only for package @kaizen/tailwind

## [0.3.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.3.2...@kaizen/tailwind@0.3.3) (2023-02-12)

**Note:** Version bump only for package @kaizen/tailwind

## [0.3.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.3.1...@kaizen/tailwind@0.3.2) (2023-01-31)

**Note:** Version bump only for package @kaizen/tailwind

## [0.3.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.3.0...@kaizen/tailwind@0.3.1) (2023-01-31)

**Note:** Version bump only for package @kaizen/tailwind

# [0.3.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.2.7...@kaizen/tailwind@0.3.0) (2023-01-30)

### Features

- (tailwind) Add prettier package ([#3175](https://github.com/cultureamp/kaizen-design-system/issues/3175)) ([077b1b3](https://github.com/cultureamp/kaizen-design-system/commit/077b1b3ed69f7490859aa54597bcafe9ac8440c5))

## [0.2.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.2.6...@kaizen/tailwind@0.2.7) (2023-01-18)

**Note:** Version bump only for package @kaizen/tailwind

## [0.2.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.2.5...@kaizen/tailwind@0.2.6) (2023-01-18)

**Note:** Version bump only for package @kaizen/tailwind

## [0.2.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.2.4...@kaizen/tailwind@0.2.5) (2023-01-18)

**Note:** Version bump only for package @kaizen/tailwind

## [0.2.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.2.3...@kaizen/tailwind@0.2.4) (2023-01-05)

**Note:** Version bump only for package @kaizen/tailwind

## [0.2.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.2.2...@kaizen/tailwind@0.2.3) (2023-01-04)

**Note:** Version bump only for package @kaizen/tailwind

## [0.2.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.2.1...@kaizen/tailwind@0.2.2) (2023-01-04)

**Note:** Version bump only for package @kaizen/tailwind

## [0.2.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.2.0...@kaizen/tailwind@0.2.1) (2023-01-04)

**Note:** Version bump only for package @kaizen/tailwind

# [0.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.1.3...@kaizen/tailwind@0.2.0) (2022-12-15)

### Features

- update tokens presets ([#3165](https://github.com/cultureamp/kaizen-design-system/issues/3165)) ([ac963ef](https://github.com/cultureamp/kaizen-design-system/commit/ac963ef6bf5c30c345fc7f0911089b2ed4b15a49))

## [0.1.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.1.2...@kaizen/tailwind@0.1.3) (2022-12-15)

**Note:** Version bump only for package @kaizen/tailwind

## [0.1.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.1.1...@kaizen/tailwind@0.1.2) (2022-12-09)

**Note:** Version bump only for package @kaizen/tailwind

## [0.1.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/tailwind@0.1.0...@kaizen/tailwind@0.1.1) (2022-12-08)

**Note:** Version bump only for package @kaizen/tailwind

# 0.1.0 (2022-12-06)

### Features

- add tailwind beta release ([#3136](https://github.com/cultureamp/kaizen-design-system/issues/3136)) ([cacff22](https://github.com/cultureamp/kaizen-design-system/commit/cacff220e18ebdc6c2e24f28d5e363ad0ae3bc31)), closes [#3116](https://github.com/cultureamp/kaizen-design-system/issues/3116) [#3121](https://github.com/cultureamp/kaizen-design-system/issues/3121)
