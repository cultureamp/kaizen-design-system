import React from "react"
import { withDesign } from "storybook-addon-designs"
import { Story } from "@storybook/react"
import boldIcon from "@kaizen/component-library/icons/bold.icon.svg"
import italicIcon from "@kaizen/component-library/icons/italics.icon.svg"
import bulletListIcon from "@kaizen/component-library/icons/bulletted-list.icon.svg"
import numberListIcon from "@kaizen/component-library/icons/numbered-list.icon.svg"
import underlineIcon from "@kaizen/component-library/icons/underline.icon.svg"
import linkIcon from "@kaizen/component-library/icons/add-link.icon.svg"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { ToggleIconButton, Toolbar, ToolbarProps, ToolbarSection } from "../"

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

const ToolbarStoryTemplate: Story<ToolbarProps> = (args: ToolbarProps) => (
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
  StoryComponent => (
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
