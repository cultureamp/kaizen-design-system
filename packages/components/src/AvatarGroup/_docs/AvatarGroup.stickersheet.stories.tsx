import React from 'react'
import { type Meta } from '@storybook/react'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { AvatarGroup, type AvatarGroupSize } from '../index'
import { AVATARS, EXAMPLE_USER_1, EXAMPLE_USER_2 } from './example-data'

export default {
  title: 'Components/Avatar/Avatar Group',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const ROWS: { title: string; size: AvatarGroupSize }[] = [
  { title: 'Large', size: 'large' },
  { title: 'Medium', size: 'medium' },
  { title: 'Small', size: 'small' },
]

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed} headers={['With counter', 'Without counter']}>
      {ROWS.map(({ title, size }) => (
        <StickerSheet.Row key={title} header={title}>
          <AvatarGroup maxVisible={2} avatars={AVATARS} size={size} />
          <AvatarGroup maxVisible={2} avatars={[EXAMPLE_USER_1, EXAMPLE_USER_2]} size={size} />
        </StickerSheet.Row>
      ))}
    </StickerSheet>
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

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Reversed)',
  parameters: {
    backgrounds: { default: 'Purple 700' },
  },
  args: { isReversed: true },
}
