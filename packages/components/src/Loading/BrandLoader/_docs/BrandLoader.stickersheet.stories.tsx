import React from 'react'
import { type Meta } from '@storybook/react'
import { ReversedColors } from '~components/utils'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { BrandLoader } from '../index'

export default {
  title: 'Components/Loading states/BrandLoader',
  parameters: {
    chromatic: { disable: false, prefersReducedMotion: 'reduce' },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <ReversedColors isReversed={isReversed}>
      <>
        <StickerSheet isReversed={isReversed} title="Size" headers={['Small', 'Medium', 'Large']}>
          <StickerSheet.Row>
            <BrandLoader accessibilityLabel="Loading" size="sm" />
            <BrandLoader accessibilityLabel="Loading" size="md" />
            <BrandLoader accessibilityLabel="Loading" size="lg" />
          </StickerSheet.Row>
        </StickerSheet>
        <StickerSheet isReversed={isReversed} title="Speed" headers={['Slow', 'Normal', 'Fast']}>
          <StickerSheet.Row>
            <BrandLoader accessibilityLabel="Loading" speed="slow" />
            <BrandLoader accessibilityLabel="Loading" speed="normal" />
            <BrandLoader accessibilityLabel="Loading" speed="fast" />
          </StickerSheet.Row>
        </StickerSheet>
      </>
    </ReversedColors>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Reversed)',
  parameters: {
    backgrounds: { default: 'Purple 700' },
  },
  args: { isReversed: true },
}
