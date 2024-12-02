import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { expect, waitFor, within } from "@storybook/test"
import { InformationTile } from "~components/Tile"
import { TileGrid } from "../index"

const meta = {
  title: "Components/Tiles/TileGrid",
  component: TileGrid,
  args: {
    children: (
      <>
        <InformationTile
          title="Title A"
          metadata="Side A"
          information="Side A - Back"
          footer={<>Footer</>}
        />
        <InformationTile
          title="Title B"
          metadata="Side B"
          information="Side B - Back"
          footer={<>Footer</>}
        />
        <InformationTile
          title="Title C"
          metadata="Side C"
          information="Side C - Back"
          footer={<>Footer</>}
        />
      </>
    ),
  },
} satisfies Meta<typeof TileGrid>

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

// Test for multiple tiles, flipping one doesn't flip others
export const FlipOneNotOthers: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("initial render complete", async () => {
      await waitFor(() => {
        canvas.getByRole("button", {
          name: "View more information: Title A",
        })
      })
    })

    await step("Can focus to button", async () => {
      await waitFor(() => {
        const buttonWithInfoLabel = canvas.getByRole("button", {
          name: "View more information: Title A",
        })
        buttonWithInfoLabel.click()
      })
    })

    await step("Check other tiles", async () => {
      await waitFor(() => {
        expect(canvas.getByText("Side A - Back")).toBeInTheDocument()
        expect(canvas.getByText("Title B")).toBeInTheDocument()
        expect(canvas.getByText("Title C")).toBeInTheDocument()
      })
    })
  },
}

// Multiple tiles, test focus isn't held by any of the buttons
export const NoFocusOnTiles: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const buttonWithInfoLabel1 = await canvas.findByRole("button", {
      name: "View more information: Title A",
    })
    const buttonWithInfoLabel2 = await canvas.findByRole("button", {
      name: "View more information: Title B",
    })
    const buttonWithInfoLabel3 = await canvas.findByRole("button", {
      name: "View more information: Title C",
    })

    expect(buttonWithInfoLabel1).not.toHaveFocus()
    expect(buttonWithInfoLabel2).not.toHaveFocus()
    expect(buttonWithInfoLabel3).not.toHaveFocus()
  },
}
