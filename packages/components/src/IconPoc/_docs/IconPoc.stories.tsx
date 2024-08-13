import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { IconPoc } from "../index"

const meta = {
  title: "Components/IconPoc",
  component: IconPoc,
  args: {
    name: "star"
  }
} satisfies Meta<typeof IconPoc>

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
