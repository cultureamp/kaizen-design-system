import { Meta, StoryObj } from "@storybook/react"
import * as V1Stories from "../../v1/_docs/Heading.stories"
import { Heading } from "../index"

const meta = {
  title: "Content/Heading/v2",
  component: Heading,
  args: {
    variant: "heading-1",
    tag: "h1",
    children: "Have the courage to be vulnerable.",
  },
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = V1Stories.Playground

export const ComposableHeaderTitle: Story = V1Stories.ComposableHeaderTitle

export const Reversed: Story = V1Stories.Reversed
