import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import {
  CATEGORIES,
  SUB_CATEGORIES,
  SUB_COMPONENTS_FOLDER_NAME,
} from "../../../../storybook/constants"
import { FilterBaseButton } from "../../src/FilterDateRangePicker/components/Trigger/FilterBaseButton"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.datePicker}/Filter Date Range Picker/${SUB_COMPONENTS_FOLDER_NAME}/Filter Base Buttons`,
  component: FilterBaseButton,
  parameters: {
    docs: {
      description: {
        component:
          "This is a subcomponent - use FilterTriggerButton or RemovableFilterTriggerButton.",
      },
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof FilterBaseButton>

export const FilterBaseButtonStory: ComponentStory<
  typeof FilterBaseButton
> = args => <FilterBaseButton {...args} />
FilterBaseButtonStory.storyName = "Filter Base Button"
FilterBaseButtonStory.args = {
  children: "Label",
}
