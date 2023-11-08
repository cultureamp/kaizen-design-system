import { waitFor } from "@testing-library/dom"
import { EditorState } from "prosemirror-state"
import { createRichTextEditor } from "../core"
import { simulateSelectionByText } from "./fixtures/helpers"
import { testEditorStateWithMarks, testSchema } from "./fixtures/test-state"
import { getMarkAttrs } from "./getMarkAttrs"

describe("getMarkAttrs()", () => {
  const onChange = jest.fn()
  const attributes = { "aria-labelledby": "label-text-123" }

  it("returns an empty object if the selected Mark has no attributes", async () => {
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

    const markAttrs = getMarkAttrs(currentState, testSchema.marks.link)

    await waitFor(() => {
      expect(markAttrs).toEqual({})
    })
  })

  it("returns an object with its attributes if it matches the Selected Mark", async () => {
    const node = document.createElement("div")
    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorStateWithMarks,
    })
    let currentState = testEditorStateWithMarks

    dispatchTransaction(simulateSelectionByText("Example Link Mark"))
    dispatchTransaction((editorState: EditorState) => {
      currentState = editorState
      return true
    })

    const markAttrs = getMarkAttrs(currentState, testSchema.marks.link)

    await waitFor(() => {
      expect(markAttrs).toHaveProperty("href", "https://cultureamp.design")
      expect(markAttrs).toHaveProperty("target", "_blank")
    })
  })
})
