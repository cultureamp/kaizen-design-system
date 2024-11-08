import { waitFor } from "@testing-library/dom"
import { EditorState } from "prosemirror-state"
import { vi } from "vitest"
import { createRichTextEditor } from "../core"
import { simulateSelectionByText } from "./__fixtures__/helpers"
import { testEditorStateWithMarks, testSchema } from "./__fixtures__/test-state"
import { markContainsSelection } from "./markContainsSelection"
describe("markContainsSelection()", () => {
  const onChange = vi.fn()
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
        true,
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
        true,
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
        false,
      )
    })
  })
})
