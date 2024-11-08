import React from "react"
import { Meta } from "@storybook/react"
import { StickerSheet, StickerSheetStory } from "~storybook/components/StickerSheet"
import { InformationTile, InformationTileProps } from "../index"

export default {
  title: "Components/Tiles/InformationTile",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => {
    const defaultProps = {
      title: "Title",
      metadata: "Side A",
      information: "Side B",
      footer: <>Footer</>,
    } satisfies InformationTileProps

    const variants = ["default", "expert-advice"] satisfies InformationTileProps["variant"][]

    const moods = [
      "positive",
      "informative",
      "cautionary",
      "assertive",
      "negative",
      "prominent",
    ] satisfies InformationTileProps["mood"][]

    return (
      <>
        <StickerSheet heading="InformationTile">
          <StickerSheet.Body>
            {variants.map((variant) => (
              <StickerSheet.Row key={variant} rowTitle={variant}>
                <InformationTile {...defaultProps} variant={variant} />
              </StickerSheet.Row>
            ))}
          </StickerSheet.Body>
        </StickerSheet>

        <StickerSheet heading="Mood (deprecated)">
          <StickerSheet.Body>
            <>
              <StickerSheet.Row rowTitle="default">
                <InformationTile {...defaultProps} />
              </StickerSheet.Row>
              {moods.map((mood) => (
                <StickerSheet.Row key={mood} rowTitle={mood}>
                  <InformationTile {...defaultProps} mood={mood} />
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
  name: "Sticker Sheet (Default)",
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: { textDirection: "rtl" },
}
