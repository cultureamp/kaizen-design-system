import { transformComponentsAndImportsInDir } from '../utils'
import { transformCardVariantToColor } from './transformCardVariantToColor'

const run = (): void => {
  console.log('~(-_- ~) Running Card variant to color transformer (~ -_-)~')
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsAndImportsInDir(targetDir, ['Card'], (tagNames) => [
    transformCardVariantToColor(tagNames),
  ])
}

run()
