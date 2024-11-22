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
    <StickerSheet isReversed={isReversed} title="Divider" layout="stretch">
      <StickerSheet.Row header="Content">
        <StickerSheet.Cell className="grid items-center">
          <Divider variant="content" isReversed={isReversed} />
        </StickerSheet.Cell>
      </StickerSheet.Row>
      <StickerSheet.Row header="Canvas">
        <StickerSheet.Cell className="grid items-center">
          <Divider variant="canvas" isReversed={isReversed} />
        </StickerSheet.Cell>
      </StickerSheet.Row>
      <StickerSheet.Row header="Menu Separator">
        <StickerSheet.Cell className="grid items-center">
          <Divider variant="menuSeparator" isReversed={isReversed} />
        </StickerSheet.Cell>
      </StickerSheet.Row>
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
