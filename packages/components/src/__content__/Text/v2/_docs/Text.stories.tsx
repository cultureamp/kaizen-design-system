import { Meta, StoryObj } from "@storybook/react"
import * as V1Stories from "../../v1/_docs/Text.stories"
import { Text } from "../index"

const meta = {
  title: "Content/Text/v2",
  component: Text,
  args: {
    variant: "body",
    children: "The quick brown fox jumps over the lazy dog.",
  },
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = V1Stories.Playground
