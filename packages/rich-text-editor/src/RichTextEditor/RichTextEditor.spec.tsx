import React, { useState } from "react"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { EditorContentArray } from "../types"
import { RichTextEditor } from "./"

// This helper is needed to simulate selection of a component since we
// cannot userEvent.type with contenteditable
const getSelectionOfNode = node => {
  // Clear any current selection
  const selection = window.getSelection()
  selection?.removeAllRanges()

  // Select paragraph
  const range = document.createRange()
  range.selectNodeContents(node)
  selection?.addRange(range)
}

const TestRTE = args => {
  const { rteMockData, ...rest } = args
  const [rteData, setRTEData] = useState<EditorContentArray>(
    args.rteMockData || []
  )
  return (
    <>
      <RichTextEditor
        value={rteData}
        onChange={data => setRTEData(data)}
        {...rest}
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
    render(<TestRTE {...defaultListArgs} />)

    const bulletButton = screen.getByRole("button", { name: "Bullet List" })
    const orderedButton = screen.getByRole("button", { name: "Numbered List" })

    expect(bulletButton && orderedButton).toBeTruthy()
  })

  it("renders indent buttons when receiving a list controls", () => {
    render(<TestRTE {...defaultListArgs} />)

    const decreaseIndentBtn = screen.getByRole("button", {
      name: "Decrease indent",
    })
    const increaseIndentBtn = screen.getByRole("button", {
      name: "Increase indent",
    })

    expect(decreaseIndentBtn && increaseIndentBtn).toBeTruthy()
  })

  describe("Creating list nodes with buttons", () => {
    it("will create a <ul> when user clicks the bullet list button", async () => {
      render(<TestRTE {...defaultListArgs} />)

      // We would use userEvent.type but contenteditable is not supported
      // see thread: https://github.com/testing-library/user-event/issues/230
      fireEvent.focus(screen.getByRole("textbox", { name: "List RTE" }), {
        target: { textContent: "this will be a ul" },
      })

      await waitFor(() => {
        userEvent.click(screen.getByRole("button", { name: "Bullet List" }))
        screen.getByRole("list")

        expect(document.querySelectorAll("ul").length).toBeGreaterThan(0)
      })
    })

    it("will create a <ol> when user clicks the numbered list button", async () => {
      render(<TestRTE {...defaultListArgs} />)

      fireEvent.focus(screen.getByRole("textbox", { name: "List RTE" }), {
        target: { textContent: "this will be a ol" },
      })

      await waitFor(() => {
        userEvent.click(screen.getByRole("button", { name: "Numbered List" }))

        expect(document.querySelectorAll("ol").length).toBeGreaterThan(0)
      })
    })
  })

  describe("Indent list nodes with buttons", () => {
    const rteListData = [
      {
        type: "bulletList",
        content: [
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "First list item",
                  },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Second list item",
                  },
                ],
              },
            ],
          },
        ],
      },
    ]

    it("will render indent buttons as 'disabled'", () => {
      render(<TestRTE {...defaultListArgs} />)

      const decreaseIndentBtn = screen.getByRole("button", {
        name: "Decrease indent",
      })
      const increaseIndentBtn = screen.getByRole("button", {
        name: "Increase indent",
      })

      expect(decreaseIndentBtn).toHaveAttribute("aria-disabled", "true")
      expect(increaseIndentBtn).toHaveAttribute("aria-disabled", "true")
    })

    it("will enable increase indent when on a list item", () => {
      render(<TestRTE {...defaultListArgs} rteMockData={rteListData} />)

      const firstListNode = document.querySelectorAll("li")[0]
      const decreaseIndentBtn = screen.getByRole("button", {
        name: "Decrease indent",
      })

      getSelectionOfNode(firstListNode)

      expect(decreaseIndentBtn).toHaveAttribute("aria-disabled", "false")
    })
  })
})
