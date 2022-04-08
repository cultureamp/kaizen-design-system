import React, { useState } from "react"
import {
  RichTextEditor,
  RichTextContent,
  EditorContentArray,
} from "@kaizen/rich-text-editor"
import { Heading } from "@kaizen/typography"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.richTextEditor}/Content`,
  component: RichTextContent,
  parameters: {
    docs: {
      description: {
        component: 'import { RichTextContent } from "@kaizen/rich-text-editor"',
      },
    },
  },
}

const sampleData: EditorContentArray = [
  {
    type: "paragraph",
    content: [
      {
        type: "text",
        text: "Here's some basic content.",
      },
    ],
  },
  {
    type: "paragraph",
    content: [
      {
        type: "text",
        text: "And another paragraph",
      },
      {
        type: "hard_break",
      },
      {
        type: "text",
        text: "with a hard break.",
      },
    ],
  },
]

export const Default = () => {
  const [rteData, setRTEData] = useState<EditorContentArray>(sampleData)

  return (
    <>
      <RichTextEditor
        labelText="Input"
        onChange={data => setRTEData(data)}
        value={rteData}
        controls={[["bold", "italic", "underline"]]}
      />

      <div style={{ marginTop: "1rem" }}>
        <Heading variant="heading-6" tag="div">
          Output
        </Heading>
        <RichTextContent>{rteData}</RichTextContent>
      </div>
    </>
  )
}
Default.storyName = "Default (Kaizen Demo)"
