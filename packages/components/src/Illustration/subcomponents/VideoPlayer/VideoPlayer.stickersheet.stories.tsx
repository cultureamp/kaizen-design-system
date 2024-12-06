import React from 'react'
import { Meta } from '@storybook/react'
import { StickerSheet, StickerSheetStory } from '~storybook/components/StickerSheet'
import { VideoPlayer } from './index'

export default {
  title: 'Components/Illustrations/VideoPlayer',
  parameters: {
    controls: { disable: true },
    chromatic: { disable: false },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed} title="Aspect Ratio">
      <StickerSheet.Row header="default">
        <div className="border border-dashed border-grey-500">
          <VideoPlayer
            autoplay={false}
            fallback="illustrations/heart/scene/brand-moments-positive-outro"
            source="illustrations/heart/scene/brand-moments-positive-outro"
          />
        </div>
      </StickerSheet.Row>
      <StickerSheet.Row header="landscape">
        <div className="border border-dashed border-grey-500">
          <VideoPlayer
            autoplay={false}
            aspectRatio="landscape"
            fallback="illustrations/heart/scene/brand-moments-positive-outro"
            source="illustrations/heart/scene/brand-moments-positive-outro"
          />
        </div>
      </StickerSheet.Row>
      <StickerSheet.Row header="portrait">
        <div className="border border-dashed border-grey-500">
          <VideoPlayer
            autoplay={false}
            aspectRatio="portrait"
            fallback="illustrations/heart/scene/brand-moments-positive-outro"
            source="illustrations/heart/scene/brand-moments-positive-outro"
          />
        </div>
      </StickerSheet.Row>
      <StickerSheet.Row header="square">
        <div className="border border-dashed border-grey-500">
          <VideoPlayer
            autoplay={false}
            aspectRatio="square"
            fallback="illustrations/heart/scene/brand-moments-positive-outro"
            source="illustrations/heart/scene/brand-moments-positive-outro"
          />
        </div>
      </StickerSheet.Row>
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}
