import { waitFor } from "@testing-library/dom"
import { EditorState } from "prosemirror-state"
import { createRichTextEditor } from "../core"
import { simulateSelectionByText } from "./fixtures/helpers"
import { testEditorStateWitList, testSchema } from "./fixtures/test-state"
import { listIsActive } from "./listIsActive"

describe("listIsActive()", () => {
  const onChange = jest.fn()
  const attributes = { "aria-labelledby": "label-text-123" }
  const listNodes = [testSchema.nodes.bulletList, testSchema.nodes.orderedList]

  it("will return true if the current selection matches the list Node type provided", async () => {
    const node = document.createElement("div")
    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorStateWitList,
    })
    let currentState = testEditorStateWitList

    dispatchTransaction(simulateSelectionByText("Bullet List Item Node"))
    dispatchTransaction((editorState: EditorState) => {
      currentState = editorState
      return true
    })

    await waitFor(() => {
      expect(
        listIsActive(currentState, testSchema.nodes.bulletList, listNodes)
      ).toBe(true)
    })
  })
  it("will return false if the current selection is a different list Node type", async () => {
    const node = document.createElement("div")
    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorStateWitList,
    })
    let currentState = testEditorStateWitList

    dispatchTransaction(simulateSelectionByText("Bullet List Item Node"))
    dispatchTransaction((editorState: EditorState) => {
      currentState = editorState
      return true
    })

    await waitFor(() => {
      expect(
        listIsActive(currentState, testSchema.nodes.orderedList, listNodes)
      ).toBe(false)
    })
  })
})
