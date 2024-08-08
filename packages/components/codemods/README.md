
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
- `migrateWellVariantToColor`: Migrates `Well` component prop from `variant` to `color`.
- `migrateNotificationTypeToVariant`: A utility transformer that updates any given Notification's `Type` prop to the correct `Variant` prop
  - `migrateGlobalNotificationTypeToVariant`: uses the utility to transform `GlobalNotification`
  - `migrateInlineNotificationTypeToVariant`: uses the utility to transform `InlineNotification`
  - `migrateToastNotificationTypeToVariant`: uses the utility to transform `ToastNotification`
