import { findByText, waitFor } from "@testing-library/dom"
import { createRichTextEditor } from "../core"
import { testEditorStateWithMarks, testSchema } from "./fixtures/test-state"
import { validateAndRemoveMarks } from "./validateAndRemoveMarks"

describe("validateAndRemoveMarks()", () => {
  const onChange = jest.fn()
  const attributes = { "aria-labelledby": "label-text-123" }

  it("removes all Marks of the given type that fail the validator method", async () => {
    const node = document.createElement("div")
    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorStateWithMarks,
    })
    // The current mockData will always return true so using the mock to represent bad attributes
    const failingValidatorMethod = jest.fn().mockImplementation(() => false)

    expect(node.querySelectorAll("a").length).toBeGreaterThan(0)

    dispatchTransaction(
      validateAndRemoveMarks(testSchema.marks.link, failingValidatorMethod)
    )

    // Check that this text still exists from the removed mark
    await findByText(node, "Example Link Mark")

    await waitFor(() => {
      expect(node.querySelectorAll("a").length).toEqual(0)
    })
  })
})
