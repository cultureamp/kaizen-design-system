import { findByText, queryByText, getByText } from "@testing-library/dom"
import { Command, EditorState } from "prosemirror-state"
import { createRichTextEditor } from "./create"
import { testEditorState } from "./fixtures/testState"

describe("createRichTextEditor()", () => {
  const attributes = { "aria-labelledby": "label-text-123" }

  it("initializes an editor with the correct content", async () => {
    const node = document.createElement("div")
    const onChange = jest.fn()

    createRichTextEditor({
      node,
      onChange,
      attributes,
      initialEditorState: testEditorState,
    })

    const content = await findByText(node, "Example content")
    expect(content.outerHTML).toBe("<p>Example content</p>")
  })

  it("returns the expected API shape", async () => {
    const node = document.createElement("div")
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

    const content = await findByText(node, "Example content")
    expect(content.outerHTML).toBe("<p>Example content</p>")

    destroy()

    expect(queryByText(node, "Example content")).toBe(null)
  })

  it("updates the DOM when commands are dispatched", async () => {
    const node = document.createElement("div")
    const onChange = jest.fn()

    const command: Command = (state, dispatch) => {
      // Insert text at the current selection point, which is the start because
      // we don’t have a selection yet.
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

    const content = await findByText(node, "Example content")
    expect(content.outerHTML).toBe("<p>Example content</p>")

    dispatchTransaction(command)

    expect(getByText(node, "Prepended content. Example content").outerHTML)
      .toBe("<p>Prepended content. Example content</p>")
  })

  it("calls onChange when the editor state changes", async () => {
    const node = document.createElement("div")
    const onChange = jest.fn()
    const command: Command = (state, dispatch) => {
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
    const node = document.createElement("div")
    const onChange = jest.fn()
    const command: Command = (state, dispatch) => {
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

    const updatedEditorState = onChange.mock.calls[0][0] as EditorState

    expect(updatedEditorState.toJSON()).toMatchSnapshot()
  })

  it("defaults to editable", async () => {
    const node = document.createElement("div")
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
    const node = document.createElement("div")
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
    const node = document.createElement("div")
    const onChange = jest.fn()
    const noopCommand: Command = (state, dispatch) => {
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
    const node = document.createElement("div")
    const onChange = jest.fn()
    const noopCommand: Command = (state, dispatch) => {
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
