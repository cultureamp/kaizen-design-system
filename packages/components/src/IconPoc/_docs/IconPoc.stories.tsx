import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { IconPocBase } from "../index"

const meta = {
  title: "Components/IconPoc",
  component: IconPocBase,
  args: {
    name: "star"
  }
} satisfies Meta<typeof IconPocBase>

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
