import { transformComponentsInDir } from '../utils'
import { migrateGuidanceBlockActionsToActionsSlot } from './migrateGuidanceBlockActionsToActionsSlot'

const run = (): void => {
  console.log('It is recommended that the `upgradeIconV1` codemod be run prior to this')
  console.log('---')
  console.log('~(-_- ~) Running migrateGuidanceBlockActionsToActionsSlot upgrade (~ -_-)~')

  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsInDir(targetDir, ['GuidanceBlock'], (tagNames) => [
    migrateGuidanceBlockActionsToActionsSlot(tagNames),
  ])
}

run()
