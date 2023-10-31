import { Meta, StoryObj } from "@storybook/react"
import { DirectionalLink } from "../index"

const meta = {
  title: "Components/Pagination/DirectionalLink",
  component: DirectionalLink,
  args: {
    label: "Back",
    direction: "prev",
  },
} satisfies Meta<typeof DirectionalLink>

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
