import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import {
  CATEGORIES,
  SUB_CATEGORIES,
  SUB_COMPONENTS_FOLDER_NAME,
} from "../../../../../../../storybook/constants"
import { FilterButtonWithTooltip } from "../../../components/_primitives/FilterButtonWithTooltip"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.filter}/${SUB_COMPONENTS_FOLDER_NAME}/Base Buttons/Filter Button With Tooltip`,
  component: FilterButtonWithTooltip,
  parameters: {
    docs: {
      description: {
        component:
          "This is a subcomponent - use FilterTriggerButton or RemovableFilterTriggerButton.",
      },
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof FilterButtonWithTooltip>

export const FilterButtonWithTooltipStory: ComponentStory<
  typeof FilterButtonWithTooltip
> = args => <FilterButtonWithTooltip {...args} />
FilterButtonWithTooltipStory.storyName = "Filter Base Tooltip Button"
FilterButtonWithTooltipStory.args = {
  children: "Label",
  tooltipText: "Tooltip",
}
