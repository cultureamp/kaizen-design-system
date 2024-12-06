import React from 'react'
import { Meta } from '@storybook/react'
import { StickerSheet, StickerSheetStory } from '~storybook/components/StickerSheet'
import { ClearButton } from '../index'

export default {
  title: 'Components/ClearButton',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed} headers={['Default', 'Hover', 'Focus']}>
      <StickerSheet.Row>
        <ClearButton isReversed={isReversed} />
        <ClearButton isReversed={isReversed} data-sb-pseudo-styles="hover" />
        <ClearButton isReversed={isReversed} data-sb-pseudo-styles="focus" />
      </StickerSheet.Row>
    </StickerSheet>
  ),
  parameters: {
    pseudo: {
      hover: '[data-sb-pseudo-styles="hover"]',
      focus: '[data-sb-pseudo-styles="focus"]',
      focusVisible: '[data-sb-pseudo-styles="focus"]',
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
