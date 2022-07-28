import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useSelectionContext } from "../../../provider"
import { ClearButton } from "./"

jest.mock("../../../provider", () => ({
  useSelectionContext: jest.fn(),
}))

describe("<ClearButton /> - interaction", () => {
  describe("Given selection is not empty", () => {
    it("triggesrs selectionManager.clearSelection() when clicks on the button", () => {
      const spy = jest.fn()
      ;(useSelectionContext as jest.Mock).mockReturnValue({
        selectionState: {
          selectionManager: {
            isEmpty: false,
            clearSelection: spy,
          },
        },
      })
      render(<ClearButton />)
      userEvent.click(screen.getByRole("button"))

      expect(spy).toHaveBeenCalledTimes(1)
    })
  })

  describe("Given selection is empty", () => {
    it("does not trigger selectionManager.clearSelection() when clicks on the button", () => {
      const spy = jest.fn()
      ;(useSelectionContext as jest.Mock).mockReturnValue({
        selectionState: {
          selectionManager: {
            isEmpty: true,
            clearSelection: spy,
          },
        },
      })
      render(<ClearButton />)
      userEvent.click(screen.getByRole("button"))

      expect(spy).toHaveBeenCalledTimes(0)
    })
  })
})
