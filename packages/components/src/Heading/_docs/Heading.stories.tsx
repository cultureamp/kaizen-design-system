import { Meta, StoryObj } from "@storybook/react"
import { Heading } from "../index"

const meta = {
  title: "Components/Heading",
  component: Heading,
  args: {
    variant: "heading-1",
    tag: "h1",
    children: "Have the courage to be vulnerable.",
  },
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    color: "dark",
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const ComposableHeaderTitle: Story = {
  args: {
    variant: "composable-header-title",
    children: "Page title within composable header",
  },
}

export const Reversed: Story = {
  args: { color: "white" },
  parameters: {
    backgrounds: { default: "Purple 700" },
  },
}
