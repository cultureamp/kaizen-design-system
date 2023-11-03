import React, { useEffect } from "react"
import { act, configure, render, screen } from "@testing-library/react"
import { EditorState, Transaction } from "prosemirror-state"
import { testEditorState } from "../fixtures/testState"
import { useRichTextEditor } from "./useRichTextEditor"

configure({ testIdAttribute: "data-automation-id" })

function Scenario({
  onChange = (_: EditorState) => undefined,
  editable = true,
}: {
  onChange?: (editorState: EditorState) => void
  editable?: boolean
}): JSX.Element {
  const command = (
    state: EditorState,
    dispatch?: (tx: Transaction) => void
  ) => {
    // Insert text at the current selection point, which is the start because
    // we don’t have a selection yet.
    if (!dispatch) return false
    dispatch(state.tr.insertText("Prepended content. "))
    return true
  }

  const [ref, editorState, dispatchTransaction, setEditableStatus] =
    useRichTextEditor(
      testEditorState,
      { "aria-labelledby": "label-ref-id", "data-test-id": "12345678" },
      { editable }
    )

  useEffect(() => {
    // Propagate changes to the editorState
    onChange(editorState)
  }, [editorState])

  return (
    <div>
      <button type="button" onClick={() => dispatchTransaction(command)}>
        Prepend button
      </button>
      <button type="button" onClick={() => setEditableStatus(false)}>
        Editable: false
      </button>
      <button type="button" onClick={() => setEditableStatus(true)}>
        Editable: true
      </button>
      <div data-automation-id="editor" ref={ref} />
    </div>
  )
}

describe("useRichTextEditor", () => {
  it("binds the editor to the DOM", async () => {
    render(<Scenario />)

    await screen.findByText("Example content")
  })

  it("updates the DOM when commands are dispatched", async () => {
    render(<Scenario />)

    await act(async () => {
      await screen.findByText("Example content")
    })

    const button = await screen.findByText("Prepend button")
    button.click()

    await screen.findByText("Prepended content. Example content")
  })

  it("updates the editorState when commands are dispatched", async () => {
    const onChange = jest.fn()
    render(<Scenario onChange={onChange} />)

    await act(async () => {
      await screen.findByText("Example content")
    })

    await act(async () => {
      const button = await screen.findByText("Prepend button")
      button.click()
    })

    const updatedEditorState = onChange.mock.calls[1][0] as EditorState
    expect(updatedEditorState.toJSON()).toMatchSnapshot()
  })

  it("defaults to editable", async () => {
    render(<Scenario />)

    const editor = await screen.findByTestId("editor")
    expect(editor.children[0]?.getAttribute("contenteditable")).toEqual("true")
  })

  it("respects initial editable status", async () => {
    render(<Scenario editable={false} />)

    const editor = await screen.findByTestId("editor")
    expect(editor.children[0]?.getAttribute("contenteditable")).toEqual("false")
  })

  it("updates editable status", async () => {
    render(<Scenario />)

    const editor = await screen.findByTestId("editor")
    expect(editor.children[0]?.getAttribute("contenteditable")).toEqual("true")

    const disableEditButton = await screen.findByText("Editable: false")
    disableEditButton.click()

    expect(editor.children[0]?.getAttribute("contenteditable")).toBe("false")

    const enableEditButton = await screen.findByText("Editable: true")
    enableEditButton.click()

    expect(editor.children[0]?.getAttribute("contenteditable")).toBe("true")
  })
})
