import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import { LabelledMessage } from "../index"

export default {
  title: "Components/Utilities/Labelled Message",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta<typeof LabelledMessage>

const StickerSheetTemplate: StoryFn = () => (
  <StickerSheet>
    <StickerSheet.Body>
      <StickerSheet.Row rowTitle="LTR" dir="ltr">
        <LabelledMessage label="Label" message="Custom message here" />
      </StickerSheet.Row>
      <StickerSheet.Row rowTitle="RTL" dir="rtl">
        <LabelledMessage label="Label" message="Custom message here" />
      </StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
