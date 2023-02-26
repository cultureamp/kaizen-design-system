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
    it("triggers selectionManager.selSelectedKeys() with focused keys filtered out when button is clicked", async () => {
      const spy = jest.fn()
      const selectedAndFocused = "selectedAndFocused"
      const selectedButNotFocused = "selectedButNotFocused"
      const selectedKeys = [selectedAndFocused, selectedButNotFocused]
      const filteredKeys = [selectedAndFocused]
      ;(useSelectionContext as jest.Mock).mockReturnValue({
        selectionState: {
          collection: {
            getKeys: () => filteredKeys,
          },
          selectionManager: {
            isEmpty: false,
            setSelectedKeys: spy,
            selectedKeys,
            isSelected: id => selectedKeys.includes(id),
          },
        },
      })
      render(<ClearButton />)
      await userEvent.click(screen.getByRole("button"))

      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith([selectedButNotFocused])
    })
  })

  describe("Given selection is empty", () => {
    it("does not trigger selectionManager.setSelectedKeys() when clicks on the button", async () => {
      const spy = jest.fn()
      const filteredKeys = []
      const selectedKeys = []
      ;(useSelectionContext as jest.Mock).mockReturnValue({
        selectionState: {
          collection: {
            getKeys: () => filteredKeys,
          },
          selectionManager: {
            isEmpty: true,
            selectedKeys,
            setSelectedKeys: spy,
          },
        },
      })
      render(<ClearButton />)
      await userEvent.click(screen.getByRole("button"))

      expect(spy).toHaveBeenCalledTimes(0)
    })
  })
})
