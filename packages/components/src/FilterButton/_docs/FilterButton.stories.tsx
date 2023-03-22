import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { FilterButton } from "../FilterButton"

export default {
  title: "Components/Filter/Filter Button",
  component: FilterButton,
  parameters: {
    docs: {
      description: {
        component: "To be used with Filter.",
      },
    },
  },
} as ComponentMeta<typeof FilterButton>

export const FilterButtonStory: ComponentStory<typeof FilterButton> = args => (
  <FilterButton {...args} />
)
FilterButtonStory.storyName = "Filter Button"
FilterButtonStory.args = {
  label: "Label",
}
