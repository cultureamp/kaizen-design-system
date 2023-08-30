import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { InlineNotification } from "../index"

export default {
  title: "Components/InlineNotification",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    /** @note: If you have multiple StickerSheets to display, you can add a `heading` */
    <StickerSheet isReversed={isReversed}>
      {/* @note: Header is optional */}
      <StickerSheet.Header headings={["COLUMN 1", "COLUMN 2"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          {/** @todo: Add column 1 + row 1 props */}
          <InlineNotification exampleRequiredString="One" isReversed={isReversed} />
          {/** @todo: Add column 2 + row 1 props */}
          <InlineNotification exampleRequiredString="Two" isReversed={isReversed} />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  )
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
