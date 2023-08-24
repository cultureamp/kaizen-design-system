import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import { Checkbox } from "../subcomponents"

const meta = {
  title: "Components/MultiSelect/Checkbox",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta<typeof Checkbox>

export default meta

const StickerSheetTemplate: StoryObj<typeof meta> = {
  render: () => (
    <StickerSheet>
      <StickerSheet.Header
        headings={["Default", "Hover", "Focus"]}
        hasVerticalHeadings
      />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Unchecked">
          <Checkbox checkedStatus="unchecked" />
          <Checkbox
            classNameOverride="story__checkbox--hover"
            checkedStatus="unchecked"
          />
          <Checkbox
            classNameOverride="story__checkbox--focus"
            checkedStatus="unchecked"
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Checked">
          <Checkbox checkedStatus="checked" />
          <Checkbox
            classNameOverride="story__checkbox--hover"
            checkedStatus="checked"
          />
          <Checkbox
            classNameOverride="story__checkbox--focus"
            checkedStatus="checked"
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Indeterminate">
          <Checkbox checkedStatus="indeterminate" />
          <Checkbox
            classNameOverride="story__checkbox--hover"
            checkedStatus="indeterminate"
          />
          <Checkbox
            classNameOverride="story__checkbox--focus"
            checkedStatus="indeterminate"
          />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
}

export const StickerSheetDefault = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}
