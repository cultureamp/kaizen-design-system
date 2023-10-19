import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { BadgeAnimated } from "~components/Badge"
import { Badge } from "../index"

const meta = {
  title: "Components/Badge",
  component: Badge,
  args: {
    children: "3",
  },
} satisfies Meta<typeof Badge>

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

// Adding story just for development testing/knowing it exists
// Not particularly useful to show on docs cause the animation is too quick
export const Animated: Story = {
  render: props => <BadgeAnimated {...props} />,
}
