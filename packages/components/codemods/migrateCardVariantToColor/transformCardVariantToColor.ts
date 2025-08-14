import type { CardProps } from '../../src/Card'
import { migrateStringProp } from '../utils'

type LegacyCardProps = CardProps & {
  variant?: string
}

const OLD_PROP_NAME = 'variant'
const NEW_PROP_NAME = 'color'

const getNewVariantValue = (
  oldValue: Exclude<LegacyCardProps[typeof OLD_PROP_NAME], undefined>,
): Exclude<CardProps[typeof NEW_PROP_NAME], undefined> => {
  switch (oldValue) {
    case 'assertive':
      return 'orange'
    case 'cautionary':
      return 'yellow'
    case 'default':
      return 'white'
    case 'destructive':
      return 'red'
    case 'highlight':
      return 'purple'
    case 'informative':
      return 'blue'
    case 'positive':
    default:
      return 'green'
  }
}

export const transformCardVariantToColor = migrateStringProp(
  OLD_PROP_NAME,
  NEW_PROP_NAME,
  getNewVariantValue,
)
