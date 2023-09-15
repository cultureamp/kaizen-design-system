import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { MultiSelect } from "../index"

export default {
  title: "Components/MultiSelect",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet
      isReversed={isReversed}
      heading="MultiSelect"
      className="w-full"
    >
      <StickerSheet.Header headings={["Closed", "Open"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <MultiSelect label="Jalapeno" />
          {/* @TODO: Update this when open works wew >:] */}
          <MultiSelect label="Jalapeno" />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
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
