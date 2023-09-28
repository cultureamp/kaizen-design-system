import React from "react"
import { Meta } from "@storybook/react"
import { Label } from "~components/Label"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { FieldGroup } from "../index"

export default {
  title: "KAIO-Staging/FieldGroup",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const FormFieldContent = ({ id }: { id: string }): JSX.Element => (
  <>
    <Label htmlFor={`id--field-${id}`}>Email</Label>
    <input
      className="ms-6"
      placeholder="Native text input..."
      type="text"
      id={`id--field-${id}`}
    />
  </>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header headings={["Default", "Inline"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <div className="">
            <p className="inline">Inline content </p>
            <FieldGroup inline={true}>
              <Label htmlFor="id--field-2">Label</Label>
              <input
                className="ms-6"
                placeholder="Native text input..."
                type="text"
                id="id--field-2"
              />
            </FieldGroup>
          </div>
          <div>
            <p className="inline">Inline content </p>
            <FieldGroup>
              <Label htmlFor="id--field-1">Label</Label>
              <input
                className="ms-6"
                placeholder="Native text input..."
                type="text"
                id="id--field-2"
              />
            </FieldGroup>
          </div>
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
