import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useSelectionContext } from "../../../provider"
import { ClearButton } from "./"

jest.mock("../../../provider", () => ({
  useSelectionContext: jest.fn(),
}))

describe("<ClearButton /> - interaction", () => {
  it("triggers selectionManager.clearSelection() when clicks on the button", () => {
    const spy = jest.fn()
    ;(useSelectionContext as jest.Mock).mockReturnValue({
      selectionState: {
        selectionManager: {
          isSelected: true,
          clearSelection: spy,
        },
      },
    })
    render(<ClearButton />)
    userEvent.click(screen.getByRole("button"))

    expect(spy).toHaveBeenCalledTimes(1)
  })
})
