import { Node } from "prosemirror-model"
import { EditorState } from "prosemirror-state"
import {
  testDocNode,
  testDocNodeContentJSON,
  testDocNodeJSON,
  testSchema,
} from "./fixtures/testState"
import {
  createDocNode,
  createDocNodeFromContent,
  createEditorState,
} from "./state"

describe("createDoc()", () => {
  it("creates a Node from a document definition", () => {
    const docNode = createDocNode(testSchema, testDocNodeJSON)
    expect(docNode).toBeInstanceOf(Node)
  })

  it("generates a Node whose output matches the input", () => {
    const docNode = createDocNode(testSchema, testDocNodeJSON)
    expect(docNode.toJSON()).toMatchObject(testDocNodeJSON)
  })
})

describe("createDocNodeFromContent()", () => {
  it("creates a Node from a content array", () => {
    const docNode = createDocNodeFromContent(testSchema, testDocNodeContentJSON)
    expect(docNode).toBeInstanceOf(Node)
  })

  it("generates a Node whose output matches the input", () => {
    const docNode = createDocNodeFromContent(testSchema, testDocNodeContentJSON)
    expect(docNode.toJSON()).toMatchObject(testDocNodeJSON)
  })
})

describe("createEditorState()", () => {
  it("creates an EditorState instance", () => {
    const editorState = createEditorState(testSchema, testDocNode)
    expect(editorState).toBeInstanceOf(EditorState)
  })
})
