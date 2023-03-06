import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
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
} as ComponentMeta<typeof FilterBaseTooltipButton>

export const FilterBaseTooltipButtonStory: ComponentStory<
  typeof FilterBaseTooltipButton
> = args => <FilterBaseTooltipButton {...args} />
FilterBaseTooltipButtonStory.storyName = "Filter Base Tooltip Button"
FilterBaseTooltipButtonStory.args = {
  children: "Label",
  tooltipText: "Tooltip",
}
