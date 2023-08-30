import React, { useEffect } from "react"
import { configure, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Command, EditorState, Transaction } from "prosemirror-state"
import { testEditorState } from "../fixtures/testState"
import { useRichTextEditor } from "./useRichTextEditor"

const user = userEvent.setup()

configure({ testIdAttribute: "data-automation-id" })

const Scenario = ({
  onChange = (_: EditorState) => undefined,
  editable = true,
}: {
  onChange?: (editorState: EditorState) => void
  editable?: boolean
}): JSX.Element => {
  const command: Command = (
    state: EditorState,
    dispatch?: (tx: Transaction) => void
  ): ReturnType<Command> => {
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
      <button
        type="button"
        onClick={() => {
          dispatchTransaction(command)
        }}
      >
        Prepend button
      </button>
      <button
        type="button"
        onClick={() => {
          setEditableStatus(false)
        }}
      >
        Editable: false
      </button>
      <button
        type="button"
        onClick={() => {
          setEditableStatus(true)
        }}
      >
        Editable: true
      </button>
      <div data-automation-id="editor" ref={ref} />
    </div>
  )
}

describe("useRichTextEditor", () => {
  it("binds the editor to the DOM", async () => {
    const { findByText } = render(<Scenario />)

    expect(await findByText("Example content")).toBeInTheDocument()
  })

  it("updates the DOM when commands are dispatched", async () => {
    const { findByText, getByRole } = render(<Scenario />)

    await findByText("Example content")
    await user.click(getByRole("button", { name: "Prepend button" }))

    expect(
      await findByText("Prepended content. Example content")
    ).toBeInTheDocument()
  })

  it("updates the editorState when commands are dispatched", async () => {
    const onChange = jest.fn()
    const { findByText, getByRole } = render(<Scenario onChange={onChange} />)

    await findByText("Example content")
    await user.click(getByRole("button", { name: "Prepend button" }))

    const updatedEditorState = onChange.mock.calls[1][0] as EditorState
    expect(updatedEditorState.toJSON()).toMatchSnapshot()
  })

  it("defaults to editable", async () => {
    const { findByTestId } = render(<Scenario />)

    const editor = await findByTestId("editor")
    expect(editor.children[0]?.getAttribute("contenteditable")).toEqual("true")
  })

  it("respects initial editable status", async () => {
    const { findByTestId } = render(<Scenario editable={false} />)

    const editor = await findByTestId("editor")
    expect(editor.children[0]?.getAttribute("contenteditable")).toEqual("false")
  })

  it("updates editable status", async () => {
    const { findByTestId, getByRole } = render(<Scenario />)

    const editor = await findByTestId("editor")

    expect(editor.children[0]?.getAttribute("contenteditable")).toEqual("true")

    await user.click(getByRole("button", { name: "Editable: false" }))

    expect(editor.children[0]?.getAttribute("contenteditable")).toBe("false")

    await user.click(getByRole("button", { name: "Editable: true" }))

    expect(editor.children[0]?.getAttribute("contenteditable")).toBe("true")
  })
})
