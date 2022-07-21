import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useSelectionContext } from "../../../provider"
import { SelectAllButton } from "./"

jest.mock("../../../provider", () => ({
  useSelectionContext: jest.fn(),
}))

describe("<SelectAllButton /> - interaction", () => {
  describe("Given not all options are selected", () => {
    it("triggesrs selectionManager.selectAll() when clicks on the button", () => {
      const spy = jest.fn()
      ;(useSelectionContext as jest.Mock).mockReturnValue({
        selectionState: {
          selectionManager: {
            isSelectAll: false,
            selectAll: spy,
          },
        },
      })
      render(<SelectAllButton />)
      userEvent.click(screen.getByRole("button"))

      expect(spy).toHaveBeenCalledTimes(1)
    })
  })

  describe("Given not all options are selected", () => {
    it("does not trigger selectionManager.selectAll() when clicks on the button", () => {
      const spy = jest.fn()
      ;(useSelectionContext as jest.Mock).mockReturnValue({
        selectionState: {
          selectionManager: {
            isSelectAll: true,
            selectAll: spy,
          },
        },
      })
      render(<SelectAllButton />)
      userEvent.click(screen.getByRole("button"))

      expect(spy).toHaveBeenCalledTimes(0)
    })
  })
})
