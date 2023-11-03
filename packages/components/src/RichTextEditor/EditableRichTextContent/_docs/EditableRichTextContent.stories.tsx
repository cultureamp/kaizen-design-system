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
    const [rteData, setRTEData] = useState<EditorContentArray>(
      props.content || dummyContent
    )
    const handleOnChange: RichTextEditorProps["onChange"] = (
      editorState
    ): void => setRTEData(editorState.toJSON().doc.content)
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
            defaultValue={rteData}
            onChange={handleOnChange}
          />
          <div className="flex justify-end mt-8">
            <Button label="Cancel" secondary onClick={handleCancel} />
            <Button label="Save" primary onClick={handleCancel} />
          </div>
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
