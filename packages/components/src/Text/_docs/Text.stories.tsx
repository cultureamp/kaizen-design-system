import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Text } from "../index"

const meta = {
  title: "Components/Text",
  component: Text,
  args: {
    variant: "body",
    children: "The quick brown fox jumps over the lazy dog.",
  },
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    color: "dark",
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}
