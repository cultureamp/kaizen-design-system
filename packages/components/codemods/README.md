
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
- `migrateBrandMomentMoodToVariant`: Migrates `BrandMoment` component prop from `mood` to `variant`
- `migrateCardVariantToColor`: Migrates `Card` component prop from `variant` to `color`
- `migrateConfirmationModalMoodsToVariant`: Migrates `ConfirmationModal` component prop from `mood` to `variant`
- `migrateEmptyStateIllustrationTypeToVariant`: Migrates `EmptyState` component prop from `illustrationType` to `variant`
- `migrateGlobalNotificationTypeToVariant`: Transforms `GlobalNotification`'s `type` prop to the new `variant` prop
- `migrateInformationTileMoodToVariant`: Migrates `InformationTile` component prop from `mood` to `variant`
- `migrateInlineNotificationTypeToVariant`: Transforms `InlineNotification`'s `type` prop to the new `variant` prop
- `migrateMultiActionTileMoodToVariant`: Migrates `MultiActionTile` component prop from `mood` to `variant`
- `migrateProgressBarMoodToColor`: Migrates `ProgressBar` component prop from `mood` to `color`
- `migrateToastNotificationTypeToVariant`: Transforms `ToastNotification`'s `type` prop to the new `variant` prop
- `migrateWellVariantToColor`: Migrates `Well` component prop from `variant` to `color`
- `removeInputEditModalMood`: Removes `InputEditModal` component prop `mood`
- `removePopoverVariant`: Removes `Popover` component props `variant` and `customIcon`
- `upgradeIconV1`: Migrates `*Icon` components to a new equivalent
  - `CaMonogramIcon` becomes `Brand` variant `enso`
    - `inheritSize` will be removed if set, if not set then `style` will be added to make it 20px (manually adjust to a `className` if you can)
  - `SpinnerIcon` becomes `LoadingSpinner`
    - `aria-label` will be replaced with `accessibilityLabel` (with a fallback value of `"Loading"`)
    - `role` will be removed
    - `viewBox` will be removed
  - All other Icons become future `Icon`
    - **Note:** See [Icon API Specification (Future)](https://cultureamp.design/?path=/docs/illustrations-icon-icon-future-api-specification--docs) for setup instructions
    - Icons previously filled may become unfilled. This is intentional as filled icons should only be for active states or selection (see [Icon Usage Guidelines (Future)](https://cultureamp.design/?path=/docs/illustrations-icon-icon-future-usage-guidelines--docs#do-use-the-appropriate-fill-for-the-icon-context-and-state))
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
