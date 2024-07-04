import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import * as V1Stories from "../../../v1/TileGrid/_docs/TileGrid.stories"
import { InformationTile } from "../../InformationTile"
import { TileGrid } from "../index"

const meta = {
  title: "Containers/TileGrid/v2",
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

export const Playground: Story = V1Stories.Playground
