import { transformComponentsInDir } from '../utils'
import { migrateGuidanceBlockActionsToActionsSlot } from './migrateGuidanceBlockActionsToActionsSlot'

const run = (): void => {
  console.log('~(-_- ~) Running migrateGuidanceBlockActionsToActionsSlot upgrade (~ -_-)~')

  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsInDir(targetDir, ['GuidanceBlock'], (tagNames) => [
    migrateGuidanceBlockActionsToActionsSlot(tagNames),
  ])

  console.log(
    '---\nIt is recommended that the `upgradeIconV1` codemod if any v1 icons have been migrated',
  )
}

run()
