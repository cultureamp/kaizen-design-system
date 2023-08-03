import React from "react"
import { render, RenderResult, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MenuItem, MenuList } from "@kaizen/draft-menu"
import { SplitButton, SplitButtonProps } from "./SplitButton"

const user = userEvent.setup()

const DEFAULT_PROPS: SplitButtonProps = {
  actionButtonProps: {
    label: "Action Text",
    onClick: jest.fn<void, []>(),
  },
  dropdownButtonProps: {
    "aria-label": "Dropdown Label",
  },
  dropdownContent: (
    <MenuList>
      <MenuItem label="Menu Item 1" />
      <MenuItem label="Menu Item 2" />
    </MenuList>
  ),
}

const renderSplitButton = (
  customProps?: Partial<SplitButtonProps>
): RenderResult => {
  const props = { ...DEFAULT_PROPS, ...customProps }

  return render(<SplitButton {...props} />)
}

describe("<SplitButton />", () => {
  it("renders the correct structure", async () => {
    const { getByText, getByLabelText } = renderSplitButton()
    expect(getByText("Action Text")).toBeInTheDocument()

    const dropdownButton = getByLabelText("Dropdown Label")
    expect(dropdownButton).toBeInTheDocument()
    await user.click(dropdownButton)

    await waitFor(() => {
      expect(getByText("Menu Item 1")).toBeInTheDocument()
      expect(getByText("Menu Item 2")).toBeInTheDocument()
    })
  })

  it("disables both buttons when disabled is true", () => {
    const { getByText, getByLabelText } = renderSplitButton({ disabled: true })
    expect(getByText("Action Text").closest("button")).toBeDisabled()
    expect(getByLabelText("Dropdown Label").closest("button")).toBeDisabled()
  })
})
