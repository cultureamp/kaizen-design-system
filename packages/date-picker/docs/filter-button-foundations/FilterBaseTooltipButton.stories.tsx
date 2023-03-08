import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { FilterBaseTooltipButton } from "../../src/FilterDateRangePicker/components/Trigger/FilterBaseTooltipButton"

export default {
  title:
    "Components/Date Picker/Filter Date Range Picker/Subcomponents/Filter Base Buttons",
  component: FilterBaseTooltipButton,
  parameters: {
    docs: {
      description: {
        component:
          "This is a subcomponent - use FilterTriggerButton or RemovableFilterTriggerButton.",
      },
    },
  },
} as Meta<typeof FilterBaseTooltipButton>

export const FilterBaseTooltipButtonStory: StoryFn<
  typeof FilterBaseTooltipButton
> = args => <FilterBaseTooltipButton {...args} />
FilterBaseTooltipButtonStory.storyName = "Filter Base Tooltip Button"
FilterBaseTooltipButtonStory.args = {
  children: "Label",
  tooltipText: "Tooltip",
}
