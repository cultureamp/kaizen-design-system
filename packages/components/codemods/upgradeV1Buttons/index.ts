import { transformComponentsAndImportsInDir } from '../utils'
import { upgradeV1Buttons } from './upgradeV1Buttons'

const run = (): void => {
  console.log('~(-_- ~) Running IconButton to Button upgrade (~ -_-)~')

  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsAndImportsInDir(targetDir, ['IconButton', 'Button'], (tagNames) => [
    upgradeV1Buttons(tagNames),
  ])
}

run()
