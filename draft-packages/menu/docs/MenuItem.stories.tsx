import React from "react"
import { ComponentStory } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { SUB_COMPONENTS_FOLDER_NAME } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { MenuItem } from "../"

export default {
  title: `Components/Menu/${SUB_COMPONENTS_FOLDER_NAME}/MenuItem`,
  component: MenuItem,
  parameters: {
    docs: {
      description: {
        component: 'import { MenuItem }  from "@kaizen/draft-menu"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=12317%3A92573"
    ),
  },
  decorators: [withDesign],
}

export const DefaultStory: ComponentStory<typeof MenuItem> = args => (
  <MenuItem {...args} />
)
DefaultStory.storyName = "Default (Kaizen Site Demo)"
DefaultStory.args = {
  label: "Menu Item",
}
