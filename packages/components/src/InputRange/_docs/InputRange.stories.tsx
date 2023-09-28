import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { InputRange } from "../index"

const meta = {
  title: "KAIO-staging/InputRange",
  component: InputRange,
  args: {
    id: "inputRange",
    minLabel: "Min",
    maxLabel: "Max",
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
    <div className="flex flex-col gap-16">
      <InputRange id="inputRange" minLabel="Minimum" maxLabel="Maximum" />
    </div>
  ),
}

export const Range: Story = {
  render: () => (
    <div className="flex flex-col gap-16">
      <InputRange
        id="inputRange"
        minLabel="Minimum"
        maxLabel="Maximum"
        min={10}
        max={100}
      />
    </div>
  ),
}
