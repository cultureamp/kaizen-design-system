import React from "react"
import { withDesign } from "storybook-addon-designs"
import boldIcon from "@kaizen/component-library/icons/bold.icon.svg"
import italicIcon from "@kaizen/component-library/icons/italics.icon.svg"
import bulletListIcon from "@kaizen/component-library/icons/bulletted-list.icon.svg"
import numberListIcon from "@kaizen/component-library/icons/numbered-list.icon.svg"
import underlineIcon from "@kaizen/component-library/icons/underline.icon.svg"
import linkIcon from "@kaizen/component-library/icons/add-link.icon.svg"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import {
  ToggleIconButton,
  Toolbar,
  ToolbarProps,
  ToolbarSection,
  ToolbarItem,
} from "../"

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
    <ToolbarSection>
      <ToolbarItem>
        <ToggleIconButton label="Bold" icon={boldIcon} />
      </ToolbarItem>
    </ToolbarSection>
    <ToolbarSection>
      <ToolbarItem>
        <ToggleIconButton label="Italic" icon={italicIcon} />
      </ToolbarItem>
      <ToolbarItem>
        <ToggleIconButton label="Underline" icon={underlineIcon} />
      </ToolbarItem>
    </ToolbarSection>
    <ToolbarSection>
      <ToolbarItem>
        <ToggleIconButton label="Bullet list" icon={bulletListIcon} />
      </ToolbarItem>
      <ToolbarItem>
        <ToggleIconButton label="Numbered list" icon={numberListIcon} />
      </ToolbarItem>
    </ToolbarSection>
    <ToolbarSection>
      <ToolbarItem>
        <ToggleIconButton label="Link" icon={linkIcon} />
      </ToolbarItem>
    </ToolbarSection>
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
