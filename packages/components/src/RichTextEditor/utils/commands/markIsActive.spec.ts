import { waitFor } from "@testing-library/dom"
import { EditorState } from "prosemirror-state"
import { createRichTextEditor } from "../core/create"
import {
  simulateRangeSelection,
  simulateSelectionByText,
} from "./fixtures/helpers"
import { testEditorStateWithMarks, testSchema } from "./fixtures/test-state"
import { markIsActive } from "./markIsActive"

describe("markIsActive", () => {
  const onChange = jest.fn()
  const attributes = { "aria-labelledby": "label-text-123" }

  it("returns true if the provided Mark Type matches the current selection", async () => {
    const node = document.createElement("div")
    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorStateWithMarks,
    })
    let currentState = testEditorStateWithMarks

    dispatchTransaction(simulateSelectionByText("Example Italic Mark"))
    dispatchTransaction((editorState: EditorState) => {
      currentState = editorState
      return true
    })

    await waitFor(() => {
      expect(markIsActive(currentState, testSchema.marks.em)).toBe(true)
    })
  })

  it("returns true if cursor is resting within a mark (ie: Example Ital|ic Mark)", async () => {
    const node = document.createElement("div")
    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorStateWithMarks,
    })
    let currentState = testEditorStateWithMarks

    dispatchTransaction(simulateSelectionByText("Example Ital"))
    dispatchTransaction((editorState: EditorState) => {
      currentState = editorState
      return true
    })
    dispatchTransaction(
      simulateRangeSelection(
        currentState.selection.to,
        currentState.selection.to
      )
    )
    dispatchTransaction((editorState: EditorState) => {
      currentState = editorState
      return true
    })

    await waitFor(() => {
      expect(markIsActive(currentState, testSchema.marks.em)).toBe(true)
    })
  })

  it("returns false if the provided Mark Type does not match the current selection", async () => {
    const node = document.createElement("div")
    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorStateWithMarks,
    })
    let currentState = testEditorStateWithMarks

    dispatchTransaction(simulateSelectionByText("Example Strong Mark"))
    dispatchTransaction((editorState: EditorState) => {
      currentState = editorState
      return true
    })

    await waitFor(() => {
      expect(markIsActive(currentState, testSchema.marks.em)).toBe(false)
    })
  })
})
