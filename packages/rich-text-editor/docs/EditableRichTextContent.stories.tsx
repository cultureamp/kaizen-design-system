import React, { useState } from "react"
import { StoryFn } from "@storybook/react"
import { Button } from "@kaizen/button"
import { Box } from "@kaizen/component-library"
import {
  EditorContentArray,
  EditableRichTextContent,
  RichTextEditor,
  RichTextEditorProps,
} from "@kaizen/rich-text-editor"
import dummyContent from "./dummyContent.json"

export default {
  tags: ["autodocs"],
  title:
    "Components/Rich Text Editor/Rich Text Content/Editable Rich Text Content",
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

export const EditableRichTextContentStory: StoryFn<
  typeof InlineEditor
> = args => <InlineEditor {...args} />
EditableRichTextContentStory.storyName = "Default"
EditableRichTextContentStory.args = {
  content: dummyContent,
  labelText: "Shared notes",
}

function InlineEditor(props: {
  content: EditorContentArray
  labelText: string
}): JSX.Element {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [rteData, setRTEData] = useState<EditorContentArray>(
    props.content || dummyContent
  )
  const handleOnChange: RichTextEditorProps["onChange"] = (editorState): void =>
    setRTEData(editorState.toJSON().doc.content)
  const handleContentClick = (): void => setEditMode(true)
  const handleCancel = (): void => setEditMode(false)

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
          onChange={handleOnChange}
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
