import { Meta, StoryObj } from "@storybook/react"
import { Icon } from "../index"

const meta = {
  title: "Illustrations/Icon/v3",
  component: Icon,
  args: {
    name: "delete",
  },
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}
