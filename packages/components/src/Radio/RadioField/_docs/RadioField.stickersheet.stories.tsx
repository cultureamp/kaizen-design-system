import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { RadioField } from "../index"

export default {
  title: "KAIO-staging/Radio controls/RadioField",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header headings={["", "Base", "Disabled"]} />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="On">
          <RadioField
            name="radio"
            labelText="Label"
            selectedStatus
            value="radio-1"
            reversed={isReversed}
          ></RadioField>
          <RadioField
            name="radio"
            labelText="Label"
            selectedStatus
            disabled
            value="radio-1"
            reversed={isReversed}
          ></RadioField>
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Off">
          <RadioField
            name="radio"
            labelText="Label"
            value="radio-1"
            reversed={isReversed}
          ></RadioField>
          <RadioField
            name="radio"
            labelText="Label"
            disabled
            value="radio-1"
            reversed={isReversed}
          ></RadioField>
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
