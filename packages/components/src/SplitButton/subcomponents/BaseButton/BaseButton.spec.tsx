import React from "react"
import { render } from "@testing-library/react"
import { BaseButton, BaseButtonProps } from "./BaseButton"

const BUTTON_LABEL = "Button text"

const BaseButtonWrapper = (
  customProps?: Partial<BaseButtonProps>
): JSX.Element => <BaseButton label={BUTTON_LABEL} {...customProps} />

describe("<BaseButton />", () => {
  it("renders button as default", () => {
    const { getByText } = render(<BaseButtonWrapper />)
    expect(getByText(BUTTON_LABEL, { selector: "button" })).toBeInTheDocument()
  })

  it("renders anchor when href is defined", () => {
    const { getByText } = render(<BaseButtonWrapper href="" />)
    expect(getByText(BUTTON_LABEL, { selector: "a" })).toBeInTheDocument()
  })

  it("renders button when href is defined and disabled", () => {
    const { getByText } = render(<BaseButtonWrapper href="" disabled />)
    expect(getByText(BUTTON_LABEL, { selector: "button" })).toBeInTheDocument()
  })

  it("renders icon when provided, and converts label to aria-label", () => {
    const { getByRole } = render(<BaseButtonWrapper icon={<svg />} />)
    const button = getByRole("button", { name: BUTTON_LABEL })
    expect(button.getAttribute("aria-label")).toBe(BUTTON_LABEL)
    expect(button.childElementCount).toBe(1)
    expect(button.firstChild?.nodeName).toEqual("svg")
  })
})
