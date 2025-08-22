import { runV1Codemods } from './runV1Codemods'

const run = async (): Promise<void> => {
  console.log('🚀 Running all V1 codemods in sequence')
  console.log('')
  console.log('This will run the following codemods in order:')
  console.log('1. upgradeIconV1')
  console.log('2. upgradeV1Buttons')
  console.log('3. migrateGuidanceBlockActionsToActionsSlot')
  console.log('4. migrateBrandMomentMoodToVariant')
  console.log('5. migrateCardVariantToColor')
  console.log('6. migrateConfirmationModalMoodsToVariant')
  console.log('7. migrateEmptyStateIllustrationTypeToVariant')
  console.log('8. migrateGlobalNotificationTypeToVariant')
  console.log('9. migrateInformationTileMoodToVariant')
  console.log('10. migrateInlineNotificationTypeToVariant')
  console.log('11. migrateMultiActionTileMoodToVariant')
  console.log('12. migrateNotificationTypeToVariant')
  console.log('13. migrateProgressBarMoodToColor')
  console.log('14. migrateToastNotificationTypeToVariant')
  console.log('15. migrateWellVariantToColor')
  console.log('16. removeInputEditModalMood')
  console.log('17. removePopoverVariant')
  console.log('')

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
