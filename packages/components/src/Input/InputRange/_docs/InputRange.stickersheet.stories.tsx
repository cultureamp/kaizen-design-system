import React from 'react'
import { type Meta } from '@storybook/react'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { InputRange } from '../index'

export default {
  title: 'Components/Inputs/InputRange',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
    a11y: {
      config: {
        rules: [
          {
            // Built with no label on purpose, to be used within `Slider` where label is present
            id: 'label',
            enabled: false,
          },
          {
            // Built with no label on purpose, to be used within `Slider` where label is present
            id: 'label-title-only',
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <StickerSheet title="InputRange" headers={['Default', 'Disabled']} layout="stretch">
      <StickerSheet.Row>
        <InputRange id="inputRange" minLabel="Minimum" maxLabel="Maximum" value={2} />
        <InputRange
          id="inputRangeDisable"
          minLabel={<span data-sb-a11y-color-contrast-disable>Min</span>}
          maxLabel={<span data-sb-a11y-color-contrast-disable>Max</span>}
          value={2}
          disabled
          data-sb-a11y-color-contrast-disable
        />
      </StickerSheet.Row>
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: { textDirection: 'rtl' },
}
