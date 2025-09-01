import type { MultiActionTileProps } from '../../src/Tile'
import { migrateStringProp } from '../utils'

type LegacyMultiActionTileProps = MultiActionTileProps & {
  mood?: string
}

const OLD_PROP_NAME = 'mood'
const NEW_PROP_NAME = 'variant'

const getNewVariantValue = (
  oldValue: Exclude<LegacyMultiActionTileProps[typeof OLD_PROP_NAME], undefined>,
): Exclude<MultiActionTileProps[typeof NEW_PROP_NAME], undefined> => {
  switch (oldValue) {
    case 'prominent':
      return 'expert-advice'
    default:
      return 'default'
  }
}

export const transformMultiActionTileMoodToVariant = migrateStringProp(
  OLD_PROP_NAME,
  NEW_PROP_NAME,
  getNewVariantValue,
)
