import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { InputRange } from "../index"

const meta = {
  title: "Components/Inputs/InputRange",
  component: InputRange,
  args: {
    id: "inputRange",
    minLabel: "Min",
    maxLabel: "Max",
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Built with no label on purpose, to be used within `Slider` where label is present
            id: "label",
            enabled: false,
          },
          {
            // Built with no label on purpose, to be used within `Slider` where label is present
            id: "label-title-only",
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta<typeof InputRange>

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

export const Labels: Story = {
  render: () => (
    <div className="kz-flex kz-flex-col kz-gap-16">
      <InputRange id="inputRange" minLabel="Minimum" maxLabel="Maximum" />
    </div>
  ),
}

export const Range: Story = {
  render: () => (
    <div className="kz-flex kz-flex-col kz-gap-16">
      <InputRange
        id="inputRangeRange"
        minLabel="Minimum"
        maxLabel="Maximum"
        min={10}
        max={100}
      />
    </div>
  ),
}
