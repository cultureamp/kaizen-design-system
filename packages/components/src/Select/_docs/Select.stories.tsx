import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Label } from "~components/Label"
import { AsyncSelect, Select } from "../index"

const OPTIONS = [
  { value: "Mindy", label: "Mindy" },
  { value: "Jaime", label: "Jaime" },
  { value: "Rafa", label: "Rafa" },
]

const DISABLED_OPTIONS = [
  { value: "Mindy", label: "Mindy" },
  { value: "Jaime", label: "Jaime", isDisabled: true },
  { value: "Rafa", label: "Rafa" },
]

const GROUPED_OPTIONS = [
  {
    label: "Colours",
    options: [
      { value: "blue", label: "blue" },
      { value: "red", label: "red" },
      { value: "green", label: "green" },
    ],
  },
  {
    label: "Flavours",
    options: [
      { value: "vanilla", label: "Vanilla" },
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
    ],
  },
]

const meta = {
  title: "Components/Select",
  component: Select,
  args: {
    options: OPTIONS,
    label: "Select",
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Placeholders do not pass color contrast
            id: "color-contrast",
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const MultiSelect: Story = {
  args: { isMulti: true },
}

export const Grouped: Story = {
  args: { options: GROUPED_OPTIONS },
}

export const Disabled: Story = {
  args: { options: DISABLED_OPTIONS },
}

export const Async: Story = {
  render: args => {
    const filterNames = (inputValue: string): typeof OPTIONS =>
      OPTIONS.filter(({ label }) =>
        label.toLowerCase().includes(inputValue.toLowerCase())
      )

    const promiseOptions = (
      inputValue: string
    ): Promise<Array<{ value: string; label: string }>> =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(filterNames(inputValue))
        }, 1000)
      })

    return (
      <>
        <Label id="asyncSelectLabel" labelText="Type to see options" />
        <AsyncSelect
          aria-labelledby="asyncSelectLabel"
          loadOptions={promiseOptions}
          {...args}
        />
      </>
    )
  },
  args: {
    placeholder: "Placeholder",
  },
}
