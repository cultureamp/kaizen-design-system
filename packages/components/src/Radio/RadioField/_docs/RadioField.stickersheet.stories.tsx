import React from 'react'
import { type Meta } from '@storybook/react'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { RadioField } from '../index'

export default {
  title: 'Components/Radios/RadioField',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed} headers={['Base', 'Disabled', 'Hover']}>
      <StickerSheet.Row header="On">
        <RadioField
          name="radio"
          labelText="Label"
          selectedStatus
          value="radio-1"
          reversed={isReversed}
        />
        <RadioField
          name="radio"
          labelText="Label"
          selectedStatus
          disabled
          value="radio-2"
          reversed={isReversed}
        />
        <RadioField
          name="radio"
          labelText="Label"
          selectedStatus
          value="radio-3"
          reversed={isReversed}
          classNameOverride="story__radio-field--hover"
        />
      </StickerSheet.Row>
      <StickerSheet.Row header="Off">
        <RadioField name="radio" labelText="Label" value="radio-1" reversed={isReversed} />
        <RadioField name="radio" labelText="Label" disabled value="radio-2" reversed={isReversed} />
        <RadioField
          name="radio"
          labelText="Label"
          value="radio-3"
          reversed={isReversed}
          classNameOverride="story__radio-field--hover"
        />
      </StickerSheet.Row>
    </StickerSheet>
  ),
  parameters: {
    pseudo: {
      hover: '.story__radio-field--hover > label',
    },
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Reversed)',
  parameters: {
    ...StickerSheetTemplate.parameters,
    backgrounds: { default: 'Purple 700' },
  },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: { textDirection: 'rtl' },
}
