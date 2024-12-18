import { transformComponentsAndImportsInDir } from '../utils'
import { transformInformationTileMoodToVariant } from './transformInformationTileMoodToVariant'

const run = (): void => {
  console.log('~(-_- ~) Running InformationTile mood to variant transformer (~ -_-)~')
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsAndImportsInDir(targetDir, ['InformationTile'], (tagNames) => [
    transformInformationTileMoodToVariant(tagNames),
  ])
}

run()
