import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import isChromatic from "chromatic"
import { Tag } from "~components/__future__/Tag"
import { Focusable } from "../index"

const meta = {
  title: "Overlays/Focusable/v3",
  component: Focusable,
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof Focusable>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => (
    <Focusable {...args}>
      <Tag>Name</Tag>
    </Focusable>
  ),
}
