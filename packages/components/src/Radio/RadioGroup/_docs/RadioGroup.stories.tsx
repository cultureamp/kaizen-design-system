import React from "react"
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
  render: args => (
    <RadioGroup {...args}>
      <RadioField
        labelText="Label"
        name="radio"
        value="radio-1"
        reversed={args?.reversed}
        selectedStatus
      />
      <RadioField
        labelText="Label"
        name="radio"
        value="radio-2"
        reversed={args?.reversed}
      />
      <RadioField
        labelText="Label"
        name="radio"
        value="radio-3"
        reversed={args?.reversed}
      />
    </RadioGroup>
  ),
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}
