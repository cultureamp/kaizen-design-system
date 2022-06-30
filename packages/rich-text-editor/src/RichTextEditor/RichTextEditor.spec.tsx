import React, { useState } from "react"
import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
  act,
} from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { RichTextEditor, EditorContentArray } from "./"

const getSelectionOfNode = node => {
  const range = document.createRange()
  range.selectNodeContents(node)
  range.collapse(false)
  const selection = document.getSelection()
  selection?.addRange(range)
}

// TODO: List Tests
const RTE = args => {
  const [rteData, setRTEData] = useState<EditorContentArray>([])
  return (
    <>
      nmv us
      {/* this is currently erroring so this is a placeholder */}
      <RichTextEditor
        value={rteData}
        onChange={data => setRTEData(data)}
        {...args}
      />
    </>
  )
}

describe("RTE receives list controls", () => {
  const defaultListArgs = {
    labelText: "List RTE",
    rows: 3,
    controls: [
      { name: "orderedList", group: "list" },
      { name: "bulletList", group: "list" },
    ],
  }

  it("renders list buttons when receiving a list controls", () => {
    render(<RTE {...defaultListArgs} />)

    const bulletButton = screen.getByRole("button", { name: "Bullet List" })
    const orderedButton = screen.getByRole("button", { name: "Numbered List" })

    expect(bulletButton && orderedButton).toBeTruthy()
  })

  it("renders indent buttons when receiving a list controls", () => {
    render(<RTE {...defaultListArgs} />)

    const decreaseIndentBtn = screen.getByRole("button", {
      name: "Decrease indent",
    })
    const increaseIndentBtn = screen.getByRole("button", {
      name: "Increase indent",
    })

    expect(decreaseIndentBtn && increaseIndentBtn).toBeTruthy()
  })

  describe("Creating list nodes", () => {
    it("will create a <ul> node in the editor when user clicks the bullet list button", async () => {
      render(<RTE {...defaultListArgs} />)

      // We would use userEvent.type but contenteditable is not supported
      // see thread: https://github.com/testing-library/user-event/issues/230
      fireEvent.focus(screen.getByRole("textbox", { name: "List RTE" }), {
        target: { textContent: "this will be a ul" },
      })

      await waitFor(() => {
        const resolvedEditor = screen.getByText("this will be a ul").parentNode

        getSelectionOfNode(resolvedEditor)
        userEvent.click(screen.getByRole("button", { name: "Bullet List" }))
        screen.getByRole("list")

        expect(screen.getByRole("list")).toBeInTheDocument()
        expect(document.querySelectorAll("ul").length).toBeGreaterThan(0)
      })
    })

    it("will create a <ol> node in the editor when user clicks the numbered list button", async () => {
      render(<RTE {...defaultListArgs} />)

      fireEvent.focus(screen.getByRole("textbox", { name: "List RTE" }), {
        target: { textContent: "this will be a ol" },
      })

      await waitFor(() => {
        const editor = screen.getByText("this will be a ol").parentNode

        getSelectionOfNode(editor)
        userEvent.click(screen.getByRole("button", { name: "Numbered List" }))

        expect(screen.getByRole("list")).toBeInTheDocument()
        expect(document.querySelectorAll("ol").length).toBeGreaterThan(0)
      })
    })
  })

  describe("Handling disabled states", () => {
    it("indent buttons are 'disabled' by default", () => {
      render(<RTE {...defaultListArgs} />)

      const decreaseIndentBtn = screen.getByRole("button", {
        name: "Decrease indent",
      })
      const increaseIndentBtn = screen.getByRole("button", {
        name: "Increase indent",
      })

      expect(decreaseIndentBtn).toHaveAttribute("aria-disabled", "true")
      expect(increaseIndentBtn).toHaveAttribute("aria-disabled", "true")
    })

    // TODO: test decrease indent
    // it("decrease indent button is enabled only when on a list element", () => {
    //   render(<RTE {...defaultListArgs} />)

    //   const decreaseIndentBtn = screen.getByRole("button", {
    //     name: "Decrease indent",
    //   })

    //   // create a list node and navigate to the first list item

    //   // expect(decreaseIndentBtn).toHaveAttribute("aria-disabled", "false")
    //   expect(false === false).toBeFalsy
    // })

    // TODO: test increase indent
    // it("increase indent button is enabled only when on the second list item and above", () => {
    //   render(<RTE {...defaultListArgs} />)

    //   const increaseIndentBtn = screen.getByRole("button", {
    //     name: "Increase indent",
    //   })

    //   // expect(increaseIndentBtn).toHaveAttribute("aria-disabled", "false")
    //   expect(false === false).toBeFalsy
    // })
  })
})
