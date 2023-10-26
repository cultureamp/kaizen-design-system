import React from "react"
import { render, screen } from "@testing-library/react"
import { DropdownButton, DropdownButtonProps } from "./DropdownButton"

const DropdownButtonWrapper = (
  props?: Partial<DropdownButtonProps>
): JSX.Element => <DropdownButton {...props} />

describe("<DropdownButton />", () => {
  it("renders icon with default aria-label", () => {
    render(<DropdownButtonWrapper />)
    const button = screen.getByRole("button", { name: "Open menu" })
    expect(button.getAttribute("aria-label")).toBe("Open menu")
    expect(button.firstChild?.nodeName).toEqual("svg")
  })

  it("renders custom aria-label", () => {
    render(<DropdownButtonWrapper aria-label="Custom aria label" />)
    const button = screen.getByRole("button", { name: "Custom aria label" })
    expect(button.getAttribute("aria-label")).toBe("Custom aria label")
  })
})
