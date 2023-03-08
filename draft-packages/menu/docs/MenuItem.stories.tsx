import React from "react"
import { StoryFn } from "@storybook/react"
import { MenuItem } from "../"

export default {
  title: "Components/Menu/Subcomponents/MenuItem",
  component: MenuItem,
  parameters: {
    docs: {
      description: {
        component: 'import { MenuItem }  from "@kaizen/draft-menu"',
      },
    },
  },
}

export const DefaultStory: StoryFn<typeof MenuItem> = args => (
  <MenuItem {...args} />
)
DefaultStory.storyName = "Default (Kaizen Site Demo)"
DefaultStory.args = {
  label: "Menu Item",
}
