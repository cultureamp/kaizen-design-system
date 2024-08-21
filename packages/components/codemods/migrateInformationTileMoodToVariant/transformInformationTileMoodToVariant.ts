import type { InformationTileProps } from "../../src/Tile"
import { migrateStringProp } from "../utils"

const OLD_PROP_NAME = "mood"
const NEW_PROP_NAME = "variant"

const getNewVariantValue = (
  oldValue: Exclude<InformationTileProps[typeof OLD_PROP_NAME], undefined>
): Exclude<InformationTileProps[typeof NEW_PROP_NAME], undefined> => {
  switch (oldValue) {
    case "prominent":
      return "expert-advice"
    default:
      return "default"
  }
}

export const transformInformationTileMoodToVariant = migrateStringProp(
  OLD_PROP_NAME,
  NEW_PROP_NAME,
  getNewVariantValue
)
