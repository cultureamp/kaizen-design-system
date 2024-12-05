import { LOCALE_REGIONS } from '@cultureamp/i18n-react-intl'
import { ArgTypes } from '@storybook/react'

const DATE_PICKER_SUPPORTED_LOCALES = [
  ...Object.keys(LOCALE_REGIONS),
  // The following are for murmur
  'kr',
  'no',
]

export const datePickerLocaleControls: Partial<ArgTypes> = {
  locale: {
    options: DATE_PICKER_SUPPORTED_LOCALES,
    control: { type: 'select' },
  },
}
