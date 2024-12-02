import React from 'react'
import { Meta } from '@storybook/react'
import { StickerSheet, StickerSheetStory } from '~storybook/components/StickerSheet'
import { InformationTile, InformationTileProps } from '../index'

export default {
  title: 'Components/Tiles/InformationTile',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => {
    const defaultProps = {
      title: 'Title',
      metadata: 'Side A',
      information: 'Side B',
      footer: <>Footer</>,
    } satisfies InformationTileProps

    const variants = ['default', 'expert-advice'] satisfies Array<InformationTileProps['variant']>

    const moods = [
      'positive',
      'informative',
      'cautionary',
      'assertive',
      'negative',
      'prominent',
    ] satisfies Array<InformationTileProps['mood']>

    return (
      <>
        <StickerSheet title="InformationTile">
          {variants.map((variant) => (
            <StickerSheet.Row key={variant} header={variant}>
              <InformationTile {...defaultProps} variant={variant} />
            </StickerSheet.Row>
          ))}
        </StickerSheet>

        <StickerSheet title="Mood (deprecated)">
          <StickerSheet.Row header="default">
            <InformationTile {...defaultProps} />
          </StickerSheet.Row>
          {moods.map((mood) => (
            <StickerSheet.Row key={mood} header={mood}>
              <InformationTile {...defaultProps} mood={mood} />
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
