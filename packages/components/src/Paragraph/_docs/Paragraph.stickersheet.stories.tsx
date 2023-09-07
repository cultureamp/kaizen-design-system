import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Paragraph } from "../index"

export default {
  title: "KAIO-Staging/Paragraph",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    const fontColour = isReversed ? "white" : "dark"

    return (
      <>
        <StickerSheet isReversed={isReversed}>
          <StickerSheet.Body>
            <StickerSheet.Row rowTitle="Intro Lede">
              <Paragraph variant="intro-lede" color={fontColour}>
                The quick brown fox jumps over the lazy dog.
              </Paragraph>
            </StickerSheet.Row>
            <StickerSheet.Row rowTitle="Body">
              <Paragraph variant="body" color={fontColour}>
                The quick brown fox jumps over the lazy dog.
              </Paragraph>
            </StickerSheet.Row>
            <StickerSheet.Row rowTitle="Body strong">
              <Paragraph variant="body" color={fontColour}>
                <strong>The quick brown fox jumps over the lazy dog.</strong>
              </Paragraph>
            </StickerSheet.Row>
            <StickerSheet.Row rowTitle="Small">
              <Paragraph variant="small" color={fontColour}>
                The quick brown fox jumps over the lazy dog.
              </Paragraph>
            </StickerSheet.Row>
            <StickerSheet.Row rowTitle="Extra small">
              <Paragraph variant="extra-small" color={fontColour}>
                The quick brown fox jumps over the lazy dog.
              </Paragraph>
            </StickerSheet.Row>
            {!isReversed ? (
              <>
                <StickerSheet.Row rowTitle="Dark Reduced Opacity">
                  <Paragraph variant="intro-lede" color="dark-reduced-opacity">
                    The quick brown fox jumps over the lazy dog.
                  </Paragraph>
                </StickerSheet.Row>
                <StickerSheet.Row rowTitle="Positive">
                  <Paragraph variant="intro-lede" color="positive">
                    The quick brown fox jumps over the lazy dog.
                  </Paragraph>
                </StickerSheet.Row>
                <StickerSheet.Row rowTitle="Negative">
                  <Paragraph variant="intro-lede" color="negative">
                    The quick brown fox jumps over the lazy dog.
                  </Paragraph>
                </StickerSheet.Row>
              </>
            ) : (
              <StickerSheet.Row rowTitle="White Reduced Opacity">
                <Paragraph variant="intro-lede" color="white-reduced-opacity">
                  The quick brown fox jumps over the lazy dog.
                </Paragraph>
              </StickerSheet.Row>
            )}
          </StickerSheet.Body>
        </StickerSheet>
      </>
    )
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: { backgrounds: { default: "Purple 700" } },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: { textDirection: "rtl" },
}
