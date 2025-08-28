# runV1Codemods

A comprehensive codemod that runs all V1 migration codemods in the ideal sequence.

## Overview

This codemod executes all 17 V1 migration codemods in the order as pre-work to migrate to `kaizen/component@2.0.0` Kaizen components. After this you will still need to run the `migrateV2NextToCurrent` and `renameV2ComponentImportsAndUsages` after upgrading to `kaizen/component@2.0.0`

This codemod runner handles the following:

- Icon upgrades (`upgradeIconV1`)
- Button migrations (`upgradeV1Buttons`)
- GuidanceBlock actions migration (`migrateGuidanceBlockActionsToActionsSlot`)
- Mood to variant migrations for multiple components
- Variant to color migrations
- Type to variant migrations for notifications
- Removal of deprecated props

## Usage

```bash
pnpm kaizen-codemod {target-directory} runV1Codemods
```

## Example

```bash
pnpm kaizen-codemod src/components/MockComponent runV1Codemods
```

## What it does

The codemod runs the following transformations in sequence:

1. **upgradeIconV1** - Migrates V1 Icon components to next Icon
2. **upgradeV1Buttons** - Migrates V1 Button and IconButton to next Button/LinkButton
3. **migrateGuidanceBlockActionsToActionsSlot** - Migrates GuidanceBlock actions prop to actionsSlot
4. **migrateBrandMomentMoodToVariant** - Changes `mood` prop to `variant` on BrandMoment
5. **migrateCardVariantToColor** - Changes `variant` prop to `color` on Card
6. **migrateConfirmationModalMoodsToVariant** - Changes `mood` prop to `variant` on ConfirmationModal
7. **migrateEmptyStateIllustrationTypeToVariant** - Changes `illustrationType` prop to `variant` on EmptyState
8. **migrateGlobalNotificationTypeToVariant** - Changes `type` prop to `variant` on GlobalNotification
9. **migrateInformationTileMoodToVariant** - Changes `mood` prop to `variant` on InformationTile
10. **migrateInlineNotificationTypeToVariant** - Changes `type` prop to `variant` on InlineNotification
11. **migrateMultiActionTileMoodToVariant** - Changes `mood` prop to `variant` on MultiActionTile
12. **migrateNotificationTypeToVariant** - Changes `type` prop to `variant` on Notification
13. **migrateProgressBarMoodToColor** - Changes `mood` prop to `color` on ProgressBar
14. **migrateToastNotificationTypeToVariant** - Changes `type` prop to `variant` on ToastNotification
15. **migrateWellVariantToColor** - Changes `variant` prop to `color` on Well
16. **removeInputEditModalMood** - Removes deprecated `mood` prop from InputEditModal
17. **removePopoverVariant** - Removes deprecated `variant` and `customIcon` props from Popover

## Error Handling

- If any individual codemod fails, the process continues with the remaining codemods
- Detailed logging shows the start and completion status of each codemod
- A summary is provided at the end showing successful vs failed codemods

## Cautions and caveats

### Reducing the blast radius of the codemods

This running will create a lot of diffs and changes to your components as the traverses the entire directory given.

To reduce the scope, consider either running this on component or page directories or running the mode incrementally, ie:

`pnpm kaizen-codemod src/pages/MockPage runV1Codemods`

This can make it easier to review and merge in changes with confidence.

### Prettier diffs

As the codemod will rewrites files, this can cause arbitrary changes that will be resolved by `prettier` formatting. We recommend running the following to reduce the noise in your diffs:

`pnpm prettier --write "**/*.tsx"`
