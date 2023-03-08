import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { StickerSheet } from "../../../../storybook/components/StickerSheet"
import { FilterBaseButton } from "../../src/FilterDateRangePicker/components/Trigger/FilterBaseButton"
import { FilterBaseTooltipButton } from "../../src/FilterDateRangePicker/components/Trigger/FilterBaseTooltipButton"

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

export const FilterBaseButtonStory: StoryFn<typeof FilterBaseButton> = args => (
  <FilterBaseButton {...args} />
)
FilterBaseButtonStory.storyName = "Filter Base Button"
FilterBaseButtonStory.args = {
  children: "Label",
}

export const FilterBaseTooltipButtonStory: StoryFn<
  typeof FilterBaseTooltipButton
> = args => <FilterBaseTooltipButton {...args} />
FilterBaseTooltipButtonStory.storyName = "Filter Base Tooltip Button"
FilterBaseTooltipButtonStory.args = {
  children: "Label",
  tooltipText: "Tooltip",
}

const StickerSheetTemplate: StoryFn = () => (
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
