import React from "react"
import { Meta } from "@storybook/react"
import { Label } from "~components/Label"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { FieldGroup } from "../index"

export default {
  title: "Components/FieldGroup",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const FieldGroupTemplate = ({
  id,
  inline = false,
}: {
  id: string
  inline?: boolean
}): JSX.Element => (
  <div>
    <FieldGroup inline={inline} classNameOverride="mr-6">
      <Label htmlFor={`id--field-${id}`}>Email</Label>
      <input
        className="border border-gray-500"
        placeholder="Native text input..."
        type="text"
        id="id--field-2"
      />
    </FieldGroup>
    <FieldGroup inline={inline}>
      <Label htmlFor={`id--field-${id}`}>Username</Label>
      <input
        className="border border-gray-500"
        placeholder="Native text input..."
        type="text"
        id="id--field-2"
      />
    </FieldGroup>
  </div>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header headings={["Default", "Inline"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <FieldGroupTemplate id="1" />
          <FieldGroupTemplate id="2" inline={true} />
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
