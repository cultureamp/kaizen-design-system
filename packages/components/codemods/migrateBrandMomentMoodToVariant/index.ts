import { transformComponentsAndImportsInDir } from '../utils'
import { transformBrandMomentMoodToVariant } from './transformBrandMomentMoodToVariant'

const run = (): void => {
  console.log('~(-_- ~) Running BrandMoment mood to variant transformer (~ -_-)~')
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsAndImportsInDir(targetDir, ['BrandMoment'], (tagNames) => [
    transformBrandMomentMoodToVariant(tagNames),
  ])
}

run()
