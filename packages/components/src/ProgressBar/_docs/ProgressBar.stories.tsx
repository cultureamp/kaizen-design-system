import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { ProgressBar } from "../index"

const meta = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  args: {
    value: 25,
    max: 100,
    mood: "positive",
    isAnimating: false,
    label: "25%",
    isReversed: false,
  },
} satisfies Meta<typeof ProgressBar>

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

export const IsAnimating: Story = {
  args: { isAnimating: true },
}

export const ValueAndMax: Story = {
  render: () => (
    <div className="flex flex-col gap-16">
      <ProgressBar
        mood="positive"
        value={3}
        max={5}
        label="3/5"
        isAnimating={false}
        isReversed={false}
      />
      <ProgressBar
        mood="positive"
        value={60}
        max={100}
        label="60%"
        isAnimating={false}
        isReversed={false}
      />
    </div>
  ),
}

export const Reversed: Story = {
  parameters: { backgrounds: { default: "Purple 700" } },
  args: { isReversed: true },
}
