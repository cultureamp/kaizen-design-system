import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { BadgeAnimated } from "@kaizen/draft-badge"
import { Badge } from "../index"

const meta = {
  title: "KAIO-staging/Badge",
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
