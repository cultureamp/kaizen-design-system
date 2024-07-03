import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { FilterButtonBase } from "~components/Filter/FilterButton/subcomponents/FilterButtonBase"
import { ButtonGroup } from ".."

const meta = {
  // Not to be nested until full KAIO migration
  // title: "Components/Button/Button Group",
  title: "Actions/ButtonGroup/v1",
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
