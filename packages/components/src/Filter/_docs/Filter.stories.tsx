import React, { useState } from "react"
import { action } from "@storybook/addon-actions"
import { Meta, StoryObj } from "@storybook/react"
import { FilterButton, FilterButtonRemovable } from "~components/FilterButton"
import { Filter, FilterContents } from ".."

const meta = {
  title: "Components/Filter Base",
  component: Filter,
  argTypes: {
    children: { control: "disabled" },
    isOpen: { control: "disabled" },
    setIsOpen: { control: "disabled" },
    renderTrigger: { control: "disabled" },
    onMount: { control: "disabled" },
  },
  args: {
    children: <FilterContents>Filter Contents</FilterContents>,
    renderTrigger: (triggerProps): JSX.Element => (
      <FilterButton label="Label" {...triggerProps} />
    ),
    isOpen: false,
  },
} satisfies Meta<typeof Filter>

export default meta

type Story = StoryObj<typeof meta>

const FilterTemplate: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen)
    return <Filter {...args} isOpen={isOpen} setIsOpen={setIsOpen} />
  },
}

export const SimpleFilter: Story = {
  ...FilterTemplate,
}

export const RemovableFilter: Story = {
  ...FilterTemplate,
  args: {
    renderTrigger: (triggerProps): JSX.Element => (
      <FilterButtonRemovable
        triggerButtonProps={{
          label: "Label",
          ...triggerProps,
        }}
        removeButtonProps={{
          onClick: action("remove button clicked"),
        }}
      />
    ),
  },
}
