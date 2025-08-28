import fs from 'fs'
import { transformBrandMomentMoodToVariant } from '../migrateBrandMomentMoodToVariant/transformBrandMomentMoodToVariant'
import { transformCardVariantToColor } from '../migrateCardVariantToColor/transformCardVariantToColor'
import { transformConfirmationModalMoodsToVariant } from '../migrateConfirmationModalMoodsToVariant/transformConfirmationModalMoodsToVariant'
import { transformEmptyStateIllustrationTypeToVariant } from '../migrateEmptyStateIllustrationTypeToVariant/transformEmptyStateIllustrationTypeToVariant'
import { migrateGuidanceBlockActionsToActionsSlot } from '../migrateGuidanceBlockActionsToActionsSlot/migrateGuidanceBlockActionsToActionsSlot'
import { transformInformationTileMoodToVariant } from '../migrateInformationTileMoodToVariant/transformInformationTileMoodToVariant'
import { transformMultiActionTileMoodToVariant } from '../migrateMultiActionTileMoodToVariant/transformMultiActionTileMoodToVariant'
import { transformNotificationTypeToVariant } from '../migrateNotificationTypeToVariant/migrateNotificationTypeToVariant'
import { transformProgressBarMoodToColor } from '../migrateProgressBarMoodToColor/transformProgressBarMoodToColor'
import { transformWellVariantToColor } from '../migrateWellVariantToColor/transformWellVariantToColor'
import { removeInputEditModalMood } from '../removeInputEditModalMood/removeInputEditModalMood'
import { removePopoverVariant } from '../removePopoverVariant/removePopoverVariant'
import { upgradeIconV1 } from '../upgradeIconV1/upgradeIconV1'
import { upgradeV1Buttons } from '../upgradeV1Buttons/upgradeV1Buttons'
import { transformComponentsInDir, transformComponentsInDirByPattern } from '../utils'

interface CodemodConfig {
  name: string
  runner: (targetDir: string) => void
}

const codemods: CodemodConfig[] = [
  {
    name: 'upgradeIconV1',
    runner: (dir) => {
      transformComponentsInDirByPattern(dir, 'Icon$', (tagNames) => [upgradeIconV1(tagNames)])
    },
  },
  {
    name: 'upgradeV1Buttons',
    runner: (dir) => {
      transformComponentsInDir(dir, ['IconButton', 'Button'], (tagNames) => [
        upgradeV1Buttons(tagNames),
      ])
    },
  },
  {
    name: 'migrateGuidanceBlockActionsToActionsSlot',
    runner: (dir) => {
      transformComponentsInDir(dir, ['GuidanceBlock'], (tagNames) => [
        migrateGuidanceBlockActionsToActionsSlot(tagNames),
      ])
    },
  },
  {
    name: 'migrateBrandMomentMoodToVariant',
    runner: (dir) => {
      transformComponentsInDir(dir, ['BrandMoment'], (tagNames) => [
        transformBrandMomentMoodToVariant(tagNames),
      ])
    },
  },
  {
    name: 'migrateCardVariantToColor',
    runner: (dir) => {
      transformComponentsInDir(dir, ['Card'], (tagNames) => [transformCardVariantToColor(tagNames)])
    },
  },
  {
    name: 'migrateConfirmationModalMoodsToVariant',
    runner: (dir) => {
      transformComponentsInDir(dir, ['ConfirmationModal'], (tagNames) => [
        transformConfirmationModalMoodsToVariant(tagNames),
      ])
    },
  },
  {
    name: 'migrateEmptyStateIllustrationTypeToVariant',
    runner: (dir) => {
      transformComponentsInDir(dir, ['EmptyState'], (tagNames) => [
        transformEmptyStateIllustrationTypeToVariant(tagNames),
      ])
    },
  },
  {
    name: 'migrateGlobalNotificationTypeToVariant',
    runner: (dir) => {
      transformComponentsInDir(dir, ['GlobalNotification'], (tagNames) => [
        transformNotificationTypeToVariant(tagNames),
      ])
    },
  },
  {
    name: 'migrateInformationTileMoodToVariant',
    runner: (dir) => {
      transformComponentsInDir(dir, ['InformationTile'], (tagNames) => [
        transformInformationTileMoodToVariant(tagNames),
      ])
    },
  },
  {
    name: 'migrateInlineNotificationTypeToVariant',
    runner: (dir) => {
      transformComponentsInDir(dir, ['InlineNotification'], (tagNames) => [
        transformNotificationTypeToVariant(tagNames),
      ])
    },
  },
  {
    name: 'migrateMultiActionTileMoodToVariant',
    runner: (dir) => {
      transformComponentsInDir(dir, ['MultiActionTile'], (tagNames) => [
        transformMultiActionTileMoodToVariant(tagNames),
      ])
    },
  },
  {
    name: 'migrateNotificationTypeToVariant',
    runner: (dir) => {
      transformComponentsInDir(dir, ['Notification'], (tagNames) => [
        transformNotificationTypeToVariant(tagNames),
      ])
    },
  },
  {
    name: 'migrateProgressBarMoodToColor',
    runner: (dir) => {
      transformComponentsInDir(dir, ['ProgressBar'], (tagNames) => [
        transformProgressBarMoodToColor(tagNames),
      ])
    },
  },
  {
    name: 'migrateToastNotificationTypeToVariant',
    runner: (dir) => {
      transformComponentsInDir(dir, ['ToastNotification'], (tagNames) => [
        transformNotificationTypeToVariant(tagNames),
      ])
    },
  },
  {
    name: 'migrateWellVariantToColor',
    runner: (dir) => {
      transformComponentsInDir(dir, ['Well'], (tagNames) => [transformWellVariantToColor(tagNames)])
    },
  },
  {
    name: 'removeInputEditModalMood',
    runner: (dir) => {
      transformComponentsInDir(dir, ['InputEditModal'], (tagNames) => [
        removeInputEditModalMood(tagNames),
      ])
    },
  },
  {
    name: 'removePopoverVariant',
    runner: (dir) => {
      transformComponentsInDir(dir, ['Popover'], (tagNames) => [removePopoverVariant(tagNames)])
    },
  },
]

export const runV1Codemods = (targetDir: string): void => {
  console.log(`📝 Running ${codemods.length} codemods on directory: ${targetDir}`)
  console.log('')

  if (fs.existsSync(targetDir) === false) {
    console.error(`Error: Target directory "${targetDir}" does not exist`)
    process.exit(1)
  }

  let successCount = 0

  for (const codemod of codemods) {
    try {
      console.log(`🔄 Starting codemod: ${codemod.name}`)
      codemod.runner(targetDir)
      console.log(`✅ Completed codemod: ${codemod.name}`)
      successCount++
    } catch (error) {
      console.log(`💥 Error in codemod: ${codemod.name} - exiting early

✅ ${successCount} codemods completed successfully
😢 ${codemods.length - successCount} codemods did not run
Address the issues in the following codemod before proceeding:
        `)

      console.error(`${codemod.name}\n`)
      console.error(error)
      process.exit(1)
    }
    console.log('')
  }

  console.log('\n🎉 All codemods completed successfully!')
}
