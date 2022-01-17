import React, { useState } from "react"
import { RichTextEditor, EditorContentArray } from "@kaizen/rich-text-editor"
import { CATEGORIES } from "../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/Rich Text Editor`,
  component: RichTextEditor,
  parameters: {
    docs: {
      description: {
        component: 'import { RichTextEditor } from "@kaizen/rich-text-editor"',
      },
    },
  },
}

export const Default = () => {
  const [rteData, setRTEData] = useState<EditorContentArray>([])
  return (
    <RichTextEditor
      id="simple-rich-text-editor"
      labelText="Label"
      value={rteData}
      onChange={data => setRTEData(data)}
      controls={[["strong", "em"], ["underline"]]}
    />
  )
}
