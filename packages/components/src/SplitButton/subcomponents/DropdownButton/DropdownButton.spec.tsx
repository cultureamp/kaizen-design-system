import React from "react"
import { screen, waitFor, render } from "@testing-library/react"
import { DropdownButton, DropdownButtonProps } from "./DropdownButton"

const DropdownButtonWrapper = (
  props?: Partial<DropdownButtonProps>
): JSX.Element => <DropdownButton {...props} />

describe("<DropdownButton />", () => {
  it("renders icon with default aria-label", async () => {
    render(<DropdownButtonWrapper />)
    await waitFor(() => {
      const button = screen.getByRole("button", { name: "Additional actions" })
      expect(button.getAttribute("aria-label")).toBe("Additional actions")
      expect(button.firstChild?.nodeName).toEqual("svg")
    })
  })

  it("renders custom aria-label", async () => {
    render(<DropdownButtonWrapper aria-label="Custom aria label" />)
    await waitFor(() => {
      const button = screen.getByRole("button", { name: "Custom aria label" })
      expect(button.getAttribute("aria-label")).toBe("Custom aria label")
    })
  })
})
