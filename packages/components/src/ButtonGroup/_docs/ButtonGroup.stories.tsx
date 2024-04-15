import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { FilterButtonBase } from "~components/Filter/FilterButton/subcomponents/FilterButtonBase"
import { ButtonGroup } from ".."

const meta = {
  // Not to be nested until full KAIO migration
  // title: "Tier 2/Button/Button Group",
  title: "Tier 2/Button Group",
  component: ButtonGroup,
  args: { children: undefined },
} satisfies Meta<typeof ButtonGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <ButtonGroup {...args}>
      <FilterButtonBase>First</FilterButtonBase>
      <FilterButtonBase>Last</FilterButtonBase>
    </ButtonGroup>
  ),
}
