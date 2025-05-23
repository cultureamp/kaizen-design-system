import React from 'react'
import { LOCALE_REGIONS } from '@cultureamp/i18n-react-intl'
import { type Meta } from '@storybook/react'
import { CalendarSingle } from '~components/Calendar'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { getLocale } from '../utils/getLocale'

export default {
  title: 'Components/Datepickers/DatePicker/Tests',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

export const UtilGetLocale: StickerSheetStory = {
  // Skip running this with test-storybook (still runs in Chromatic) as it times out
  tags: ['skip-test'],
  name: 'Util - getLocale',
  render: () => {
    const locales = [
      ...Object.keys(LOCALE_REGIONS),
      // The following are for murmur
      'kr',
      'no',
      // Old API values
      'en-AU',
      'en-US',
    ]

    return (
      <StickerSheet title="Util - getLocale">
        {locales.map((locale) => (
          <StickerSheet.Row key={locale} header={locale}>
            <CalendarSingle defaultMonth={new Date('2021-09-05')} locale={getLocale(locale)} />
          </StickerSheet.Row>
        ))}
      </StickerSheet>
    )
  },
}
