import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import { FilterBar } from "../index"

export default {
  title: "Components/Filter Bar",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta<typeof FilterBar>

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  /** @note: If you have multiple StickerSheets to display, you can add a `heading` */
  <StickerSheet isReversed={isReversed}>
    <StickerSheet.Header
      headings={["COLUMN 1", "COLUMN 2"]}
      hasVerticalHeadings
    />
    <StickerSheet.Body>
      <StickerSheet.Row>
        {/** @todo: Add column 1 + row 1 props */}
        {/* <FilterBar /> */}
      </StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
}
