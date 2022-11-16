import { EditorState } from "prosemirror-state"
import { Node } from "prosemirror-model"
import {
  createDocNode,
  createDocNodeFromContent,
  createEditorState,
} from "./state"
import { describe, expect, it } from "@jest/globals"
import {
  testDocNode,
  testDocNodeContentJSON,
  testDocNodeJSON,
  testSchema,
} from "./fixtures/testState"

describe("createDoc", () => {
  it("creates a Node from a document definition", () => {
    const docNode = createDocNode(testSchema, testDocNodeJSON)

    expect(docNode instanceof Node).toBe(true)
  })

  it("generates a Node whose output matches the input", () => {
    const docNode = createDocNode(testSchema, testDocNodeJSON)

    expect(docNode.toJSON()).toMatchObject(testDocNodeJSON)
  })
})

describe("createDocNodeFromContent", () => {
  it("creates a Node from a content array", () => {
    const docNode = createDocNodeFromContent(testSchema, testDocNodeContentJSON)

    expect(docNode instanceof Node).toBe(true)
  })

  it("generates a Node whose output matches the input", () => {
    const docNode = createDocNodeFromContent(testSchema, testDocNodeContentJSON)

    expect(docNode.toJSON()).toMatchObject(testDocNodeJSON)
  })
})

describe("createEditorState", () => {
  it("creates an EditorState instance", () => {
    const editorState = createEditorState(testSchema, testDocNode)

    expect(editorState instanceof EditorState).toBe(true)
  })
})
