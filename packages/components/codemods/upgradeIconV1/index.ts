import { transformComponentsInDirByPattern } from '../utils'
import { upgradeIconV1 } from './upgradeIconV1'

const run = (): void => {
  console.log('~(-_- ~) Running Icon v1 to Future upgrade (~ -_-)~')

  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsInDirByPattern(targetDir, 'Icon$', (tagNames) => [upgradeIconV1(tagNames)])
}

run()
