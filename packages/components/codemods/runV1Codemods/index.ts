import { runV1Codemods } from './runV1Codemods'

const run = async (): Promise<void> => {
  console.log(`🚀 Running all V1 codemods in sequence:
  1. upgradeIconV1
  2. upgradeV1Buttons
  3. migrateGuidanceBlockActionsToActionsSlot
  4. migrateBrandMomentMoodToVariant
  5. migrateCardVariantToColor
  6. migrateConfirmationModalMoodsToVariant
  7. migrateEmptyStateIllustrationTypeToVariant
  8. migrateGlobalNotificationTypeToVariant
  9. migrateInformationTileMoodToVariant
  10. migrateInlineNotificationTypeToVariant
  11. migrateMultiActionTileMoodToVariant
  12. migrateNotificationTypeToVariant
  13. migrateProgressBarMoodToColor
  14. migrateToastNotificationTypeToVariant
  15. migrateWellVariantToColor
  16. removeInputEditModalMood
  17. removePopoverVariant
  `)

  const targetDir = process.argv[2]

  if (!targetDir) {
    console.error('Error: Target directory is required')
    process.exit(1)
  }

  await runV1Codemods(targetDir)
}

run().catch((error) => {
  console.error('Fatal error running codemods:', error)
  process.exit(1)
})
