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

    const moods = [
      'positive',
      'informative',
      'cautionary',
      'assertive',
      'negative',
      'prominent',
    ] satisfies GenericTileProps['mood'][]

    return (
      <>
        <StickerSheet title="GenericTile">
          {variants.map((variant) => (
            <StickerSheet.Row key={variant} header={variant}>
              <GenericTile {...defaultProps} variant={variant} />
            </StickerSheet.Row>
          ))}
        </StickerSheet>

        <StickerSheet title="Mood (deprecated)">
          <StickerSheet.Row header="default">
            <GenericTile {...defaultProps} />
          </StickerSheet.Row>
          {moods.map((mood) => (
            <StickerSheet.Row key={mood} header={mood}>
              <GenericTile {...defaultProps} mood={mood} />
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
