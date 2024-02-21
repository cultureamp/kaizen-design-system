// import React from "react"
import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Slider } from "../index"

const meta = {
  title: "Components/Slider",
  component: Slider,
  args: {
    labelText: <>Slider</>,
    minLabel: "Min",
    maxLabel: "Max",
  },
} satisfies Meta<typeof Slider>

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

export const Variants: Story = {
  render: args => (
    <div className="kz-flex kz-flex-col kz-gap-16">
      <Slider {...args} labelText="Default" variant="default" />
      <Slider {...args} labelText="Prominent" variant="prominent" />
    </div>
  ),
}

export const MinMaxLabels: Story = {}

export const LabelPosition: Story = {
  render: args => (
    <div className="kz-flex kz-flex-col kz-gap-16">
      <Slider
        {...args}
        labelText="Inline Label Position"
        labelPosition="inline"
      />
      <Slider
        {...args}
        labelText="Block Label Position"
        labelPosition="block"
      />
    </div>
  ),
}
