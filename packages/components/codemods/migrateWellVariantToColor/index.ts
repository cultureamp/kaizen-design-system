import { transformComponentsInDir } from '../utils'
import { transformWellVariantToColor } from './transformWellVariantToColor'

const migrateWellVariantToColor = (): void => {
  console.log(' ~(-_- ~) Running Well transformer (~ -_-)~')
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsInDir(targetDir, transformWellVariantToColor, 'Well')
}

migrateWellVariantToColor()
