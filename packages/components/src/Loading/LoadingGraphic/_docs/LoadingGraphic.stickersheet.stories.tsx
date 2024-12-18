import React from 'react'
import { type Meta } from '@storybook/react'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { LoadingGraphic } from '../index'

export default {
  title: 'Components/Loading states/LoadingGraphic',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Row header="Small">
        <LoadingGraphic isReversed={isReversed} size="small" />
      </StickerSheet.Row>
      <StickerSheet.Row header="Medium">
        <LoadingGraphic isReversed={isReversed} size="medium" />
      </StickerSheet.Row>
      <StickerSheet.Row header="Large">
        <LoadingGraphic isReversed={isReversed} size="large" />
      </StickerSheet.Row>
      <StickerSheet.Row header="X-large">
        <LoadingGraphic isReversed={isReversed} size="xlarge" />
      </StickerSheet.Row>
      <StickerSheet.Row header="Xx-large">
        <LoadingGraphic isReversed={isReversed} size="xxlarge" />
      </StickerSheet.Row>
      <StickerSheet.Row header="Scene">
        <LoadingGraphic isReversed={isReversed} size="scene" />
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
  parameters: {
    backgrounds: { default: 'Purple 700' },
  },
  args: { isReversed: true },
}
