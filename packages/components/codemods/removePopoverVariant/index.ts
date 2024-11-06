import { transformComponentsInDir } from '../utils'
import { removePopoverVariant } from './removePopoverVariant'

const run = (): void => {
  // eslint-disable-next-line no-console
  console.log(' ~(-_- ~) Running Popover transformer (~ -_-)~')
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsInDir(targetDir, removePopoverVariant, 'Popover')
}

run()
