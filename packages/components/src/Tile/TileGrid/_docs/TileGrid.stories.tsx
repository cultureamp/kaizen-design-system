import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { InformationTile } from "~components/Tile"
import { TileGrid } from "../index"

const meta = {
  title: "Components/Tiles/TileGrid",
  component: TileGrid,
  args: {
    children: (
      <>
        <InformationTile
          title="Title"
          metadata="Side A"
          information="Side B"
          footer={<>Footer</>}
        />
        <InformationTile
          title="Title"
          metadata="Side A"
          information="Side B"
          footer={<>Footer</>}
        />
        <InformationTile
          title="Title"
          metadata="Side A"
          information="Side B"
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
