import { Meta, StoryObj } from "@storybook/react"
import * as CardV1Stories from "../../v1/_docs/Card.stories"
import { Card } from "../index"

const meta = {
  title: "Containers/Card/v2",
  component: Card,
  args: {
    children: "This is a default container",
  },
} satisfies Meta<typeof Card>

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

export const Variants: Story = CardV1Stories.Variants

export const Elevation: Story = CardV1Stories.Elevation
