import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { StickerSheet } from "../../../storybook/components/StickerSheet"

import { MultiActionTile } from "../index"

export default {
  title: "Stickersheets/Tile",
} satisfies Meta<typeof MultiActionTile>

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StickerSheet isReversed={isReversed}>
    <StickerSheet.Header
      headings={["Default", "Information", "Secondary action"]}
      headingsWidth="12rem"
    />
    <StickerSheet.Body>
      <StickerSheet.Row rowTitle="Mood"></StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  controls: { disable: true },
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
}
