import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { MenuList, MenuItem } from "../"

export default {
  tags: ["autodocs"],
  title: "Components/Menu/Subcomponents/MenuList",
  component: MenuList,
  parameters: {
    docs: {
      description: {
        component: 'import { MenuList }  from "@kaizen/draft-menu"',
      },
    },
  },
} satisfies Meta<typeof MenuList>

export const DefaultStory: StoryFn<typeof MenuList> = args => (
  <MenuList {...args}>
    <MenuItem label="Item 1" />
    <MenuItem label="Item 2" />
    <MenuItem label="Item 3" />
  </MenuList>
)
DefaultStory.storyName = "Default (Kaizen Site Demo)"
