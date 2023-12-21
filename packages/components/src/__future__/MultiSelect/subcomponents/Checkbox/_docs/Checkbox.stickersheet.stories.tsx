import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Checkbox, CheckedStatus } from "../index"

export default {
  title: "Components/MultiSelect/Checkbox",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const STATUS_ROWS = [
  { title: "Unchecked", status: "unchecked" },
  { title: "Checked", status: "checked" },
  { title: "Indeterminate", status: "indeterminate" },
] satisfies Array<{ title: string; status: CheckedStatus }>

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <StickerSheet>
      <StickerSheet.Header
        headings={["Default", "Hover", "Focus"]}
        hasVerticalHeadings
      />
      <StickerSheet.Body>
        {STATUS_ROWS.map(({ title, status }) => (
          <StickerSheet.Row key={title} rowTitle={title}>
            <Checkbox
              aria-label="Read only label"
              checkedStatus={status}
              readOnly
            />
            <Checkbox
              aria-label="Hover label"
              classNameOverride="story__checkbox--hover"
              checkedStatus={status}
              readOnly
            />
            <Checkbox
              aria-label="Focus label"
              classNameOverride="story__checkbox--focus"
              checkedStatus={status}
              readOnly
            />
          </StickerSheet.Row>
        ))}
      </StickerSheet.Body>
    </StickerSheet>
  ),
  parameters: {
    pseudo: {
      // We need to use `classNameOverride` to target the container div
      // as data-attributes are passed into the input.
      hover: ".story__checkbox--hover",
      focusWithin: ".story__checkbox--focus",
    },
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}
