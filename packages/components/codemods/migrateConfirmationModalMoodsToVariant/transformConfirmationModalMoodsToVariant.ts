import type { ConfirmationModalProps } from '../../src/Modal'
import { migrateStringProp } from '../utils'

const OLD_PROP_NAME = 'mood'
const NEW_PROP_NAME = 'variant'

const getNewVariantValue = (
  oldValue: Exclude<ConfirmationModalProps[typeof OLD_PROP_NAME], undefined>,
): Exclude<ConfirmationModalProps[typeof NEW_PROP_NAME], undefined> => {
  switch (oldValue) {
    case 'positive':
      return 'success'
    case 'informative':
      return 'informative'
    case 'negative':
      return 'warning'
    case 'cautionary':
      return 'cautionary'
    case 'assertive':
      return 'cautionary'
  }
}

export const transformConfirmationModalMoodsToVariant = migrateStringProp(
  OLD_PROP_NAME,
  NEW_PROP_NAME,
  getNewVariantValue,
)
