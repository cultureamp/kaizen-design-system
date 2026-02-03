import React from 'react'
import { type Meta } from 'storybook'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { FieldMessage } from '../index'

export default {
  title: 'Components/Form primitives/FieldMessage',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
  args: {
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullasemper odio vitae sem gravida rutrum.',
  },
} satisfies any

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed, ...otherProps }) => (
    <StickerSheet isReversed={isReversed} headers={['Default', 'Success', 'Error', 'Caution']}>
      <StickerSheet.Row>
        <FieldMessage {...otherProps} reversed={isReversed} />
        <FieldMessage {...otherProps} reversed={isReversed} status="success" />
        <FieldMessage {...otherProps} reversed={isReversed} status="error" />
        <FieldMessage {...otherProps} reversed={isReversed} status="caution" />
      </StickerSheet.Row>
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Reversed)',
  args: { isReversed: true },
  globals: {
    backgrounds: {
      value: "purple_700"
    }
  },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: { textDirection: 'rtl' },
}
