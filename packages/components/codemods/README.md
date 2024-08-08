
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
- `migrateWellVariantToColor`: Migrates `Well` component prop from `variant` to `color`.
