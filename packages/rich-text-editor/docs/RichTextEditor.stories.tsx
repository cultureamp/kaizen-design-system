import React, { useState } from "react"
import { RichTextEditor, EditorContentArray } from "@kaizen/rich-text-editor"
import { Box } from "@kaizen/component-library"
import { InlineNotification } from "@kaizen/notification"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import dummyContent from "./dummyContent.json"
import dummyMalformedContent from "./dummyMalformedContent.json"

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

export const Default = args => {
  const [rteData, setRTEData] = useState<EditorContentArray>([])
  return (
    <>
      <RichTextEditor
        value={rteData}
        onChange={data => setRTEData(data)}
        {...args}
      />
      <Box pt={1}>
        <InlineNotification
          type="cautionary"
          title="Security hint"
          hideCloseIcon
        >
          Our Rich Text Editor deals with user input which can potentially
          include malicious content (e.g. XSS, injection attacks). The data
          returned by the RTE should hence always be treated with appropriate
          caution when being processed or rendered by your application.
        </InlineNotification>
      </Box>
    </>
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

export const WithData = args => {
  const [rteData, setRTEData] = useState<EditorContentArray>(dummyContent)
  return (
    <RichTextEditor
      value={rteData}
      onChange={data => setRTEData(data)}
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

export const WithBadData = args => {
  const [rteData, setRTEData] = useState<EditorContentArray>(
    dummyMalformedContent
  )
  return (
    <RichTextEditor
      value={rteData}
      onChange={data => setRTEData(data)}
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
