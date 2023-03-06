import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import {
  SUB_CATEGORIES,
  SUB_COMPONENTS_FOLDER_NAME,
} from "../../../../storybook/constants"
import { FilterTriggerButton } from "../../src/FilterDateRangePicker/components/Trigger"

export default {
  title: `Components/${SUB_CATEGORIES.datePicker}/Filter Date Range Picker/${SUB_COMPONENTS_FOLDER_NAME}/Filter Trigger Buttons`,
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
