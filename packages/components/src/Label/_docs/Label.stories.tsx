import { Meta, StoryObj } from "@storybook/react"
import { Label } from "../index"

const meta = {
  title: "Components/Label",
  component: Label,
  args: {},
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
