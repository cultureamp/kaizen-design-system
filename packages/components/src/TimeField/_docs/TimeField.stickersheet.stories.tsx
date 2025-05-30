import React, { useState } from 'react'
import { type Meta } from '@storybook/react'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { TimeField } from '../index'
import { type ValueType } from '../types'

export default {
  title: 'Components/TimeField',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => {
    const [valueDefault, setValueDefault] = useState<ValueType | null>(null)
    const [valueError, setValueError] = useState<ValueType | null>({
      hour: 1,
      minutes: 30,
    })
    const [valueEnUS, setValueEnUS] = useState<ValueType | null>(null)
    const [valueEnGB, setValueEnGB] = useState<ValueType | null>(null)
    const [valueZh, setValueZh] = useState<ValueType | null>(null)

    return (
      <>
        <StickerSheet title="TimeField" layout="stretch" headers={['Default', 'Disabled', 'Error']}>
          <StickerSheet.Row>
            <TimeField
              label="Label (en-AU)"
              locale="en-AU"
              value={valueDefault}
              onChange={setValueDefault}
            />
            <TimeField
              label="Label (en-AU)"
              locale="en-AU"
              value={{ hour: 1, minutes: 30 }}
              onChange={(): void => undefined}
              isDisabled
            />
            <TimeField
              label="Label (en-AU)"
              locale="en-AU"
              value={valueError}
              onChange={setValueError}
              status="error"
              validationMessage="Date is invalid"
            />
          </StickerSheet.Row>
        </StickerSheet>

        <StickerSheet title="Pseudo states" layout="stretch" headers={['Hover', 'Focus']}>
          <StickerSheet.Row>
            <TimeField
              label="Label (hover on hour)"
              locale="en-AU"
              value={{ hour: 22, minutes: 30 }}
              onChange={(): void => undefined}
              data-sb-pseudo-styles="hover--segment"
            />
            <TimeField
              label="Label (focus on hour)"
              locale="en-AU"
              value={{ hour: 22, minutes: 30 }}
              onChange={(): void => undefined}
              data-sb-pseudo-styles="focus--segment"
            />
          </StickerSheet.Row>
        </StickerSheet>

        <StickerSheet
          title="Localisation"
          layout="stretch"
          headers={['en-US', 'en-GB', 'zh-HANS-SG']}
        >
          <StickerSheet.Row>
            <TimeField label="Label" locale="en-US" value={valueEnUS} onChange={setValueEnUS} />
            <TimeField label="Label" locale="en-GB" value={valueEnGB} onChange={setValueEnGB} />
            <TimeField label="Label" locale="zh-HANS-SG" value={valueZh} onChange={setValueZh} />
          </StickerSheet.Row>
        </StickerSheet>
      </>
    )
  },
  parameters: {
    pseudo: {
      hover: [
        '[data-sb-pseudo-styles="hover--segment"]',
        '[data-sb-pseudo-styles="hover--segment"] [aria-label*="hour"]',
      ],
      focusVisible: '[data-sb-pseudo-styles="focus--segment"] [aria-label*="hour"]',
      focusWithin: '[data-sb-pseudo-styles="focus--segment"]',
    },
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: 'rtl',
  },
}
