import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { FilterTriggerButton } from "../../components/FilterTriggerButton"

export default {
  title: "Components/Filter/Subcomponents/Filter Buttons",
  component: FilterTriggerButton,
  parameters: {
    docs: {
      description: {
        component: "This is a subcomponent - use FilterDateRangePicker.",
      },
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof FilterTriggerButton>

export const FilterTriggerButtonStory: ComponentStory<
  typeof FilterTriggerButton
> = args => <FilterTriggerButton {...args} />
FilterTriggerButtonStory.storyName = "Filter Trigger Button"
FilterTriggerButtonStory.args = {
  label: "Label",
}
