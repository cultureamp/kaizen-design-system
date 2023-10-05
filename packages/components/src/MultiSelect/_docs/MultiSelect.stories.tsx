import React, { useEffect, useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { MultiSelect, MultiSelectProps } from "../index"

const meta = {
  title: "Staging/Multi Select",
  component: MultiSelect,
  argTypes: {
    selectedValues: {
      options: ["None", "Single", "Multiple"],
      control: {
        type: "select",
        labels: {
          None: "new Set()",
          Single: 'new Set(["waffle"])',
          Multiple: 'new Set(["waffle", "pancakes"])',
        },
      },
      mapping: {
        None: new Set(),
        Single: new Set(["waffle"]),
        Multiple: new Set(["waffle", "pancakes"]),
      },
    },
  },
  args: {
    label: "Breakfast order",
    selectedValues: new Set(),
    isOpen: false,
    items: [
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
    const [selectedValues, setSelectedValues] = useState<
      MultiSelectProps["selectedValues"]
    >(new Set(args.selectedValues))
    const [isOpen, setIsOpen] = useState<boolean>(args.isOpen)

    useEffect(() => {
      setIsOpen(args.isOpen)
    }, [args.isOpen])

    useEffect(() => {
      setSelectedValues(args.selectedValues)
    }, [args.selectedValues])

    return (
      <MultiSelect
        {...args}
        selectedValues={selectedValues}
        onSelectedValuesChange={setSelectedValues}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
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

const sourceCodeItems = `
<MultiSelect
  items={[
    { label: "Pancakes", value: "pancakes" },
    { label: "Waffles", value: "waffles" },
    { label: "Toastie", value: "toastie" },
  ]}
  {...props}
/>
`

export const Items: Story = {
  ...MultiSelectTemplate,
  parameters: { docs: { source: { code: sourceCodeItems } } },
}

const sourceCodeSelectedValues = `
const [selectedValues, setSelectedValues] = useState<MultiSelectProps["selectedValues"]>(new Set(["waffle"]))

return (
  <MultiSelect
    items={[
      { label: "Pancakes", value: "pancakes" },
      { label: "Waffles", value: "waffles" },
      { label: "Toastie", value: "toastie" },
    ]}
    selectedValues={selectedValues}
    onSelectedValuesChange={setSelectedValues}
    {...props}
  />
)
`

export const SelectedValues: Story = {
  ...MultiSelectTemplate,
  args: {
    selectedValues: new Set(["waffle"]),
  },
  parameters: { docs: { source: { code: sourceCodeSelectedValues } } },
}

const sourceCodeOpenState = `
const [isOpen, setIsOpen] = useState<boolean>(false)

return (
  <MultiSelect
    isOpen={isOpen}
    onOpenChange={setIsOpen}
    {...props}
  />
)
`

export const OpenState: Story = {
  ...MultiSelectTemplate,
  parameters: { docs: { source: { code: sourceCodeOpenState } } },
}
