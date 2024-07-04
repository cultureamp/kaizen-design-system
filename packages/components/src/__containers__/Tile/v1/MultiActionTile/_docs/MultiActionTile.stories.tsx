import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { moodsList } from "../../subcomponents/GenericTile/types"
import { MultiActionTile } from "../index"

const meta = {
  title: "Containers/MultiActionTile/v1",
  component: MultiActionTile,
  args: {
    title: "Title",
    metadata: "Side A",
    primaryAction: {
      label: "Take Action!",
    },
  },
} satisfies Meta<typeof MultiActionTile>

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
    <div className="flex gap-16 flex-wrap">
      {moodsList.map(mood => (
        <MultiActionTile key={mood} mood={mood} {...args} />
      ))}
    </div>
  ),
}

export const Information: Story = {
  args: {
    information: "Side B",
  },
}

export const SecondaryAction: Story = {
  args: {
    secondaryAction: {
      label: "Nevermind",
    },
  },
}
