import React from 'react'
// import { type Meta, type StoryObj } from "storybook"
import { FilterButtonBase } from '~components/Filter/FilterButton/subcomponents/FilterButtonBase'
import { ButtonGroup } from '..'

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  args: { children: undefined },
} satisfies any

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <FilterButtonBase>First</FilterButtonBase>
      <FilterButtonBase>Last</FilterButtonBase>
    </ButtonGroup>
  ),
}
