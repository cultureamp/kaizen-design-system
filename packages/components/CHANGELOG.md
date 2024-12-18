# Change Log

## 1.69.0

### Minor Changes

- [#5395](https://github.com/cultureamp/kaizen-design-system/pull/5395) [`9068e68`](https://github.com/cultureamp/kaizen-design-system/commit/9068e68b288cbcfa1561fe03b0875fe62011b67d) - Menu: Create MenuPopover, MenuSection and MenuHeader wrappers over RAC

## 1.68.13

### Patch Changes

- [#5392](https://github.com/cultureamp/kaizen-design-system/pull/5392) [`5ac8212`](https://github.com/cultureamp/kaizen-design-system/commit/5ac821288357fd58f073a4375841e2fc32b16aec) - Made Future Tab hover cursor consistent with current Tab.

## 1.68.12

### Patch Changes

- [#5355](https://github.com/cultureamp/kaizen-design-system/pull/5355) [`f6bd88c`](https://github.com/cultureamp/kaizen-design-system/commit/f6bd88c01c8a566fe96ec1df06ff06269784a6b8) - Tabs (future): add carousel functionality when tabs overflow container width

## 1.68.11

### Patch Changes

- [#5371](https://github.com/cultureamp/kaizen-design-system/pull/5371) [`36285e8`](https://github.com/cultureamp/kaizen-design-system/commit/36285e836b950d12e3fa5fca0fcc59796eae2406) - TileGrid renders Tiles in a `<ul>`, wrapping each Tile in an `<li>`

- [#5371](https://github.com/cultureamp/kaizen-design-system/pull/5371) [`36285e8`](https://github.com/cultureamp/kaizen-design-system/commit/36285e836b950d12e3fa5fca0fcc59796eae2406) - Converted LiveIcon into a subcomponent of Tag

- [#5371](https://github.com/cultureamp/kaizen-design-system/pull/5371) [`36285e8`](https://github.com/cultureamp/kaizen-design-system/commit/36285e836b950d12e3fa5fca0fcc59796eae2406) - Fix Workflow Styling breaking in RTL

## 1.68.10

### Patch Changes

- [#5318](https://github.com/cultureamp/kaizen-design-system/pull/5318) [`8aebe0b`](https://github.com/cultureamp/kaizen-design-system/commit/8aebe0b339e463ffe5a63a69fd60960a3fadd042) - Update dep `react-intl` to `^7.0.1`.

- [#5358](https://github.com/cultureamp/kaizen-design-system/pull/5358) [`71e17eb`](https://github.com/cultureamp/kaizen-design-system/commit/71e17eb513106507a5faad584f1349f48edb04ce) - TextArea: no longer forced into controlled mode under the hood, allowing value manipulation via JS if needed

## 1.68.9

### Patch Changes

- [#5305](https://github.com/cultureamp/kaizen-design-system/pull/5305) [`b2044e3`](https://github.com/cultureamp/kaizen-design-system/commit/b2044e381f101629e60c478ccf979af04af17082) - Update deps for package-bundler.

## 1.68.8

### Patch Changes

- [#5321](https://github.com/cultureamp/kaizen-design-system/pull/5321) [`d67d3b2`](https://github.com/cultureamp/kaizen-design-system/commit/d67d3b2996c28f86376213472c13895ff744d805) - Update react-aria deps.

- [#5319](https://github.com/cultureamp/kaizen-design-system/pull/5319) [`253e663`](https://github.com/cultureamp/kaizen-design-system/commit/253e66395ebadd6d7159cf1c7f9f40e5b232ab14) - Update dep `uuid` to `^11.0.3`.

- [#5320](https://github.com/cultureamp/kaizen-design-system/pull/5320) [`b4af064`](https://github.com/cultureamp/kaizen-design-system/commit/b4af06472147d3a088cfcb433b083b1ddb5b0c98) - Update prosemirror deps.

## 1.68.7

### Patch Changes

- [#5339](https://github.com/cultureamp/kaizen-design-system/pull/5339) [`55330ea`](https://github.com/cultureamp/kaizen-design-system/commit/55330ea18746ae80bd234a07251573107b6f61cd) - Upgrade dep eslint to v9.

  This should not have any impact on consumers, but releasing a patch as source code has been updated with linting fixes.

## 1.68.6

### Patch Changes

- [#5325](https://github.com/cultureamp/kaizen-design-system/pull/5325) [`92c228f`](https://github.com/cultureamp/kaizen-design-system/commit/92c228f3cd72dce92905e27e91099c1621ad24e1) - Add a deprecated isReversed prop to Button v3 to allow for safe migration path to the ReversedColors Provider.

  - `isReversed` to allow users to toggle the reversed variants with a `boolean`.
  - Adds `@deprecated` flag to prompt user to use the `ReverseColors` Provider instead.

- [#5345](https://github.com/cultureamp/kaizen-design-system/pull/5345) [`2760617`](https://github.com/cultureamp/kaizen-design-system/commit/2760617418ed997a9e0036d327327c78a0bc8ef5) - Refactor styles to not use `[dir="rtl"] &`.

## 1.68.5

### Patch Changes

- [#5328](https://github.com/cultureamp/kaizen-design-system/pull/5328) [`c27c883`](https://github.com/cultureamp/kaizen-design-system/commit/c27c883813e90a97f9b7c9536a72f89a64114d51) - Add localisations for GenericTile's default infoButtonLabel text.

- [#5342](https://github.com/cultureamp/kaizen-design-system/pull/5342) [`23eca3f`](https://github.com/cultureamp/kaizen-design-system/commit/23eca3fa796ee6c70c24e2f1dcee04461f1bb8d1) - Update translations

- [#5336](https://github.com/cultureamp/kaizen-design-system/pull/5336) [`8bf1435`](https://github.com/cultureamp/kaizen-design-system/commit/8bf1435857b3817fee83a219a1c88b58c8b6f2f6) - Add infoButtonLabel prop to GenericTile and internationalise default label.

## 1.68.4

### Patch Changes

- [#5322](https://github.com/cultureamp/kaizen-design-system/pull/5322) [`7903e38`](https://github.com/cultureamp/kaizen-design-system/commit/7903e38930fb442780f19285a9cc99e7aa167c55) - FilterBar: hide 'Clear all' button when there's nothing to clear

## 1.68.3

### Patch Changes

- [#5323](https://github.com/cultureamp/kaizen-design-system/pull/5323) [`0aa9923`](https://github.com/cultureamp/kaizen-design-system/commit/0aa9923aac781577ece76858bc48c7c217e428cb) - Add infoButtonLabel prop to GenericTile and internationalise default label.

## 1.68.2

### Patch Changes

- [#5297](https://github.com/cultureamp/kaizen-design-system/pull/5297) [`ce1c62a`](https://github.com/cultureamp/kaizen-design-system/commit/ce1c62a4d7bf94a0ca373e76cc7dfceba81656f2) - Menu v3: only show MenuItem outline/border on focus-visible, not focus/hover

## 1.68.1

### Patch Changes

- [#5294](https://github.com/cultureamp/kaizen-design-system/pull/5294) [`3646ef2`](https://github.com/cultureamp/kaizen-design-system/commit/3646ef2720db73c29f94524de3ce1fd442790427) - Update codemod `upgradeIconV1` to default the following icons to be filled:
  - `check_circle`
  - `info`
  - `error`
  - `help`
  - `privacy_tip`

## 1.68.0

### Minor Changes

- [#5218](https://github.com/cultureamp/kaizen-design-system/pull/5218) [`b9fef3e`](https://github.com/cultureamp/kaizen-design-system/commit/b9fef3ee672095349662f6cdd7cb51b6c6876e8b) - Add variants, sizes, pending state, icons, and ref support for Button (v3).

  - Add support for Icons that scales to the size prop and positioning in RTL layouts
  - Add support for pending state and labels
  - Add all variants and set default to `primary`
  - Add reversed styles
  - Add all sizes
  - Add ref forwarding to enable React Refs

## 1.67.22

### Patch Changes

- [#5287](https://github.com/cultureamp/kaizen-design-system/pull/5287) [`e4b189b`](https://github.com/cultureamp/kaizen-design-system/commit/e4b189b21e34d5fe6ffe0678d46d1d52ddbab13a) - Fix EmptyState responsive styles using container queries.

## 1.67.21

### Patch Changes

- [#5247](https://github.com/cultureamp/kaizen-design-system/pull/5247) [`3cbf445`](https://github.com/cultureamp/kaizen-design-system/commit/3cbf4459199afac845d2d639f7232a8235d65277) - Dep update, react-select from 5.8.2 to 5.8.3

## 1.67.20

### Patch Changes

- [#5289](https://github.com/cultureamp/kaizen-design-system/pull/5289) [`18dc21c58ebd0329b08a25050074037e7700fc74`](https://github.com/cultureamp/kaizen-design-system/commit/18dc21c58ebd0329b08a25050074037e7700fc74) - Fix for mistake made in last point release (Internal refactor from Sass to CSS for GuidanceBlock)

## 1.67.19

### Patch Changes

- [#5286](https://github.com/cultureamp/kaizen-design-system/pull/5286) [`513ad9ff48b564069d4c585f27ed9737a26968b2`](https://github.com/cultureamp/kaizen-design-system/commit/513ad9ff48b564069d4c585f27ed9737a26968b2) - Internal refactor from Sass to CSS for GuidanceBlock

## 1.67.18

### Patch Changes

- [#5277](https://github.com/cultureamp/kaizen-design-system/pull/5277) [`0b641cfc39be9eaf9d77cb8aef32e845f02ecbd0`](https://github.com/cultureamp/kaizen-design-system/commit/0b641cfc39be9eaf9d77cb8aef32e845f02ecbd0) - Fix EmptyState horizontal overflow

## 1.67.17

### Patch Changes

- [#5279](https://github.com/cultureamp/kaizen-design-system/pull/5279) [`718cbdd2dd00ddd688a9272cd0c271adf085fc42`](https://github.com/cultureamp/kaizen-design-system/commit/718cbdd2dd00ddd688a9272cd0c271adf085fc42) - Actually release @kaizen/package-bundler (2.0.0 already exists from an accidental prior release)

## 1.67.16

### Patch Changes

- [#5270](https://github.com/cultureamp/kaizen-design-system/pull/5270) [`573097f5767533255a1f9ce207d3b1a0ee7bcdfc`](https://github.com/cultureamp/kaizen-design-system/commit/573097f5767533255a1f9ce207d3b1a0ee7bcdfc) - Update @kaizen/package-bundler

## 1.67.15

### Patch Changes

- [#5275](https://github.com/cultureamp/kaizen-design-system/pull/5275) [`3b1ceb02c2865d42cba6b13a5f4e4aa932e6897b`](https://github.com/cultureamp/kaizen-design-system/commit/3b1ceb02c2865d42cba6b13a5f4e4aa932e6897b) - fix(FilterBar): Remove container property from FilterBar wrapper

## 1.67.14

### Patch Changes

- [#5273](https://github.com/cultureamp/kaizen-design-system/pull/5273) [`6fcc6088f8b6107694ce6ab22c4c2a78560332e9`](https://github.com/cultureamp/kaizen-design-system/commit/6fcc6088f8b6107694ce6ab22c4c2a78560332e9) - Pagination responsive adjustments

  - Margins partially restored to have 8px between buttons
  - Boundary pages will now only show on large viewports and up
  - Sibling pages will continue to show on medium viewports and up

## 1.67.13

### Patch Changes

- [#5269](https://github.com/cultureamp/kaizen-design-system/pull/5269) [`e4358c8289c789b7140affb4207d3e72cdd94f86`](https://github.com/cultureamp/kaizen-design-system/commit/e4358c8289c789b7140affb4207d3e72cdd94f86) - Pagination responsiveness

  - Margins and padding tightened up
  - Sibling pages shown drops from 1 to 0 on small viewports

## 1.67.12

### Patch Changes

- [#5266](https://github.com/cultureamp/kaizen-design-system/pull/5266) [`94ac62d79ce431adc1ad2b4dc76e39d72fb56373`](https://github.com/cultureamp/kaizen-design-system/commit/94ac62d79ce431adc1ad2b4dc76e39d72fb56373) - Re-release with @kaizen/package-bundler update.

- [#5265](https://github.com/cultureamp/kaizen-design-system/pull/5265) [`034fbf2e829564999d4795c123304c17fe87c054`](https://github.com/cultureamp/kaizen-design-system/commit/034fbf2e829564999d4795c123304c17fe87c054) - Update codemods to retain empty lines.

## 1.67.11

### Patch Changes

- [#5263](https://github.com/cultureamp/kaizen-design-system/pull/5263) [`f4a00f663c09baae9d5f5ed02d0f04e2ecf4e5d0`](https://github.com/cultureamp/kaizen-design-system/commit/f4a00f663c09baae9d5f5ed02d0f04e2ecf4e5d0) - Menu v3 fixes and documentation for typeahead functionality

  - Insert `textValue` into RAC's MenuItem when typeof children === string
  - Add documentation for how to get typeahead working when passing ReactNode
  - Adjust MenuItem to only add flex when children is string and there's an icon

## 1.67.10

### Patch Changes

- [#5241](https://github.com/cultureamp/kaizen-design-system/pull/5241) [`8393cc823a2295514c8af699f94185730a9e9e91`](https://github.com/cultureamp/kaizen-design-system/commit/8393cc823a2295514c8af699f94185730a9e9e91) - Update future Icon to only use internal styles as opposed to global styles from the CDN.

## 1.67.9

### Patch Changes

- [#5238](https://github.com/cultureamp/kaizen-design-system/pull/5238) [`0fa693d56d4b8a20e0759969eed85e232f7940fc`](https://github.com/cultureamp/kaizen-design-system/commit/0fa693d56d4b8a20e0759969eed85e232f7940fc) - FilterBar: Switch container queries to media queries to avoid stacking context issues

## 1.67.8

### Patch Changes

- [#5214](https://github.com/cultureamp/kaizen-design-system/pull/5214) [`f10f7a4fc20dd8fa4bcab3ebcce654f4577ffcb3`](https://github.com/cultureamp/kaizen-design-system/commit/f10f7a4fc20dd8fa4bcab3ebcce654f4577ffcb3) - FilterBar responsiveness and styling adjustments

  - Box shadow removed from filter bar container
  - Filter buttons will now expand in height and reflow text as required
  - 'Clear all' button now reflows to a new line
  - Filter buttons will go to full width on containers 767px in width or below

## 1.67.7

### Patch Changes

- [#5220](https://github.com/cultureamp/kaizen-design-system/pull/5220) [`f235962d126a05c2a4566822f51df00d7ed959ff`](https://github.com/cultureamp/kaizen-design-system/commit/f235962d126a05c2a4566822f51df00d7ed959ff) - Peer dependency version for `typescript` updated to `5.x`.

## 1.67.6

### Patch Changes

- [#5210](https://github.com/cultureamp/kaizen-design-system/pull/5210) [`1aca0e0355c0ca454de69f5f072bb318d68984f9`](https://github.com/cultureamp/kaizen-design-system/commit/1aca0e0355c0ca454de69f5f072bb318d68984f9) - Fix codemod runner

- [#5203](https://github.com/cultureamp/kaizen-design-system/pull/5203) [`d1d46a7d2cae4682a2a9df2a70954a22f85174a1`](https://github.com/cultureamp/kaizen-design-system/commit/d1d46a7d2cae4682a2a9df2a70954a22f85174a1) - Update dep `postcss-preset-env` to `^10.0.8`

- [#5188](https://github.com/cultureamp/kaizen-design-system/pull/5188) [`6351873e57473741384d9089afa8350051cbaf26`](https://github.com/cultureamp/kaizen-design-system/commit/6351873e57473741384d9089afa8350051cbaf26) - Update dep `tslib` to `^2.8.0`

## 1.67.5

### Patch Changes

- [#5204](https://github.com/cultureamp/kaizen-design-system/pull/5204) [`47addf7df6478f39066a38a278122bd589f4863c`](https://github.com/cultureamp/kaizen-design-system/commit/47addf7df6478f39066a38a278122bd589f4863c) - Update dep `react-intl` to `^6.8.4`

- [#5207](https://github.com/cultureamp/kaizen-design-system/pull/5207) [`4425e41f155413cbfae45016141047851862a2e8`](https://github.com/cultureamp/kaizen-design-system/commit/4425e41f155413cbfae45016141047851862a2e8) - Update dep `react-select` to `^5.8.2`

- [#5206](https://github.com/cultureamp/kaizen-design-system/pull/5206) [`defcda633742dfefa9150a05138440253569c67c`](https://github.com/cultureamp/kaizen-design-system/commit/defcda633742dfefa9150a05138440253569c67c) - Update dep `prosemirror-commands` to `^1.6.2`

- [#5179](https://github.com/cultureamp/kaizen-design-system/pull/5179) [`c023956a2c98f7afb44a5709879040b826e2987f`](https://github.com/cultureamp/kaizen-design-system/commit/c023956a2c98f7afb44a5709879040b826e2987f) - Update dep `@cultureamp/i18n-react-intl` to `^2.7.1`

## 1.67.4

### Patch Changes

- [#5197](https://github.com/cultureamp/kaizen-design-system/pull/5197) [`b5cc795efb301cd684c843997ca4003effbff299`](https://github.com/cultureamp/kaizen-design-system/commit/b5cc795efb301cd684c843997ca4003effbff299) - fix(TextArea: Refactor autogrow to remove visual jank

## 1.67.3

### Patch Changes

- [#5194](https://github.com/cultureamp/kaizen-design-system/pull/5194) [`44aeeb9f8526018e74c3de780aafc0836396a744`](https://github.com/cultureamp/kaizen-design-system/commit/44aeeb9f8526018e74c3de780aafc0836396a744) - FilterBar: manage focus on add/remove filters

## 1.67.2

### Patch Changes

- [#5174](https://github.com/cultureamp/kaizen-design-system/pull/5174) [`52c8fc91031f30d197359a544be14603753abaee`](https://github.com/cultureamp/kaizen-design-system/commit/52c8fc91031f30d197359a544be14603753abaee) - Fix sass deprecation warnings.

  Also fixes:

  - Button v1 right-to-left padding
  - TextField reversed success icon styles

## 1.67.1

### Patch Changes

- [#5132](https://github.com/cultureamp/kaizen-design-system/pull/5132) [`a227606160a82b80082dc5883d23a8aa9336e3d5`](https://github.com/cultureamp/kaizen-design-system/commit/a227606160a82b80082dc5883d23a8aa9336e3d5) - Update react-aria deps.

## 1.67.0

### Minor Changes

- [#5153](https://github.com/cultureamp/kaizen-design-system/pull/5153) [`17951f367e7b4fa2a99b601e64c8452f1ef6141f`](https://github.com/cultureamp/kaizen-design-system/commit/17951f367e7b4fa2a99b601e64c8452f1ef6141f) - Add future Icon and update internal icon usages (excluding Buttons).

  BREAKING CHANGE: All components consuming the future Icon (eg. Avatar) will require linking to the Google Material Symbols CDN

### Patch Changes

- [#5153](https://github.com/cultureamp/kaizen-design-system/pull/5153) [`17951f367e7b4fa2a99b601e64c8452f1ef6141f`](https://github.com/cultureamp/kaizen-design-system/commit/17951f367e7b4fa2a99b601e64c8452f1ef6141f) - Fix future Tag cautionary icon colour.

## 1.66.1

### Patch Changes

- [#5158](https://github.com/cultureamp/kaizen-design-system/pull/5158) [`d52b5654905320c54051186f65757999cd110573`](https://github.com/cultureamp/kaizen-design-system/commit/d52b5654905320c54051186f65757999cd110573) - Dep updates

## 1.66.0

### Minor Changes

- [#5148](https://github.com/cultureamp/kaizen-design-system/pull/5148) [`3e2d4e6d7e02aee995041c9be1dd5a5d8b9c6bec`](https://github.com/cultureamp/kaizen-design-system/commit/3e2d4e6d7e02aee995041c9be1dd5a5d8b9c6bec) - Add `xs` size to LoadingSpinner

## 1.65.0

### Minor Changes

- [#5150](https://github.com/cultureamp/kaizen-design-system/pull/5150) [`d9147f522c93879899657def9561a58edafde73c`](https://github.com/cultureamp/kaizen-design-system/commit/d9147f522c93879899657def9561a58edafde73c) - Create future Tabs component

## 1.64.14

### Patch Changes

- [#5123](https://github.com/cultureamp/kaizen-design-system/pull/5123) [`cdabe86df383a2403b56fd65d9743811ae7a08b4`](https://github.com/cultureamp/kaizen-design-system/commit/cdabe86df383a2403b56fd65d9743811ae7a08b4) - Fix for the tab focus jump issue on future Select and FilterSelect

## 1.64.13

### Patch Changes

- [#5127](https://github.com/cultureamp/kaizen-design-system/pull/5127) [`839243db981f262347cc1556b00212ab46e4f75b`](https://github.com/cultureamp/kaizen-design-system/commit/839243db981f262347cc1556b00212ab46e4f75b) - Dep updates

## 1.64.12

### Patch Changes

- [#5121](https://github.com/cultureamp/kaizen-design-system/pull/5121) [`b8fd77b8c79279d4a173ce9425a5a57c46688f06`](https://github.com/cultureamp/kaizen-design-system/commit/b8fd77b8c79279d4a173ce9425a5a57c46688f06) - Change dashed disabled focus rings to solid borders

## 1.64.11

### Patch Changes

- [#5122](https://github.com/cultureamp/kaizen-design-system/pull/5122) [`27706c61039ec02526eea17a1e15d1055c124c54`](https://github.com/cultureamp/kaizen-design-system/commit/27706c61039ec02526eea17a1e15d1055c124c54) - Add accessible label fix for selects

## 1.64.10

### Patch Changes

- [#5118](https://github.com/cultureamp/kaizen-design-system/pull/5118) [`b2c5996518aad8e34f74a1cf486d37705e3e1b86`](https://github.com/cultureamp/kaizen-design-system/commit/b2c5996518aad8e34f74a1cf486d37705e3e1b86) - Revert `@kaizen/components` from being explicitly an ESM build"

## 1.64.9

### Patch Changes

- [#5116](https://github.com/cultureamp/kaizen-design-system/pull/5116) [`7b43c719bf93d2c09711c3512095b067c0368d30`](https://github.com/cultureamp/kaizen-design-system/commit/7b43c719bf93d2c09711c3512095b067c0368d30) - Tiles: fix typing on actions to map to Button API, and pass through all props

## 1.64.8

### Patch Changes

- [#5113](https://github.com/cultureamp/kaizen-design-system/pull/5113) [`54dd00689cafd922d1c423ea90994b1822a543e2`](https://github.com/cultureamp/kaizen-design-system/commit/54dd00689cafd922d1c423ea90994b1822a543e2) - Future Select - stop propagation when selecting an option using a touch device.

## 1.64.7

### Patch Changes

- [#5056](https://github.com/cultureamp/kaizen-design-system/pull/5056) [`f60b8ee3dfcd03553dd36f6efb440e9841971bb0`](https://github.com/cultureamp/kaizen-design-system/commit/f60b8ee3dfcd03553dd36f6efb440e9841971bb0) - Dep updates

## 1.64.6

### Patch Changes

- [#5079](https://github.com/cultureamp/kaizen-design-system/pull/5079) [`da4e5137289d0173de09f1a1145e016de9146cc2`](https://github.com/cultureamp/kaizen-design-system/commit/da4e5137289d0173de09f1a1145e016de9146cc2) - Fix Brand styling props to be on the `<img>` instead of `<picture>`

- [#5111](https://github.com/cultureamp/kaizen-design-system/pull/5111) [`91ff2cb3e2de88099cfd50726f1ae20dfe6eaae1`](https://github.com/cultureamp/kaizen-design-system/commit/91ff2cb3e2de88099cfd50726f1ae20dfe6eaae1) - Revert "Filter select accessible label and focus jump fix" released in 1.64.5

## 1.64.5

### Patch Changes

- [#5077](https://github.com/cultureamp/kaizen-design-system/pull/5077) [`c03634202d054a5e65f2235d37d71dcfd1662a2e`](https://github.com/cultureamp/kaizen-design-system/commit/c03634202d054a5e65f2235d37d71dcfd1662a2e) - fix focus jump issue for FilterSelect and Future Select and accessibility bugs.

## 1.64.4

### Patch Changes

- [#5076](https://github.com/cultureamp/kaizen-design-system/pull/5076) [`e896e5ff65a6c0aee19b38477695d90524c7913e`](https://github.com/cultureamp/kaizen-design-system/commit/e896e5ff65a6c0aee19b38477695d90524c7913e) - InlineNotification: allow ref to be passed in, and add focus styling

## 1.64.3

### Patch Changes

- [#5078](https://github.com/cultureamp/kaizen-design-system/pull/5078) [`9ff945f692d6e2927fe3c59ef4b2e2a0115bc67d`](https://github.com/cultureamp/kaizen-design-system/commit/9ff945f692d6e2927fe3c59ef4b2e2a0115bc67d) - Remove default `onToggle` event from ToggleSwitch type. We already override it with a `ChangeEvent` instead.

## 1.64.2

### Patch Changes

- [#5074](https://github.com/cultureamp/kaizen-design-system/pull/5074) [`3ee2e8a484150204996b6c2903904b537da321f0`](https://github.com/cultureamp/kaizen-design-system/commit/3ee2e8a484150204996b6c2903904b537da321f0) - fix(useMediaQueries): values will now update when jumping from small to large, or vice versa

## 1.64.1

### Patch Changes

- [#5069](https://github.com/cultureamp/kaizen-design-system/pull/5069) [`61448a1406de8968b70d47ba763ba3f9250eba76`](https://github.com/cultureamp/kaizen-design-system/commit/61448a1406de8968b70d47ba763ba3f9250eba76) - Fix removeToastNotification

## 1.64.0

### Minor Changes

- [#5070](https://github.com/cultureamp/kaizen-design-system/pull/5070) [`91601557a77a9752ba3c2cfba4b6e07ebe36fc31`](https://github.com/cultureamp/kaizen-design-system/commit/91601557a77a9752ba3c2cfba4b6e07ebe36fc31) - Allow native div props on InlineNotification

## 1.63.2

### Patch Changes

- [#5053](https://github.com/cultureamp/kaizen-design-system/pull/5053) [`b6316077432894b318928b6d8ad0e188c44fd9f9`](https://github.com/cultureamp/kaizen-design-system/commit/b6316077432894b318928b6d8ad0e188c44fd9f9) - Allow aria props on GuidanceBlock actions

## 1.63.1

### Patch Changes

- [#5050](https://github.com/cultureamp/kaizen-design-system/pull/5050) [`f66a774b1c7bd987b432f0431baae064863ab1ee`](https://github.com/cultureamp/kaizen-design-system/commit/f66a774b1c7bd987b432f0431baae064863ab1ee) - fix missing export

## 1.63.0

### Minor Changes

- [#5044](https://github.com/cultureamp/kaizen-design-system/pull/5044) [`10a2b1558e300aa7e7bdd3620b9c586de1c628ff`](https://github.com/cultureamp/kaizen-design-system/commit/10a2b1558e300aa7e7bdd3620b9c586de1c628ff) - Remove v1 (current) and v2 (future) Workflow, making v3 the current version

  Shortly following this release, Doug will be submit PRs to the 4 repos currently using the Workflow component to cater for the breaking changes

## 1.62.0

### Minor Changes

- [#5022](https://github.com/cultureamp/kaizen-design-system/pull/5022) [`adc3b0adb73b0ab88db490784e4ea2dfe920d4fa`](https://github.com/cultureamp/kaizen-design-system/commit/adc3b0adb73b0ab88db490784e4ea2dfe920d4fa) - Remove GuidanceBlock v2

  We've decided against the idea of having a new version of this component.

  There are no usages of v2 in our repos.

### Patch Changes

- [#5046](https://github.com/cultureamp/kaizen-design-system/pull/5046) [`245c64e43d74b93deda1e732110b030147a0e524`](https://github.com/cultureamp/kaizen-design-system/commit/245c64e43d74b93deda1e732110b030147a0e524) - Decouple ProgressStepper from Text component and fix spacing for Workflow stepper

- [#5041](https://github.com/cultureamp/kaizen-design-system/pull/5041) [`3e68057c2f051b1b92f3bcc9241fb028a4de9431`](https://github.com/cultureamp/kaizen-design-system/commit/3e68057c2f051b1b92f3bcc9241fb028a4de9431) - Pass variant warning to Modal Footer

## 1.61.3

### Patch Changes

- [#5014](https://github.com/cultureamp/kaizen-design-system/pull/5014) [`390de02405bb8b4cab2c334d21925ef3e41d6802`](https://github.com/cultureamp/kaizen-design-system/commit/390de02405bb8b4cab2c334d21925ef3e41d6802) - Add z-index 100000 to Select/MultiSelect popover

- [#5015](https://github.com/cultureamp/kaizen-design-system/pull/5015) [`6bb072f67008803fb8a604c187413ae2b756760e`](https://github.com/cultureamp/kaizen-design-system/commit/6bb072f67008803fb8a604c187413ae2b756760e) - Future Select: remove redundant focus management

## 1.61.2

### Patch Changes

- [#5012](https://github.com/cultureamp/kaizen-design-system/pull/5012) [`be6fbbb8ffc165849e1b2162c180f92e4f0902ba`](https://github.com/cultureamp/kaizen-design-system/commit/be6fbbb8ffc165849e1b2162c180f92e4f0902ba) - RichTextContent: remove contenteditable attribute instead of contenteditable=false

## 1.61.1

### Patch Changes

- [#4986](https://github.com/cultureamp/kaizen-design-system/pull/4986) [`80ec92dc98031e3688bfaf4c21256e182a487689`](https://github.com/cultureamp/kaizen-design-system/commit/80ec92dc98031e3688bfaf4c21256e182a487689) - Styling fix for Workflow v3

## 1.61.0

### Minor Changes

- [#4978](https://github.com/cultureamp/kaizen-design-system/pull/4978) [`2d34341ea9e6d8c28af80645e6bef3cd60cb8f8e`](https://github.com/cultureamp/kaizen-design-system/commit/2d34341ea9e6d8c28af80645e6bef3cd60cb8f8e) - Create v3 Workflow component, changing footer to a white background

  A few adjustments will need to be made on the implementation side when upgrading from future (v2) to v3:

  - All footer buttons should have the `reversed` prop removed
  - Next button in the footer should have `primary` prop added (not just the finish button as previously)
  - The `status` prop has been renamed to `statusTag` and now takes a ReactNode. You'll need to create your own Tag and pass it in.

## 1.60.3

### Patch Changes

- [#4962](https://github.com/cultureamp/kaizen-design-system/pull/4962) [`6665db9cd111222213d4a264146b6707a2ccb1c3`](https://github.com/cultureamp/kaizen-design-system/commit/6665db9cd111222213d4a264146b6707a2ccb1c3) - Dep updates (all dev dependencies)

- [#4968](https://github.com/cultureamp/kaizen-design-system/pull/4968) [`0d5efc29c8d149fdfdb919fef5a810299f41b232`](https://github.com/cultureamp/kaizen-design-system/commit/0d5efc29c8d149fdfdb919fef5a810299f41b232) - Remove role=dialog from Select listbox container

## 1.60.2

### Patch Changes

- [#4946](https://github.com/cultureamp/kaizen-design-system/pull/4946) [`59fe10f72fb6e18a5aa8c72fcc44e323cb74366a`](https://github.com/cultureamp/kaizen-design-system/commit/59fe10f72fb6e18a5aa8c72fcc44e323cb74366a) - Fix dist styles (import statement was not properly compiled).

## 1.60.1

### Patch Changes

- [#4943](https://github.com/cultureamp/kaizen-design-system/pull/4943) [`123209d7d89ad6c4edd0741eae47f61a08f18d6f`](https://github.com/cultureamp/kaizen-design-system/commit/123209d7d89ad6c4edd0741eae47f61a08f18d6f) - Fix the toast notification addToastNotification function so that it correctly identifies whether a toast already exists or not

## 1.60.0

### Minor Changes

- [#4931](https://github.com/cultureamp/kaizen-design-system/pull/4931) [`febd282047df18ca82b745ffed5ff037a11be0f0`](https://github.com/cultureamp/kaizen-design-system/commit/febd282047df18ca82b745ffed5ff037a11be0f0) - - Exported types from LikertScale
  - Deprecated `useResizeObserver` in favour of native DOM API `ResizeObserver`

### Patch Changes

- [#4941](https://github.com/cultureamp/kaizen-design-system/pull/4941) [`df16927f386898b8c625b0ab54602653f6b4981f`](https://github.com/cultureamp/kaizen-design-system/commit/df16927f386898b8c625b0ab54602653f6b4981f) - Deprecate `Popover` `variant` and `customIcon` props, and fix RTL styles.

## 1.59.0

### Minor Changes

- [#4939](https://github.com/cultureamp/kaizen-design-system/pull/4939) [`9952feb18f13b25edb06baea5b1bf65688ffb55c`](https://github.com/cultureamp/kaizen-design-system/commit/9952feb18f13b25edb06baea5b1bf65688ffb55c) - Avatar: allow control over alt property

## 1.58.2

### Patch Changes

- [#4925](https://github.com/cultureamp/kaizen-design-system/pull/4925) [`c1d4c2bb9b2bb976c4ad8f5d02aad9c277684620`](https://github.com/cultureamp/kaizen-design-system/commit/c1d4c2bb9b2bb976c4ad8f5d02aad9c277684620) - Fix GuidanceBlock codemod

## 1.58.1

### Patch Changes

- [#4924](https://github.com/cultureamp/kaizen-design-system/pull/4924) [`8071b2c29aee443910d0468bed78f0510a2e5c61`](https://github.com/cultureamp/kaizen-design-system/commit/8071b2c29aee443910d0468bed78f0510a2e5c61) - Remove shouldFlipOnRtl prop that doesn't get used in SVG primitive component

- [#4871](https://github.com/cultureamp/kaizen-design-system/pull/4871) [`1158d54eef5ea459603fcebecdc54d13934d7faa`](https://github.com/cultureamp/kaizen-design-system/commit/1158d54eef5ea459603fcebecdc54d13934d7faa) - update deps

- [#4922](https://github.com/cultureamp/kaizen-design-system/pull/4922) [`924e4627c75efb612251e2c0e927038a0bfe9c60`](https://github.com/cultureamp/kaizen-design-system/commit/924e4627c75efb612251e2c0e927038a0bfe9c60) - Fixed GuidanceBlock codemod to include a change to import statements

## 1.58.0

### Minor Changes

- [#4869](https://github.com/cultureamp/kaizen-design-system/pull/4869) [`1461312edb8cee583f558b72f7271f739adbb3e1`](https://github.com/cultureamp/kaizen-design-system/commit/1461312edb8cee583f558b72f7271f739adbb3e1) - New GuidanceBlock v2:

  - Removed `positive`, `negative`, `informative`, `cautionary`, `assertive` variants, replaced with `default`
  - Changed the `prominent` variant to `expert-advice`

- [#4919](https://github.com/cultureamp/kaizen-design-system/pull/4919) [`404b1cb887ecdb4bf47c5f61e4bbfed5a4fccb81`](https://github.com/cultureamp/kaizen-design-system/commit/404b1cb887ecdb4bf47c5f61e4bbfed5a4fccb81) - - ProgressBar: deprecated `mood` in favour of `color`

- [#4882](https://github.com/cultureamp/kaizen-design-system/pull/4882) [`1f08683751182b8f437accc9f6264a3f08b46e5a`](https://github.com/cultureamp/kaizen-design-system/commit/1f08683751182b8f437accc9f6264a3f08b46e5a) - Deprecated `type` in favour of `variant` for InlineNotification, GlobalNotification and ToastNotification

- [#4868](https://github.com/cultureamp/kaizen-design-system/pull/4868) [`2091c380c1292a2261107692a502733ec77fc709`](https://github.com/cultureamp/kaizen-design-system/commit/2091c380c1292a2261107692a502733ec77fc709) - Deprecate mood for ConfirmationModal and InputEditModal

- [#4881](https://github.com/cultureamp/kaizen-design-system/pull/4881) [`780345e9840efd8f27fae498608d2f39829582b6`](https://github.com/cultureamp/kaizen-design-system/commit/780345e9840efd8f27fae498608d2f39829582b6) - Update components to use `variant` prop, to align design language.

  #### BrandMoment:

  - Deprecate `mood` prop
  - Introduce `variant` prop
  - Update usages

  #### EmptyState:

  - Deprecate `illustrationType` prop
  - Introduce `variant` prop

  #### Tiles (GenericTile, InformationTile, MultiActionTile):

  - Deprecate `mood` prop
  - Introduce `variant` prop

- [#4866](https://github.com/cultureamp/kaizen-design-system/pull/4866) [`57b63e01c1ef902c3eecb1bca1014a2f12c65043`](https://github.com/cultureamp/kaizen-design-system/commit/57b63e01c1ef902c3eecb1bca1014a2f12c65043) - Deprecate and replace Well `variant` prop with `color` and update the background and border color to fallback to `white` instead of the `default` variant's grey.

- [#4880](https://github.com/cultureamp/kaizen-design-system/pull/4880) [`bb719c30bc5f9c7a92c7b54921d27ccc514324d1`](https://github.com/cultureamp/kaizen-design-system/commit/bb719c30bc5f9c7a92c7b54921d27ccc514324d1) - Add codemod for Well variant to color prop

- [#4908](https://github.com/cultureamp/kaizen-design-system/pull/4908) [`6a2d427df8b14a6ee814de323b33fa1b0b9496f9`](https://github.com/cultureamp/kaizen-design-system/commit/6a2d427df8b14a6ee814de323b33fa1b0b9496f9) - - Card: Deprecated `variant` in favour of `color`

## 1.57.2

### Patch Changes

- [#4872](https://github.com/cultureamp/kaizen-design-system/pull/4872) [`1f97fcdf30e6aea8221178aa0a88eb175e61f314`](https://github.com/cultureamp/kaizen-design-system/commit/1f97fcdf30e6aea8221178aa0a88eb175e61f314) - Menu v3: Add pointer cursor to all menu items

## 1.57.1

### Patch Changes

- [#4877](https://github.com/cultureamp/kaizen-design-system/pull/4877) [`3ca22cdcb6ad008a27159ec92b6d9f42a1399ffa`](https://github.com/cultureamp/kaizen-design-system/commit/3ca22cdcb6ad008a27159ec92b6d9f42a1399ffa) - Modal: Focus ring now wraps the dialog instead of the title

## 1.57.0

### Minor Changes

- [#4862](https://github.com/cultureamp/kaizen-design-system/pull/4862) [`c1dde02a7257ca2f6af0407f66c2a43becc20324`](https://github.com/cultureamp/kaizen-design-system/commit/c1dde02a7257ca2f6af0407f66c2a43becc20324) - Update components to match new accessible color designs.

  #### Card:

  - Add border to variants

  #### Collapsible:

  - Add border to `Collapsible` and `CollapsibleGroup`
  - Update border for `ExpertAdviceCollapsible`
  - Set `default` as default variant
  - Fix border-radius between header and content

  #### EmptyState:

  - Add border to variants
  - Change `action` (to later be deprecated) to match `negative` variant color

  #### FieldMessage:

  - Update cautionary icon color

  #### GuidanceBlock:

  - Add border to variants
  - Change `assertive` (to later be deprecated) to match `negative` variant color

  #### Modals:

  - Update `ConfirmationModal` cautionary icon color
  - Change `assertive` (to later be deprecated) to match `negative` variant color

  #### Notifications:

  - Update border for variants
  - Update cautionary icon color

  #### Popover:

  - Add border to variants
  - Update cautionary icon color

  #### Tag (Legacy):

  - Update cautionary icon color

  #### Tiles:

  - Add border to variants
  - Change `assertive` (to later be deprecated) to match `negative` variant color

  #### Tooltip (v1):

  - Update border for variants

  #### Well:

  - Update border for variants
  - Update background color for `default` variant

### Patch Changes

- [#4831](https://github.com/cultureamp/kaizen-design-system/pull/4831) [`f4b4f1ab1c76acbb6b2f0b9fd4daee97da7c19d5`](https://github.com/cultureamp/kaizen-design-system/commit/f4b4f1ab1c76acbb6b2f0b9fd4daee97da7c19d5) - Update `GlobalNotification` colours to align to other notifications.

## 1.56.1

### Patch Changes

- [#4874](https://github.com/cultureamp/kaizen-design-system/pull/4874) [`db19c815617af1d08183e01417e14fae4af9cfa6`](https://github.com/cultureamp/kaizen-design-system/commit/db19c815617af1d08183e01417e14fae4af9cfa6) - Add v3 entry for utilities

## 1.56.0

### Minor Changes

- [#4782](https://github.com/cultureamp/kaizen-design-system/pull/4782) [`57355d8e440b8d248faeaedbd8e57cfaff3c50a3`](https://github.com/cultureamp/kaizen-design-system/commit/57355d8e440b8d248faeaedbd8e57cfaff3c50a3) - v3 Menu component

- [#4805](https://github.com/cultureamp/kaizen-design-system/pull/4805) [`7d343c39f708886f8608176d485b46e20eda1fdd`](https://github.com/cultureamp/kaizen-design-system/commit/7d343c39f708886f8608176d485b46e20eda1fdd) - Migrate and version Button to actions group, and create initial build of V3 Button component

### Patch Changes

- [#4864](https://github.com/cultureamp/kaizen-design-system/pull/4864) [`725f8f7c0ba53a4345f38cd7b1d757c53a21604e`](https://github.com/cultureamp/kaizen-design-system/commit/725f8f7c0ba53a4345f38cd7b1d757c53a21604e) - Updated minor and patch dependencies

- [#4861](https://github.com/cultureamp/kaizen-design-system/pull/4861) [`a4565547c9ae510a7ccb512c6713a6401257693e`](https://github.com/cultureamp/kaizen-design-system/commit/a4565547c9ae510a7ccb512c6713a6401257693e) - Fix focus ring styling on MenuItems (v3)

## 1.55.2

### Patch Changes

- [#4845](https://github.com/cultureamp/kaizen-design-system/pull/4845) [`e30d28669a391160e2221bd5fe06a0af4e64ab43`](https://github.com/cultureamp/kaizen-design-system/commit/e30d28669a391160e2221bd5fe06a0af4e64ab43) - Pass onClick through to MenuItem even when it is rendered as a link

## 1.55.1

### Patch Changes

- [#4840](https://github.com/cultureamp/kaizen-design-system/pull/4840) [`7c550128a1b4fb4a9339b0316dce35439c22dae4`](https://github.com/cultureamp/kaizen-design-system/commit/7c550128a1b4fb4a9339b0316dce35439c22dae4) - Aligned ContextModal heading text to the right for RTL languages

- [#4837](https://github.com/cultureamp/kaizen-design-system/pull/4837) [`9ccf253a39435afa676603a8d2ed92b3b2c68db9`](https://github.com/cultureamp/kaizen-design-system/commit/9ccf253a39435afa676603a8d2ed92b3b2c68db9) - Update spread operator for restProps in Brand component to stop classNameOverride being passed directly to picture element

- [#4838](https://github.com/cultureamp/kaizen-design-system/pull/4838) [`e5387d00465f40da7fc981f21527d271346b1029`](https://github.com/cultureamp/kaizen-design-system/commit/e5387d00465f40da7fc981f21527d271346b1029) - update prosemirror monolith deps

- [#4838](https://github.com/cultureamp/kaizen-design-system/pull/4838) [`e5387d00465f40da7fc981f21527d271346b1029`](https://github.com/cultureamp/kaizen-design-system/commit/e5387d00465f40da7fc981f21527d271346b1029) - update dependency @floating-ui/react-dom to ^2.1.1

## 1.55.0

### Minor Changes

- [#4834](https://github.com/cultureamp/kaizen-design-system/pull/4834) [`babb559e84ec8fb32c574ae642244da7c6e94d21`](https://github.com/cultureamp/kaizen-design-system/commit/babb559e84ec8fb32c574ae642244da7c6e94d21) - Added Assignment Icon

### Patch Changes

- [#4829](https://github.com/cultureamp/kaizen-design-system/pull/4829) [`291136b92d80a7329952fd844e1dec323884ae7b`](https://github.com/cultureamp/kaizen-design-system/commit/291136b92d80a7329952fd844e1dec323884ae7b) - add update_filter_labels action to respond to filter config label updates

## 1.54.4

### Patch Changes

- [#4832](https://github.com/cultureamp/kaizen-design-system/pull/4832) [`d96f16d37bc49450afb18a86a4c4f90cd9de7f52`](https://github.com/cultureamp/kaizen-design-system/commit/d96f16d37bc49450afb18a86a4c4f90cd9de7f52) - Fix bug where menu focus goes to a different menu button on close

## 1.54.3

### Patch Changes

- [#4796](https://github.com/cultureamp/kaizen-design-system/pull/4796) [`d5fe6e6c14d848ae7bdff623cd46bdd70f0b3886`](https://github.com/cultureamp/kaizen-design-system/commit/d5fe6e6c14d848ae7bdff623cd46bdd70f0b3886) - Update source image for Brand Collective Intelligence

## 1.54.2

### Patch Changes

- [#4776](https://github.com/cultureamp/kaizen-design-system/pull/4776) [`a9832552bc44db988e224a62ad18438d9be76221`](https://github.com/cultureamp/kaizen-design-system/commit/a9832552bc44db988e224a62ad18438d9be76221) - Add new translations

## 1.54.1

### Patch Changes

- [#4799](https://github.com/cultureamp/kaizen-design-system/pull/4799) [`d6031f0daa3a310851b34139339acc11e23f6e5a`](https://github.com/cultureamp/kaizen-design-system/commit/d6031f0daa3a310851b34139339acc11e23f6e5a) - Dep update: uuid from v9 to v10

## 1.54.0

### Minor Changes

- [#4794](https://github.com/cultureamp/kaizen-design-system/pull/4794) [`a2402b46621130fb8035122ffd231f15df54473f`](https://github.com/cultureamp/kaizen-design-system/commit/a2402b46621130fb8035122ffd231f15df54473f) - Add all supported locales to `DatePicker`, `FilterDatePicker`, `FilterDateRangePicker`.

  Update `Calendar`s to infer starting weekday based on provided locale.

## 1.53.0

### Minor Changes

- [#4788](https://github.com/cultureamp/kaizen-design-system/pull/4788) [`c04d33098c31ba5dd2516b95c7ea4c1e2975c2c3`](https://github.com/cultureamp/kaizen-design-system/commit/c04d33098c31ba5dd2516b95c7ea4c1e2975c2c3) - Add translations to `FilterBar` and `DatePicker` components.

  Add locale `fr-CA` and translate text in `DatePicker`, `FilterDatePicker`, `FilterDateRangePicker`.

## 1.52.1

### Patch Changes

- [#4783](https://github.com/cultureamp/kaizen-design-system/pull/4783) [`5433cd725f34f56c858713acadf5f95af628f7ab`](https://github.com/cultureamp/kaizen-design-system/commit/5433cd725f34f56c858713acadf5f95af628f7ab) - Fix workflow future logo a11y

## 1.52.0

### Minor Changes

- [#4744](https://github.com/cultureamp/kaizen-design-system/pull/4744) [`844942ea54668a9455fd6fc643b86659be80e7da`](https://github.com/cultureamp/kaizen-design-system/commit/844942ea54668a9455fd6fc643b86659be80e7da) - Create v3 Tooltip and versioned package entry points

### Patch Changes

- [#4779](https://github.com/cultureamp/kaizen-design-system/pull/4779) [`c390aac3420eef384b46510c6f3b61f50eff229a`](https://github.com/cultureamp/kaizen-design-system/commit/c390aac3420eef384b46510c6f3b61f50eff229a) - Add tiempos-headline-medium weight to font-face declaration

## 1.51.0

### Minor Changes

- [#4772](https://github.com/cultureamp/kaizen-design-system/pull/4772) [`9dac69a5492034b1ffc7a1355dcf6a092f48936f`](https://github.com/cultureamp/kaizen-design-system/commit/9dac69a5492034b1ffc7a1355dcf6a092f48936f) - Update TitleBlockZen title font to match composable header.

## 1.50.0

### Minor Changes

- [#4773](https://github.com/cultureamp/kaizen-design-system/pull/4773) [`d64538c4850516d3425e8266c15e74b7060ea0c6`](https://github.com/cultureamp/kaizen-design-system/commit/d64538c4850516d3425e8266c15e74b7060ea0c6) - Translate embedded text within `FilterMultiSelect.SearchInput` and `InputSearch`.

### Patch Changes

- [#4774](https://github.com/cultureamp/kaizen-design-system/pull/4774) [`e206024491760b28787b068ccac56ab0aa652e1f`](https://github.com/cultureamp/kaizen-design-system/commit/e206024491760b28787b068ccac56ab0aa652e1f) - Add translations for FilterMultiSelect

## 1.49.3

### Patch Changes

- [#4758](https://github.com/cultureamp/kaizen-design-system/pull/4758) [`10c22b15e0decd6f8f279863f5bfe1cbbbea1990`](https://github.com/cultureamp/kaizen-design-system/commit/10c22b15e0decd6f8f279863f5bfe1cbbbea1990) - Fix `FilterBarMultiSelectProps` to allow consumer to override `label`, `trigger` and `selectedKeys`

## 1.49.2

### Patch Changes

- [#4745](https://github.com/cultureamp/kaizen-design-system/pull/4745) [`1b17a65773afe0f3b9598c5e148379aab8c86875`](https://github.com/cultureamp/kaizen-design-system/commit/1b17a65773afe0f3b9598c5e148379aab8c86875) - Update prosemirror deps

## 1.49.1

### Patch Changes

- [#4742](https://github.com/cultureamp/kaizen-design-system/pull/4742) [`fc8920ccd4f0fa1788677fd9030fbbf17845df03`](https://github.com/cultureamp/kaizen-design-system/commit/fc8920ccd4f0fa1788677fd9030fbbf17845df03) - Blank out alt text for illustrations in EmptyState

## 1.49.0

### Minor Changes

- [#4732](https://github.com/cultureamp/kaizen-design-system/pull/4732) [`871f3f2868afd8cf4dad169363615fc06aa84ded`](https://github.com/cultureamp/kaizen-design-system/commit/871f3f2868afd8cf4dad169363615fc06aa84ded) - Deprecation of placeholders across Future `Select`, `Select`, `Input`

### Patch Changes

- [#4695](https://github.com/cultureamp/kaizen-design-system/pull/4695) [`c715b3e4187ec4782c9096b810a144ea45627742`](https://github.com/cultureamp/kaizen-design-system/commit/c715b3e4187ec4782c9096b810a144ea45627742) - Update EditableRichTextContent, RichTextContent and RichTextEditor border, label spacing, default text color and interaction styles to align with design.

- [#4734](https://github.com/cultureamp/kaizen-design-system/pull/4734) [`65f0792b25c4996dd68760cf24dc56ebe87a7fd4`](https://github.com/cultureamp/kaizen-design-system/commit/65f0792b25c4996dd68760cf24dc56ebe87a7fd4) - update @cultureamp/i18n-react-intl dep

- [#4734](https://github.com/cultureamp/kaizen-design-system/pull/4734) [`65f0792b25c4996dd68760cf24dc56ebe87a7fd4`](https://github.com/cultureamp/kaizen-design-system/commit/65f0792b25c4996dd68760cf24dc56ebe87a7fd4) - update prosemirror-view dep

- [#4730](https://github.com/cultureamp/kaizen-design-system/pull/4730) [`3be853246158083f4c1226a6bc275b5b08f4b0d2`](https://github.com/cultureamp/kaizen-design-system/commit/3be853246158083f4c1226a6bc275b5b08f4b0d2) - Add more contenxt to the RTE link description and validation error

- [#4734](https://github.com/cultureamp/kaizen-design-system/pull/4734) [`65f0792b25c4996dd68760cf24dc56ebe87a7fd4`](https://github.com/cultureamp/kaizen-design-system/commit/65f0792b25c4996dd68760cf24dc56ebe87a7fd4) - Update sass dep

- [#4729](https://github.com/cultureamp/kaizen-design-system/pull/4729) [`2e70becbd233aad599535a47f2286c2a043020b4`](https://github.com/cultureamp/kaizen-design-system/commit/2e70becbd233aad599535a47f2286c2a043020b4) - Increase ToastNotificationList z-index so it shows on top of other components

- [#4731](https://github.com/cultureamp/kaizen-design-system/pull/4731) [`016401cc8a01952aae70e4b527c619efa417e418`](https://github.com/cultureamp/kaizen-design-system/commit/016401cc8a01952aae70e4b527c619efa417e418) - Update DatePicker and DateRangePicker to use the labelText as the dialogues accessible title

## 1.48.0

### Minor Changes

- [#4728](https://github.com/cultureamp/kaizen-design-system/pull/4728) [`d1ae4eb748b2f8a2ebd76aae10efb694632575c2`](https://github.com/cultureamp/kaizen-design-system/commit/d1ae4eb748b2f8a2ebd76aae10efb694632575c2) - Remove style injection

## 1.47.6

### Patch Changes

- [#4717](https://github.com/cultureamp/kaizen-design-system/pull/4717) [`66728604c40cfae29e049989aa5251f71a9bd161`](https://github.com/cultureamp/kaizen-design-system/commit/66728604c40cfae29e049989aa5251f71a9bd161) - Updated dependency `stylelint`.

  Refactored styles of the following components to satisfy linting:

  - AvatarGroup
  - ButtonGroup
  - Checkbox
  - CheckboxField
  - ExpertAdviceCollapsible
  - Label
  - ToggleIconButton (RTE subcomponent)
  - TimeSegment

## 1.47.5

### Patch Changes

- [#4719](https://github.com/cultureamp/kaizen-design-system/pull/4719) [`ced88e55a0ef483e63eb93525a4212bd97af68ff`](https://github.com/cultureamp/kaizen-design-system/commit/ced88e55a0ef483e63eb93525a4212bd97af68ff) - Update dep `tsx`

- [#4724](https://github.com/cultureamp/kaizen-design-system/pull/4724) [`253dd28c271844fbc89027cd0f678ffcafe69021`](https://github.com/cultureamp/kaizen-design-system/commit/253dd28c271844fbc89027cd0f678ffcafe69021) - Fix FilterMultiselect not opening the Menu when accessing it with a keyboard after it had previously being opened.

## 1.47.4

### Patch Changes

- [#4709](https://github.com/cultureamp/kaizen-design-system/pull/4709) [`18cf2df4684317750440356d5cc3f2383f8fd148`](https://github.com/cultureamp/kaizen-design-system/commit/18cf2df4684317750440356d5cc3f2383f8fd148) - Update `react-aria` dependencies

- [#4709](https://github.com/cultureamp/kaizen-design-system/pull/4709) [`18cf2df4684317750440356d5cc3f2383f8fd148`](https://github.com/cultureamp/kaizen-design-system/commit/18cf2df4684317750440356d5cc3f2383f8fd148) - update dependency @floating-ui/react-dom to ^2.1.0

- [#4709](https://github.com/cultureamp/kaizen-design-system/pull/4709) [`18cf2df4684317750440356d5cc3f2383f8fd148`](https://github.com/cultureamp/kaizen-design-system/commit/18cf2df4684317750440356d5cc3f2383f8fd148) - Update dependency `use-debounce`

- [#4683](https://github.com/cultureamp/kaizen-design-system/pull/4683) [`871ac443f985998c359e2237a86c5d925a27ba91`](https://github.com/cultureamp/kaizen-design-system/commit/871ac443f985998c359e2237a86c5d925a27ba91) - Migrate DatePicker and DateRangePicker to floatingUI

- [#4709](https://github.com/cultureamp/kaizen-design-system/pull/4709) [`18cf2df4684317750440356d5cc3f2383f8fd148`](https://github.com/cultureamp/kaizen-design-system/commit/18cf2df4684317750440356d5cc3f2383f8fd148) - Update dependency `@internationalized/date`

## 1.47.3

### Patch Changes

- [#4705](https://github.com/cultureamp/kaizen-design-system/pull/4705) [`c8e6004e0b252a65e07badffa05e255a98b87be8`](https://github.com/cultureamp/kaizen-design-system/commit/c8e6004e0b252a65e07badffa05e255a98b87be8) - Fix style injection by removing PURE comment.

  Builds in Storybook and Next fail when the comment exists.

## 1.47.2

### Patch Changes

- [#4671](https://github.com/cultureamp/kaizen-design-system/pull/4671) [`ddc9f3a15c4fc5f5c712f65cc4a458b16cb502f4`](https://github.com/cultureamp/kaizen-design-system/commit/ddc9f3a15c4fc5f5c712f65cc4a458b16cb502f4) - update dependency react-day-picker to ^8.10.1

- [#4671](https://github.com/cultureamp/kaizen-design-system/pull/4671) [`ddc9f3a15c4fc5f5c712f65cc4a458b16cb502f4`](https://github.com/cultureamp/kaizen-design-system/commit/ddc9f3a15c4fc5f5c712f65cc4a458b16cb502f4) - update dependency @floating-ui/react-dom to ^2.0.9

- [#4671](https://github.com/cultureamp/kaizen-design-system/pull/4671) [`ddc9f3a15c4fc5f5c712f65cc4a458b16cb502f4`](https://github.com/cultureamp/kaizen-design-system/commit/ddc9f3a15c4fc5f5c712f65cc4a458b16cb502f4) - Update react-focus-lock dep

- [#4671](https://github.com/cultureamp/kaizen-design-system/pull/4671) [`ddc9f3a15c4fc5f5c712f65cc4a458b16cb502f4`](https://github.com/cultureamp/kaizen-design-system/commit/ddc9f3a15c4fc5f5c712f65cc4a458b16cb502f4) - update dependency react-focus-on to ^3.9.3

- [#4671](https://github.com/cultureamp/kaizen-design-system/pull/4671) [`ddc9f3a15c4fc5f5c712f65cc4a458b16cb502f4`](https://github.com/cultureamp/kaizen-design-system/commit/ddc9f3a15c4fc5f5c712f65cc4a458b16cb502f4) - update Prosemirror deps

## 1.47.1

### Patch Changes

- [#4698](https://github.com/cultureamp/kaizen-design-system/pull/4698) [`2e42b84f8412b6d0f19a8d78c3c4d085d02e43ae`](https://github.com/cultureamp/kaizen-design-system/commit/2e42b84f8412b6d0f19a8d78c3c4d085d02e43ae) - Fix bundling

## 1.47.0

### Minor Changes

- [#4656](https://github.com/cultureamp/kaizen-design-system/pull/4656) [`c3baac698e421c46d08afd41161d07511022e46e`](https://github.com/cultureamp/kaizen-design-system/commit/c3baac698e421c46d08afd41161d07511022e46e) - Update build to use `@kaizen/package-bundler`.

## 1.46.0

### Minor Changes

- [#4668](https://github.com/cultureamp/kaizen-design-system/pull/4668) [`2772ecd07758f7ea1492fba1a7235199e2603c58`](https://github.com/cultureamp/kaizen-design-system/commit/2772ecd07758f7ea1492fba1a7235199e2603c58) - Accessibility uplift of Table component

  - Add default focus ring widths and colors to interactive variants of the TableHeaderRowCell and interactive table cards
  - Add a checkboxLabel prop as a mean to resolving the unlinked checkbox label in the checkable variant of the TableHeaderRowCell
  - Update the TableHeaderRowCell to pass labelText in the an aria-label for the icon variant
  - Update the documentation with some clearer guidance on the APIs and sub components
  - Add guidance on usage of tooltip on non-interactive headers

## 1.45.3

### Patch Changes

- [#4669](https://github.com/cultureamp/kaizen-design-system/pull/4669) [`680397ec239831396417bae85e3e8b907d9bf502`](https://github.com/cultureamp/kaizen-design-system/commit/680397ec239831396417bae85e3e8b907d9bf502) - fix tsConfig jest-dom types

## 1.45.2

### Patch Changes

- [#4665](https://github.com/cultureamp/kaizen-design-system/pull/4665) [`0adb13322e1ef9d48f45d7dcc61c1d4fc67dedb6`](https://github.com/cultureamp/kaizen-design-system/commit/0adb13322e1ef9d48f45d7dcc61c1d4fc67dedb6) - fixed duplicate id on RTE, added optional id to RTE

## 1.45.1

### Patch Changes

- [#4606](https://github.com/cultureamp/kaizen-design-system/pull/4606) [`ff3e6df25963cb9953bbab2fd622ab3df285b3e8`](https://github.com/cultureamp/kaizen-design-system/commit/ff3e6df25963cb9953bbab2fd622ab3df285b3e8) - stylelint-config-standard-scss dep update to 13.1.0

- [#4606](https://github.com/cultureamp/kaizen-design-system/pull/4606) [`ff3e6df25963cb9953bbab2fd622ab3df285b3e8`](https://github.com/cultureamp/kaizen-design-system/commit/ff3e6df25963cb9953bbab2fd622ab3df285b3e8) - Update react monorepo deps and fix Storybook ArgType ts errors

- [#4606](https://github.com/cultureamp/kaizen-design-system/pull/4606) [`ff3e6df25963cb9953bbab2fd622ab3df285b3e8`](https://github.com/cultureamp/kaizen-design-system/commit/ff3e6df25963cb9953bbab2fd622ab3df285b3e8) - sass dep update to 1.76.0

- [#4606](https://github.com/cultureamp/kaizen-design-system/pull/4606) [`ff3e6df25963cb9953bbab2fd622ab3df285b3e8`](https://github.com/cultureamp/kaizen-design-system/commit/ff3e6df25963cb9953bbab2fd622ab3df285b3e8) - playwright-monorepo dep-update

## 1.45.0

### Minor Changes

- [#4662](https://github.com/cultureamp/kaizen-design-system/pull/4662) [`6cf318e6db52f5d1cebe2042fedb5267d3c2b3a5`](https://github.com/cultureamp/kaizen-design-system/commit/6cf318e6db52f5d1cebe2042fedb5267d3c2b3a5) - Expose ref for IconButton

## 1.44.0

### Minor Changes

- [#4660](https://github.com/cultureamp/kaizen-design-system/pull/4660) [`afea659cf94fe3b338b2934627a47d347d020af0`](https://github.com/cultureamp/kaizen-design-system/commit/afea659cf94fe3b338b2934627a47d347d020af0) - Add onAferEnter callback to GenericModal and expose in InputEditModal, ContextModal, ConfirmationModal to allow for focus management after open.

## 1.43.0

### Minor Changes

- [#4658](https://github.com/cultureamp/kaizen-design-system/pull/4658) [`f34a819b926f17b2e7736f518459af408a94a50a`](https://github.com/cultureamp/kaizen-design-system/commit/f34a819b926f17b2e7736f518459af408a94a50a) - LikertScaleLegacy component now supports a blue colorschema variant

## 1.42.7

### Patch Changes

- [#4651](https://github.com/cultureamp/kaizen-design-system/pull/4651) [`367930c888aa30b18c4db93a9f26b62b3e17e1b8`](https://github.com/cultureamp/kaizen-design-system/commit/367930c888aa30b18c4db93a9f26b62b3e17e1b8) - Fix the TitleBlockZen Windows High Contrast Mode Bug and obscured the active NavigationTab

- [#4650](https://github.com/cultureamp/kaizen-design-system/pull/4650) [`e5a802c78da6be18f143f87eefa2fe9d2e7e8a13`](https://github.com/cultureamp/kaizen-design-system/commit/e5a802c78da6be18f143f87eefa2fe9d2e7e8a13) - Adds forced-colors @media query to show selected Radio state

## 1.42.6

### Patch Changes

- [#4647](https://github.com/cultureamp/kaizen-design-system/pull/4647) [`0976f590106c4199ea98d289a64e7ebc1576903a`](https://github.com/cultureamp/kaizen-design-system/commit/0976f590106c4199ea98d289a64e7ebc1576903a) - Adds focus ring styles to TitleBlockZen's NavigationTabs to resolve a11y contrast issues

- [#4649](https://github.com/cultureamp/kaizen-design-system/pull/4649) [`7c82c80f596dbfa3d78edb3e33c70f2916e1ca54`](https://github.com/cultureamp/kaizen-design-system/commit/7c82c80f596dbfa3d78edb3e33c70f2916e1ca54) - Add focus styles to TitleBlockZen Breadcrumb link

## 1.42.5

### Patch Changes

- [#4639](https://github.com/cultureamp/kaizen-design-system/pull/4639) [`b62ece94654b54a8216fb6d61875ccb782f57bf8`](https://github.com/cultureamp/kaizen-design-system/commit/b62ece94654b54a8216fb6d61875ccb782f57bf8) - Update rollup config to re-add node resolver

## 1.42.4

### Patch Changes

- [#4616](https://github.com/cultureamp/kaizen-design-system/pull/4616) [`ce9261d27431c05eeb09c96220f342ee16753e43`](https://github.com/cultureamp/kaizen-design-system/commit/ce9261d27431c05eeb09c96220f342ee16753e43) - Menu component now has built in focus lock. Most notably this has added:

  - Esc press to close the menu
  - Focus will now go back to the menu button when the menu closes. This works even if the menu action opens a modal first, as long as the modal is mounted to the DOM before the action is pressed.

  Any instances where focus is manually being put back onto the menu after a modal close or similar can now be removed (unless you're conditionally rendering the modal as mentioned above).

## 1.42.3

### Patch Changes

- [#4618](https://github.com/cultureamp/kaizen-design-system/pull/4618) [`4f45c95934bb0040179b4ff21f0775c0ffa452a2`](https://github.com/cultureamp/kaizen-design-system/commit/4f45c95934bb0040179b4ff21f0775c0ffa452a2) - Fix CJS bundling and moved type declarations into dist/types.

## 1.42.2

### Patch Changes

- [#4615](https://github.com/cultureamp/kaizen-design-system/pull/4615) [`5251108870170850e3988ecd903425734befc74f`](https://github.com/cultureamp/kaizen-design-system/commit/5251108870170850e3988ecd903425734befc74f) - Update the VideoPlayer render to wrap the window logic in a useEffect

## 1.42.1

### Patch Changes

- [#4583](https://github.com/cultureamp/kaizen-design-system/pull/4583) [`07fa623062a4e1ebc3a2fde64df030bdf74ef724`](https://github.com/cultureamp/kaizen-design-system/commit/07fa623062a4e1ebc3a2fde64df030bdf74ef724) - chore(deps): update Prosemirror deps

- [#4583](https://github.com/cultureamp/kaizen-design-system/pull/4583) [`07fa623062a4e1ebc3a2fde64df030bdf74ef724`](https://github.com/cultureamp/kaizen-design-system/commit/07fa623062a4e1ebc3a2fde64df030bdf74ef724) - update devDep for @babel/plugin-transform-react-pure-annotations

- [#4583](https://github.com/cultureamp/kaizen-design-system/pull/4583) [`07fa623062a4e1ebc3a2fde64df030bdf74ef724`](https://github.com/cultureamp/kaizen-design-system/commit/07fa623062a4e1ebc3a2fde64df030bdf74ef724) - chore(deps): update date-fns dep

- [#4603](https://github.com/cultureamp/kaizen-design-system/pull/4603) [`254075b590c3b9ae6a367ca116cd261fc4f697d4`](https://github.com/cultureamp/kaizen-design-system/commit/254075b590c3b9ae6a367ca116cd261fc4f697d4) - Fix VideoPlayer video source for browsers without webm support.

- [#4583](https://github.com/cultureamp/kaizen-design-system/pull/4583) [`07fa623062a4e1ebc3a2fde64df030bdf74ef724`](https://github.com/cultureamp/kaizen-design-system/commit/07fa623062a4e1ebc3a2fde64df030bdf74ef724) - update i18n-react-intl and frontend-apis deps to latest patch release

- [#4583](https://github.com/cultureamp/kaizen-design-system/pull/4583) [`07fa623062a4e1ebc3a2fde64df030bdf74ef724`](https://github.com/cultureamp/kaizen-design-system/commit/07fa623062a4e1ebc3a2fde64df030bdf74ef724) - Update autoprefixer patch release

- [#4583](https://github.com/cultureamp/kaizen-design-system/pull/4583) [`07fa623062a4e1ebc3a2fde64df030bdf74ef724`](https://github.com/cultureamp/kaizen-design-system/commit/07fa623062a4e1ebc3a2fde64df030bdf74ef724) - chore(deps): update postcss dep

## 1.42.0

### Minor Changes

- [#4504](https://github.com/cultureamp/kaizen-design-system/pull/4504) [`3c5773061c2b2f66e599a2ff7ba7ab116dac1b1b`](https://github.com/cultureamp/kaizen-design-system/commit/3c5773061c2b2f66e599a2ff7ba7ab116dac1b1b) - Add new Heading variant `composable-header-title`

### Patch Changes

- [#4581](https://github.com/cultureamp/kaizen-design-system/pull/4581) [`2c5966e280f34d0ff6346ecd9f89d4b3624608a1`](https://github.com/cultureamp/kaizen-design-system/commit/2c5966e280f34d0ff6346ecd9f89d4b3624608a1) - chore: Update translations

- [#4592](https://github.com/cultureamp/kaizen-design-system/pull/4592) [`783271e4a3ba3d4c535f9c7dd2f726d90d3efbd5`](https://github.com/cultureamp/kaizen-design-system/commit/783271e4a3ba3d4c535f9c7dd2f726d90d3efbd5) - Fix type for `onSubmit` in `InputEditModalProps`

## 1.41.1

### Patch Changes

- [#4563](https://github.com/cultureamp/kaizen-design-system/pull/4563) [`9b2935c1be4c2d569ed439bab194472bb8ee0b21`](https://github.com/cultureamp/kaizen-design-system/commit/9b2935c1be4c2d569ed439bab194472bb8ee0b21) - Update cultureamp/i18n

- [#4580](https://github.com/cultureamp/kaizen-design-system/pull/4580) [`5797f7bc7d1ac146eb295d4e5f4402e935d57c76`](https://github.com/cultureamp/kaizen-design-system/commit/5797f7bc7d1ac146eb295d4e5f4402e935d57c76) - Improve the SplitButton dropdown accessible label (from "Open menu" to "Additional actions")

  Also adds internationalisation to the label

- [#4563](https://github.com/cultureamp/kaizen-design-system/pull/4563) [`9b2935c1be4c2d569ed439bab194472bb8ee0b21`](https://github.com/cultureamp/kaizen-design-system/commit/9b2935c1be4c2d569ed439bab194472bb8ee0b21) - Update date-fns to 3.5

- [#4579](https://github.com/cultureamp/kaizen-design-system/pull/4579) [`d9e6eaa00be7b19e8c093149fcbaebe7937ddaf3`](https://github.com/cultureamp/kaizen-design-system/commit/d9e6eaa00be7b19e8c093149fcbaebe7937ddaf3) - Fix workflow logo a11y

- [#4563](https://github.com/cultureamp/kaizen-design-system/pull/4563) [`9b2935c1be4c2d569ed439bab194472bb8ee0b21`](https://github.com/cultureamp/kaizen-design-system/commit/9b2935c1be4c2d569ed439bab194472bb8ee0b21) - Update sass dependency to 1.72.x

## 1.41.0

### Minor Changes

- [#4561](https://github.com/cultureamp/kaizen-design-system/pull/4561) [`0b85a5e5a9d4d609179274df12cdd0fdd52b3965`](https://github.com/cultureamp/kaizen-design-system/commit/0b85a5e5a9d4d609179274df12cdd0fdd52b3965) - Add new ThumbsUp and ThumbsDown icon set
  - adds new icon set with on and off state
  - adds deprecated doc block on old icon set

### Patch Changes

- [#4570](https://github.com/cultureamp/kaizen-design-system/pull/4570) [`c6718306b97f5408d7d2e4ac05320addc3d14909`](https://github.com/cultureamp/kaizen-design-system/commit/c6718306b97f5408d7d2e4ac05320addc3d14909) - Export useMediaQueries hook

- [#4551](https://github.com/cultureamp/kaizen-design-system/pull/4551) [`4a140c6d9e704f3587cdeb392c492b1d936e4b5f`](https://github.com/cultureamp/kaizen-design-system/commit/4a140c6d9e704f3587cdeb392c492b1d936e4b5f) - Update dependency autoprefixer to ^10.4.18

## 1.40.6

### Patch Changes

- [#4543](https://github.com/cultureamp/kaizen-design-system/pull/4543) [`5434d009325c6588b9be968144fdeb27c37b08f9`](https://github.com/cultureamp/kaizen-design-system/commit/5434d009325c6588b9be968144fdeb27c37b08f9) - Update react-focus-on and react-focus-lock dependencies

- [#4557](https://github.com/cultureamp/kaizen-design-system/pull/4557) [`28f6611df11902522df2068de1b89afcf6763bcb`](https://github.com/cultureamp/kaizen-design-system/commit/28f6611df11902522df2068de1b89afcf6763bcb) - Remove tailwind from kaizen CSS bundle

  - Replaced Tailwind CSS in Kaizen components
    - This includes: Slider, Workflow's subcomponents, GenericTile, MultiActionTile
  - Remove tailwind directives from kaizen global.css and compile CSS

## 1.40.5

### Patch Changes

- [#4549](https://github.com/cultureamp/kaizen-design-system/pull/4549) [`f6cfb6ad27da23cc35d99eae0a44321d853316f3`](https://github.com/cultureamp/kaizen-design-system/commit/f6cfb6ad27da23cc35d99eae0a44321d853316f3) - Update cultureamp i18n dependencies

- [#4555](https://github.com/cultureamp/kaizen-design-system/pull/4555) [`1d81ac7ce9b4228beb6d4e40b0a86673607f5146`](https://github.com/cultureamp/kaizen-design-system/commit/1d81ac7ce9b4228beb6d4e40b0a86673607f5146) - Update error page Greek translations

## 1.40.4

### Patch Changes

- [#4529](https://github.com/cultureamp/kaizen-design-system/pull/4529) [`a701b14050051c325218b21177d54311e3a2fd87`](https://github.com/cultureamp/kaizen-design-system/commit/a701b14050051c325218b21177d54311e3a2fd87) - Update peer dependency @cultureamp/i18n-react-intl to ^2.5.1

- [#4529](https://github.com/cultureamp/kaizen-design-system/pull/4529) [`a701b14050051c325218b21177d54311e3a2fd87`](https://github.com/cultureamp/kaizen-design-system/commit/a701b14050051c325218b21177d54311e3a2fd87) - Update react-spectrum dependencies.

- [#4529](https://github.com/cultureamp/kaizen-design-system/pull/4529) [`a701b14050051c325218b21177d54311e3a2fd87`](https://github.com/cultureamp/kaizen-design-system/commit/a701b14050051c325218b21177d54311e3a2fd87) - Update prosemirror dependencies.

## 1.40.3

### Patch Changes

- [#4525](https://github.com/cultureamp/kaizen-design-system/pull/4525) [`9c586b4275db828a4597f66a9f584e6878a8ebc6`](https://github.com/cultureamp/kaizen-design-system/commit/9c586b4275db828a4597f66a9f584e6878a8ebc6) - Bug fix for modals: ensure clean up runs when the modal is unmounted.

  This bug created unscrollable pages if the modal was removed from the DOM before its `onAfterLeave` callback was able to run.

- [#4522](https://github.com/cultureamp/kaizen-design-system/pull/4522) [`bf22ff21983a0f05e495271431ba4fe76e15b631`](https://github.com/cultureamp/kaizen-design-system/commit/bf22ff21983a0f05e495271431ba4fe76e15b631) - Update @react-aria package dependencies

## 1.40.2

### Patch Changes

- [#4518](https://github.com/cultureamp/kaizen-design-system/pull/4518) [`7577a6a8aefb4a41a1197d09e0f947950ec117df`](https://github.com/cultureamp/kaizen-design-system/commit/7577a6a8aefb4a41a1197d09e0f947950ec117df) - Upgrade rollup-plugin-node-externals to v7

## 1.40.1

### Patch Changes

- [#4515](https://github.com/cultureamp/kaizen-design-system/pull/4515) [`346e0648357221b08e4989bfd808b285bacfd4d0`](https://github.com/cultureamp/kaizen-design-system/commit/346e0648357221b08e4989bfd808b285bacfd4d0) - Update dependencies

- [#4516](https://github.com/cultureamp/kaizen-design-system/pull/4516) [`f963e0a877ae846cc61e9a972a399ec2d22bc5c0`](https://github.com/cultureamp/kaizen-design-system/commit/f963e0a877ae846cc61e9a972a399ec2d22bc5c0) - Updated translations

## 1.40.0

### Minor Changes

- [#4482](https://github.com/cultureamp/kaizen-design-system/pull/4482) [`166a0e370c3ae0ab647afb034a23cecb8f7c6ca9`](https://github.com/cultureamp/kaizen-design-system/commit/166a0e370c3ae0ab647afb034a23cecb8f7c6ca9) - Simplify error page messages for internationalisation.

### Patch Changes

- [#4506](https://github.com/cultureamp/kaizen-design-system/pull/4506) [`f84bc4c4bed82d60400a5faac18ea846c0bf47e0`](https://github.com/cultureamp/kaizen-design-system/commit/f84bc4c4bed82d60400a5faac18ea846c0bf47e0) - Updated translations

- [#4512](https://github.com/cultureamp/kaizen-design-system/pull/4512) [`4c3d7f3c8b6a562e752ffd0fbe819fd8d66154b5`](https://github.com/cultureamp/kaizen-design-system/commit/4c3d7f3c8b6a562e752ffd0fbe819fd8d66154b5) - Updated translations

## 1.39.2

### Patch Changes

- [#4449](https://github.com/cultureamp/kaizen-design-system/pull/4449) [`add4a7588af5d309f2355b587b812c81b6dc88ce`](https://github.com/cultureamp/kaizen-design-system/commit/add4a7588af5d309f2355b587b812c81b6dc88ce) - Add accessible name to dialog for Filter components

- [#4449](https://github.com/cultureamp/kaizen-design-system/pull/4449) [`add4a7588af5d309f2355b587b812c81b6dc88ce`](https://github.com/cultureamp/kaizen-design-system/commit/add4a7588af5d309f2355b587b812c81b6dc88ce) - Update dependencies

  - "date-fns": "^3.0.6"
  - "react-day-picker": "^8.10.0"
    - Note: We are aware that the update includes broken a11y behaviour from the library (https://github.com/gpbl/react-day-picker/issues/1688), but we have opted to prevent lagging behind version updates instead

## 1.39.1

### Patch Changes

- [#4461](https://github.com/cultureamp/kaizen-design-system/pull/4461) [`513e2a1572894c064cb82b5e046024ffaa30e85e`](https://github.com/cultureamp/kaizen-design-system/commit/513e2a1572894c064cb82b5e046024ffaa30e85e) - Update dependency @floating-ui/react-dom to ^2.0.5

- [#4460](https://github.com/cultureamp/kaizen-design-system/pull/4460) [`47b451a8079aa7393b33aa9049052764b9c0030d`](https://github.com/cultureamp/kaizen-design-system/commit/47b451a8079aa7393b33aa9049052764b9c0030d) - Update peerDep @cultureamp/i18n-react-intl to ^2.1.10

- [#4467](https://github.com/cultureamp/kaizen-design-system/pull/4467) [`4504646e1935bc913030c8783f97ea4c3c4bb0de`](https://github.com/cultureamp/kaizen-design-system/commit/4504646e1935bc913030c8783f97ea4c3c4bb0de) - Update dependencies

  Dependencies:

  - "prosemirror-model": "^1.19.4"
  - "prosemirror-view": "^1.32.7"

  Peer dependencies:

  - "react-intl": "^6.6.0"

## 1.39.0

### Minor Changes

- [#4478](https://github.com/cultureamp/kaizen-design-system/pull/4478) [`bb1045fd89fc0426c434ae6487547294d8a64593`](https://github.com/cultureamp/kaizen-design-system/commit/bb1045fd89fc0426c434ae6487547294d8a64593) - Expose IconProps

## 1.38.6

### Patch Changes

- [#4471](https://github.com/cultureamp/kaizen-design-system/pull/4471) [`af8329e55eb27763d042608c0f353ea622a1ade8`](https://github.com/cultureamp/kaizen-design-system/commit/af8329e55eb27763d042608c0f353ea622a1ade8) - <TitleBlockZen /> - Allow mobile actions menu to auto hide when user clicks a menu item

- [#4469](https://github.com/cultureamp/kaizen-design-system/pull/4469) [`aebd4d30a1d8aa96d9377eedc4952152b2777d70`](https://github.com/cultureamp/kaizen-design-system/commit/aebd4d30a1d8aa96d9377eedc4952152b2777d70) - `<MenuItem>`: accept id in props and pass it to child button/link
  `<TitleBlockZen>`
  - Add constant ids for TitleBlockZen's secondary menu and other actions menu in mobile view
  - accept id in props to be assigned to the root div

## 1.38.5

### Patch Changes

- [#4468](https://github.com/cultureamp/kaizen-design-system/pull/4468) [`2051d584a4d5b3aaa174c47b45100d2087860c79`](https://github.com/cultureamp/kaizen-design-system/commit/2051d584a4d5b3aaa174c47b45100d2087860c79) - TimeField: added conditional aria-describeby to fix accessibility

- [#4427](https://github.com/cultureamp/kaizen-design-system/pull/4427) [`e43e041bf2699ee7c8fa67a546e828862cf41904`](https://github.com/cultureamp/kaizen-design-system/commit/e43e041bf2699ee7c8fa67a546e828862cf41904) - Dep updates:

  - classnames to 2.5.1

  Peer dep updates:

  - @cultureamp/i18n-react-intl to 2.1.8
  - tailwindcss to 3.4.0 (@kaizen/tailwind package)

- [#4447](https://github.com/cultureamp/kaizen-design-system/pull/4447) [`6acfa8758f1c850895bbf3b05ba2569030772b01`](https://github.com/cultureamp/kaizen-design-system/commit/6acfa8758f1c850895bbf3b05ba2569030772b01) - Bump react-spectrum packages

## 1.38.4

### Patch Changes

- [#4384](https://github.com/cultureamp/kaizen-design-system/pull/4384) [`234569cc02592834f92711c74c251096c032ffe0`](https://github.com/cultureamp/kaizen-design-system/commit/234569cc02592834f92711c74c251096c032ffe0) - Dep updates:

  - @cultureamp/i18n-react-intl from 2.1.3 to 2.1.5
  - svgo from 3.0.4 to 3.1.0
  - ts-patch from 3.0.2 to 3.1.1

  * a bunch of dev deps

- [#4426](https://github.com/cultureamp/kaizen-design-system/pull/4426) [`e3a6b029b7b70a356cb383db615968d8a73ecaf9`](https://github.com/cultureamp/kaizen-design-system/commit/e3a6b029b7b70a356cb383db615968d8a73ecaf9) - Address ToggleSwitch bug - CheckIcon now hidden when toggle set to false.

## 1.38.3

### Patch Changes

- [#4418](https://github.com/cultureamp/kaizen-design-system/pull/4418) [`2c77ddbeb`](https://github.com/cultureamp/kaizen-design-system/commit/2c77ddbebbfb67635955e1d320ac490f4480454e) - Remove required action prop on TitleBlockZen menu items that does nothing

## 1.38.2

### Patch Changes

- [#4414](https://github.com/cultureamp/kaizen-design-system/pull/4414) [`9a18c2c81`](https://github.com/cultureamp/kaizen-design-system/commit/9a18c2c8191cbf25c5525e61b1d55bcdaec76f68) - TabList now uses classNameOverride correctly

- [#4415](https://github.com/cultureamp/kaizen-design-system/pull/4415) [`423c46919`](https://github.com/cultureamp/kaizen-design-system/commit/423c469199b28c1567825fecb31d1d33f8fa520d) - Fix SSR support for video player

## 1.38.1

### Patch Changes

- [#4396](https://github.com/cultureamp/kaizen-design-system/pull/4396) [`fd678f49d`](https://github.com/cultureamp/kaizen-design-system/commit/fd678f49dbd06435e6e5e001455072503d266c78) - Use :focus-visible instead of :focus for popover focus ring

## 1.38.0

### Minor Changes

- [#4367](https://github.com/cultureamp/kaizen-design-system/pull/4367) [`02a6069b8`](https://github.com/cultureamp/kaizen-design-system/commit/02a6069b8bcd5b5b46b12b476b049f894144115e) - Release Multi Select component

### Patch Changes

- [#4393](https://github.com/cultureamp/kaizen-design-system/pull/4393) [`f6f791813`](https://github.com/cultureamp/kaizen-design-system/commit/f6f791813afa8e36063c4a53f3f524cd951e17e1) - Add sentimentPositive TitleBlockZen fix from kaizen-legacy

- [#4382](https://github.com/cultureamp/kaizen-design-system/pull/4382) [`574647e97`](https://github.com/cultureamp/kaizen-design-system/commit/574647e97f8b0c6e5b9345e1c4b620ab4e40c65f) - RichTextEditor: aria-describedby put on textbox element instead of container div

- [#4369](https://github.com/cultureamp/kaizen-design-system/pull/4369) [`379d30189`](https://github.com/cultureamp/kaizen-design-system/commit/379d3018999705facb61cee7f7767ad926dfd441) - Change placeholder opacity on Select

- [#4316](https://github.com/cultureamp/kaizen-design-system/pull/4316) [`00d30e6f6`](https://github.com/cultureamp/kaizen-design-system/commit/00d30e6f688b52b18ece992c2a380100b9904b5f) - Update `use-debounce` to `v10`

- [#4322](https://github.com/cultureamp/kaizen-design-system/pull/4322) [`860a9f7fd`](https://github.com/cultureamp/kaizen-design-system/commit/860a9f7fd2d0b0d9c0389267ee3e044689588d86) - Update dependencies

  - `prosemirror-inputrules` to `^1.3.0`
  - `prosemirror-view` to `^1.32.4`
  - `react-select` to `5.8.0`
  - `@cultureamp/i18n-react-intl` to `^2.1.3`
  - `react-intl` to `^6.5.5`
  - `rollup` to `^4.6.0`

- [#4326](https://github.com/cultureamp/kaizen-design-system/pull/4326) [`5baff641e`](https://github.com/cultureamp/kaizen-design-system/commit/5baff641e399c1478a3371a29f27d7ccd4b147f6) - Fix `RTE <Positioner>` to be SSR friendly.

  Also fix `Popover` semantic structure where `<Text>` was used as a container but
  defaulted to a `p`; changed to a `div`.

## 1.37.1

### Patch Changes

- [#4354](https://github.com/cultureamp/kaizen-design-system/pull/4354) [`9eb7deeba`](https://github.com/cultureamp/kaizen-design-system/commit/9eb7deeba3b477f71fa288d65f9471cf6363515b) - Update KaizenProvider to await document before rendering ToastNotificationsList

## 1.37.0

### Minor Changes

- [#4350](https://github.com/cultureamp/kaizen-design-system/pull/4350) [`ffd96aca3`](https://github.com/cultureamp/kaizen-design-system/commit/ffd96aca3494884e87ac1c5e587b2343cff2c563) - export VisuallyHidden component

## 1.36.0

### Minor Changes

- [#4309](https://github.com/cultureamp/kaizen-design-system/pull/4309) [`7e08cad4a`](https://github.com/cultureamp/kaizen-design-system/commit/7e08cad4a5358be5cec2380fd78506dca3b838e9) - Refactor `ToastNotification` to be tree-shakeable.

- [#4328](https://github.com/cultureamp/kaizen-design-system/pull/4328) [`a374c076d`](https://github.com/cultureamp/kaizen-design-system/commit/a374c076d23d0275642619b8de8204b481774722) - Add portalContainerId prop the future Select to allow portals to other DOM elements.

### Patch Changes

- [#4330](https://github.com/cultureamp/kaizen-design-system/pull/4330) [`06cb4276a`](https://github.com/cultureamp/kaizen-design-system/commit/06cb4276a24d1fb4bde0ea27d7c8aeb8ce8ebd0a) - Pass aria-describedby into RTE when sent via props

- [#4339](https://github.com/cultureamp/kaizen-design-system/pull/4339) [`f1b6b7d34`](https://github.com/cultureamp/kaizen-design-system/commit/f1b6b7d346b6126817344fb6047af433336f3172) - Fix ContextModal spread prop console errors.

## 1.35.2

### Patch Changes

- [#4329](https://github.com/cultureamp/kaizen-design-system/pull/4329) [`3b77a410d`](https://github.com/cultureamp/kaizen-design-system/commit/3b77a410ddabb26911b59535e527035e7377cf30) - Remove value prefix on Select combobox accessible name

- [#4327](https://github.com/cultureamp/kaizen-design-system/pull/4327) [`41ff86658`](https://github.com/cultureamp/kaizen-design-system/commit/41ff86658d00a1ace401ecdd5b6ed39df0a2b865) - Fix issue in Button, where screen readers would announce the Button's contents on page-load.

## 1.35.1

### Patch Changes

- [#4311](https://github.com/cultureamp/kaizen-design-system/pull/4311) [`20a7492e1`](https://github.com/cultureamp/kaizen-design-system/commit/20a7492e1902912504424bd9887e0495291c4283) - Add the TitleBlock types file to index

## 1.35.0

### Minor Changes

- [#4272](https://github.com/cultureamp/kaizen-design-system/pull/4272) [`f09c3964e`](https://github.com/cultureamp/kaizen-design-system/commit/f09c3964e348fdd651ec32722e0b42515c014099) - Migrate GuidanceBlock from kaizen-legacy

- [#4308](https://github.com/cultureamp/kaizen-design-system/pull/4308) [`07ae2692f`](https://github.com/cultureamp/kaizen-design-system/commit/07ae2692fd2ff1118fe2c9f4a3d3c4ee2f0d33bd) - Add `TitleBlockZen`, `SkirtCard` components export

- [#4282](https://github.com/cultureamp/kaizen-design-system/pull/4282) [`982cbc006`](https://github.com/cultureamp/kaizen-design-system/commit/982cbc00635daae77496d06bf66aa3ba2bcdf6f3) - Migrate BrandMomentCaptureIntro from kaizen-legacy

  - Migrate BrandMomentCaptureIntro as nested Scene component
  - Replace setting of inline styles and display non with conditional render
  - Adds stories and documentation to illustrate specific use case and animation

- [#4205](https://github.com/cultureamp/kaizen-design-system/pull/4205) [`dee798fdb`](https://github.com/cultureamp/kaizen-design-system/commit/dee798fdb2d5091650e9350d0f7c575288e59c65) - Added the following foundational styles to dist/styles.css:

  - Reset: initially to provide the border properties that support Tailwind's border default settings.
  - Fonts: with font-face definitions for Inter, Tiempos and IBM Mono
  - Normalize: A standard Normalize already present across CultureAmp
  - Layers: A set of CSS layers to help control the specificity of these 3 CSS stylesheets and our component's CSS.

  **Important: Remove any other normalize or reset stylesheets in your application repo**

### Patch Changes

- [#4285](https://github.com/cultureamp/kaizen-design-system/pull/4285) [`374d5bcca`](https://github.com/cultureamp/kaizen-design-system/commit/374d5bccad63b08916f84944b207a10802693218) - Dep updates (dev updates not listed)

  - @floating-ui/react-dom from 2.0.2 to 2.0.4
  - @react-stately/collections from 3.10.2 to 3.10.3
  - @react-stately/menu from 3.5.6 to 3.5.7
  - react-animate-height from 3.2.2 to 3.2.3
  - (peer dep) react-intl from 6.5.1 to 6.5.4

- [#4205](https://github.com/cultureamp/kaizen-design-system/pull/4205) [`dee798fdb`](https://github.com/cultureamp/kaizen-design-system/commit/dee798fdb2d5091650e9350d0f7c575288e59c65) - - Replace all usages of `Heading` from `@kaizen/typography` with the same from KAIO

  - Replace all usages of `Paragraph` from `@kaizen/typography` with `Text` from KAIO
  - Remove `@kaizen/brand` and its usages
  - Remove `@kaizen/brand-moment` and its usages
  - Remove `@kaizen/button` and its usages
  - Remove `@kaizen/draft-badge` and its usages
  - Remove `@kaizen/draft-card` and its usages
  - Remove `@kaizen/draft-divider` and its usages
  - Remove `@kaizen/draft-form` and its usages
  - Remove `@kaizen/draft-illustration` and its usages
  - Remove `@kaizen/draft-page-layout` and its usages
  - Remove `@kaizen/draft-select` and its usages
  - Remove `@kaizen/draft-tabs` and its usages
  - Remove `@kaizen/draft-tag` and its usages
  - Remove `@kaizen/draft-tooltip` and its usages
  - Remove `@kaizen/responsive` and its usages
  - Remove `@kaizen/notification` and its usages
  - Remove `@kaizen/loading-skeleton` and its usages
  - Remove `@kaizen/loading-spinner` and its usages
  - Update usages of `uuid` to `useId` within components

- [#4296](https://github.com/cultureamp/kaizen-design-system/pull/4296) [`b745e3f75`](https://github.com/cultureamp/kaizen-design-system/commit/b745e3f75569e4c478e8ace891ca8737f483f0aa) - Bump adobe (react-aria/stately) packages

## 1.34.0

### Minor Changes

- [#4255](https://github.com/cultureamp/kaizen-design-system/pull/4255) [`6500eb908`](https://github.com/cultureamp/kaizen-design-system/commit/6500eb9084d8c247e6f816d1bb7c81f314241029) - Migrate RichTextEditor, RichTextContent, EditableRichTextContent from `kaizen-legacy`.

  Migrate `rich-text-toolkit`.

### Patch Changes

- [#4275](https://github.com/cultureamp/kaizen-design-system/pull/4275) [`0adc6e4c2`](https://github.com/cultureamp/kaizen-design-system/commit/0adc6e4c293328d036df19ee594fe125c9a25c7a) - Additional translations

## 1.33.0

### Minor Changes

- [#4247](https://github.com/cultureamp/kaizen-design-system/pull/4247) [`f87c851a7`](https://github.com/cultureamp/kaizen-design-system/commit/f87c851a75cd1d6e8799f212a0aec66ebdf72a8e) - Migrate Tabs component from kaizen-legacy

- [#4269](https://github.com/cultureamp/kaizen-design-system/pull/4269) [`7e528adf3`](https://github.com/cultureamp/kaizen-design-system/commit/7e528adf3e99ef34e9fa8f91d8468dcf11e12e28) - Migrate ToggleSwitchField from kaizen-legacy

- [#4270](https://github.com/cultureamp/kaizen-design-system/pull/4270) [`0b7b9bcec`](https://github.com/cultureamp/kaizen-design-system/commit/0b7b9bcec89664b9626639b9c431d91c990694ab) - Migrate Scene from kaizen-legacy

### Patch Changes

- [#4271](https://github.com/cultureamp/kaizen-design-system/pull/4271) [`fd842227e`](https://github.com/cultureamp/kaizen-design-system/commit/fd842227e827fcc8bb955e89745b88150a141b40) - Update translations

- [#4262](https://github.com/cultureamp/kaizen-design-system/pull/4262) [`9bb89607b`](https://github.com/cultureamp/kaizen-design-system/commit/9bb89607b633623d42a414da09edadd95bd48dde) - Update dependency rollup to ^4.3.0

- [#4267](https://github.com/cultureamp/kaizen-design-system/pull/4267) [`88cc2ab45`](https://github.com/cultureamp/kaizen-design-system/commit/88cc2ab458977d2e47652f5ae3d891c40afc10d7) - Update translations for 413 Error page

## 1.32.0

### Minor Changes

- [#4260](https://github.com/cultureamp/kaizen-design-system/pull/4260) [`9a95d5f23`](https://github.com/cultureamp/kaizen-design-system/commit/9a95d5f23d1f832fc63a55886b8de839b27edc32) - Add 413 error page.

### Patch Changes

- [#4259](https://github.com/cultureamp/kaizen-design-system/pull/4259) [`8680132cb`](https://github.com/cultureamp/kaizen-design-system/commit/8680132cb6532538711d36d83a2d6cb660720b7e) - fix: fing typo

## 1.31.0

### Minor Changes

- [#4246](https://github.com/cultureamp/kaizen-design-system/pull/4246) [`b01fc8a31`](https://github.com/cultureamp/kaizen-design-system/commit/b01fc8a318897fe3543af2e8d191f27d4fa1fadf) - Migrate ToastNotification from kaizen-legacy.

- [#4214](https://github.com/cultureamp/kaizen-design-system/pull/4214) [`8f63917af`](https://github.com/cultureamp/kaizen-design-system/commit/8f63917af6594f14829be861b14abce2f1dd7dad) - Make Tags in MultiSelect removable on click.
  Tags in MultiSelect now have a clear button, that can be used to remove them from the list of selected options.

- [#4254](https://github.com/cultureamp/kaizen-design-system/pull/4254) [`53c59af92`](https://github.com/cultureamp/kaizen-design-system/commit/53c59af925de59263feb2417d132166a18aa779c) - Migrate ProgressBar from kaizen-legacy

- [#4253](https://github.com/cultureamp/kaizen-design-system/pull/4253) [`880e668a5`](https://github.com/cultureamp/kaizen-design-system/commit/880e668a50662c79415b551b8b9ab6dbc5f99767) - Migrate LikertScaleLegacy from `kaizen-legacy`

### Patch Changes

- [#4252](https://github.com/cultureamp/kaizen-design-system/pull/4252) [`b2cc3123a`](https://github.com/cultureamp/kaizen-design-system/commit/b2cc3123a11fdfb7aed696b02a67ae42f70bdba6) - Fix colour inheritance for CloseIcon.

## 1.30.0

### Minor Changes

- [#4248](https://github.com/cultureamp/kaizen-design-system/pull/4248) [`827f0880d`](https://github.com/cultureamp/kaizen-design-system/commit/827f0880d6815827b9333b76884ec7208c302caf) - Migrate `Well` from `kaizen-legacy`

### Patch Changes

- [#4249](https://github.com/cultureamp/kaizen-design-system/pull/4249) [`647153413`](https://github.com/cultureamp/kaizen-design-system/commit/647153413b0c61c4bc3bfd20ab4c25d4424b4cf5) - fix: Add missing Tag export.

## 1.29.0

### Minor Changes

- [#4215](https://github.com/cultureamp/kaizen-design-system/pull/4215) [`6ca1993f8`](https://github.com/cultureamp/kaizen-design-system/commit/6ca1993f8ab06b88ba21c1e3a9127016b85d4895) - Migrate `LoadingSpinner` from `kaizen-legacy`.

- [#4244](https://github.com/cultureamp/kaizen-design-system/pull/4244) [`bc94e27a4`](https://github.com/cultureamp/kaizen-design-system/commit/bc94e27a4af23faf8ffa2b5f64e80d37f488b757) - Migrate Pagination from `kaizen-legacy`

- [#4216](https://github.com/cultureamp/kaizen-design-system/pull/4216) [`3f9022301`](https://github.com/cultureamp/kaizen-design-system/commit/3f9022301aef07adc181d12011cab92cd600b131) - Migrate `SplitButton` from `kaizen-legacy`.

  Replace usages of `@kaizen/draft-menu` with KAIO `Menu`.

- [#4131](https://github.com/cultureamp/kaizen-design-system/pull/4131) [`24e497d4f`](https://github.com/cultureamp/kaizen-design-system/commit/24e497d4fb60173d89855ba6aa351ed11d87e579) - Add Future RemovableTag and RemovableButton components

- [#4208](https://github.com/cultureamp/kaizen-design-system/pull/4208) [`55b4b6cc0`](https://github.com/cultureamp/kaizen-design-system/commit/55b4b6cc09965bff514b98c9901b55a419f47c99) - Migrate Spot Illustrations

- [#4186](https://github.com/cultureamp/kaizen-design-system/pull/4186) [`f44539f2e`](https://github.com/cultureamp/kaizen-design-system/commit/f44539f2e2c8d9318988f0e38b788fbba21f365e) - Migrate Legacy Select and Popover

- [#4217](https://github.com/cultureamp/kaizen-design-system/pull/4217) [`e0bd4a310`](https://github.com/cultureamp/kaizen-design-system/commit/e0bd4a310ebfbcb0f302aec24c46fa036e203336) - Migrate Menu from `kaizen-legacy`

- [#4212](https://github.com/cultureamp/kaizen-design-system/pull/4212) [`87070dc7b`](https://github.com/cultureamp/kaizen-design-system/commit/87070dc7bb75309095111ac81c7064d155a7d03e) - Migrate `LoadingGraphic`, `LoadingHeading`, `LoadingInput`, `LoadingParagraph` from `kaizen-legacy`.

- [#4209](https://github.com/cultureamp/kaizen-design-system/pull/4209) [`7b17d8470`](https://github.com/cultureamp/kaizen-design-system/commit/7b17d8470f5e7232b68a7d3b612f434ecb7ee4de) - Migrate Table component from kaizen-legacy

- [#4219](https://github.com/cultureamp/kaizen-design-system/pull/4219) [`da82c6ef4`](https://github.com/cultureamp/kaizen-design-system/commit/da82c6ef4ff7488d47ead7eedd6cf1bc326cca7e) - Migrate `TitleBlockZen` from `kaizen-legacy`

- [#4207](https://github.com/cultureamp/kaizen-design-system/pull/4207) [`64b2f6bac`](https://github.com/cultureamp/kaizen-design-system/commit/64b2f6bac80059aaefce8a2ad93eedd6f2cbe58d) - Migrate InformationTile, MultiActionTile, TileGrid from kaizen-legacy

- [#4206](https://github.com/cultureamp/kaizen-design-system/pull/4206) [`abfea3c0b`](https://github.com/cultureamp/kaizen-design-system/commit/abfea3c0baf9bfc2ed6ec4b3dcf34ad16568c516) - Migrate <TimeField/> from kaizen-legacy.

- [#4211](https://github.com/cultureamp/kaizen-design-system/pull/4211) [`0bc493661`](https://github.com/cultureamp/kaizen-design-system/commit/0bc4936619c398f92ff1cec57cae172b37aa4d11) - Migrate Skirt, Content, Container from `kaizen-legacy`

- [#4198](https://github.com/cultureamp/kaizen-design-system/pull/4198) [`8aab5236a`](https://github.com/cultureamp/kaizen-design-system/commit/8aab5236a8ff4c28db3acbd06011cb097715e3ae) - Remove "Theme-ing" related docs
  Move Design Tokens CSS Vars to KAIO style bundle
  Add docs for accessing tokens in JS + SCSS

- [#4210](https://github.com/cultureamp/kaizen-design-system/pull/4210) [`dbfffd9d5`](https://github.com/cultureamp/kaizen-design-system/commit/dbfffd9d5419af51aa0df9929983186b14748d88) - Migrate Tooltip component from kaizen-legacy

### Patch Changes

- [#4195](https://github.com/cultureamp/kaizen-design-system/pull/4195) [`affcb4841`](https://github.com/cultureamp/kaizen-design-system/commit/affcb48411809793038c3c94511e85c98e35daa5) - Fix stylelint issues

- [#4185](https://github.com/cultureamp/kaizen-design-system/pull/4185) [`f4f600554`](https://github.com/cultureamp/kaizen-design-system/commit/f4f600554e8c235ce20c62b7c1fca90446cd308e) - fixed camel case on RadioGroup `data-testId`

- [#4201](https://github.com/cultureamp/kaizen-design-system/pull/4201) [`fe9d56ab3`](https://github.com/cultureamp/kaizen-design-system/commit/fe9d56ab33fd72018a4788d6246a3eadb7153bda) - Update rollup deps

- [#4237](https://github.com/cultureamp/kaizen-design-system/pull/4237) [`e551cf8b4`](https://github.com/cultureamp/kaizen-design-system/commit/e551cf8b4d36f3ba0971e8194f8da78bf04f6cab) - Package updates:

  @kaizen/components (peer deps):

  - @cultureamp/i18n-react-intl from 2.0.0 to 2.1.1
  - react from 18.0.0 to 18.2.0
  - react-intl from 6.4.6 to 6.5.1

  @kaizen/tailwind (peer deps):

  - tailwindcss from ^3.3.3 to ^3.3.5"

  (otherwise all dev dep updates)

- [#4200](https://github.com/cultureamp/kaizen-design-system/pull/4200) [`9a00bde97`](https://github.com/cultureamp/kaizen-design-system/commit/9a00bde978c7ebf3eca65d8e460b692f2eb95768) - Update react-aria and react-stately deps

- [#4203](https://github.com/cultureamp/kaizen-design-system/pull/4203) [`ec791cca9`](https://github.com/cultureamp/kaizen-design-system/commit/ec791cca996f8f58e2ab6d85d31354c801ea7889) - Dep updates:
  - @cultureamp/frontend-apis to 8.2.0
  - @types/react-dom to 18.2.14
  - @types/react-textfit to 1.1.2
  - react-intl to 6.5.0
  - sass to 1.69.4

## 1.28.0

### Minor Changes

- [#4178](https://github.com/cultureamp/kaizen-design-system/pull/4178) [`3e0ce69bb`](https://github.com/cultureamp/kaizen-design-system/commit/3e0ce69bb6c012c4b18d43c784cf40267234a2a8) - Migrate ContextModal from kaizen-legacy

- [#4176](https://github.com/cultureamp/kaizen-design-system/pull/4176) [`3436dc296`](https://github.com/cultureamp/kaizen-design-system/commit/3436dc29670ae1bb0bc97b647be75c6a94cd700a) - Migrate DatePicker and DateRangePicker

- [#4179](https://github.com/cultureamp/kaizen-design-system/pull/4179) [`3f35b9051`](https://github.com/cultureamp/kaizen-design-system/commit/3f35b9051453a807620146347acaa8aeaa068cff) - Migrate InputEditModal from kaizen-legacy

- [#4177](https://github.com/cultureamp/kaizen-design-system/pull/4177) [`526d2fa2b`](https://github.com/cultureamp/kaizen-design-system/commit/526d2fa2bca09be9752b24ee3fa9f7f0396ebe12) - Migrate ConfirmationModal from kaizen-legacy

- [#4174](https://github.com/cultureamp/kaizen-design-system/pull/4174) [`da3701bf1`](https://github.com/cultureamp/kaizen-design-system/commit/da3701bf1da3056aa0029fccec9d9125c55afc04) - Migrate GenericModal from kaizen-legacy

### Patch Changes

- [#4159](https://github.com/cultureamp/kaizen-design-system/pull/4159) [`b9700c9fb`](https://github.com/cultureamp/kaizen-design-system/commit/b9700c9fba0542fe67cb7954d5831e97fd84bb78) - Add TypeScript JSDocs to Radio id, name and value props

## 1.27.0

### Minor Changes

- [#4157](https://github.com/cultureamp/kaizen-design-system/pull/4157) [`19c6fdc19`](https://github.com/cultureamp/kaizen-design-system/commit/19c6fdc191a1e58b2fefad61e78ed8adf123aeb2) - - Migrate kaizen-legacy TextField, TextArea, TextAreaField to KAIO

- [#4158](https://github.com/cultureamp/kaizen-design-system/pull/4158) [`5093f486e`](https://github.com/cultureamp/kaizen-design-system/commit/5093f486e9eaf09e510300ffe2bdaf3a0e0bd95d) - Migrate VisuallyHidden component to KAIO

### Patch Changes

- [#4180](https://github.com/cultureamp/kaizen-design-system/pull/4180) [`afe86b01e`](https://github.com/cultureamp/kaizen-design-system/commit/afe86b01e81493c35a0b26dd9b7b7ab19123b5ec) - Fixes issue where styles.css was being tree-shaken by Webpack

- [#4155](https://github.com/cultureamp/kaizen-design-system/pull/4155) [`9b29d7c3e`](https://github.com/cultureamp/kaizen-design-system/commit/9b29d7c3e4359dbf1b90e886b2fd359c1b7678fd) - Change `@kaizen/design-tokens` from peerDep to devDep.

  No longer required by consumers as we distribute compiled css.

## 1.26.0

### Minor Changes

- [#4111](https://github.com/cultureamp/kaizen-design-system/pull/4111) [`8e5c10a19`](https://github.com/cultureamp/kaizen-design-system/commit/8e5c10a1997c58652c5a42b51e6acdfc6c2dacf9) - - Migrate kaizen-legacy Tag component

### Patch Changes

- [#4133](https://github.com/cultureamp/kaizen-design-system/pull/4133) [`d9d060f73`](https://github.com/cultureamp/kaizen-design-system/commit/d9d060f738a5f5513b378ec349df5993f1b7c7f0) - - Add an icon for AI (Artificial Intelligence)

- [#4154](https://github.com/cultureamp/kaizen-design-system/pull/4154) [`5f2afd593`](https://github.com/cultureamp/kaizen-design-system/commit/5f2afd5933f18dfd3c99ff68adcf546d39e30ce3) - Fix support for tree shaking by:

  - Adding `babel-plugin-pure-static-props` plugin to Rollup config
  - Adding `@babel/pugin-transform-react-pure-annotations` plugin to Rollup config
  - Updating components to be tree-shakeable, more detail on [Confluence](https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3320647009/Tree+Shaking)

  Addtionally:

  - Replaced `esbuild` with `babel` to streamline tooling
  - Added a ci check for tree shaking via [Agadoo](https://github.com/Rich-Harris/agadoo)
  - Moved `react-intl` to peerDep
  - Added `tslib` to dependencies
  - Removed `ThemeManager` in favour of `theme` prop on `KaizenProvider` (simplified to remove unused code)

## 1.25.0

### Minor Changes

- [#4130](https://github.com/cultureamp/kaizen-design-system/pull/4130) [`ebc1f8d59`](https://github.com/cultureamp/kaizen-design-system/commit/ebc1f8d590ac778583b8da1825acfe3ddba7b24f) - Migrate some kaizen-legacy components to Kaizen All-in-One

  - Avatar
  - AvatarGroup
  - Badge
  - Brand
  - BrandMoment
  - Button/Button
  - Button/DirectionalLink
  - Button/IconButton
  - Button/PaginationLink
  - ButtonGroup
  - Card
  - Checkbox/Checkbox
  - Checkbox/CheckboxField
  - Checkbox/CheckboxGroup
  - Collapsible/Collapsible
  - Collapsible/CollapsibleGroup
  - Collapsible/ExpertAdviceCollapsible
  - Divider
  - EmptyState
  - FieldGroup
  - FieldMessage
  - Heading
  - Input/Input
  - Input/InputRange
  - Input/InputSearch
  - Label
  - LabelledMessage
  - Notification/GlobalNotification
  - Notification/InlineNotification
  - Radio/Radio
  - Radio/RadioField
  - Radio/RadioGroup
  - SearchField
  - Slider
  - Text

  Future components:

  - Future/Select
  - Future/Tag

- [#3851](https://github.com/cultureamp/kaizen-design-system/pull/3851) [`00f0d53f1`](https://github.com/cultureamp/kaizen-design-system/commit/00f0d53f17e99551ed285ac85d86b1e4e5cb104d) - - Added `Tag` component and stories to KAIO

### Patch Changes

- [#4068](https://github.com/cultureamp/kaizen-design-system/pull/4068) [`cfb493f7f`](https://github.com/cultureamp/kaizen-design-system/commit/cfb493f7f2a5cf5a1e0b0d444cbb170eac48f5c7) - update dependency @react-aria/button to ^3.8.2

- [#4088](https://github.com/cultureamp/kaizen-design-system/pull/4088) [`410d26fb4`](https://github.com/cultureamp/kaizen-design-system/commit/410d26fb42a88238ca8aaba8613b7c08825c3bb3) - Update docs for Tag and convert TW to SCSS

- [#4068](https://github.com/cultureamp/kaizen-design-system/pull/4068) [`cfb493f7f`](https://github.com/cultureamp/kaizen-design-system/commit/cfb493f7f2a5cf5a1e0b0d444cbb170eac48f5c7) - update dependency @react-aria/menu to ^3.10.2

- [#4068](https://github.com/cultureamp/kaizen-design-system/pull/4068) [`cfb493f7f`](https://github.com/cultureamp/kaizen-design-system/commit/cfb493f7f2a5cf5a1e0b0d444cbb170eac48f5c7) - update dependency @react-aria/select to ^3.12.1

- [#4068](https://github.com/cultureamp/kaizen-design-system/pull/4068) [`cfb493f7f`](https://github.com/cultureamp/kaizen-design-system/commit/cfb493f7f2a5cf5a1e0b0d444cbb170eac48f5c7) - update dependency @react-stately/menu to ^3.5.5

- [#4068](https://github.com/cultureamp/kaizen-design-system/pull/4068) [`cfb493f7f`](https://github.com/cultureamp/kaizen-design-system/commit/cfb493f7f2a5cf5a1e0b0d444cbb170eac48f5c7) - update dependency @react-stately/collections to ^3.10.1

- [#4068](https://github.com/cultureamp/kaizen-design-system/pull/4068) [`cfb493f7f`](https://github.com/cultureamp/kaizen-design-system/commit/cfb493f7f2a5cf5a1e0b0d444cbb170eac48f5c7) - update dependency uuid to ^9.0.1

- [#4068](https://github.com/cultureamp/kaizen-design-system/pull/4068) [`cfb493f7f`](https://github.com/cultureamp/kaizen-design-system/commit/cfb493f7f2a5cf5a1e0b0d444cbb170eac48f5c7) - Update Kaizen dependencies

- [#4068](https://github.com/cultureamp/kaizen-design-system/pull/4068) [`cfb493f7f`](https://github.com/cultureamp/kaizen-design-system/commit/cfb493f7f2a5cf5a1e0b0d444cbb170eac48f5c7) - update dependency react-intl to ^6.4.6

- [#4068](https://github.com/cultureamp/kaizen-design-system/pull/4068) [`cfb493f7f`](https://github.com/cultureamp/kaizen-design-system/commit/cfb493f7f2a5cf5a1e0b0d444cbb170eac48f5c7) - update dependency @react-stately/select to ^3.5.4

- [#4068](https://github.com/cultureamp/kaizen-design-system/pull/4068) [`cfb493f7f`](https://github.com/cultureamp/kaizen-design-system/commit/cfb493f7f2a5cf5a1e0b0d444cbb170eac48f5c7) - update dependency @react-stately/list to ^3.9.2

## 1.24.2

### Patch Changes

- [#4063](https://github.com/cultureamp/kaizen-design-system/pull/4063) [`53ea8bc6c`](https://github.com/cultureamp/kaizen-design-system/commit/53ea8bc6c25ba22013855a98695510878a8da889) - Use @cultureamp/i18n-react-intl as a peer dependency

## 1.24.1

### Patch Changes

- [#4050](https://github.com/cultureamp/kaizen-design-system/pull/4050) [`848670ba0`](https://github.com/cultureamp/kaizen-design-system/commit/848670ba0364384fe940f965ffd97acd3c4b23da) - update dependency @react-aria/focus to ^3.14.1

- [#4050](https://github.com/cultureamp/kaizen-design-system/pull/4050) [`848670ba0`](https://github.com/cultureamp/kaizen-design-system/commit/848670ba0364384fe940f965ffd97acd3c4b23da) - update dependency @react-aria/button to ^3.8.2

- [#4050](https://github.com/cultureamp/kaizen-design-system/pull/4050) [`848670ba0`](https://github.com/cultureamp/kaizen-design-system/commit/848670ba0364384fe940f965ffd97acd3c4b23da) - update dependency @react-aria/listbox to ^3.10.2

## 1.24.0

### Minor Changes

- [#4013](https://github.com/cultureamp/kaizen-design-system/pull/4013) [`d0569ec98`](https://github.com/cultureamp/kaizen-design-system/commit/d0569ec98db237087c41a14115bd937ae55f37d1) - Export Icon components.

  Exports the react-icon-component version of each of our svg files.
  For each of our existing raw svg files, users can now import them as a React component from "@kaizen/components".

- [#4036](https://github.com/cultureamp/kaizen-design-system/pull/4036) [`fe4e366b3`](https://github.com/cultureamp/kaizen-design-system/commit/fe4e366b3fbcc53b84e993664bd4077b0f907d52) - Add classNameOverride to MultiSelectOption

### Patch Changes

- [#4022](https://github.com/cultureamp/kaizen-design-system/pull/4022) [`7eb6aac22`](https://github.com/cultureamp/kaizen-design-system/commit/7eb6aac22cc271193b44756a14d738d17efb616a) - Dependency updates:
  @cultureamp/i18n-react-intl to 1.7.0
  @kaizen/date-picker to 6.3.1
  @kaizen/draft-form to 10.5.0
  @rollup/plugin-commonjs to 25.0.4
  autoprefixer to 10.4.15
  rollup to 3.28.1
  rollup-plugin-dts to 5.3.1

- [#4018](https://github.com/cultureamp/kaizen-design-system/pull/4018) [`42cb73a86`](https://github.com/cultureamp/kaizen-design-system/commit/42cb73a86ccaa762771ab0e64e129024df0d9749) - Dependency updates:

  - @cultureamp/i18n-react-intl to 1.6.2
  - @rollup/plugin-node-resolve to 15.2.1
  - @rollup/plugin-typescript 11.1.3
  - sass to 1.66.1

- [#4039](https://github.com/cultureamp/kaizen-design-system/pull/4039) [`225249a91`](https://github.com/cultureamp/kaizen-design-system/commit/225249a91e478be0fc4a125553290730aec154ad) - Bump dev dep rollup-plugin-dts to 6.0.1

## 1.23.0

### Minor Changes

- [#3959](https://github.com/cultureamp/kaizen-design-system/pull/3959) [`38a16d00a`](https://github.com/cultureamp/kaizen-design-system/commit/38a16d00ac383b9a4bc8748a20f347171c77aecd) - TS guarding on icon components to better ensure accessibility. `role` is a required prop, prompting engineers to consciously choose between meaningful (`role="img"`) or decorative (`role="presentation"`) on each usage. The `aria-label` prop is required when the icon is meaningful.

## 1.22.3

### Patch Changes

- [#3993](https://github.com/cultureamp/kaizen-design-system/pull/3993) [`5c9e52325`](https://github.com/cultureamp/kaizen-design-system/commit/5c9e52325f96548589eb33541c22c04fb1e6400c) - Added role=presentation to SVG icon usages where it was missing

## 1.22.2

### Patch Changes

- [#4005](https://github.com/cultureamp/kaizen-design-system/pull/4005) [`d975804a8`](https://github.com/cultureamp/kaizen-design-system/commit/d975804a86dc85998799e1c1c03d10a57c37a053) - Tester publish

## 1.22.1

### Patch Changes

- [#3999](https://github.com/cultureamp/kaizen-design-system/pull/3999) [`d73fedec3`](https://github.com/cultureamp/kaizen-design-system/commit/d73fedec30828f9251a5771b146b73a149509e8f) - test release

## 1.22.0

### Minor Changes

- [#3996](https://github.com/cultureamp/kaizen-design-system/pull/3996) [`d91bfe0e8`](https://github.com/cultureamp/kaizen-design-system/commit/d91bfe0e86708ccf2d6cb9997260905eef147e42) - Update FilterMultiSelect ListBoxSection to avoid duplicate reading of sectionName as the accessible title.

  - Update sectionName to be optional if sectionHeader is provided
    - This will solve the issue of sectionName and sectionHeader being read twice when they are the same
  - Minor style change to ensure hide bullet lists as filtering
  - Minor style changes to allow for default text styles for section headings with just text
  - Add conditional check to render the sectionName only if provided
  - Add tests to validate type accessible names are constructed as expected

## 1.21.0

### Minor Changes

- [#3884](https://github.com/cultureamp/kaizen-design-system/pull/3884) [`039a457b8`](https://github.com/cultureamp/kaizen-design-system/commit/039a457b894666e4d05690eca35473275f9ca61a) - #### FilterBar

  - Prevent infinite loop when calling `toggleOpenFilter` from selecting a value.
  - Deprecate `toggleOpenFilter`, and replace with `setFilterOpenState` for clearer function intent.
  - Add context util `openFilter` for consumers to be able to open a filter through an event from another filter.

### Patch Changes

- [#3955](https://github.com/cultureamp/kaizen-design-system/pull/3955) [`327fbe92e`](https://github.com/cultureamp/kaizen-design-system/commit/327fbe92e1caa1ba714cc831e85e2d12543d43e0) - Fix circular dependencies

- [#3831](https://github.com/cultureamp/kaizen-design-system/pull/3831) [`5ad6c577c`](https://github.com/cultureamp/kaizen-design-system/commit/5ad6c577c7f2826ea7e285b0b8d1629643ce7b16) - Update `react-aria` dependencies.

- Updated dependencies [[`f924fdeed`](https://github.com/cultureamp/kaizen-design-system/commit/f924fdeed3a83c46cb64ac880cbcc72b5bc6b5e8), [`5ad6c577c`](https://github.com/cultureamp/kaizen-design-system/commit/5ad6c577c7f2826ea7e285b0b8d1629643ce7b16)]:
  - @kaizen/date-picker@6.2.5

## 1.20.5

### Patch Changes

- [#3945](https://github.com/cultureamp/kaizen-design-system/pull/3945) [`60c405966`](https://github.com/cultureamp/kaizen-design-system/commit/60c405966d5e3fc8c8b57d51bf038490fd8594db) - Make id props optional, using uuid to generate one if not supplied

- [#3896](https://github.com/cultureamp/kaizen-design-system/pull/3896) [`f3bd6b202`](https://github.com/cultureamp/kaizen-design-system/commit/f3bd6b202e94b29fe8760995ca4b2f4954b4eafd) - Update dependency @cultureamp/i18n-react-intl to ^1.4.5

- [#3897](https://github.com/cultureamp/kaizen-design-system/pull/3897) [`8af39c1e1`](https://github.com/cultureamp/kaizen-design-system/commit/8af39c1e19916c9618d5b3bfa56c777f7300dffb) - Update dependency sass to ^1.64.2

- Updated dependencies [[`60c405966`](https://github.com/cultureamp/kaizen-design-system/commit/60c405966d5e3fc8c8b57d51bf038490fd8594db)]:
  - @kaizen/date-picker@6.2.4
  - @kaizen/draft-form@10.4.9

## 1.20.4

### Patch Changes

- [#3925](https://github.com/cultureamp/kaizen-design-system/pull/3925) [`21b0276c7`](https://github.com/cultureamp/kaizen-design-system/commit/21b0276c7472e188ef9f4fc01027c1de95479c06) - Update dependencies

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

## Features

- css processing ([#3362](https://github.com/cultureamp/kaizen-design-system/issues/3362)) ([38c0fa3](https://github.com/cultureamp/kaizen-design-system/commit/38c0fa3475a5f78cd4f2c9836815b53d65f2d039))

## [1.5.1](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.5.0...@kaizen/components@1.5.1) (2023-03-21)

**Note:** Version bump only for package @kaizen/components

# [1.5.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.4.26...@kaizen/components@1.5.0) (2023-03-16)

## Features

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

## Features

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

## Features

- 44-processing-tailwind-css ([#3273](https://github.com/cultureamp/kaizen-design-system/issues/3273)) ([4f2ace5](https://github.com/cultureamp/kaizen-design-system/commit/4f2ace55edb1d3b5fc0005b65165fd584357a0d2))

# [1.2.0](https://github.com/cultureamp/kaizen-design-system/compare/@kaizen/components@1.1.0...@kaizen/components@1.2.0) (2023-02-13)

## Features

- **KaizenProvider:** add KaizenProvider to @kaizen/components ([#3239](https://github.com/cultureamp/kaizen-design-system/issues/3239)) ([16819f0](https://github.com/cultureamp/kaizen-design-system/commit/16819f0717dfebd6a938b2784dc84751650f8be4))

# 1.1.0 (2023-01-24)

## Features

- add components AIO ([#3229](https://github.com/cultureamp/kaizen-design-system/issues/3229)) ([2b63a37](https://github.com/cultureamp/kaizen-design-system/commit/2b63a3726fafa02c977ba84eedaab4119e40cf51))
