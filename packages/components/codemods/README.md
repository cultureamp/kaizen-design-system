# Kaizen codemods

This directory is a collection of codemods that can be executed via CLI with the `kaizen-codemod` command.

## Prerequisites

Install `@kaizen/components`

## CLI pattern

_Note: Navigate into the directory which has installed `@kaizen/components` then run the codemod script._

```
pnpm kaizen-codemod {DIR} {CODEMOD_NAME}
```

DIR - the directory to run the codemod for. Note that node_modules are excluded.
CODEMOD_NAME - the name of the codemod (refer to list below).

Example:

```
pnpm kaizen-codemod src migrateWellVariantToColor
```

## Available codemods

### `migrateBrandMomentMoodToVariant`

Released in `1.58.0`

Migrates `BrandMoment` component prop from `mood` to `variant`.

### `migrateCardVariantToColor`

Released in `1.58.0`

Migrates `Card` component prop from `variant` to `color`.

### `migrateConfirmationModalMoodsToVariant`

Released in `1.58.0`

Migrates `ConfirmationModal` component prop from `mood` to `variant`.

### `migrateEmptyStateIllustrationTypeToVariant`

Released in `1.58.0`

Migrates `EmptyState` component prop from `illustrationType` to `variant`.

### `migrateGlobalNotificationTypeToVariant`

Released in `1.58.0`

Transforms `GlobalNotification`'s `type` prop to the new `variant` prop.

### `migrateInformationTileMoodToVariant`

Released in `1.58.0`

Migrates `InformationTile` component prop from `mood` to `variant`.

### `migrateInlineNotificationTypeToVariant`

Released in `1.58.0`

Transforms `InlineNotification`'s `type` prop to the new `variant` prop.

### `migrateMultiActionTileMoodToVariant`

Released in `1.58.0`

Migrates `MultiActionTile` component prop from `mood` to `variant`.

### `migrateProgressBarMoodToColor`

Released in `1.58.0`

Migrates `ProgressBar` component prop from `mood` to `color`.

### `migrateToastNotificationTypeToVariant`

Released in `1.58.0`

Transforms `ToastNotification`'s `type` prop to the new `variant` prop.

### `migrateWellVariantToColor`

Released in `1.58.0`

Migrates `Well` component prop from `variant` to `color`.

### `removeInputEditModalMood`

Released in `1.58.0`

Removes `InputEditModal` component prop `mood`.

### `removePopoverVariant`

Released in `1.60.0`

Removes `Popover` component props `variant` and `customIcon`.

### `upgradeV1Buttons`

Released in `TBC`

Migrates `Button` and `IconButton` component to `Button` V3 or `LinkButton`.

#### Props

- `label` becomes `children`
  - eg. `<IconButton label="Hello" />` becomes `<Button>Hello</Button>`
- `onClick` becomes `onPress`
- (TO DO) Variants
- Sizes:
  - Default (undefined) becomes `large`
  - `small` becomes `medium`
  - `regular` becomes `large`
- `reversed` becomes `isReversed`
- `classNameOverride` becomes `className`
- `data-automation-id` becomes `data-testid`
- `disabled` becomes `isDisabled`
- `newTabAndIUnderstandTheAccessibilityImplications` becomes `target="_blank"`
  - `rel="noopener noreferrer"` is also added
- `component` will not be removed by the codemod, but will throw a TypeScript error as the prop itself no longer exists
  - (TO DO) A `@todo` comment will be prepended to the prop
- For `IconButton` only:
  - `hasHiddenLabel` will be added

#### Component transformation

- `Button`/`IconButton` without the `href` or `component` prop will become `Button` V3
- `Button`/`IconButton` with the `href` prop will become `LinkButton`
- `Button`/`IconButton` with the `component` prop will become `LinkButton`

#### Imports

All imports of V1 Buttons will now point to `@kaizen/components/v3/actions`.

### `upgradeIconV1`

Released in `1.67.0`; last updated in `1.68.1`

Migrates `*Icon` components to a new equivalent.

- `CaMonogramIcon` becomes `Brand` variant `enso`
  - `inheritSize` will be removed if set, if not set then `style` will be added to make it 20px (manually adjust to a `className` if you can)
- `SpinnerIcon` becomes `LoadingSpinner`
  - `aria-label` will be replaced with `accessibilityLabel` (with a fallback value of `"Loading"`)
  - `role` will be removed
  - `viewBox` will be removed
- All other Icons become next `Icon`
  - **Note:** See [Icon API Specification (next)](https://cultureamp.design/?path=/docs/illustrations-icon-icon-next-api-specification--docs) for setup instructions
  - Icons previously filled may become unfilled. This is intentional as filled icons should only be for active states or selection (see [Icon Usage Guidelines (next)](https://cultureamp.design/?path=/docs/illustrations-icon-icon-next-usage-guidelines--docs#do-use-the-appropriate-fill-for-the-icon-context-and-state))
  - `role="presentational"` becomes `isPresentational`
  - `role="img"` will be removed (as `aria-label` should exist)
  - `aria-label` becomes `alt`
  - `classNameOverride` becomes `className`
  - `inheritSize` will remain - however is no longer a valid prop, therefore will have a TypeScript error and will be prefixed with a comment to manually fix the usage
  - `aria-hidden` becomes `isPresentational`
  - `color` becomes an inline `style` (manually adjust to a `className` if you can)
  - `fontSize` will be removed
  - `height` and `width` become an inline `style` (manually adjust to a `className` if you can, ideally setting `--icon-size`)
  - `viewBox` will be removed
