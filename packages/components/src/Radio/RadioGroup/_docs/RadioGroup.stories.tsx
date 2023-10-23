import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { RadioField } from "~components/Radio/RadioField"
import { RadioGroup } from "../index"

const meta = {
  title: "Components/Radio controls/RadioGroup",
  component: RadioGroup,
  args: {
    labelText: "Radio group",
  },
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => {
    const [selected, setSelected] = useState("radio-1")
    return (
      <RadioGroup {...args}>
        <RadioField
          labelText="Label 1"
          name="radio-group"
          value="radio-value-1"
          reversed={args?.reversed}
          onChange={event => {
            setSelected(event.target.value)
          }}
          selectedStatus={selected === "radio-1"}
        />
        <RadioField
          labelText="Label 2"
          name="radio-group"
          value="radio-value-2"
          reversed={args?.reversed}
          onChange={event => {
            setSelected(event.target.value)
          }}
          selectedStatus={selected === "radio-2"}
        />
        <RadioField
          labelText="Label 3"
          name="radio-group"
          value="radio-value-3"
          reversed={args?.reversed}
          onChange={event => {
            setSelected(event.target.value)
          }}
          selectedStatus={selected === "radio-3"}
        />
      </RadioGroup>
    )
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}
