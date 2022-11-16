import { describe, expect, it, jest } from "@jest/globals"
import { findByText, waitFor } from "@testing-library/dom"
import { createRichTextEditor } from "../core/create"
import { addMark } from "./addMark"
import {
  mockRangeForBoundingRect,
  simulateSelectionByText,
  simulateTextInsert,
} from "./fixtures/helpers"
import { testEditorState, testSchema } from "./fixtures/test-state"

describe("addMark", () => {
  const onChange = jest.fn()
  const attributes = { "aria-labelledby": "label-text-123" }

  it("creates an empty wrapper of the given Mark type if no selection is provided", async () => {
    const node = document.createElement("div")
    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorState,
    })

    expect(node.querySelectorAll("strong").length).toBe(0)
    // adds the empty strong wrapper
    dispatchTransaction(addMark(testSchema.marks.strong))
    // inserts text into the strong wrapper
    dispatchTransaction(simulateTextInsert("I will be strong"))
    await findByText(node, "I will be strong")

    await waitFor(() => {
      expect(node.querySelectorAll("strong").length).toBe(1)
    })
  })

  it("wraps the current selection in the given mark type", async () => {
    mockRangeForBoundingRect()
    const node = document.createElement("div")
    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorState,
    })

    expect(node.querySelectorAll("strong").length).toBe(0)

    dispatchTransaction(simulateTextInsert("Selected "))
    await findByText(node, "Selected Example content")

    dispatchTransaction(simulateSelectionByText("Selected"))
    dispatchTransaction(addMark(testSchema.marks.strong))

    await waitFor(() => {
      expect(node.querySelectorAll("strong").length).toBe(1)
    })
  })
})
