import type { BrandMomentProps } from '../../src/BrandMoment'
import { migrateStringProp } from '../utils'

type LegacyBrandMomentProps = BrandMomentProps & {
  mood?: string
}

const OLD_PROP_NAME = 'mood'
const NEW_PROP_NAME = 'variant'

const getNewVariantValue = (
  oldValue: Exclude<LegacyBrandMomentProps[typeof OLD_PROP_NAME], undefined>,
): Exclude<BrandMomentProps[typeof NEW_PROP_NAME], undefined> => {
  switch (oldValue) {
    case 'informative':
      return 'informative'
    case 'positive':
      return 'success'
    case 'negative':
    default:
      return 'warning'
  }
}

export const transformBrandMomentMoodToVariant = migrateStringProp(
  OLD_PROP_NAME,
  NEW_PROP_NAME,
  getNewVariantValue,
)
