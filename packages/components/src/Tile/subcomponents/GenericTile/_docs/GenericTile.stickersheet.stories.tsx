import React from 'react'
import { type Meta } from '@storybook/react'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { GenericTile, type GenericTileProps } from '../index'

export default {
  title: 'Components/Tiles/GenericTile (primitive)',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => {
    const defaultProps = {
      title: 'Title',
      metadata: 'metadata',
      information: 'string',
      footer: <>Footer</>,
    } satisfies GenericTileProps

    const variants = ['default', 'expert-advice'] satisfies GenericTileProps['variant'][]

    return (
      <>
        <StickerSheet title="GenericTile">
          {variants.map((variant) => (
            <StickerSheet.Row key={variant} header={variant}>
              <GenericTile {...defaultProps} variant={variant} />
            </StickerSheet.Row>
          ))}
        </StickerSheet>
      </>
    )
  },
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
