import React from 'react'
import { Meta } from '@storybook/react'
import {
  StickerSheet,
  StickerSheetStory,
} from '~storybook/components/StickerSheet'
import { GenericTile, GenericTileProps } from '../index'

export default {
  title: 'Components/Tiles/GenericTile',
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
        <StickerSheet heading="GenericTile">
          <StickerSheet.Body>
            {variants.map((variant) => (
              <StickerSheet.Row key={variant} rowTitle={variant}>
                <GenericTile {...defaultProps} variant={variant} />
              </StickerSheet.Row>
            ))}
          </StickerSheet.Body>
        </StickerSheet>

        <StickerSheet heading="Mood (deprecated)">
          <StickerSheet.Body>
            <>
              <StickerSheet.Row rowTitle="default">
                <GenericTile {...defaultProps} />
              </StickerSheet.Row>
              {moods.map((mood) => (
                <StickerSheet.Row key={mood} rowTitle={mood}>
                  <GenericTile {...defaultProps} mood={mood} />
                </StickerSheet.Row>
              ))}
            </>
          </StickerSheet.Body>
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
