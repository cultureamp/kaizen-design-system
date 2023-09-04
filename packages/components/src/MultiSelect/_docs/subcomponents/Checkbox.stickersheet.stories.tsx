import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { StickerSheet } from "~storybook/components/StickerSheet"
import { Checkbox, CheckedStatus } from "../../subcomponents/Checkbox"

const meta = {
  title: "Components/MultiSelect/Checkbox",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

const STATUS_ROWS = [
  { title: "Unchecked", status: "unchecked" },
  { title: "Checked", status: "checked" },
  { title: "Indeterminate", status: "indeterminate" },
] satisfies Array<{ title: string; status: CheckedStatus }>

const StickerSheetTemplate: Story = {
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
}

export const StickerSheetDefault = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}
