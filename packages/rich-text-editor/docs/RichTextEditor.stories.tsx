import React, { useEffect, useState } from "react"
import { StoryFn } from "@storybook/react"
import {
  RichTextEditor,
  EditorContentArray,
  RichTextEditorProps,
} from "@kaizen/rich-text-editor"
import dummyContent from "./dummyContent.json"
import dummyMalformedContent from "./dummyMalformedContent.json"

type RTEStory = StoryFn<
  Omit<RichTextEditorProps, "value" | "onChange" | "aria-labelledby">
>

export default {
  tags: ["autodocs"],
  title: "Components/Rich Text Editor",
  component: RichTextEditor,
  parameters: {
    docs: {
      description: {
        component: 'import { RichTextEditor } from "@kaizen/rich-text-editor"',
      },
    },
  },
}

export const Default: RTEStory = ({ labelText, ...args }) => {
  const [rteData, setRTEData] = useState<EditorContentArray>([])
  const handleOnChange: RichTextEditorProps["onChange"] = (editorState): void =>
    setRTEData(editorState.toJSON().doc.content)
  return (
    <RichTextEditor
      labelText={labelText}
      value={rteData}
      onChange={handleOnChange}
      {...args}
    />
  )
}

Default.storyName = "Default (Kaizen Demo)"
Default.args = {
  labelText: "Label",
  rows: 3,
  controls: [
    { name: "bold", group: "inline" },
    { name: "italic", group: "inline" },
    { name: "underline", group: "inline" },
    { name: "orderedList", group: "list" },
    { name: "bulletList", group: "list" },
    { name: "link", group: "link" },
  ],
}

export const WithData: RTEStory = ({ labelText, ...args }) => {
  const [rteData, setRTEData] = useState<EditorContentArray>(dummyContent)
  const handleOnChange: RichTextEditorProps["onChange"] = (editorState): void =>
    setRTEData(editorState.toJSON().doc.content)
  useEffect(() => {
    setTimeout(() => {
      console.log("Setting updated RTE data")
      setRTEData([
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              marks: [{ type: "strong" }],
              text: "Updated value prop!",
            },
          ],
        },
      ])
    }, 1000)
  }, [])
  return (
    <RichTextEditor
      labelText={labelText}
      value={rteData}
      onChange={handleOnChange}
      {...args}
    />
  )
}
WithData.storyName = "With data"
WithData.args = {
  labelText: "Label",
  rows: 3,
  controls: [
    { name: "bold", group: "inline" },
    { name: "italic", group: "inline" },
    { name: "underline", group: "inline" },
    { name: "orderedList", group: "list" },
    { name: "bulletList", group: "list" },
    { name: "link", group: "link" },
  ],
}

export const WithBadData: RTEStory = ({ labelText, ...args }) => {
  const [rteData, setRTEData] = useState<EditorContentArray>(
    dummyMalformedContent
  )
  const handleOnChange: RichTextEditorProps["onChange"] = (editorState): void =>
    setRTEData(editorState.toJSON().doc.content)
  return (
    <RichTextEditor
      labelText={labelText}
      value={rteData}
      onChange={handleOnChange}
      {...args}
    />
  )
}

WithBadData.storyName = "With bad data"
WithBadData.args = {
  labelText: "Label",
  rows: 3,
  controls: [
    { name: "bold", group: "inline" },
    { name: "italic", group: "inline" },
    { name: "underline", group: "inline" },
    { name: "orderedList", group: "list" },
    { name: "bulletList", group: "list" },
    { name: "link", group: "link" },
  ],
}

export const WithDescriptionAndValidationMessage: RTEStory = ({
  labelText,
  ...args
}) => {
  const [rteData, setRTEData] = useState<EditorContentArray>(dummyContent)
  const handleOnChange: RichTextEditorProps["onChange"] = (editorState): void =>
    setRTEData(editorState.toJSON().doc.content)
  return (
    <>
      <RichTextEditor
        labelText={labelText}
        value={rteData}
        onChange={handleOnChange}
        status="error"
        {...args}
      />
      <RichTextEditor
        labelText={labelText}
        value={rteData}
        onChange={handleOnChange}
        status="caution"
        {...args}
      />
    </>
  )
}

WithDescriptionAndValidationMessage.storyName =
  "With description and validation message"
WithDescriptionAndValidationMessage.args = {
  labelText: "Label",
  rows: 3,
  controls: [
    { name: "bold", group: "inline" },
    { name: "italic", group: "inline" },
    { name: "underline", group: "inline" },
    { name: "orderedList", group: "list" },
    { name: "bulletList", group: "list" },
    { name: "link", group: "link" },
  ],
  validationMessage: "something went wrong",
  description: "A description for RTE",
}
