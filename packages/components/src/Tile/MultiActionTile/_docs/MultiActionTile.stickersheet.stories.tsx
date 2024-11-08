import React from 'react'
import { Meta } from '@storybook/react'
import { StickerSheet, StickerSheetStory } from '~storybook/components/StickerSheet'
import { MultiActionTile, MultiActionTileProps } from '../index'

export default {
  title: 'Components/Tiles/MultiActionTile',
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
      primaryAction: {
        label: 'Take Action!',
      },
      secondaryAction: {
        label: 'Nevermind',
      },
    } satisfies MultiActionTileProps

    const variants = ['default', 'expert-advice'] satisfies MultiActionTileProps['variant'][]

    const moods = [
      'positive',
      'informative',
      'cautionary',
      'assertive',
      'negative',
      'prominent',
    ] satisfies MultiActionTileProps['mood'][]

    return (
      <>
        <StickerSheet heading="MultiActionTile">
          <StickerSheet.Body>
            {variants.map((variant) => (
              <StickerSheet.Row key={variant} rowTitle={variant}>
                <MultiActionTile {...defaultProps} variant={variant} />
              </StickerSheet.Row>
            ))}
          </StickerSheet.Body>
        </StickerSheet>

        <StickerSheet heading="Mood (deprecated)">
          <StickerSheet.Body>
            <>
              <StickerSheet.Row rowTitle="default">
                <MultiActionTile {...defaultProps} />
              </StickerSheet.Row>
              {moods.map((mood) => (
                <StickerSheet.Row key={mood} rowTitle={mood}>
                  <MultiActionTile {...defaultProps} mood={mood} />
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
