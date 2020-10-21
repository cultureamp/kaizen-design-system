import { MenuItem, MenuList } from "@kaizen/component-library"

import { cleanup, render } from "@testing-library/react"
import * as React from "react"
import SplitButton, { SplitButtonProps } from "./SplitButton"
const editIcon = require("../../../icons/edit.icon.svg")
const duplicateIcon = require("../../../icons/duplicate.icon.svg")

afterEach(cleanup)

const defaultSplitButtonProps: SplitButtonProps = {
  automationId: "SplitButtonAutomationId",
  disabled: false,
  label: "Edit",
  dropdownContent: (
    <MenuList>
      <MenuItem
        action={(e: any) => {
          e.preventDefault()
        }}
        icon={editIcon}
      >
        Menu Item 1
      </MenuItem>
      <MenuItem
        action={(e: any) => {
          e.preventDefault()
        }}
        icon={duplicateIcon}
      >
        Menu Item 2
      </MenuItem>
    </MenuList>
  ),
  dropdownAltText: "Open menu",
}
const renderSplitButton = (props?: SplitButtonProps) => {
  const mergedSplitButtonProps = { ...defaultSplitButtonProps, ...props }

  return render(<SplitButton {...mergedSplitButtonProps} />)
}

describe("<SplitButton />", () => {
  it("has the disabled attribute applied if the disabled prop is true", () => {
    const { container } = renderSplitButton({
      ...defaultSplitButtonProps,
      disabled: true,
    })
    expect(container.querySelector("[disabled]")).toBeTruthy()
  })

  it("should render a `data-automation-id` attribute", () => {
    const { container } = renderSplitButton()
    expect(
      container.querySelector(
        `[data-automation-id="${defaultSplitButtonProps.automationId}"]`
      )
    ).toBeTruthy()
  })

  it("renders a button element when there is no route supplied", () => {
    const { container } = renderSplitButton()
    expect(
      container.querySelector(
        'button[data-automation-id="split-button-button"]'
      )
    ).toBeTruthy()
  })

  it("renders an anchor element when a route is supplied", () => {
    const { container } = renderSplitButton({
      ...defaultSplitButtonProps,
      href: "//example.com",
    })
    expect(
      container.querySelector('a[data-automation-id="split-button-button"]')
    ).toBeTruthy()
  })
})
