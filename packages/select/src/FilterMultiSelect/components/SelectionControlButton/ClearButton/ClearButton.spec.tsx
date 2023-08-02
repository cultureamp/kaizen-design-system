import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useSelectionContext } from "../../../provider"
import { ClearButton } from "./"

const user = userEvent.setup()

vi.mock("../../../provider", () => ({
  useSelectionContext: vi.fn(),
}))

describe("<ClearButton /> - interaction", () => {
  describe("Given selection is not empty", () => {
    it("triggers selectionManager.selSelectedKeys() with focused keys filtered out when button is clicked", async () => {
      const spy = vi.fn()
      const selectedAndFocused = "selectedAndFocused"
      const selectedButNotFocused = "selectedButNotFocused"
      const selectedKeys: string[] = [selectedAndFocused, selectedButNotFocused]
      const filteredKeys: string[] = [selectedAndFocused]
      ;(useSelectionContext as vi.Mock).mockReturnValue({
        selectionState: {
          collection: {
            getKeys: () => filteredKeys,
          },
          selectionManager: {
            isEmpty: false,
            setSelectedKeys: spy,
            selectedKeys,
            isSelected: (id: string) => selectedKeys.includes(id),
          },
        },
      })
      render(<ClearButton />)
      await user.click(screen.getByRole("button"))

      await waitFor(() => {
        expect(spy).toHaveBeenCalledTimes(1)
        expect(spy).toHaveBeenCalledWith([selectedButNotFocused])
      })
    })
  })

  describe("Given selection is empty", () => {
    it("does not trigger selectionManager.setSelectedKeys() when clicks on the button", async () => {
      const spy = vi.fn()
      const filteredKeys: string[] = []
      const selectedKeys: string[] = []
      ;(useSelectionContext as vi.Mock).mockReturnValue({
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
      await user.click(screen.getByRole("button"))

      await waitFor(() => {
        expect(spy).toHaveBeenCalledTimes(0)
      })
    })
  })
})
