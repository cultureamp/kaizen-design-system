import { Meta, StoryObj } from "@storybook/react"
import * as V1Stories from "../../../v1/MultiActionTile/_docs/MultiActionTile.stories"
import { MultiActionTile } from "../index"

const meta = {
  title: "Containers/MultiActionTile/v2",
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

export const Playground: Story = V1Stories.Playground
export const Moods: Story = V1Stories.Moods
export const Information: Story = V1Stories.Information
export const SecondaryAction: Story = V1Stories.SecondaryAction
