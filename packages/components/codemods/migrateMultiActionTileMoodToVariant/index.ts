import { transformComponentsInDir } from '../utils'
import { transformMultiActionTileMoodToVariant } from './transformMultiActionTileMoodToVariant'

const run = (): void => {
  console.log(' ~(-_- ~) Running MultiActionTile mood to variant transformer (~ -_-)~')
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsInDir(targetDir, ['MultiActionTile'], (tagNames) => [
    transformMultiActionTileMoodToVariant(tagNames),
  ])
}

run()
