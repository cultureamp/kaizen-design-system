import { EditorState } from "prosemirror-state"
import { createRichTextEditor } from "../core/create"
import { describe, expect, it, jest } from "@jest/globals"
import { markContainsSelection } from "./markContainsSelection"
import { simulateSelectionByText } from "./fixtures/helpers"
import { testEditorStateWithMarks, testSchema } from "./fixtures/test-state"
import { waitFor } from "@testing-library/dom"

describe("markContainsSelection", () => {
  const onChange = jest.fn()
  const attributes = { "aria-labelledby": "label-text-123" }

  it("will return true if the current select contains the provided Mark", async () => {
    const node = document.createElement("div")
    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorStateWithMarks,
    })
    let currentState = testEditorStateWithMarks

    dispatchTransaction(simulateSelectionByText("Italic"))
    dispatchTransaction((editorState: EditorState) => {
      currentState = editorState
      return true
    })

    await waitFor(() => {
      expect(markContainsSelection(currentState, testSchema.marks.em)).toBe(
        true
      )
    })
  })

  it("will return true if the current selection or its children contain the provided Mark", async () => {
    const node = document.createElement("div")
    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorStateWithMarks,
    })
    let currentState = testEditorStateWithMarks

    dispatchTransaction(simulateSelectionByText("Mixed Mark Link Example"))
    dispatchTransaction((editorState: EditorState) => {
      currentState = editorState
      return true
    })

    await waitFor(() => {
      expect(markContainsSelection(currentState, testSchema.marks.strong)).toBe(
        true
      )
    })
  })

  it("will return false if the current selection does not contain the provided Mark", async () => {
    const node = document.createElement("div")
    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorStateWithMarks,
    })
    let currentState = testEditorStateWithMarks

    dispatchTransaction(simulateSelectionByText("Strong"))
    dispatchTransaction((editorState: EditorState) => {
      currentState = editorState
      return true
    })

    await waitFor(() => {
      expect(markContainsSelection(currentState, testSchema.marks.em)).toBe(
        false
      )
    })
  })
})
