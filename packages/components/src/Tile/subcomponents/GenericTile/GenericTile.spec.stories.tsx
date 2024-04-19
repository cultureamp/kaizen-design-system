import React from "react"
import { expect, within, userEvent, Meta, StoryObj } from "~storybook/index"

import { GenericTile } from "./GenericTile"

const meta: Meta<typeof GenericTile> = {
  title: "Components/Tiles/GenericTile/Tests",
  component: GenericTile,
  args: {
    title: "Title",
    metadata: "Side A",
    information: "Side B",
    footer: <>Example Footer</>,
  },
}

export default meta
type Story = StoryObj<typeof GenericTile>

export const Flip: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByRole("button", { name: "Information" }))

    await expect(canvas.getByText("Side B")).toBeInTheDocument()
  },
}
