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
    it("triggers selectionManager.setSelectedKeys() with currently selected and filtered options when button is clicked", () => {
      const spy = jest.fn()
      const selectedAndFocused = "selectedAndFocused"
      const filteredButNotSelected = "focusedButNotSelected"
      const selectedButNotFocused = "selectedButNotFocused"
      const selectedKeys = [selectedAndFocused, selectedButNotFocused]
      const filteredKeys = [selectedAndFocused, filteredButNotSelected]
      const expected = [
        selectedAndFocused,
        filteredButNotSelected,
        selectedButNotFocused,
      ]

      ;(useSelectionContext as jest.Mock).mockReturnValue({
        selectionState: {
          collection: {
            getKeys: () => filteredKeys,
          },
          selectionManager: {
            isSelectAll: false,
            selectedKeys,
            setSelectedKeys: spy,
            isSelected: id => selectedKeys.includes(id),
          },
        },
      })
      render(<SelectAllButton />)
      userEvent.click(screen.getByRole("button"))

      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith([...selectedKeys, ...filteredKeys])
    })
  })

  describe("Given all filtered options are selected", () => {
    it("does not trigger selectionManager.setSelectedKeys() when clicks on the button", () => {
      const spy = jest.fn()
      const selectedAndFocused1 = "selectedAndFocused1"
      const selectedAndFocused2 = "selectedAndFocused2"
      const selectedKeys = [selectedAndFocused1, selectedAndFocused2]
      const filteredKeys = [selectedAndFocused1, selectedAndFocused2]
      ;(useSelectionContext as jest.Mock).mockReturnValue({
        selectionState: {
          collection: {
            getKeys: () => filteredKeys,
          },
          selectionManager: {
            isSelectAll: true,
            selectedKeys,
            setSelectedKeys: spy,
            isSelected: id => selectedKeys.includes(id),
          },
        },
      })
      render(<SelectAllButton />)
      userEvent.click(screen.getByRole("button"))

      expect(spy).toHaveBeenCalledTimes(0)
    })
  })
})
