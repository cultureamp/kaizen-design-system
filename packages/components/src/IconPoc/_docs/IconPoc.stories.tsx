import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { IconPocBasic } from "../index"

const meta = {
  title: "__POC/IconPoc",
  component: IconPocBasic,
  args: {
    name: "star"
  }
} satisfies Meta<typeof IconPocBasic>

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
