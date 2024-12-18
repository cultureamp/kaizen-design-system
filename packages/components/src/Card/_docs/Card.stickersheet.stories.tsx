import React from 'react'
import { type Meta } from '@storybook/react'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { Card, type CardProps } from '../index'

export default {
  title: 'Components/Card',
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const colors = [
  'blue',
  'green',
  'gray',
  'orange',
  'purple',
  'red',
  'white',
  'yellow',
] satisfies CardProps['color'][]

const variants = [
  'default',
  'informative',
  'positive',
  'cautionary',
  'destructive',
  'assertive',
  'highlight',
] satisfies CardProps['variant'][]

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed, ...args }) => (
    <>
      <StickerSheet isReversed={isReversed} title="Colors">
        {colors.map((color) => (
          <StickerSheet.Row key={color} header={color}>
            <Card {...args} color={color} />
          </StickerSheet.Row>
        ))}
      </StickerSheet>
      <StickerSheet isReversed={isReversed} title="Variants (deprecated)">
        {variants.map((variant) => (
          <StickerSheet.Row key={variant} header={variant}>
            <Card {...args} variant={variant} />
          </StickerSheet.Row>
        ))}
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
