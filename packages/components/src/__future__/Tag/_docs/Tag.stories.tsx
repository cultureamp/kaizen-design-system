import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Tag } from ".."

export default {
  title: "Components/Tag",
  component: Tag,
} satisfies Meta<typeof Tag>

export const Playground: StoryFn<typeof Tag> = args => (
  <Tag {...args}>My tag</Tag>
)
