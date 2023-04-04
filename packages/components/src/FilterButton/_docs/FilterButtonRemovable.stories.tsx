import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { FilterButtonRemovable } from "../FilterButtonRemovable"

export default {
  tags: ["autodocs"],
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
} satisfies Meta<typeof FilterButtonRemovable>

export const FilterButtonRemovableStory: StoryFn<
  typeof FilterButtonRemovable
> = args => <FilterButtonRemovable {...args} />
FilterButtonRemovableStory.storyName = "Filter Button Removable"
FilterButtonRemovableStory.args = {
  triggerButtonProps: { label: "Label" },
}
