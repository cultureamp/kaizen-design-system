// import React from "react"
import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Slider } from "../index"

const meta = {
  title: "KAIO-staging/Slider",
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
    <div className="flex flex-col gap-16">
      <Slider {...args} labelText="Default" variant="default" />
      <Slider {...args} labelText="Prominent" variant="prominent" />
    </div>
  ),
}

export const MinMaxLabels: Story = {
  render: () => (
    <Slider
      labelText="Min Max Labels"
      minLabel="Minimum"
      maxLabel="Maximum"
      variant="default"
    />
  ),
}

export const LabelPosition: Story = {
  render: args => (
    <div className="flex flex-col gap-16">
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
