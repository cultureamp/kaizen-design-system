import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import * as V1Stories from "../../../v1/InformationTile/_docs/InformationTile.stories"
import { InformationTile } from "../index"

const meta = {
  title: "Containers/InformationTile/v2",
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

export const Moods: Story = V1Stories.Moods

export const Information: Story = V1Stories.Information
