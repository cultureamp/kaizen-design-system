import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { FilterTriggerButton } from "../../src/FilterDateRangePicker/components/Trigger"

export default {
  title:
    "Components/Filter Date Range Picker/Subcomponents/Filter Trigger Buttons",
  component: FilterTriggerButton,
  parameters: {
    docs: {
      description: {
        component: "This is a subcomponent - use FilterDateRangePicker.",
      },
    },
  },
} satisfies Meta<typeof FilterTriggerButton>

export const FilterTriggerButtonStory: StoryFn<
  typeof FilterTriggerButton
> = args => <FilterTriggerButton {...args} />
FilterTriggerButtonStory.storyName = "Filter Trigger Button"
FilterTriggerButtonStory.args = {
  label: "Label",
}
