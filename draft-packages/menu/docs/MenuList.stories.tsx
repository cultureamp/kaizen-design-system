import React from "react"
import { ComponentStory } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { SUB_COMPONENTS_FOLDER_NAME } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { MenuList, MenuItem } from "../"

export default {
  title: `Components/Menu/${SUB_COMPONENTS_FOLDER_NAME}/MenuList`,
  component: MenuList,
  parameters: {
    docs: {
      description: {
        component: 'import { MenuList }  from "@kaizen/draft-menu"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=12317%3A92573"
    ),
  },
  decorators: [withDesign],
}

export const DefaultStory: ComponentStory<typeof MenuList> = args => (
  <MenuList {...args}>
    <MenuItem label="Item 1" />
    <MenuItem label="Item 2" />
    <MenuItem label="Item 3" />
  </MenuList>
)
DefaultStory.storyName = "Default (Kaizen Site Demo)"
DefaultStory.args = {
  heading: "Menu example list",
}
