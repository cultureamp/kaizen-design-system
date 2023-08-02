# Change Log

## 1.20.3

### Patch Changes

- [#3934](https://github.com/cultureamp/kaizen-design-system/pull/3934) [`32fc86349`](https://github.com/cultureamp/kaizen-design-system/commit/32fc86349f5228327da27766211ef172a86cc5e8) - Move `classNameOverride` to outer container of FilterMultiSelect removable trigger button.

## 1.20.2

### Patch Changes

- [#3895](https://github.com/cultureamp/kaizen-design-system/pull/3895) [`121ceabee`](https://github.com/cultureamp/kaizen-design-system/commit/121ceabee5ba09fa85b7769ac855cc968777c053) - Bump dependencies

## 1.20.1

### Patch Changes

- [#3911](https://github.com/cultureamp/kaizen-design-system/pull/3911) [`096b6bde8`](https://github.com/cultureamp/kaizen-design-system/commit/096b6bde8b795daa33dd91a5ea86a3b5de4461e9) - Add new translations

## 1.20.0

### Minor Changes

- [#3900](https://github.com/cultureamp/kaizen-design-system/pull/3900) [`5c3fa76e3`](https://github.com/cultureamp/kaizen-design-system/commit/5c3fa76e36773deac609828513fb15cb276f5fd6) - feat: add ErrorPage component

- [#3913](https://github.com/cultureamp/kaizen-design-system/pull/3913) [`53d365c96`](https://github.com/cultureamp/kaizen-design-system/commit/53d365c96eb19394aa62781b9b0fe996792cf6ce) - Change the FilterSelect popover width to be between 196-400px.

- [#3907](https://github.com/cultureamp/kaizen-design-system/pull/3907) [`b5eece4ab`](https://github.com/cultureamp/kaizen-design-system/commit/b5eece4abc1a0e6690824f0f8635d706d2797f99) - Add BrandMoment

## 1.19.3

### Patch Changes

- [#3815](https://github.com/cultureamp/kaizen-design-system/pull/3815) [`52e3d1f44`](https://github.com/cultureamp/kaizen-design-system/commit/52e3d1f441765f409ddb5c98dce1e407b707be0a) - Update dependencies

  - update to prettier v3 cause minor linting changes
  - update to prettier v3 required minor type fixes for format function in design-tokens

- [#3888](https://github.com/cultureamp/kaizen-design-system/pull/3888) [`fd55eaea8`](https://github.com/cultureamp/kaizen-design-system/commit/fd55eaea8658847c6b9455db3d9891a77387f563) - Fix bug in `FilterDatePicker` where popover would close when blurring input as soon as a value exists.

- Updated dependencies [[`c8cf582b9`](https://github.com/cultureamp/kaizen-design-system/commit/c8cf582b99c7f9644bf73ef2902c49461f23dd7e), [`52e3d1f44`](https://github.com/cultureamp/kaizen-design-system/commit/52e3d1f441765f409ddb5c98dce1e407b707be0a)]:
  - @kaizen/draft-tooltip@5.4.47
  - @kaizen/draft-badge@1.13.12
  - @kaizen/date-picker@6.2.3
  - @kaizen/draft-form@10.4.8

## 1.19.2

### Patch Changes

- [#3852](https://github.com/cultureamp/kaizen-design-system/pull/3852) [`2e0a8db1d`](https://github.com/cultureamp/kaizen-design-system/commit/2e0a8db1db16f7a7bda4ab3c7dbad5691238facf) - **FilterDateRangePicker**
  - Fixed issue where validation was not returning the correct input value
- Updated dependencies [[`2e0a8db1d`](https://github.com/cultureamp/kaizen-design-system/commit/2e0a8db1db16f7a7bda4ab3c7dbad5691238facf), [`6621d8912`](https://github.com/cultureamp/kaizen-design-system/commit/6621d89125658392205963f89e230660bc6fddc2)]:
  - @kaizen/date-picker@6.2.2
  - @kaizen/draft-form@10.4.7

## 1.19.1

### Patch Changes

- [#3861](https://github.com/cultureamp/kaizen-design-system/pull/3861) [`9c2a798ff`](https://github.com/cultureamp/kaizen-design-system/commit/9c2a798ff527c6fa4bad3e3299d0aad986384c2c) - Expose currently selected values on FilterBar via useFilterBarContext

- Updated dependencies [[`5afdddade`](https://github.com/cultureamp/kaizen-design-system/commit/5afdddaded55b173dc39e469a2dfa15fe135155f)]:
  - @kaizen/date-picker@6.2.1

## 1.19.0

### Minor Changes

- [#3858](https://github.com/cultureamp/kaizen-design-system/pull/3858) [`1303b7dc6`](https://github.com/cultureamp/kaizen-design-system/commit/1303b7dc6e3b761d19f955d58380f55ff30fffbf) - Add OptionalIntlProvider to KaizenProvider
  This change makes KaizenProvider set up an IntlProvider from the `@cultureamp/i18n-react-intl` package
  when one isn't present already in the consuming repo.
  This means that consumers implementing KaizenProvider will not need to set up their own IntlProvider to have
  translations in their app.

- [#3811](https://github.com/cultureamp/kaizen-design-system/pull/3811) [`99a1f1cef`](https://github.com/cultureamp/kaizen-design-system/commit/99a1f1cef00ddb046c7cfb26adfe986a4a7869bc) - Add internal translation support for FilterDateRangePicker.

  This change allows internal strings in FilterDateRangePicker to be translated when
  consuming app has set up an IntlProvider through `@cultureamp/i18n-react-intl`.
  For info regarding the set up process for Intl in Kaizen, see [here](https://cultureamp.design/storybook/?path=/docs/components-kaizen-provider-internationalization-in-kaizen--docs).

### Patch Changes

- [#3859](https://github.com/cultureamp/kaizen-design-system/pull/3859) [`f52f9d41b`](https://github.com/cultureamp/kaizen-design-system/commit/f52f9d41b2a607f1ce5885287635a71a59a8063f) - test

## 1.18.1

### Patch Changes

- [#3850](https://github.com/cultureamp/kaizen-design-system/pull/3850) [`713427924`](https://github.com/cultureamp/kaizen-design-system/commit/713427924bec6b2c7f81b90037360b62ae8ad8ce) - Remove OptionalIntlProvider from KaizenProvider.
  This change means that consumers will need to provide their own IntlProvider from `@cultureamp/i18n-react-intl`.
  For more info, see our [Internationalization in Kaizen docs](https://cultureamp.design/storybook/?path=/docs/components-kaizen-provider-internationalization-in-kaizen--docs)

- [#3722](https://github.com/cultureamp/kaizen-design-system/pull/3722) [`adb9c58e0`](https://github.com/cultureamp/kaizen-design-system/commit/adb9c58e0791ea08ebece42fb5e5ae47d2bc73c5) - **FilterDatePicker**

  - Fixed issue where selecting the dates from the date pickers would return a validation object containing the previously picked date rather than the current one in the `inputValue` key.
  - Fixed ref types. Only for internal usage.

- [#3847](https://github.com/cultureamp/kaizen-design-system/pull/3847) [`8d1b4ace1`](https://github.com/cultureamp/kaizen-design-system/commit/8d1b4ace17533c29d6fc7f849b3948e39879e73b) - - Update FilterBarMultiSelect to clear values when items change
  - Fix FilterBarContext type definitions to infer Id
  - Update FilterBarSelect to clear values when items change

## 1.18.0

### Minor Changes

- [#3812](https://github.com/cultureamp/kaizen-design-system/pull/3812) [`b5dad5623`](https://github.com/cultureamp/kaizen-design-system/commit/b5dad5623e5fc683fe88757478a9b1079498b494) - Add functionality for dependent filters to `<FilterBar>`.

  Consumers can now set a `isUsableWhen` attribute to their `filters`.
  Filters with this attribute will be checked against the current state
  and shown/hidden from the FilterBar options (both active/inactive) accordingly.

- [#3808](https://github.com/cultureamp/kaizen-design-system/pull/3808) [`7fdabc423`](https://github.com/cultureamp/kaizen-design-system/commit/7fdabc423641ce0c263bec056d09e18435d2beba) - What the change is:
  Adds the OptionalIntlProvider to KaizenProvider

  What feature it enables:
  This change provides support for internal translations in Kaizen components.
  With this change, when an app is wrapped in KaizenProvider it will allow Kaizen components
  with translations built in to translate their messages successfully.

### Patch Changes

- [#3809](https://github.com/cultureamp/kaizen-design-system/pull/3809) [`9e30ae7be`](https://github.com/cultureamp/kaizen-design-system/commit/9e30ae7be2428dc53c84edcc5bf0f763c84f80a7) - **Button**
  Remove `component-library` style imports by absorbing the styles.

- [#3793](https://github.com/cultureamp/kaizen-design-system/pull/3793) [`a791bd50d`](https://github.com/cultureamp/kaizen-design-system/commit/a791bd50d6538d5b8e18b02831d0108922b6199c) - Patch `@cultureamp/i18n-react-intl` dependency

- [#3793](https://github.com/cultureamp/kaizen-design-system/pull/3793) [`a791bd50d`](https://github.com/cultureamp/kaizen-design-system/commit/a791bd50d6538d5b8e18b02831d0108922b6199c) - Patch `react-focus-on` depdendency

- Updated dependencies [[`042e5971d`](https://github.com/cultureamp/kaizen-design-system/commit/042e5971d8ca883656b14e4f4438bb716b7c88c7), [`a791bd50d`](https://github.com/cultureamp/kaizen-design-system/commit/a791bd50d6538d5b8e18b02831d0108922b6199c)]:
  - @kaizen/date-picker@6.2.0

## 1.17.1

### Patch Changes

- [#3786](https://github.com/cultureamp/kaizen-design-system/pull/3786) [`bbb569f5d`](https://github.com/cultureamp/kaizen-design-system/commit/bbb569f5d55e9adb208ef0bf35d81ab97c50c89e) - Updates the future release /dist reference path in package.json
  - this will fix the imports for future components
  - ie: `import {Workflow} from "@kaizen/components/future"

## 1.17.0

### Minor Changes

- [#3781](https://github.com/cultureamp/kaizen-design-system/pull/3781) [`405d54ad2`](https://github.com/cultureamp/kaizen-design-system/commit/405d54ad2d1da5d30f64abeb6d2f0c0f73d2f098) - Add clear all functionality to FilterBar.

  All selected values are cleared, and any active removable filters are made inactive and moved into the Add Filters menu.

- [#3761](https://github.com/cultureamp/kaizen-design-system/pull/3761) [`41a305dee`](https://github.com/cultureamp/kaizen-design-system/commit/41a305dee9e22d612e127265f3b2e412100e1162) - Create /future release for Workflow component that updates Steps to array of objects and stepName to currentStepId
  - updates the stepName to currentStepId
  - updates steps from non-empty array of strings to non-empty array of Steps
    - exports Step and Steps types for convenience in consuming repos
  - refactor Workflow to use the new type and id to reference active steps from array
  - adds test coverage to ProgressStepper and improve docs

### Patch Changes

- [#3780](https://github.com/cultureamp/kaizen-design-system/pull/3780) [`abb973ab4`](https://github.com/cultureamp/kaizen-design-system/commit/abb973ab43e566910aa0898d6fa9c6d2a5e9f8c6) - Refactor FilterBar context state with less duplication of values.

- [#3783](https://github.com/cultureamp/kaizen-design-system/pull/3783) [`3c2c7ede9`](https://github.com/cultureamp/kaizen-design-system/commit/3c2c7ede9f835db3793d966c8f0126a0f2dbcd70) - Refactor FilterBar to loop through singular dispatch actions instead of having a separate batch action for the same result.

## 1.16.0

### Minor Changes

- [#3762](https://github.com/cultureamp/kaizen-design-system/pull/3762) [`ad68bd64a`](https://github.com/cultureamp/kaizen-design-system/commit/ad68bd64a76c7ce079f732851d751c40c40abcc0) - Add removable filters to FilterBar.
  This allows the user to hide filters which are less important/not being used.
  The filters can be added back to the active filters list through the Add Filters menu.

## 1.15.1

### Patch Changes

- [#3741](https://github.com/cultureamp/kaizen-design-system/pull/3741) [`2955df1a7`](https://github.com/cultureamp/kaizen-design-system/commit/2955df1a759d83d4375ce47e71763731a2c6b017) - Switch the import in `FilterMultiSelect` for `InputSearch` from `draft-form` to use the new component which is KAIO compatible.

## 1.15.0

### Minor Changes

- [#3689](https://github.com/cultureamp/kaizen-design-system/pull/3689) [`62c302774`](https://github.com/cultureamp/kaizen-design-system/commit/62c302774c981843613fc0f4c554345c70222350) - Add Button component which is mostly a copy of the original `@kaizen/button` with the exception of `icon` which now accepts JSX.Element instead.

### Patch Changes

- [#3689](https://github.com/cultureamp/kaizen-design-system/pull/3689) [`62c302774`](https://github.com/cultureamp/kaizen-design-system/commit/62c302774c981843613fc0f4c554345c70222350) - - Remove `component-library` as a dependency

  - Add `SVG` title to `aria-label` when it is meanigful.

- [#3730](https://github.com/cultureamp/kaizen-design-system/pull/3730) [`175fed21f`](https://github.com/cultureamp/kaizen-design-system/commit/175fed21f609bcee5cc287a92e39e1682167573d) - Fix the display of missing icons by migrating the `ClearButton` and `InputSearch` components as well as convert the `CheckIcon` and `SearchIcon` into React Icons which are used in `FilterMultiSelect`'s subcomponents.

## 1.14.0

### Minor Changes

- [#3727](https://github.com/cultureamp/kaizen-design-system/pull/3727) [`988f72305`](https://github.com/cultureamp/kaizen-design-system/commit/988f723056e2d4df600c6766a5a14586a63d9b7b) - Add FilterMultiSelect to KAIO and refactor to use FilterButton.
  Remove `@kaizen/select` from dependencies.

## 1.13.0

### Minor Changes

- [#3673](https://github.com/cultureamp/kaizen-design-system/pull/3673) [`24dca6f74`](https://github.com/cultureamp/kaizen-design-system/commit/24dca6f7416732a733b128a40193c9a6feb4f0c2) - KaizenProvider will now add @cultureamp/i18n-react-intl's StaticIntlProvider to
  the consuming app (if one isn't provided already). This ensures that Kaizen components
  with translated strings get translated properly in consuming repos.

### Patch Changes

- [#3723](https://github.com/cultureamp/kaizen-design-system/pull/3723) [`4caca6b44`](https://github.com/cultureamp/kaizen-design-system/commit/4caca6b44b550628acfe17aed2dc98fd1be4c12a) - - Remove ids and xlinks from React SVGs
  - Adds position sticky to Workflow Footer on desktop
  - Updates footer styles to add padding for small screen sizes
    - adds 400% story for chromatic
  - Adds z-index of 1 to navigation elements and 0 to main Workflow components
  - Adds word break for long step names

## 1.12.0

### Minor Changes

- [#3706](https://github.com/cultureamp/kaizen-design-system/pull/3706) [`2065dabbc`](https://github.com/cultureamp/kaizen-design-system/commit/2065dabbc440be17011bde11a9dca50517e2e155) - Add FilterbarMultiSelect component

- [#3667](https://github.com/cultureamp/kaizen-design-system/pull/3667) [`91f4f9a29`](https://github.com/cultureamp/kaizen-design-system/commit/91f4f9a297531bf56fad381184a9c11b21814e5b) - - Add FilterDatePicker component to allow consumers to have single date selection

  - Add FilterBarDatePicker component for FilterBar compatibility

- [#3705](https://github.com/cultureamp/kaizen-design-system/pull/3705) [`043b95ba0`](https://github.com/cultureamp/kaizen-design-system/commit/043b95ba043f6918897efa45e7ad648fc5ee7caa) - Retrofit FilterDateRangePicker to FilterBar

### Patch Changes

- Updated dependencies [[`91f4f9a29`](https://github.com/cultureamp/kaizen-design-system/commit/91f4f9a297531bf56fad381184a9c11b21814e5b), [`2065dabbc`](https://github.com/cultureamp/kaizen-design-system/commit/2065dabbc440be17011bde11a9dca50517e2e155)]:
  - @kaizen/date-picker@6.1.0
  - @kaizen/select@6.17.3

## 1.11.0

### Minor Changes

- [#3685](https://github.com/cultureamp/kaizen-design-system/pull/3685) [`4a4cb6019`](https://github.com/cultureamp/kaizen-design-system/commit/4a4cb6019365320fe76d83c44fd21b53dbea6938) - Add FilterBar and FilterBar.Select (extends FilterSelect).

### Patch Changes

- [#3685](https://github.com/cultureamp/kaizen-design-system/pull/3685) [`4a4cb6019`](https://github.com/cultureamp/kaizen-design-system/commit/4a4cb6019365320fe76d83c44fd21b53dbea6938) - Fix FilterSelect to find the matching item using the `selectedKey` prop when the item value is a number, as the useSelectState hook transforms the number to a string.

- [#3698](https://github.com/cultureamp/kaizen-design-system/pull/3698) [`858258df8`](https://github.com/cultureamp/kaizen-design-system/commit/858258df874036b6d937493142d427fb6eb881e5) - Change `FilterPopover` to position `absolute` instead of `fixed`.
  The `fixed` strategy causes contents to disappear off a page (not scrollable) when it goes beyond the window boundary.

## 1.10.1

### Patch Changes

- [#3695](https://github.com/cultureamp/kaizen-design-system/pull/3695) [`04661f9ee`](https://github.com/cultureamp/kaizen-design-system/commit/04661f9ee1962a3bcc2d93fabac8097e6128f32f) - This is a patch to manually trigger a re-release

## 1.10.0

### Minor Changes

- [#3687](https://github.com/cultureamp/kaizen-design-system/pull/3687) [`5b06b110e`](https://github.com/cultureamp/kaizen-design-system/commit/5b06b110e3831867827ee87cb9a387665dc0d644) - - remove dep on @kaizen/draft-modal as it was causing the compiled dist to fail on Next projects
  - remove WorkflowExit component from Workflow pkg
    - Update reference in docs and provide implementation example
  - Move Workflow Wrapper div into exportable component
    - Move styles into Wrapper folder

### Patch Changes

- [#3678](https://github.com/cultureamp/kaizen-design-system/pull/3678) [`d434bda3e`](https://github.com/cultureamp/kaizen-design-system/commit/d434bda3e5d520c71899d30dabdba02f97d911a0) - Dependency upgrades

- Updated dependencies [[`d434bda3e`](https://github.com/cultureamp/kaizen-design-system/commit/d434bda3e5d520c71899d30dabdba02f97d911a0), [`959541e4d`](https://github.com/cultureamp/kaizen-design-system/commit/959541e4dc02655577dfee98931e84df2c079576)]:
  - @kaizen/draft-tooltip@5.4.46
  - @kaizen/date-picker@6.0.2
  - @kaizen/component-library@16.9.0

## 1.9.0

### Minor Changes

- [#3643](https://github.com/cultureamp/kaizen-design-system/pull/3643) [`7ea62ca13`](https://github.com/cultureamp/kaizen-design-system/commit/7ea62ca13e2dd8ed92618bcb388035b6fcf36bbe) - Adds Workflow Components and Workflow documentation folder to storybook

## 1.8.7

### Patch Changes

- Updated dependencies [[`21e381314`](https://github.com/cultureamp/kaizen-design-system/commit/21e381314daffd8171208f33e3627bccf54ddd6a), [`b6480c659`](https://github.com/cultureamp/kaizen-design-system/commit/b6480c6591a6f1b73ce4388ee9c341b5c421666c)]:
  - @kaizen/date-picker@6.0.0
  - @kaizen/draft-form@10.4.4

## 1.8.6

### Patch Changes

- [#3595](https://github.com/cultureamp/kaizen-design-system/pull/3595) [`0e0750e87`](https://github.com/cultureamp/kaizen-design-system/commit/0e0750e872e3381420df7bf2947d9deb9db8b705) - Remove .turbo from distributed files

- [#3618](https://github.com/cultureamp/kaizen-design-system/pull/3618) [`b4eaa8c45`](https://github.com/cultureamp/kaizen-design-system/commit/b4eaa8c45b10abe795138638f273fabe416580da) - Update dependency date-fns to ^2.30.0

- [#3611](https://github.com/cultureamp/kaizen-design-system/pull/3611) [`589244ad0`](https://github.com/cultureamp/kaizen-design-system/commit/589244ad0c307edca845d19843f2db282050fe29) - Fix supported design-tokens versions

- Updated dependencies [[`0e0750e87`](https://github.com/cultureamp/kaizen-design-system/commit/0e0750e872e3381420df7bf2947d9deb9db8b705), [`b4eaa8c45`](https://github.com/cultureamp/kaizen-design-system/commit/b4eaa8c45b10abe795138638f273fabe416580da), [`e4f5f5ce5`](https://github.com/cultureamp/kaizen-design-system/commit/e4f5f5ce50b4e1a4aa8b189c247d0f2a8fea722f), [`589244ad0`](https://github.com/cultureamp/kaizen-design-system/commit/589244ad0c307edca845d19843f2db282050fe29)]:
  - @kaizen/component-library@16.7.5
  - @kaizen/draft-divider@2.2.10
  - @kaizen/draft-tooltip@5.4.43
  - @kaizen/hosted-assets@2.0.2
  - @kaizen/date-picker@5.21.16
  - @kaizen/draft-form@10.4.2
  - @kaizen/typography@2.3.10
  - @kaizen/a11y@1.7.11

## 1.8.5

### Patch Changes

- [#3608](https://github.com/cultureamp/kaizen-design-system/pull/3608) [`cc96d9835`](https://github.com/cultureamp/kaizen-design-system/commit/cc96d98351ae380fe1a1e8a33d65d80232ed7a57) - Update usages of classnames to not use object syntax

- Updated dependencies [[`cc96d9835`](https://github.com/cultureamp/kaizen-design-system/commit/cc96d98351ae380fe1a1e8a33d65d80232ed7a57)]:
  - @kaizen/component-library@16.7.4
  - @kaizen/draft-divider@2.2.9
  - @kaizen/draft-tooltip@5.4.42
  - @kaizen/design-tokens@10.3.7
  - @kaizen/date-picker@5.21.15
  - @kaizen/draft-form@10.4.1
  - @kaizen/typography@2.3.9

## 1.8.4

### Patch Changes

- [#3592](https://github.com/cultureamp/kaizen-design-system/pull/3592) [`dcd98eb9f`](https://github.com/cultureamp/kaizen-design-system/commit/dcd98eb9fbb5d03356d803bb90685e33b151075d) - Update dependencies:

  - `@react-aria/focus` to `^3.12.0`
  - `@react-aria/listbox` to `^3.9.0`
  - `@react-aria/overlays` to `^3.14.0`
  - `@react-aria/select` to `^3.10.0`
  - `@react-aria/utils` to `^3.16.0`
  - `@react-stately/collections` to `^3.7.0`
  - `@react-stately/select` to `^3.5.0`

- [#3585](https://github.com/cultureamp/kaizen-design-system/pull/3585) [`739d87b0c`](https://github.com/cultureamp/kaizen-design-system/commit/739d87b0cd917e7c0f3becf2cc0fd8f9667f7a6c) - Update dependencies:
  - `@react-aria/button` to `^3.7.1`
  - `@react-types/shared` to `^3.18.0`
  - `react-focus-on` to `^3.8.1`
  - `@rollup/plugin-alias` to `^4.0.4`
  - `@rollup/plugin-node-resolve` to `^15.0.2`
  - `esbuild` to `^0.17.18`
  - `sass` to `^1.62.1`
- Updated dependencies [[`739d87b0c`](https://github.com/cultureamp/kaizen-design-system/commit/739d87b0cd917e7c0f3becf2cc0fd8f9667f7a6c), [`acb0fdf3d`](https://github.com/cultureamp/kaizen-design-system/commit/acb0fdf3de2c1e852971b30fa0db4691e2a4ad0d), [`dcd98eb9f`](https://github.com/cultureamp/kaizen-design-system/commit/dcd98eb9fbb5d03356d803bb90685e33b151075d), [`c2f5be19e`](https://github.com/cultureamp/kaizen-design-system/commit/c2f5be19e5868aafd6771bab3a15e016664aa949), [`739d87b0c`](https://github.com/cultureamp/kaizen-design-system/commit/739d87b0cd917e7c0f3becf2cc0fd8f9667f7a6c), [`739d87b0c`](https://github.com/cultureamp/kaizen-design-system/commit/739d87b0cd917e7c0f3becf2cc0fd8f9667f7a6c)]:
  - @kaizen/component-library@16.7.3
  - @kaizen/draft-tooltip@5.4.41
  - @kaizen/date-picker@5.21.14
  - @kaizen/draft-form@10.3.13
  - @kaizen/design-tokens@10.3.6

## 1.8.3

### Patch Changes

- [#3558](https://github.com/cultureamp/kaizen-design-system/pull/3558) [`f09c085ee`](https://github.com/cultureamp/kaizen-design-system/commit/f09c085ee78c6dc79afc291faa6e284b333d1e93) - Use native focus-visible selector for focus styling instead of polyfill class

- Updated dependencies [[`2fcba667e`](https://github.com/cultureamp/kaizen-design-system/commit/2fcba667e576ff974d9f790172e894351eba3875), [`f09c085ee`](https://github.com/cultureamp/kaizen-design-system/commit/f09c085ee78c6dc79afc291faa6e284b333d1e93)]:
  - @kaizen/date-picker@5.21.12
  - @kaizen/draft-form@10.3.12
  - @kaizen/a11y@1.7.10

## 1.8.2

### Patch Changes

- [#3540](https://github.com/cultureamp/kaizen-design-system/pull/3540) [`1228800bc`](https://github.com/cultureamp/kaizen-design-system/commit/1228800bc215bc33731888bc81ef68be1a3c19d9) - Add type="button" to buttons missing an explicit type

- Updated dependencies [[`1228800bc`](https://github.com/cultureamp/kaizen-design-system/commit/1228800bc215bc33731888bc81ef68be1a3c19d9), [`11691d3dd`](https://github.com/cultureamp/kaizen-design-system/commit/11691d3dd152f013241233474ea9409fe76e7796)]:
  - @kaizen/component-library@16.7.2
  - @kaizen/date-picker@5.21.11

## 1.8.1

### Patch Changes

- [#3536](https://github.com/cultureamp/kaizen-design-system/pull/3536) [`82ba2fa0d`](https://github.com/cultureamp/kaizen-design-system/commit/82ba2fa0d20c66a1688d2609d4bd7775b129349c) - - enforced no-implicit-any across kaizen

- Updated dependencies [[`82ba2fa0d`](https://github.com/cultureamp/kaizen-design-system/commit/82ba2fa0d20c66a1688d2609d4bd7775b129349c)]:
  - @kaizen/component-library@16.7.1
  - @kaizen/draft-tooltip@5.4.40
  - @kaizen/date-picker@5.21.10

## 1.8.0

### Minor Changes

- a7ffc2239: \* Add FilterDateRangePicker component
  - Filter which allows user to select a date range
  - Add LabelledMessage component
    - Utility component which helps create colon-separated text which supports right-to-left i18n

### Patch Changes

- Updated dependencies [a7ffc2239]
- Updated dependencies [fb901eec2]
  - @kaizen/date-picker@5.21.9
  - @kaizen/component-library@16.7.0

## 1.7.13

### Patch Changes

- 7b1a97028: Adding a build step before publishing. Patching components affected by the lack of build step prior to this fix

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.7.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.7.11...@kaizen/components@1.7.12) (2023-04-06)

**Note:** Version bump only for package @kaizen/components

## [1.7.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.7.10...@kaizen/components@1.7.11) (2023-04-05)

**Note:** Version bump only for package @kaizen/components

## [1.7.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.7.9...@kaizen/components@1.7.10) (2023-04-04)

**Note:** Version bump only for package @kaizen/components

## [1.7.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.7.8...@kaizen/components@1.7.9) (2023-03-31)

**Note:** Version bump only for package @kaizen/components

## [1.7.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.7.7...@kaizen/components@1.7.8) (2023-03-31)

**Note:** Version bump only for package @kaizen/components

## [1.7.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.7.4...@kaizen/components@1.7.7) (2023-03-31)

**Note:** Version bump only for package @kaizen/components

## [1.7.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.7.3...@kaizen/components@1.7.4) (2023-03-30)

**Note:** Version bump only for package @kaizen/components

## [1.7.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.7.2...@kaizen/components@1.7.3) (2023-03-29)

**Note:** Version bump only for package @kaizen/components

## [1.7.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.7.1...@kaizen/components@1.7.2) (2023-03-29)

**Note:** Version bump only for package @kaizen/components

## [1.7.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.6.5...@kaizen/components@1.7.1) (2023-03-29)

**Note:** Version bump only for package @kaizen/components

## [1.6.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.6.4...@kaizen/components@1.6.5) (2023-03-28)

**Note:** Version bump only for package @kaizen/components

## [1.6.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.6.3...@kaizen/components@1.6.4) (2023-03-23)

**Note:** Version bump only for package @kaizen/components

## [1.6.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.6.2...@kaizen/components@1.6.3) (2023-03-23)

### Bug Fixes

- tooltip aio error ([#3378](https://github.com/cultureamp/kaizen-design-system/issues/3378)) ([3693d57](https://github.com/cultureamp/kaizen-design-system/commit/3693d57858f6640742b317f3671169eb3808a418))

## [1.6.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.6.1...@kaizen/components@1.6.2) (2023-03-22)

### Bug Fixes

- tooltip-aio-error ([#3374](https://github.com/cultureamp/kaizen-design-system/issues/3374)) ([949890a](https://github.com/cultureamp/kaizen-design-system/commit/949890aef62a60ff9de0790fac2034199fb422bf))

## [1.6.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.6.0...@kaizen/components@1.6.1) (2023-03-22)

**Note:** Version bump only for package @kaizen/components

# [1.6.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.5.1...@kaizen/components@1.6.0) (2023-03-22)

### Features

- css processing ([#3362](https://github.com/cultureamp/kaizen-design-system/issues/3362)) ([38c0fa3](https://github.com/cultureamp/kaizen-design-system/commit/38c0fa3475a5f78cd4f2c9836815b53d65f2d039))

## [1.5.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.5.0...@kaizen/components@1.5.1) (2023-03-21)

**Note:** Version bump only for package @kaizen/components

# [1.5.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.26...@kaizen/components@1.5.0) (2023-03-16)

### Features

- **filter:** Add Filter component into the AIO ([#3341](https://github.com/cultureamp/kaizen-design-system/issues/3341)) ([1806853](https://github.com/cultureamp/kaizen-design-system/commit/180685395ee53094f618af7f7292b16d72eb348b))

## [1.4.26](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.25...@kaizen/components@1.4.26) (2023-03-14)

**Note:** Version bump only for package @kaizen/components

## [1.4.25](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.24...@kaizen/components@1.4.25) (2023-03-03)

### Bug Fixes

- remove re-exports ([#3343](https://github.com/cultureamp/kaizen-design-system/issues/3343)) ([1f928f1](https://github.com/cultureamp/kaizen-design-system/commit/1f928f1de9ff51a0d8a205c2d9fe991056855ec6))

## [1.4.24](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.23...@kaizen/components@1.4.24) (2023-03-03)

**Note:** Version bump only for package @kaizen/components

## [1.4.23](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.22...@kaizen/components@1.4.23) (2023-03-02)

**Note:** Version bump only for package @kaizen/components

## [1.4.22](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.21...@kaizen/components@1.4.22) (2023-03-02)

**Note:** Version bump only for package @kaizen/components

## [1.4.21](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.20...@kaizen/components@1.4.21) (2023-03-02)

**Note:** Version bump only for package @kaizen/components

## [1.4.20](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.19...@kaizen/components@1.4.20) (2023-03-01)

**Note:** Version bump only for package @kaizen/components

## [1.4.19](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.18...@kaizen/components@1.4.19) (2023-02-28)

**Note:** Version bump only for package @kaizen/components

## [1.4.18](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.17...@kaizen/components@1.4.18) (2023-02-28)

**Note:** Version bump only for package @kaizen/components

## [1.4.17](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.16...@kaizen/components@1.4.17) (2023-02-28)

### Bug Fixes

- design-tokens-aio-import ([#3323](https://github.com/cultureamp/kaizen-design-system/issues/3323)) ([9dcf307](https://github.com/cultureamp/kaizen-design-system/commit/9dcf30761a5c8886c64b207ddb9484e8f8fb3962))

## [1.4.16](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.15...@kaizen/components@1.4.16) (2023-02-27)

### Bug Fixes

- make @kaizen/tailwind a dep ([#3321](https://github.com/cultureamp/kaizen-design-system/issues/3321)) ([77c36e9](https://github.com/cultureamp/kaizen-design-system/commit/77c36e9141047063693f67baf3d800c96c511daf))

## [1.4.15](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.14...@kaizen/components@1.4.15) (2023-02-27)

### Bug Fixes

- replace esbuild with tsup ([#3311](https://github.com/cultureamp/kaizen-design-system/issues/3311)) ([7fa6990](https://github.com/cultureamp/kaizen-design-system/commit/7fa6990a3479a4d3c33a8370ff1b5f3adf51e543))

## [1.4.14](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.13...@kaizen/components@1.4.14) (2023-02-26)

**Note:** Version bump only for package @kaizen/components

## [1.4.13](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.12...@kaizen/components@1.4.13) (2023-02-23)

**Note:** Version bump only for package @kaizen/components

## [1.4.12](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.11...@kaizen/components@1.4.12) (2023-02-23)

**Note:** Version bump only for package @kaizen/components

## [1.4.11](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.10...@kaizen/components@1.4.11) (2023-02-23)

**Note:** Version bump only for package @kaizen/components

## [1.4.10](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.9...@kaizen/components@1.4.10) (2023-02-23)

**Note:** Version bump only for package @kaizen/components

## [1.4.9](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.8...@kaizen/components@1.4.9) (2023-02-22)

**Note:** Version bump only for package @kaizen/components

## [1.4.8](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.7...@kaizen/components@1.4.8) (2023-02-22)

**Note:** Version bump only for package @kaizen/components

## [1.4.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.6...@kaizen/components@1.4.7) (2023-02-22)

**Note:** Version bump only for package @kaizen/components

## [1.4.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.5...@kaizen/components@1.4.6) (2023-02-21)

**Note:** Version bump only for package @kaizen/components

## [1.4.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.4...@kaizen/components@1.4.5) (2023-02-21)

### Bug Fixes

- aio cjs exports ([#3305](https://github.com/cultureamp/kaizen-design-system/issues/3305)) ([b778f5c](https://github.com/cultureamp/kaizen-design-system/commit/b778f5c802769d699e2472b7869076b372404de8))

## [1.4.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.3...@kaizen/components@1.4.4) (2023-02-21)

**Note:** Version bump only for package @kaizen/components

## [1.4.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.2...@kaizen/components@1.4.3) (2023-02-21)

**Note:** Version bump only for package @kaizen/components

## [1.4.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.1...@kaizen/components@1.4.2) (2023-02-20)

**Note:** Version bump only for package @kaizen/components

## [1.4.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.0...@kaizen/components@1.4.1) (2023-02-20)

**Note:** Version bump only for package @kaizen/components

# [1.4.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.3.7...@kaizen/components@1.4.0) (2023-02-20)

### Features

- re-export-all-existing-components-from-the-new-aio ([#3285](https://github.com/cultureamp/kaizen-design-system/issues/3285)) ([c9a483d](https://github.com/cultureamp/kaizen-design-system/commit/c9a483db2fe6b21f0b75552dc7b6735df6ae68df))

## [1.3.7](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.3.6...@kaizen/components@1.3.7) (2023-02-19)

**Note:** Version bump only for package @kaizen/components

## [1.3.6](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.3.5...@kaizen/components@1.3.6) (2023-02-17)

### Bug Fixes

- try to resolve regression issue ([#3293](https://github.com/cultureamp/kaizen-design-system/issues/3293)) ([f335590](https://github.com/cultureamp/kaizen-design-system/commit/f3355903f457fa46e81faac9dc5ee893784dfe9d))

## [1.3.5](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.3.4...@kaizen/components@1.3.5) (2023-02-17)

### Bug Fixes

- future package.json routes ([#3292](https://github.com/cultureamp/kaizen-design-system/issues/3292)) ([99d46c7](https://github.com/cultureamp/kaizen-design-system/commit/99d46c7b9ccb5eee2057b2153c956e66958fc236))

## [1.3.4](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.3.3...@kaizen/components@1.3.4) (2023-02-17)

### Bug Fixes

- components bundling ([#3282](https://github.com/cultureamp/kaizen-design-system/issues/3282)) ([dab93f4](https://github.com/cultureamp/kaizen-design-system/commit/dab93f4b02a350aff44cdf3e0cd9d06f22a49677))

## [1.3.3](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.3.2...@kaizen/components@1.3.3) (2023-02-17)

**Note:** Version bump only for package @kaizen/components

## [1.3.2](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.3.1...@kaizen/components@1.3.2) (2023-02-17)

**Note:** Version bump only for package @kaizen/components

## [1.3.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.3.0...@kaizen/components@1.3.1) (2023-02-16)

**Note:** Version bump only for package @kaizen/components

# [1.3.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.2.0...@kaizen/components@1.3.0) (2023-02-15)

### Features

- 44-processing-tailwind-css ([#3273](https://github.com/cultureamp/kaizen-design-system/issues/3273)) ([4f2ace5](https://github.com/cultureamp/kaizen-design-system/commit/4f2ace55edb1d3b5fc0005b65165fd584357a0d2))

# [1.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.1.0...@kaizen/components@1.2.0) (2023-02-13)

### Features

- **KaizenProvider:** add KaizenProvider to @kaizen/components ([#3239](https://github.com/cultureamp/kaizen-design-system/issues/3239)) ([16819f0](https://github.com/cultureamp/kaizen-design-system/commit/16819f0717dfebd6a938b2784dc84751650f8be4))

# 1.1.0 (2023-01-24)

### Features

- add components AIO ([#3229](https://github.com/cultureamp/kaizen-design-system/issues/3229)) ([2b63a37](https://github.com/cultureamp/kaizen-design-system/commit/2b63a3726fafa02c977ba84eedaab4119e40cf51))
