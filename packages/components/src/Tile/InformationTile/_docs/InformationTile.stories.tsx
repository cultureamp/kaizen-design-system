import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { moodsList } from "~components/Tile/subcomponents/GenericTile/types"
import { InformationTile } from "../index"

const meta = {
  title: "Components/Tiles/InformationTile",
  component: InformationTile,
  args: {
    title: "Title",
    metadata: "Side A",
    footer: <>Example Footer</>,
  },
} satisfies Meta<typeof InformationTile>

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

export const Moods: Story = {
  render: args => (
    <div className="kz-flex kz-gap-16 kz-flex-wrap">
      {moodsList.map(mood => (
        <InformationTile key={mood} mood={mood} {...args} />
      ))}
    </div>
  ),
}

export const Information: Story = {
  args: {
    information: "Side B",
  },
}
