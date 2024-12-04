import React from 'react'
import { Meta } from '@storybook/react'
import { StickerSheet, StickerSheetStory } from '~storybook/components/StickerSheet'
import { Text } from '../index'

export default {
  title: 'Components/Text',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    const fontColour = isReversed ? 'white' : 'dark'

    return (
      <StickerSheet title="Text" isReversed={isReversed}>
        <StickerSheet.Row header="Intro Lede">
          <Text variant="intro-lede" color={fontColour}>
            The quick brown fox jumps over the lazy dog.
          </Text>
        </StickerSheet.Row>
        <StickerSheet.Row header="Body">
          <Text variant="body" color={fontColour}>
            The quick brown fox jumps over the lazy dog.
          </Text>
        </StickerSheet.Row>
        <StickerSheet.Row header="Body strong">
          <Text variant="body" color={fontColour}>
            <strong>The quick brown fox jumps over the lazy dog.</strong>
          </Text>
        </StickerSheet.Row>
        <StickerSheet.Row header="Small">
          <Text variant="small" color={fontColour}>
            The quick brown fox jumps over the lazy dog.
          </Text>
        </StickerSheet.Row>
        <StickerSheet.Row header="Extra small">
          <Text variant="extra-small" color={fontColour}>
            The quick brown fox jumps over the lazy dog.
          </Text>
        </StickerSheet.Row>
        {!isReversed ? (
          <>
            <StickerSheet.Row header="Dark Reduced Opacity">
              <Text variant="intro-lede" color="dark-reduced-opacity">
                The quick brown fox jumps over the lazy dog.
              </Text>
            </StickerSheet.Row>
            <StickerSheet.Row header="Positive">
              <Text variant="intro-lede" color="positive">
                The quick brown fox jumps over the lazy dog.
              </Text>
            </StickerSheet.Row>
            <StickerSheet.Row header="Negative">
              <Text variant="intro-lede" color="negative">
                The quick brown fox jumps over the lazy dog.
              </Text>
            </StickerSheet.Row>
          </>
        ) : (
          <StickerSheet.Row header="White Reduced Opacity">
            <Text variant="intro-lede" color="white-reduced-opacity">
              The quick brown fox jumps over the lazy dog.
            </Text>
          </StickerSheet.Row>
        )}
      </StickerSheet>
    )
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Reversed)',
  parameters: { backgrounds: { default: 'Purple 700' } },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: { textDirection: 'rtl' },
}
