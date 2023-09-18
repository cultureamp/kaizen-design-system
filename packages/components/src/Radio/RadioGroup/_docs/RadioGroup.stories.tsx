import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { RadioField } from "~components/Radio/RadioField"
import { RadioGroup } from "../index"

const meta = {
  title: "KAIO-staging/Radio controls/RadioGroup",
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
          labelText="Label"
          name="radio"
          value="radio-1"
          reversed={args?.reversed}
          onChange={event => {
            setSelected(event.target.value)
          }}
          selectedStatus={selected === "radio-1"}
        />
        <RadioField
          labelText="Label"
          name="radio"
          value="radio-2"
          reversed={args?.reversed}
          onChange={event => {
            setSelected(event.target.value)
          }}
          selectedStatus={selected === "radio-2"}
        />
        <RadioField
          labelText="Label"
          name="radio"
          value="radio-3"
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
