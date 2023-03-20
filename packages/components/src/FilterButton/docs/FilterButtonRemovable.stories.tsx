import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { FilterButtonRemovable } from "../../FilterButtonRemovable"

export default {
  title: "Components/Filter/Filter Button",
  component: FilterButtonRemovable,
  parameters: {
    docs: {
      description: {
        component:
          "Filter Button with a remove button. To be used with Filter.",
      },
    },
  },
} as ComponentMeta<typeof FilterButtonRemovable>

export const FilterButtonRemovableStory: ComponentStory<
  typeof FilterButtonRemovable
> = args => <FilterButtonRemovable {...args} />
FilterButtonRemovableStory.storyName = "Filter Button Removable"
FilterButtonRemovableStory.args = {
  triggerButtonProps: { label: "Label" },
}
