import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { EditorContentArray } from "../../index"
import { RichTextEditor, RichTextEditorProps } from "../index"

const meta = {
  title: "Components/RichTextEditor",
  component: RichTextEditor,
  parameters: {
    chromatic: { disable: false },
  },
  args: {
    labelText: "Rich Text",
    defaultValue: [],
    onChange: () => undefined,
    controls: [
      { name: "bold", group: "inline" },
      { name: "italic", group: "inline" },
      { name: "underline", group: "inline" },
    ],
  },
} satisfies Meta<typeof RichTextEditor>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => {
    const [rteData, setRTEData] = useState<EditorContentArray>([])
    const handleOnChange: RichTextEditorProps["onChange"] = editorState =>
      setRTEData(editorState.toJSON().doc.content)

    return (
      <RichTextEditor
        {...args}
        defaultValue={rteData}
        onChange={handleOnChange}
      />
    )
  },
  parameters: {
    chromatic: { disable: true },
    docs: {
      source: {
        code: `
const MyEditor = () => {
  const [rteData, setRTEData] = useState<EditorContentArray>([])
  const handleOnChange: RichTextEditorProps["onChange"] = editorState =>
    setRTEData(editorState.toJSON().doc.content)

  return (
    <RichTextEditor
      labelText="Rich text"
      defaultValue={rteData}
      onChange={handleOnChange}
      controls: [
        { name: "bold", group: "inline" },
        { name: "italic", group: "inline" },
        { name: "underline", group: "inline" },
      ],
    />
  )
}
`,
      },
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const Controls: Story = {
  args: {
    controls: [
      { name: "bold", group: "inline" },
      { name: "italic", group: "inline" },
      { name: "underline", group: "inline" },
      { name: "orderedList", group: "list" },
      { name: "bulletList", group: "list" },
      { name: "link", group: "link" },
    ],
  },
}

export const DefaultValue: Story = {
  args: {
    defaultValue: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Some notes I'd like to share",
          },
        ],
      },
    ],
  },
}

export const Rows: Story = {
  args: {
    labelText: "1 Row",
    rows: 1,
  },
}

export const Description: Story = {
  args: {
    description: "I am a rich text editor",
  },
}

export const Validation: Story = {
  args: {
    validationMessage: "something went wrong",
    status: "error",
  },
}

export const MalformedContent: Story = {
  args: {
    defaultValue: [
      {
        type: "plaragraph",
        content: [
          {
            type: "text",
            marks: [{ type: "strong" }],
            text: "Some notes I'd like to share in bold text:",
          },
        ],
      },
    ],
  },
}
