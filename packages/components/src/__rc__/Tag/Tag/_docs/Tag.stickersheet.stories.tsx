import React from 'react'
import { type Meta } from '@storybook/react'
import { Icon } from '~components/__rc__/Icon'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { Tag } from '../Tag'
import { TagColorKeys } from '../types'

export default {
  title: 'Components/Tag/Future',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <StickerSheet title="Tag" headers={['Label Only', 'Icon']}>
      {TagColorKeys.map((color) => (
        <StickerSheet.Row key={color}>
          <Tag color={color}>{color.charAt(0).toUpperCase() + color.slice(1)}</Tag>
          <Tag icon={<Icon name="label" isPresentational isFilled />} color={color}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </Tag>
        </StickerSheet.Row>
      ))}
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
  parameters: {
    controls: { disable: true },
  },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: {
    textDirection: 'rtl',
  },
}
