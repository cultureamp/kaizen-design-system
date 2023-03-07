import React from "react"
import { Meta, ComponentStory } from "@storybook/react"
import { FilterTriggerButton } from "../../src/FilterDateRangePicker/components/Trigger"

export default {
  title:
    "Components/Date Picker/Filter Date Range Picker/Subcomponents/Filter Trigger Buttons",
  component: FilterTriggerButton,
  parameters: {
    docs: {
      description: {
        component: "This is a subcomponent - use FilterDateRangePicker.",
      },
    },
  },
} as Meta<typeof FilterTriggerButton>

export const FilterTriggerButtonStory: ComponentStory<
  typeof FilterTriggerButton
> = args => <FilterTriggerButton {...args} />
FilterTriggerButtonStory.storyName = "Filter Trigger Button"
FilterTriggerButtonStory.args = {
  label: "Label",
}
