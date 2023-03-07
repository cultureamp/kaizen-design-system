import React from "react"
import { Meta, ComponentStory, Story } from "@storybook/react"
import { StickerSheet } from "../../../../storybook/components/StickerSheet"
import { FilterBaseButton } from "../../src/FilterDateRangePicker/components/Trigger/FilterBaseButton"

export default {
  title:
    "Components/Date Picker/Filter Date Range Picker/Subcomponents/Filter Base Buttons",
  component: FilterBaseButton,
  parameters: {
    docs: {
      description: {
        component:
          "This is a subcomponent - use FilterTriggerButton or RemovableFilterTriggerButton.",
      },
    },
  },
} as Meta<typeof FilterBaseButton>

export const FilterBaseButtonStory: ComponentStory<
  typeof FilterBaseButton
> = args => <FilterBaseButton {...args} />
FilterBaseButtonStory.storyName = "Filter Base Button"
FilterBaseButtonStory.args = {
  children: "Label",
}

const StickerSheetTemplate: Story = () => (
  <StickerSheet heading="Filter Base Button">
    <StickerSheet.Header headings={["Base", "Hover", "Active", "Focus"]} />
    <StickerSheet.Body>
      <StickerSheet.Row>
        <FilterBaseButton>Label</FilterBaseButton>
        <FilterBaseButton classNameOverride="story__filter-button--hover">
          Label
        </FilterBaseButton>
        <FilterBaseButton classNameOverride="story__filter-button--active">
          Label
        </FilterBaseButton>
        <FilterBaseButton classNameOverride="story__filter-button--focus">
          Label
        </FilterBaseButton>
      </StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
