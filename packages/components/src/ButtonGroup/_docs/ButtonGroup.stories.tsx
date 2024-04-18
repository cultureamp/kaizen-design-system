import React from "react"
import { FilterButtonBase } from "~components/Filter/FilterButton/subcomponents/FilterButtonBase"
import { Meta, StoryObj } from "~storybook/index"
import { ButtonGroup } from ".."

const meta = {
  // Not to be nested until full KAIO migration
  // title: "Components/Button/Button Group",
  title: "Components/Button Group",
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
