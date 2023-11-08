import { Schema } from "prosemirror-model"
import { createDocNode, createEditorState } from "../../core/state"
import { getMarks } from "../../schema/marks"
import { getNodes } from "../../schema/nodes"

const data = require("./data.json")

export const testSchema = new Schema({
  nodes: getNodes(),
  marks: getMarks(),
})

export const testDocNodeBasic = {
  type: "doc",
  content: data.testDocNodeContentJSON,
}

export const testDocNodeMarks = {
  type: "doc",
  content: data.testDocNodeContentWithMarksJSON,
}

export const testDocNodeLists = {
  type: "doc",
  content: data.testDocNodeContentWithListsJSON,
}

export const testEditorState = createEditorState(
  testSchema,
  createDocNode(testSchema, testDocNodeBasic)
)
export const testEditorStateWithMarks = createEditorState(
  testSchema,
  createDocNode(testSchema, testDocNodeMarks)
)
export const testEditorStateWitList = createEditorState(
  testSchema,
  createDocNode(testSchema, testDocNodeLists)
)
