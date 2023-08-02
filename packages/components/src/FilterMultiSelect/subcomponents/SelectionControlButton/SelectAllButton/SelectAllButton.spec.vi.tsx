import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Mock } from "vitest"
import { useSelectionContext } from "../../../provider"
import { SelectAllButton } from "."

const user = userEvent.setup()

vi.mock("../../../provider", () => ({
  useSelectionContext: vi.fn(),
}))

describe("<SelectAllButton /> - interaction", () => {
  describe("Given not all options are selected", () => {
    it("triggers selectionManager.setSelectedKeys() with currently selected and filtered options when button is clicked", async () => {
      const spy = vi.fn()
      const selectedAndFiltered = "selectedAndFiltered"
      const filteredButNotSelected = "focusedButNotSelected"
      const selectedButNotFiltered = "selectedButNotFiltered"
      const selectedKeys = [selectedAndFiltered, selectedButNotFiltered]
      const filteredKeys = [selectedAndFiltered, filteredButNotSelected]

      ;(useSelectionContext as Mock).mockReturnValue({
        selectionState: {
          collection: {
            getKeys: () => filteredKeys,
          },
          selectionManager: {
            isSelectAll: false,
            selectedKeys,
            setSelectedKeys: spy,
            isSelected: (id: string) => selectedKeys.includes(id),
          },
        },
      })
      render(<SelectAllButton />)
      await user.click(screen.getByRole("button"))

      await waitFor(() => {
        expect(spy).toHaveBeenCalledTimes(1)
        expect(spy).toHaveBeenCalledWith([...selectedKeys, ...filteredKeys])
      })
    })
  })

  describe("Given all filtered options are selected", () => {
    it("does not trigger selectionManager.setSelectedKeys() when clicks on the button", async () => {
      const spy = vi.fn()
      const selectedAndFiltered1 = "selectedAndFiltered1"
      const selectedAndFiltered2 = "selectedAndFocused2"
      const selectedKeys = [selectedAndFiltered1, selectedAndFiltered2]
      const filteredKeys = [selectedAndFiltered1, selectedAndFiltered2]
      ;(useSelectionContext as Mock).mockReturnValue({
        selectionState: {
          collection: {
            getKeys: () => filteredKeys,
          },
          selectionManager: {
            isSelectAll: true,
            selectedKeys,
            setSelectedKeys: spy,
            isSelected: (id: string) => selectedKeys.includes(id),
          },
        },
      })
      render(<SelectAllButton />)
      await user.click(screen.getByRole("button"))

      await waitFor(() => {
        expect(spy).toHaveBeenCalledTimes(0)
      })
    })
  })

  describe("Given some options are disabled", () => {
    it("triggers selectionManager.setSelectedKeys() on non-disabled options", async () => {
      const spy = vi.fn()
      const filtered = "filtered"
      const filteredAndSelected = "filteredAndSelected"
      const filteredAndDisabled = "filteredAndDisabled"
      const selectedKeys = [filteredAndSelected]
      const filteredKeys = [filtered, filteredAndSelected, filteredAndDisabled]
      const disabledKeys = [filteredAndDisabled]

      ;(useSelectionContext as Mock).mockReturnValue({
        selectionState: {
          disabledKeys,
          collection: {
            getKeys: () => filteredKeys,
          },
          selectionManager: {
            isSelectAll: false,
            selectedKeys,
            setSelectedKeys: spy,
            isSelected: (id: string) => selectedKeys.includes(id),
          },
        },
      })
      render(<SelectAllButton />)
      await user.click(screen.getByRole("button"))

      await waitFor(() => {
        expect(spy).toHaveBeenCalledTimes(1)
        expect(spy).toHaveBeenCalledWith(
          expect.arrayContaining([filtered, filteredAndSelected])
        )
        expect(spy).not.toHaveBeenCalledWith(
          expect.arrayContaining(disabledKeys)
        )
      })
    })
  })
})
