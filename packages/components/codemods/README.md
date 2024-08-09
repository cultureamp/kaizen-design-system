
# Kaizen codemods
This directory is a collection of codemods that can be executed via CLI with the `kaizen-codemod` command.

## Prerequisite
Install `@kaizen/components`.

## CLI pattern

```
  kaizen-codemod {DIR} {CODEMOD_NAME}
```

DIR - the directory to run the codemod for. Note that node_modules are excluded.
CODEMOD_NAME - the name of the codemod (refer to list below).

Example:
```
  kaizen-codemod src migrateWellVariantToColor
```

## Available codemods
- `migrateBrandMomentMoodToVariant`: Migrates `BrandMoment` component prop from `mood` to `variant`.
- `migrateEmptyStateIllustrationTypeToVariant`: Migrates `EmptyState` component prop from `illustrationType` to `variant`.
- `migrateGlobalNotificationTypeToVariant`: Transforms `GlobalNotification`'s `type` prop to the new `variant` prop.
- `migrateInlineNotificationTypeToVariant`: Transforms `InlineNotification`'s `type` prop to the new `variant` prop.
- `migrateInformationTileMoodToVariant`: Migrates `InformationTile` component prop from `mood` to `variant`.
- `migrateMultiActionTileMoodToVariant`: Migrates `MultiActionTile` component prop from `mood` to `variant`.
- `migrateToastNotificationTypeToVariant`: Transforms `ToastNotification`'s `type` prop to the new `variant` prop.
- `migrateWellVariantToColor`: Migrates `Well` component prop from `variant` to `color`.
