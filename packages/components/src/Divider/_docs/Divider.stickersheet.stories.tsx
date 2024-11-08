import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Divider } from "../index"

export default {
  title: "Components/Divider",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header headings={["Variant", "Example"]} />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Content">
          <Divider variant="content" isReversed={isReversed} />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Canvas">
          <Divider variant="canvas" isReversed={isReversed} />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Menu Separator">
          <Divider variant="menuSeparator" isReversed={isReversed} />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
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
