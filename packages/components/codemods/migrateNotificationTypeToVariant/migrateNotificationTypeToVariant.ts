import type { GenericNotificationProps } from '../../src/Notification/subcomponents/GenericNotification'
import { migrateStringProp } from '../utils'

type LegacyNotificationType = 'cautionary' | 'informative' | 'negative' | 'positive' | 'security'

type LegacyGenericNotificationProps = GenericNotificationProps & {
  type?: LegacyNotificationType
}

const OLD_PROP_NAME = 'type'
const NEW_PROP_NAME = 'variant'

const getNewVariantValue = (
  oldValue: Exclude<LegacyGenericNotificationProps[typeof OLD_PROP_NAME], undefined>,
): Exclude<GenericNotificationProps[typeof NEW_PROP_NAME], undefined> => {
  switch (oldValue) {
    case 'cautionary':
      return 'cautionary'
    case 'informative':
      return 'informative'
    case 'negative':
      return 'warning'
    case 'positive':
      return 'success'
    case 'security':
      return 'security'
  }
}

export const transformNotificationTypeToVariant = migrateStringProp(
  OLD_PROP_NAME,
  NEW_PROP_NAME,
  getNewVariantValue,
)
