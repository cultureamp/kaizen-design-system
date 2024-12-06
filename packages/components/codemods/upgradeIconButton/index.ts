import { transformComponentsAndImportsInDir } from '../utils'
import { upgradeIconButton } from './upgradeIconButton'

const run = (): void => {
  console.log('~(-_- ~) Running IconButton to Button upgrade (~ -_-)~')

  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsAndImportsInDir(targetDir, 'IconButton', (tagNames) => [
    upgradeIconButton(tagNames),
  ])
}

run()
