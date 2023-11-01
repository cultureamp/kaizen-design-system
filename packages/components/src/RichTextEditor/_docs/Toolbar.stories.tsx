import React from "react"
import { StoryFn } from "@storybook/react"
import linkIcon from "@kaizen/component-library/icons/add-link.icon.svg"
import boldIcon from "@kaizen/component-library/icons/bold.icon.svg"
import bulletListIcon from "@kaizen/component-library/icons/bulletted-list.icon.svg"
import italicIcon from "@kaizen/component-library/icons/italics.icon.svg"
import numberListIcon from "@kaizen/component-library/icons/numbered-list.icon.svg"
import underlineIcon from "@kaizen/component-library/icons/underline.icon.svg"
import { ToggleIconButton, Toolbar, ToolbarSection } from ".."

export default {
  tags: ["autodocs"],
  title: "Components/Rich Text Editor/Subcomponents/Toolbar",
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
  },
}

const ToolbarStoryTemplate: StoryFn<typeof Toolbar> = args => (
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
