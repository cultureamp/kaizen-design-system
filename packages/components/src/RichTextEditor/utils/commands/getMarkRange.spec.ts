import { waitFor } from "@testing-library/dom"
import { EditorState } from "prosemirror-state"
import { createRichTextEditor } from "../core"
import { simulateSelectionByText } from "./fixtures/helpers"
import { testEditorStateWithMarks } from "./fixtures/test-state"
import { getMarkRange } from "./getMarkRange"

describe("getMarkRange()", () => {
  const onChange = jest.fn()
  const attributes = { "aria-labelledby": "label-text-123" }

  it("returns the entire range of the Mark provided from a resolved position", async () => {
    const node = document.createElement("div")
    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorStateWithMarks,
    })
    let currentState = testEditorStateWithMarks

    dispatchTransaction(simulateSelectionByText("Example Italic"))
    dispatchTransaction((editorState: EditorState) => {
      currentState = editorState
      return true
    })

    await waitFor(() => {
      const startPos = currentState.selection.$from
      const providedMark = currentState.schema.marks.em
      const range = getMarkRange(startPos, providedMark)
      const expectedRangeStart = 22
      const expectedRangeEnd = 41
      expect(range).toBeTruthy()
      expect(range?.from).toEqual(expectedRangeStart)
      expect(range?.to).toEqual(expectedRangeEnd)
    })
  })

  it("returns null if the Mark is not found from the given position", async () => {
    const node = document.createElement("div")
    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorStateWithMarks,
    })
    let currentState = testEditorStateWithMarks

    dispatchTransaction(simulateSelectionByText("Example Strong"))
    dispatchTransaction((editorState: EditorState) => {
      currentState = editorState
      return true
    })

    await waitFor(() => {
      const startPos = currentState.selection.$from
      const providedMark = currentState.schema.marks.em
      const range = getMarkRange(startPos, providedMark)
      expect(range).toBe(null)
    })
  })

  it("returns null if the position provided cannot be resolved", async () => {
    const node = document.createElement("div")
    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorStateWithMarks,
    })
    let currentState = testEditorStateWithMarks

    dispatchTransaction(simulateSelectionByText("Example Strong"))
    dispatchTransaction((editorState: EditorState) => {
      currentState = editorState
      return true
    })

    await waitFor(() => {
      const startPos = null
      const providedMark = currentState.schema.marks.em
      const range = getMarkRange(startPos, providedMark)
      expect(range).toBe(null)
    })
  })
})
