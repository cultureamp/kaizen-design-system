import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { RemoveableTag } from "../RemoveableTag"

const meta = {
  title: "Components/RemoveableTag",
  component: RemoveableTag,
  args: {
    children: "My removeable tag",
    removeButtonProps: {
      onClick: () => console.log("Clicked"),
      "aria-label": "remove tag icon",
    },
  },
} satisfies Meta<typeof RemoveableTag>

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
