import { getByRole, getByText, waitFor } from "@testing-library/dom"
import { createRichTextEditor } from "../core/create"
import { simulateSelectionByText } from "./fixtures/helpers"
import { testEditorStateWithMarks, testSchema } from "./fixtures/test-state"
import { updateMark } from "./updateMark"

describe("updateMark()", () => {
  const onChange = jest.fn()
  const attributes = { "aria-labelledby": "label-text-123" }

  it("can update existing Mark with a nested Mark", async () => {
    const node = document.createElement("div")
    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorStateWithMarks,
    })

    dispatchTransaction(simulateSelectionByText("Example Italic Mark"))
    dispatchTransaction(updateMark(testSchema.marks.strong))

    await waitFor(() => {
      const italicExample = getByText(node, "Example Italic Mark")
      expect(italicExample.nodeName).toBe("STRONG")
      expect(italicExample.parentNode?.nodeName).toBe("EM")
    })
  })

  it("can split a Mark with new attributes in the current selection", async () => {
    const node = document.createElement("div")
    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorStateWithMarks,
    })

    dispatchTransaction(simulateSelectionByText("Example Link"))
    dispatchTransaction(
      updateMark(testSchema.marks.link, {
        href: "https://google.com/",
        _metadata: null,
        rel: "noreferrer",
        target: "_self",
      })
    )
    await waitFor(() => {
      const linkExample: HTMLAnchorElement = getByText(node, "Example Link")
      const remainderMark: HTMLAnchorElement = getByRole(node, "link", {
        name: "Mark",
      })
      // checks original mark still has the same value
      expect(remainderMark.href).toEqual("https://cultureamp.design/")
      // checks new mark still has the updated value
      expect(linkExample.href).toEqual("https://google.com/")
    })
  })

  it("can use toExtent to update the entire mark with only a partial selection and update its attributes", async () => {
    const node = document.createElement("div")
    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorStateWithMarks,
    })

    // Select only "Link Mark" within the "Example Link Mark" node
    dispatchTransaction(simulateSelectionByText("Link Mark"))
    // will apply the update to the whole link Mark
    dispatchTransaction(
      updateMark(
        testSchema.marks.link,
        {
          href: "https://google.com/",
          _metadata: null,
          rel: "noreferrer",
          target: "_self",
        },
        { toExtent: true }
      )
    )
    await waitFor(() => {
      const linkExample: HTMLAnchorElement = getByText(
        node,
        "Example Link Mark"
      )
      expect(linkExample.href).toEqual("https://google.com/")
    })
  })
})
