import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import {
  RichTextEditor,
  RichTextEditorProps,
  EditorContentArray,
} from "~components/RichTextEditor"
import { classNameOverrideArgType } from "~storybook/argTypes"

const DEFAULT_ARGS = {
  labelText: "Text Label",
  rows: 3,
  controls: [
    { name: "bold", group: "inline" },
    { name: "italic", group: "inline" },
    { name: "underline", group: "inline" },
    { name: "orderedList", group: "list" },
    { name: "bulletList", group: "list" },
    { name: "link", group: "link" },
  ],
} satisfies Partial<RichTextEditorProps>

const meta = {
  title: "Components/RichTextEditor",
  component: RichTextEditor,
  argTypes: { ...classNameOverrideArgType },
  args: {
    ...DEFAULT_ARGS,
  },
} satisfies Meta<typeof RichTextEditor>

export default meta

type Story = StoryObj<typeof meta>

const rteTemplate: Story = {
  render: args => {
    const [rteData, setRTEData] = useState<EditorContentArray>([])
    const handleOnChange: RichTextEditorProps["onChange"] = (
      editorState
    ): void => setRTEData(editorState.toJSON().doc.content)
    return (
      <RichTextEditor {...args} value={rteData} onChange={handleOnChange} />
    )
  },
}

export const Playground: Story = {
  ...rteTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}
