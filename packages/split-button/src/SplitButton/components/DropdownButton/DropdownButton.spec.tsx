import React from "react"
import { render, RenderResult } from "@testing-library/react"
import { DropdownButton, DropdownButtonProps } from "./DropdownButton"

const renderDropdownButton = (props?: Partial<DropdownButtonProps>): RenderResult =>
  render(<DropdownButton {...props} />)

describe("<DropdownButton />", () => {
  it("renders icon with default aria-label", () => {
    const { getByRole } = renderDropdownButton()
    const button = getByRole("button", { name: "Open menu" })
    expect(button.getAttribute("aria-label")).toBe("Open menu")
    expect(button.firstChild?.nodeName).toEqual("svg")
  })

  it("renders custom aria-label", () => {
    const { getByRole } = renderDropdownButton({
      "aria-label": "Custom aria label",
    })
    const button = getByRole("button", { name: "Custom aria label" })
    expect(button.getAttribute("aria-label")).toBe("Custom aria label")
  })
})
