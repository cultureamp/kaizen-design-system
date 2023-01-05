import React from "react"
import { ComponentStory } from "@storybook/react"
import { RichTextContent } from "@kaizen/rich-text-editor"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import dummyContent from "./dummyContent.json"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.richTextEditor}/Rich Text Content`,
  component: RichTextContent,
  parameters: {
    docs: {
      description: {
        component: 'import { RichTextContent } from "@kaizen/rich-text-editor"',
      },
    },
  },
}

export const RichTextContentStory: ComponentStory<
  typeof RichTextContent
> = args => <RichTextContent {...args} />

RichTextContentStory.storyName = "Default"
RichTextContentStory.args = {
  content: dummyContent,
}
