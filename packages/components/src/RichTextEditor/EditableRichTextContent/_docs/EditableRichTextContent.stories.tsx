import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Button } from "~components/Button"
import {
  EditorContentArray,
  RichTextEditor,
  RichTextEditorProps,
} from "../../index"
import { EditableRichTextContent } from "../index"
import dummyContent from "./dummyContent.json"

const meta = {
  title: "Components/RichTextEditor/EditableRichTextContent",
  component: EditableRichTextContent,
  args: {
    content: dummyContent,
    labelText: "Editable rich text content",
  },
  argTypes: {
    content: { control: "disabled" },
    onClick: { action: "onClick" },
  },
} satisfies Meta<typeof EditableRichTextContent>

export default meta

type Story = StoryObj<typeof meta>

const EditableRichTextContentTemplate: Story = {
  render: props => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [readRteData, setReadRTEData] = useState<EditorContentArray>(
      props.content || dummyContent
    )
    const [editRteData, setEditRTEData] = useState<EditorContentArray>([])

    const handleOnChange: RichTextEditorProps["onChange"] = editorState =>
      setEditRTEData(editorState.toJSON().doc.content)

    const handleContentClick = (): void => {
      setEditRTEData(readRteData)
      setEditMode(true)
    }
    const handleCancel = (): void => setEditMode(false)
    const handleSave = (): void => {
      setReadRTEData(editRteData)
      setEditMode(false)
    }

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
            defaultValue={editRteData}
            onChange={handleOnChange}
          />
          <div className="kz-flex kz-justify-end kz-mt-8">
            <Button label="Cancel" secondary onClick={handleCancel} />
            <Button label="Save" primary onClick={handleSave} />
          </div>
        </>
      )
    }

    return (
      <EditableRichTextContent
        onClick={handleContentClick}
        content={readRteData}
        labelText={props.labelText}
      />
    )
  },
}

export const Playground: Story = {
  parameters: {
    chromatic: { disable: false },
  },
}

export const UsageExample: Story = {
  ...EditableRichTextContentTemplate,
}
