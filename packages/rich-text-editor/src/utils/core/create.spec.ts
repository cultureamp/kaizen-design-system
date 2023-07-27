import { screen, waitFor, queryByText } from "@testing-library/dom"
import { EditorState, Transaction } from "prosemirror-state"
import { createRichTextEditor } from "./create"
import { testEditorState } from "./fixtures/testState"

describe.skip("createRichTextEditor", () => {
  const attributes = { "aria-labelledby": "label-text-123" }

  it("initializes an editor with the correct content", async () => {
    const node = document.body.appendChild(document.createElement("div"))
    const onChange = jest.fn()

    createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorState,
    })

    expect(await screen.findByText("Example content")).toBeVisible()
  })

  it("returns the expected API shape", async () => {
    const node = document.body.appendChild(document.createElement("div"))
    const onChange = jest.fn()

    const returnValue = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorState,
    })

    expect(Object.keys(returnValue)).toEqual(["destroy", "dispatchTransaction"])
    expect(typeof returnValue.destroy).toEqual("function")
    expect(typeof returnValue.dispatchTransaction).toEqual("function")
  })

  it("destroys the instance", async () => {
    const node = document.createElement("div")
    const onChange = jest.fn()

    const { destroy } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorState,
    })

    await queryByText(node, "Example content")

    destroy()

    await waitFor(async () => {
      expect(await screen.queryAllByText("Example content")).toBeNull()
    })
  })

  it("updates the DOM when commands are dispatched", async () => {
    const node = document.createElement("div")
    const onChange = jest.fn()

    const command = (
      state: EditorState,
      dispatch?: (tx: Transaction) => void
    ): boolean => {
      if (dispatch) {
        dispatch(state.tr.insertText("Prepended content. "))
        return true
      }

      return false
    }

    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorState,
    })

    queryByText(node, "Example content")

    dispatchTransaction(command)

    await waitFor(() => {
      expect(
        screen.getByText("Prepended content. Example content")
      ).toBeInTheDocument()
    })
  })

  it("calls onChange when the editor state changes", async () => {
    const node = document.body.appendChild(document.createElement("div"))
    const onChange = jest.fn()

    const command = (
      state: EditorState,
      dispatch?: (tx: Transaction) => void
    ): boolean => {
      if (!dispatch) return false
      dispatch(state.tr.insertText("Prepended content. "))
      return true
    }

    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorState,
    })

    expect(onChange).not.toHaveBeenCalled()

    dispatchTransaction(command)

    expect(onChange).toHaveBeenCalled()
  })

  it("calls onChange with the updated state", async () => {
    const node = document.body.appendChild(document.createElement("div"))
    const onChange = jest.fn()

    const command = (
      state: EditorState,
      dispatch?: (tx: Transaction) => void
    ): boolean => {
      if (!dispatch) return false
      dispatch(state.tr.insertText("Prepended content. "))
      return true
    }

    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorState,
    })

    dispatchTransaction(command)

    expect(onChange.mock.calls[0][0].toJSON()).toMatchSnapshot()
  })

  it("defaults to editable", async () => {
    const node = document.body.appendChild(document.createElement("div"))
    const onChange = jest.fn()

    createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorState,
    })

    expect(node.children[0]?.getAttribute("contenteditable")).toBe("true")
  })

  it("respects initial isEditable value", async () => {
    const node = document.body.appendChild(document.createElement("div"))
    const onChange = jest.fn()

    createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorState,
      isEditable: () => false,
    })

    expect(node.children[0]?.getAttribute("contenteditable")).toBe("false")
  })

  it("updates editable status", async () => {
    let editable = true

    const node = document.body.appendChild(document.createElement("div"))
    const onChange = jest.fn()

    const noopCommand = (
      state: EditorState,
      dispatch?: (tx: Transaction) => void
    ): boolean => {
      if (!dispatch) return false
      dispatch(state.tr)
      return true
    }

    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorState,
      isEditable: () => editable,
    })

    expect(node.children[0]?.getAttribute("contenteditable")).toBe("true")

    editable = false
    dispatchTransaction(noopCommand)

    expect(node.children[0]?.getAttribute("contenteditable")).toBe("false")
  })

  it("aria-labelledby is present", async () => {
    const editable = true
    const node = document.body.appendChild(document.createElement("div"))

    const onChange = jest.fn()

    const noopCommand = (
      state: EditorState,
      dispatch?: (tx: Transaction) => void
    ): boolean => {
      if (!dispatch) return false
      dispatch(state.tr)
      return true
    }

    const { dispatchTransaction } = createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorState,
      isEditable: () => editable,
    })

    dispatchTransaction(noopCommand)

    expect(node.children[0]?.getAttribute("aria-labelledby")).toBe(
      "label-text-123"
    )
  })
})
