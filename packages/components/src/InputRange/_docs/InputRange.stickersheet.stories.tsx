import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { InputRange } from "../index"

export default {
  title: "KAIO-staging/InputRange",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
    a11y: {
      config: {
        rules: [
          {
            // Built with no label on purpose, to be used within `Slider` where label is present
            id: "label",
            enabled: false,
          },
          {
            // Built with no label on purpose, to be used within `Slider` where label is present
            id: "label-title-only",
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <StickerSheet>
      <StickerSheet.Body>
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
            id="inputRange2"
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

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: { textDirection: "rtl" },
}
