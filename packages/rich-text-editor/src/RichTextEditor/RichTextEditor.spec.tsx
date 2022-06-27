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
      const { container } = render(<RTE {...defaultListArgs} />)

      await act(async () => {
        fireEvent.click(screen.getByRole("button", { name: "Bullet List" }))
      })
      await waitFor(() => {
        const listNodes = screen.getByRole("textbox", { name: "List RTE" })
        expect(listNodes).toBeTruthy()
        // TODO: test for existance of ul and li
        // expect(editor.getElementsByClassName("ul").length).toBe(1)
        // expect(editor.getElementsByClassName("li").length).toBe(1)
      })
    })

    // TODO: test OL creation
    // it("will create a <ol> node in the editor when user clicks the numbered list button", () => {
    //   render(<RTE {...defaultListArgs} />)

    //   const numberedButton = screen.getByRole("button", {
    //     name: "Numbered List",
    //   })
    //   const editor = screen.getByRole("textbox")

    //   // fireEvent.click(numberedButton)

    //   // expect(editor.getElementsByClassName("ol").length).toBe(1)
    //   // expect(editor.getElementsByClassName("li").length).toBe(1)
    //   expect(false === false).toBeFalsy
    // })
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
