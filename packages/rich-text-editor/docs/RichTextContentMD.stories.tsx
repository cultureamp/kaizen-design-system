import React, { useState } from "react"
import { RichTextContent, EditorContentArray } from "@kaizen/rich-text-editor"
import { defaultMarkdownParser } from "prosemirror-markdown"
import { Node } from "prosemirror-model"
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

export const RichTextContentStoryWithMD = args => {
  const mdString = "**Some notes I'd like to share in bold text:**"
  const parsedMD: Node | null = defaultMarkdownParser.parse(mdString)
  const jsonData: EditorContentArray = parsedMD?.toJSON().content || []

  return (
    <div>
      <div>{JSON.stringify(jsonData)}</div>
      <RichTextContent content={jsonData} />
    </div>
  )
}
RichTextContentStoryWithMD.storyName = "Markdown content"
