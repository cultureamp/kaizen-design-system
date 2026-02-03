import React from 'react'
import { type Meta } from 'storybook'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { InformationTile, type InformationTileProps } from '../index'

export default {
  title: 'Components/Tiles/InformationTile (Deprecated)',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies any

const StickerSheetTemplate: StickerSheetStory = {
  render: () => {
    const defaultProps = {
      title: 'Title',
      metadata: 'Side A',
      information: 'Side B',
      footer: <>Footer</>,
    } satisfies InformationTileProps

    const variants = ['default', 'expert-advice'] satisfies InformationTileProps['variant'][]

    return (
      <>
        <StickerSheet title="InformationTile">
          {variants.map((variant) => (
            <StickerSheet.Row key={variant} header={variant}>
              <InformationTile {...defaultProps} variant={variant} />
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
