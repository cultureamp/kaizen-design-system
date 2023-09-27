// import React from "react"
import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Slider } from "../index"

const meta = {
  title: "KAIO-staging/Slider",
  component: Slider,
  args: {},
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
  render: () => (
    <div className="flex flex-col gap-16">
      <Slider labelText="Default" variant="default" />
      <Slider labelText="Prominent" variant="prominent" />
    </div>
  ),
}

export const MinMaxLabels: Story = {
  render: () => (
    <div className="flex flex-col gap-16">
      <Slider labelText="Minimum" minLabel="Minimum" variant="default" />
      <Slider labelText="Maximum" maxLabel="Maximum" variant="default" />
      <Slider
        labelText="Min Max Labels"
        minLabel="Minimum"
        maxLabel="Maximum"
        variant="default"
      />
    </div>
  ),
}

export const LabelPosition: Story = {
  render: () => (
    <div className="flex flex-col gap-16">
      <Slider labelText="Inline Label Position" labelPosition="inline" />
      <Slider labelText="Block Label Position" labelPosition="block" />
    </div>
  ),
}
