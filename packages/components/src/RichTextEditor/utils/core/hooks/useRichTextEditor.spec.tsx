import React, { useEffect } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Command, EditorState } from "prosemirror-state"
import { testEditorState } from "../fixtures/testState"
import { useRichTextEditor } from "./useRichTextEditor"

const user = userEvent.setup()

const Scenario = ({
  onChange = () => undefined,
  editable = true,
}: {
  onChange?: (editorState: EditorState) => void
  editable?: boolean
}): JSX.Element => {
  const command: Command = (state, dispatch) => {
    // Insert text at the current selection point, which is the start because
    // we don’t have a selection yet.
    if (!dispatch) return false
    dispatch(state.tr.insertText("Prepended content. "))
    return true
  }

  const [ref, editorState, dispatchTransaction, setEditableStatus] =
    useRichTextEditor(
      testEditorState,
      { "aria-labelledby": "label-ref-id", "data-testid": "12345678" },
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
      <div data-testid="testid--editor" ref={ref} />
    </div>
  )
}

describe("useRichTextEditor()", () => {
  it("binds the editor to the DOM", async () => {
    render(<Scenario />)

    await waitFor(() => {
      expect(screen.getByText("Example content")).toBeInTheDocument()
    })
  })

  it("updates the DOM when commands are dispatched", async () => {
    render(<Scenario />)

    await waitFor(() => {
      expect(screen.getByText("Example content")).toBeInTheDocument()
    })

    await user.click(screen.getByText("Prepend button"))

    await waitFor(() => {
      expect(
        screen.getByText("Prepended content. Example content")
      ).toBeInTheDocument()
    })
  })

  it("updates the editorState when commands are dispatched", async () => {
    const onChange = jest.fn()
    render(<Scenario onChange={onChange} />)

    await waitFor(() => {
      expect(screen.getByText("Example content")).toBeInTheDocument()
    })

    await user.click(screen.getByText("Prepend button"))

    const updatedEditorState = onChange.mock.calls[1][0] as EditorState

    const expected = {
      doc: {
        content: [
          {
            content: [
              {
                text: "Prepended content. Example content",
                type: "text",
              },
            ],
            type: "paragraph",
          },
        ],
        type: "doc",
      },
      selection: {
        anchor: 20,
        head: 20,
        type: "text",
      },
    }

    expect(updatedEditorState.toJSON()).toStrictEqual(expected)
  })

  it("defaults to editable", async () => {
    render(<Scenario />)

    await waitFor(() => {
      const editor = screen.getByTestId("testid--editor")
      expect(editor.children[0]).toHaveAttribute("contenteditable", "true")
    })
  })

  it("respects initial editable status", async () => {
    render(<Scenario editable={false} />)

    await waitFor(() => {
      const editor = screen.getByTestId("testid--editor")
      expect(editor.children[0]).toHaveAttribute("contenteditable", "false")
    })
  })

  it("updates editable status", async () => {
    render(<Scenario />)

    const editor = screen.getByTestId("testid--editor")

    await waitFor(() => {
      expect(editor.children[0]).toHaveAttribute("contenteditable", "true")
    })

    const disableEditButton = screen.getByText("Editable: false")
    await user.click(disableEditButton)

    await waitFor(() => {
      expect(editor.children[0]).toHaveAttribute("contenteditable", "false")
    })

    const enableEditButton = screen.getByText("Editable: true")
    await user.click(enableEditButton)

    await waitFor(() => {
      expect(editor.children[0]).toHaveAttribute("contenteditable", "true")
    })
  })
})
