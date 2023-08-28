import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "../../../../../storybook/components/StickerSheet"
import { LabelledMessage } from "../index"

export default {
  title: "Components/Utilities/Labelled Message",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory["render"] = () => (
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

export const StickerSheetDefault: StickerSheetStory = {
  render: StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}
