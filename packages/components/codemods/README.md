
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
  - `CaMonogramIcon` becomes `Brand`
  - `SpinnerIcon` becomes `LoadingSpinner`
  - All other Icons become future `Icon`
    - **Note:** See [Icon API Specification (Future)](https://cultureamp.design/?path=/docs/illustrations-icon-icon-future-api-specification--docs) for setup instructions
