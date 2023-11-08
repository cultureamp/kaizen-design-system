import { findByText, getByText, waitFor } from "@testing-library/dom"
import { createRichTextEditor } from "../core"
import { simulateSelectionByText } from "./fixtures/helpers"
import { testEditorStateWithMarks, testSchema } from "./fixtures/test-state"
import { removeMark } from "./removeMark"

describe("removeMark()", () => {
  const onChange = jest.fn()
  const attributes = { "aria-labelledby": "label-text-123" }

  it("removes the given <strong> Mark from a paragraph in the document", async () => {
    const node = document.createElement("div")
    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorStateWithMarks,
    })
    const currentStrongTags = node.querySelectorAll("strong").length
    // Check that there is at least one strong tag
    expect(currentStrongTags).toBeGreaterThan(0)

    dispatchTransaction(simulateSelectionByText("Example Strong Mark"))
    dispatchTransaction(removeMark(testSchema.marks.strong))

    // Check that the text still exists
    await findByText(node, "Example Strong Mark")

    await waitFor(() => {
      expect(node.querySelectorAll("strong").length).toEqual(
        currentStrongTags - 1
      )
    })
  })

  it("removes the given <strong> Mark from a selection within a paragraph", async () => {
    const node = document.createElement("div")
    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorStateWithMarks,
    })
    const currentStrongTags = node.querySelectorAll("strong").length
    // Check that there is at least one strong tag
    expect(currentStrongTags).toBeGreaterThan(0)

    dispatchTransaction(simulateSelectionByText("Example Strong"))
    dispatchTransaction(removeMark(testSchema.marks.strong))

    // Check that the text still exists removed from the mark still exists
    await findByText(node, "Example Strong")

    await waitFor(() => {
      const strongTagRemainder = getByText(node, "Mark")
      // Check that not all of the strong tag was removed
      expect(node.querySelectorAll("strong").length).toBe(currentStrongTags)
      // Check that the remaining node is is a strong tag
      expect(strongTagRemainder.nodeName).toBe("STRONG")
    })
  })

  it("can use toExtent to remove the entire Mark with a partial selection", async () => {
    const node = document.createElement("div")
    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorStateWithMarks,
    })
    const currentStrongTags = node.querySelectorAll("strong").length
    // Check that there is at least one strong tag
    expect(currentStrongTags).toBeGreaterThan(0)

    dispatchTransaction(simulateSelectionByText("Example Strong"))
    dispatchTransaction(removeMark(testSchema.marks.strong, { toExtent: true }))

    // Check that the text removed from the mark still exists
    await findByText(node, "Example Strong Mark")

    await waitFor(() => {
      // Check that the text no longer exists
      expect(node.querySelectorAll("strong").length).toEqual(
        currentStrongTags - 1
      )
    })
  })
})
