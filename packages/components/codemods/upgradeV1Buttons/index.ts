import { transformComponentsInDir } from '../utils'
import { upgradeV1Buttons } from './upgradeV1Buttons'

const run = (): void => {
  console.log('It is recommended that the `upgradeIconV1` codemod be run prior to this')
  console.log('---')
  console.log('~(-_- ~) Running V1 Buttons upgrade (~ -_-)~')

  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsInDir(targetDir, ['IconButton', 'Button'], (tagNames) => [
    upgradeV1Buttons(tagNames),
  ])
}

run()
