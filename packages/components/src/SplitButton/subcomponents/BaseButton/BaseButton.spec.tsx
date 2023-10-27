import React from "react"
import { render, screen } from "@testing-library/react"
import { BaseButton, BaseButtonProps } from "./BaseButton"

const BUTTON_LABEL = "Button text"

const BaseButtonWrapper = (
  customProps?: Partial<BaseButtonProps>
): JSX.Element => <BaseButton label={BUTTON_LABEL} {...customProps} />

describe("<BaseButton />", () => {
  it("renders button as default", () => {
    render(<BaseButtonWrapper />)
    expect(
      screen.getByText(BUTTON_LABEL, { selector: "button" })
    ).toBeInTheDocument()
  })

  it("renders anchor when href is defined", () => {
    render(<BaseButtonWrapper href="" />)
    expect(
      screen.getByText(BUTTON_LABEL, { selector: "a" })
    ).toBeInTheDocument()
  })

  it("renders button when href is defined and disabled", () => {
    render(<BaseButtonWrapper href="" disabled />)
    expect(
      screen.getByText(BUTTON_LABEL, { selector: "button" })
    ).toBeInTheDocument()
  })

  it("renders icon when provided, and converts label to aria-label", () => {
    render(<BaseButtonWrapper icon={<svg />} />)
    const button = screen.getByRole("button", { name: BUTTON_LABEL })
    expect(button.getAttribute("aria-label")).toBe(BUTTON_LABEL)
    expect(button.childElementCount).toBe(1)
    expect(button.firstChild?.nodeName).toEqual("svg")
  })
})
