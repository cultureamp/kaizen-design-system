import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Avatar } from "~components/Avatar"
import { Tag } from "../index"

const meta = {
  title: "KAIO-staging/Tag",
  component: Tag,
  args: {
    variant: "default",
    children: "Tag",
  },
} satisfies Meta<typeof Tag>

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

export const Sizes: Story = {
  render: () => (
    <>
      <Tag>Default (Medium)</Tag>
      <Tag size="small">Small</Tag>
    </>
  ),
}

export const Profile: Story = {
  args: {
    children: "Jane Doe",
    variant: "profile",
    avatar: (
      <Avatar
        size="small"
        avatarSrc="https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png"
        fullName="Jane Doe"
      />
    ),
  },
}

export const Dismissable: Story = {
  args: {
    dismissible: true,
    onDismiss: () => alert("Dismissed"),
  },
}

export const Truncate: Story = {
  args: {
    children: "I am a really long tag that needs to be shortened",
    truncateWidth: 200,
  },
}

export const Inline: Story = {
  render: args => (
    <>
      <Tag {...args} inline />
      <Tag {...args} inline />
      <Tag {...args} inline />
    </>
  ),
}
