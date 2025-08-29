import React from 'react'
import { type Meta } from '@storybook/react'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { BrandMoment } from '../BrandMoment'
import { Informative, Success, Warning } from './BrandMoment.stories'

export default {
  title: 'Pages/BrandMoment',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
    a11y: {
      config: {
        rules: [
          {
            // There's gonna be duplicate landmarks here because it's a stickersheet
            id: 'landmark-no-duplicate-banner',
            enabled: false,
          },
          {
            // There's gonna be duplicate landmarks here because it's a stickersheet
            id: 'landmark-no-duplicate-contentinfo',
            enabled: false,
          },
          {
            // There's gonna be duplicate landmarks here because it's a stickersheet
            id: 'landmark-no-duplicate-main',
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <StickerSheet isReversed={isReversed} title="Variant">
        <StickerSheet.Row header="Informative">
          <BrandMoment {...Informative.args} />
        </StickerSheet.Row>
        <StickerSheet.Row header="Success">
          <BrandMoment {...Success.args} />
        </StickerSheet.Row>
        <StickerSheet.Row header="Warning">
          <BrandMoment {...Warning.args} />
        </StickerSheet.Row>
      </StickerSheet>
    </>
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
