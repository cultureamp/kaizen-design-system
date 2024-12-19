import { transformComponentsAndImportsInDir } from '../utils'
import { transformWellVariantToColor } from './transformWellVariantToColor'

const run = (): void => {
  console.log(' ~(-_- ~) Running Well transformer (~ -_-)~')
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsAndImportsInDir(targetDir, ['Well'], (tagNames) => [
    transformWellVariantToColor(tagNames),
  ])
}

run()
