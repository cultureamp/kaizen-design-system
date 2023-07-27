import React, { useEffect } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { EditorState, Transaction } from "prosemirror-state"
import { testEditorState } from "../fixtures/testState"
import { useRichTextEditor } from "./useRichTextEditor"

const user = userEvent.setup()

type ScenarioProps = {
  onChange?: (editorState: EditorState) => void
  editable?: boolean
}

const Scenario = ({
  onChange,
  editable = true,
}: ScenarioProps): JSX.Element => {

  const command = (
    state: EditorState,
    dispatch?: (tx: Transaction) => void
  ): boolean => {
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
    onChange?.(editorState)
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
      <div data-testid="editor" ref={ref} />
    </div>
  )
}

describe("useRichTextEditor", () => {
  it("binds the editor to the DOM", async () => {
    const { getByText } = render(<Scenario />)

    await waitFor(() => {
      expect(getByText("Example content")).toBeVisible()
    })
  })

  it("updates the DOM when commands are dispatched", async () => {
    const { getByText } = render(<Scenario />)

    await waitFor(() => {
      expect(getByText("Example content")).toBeVisible()
    })

    const button = await screen.findByText("Prepend button")
    await user.click(button)

    await waitFor(() => {
      expect(getByText("Prepended content. Example content")).toBeVisible()
    })
  })

  it("updates the editorState when commands are dispatched", async () => {
    const onChange = jest.fn()
    const { getByText } = render(<Scenario onChange={onChange} />)

    await waitFor(() => {
      expect(getByText("Example content")).toBeVisible()
    })

    const button = await screen.findByText("Prepend button")
    await user.click(button)

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
    render(<Scenario />)

    const editor = await screen.findByTestId("editor")
    expect(editor.children[0]?.getAttribute("contenteditable")).toEqual("true")

    const disableEditButton = await screen.findByText("Editable: false")
    await user.click(disableEditButton)

    expect(editor.children[0]?.getAttribute("contenteditable")).toBe("false")

    const enableEditButton = await screen.findByText("Editable: true")
    await user.click(enableEditButton)

    expect(editor.children[0]?.getAttribute("contenteditable")).toBe("true")
  })
})
