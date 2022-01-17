import React, { useState } from "react"
import { Schema } from "prosemirror-model"
import {
  RichTextEditor,
  CustomRichTextEditor,
  EditorContentArray,
  coreMarks,
  coreNodes,
} from "@kaizen/rich-text-editor"
import { CATEGORIES } from "../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/Rich Text Editor`,
  component: RichTextEditor,
  parameters: {
    docs: {
      description: {
        component:
          'import { RichTextEditor, CustomRichTextEditor } from "@kaizen/rich-text-editor"',
      },
    },
  },
}

export const SimpleConfig = () => {
  const [rteData, setRTEData] = useState<EditorContentArray>([])
  return (
    <RichTextEditor
      id="simple-rich-text-editor"
      labelText="Label"
      value={rteData}
      onChange={data => setRTEData(data)}
      controls={[["strong", "em"], ["underline"]]}
    />
  )
}

// It's important that this schema is defined *outside* of the component
// otherwise it will be regenerated on every rerender and cause state issues.
const customSchema = new Schema({
  nodes: {
    doc: coreNodes.doc,
    paragraph: coreNodes.paragraph,
    text: coreNodes.text,
    hardBreak: coreNodes.hardBreak,
    emailVariable: {
      attrs: { variable: { default: null } },
      inline: true,
      group: "inline",
      parseDOM: [
        {
          tag: "span[data-email-variable]",
          getAttrs(dom: HTMLElement) {
            return {
              variable: dom.getAttribute("data-email-variable"),
            }
          },
        },
      ],
      toDOM(node: any) {
        const { variable } = node.attrs
        return [
          "span",
          {
            ["data-email-variable"]: variable,
            class: "emailVariable",
          },
        ]
      },
    },
  },
  marks: {
    strong: coreMarks.strong,
    em: coreMarks.em,
    underline: coreMarks.underline,
  },
})

export const CustomConfig = () => {
  const existingData = [
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Prepopulated content",
        },
      ],
    },
  ]
  const [rteData, setRTEData] = useState<EditorContentArray>(existingData)

  return (
    <CustomRichTextEditor
      id="custom-rich-text-editor"
      labelText="Label"
      value={rteData}
      onChange={data => setRTEData(data)}
      schema={customSchema}
    />
  )
}
