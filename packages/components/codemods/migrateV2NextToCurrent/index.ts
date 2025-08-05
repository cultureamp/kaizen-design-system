import { transformComponentsInDir } from '../utils'
import { migrateV2NextToCurrent } from './migrateV2NextToCurrent'

const run = (): void => {
  console.log('~(-_- ~) Running V2 component renaming (~ -_-)~')

  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsInDir(targetDir, ['Menu', 'Tooltip', 'Tabs'], (tagNames) => [
    migrateV2NextToCurrent(tagNames),
  ])
}

run()
