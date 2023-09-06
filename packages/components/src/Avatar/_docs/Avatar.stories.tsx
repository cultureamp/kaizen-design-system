import { Meta, StoryObj } from "@storybook/react"
import { classNameOverrideArgType } from "~storybook/argTypes"
import { Avatar } from "../index"

const meta = {
  title: "KAIO-staging/Avatar",
  component: Avatar,
  argTypes: {
    ...classNameOverrideArgType,
    isCompany: { type: "boolean" },
    isCurrentUser: { type: "boolean" },
    disableInitials: { type: "boolean" },
    fullName: { type: "string" },
    avatarSrc: { type: "string" },
  },
  args: {
    avatarSrc:
      "https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png",
  },
} satisfies Meta<typeof Avatar>

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
