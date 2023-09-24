import { Meta, StoryObj } from "@storybook/react"
import { Label } from "../index"

const meta = {
  title: "KAIO-staging/Label",
  component: Label,
  args: {
    children: "I am Label.",
  },
} satisfies Meta<typeof Label>

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
