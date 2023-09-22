import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { MultiSelectOptions } from "../index"

const meta = {
  title: "Components/MultiSelect/MultiSelectOptions",
  component: MultiSelectOptions,
  args: {
    id: "id--multi-select-options",
    selectedValues: new Set(["pancakes"]),
    options: [
      {
        label: "Pancakes",
        value: "pancakes",
      },
      {
        label: "Waffle",
        value: "waffle",
      },
      {
        label: "Toastie",
        value: "toastie",
      },
    ],
  },
} satisfies Meta<typeof MultiSelectOptions>

export default meta

type Story = StoryObj<typeof meta>

const MultiSelectOptionsTemplate: Story = {
  render: args => {
    const [selectedValues, setSelectedValues] = useState<Set<React.Key>>(
      args.selectedValues
    )
    return (
      <MultiSelectOptions
        {...args}
        selectedValues={selectedValues}
        onChange={setSelectedValues}
      />
    )
  },
}

export const Playground: Story = {
  ...MultiSelectOptionsTemplate,
  args: {
    id: "id--jaffle",
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}
