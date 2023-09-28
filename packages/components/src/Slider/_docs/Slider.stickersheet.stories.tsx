import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Slider } from "../index"

export default {
  title: "KAIO-staging/Slider",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
    args: {
      labelText: "Slider label",
    },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <StickerSheet>
      <StickerSheet.Header
        headings={[
          "Default",
          "Default (Disabled)",
          "Prominant",
          "Prominant (Disabled)",
        ]}
        hasVerticalHeadings
      />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Label Left">
          <Slider
            description="Example Description"
            labelText="Label"
            minLabel="Minimum"
            maxLabel="Maximum"
          />
          <Slider
            description="Example Description"
            labelText="Label"
            minLabel="Minimum"
            maxLabel="Maximum"
            disabled
          />
          <Slider
            description="Example Description"
            labelText="Label"
            minLabel="Minimum"
            maxLabel="Maximum"
            variant="prominent"
          />
          <Slider
            description="Example Description"
            labelText="Label"
            minLabel="Minimum"
            maxLabel="Maximum"
            variant="prominent"
            disabled
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Label Top">
          <Slider
            description="Example Description"
            labelText="Label"
            minLabel="Minimum"
            maxLabel="Maximum"
            labelPosition="block"
          />
          <Slider
            description="Example Description"
            labelText="Label"
            minLabel="Minimum"
            maxLabel="Maximum"
            labelPosition="block"
            disabled
          />
          <Slider
            description="Example Description"
            labelText="Label"
            minLabel="Minimum"
            maxLabel="Maximum"
            labelPosition="block"
            variant="prominent"
          />
          <Slider
            description="Example Description"
            labelText="Label"
            minLabel="Minimum"
            maxLabel="Maximum"
            variant="prominent"
            labelPosition="block"
            disabled
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
