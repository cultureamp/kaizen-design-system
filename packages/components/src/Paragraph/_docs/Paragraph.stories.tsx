import { Meta, StoryObj } from "@storybook/react"
import { Paragraph } from "../index"

const meta = {
  title: "KAIO-staging/Paragraph",
  component: Paragraph,
  args: {
    variant: "body",
    children: "The quick brown fox jumps over the lazy dog.",
  },
} satisfies Meta<typeof Paragraph>

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

export const Reversed: Story = {
  args: { color: "white" },
  parameters: {
    backgrounds: { default: "Purple 700" },
  },
}
