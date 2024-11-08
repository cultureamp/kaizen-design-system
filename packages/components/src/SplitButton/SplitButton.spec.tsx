import React from "react"
import { screen, waitFor, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { vi } from "vitest"
import { MenuItem, MenuList } from "~components/__actions__/v2"
import { SplitButton, SplitButtonProps } from "./SplitButton"

const user = userEvent.setup()

const SplitButtonWrapper = (customProps?: Partial<SplitButtonProps>): JSX.Element => (
  <SplitButton
    actionButtonProps={{
      label: "Action Text",
      onClick: vi.fn(),
    }}
    dropdownButtonProps={{
      "aria-label": "Dropdown Label",
    }}
    dropdownContent={
      <MenuList>
        <MenuItem label="Menu Item 1" />
        <MenuItem label="Menu Item 2" />
      </MenuList>
    }
    {...customProps}
  />
)

describe("<SplitButton />", () => {
  it("renders the correct structure", async () => {
    render(<SplitButtonWrapper />)
    await waitFor(() => {
      expect(screen.getByText("Action Text")).toBeInTheDocument()
    })

    const dropdownButton = screen.getByLabelText("Dropdown Label")
    expect(dropdownButton).toBeInTheDocument()
    await user.click(dropdownButton)

    await waitFor(() => {
      expect(screen.getByText("Menu Item 1")).toBeInTheDocument()
      expect(screen.getByText("Menu Item 2")).toBeInTheDocument()
    })
  })

  it("disables both buttons when disabled is true", async () => {
    render(<SplitButtonWrapper disabled />)
    await waitFor(() => {
      expect(screen.getByText("Action Text").closest("button")).toBeDisabled()
    })
    expect(screen.getByLabelText("Dropdown Label").closest("button")).toBeDisabled()
  })
})
