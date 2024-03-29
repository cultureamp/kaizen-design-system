import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Badge } from "../index"

export default {
  title: "Components/Badge",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header headings={["Size", "Default", "Active", "Dot"]} />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Small">
          <Badge size="small" variant="default" reversed={isReversed}>
            3
          </Badge>
          <Badge size="small" variant="active" reversed={isReversed}>
            3
          </Badge>
          <Badge size="small" variant="dot" reversed={isReversed} />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Large">
          <Badge size="large" variant="default" reversed={isReversed}>
            3
          </Badge>
          <Badge size="large" variant="active" reversed={isReversed}>
            3
          </Badge>
          <Badge size="large" variant="dot" reversed={isReversed} />
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
  parameters: {
    textDirection: "rtl",
  },
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: {
    backgrounds: { default: "Purple 700" },
  },
  args: { isReversed: true },
}
