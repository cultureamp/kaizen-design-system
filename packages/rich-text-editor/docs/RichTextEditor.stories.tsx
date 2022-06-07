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

export const Default = args => {
  const [rteData, setRTEData] = useState<EditorContentArray>([])
  return (
    <RichTextEditor
      value={rteData}
      onChange={data => setRTEData(data)}
      {...args}
    />
  )
}

Default.storyName = "Default (Kaizen Demo)"

export const WithControls = () => {
  const [rteData, setRTEData] = useState<EditorContentArray>([])
  return (
    <>
      <RichTextEditor
        labelText="Label"
        value={rteData}
        controls={[
          { name: "bold", group: "inline" },
          { name: "italic", group: "inline" },
          { name: "underline" },
          { name: "ordered_list", group: "list" },
          { name: "bullet_list", group: "list" },
        ]}
        onChange={data => setRTEData(data)}
      />
    </>
  )
}

Default.storyName = "Default (Kaizen Demo)"
Default.args = {
  labelText: "Label",
  rows: 3,
}
