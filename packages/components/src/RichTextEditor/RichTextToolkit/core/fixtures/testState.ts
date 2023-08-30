import { Schema } from "prosemirror-model"
import { createDocNode, createEditorState } from "../state"

export const testSchema = new Schema({
  nodes: {
    doc: {
      content: "block+",
    },
    paragraph: {
      content: "inline*",
      group: "block",
      parseDOM: [{ tag: "p" }],
      toDOM() {
        return ["p", 0]
      },
    },
    text: {
      group: "inline",
    },
  },
})

export const testDocNodeContentJSON = [
  {
    type: "paragraph",
    content: [
      {
        type: "text",
        text: "Example content",
      },
    ],
  },
]

export const testDocNodeJSON = {
  type: "doc",
  content: testDocNodeContentJSON,
}

export const testDocNode = createDocNode(testSchema, testDocNodeJSON)

export const testEditorState = createEditorState(testSchema, testDocNode)
