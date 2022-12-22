import React, { useState } from "react"
import { Story } from "@storybook/react"
import { RichTextEditor, EditorContentArray, RichTextEditorProps } from "@kaizen/rich-text-editor"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import dummyContent from "./dummyContent.json"
import dummyMalformedContent from "./dummyMalformedContent.json"

type RTEStory = Story<Omit<RichTextEditorProps, "value" | "onChange" | "aria-labelledby">>

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.richTextEditor}/Rich Text Editor`,
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
  return (
    <RichTextEditor
      labelText={labelText}
      value={rteData}
      onChange={setRTEData}
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
  return (
    <RichTextEditor
      labelText={labelText}
      value={rteData}
      onChange={setRTEData}
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
  return (
    <RichTextEditor
      labelText={labelText}
      value={rteData}
      onChange={setRTEData}
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

export const WithDescriptionAndValidationMessage: RTEStory = ({ labelText, ...args }) => {
  const [rteData, setRTEData] = useState<EditorContentArray>(dummyContent)
  return (
    <>
      <RichTextEditor
        labelText={labelText}
        value={rteData}
        onChange={setRTEData}
        status="error"
        {...args}
        />
      <RichTextEditor
        labelText={labelText}
        value={rteData}
        onChange={setRTEData}
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
