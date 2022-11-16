import React, { useState } from "react"
import { Button } from "@kaizen/button"
import { Box } from "@kaizen/component-library"
import {
  EditableRichTextContent,
  RichTextEditor,
  EditorContentArray,
} from "@kaizen/rich-text-editor"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import dummyContent from "./dummyContent.json"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.richTextEditor}/Editable Rich Text Content`,
  component: EditableRichTextContent,
  parameters: {
    docs: {
      description: {
        component:
          'import { EditableRichTextContent } from "@kaizen/rich-text-editor"',
      },
    },
  },
}

export const EditableRichTextContentStory = args => <InlineEditor {...args} />
EditableRichTextContentStory.storyName = "Default"
EditableRichTextContentStory.args = {
  content: dummyContent,
  labelText: "Shared notes",
  isLabelHidden: false,
}

function InlineEditor(props: {
  content: EditorContentArray
  labelText: string
}) {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [rteData, setRTEData] = useState<EditorContentArray>(
    props.content || dummyContent
  )
  const handleContentClick = () => setEditMode(true)
  const handleCancel = () => setEditMode(false)

  if (editMode) {
    return (
      <>
        <RichTextEditor
          labelText={props.labelText}
          controls={[
            { name: "bold", group: "inline" },
            { name: "italic", group: "inline" },
            { name: "underline", group: "inline" },
            { name: "orderedList", group: "list" },
            { name: "bulletList", group: "list" },
            { name: "link", group: "link" },
          ]}
          value={rteData}
          onChange={data => setRTEData(data)}
        />
        <Box mt={0.5} style={{ display: "flex", justifyContent: "end" }}>
          <Button label="Cancel" secondary onClick={handleCancel} />
          <Button label="Save" primary onClick={handleCancel} />
        </Box>
      </>
    )
  }

  return (
    <EditableRichTextContent
      onClick={handleContentClick}
      content={rteData}
      labelText={props.labelText}
    />
  )
}
