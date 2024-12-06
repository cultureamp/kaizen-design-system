import { transformComponentsInDir } from '../utils'
import { transformCardVariantToColor } from './transformCardVariantToColor'

const migrateCardVariantToColor = (): void => {
  console.log('~(-_- ~) Running Card variant to color transformer (~ -_-)~')
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsInDir(targetDir, transformCardVariantToColor, 'Card')
}

migrateCardVariantToColor()
