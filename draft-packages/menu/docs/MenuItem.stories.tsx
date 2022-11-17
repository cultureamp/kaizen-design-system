import React from "react"
import { Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import {
  CATEGORIES,
  SUB_CATEGORIES,
  SUB_COMPONENTS_FOLDER_NAME,
} from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { MenuItem } from "../"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.menu}/${SUB_COMPONENTS_FOLDER_NAME}/MenuItem`,
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

export const DefaultStory = args => <MenuItem {...args} />

DefaultStory.args = {
  label: "Menu Item",
}
DefaultStory.storyName = "Default (Kaizen Site Demo)"
