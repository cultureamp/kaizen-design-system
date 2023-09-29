import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Avatar } from "~components/Avatar"
import { Tag } from "../index"
import {
  SentimentTagVariants,
  StatusTagVariants,
  ValidationTagVariants,
} from "../types"

const meta = {
  title: "KAIO-staging/Tag",
  component: Tag,
  args: {
    variant: "default",
    children: "Tag",
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Known issue as we do not have a "presentational" Avatar yet
            // But the use case in this stickersheet is valid.
            id: "image-redundant-alt",
            enabled: false,
          },
        ],
      },
    },
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

export const Status: Story = {
  render: () => (
    <>
      {StatusTagVariants.map(variant => (
        <Tag key={variant} variant={variant}>
          Tag
        </Tag>
      ))}
    </>
  ),
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const Validation: Story = {
  render: () => (
    <>
      {ValidationTagVariants.map(variant => (
        <Tag key={variant} variant={variant}>
          Tag
        </Tag>
      ))}
    </>
  ),
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const Sentiments: Story = {
  render: () => (
    <>
      {SentimentTagVariants.map(variant => (
        <Tag key={variant} variant={variant}>
          Tag
        </Tag>
      ))}
    </>
  ),
  parameters: {
    docs: {
      source: { type: "dynamic" },
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
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
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
