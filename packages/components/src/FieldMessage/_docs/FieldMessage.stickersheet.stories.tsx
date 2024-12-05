import React from 'react'
import { Meta } from '@storybook/react'
import { StickerSheet, StickerSheetStory } from '~storybook/components/StickerSheet'
import { FieldMessage } from '../index'

export default {
  title: 'Components/FieldMessage',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
  args: {
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullasemper odio vitae sem gravida rutrum.',
  },
} satisfies Meta<typeof FieldMessage>

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
  parameters: { backgrounds: { default: 'Purple 700' } },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: { textDirection: 'rtl' },
}
