import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { InputRange } from "../index"

export default {
  title: "Components/InputRange",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Default">
          <InputRange id="inputRange" minLabel="Minimum" maxLabel="Maximum" />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Controlled value">
          <InputRange
            id="inputRange"
            minLabel="Minimum"
            maxLabel="Maximum"
            value={2}
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Uncontrolled default value">
          <InputRange
            id="inputRange"
            minLabel="Minimum"
            maxLabel="Maximum"
            defaultValue={2}
          />
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

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: { textDirection: "rtl" },
}
