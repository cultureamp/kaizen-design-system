import React from "react"
import { StoryFn } from "@storybook/react"
import { RichTextContent } from "@kaizen/rich-text-editor"
import dummyContent from "./dummyContent.json"

export default {
  tags: ["autodocs"],
  title: "Components/Rich Text Editor/Rich Text Content",
  component: RichTextContent,
  parameters: {
    docs: {
      description: {
        component: 'import { RichTextContent } from "@kaizen/rich-text-editor"',
      },
    },
  },
}

export const RichTextContentStory: StoryFn<typeof RichTextContent> = args => (
  <RichTextContent {...args} />
)

RichTextContentStory.storyName = "Default"
RichTextContentStory.args = {
  content: dummyContent,
}
