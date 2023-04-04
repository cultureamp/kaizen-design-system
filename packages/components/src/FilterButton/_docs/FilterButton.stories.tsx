import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { FilterButton } from "../FilterButton"

export default {
  tags: ["autodocs"],
  title: "Components/Filter/Filter Button",
  component: FilterButton,
  parameters: {
    docs: {
      description: {
        component: "To be used with Filter.",
      },
    },
  },
} satisfies Meta<typeof FilterButton>

export const FilterButtonStory: StoryFn<typeof FilterButton> = args => (
  <FilterButton {...args} />
)
FilterButtonStory.storyName = "Filter Button"
FilterButtonStory.args = {
  label: "Label",
}
