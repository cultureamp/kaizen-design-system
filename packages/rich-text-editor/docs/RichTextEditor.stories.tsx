import React, { useState } from "react"
import { CATEGORIES } from "../../../storybook/constants"
import { RichTextEditor, EditorContentArray } from "../"

export default {
  title: `${CATEGORIES.components}/Rich Text Editor`,
  // component: RichTextEditor,
  parameters: {
    docs: {
      description: {
        component: 'import { RichTextEditor } from "@kaizen/rich-text-editor"',
      },
    },
  },
}

export const Default = () => {
  const existingData = [
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "nat says it will work",
        },
      ],
    },
  ]
  const [rteData, setRTEData] = useState<EditorContentArray>(existingData)

  return (
    <RichTextEditor
      controls={[
        ["bold", "em", "underline"],
        ["unorderedList", "orderedList"],
        ["link"],
      ]}
      value={rteData}
      onChange={data => setRTEData(data)}
    />
  )
}
