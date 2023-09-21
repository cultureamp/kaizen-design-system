import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { MultiSelect } from "../index"

const meta = {
  title: "Components/MultiSelect",
  component: MultiSelect,
  args: {
    label: "Jalapeno",
    selectedValues: new Set(),
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
} satisfies Meta<typeof MultiSelect>

export default meta

type Story = StoryObj<typeof meta>

const MultiSelectTemplate: Story = {
  render: args => {
    const [selectedValues, setSelectedValues] = useState<Set<React.Key>>(
      new Set()
    )

    return (
      <MultiSelect
        {...args}
        selectedValues={selectedValues}
        onSelectedValuesChange={setSelectedValues}
      />
    )
  },
}

export const Playground: Story = {
  ...MultiSelectTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}
