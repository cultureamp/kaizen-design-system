import { transformComponentsAndImportsInDir } from '../utils'
import { removePopoverVariant } from './removePopoverVariant'

const run = (): void => {
  console.log('~(-_- ~) Running Popover transformer (~ -_-)~')
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsAndImportsInDir(targetDir, ['Popover'], (tagNames) => [
    removePopoverVariant(tagNames),
  ])
}

run()
