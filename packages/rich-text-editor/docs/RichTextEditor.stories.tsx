import React, { useState } from "react"
import { Story } from "@storybook/react"
import { RichTextEditor, EditorContentArray, RichTextEditorProps } from "@kaizen/rich-text-editor"
import { Label } from "@kaizen/draft-form"
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

export const Default: Story<RichTextEditorProps> = args => {
  const [rteData, setRTEData] = useState<EditorContentArray>([])
  return (
    <>
      <RichTextEditor
        value={rteData}
        onChange={data => setRTEData(data)}
        labelText={"Label"}
        rows={3}
        controls={[
          { name: "bold", group: "inline" },
          { name: "italic", group: "inline" },
          { name: "underline", group: "inline" },
          { name: "orderedList", group: "list" },
          { name: "bulletList", group: "list" },
        ]}
      />
    </>
  )
}

Default.storyName = "Default (Kaizen Demo)"

export const WithLabelledBy: Story<RichTextEditorProps> = args => {
  const [rteData, setRTEData] = useState<EditorContentArray>([])
  return (
    <>
      <Label id="Label-id" labelText="Sample Label" />
      <RichTextEditor
        value={rteData}
        onChange={data => setRTEData(data)}
        labelledBy={"Label-id"}
        rows={3}
        controls={[
          { name: "bold", group: "inline" },
          { name: "italic", group: "inline" },
          { name: "underline", group: "inline" },
          { name: "orderedList", group: "list" },
          { name: "bulletList", group: "list" },
        ]}
      />
    </>
  )
}

WithLabelledBy.storyName = "Rich Text Editor with LabelledBy Prop"
