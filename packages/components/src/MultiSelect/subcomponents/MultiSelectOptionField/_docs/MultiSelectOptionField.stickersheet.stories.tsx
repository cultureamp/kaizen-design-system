import React from "react"
import { action } from "@storybook/addon-actions"
import { Meta, StoryObj } from "@storybook/react"
import { StickerSheet } from "~storybook/components/StickerSheet"
import { MultiSelectOptionField, MultiSelectOptionFieldProps } from "../index"

const meta = {
  title: "Components/MultiSelect/MultiSelectOptionField",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta<typeof MultiSelectOptionField>

export default meta

type Story = StoryObj<typeof meta>

const STATUS_ROWS = [
  { title: "Unchecked", status: "unchecked" },
  { title: "Checked", status: "checked" },
  { title: "Indeterminate", status: "indeterminate" },
] satisfies Array<{
  title: string
  status: MultiSelectOptionFieldProps["checkedStatus"]
}>

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
            <MultiSelectOptionField
              id="jaffle--id"
              onChange={action("jaffle clicked")}
              option={{
                label: "Jaffle",
                value: "jaffle",
              }}
              checkedStatus={status}
            />
            <MultiSelectOptionField
              id="waffle--id"
              onChange={action("waffle clicked")}
              option={{
                label: "Waffle",
                value: "waffle",
              }}
              classNameOverride="story__multi-select-option-field--hover"
              checkedStatus={status}
            />
            <MultiSelectOptionField
              id="flapjack--id"
              onChange={action("flapjack clicked")}
              option={{
                label: "Flapjack",
                value: "flapjack",
              }}
              classNameOverride="story__multi-select-option-field--focus"
              checkedStatus={status}
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
