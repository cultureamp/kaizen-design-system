import { transformComponentsInDir } from "../utils"
import { transformInformationTileMoodToVariant } from "./transformInformationTileMoodToVariant"

const migrateInformationTileMoodToVariant = (): void => {
  // eslint-disable-next-line no-console
  console.log(
    " ~(-_- ~) Running InformationTile mood to variant transformer (~ -_-)~"
  )
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsInDir(
    targetDir,
    transformInformationTileMoodToVariant,
    "InformationTile"
  )
}

migrateInformationTileMoodToVariant()
