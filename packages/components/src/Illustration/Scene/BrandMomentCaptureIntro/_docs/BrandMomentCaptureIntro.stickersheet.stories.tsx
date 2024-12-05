import React from 'react'
import { Meta } from '@storybook/react'
import { StickerSheet, StickerSheetStory } from '~storybook/components/StickerSheet'
import { BrandMomentCaptureIntro } from '../index'

export default {
  title: 'Components/Illustrations/Scene/BrandMomentCaptureIntro',
  parameters: {
    chromatic: { disable: false, delay: 400 },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed} headers={['Default', 'Autoplay (hover)']}>
      <StickerSheet.Row>
        <BrandMomentCaptureIntro />
        <BrandMomentCaptureIntro isAnimated autoplay={false} />
      </StickerSheet.Row>
    </StickerSheet>
  ),
  parameters: {
    pseudo: {
      hover: true,
    },
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}
