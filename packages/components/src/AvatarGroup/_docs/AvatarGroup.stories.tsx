import { Meta, StoryObj } from "@storybook/react"
import { AvatarGroup } from "../index"
import { AVATARS } from "./example-data"

const meta = {
  title: "Components/Avatar/Avatar Group",
  component: AvatarGroup,
  args: {
    maxVisible: 2,
    size: "medium",
    avatars: AVATARS,
  },
} satisfies Meta<typeof AvatarGroup>

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
