import React from "react"
import { withDesign } from "storybook-addon-designs"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { Toolbar, ToolbarProps } from "../src/components/Toolbar/Toolbar"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.richTextEditor}/Toolbar`,
  component: Toolbar,
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: {
      description: {
        component: 'import { Toolbar } from "@kaizen/rich-text-editor"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=12317%3A92573"
    ),
  },
  decorators: [withDesign],
}

export const DefaultStory = (args: ToolbarProps) => (
  <Toolbar {...args}>
    <button>click</button>
  </Toolbar>
)

DefaultStory.args = {
  "aria-label": "Toolbar",
  "aria-controls": "editable-id",
}

DefaultStory.argTypes = {
  children: {
    name: "children",
    description: "Takes a collection of `<ToolbarSection>`",
    type: { name: "React.ReactNode", required: true },
    control: {
      type: null,
    },
  },
}

DefaultStory.storyName = "Default (Kaizen Demo)"
