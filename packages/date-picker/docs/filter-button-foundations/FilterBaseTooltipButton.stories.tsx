import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import {
  CATEGORIES,
  SUB_CATEGORIES,
  SUB_COMPONENTS_FOLDER_NAME,
} from "../../../../storybook/constants"
import { FilterBaseTooltipButton } from "../../src/FilterDateRangePicker/components/Trigger/FilterBaseTooltipButton"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.datePicker}/Filter Date Range Picker/${SUB_COMPONENTS_FOLDER_NAME}/Filter Base Buttons`,
  component: FilterBaseTooltipButton,
  parameters: {
    docs: {
      description: {
        component:
          "This is a subcomponent - use FilterTriggerButton or RemovableFilterTriggerButton.",
      },
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof FilterBaseTooltipButton>

export const FilterBaseTooltipButtonStory: ComponentStory<
  typeof FilterBaseTooltipButton
> = args => <FilterBaseTooltipButton {...args} />
FilterBaseTooltipButtonStory.storyName = "Filter Base Tooltip Button"
FilterBaseTooltipButtonStory.args = {
  children: "Label",
  tooltipText: "Tooltip",
}
