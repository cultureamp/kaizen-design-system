import React from "react"
import linkIcon from "@icons/add-link.icon.svg"
import boldIcon from "@icons/bold.icon.svg"
import bulletListIcon from "@icons/bulletted-list.icon.svg"
import italicIcon from "@icons/italics.icon.svg"
import numberListIcon from "@icons/numbered-list.icon.svg"
import underlineIcon from "@icons/underline.icon.svg"
import { ComponentStory } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import {
  CATEGORIES,
  SUB_CATEGORIES,
  SUB_COMPONENTS_FOLDER_NAME,
} from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { ToggleIconButton, Toolbar, ToolbarSection } from "../"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.richTextEditor}/${SUB_COMPONENTS_FOLDER_NAME}/Toolbar`,
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

const ToolbarStoryTemplate: ComponentStory<typeof Toolbar> = args => (
  <Toolbar {...args}>
    <ToolbarSection>
      <ToggleIconButton label="Bold" icon={boldIcon} />
      <ToggleIconButton label="Italic" icon={italicIcon} />
      <ToggleIconButton label="Underline" icon={underlineIcon} />
    </ToolbarSection>
    <ToolbarSection>
      <ToggleIconButton label="Bullet list" icon={bulletListIcon} />
      <ToggleIconButton label="Numbered list" icon={numberListIcon} />
    </ToolbarSection>
    <ToolbarSection>
      <ToggleIconButton label="Link" icon={linkIcon} />
    </ToolbarSection>
  </Toolbar>
)

export const DefaultStory = ToolbarStoryTemplate.bind({})
DefaultStory.storyName = "Default (Kaizen Demo)"
DefaultStory.args = {
  "aria-label": "Toolbar",
  "aria-controls": "editable-id",
}
DefaultStory.argTypes = {
  children: {
    name: "children",
    description: "Takes a collection of `<ToolbarSection>`",
    type: { name: "function", required: true },
    control: {
      type: null,
    },
  },
}

export const ToolBarWithTopContent = ToolbarStoryTemplate.bind({})

ToolBarWithTopContent.storyName = "Toolbar with top content"
ToolBarWithTopContent.decorators = [
  (StoryComponent): JSX.Element => (
    <div>
      <p style={{ paddingBottom: "100px" }}>
        This is an example to showcase the tooltip positioning when the page
        actually has content
      </p>
      <StoryComponent />
    </div>
  ),
]
ToolBarWithTopContent.args = {
  "aria-label": "Toolbar-with-top-spacing",
  "aria-controls": "editable-id-with-top-spacing",
}
