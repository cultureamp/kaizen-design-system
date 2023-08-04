import React from "react"
import { render, RenderResult } from "@testing-library/react"
import { BaseButton, BaseButtonProps } from "./BaseButton"
import styles from "./BaseButton.module.scss"

const BUTTON_LABEL = "Button text"

const DEFAULT_PROPS: BaseButtonProps = {
  label: BUTTON_LABEL,
}

const renderBaseButton = (
  customProps?: Partial<BaseButtonProps>
): RenderResult => {
  const props = { ...DEFAULT_PROPS, ...customProps }

  return render(<BaseButton {...props} />)
}

describe("<BaseButton />", () => {
  it("renders correctly with default values", () => {
    const { getByText } = renderBaseButton()
    const button = getByText(BUTTON_LABEL, { selector: "button" })
    expect(button).toHaveClass(styles.themeDefault)
  })

  it("renders anchor when href is defined", () => {
    const { getByText } = renderBaseButton({ href: "" })
    expect(getByText(BUTTON_LABEL, { selector: "a" })).toBeInTheDocument()
  })

  it("renders button when href is defined and disabled", () => {
    const { getByText } = renderBaseButton({ href: "", disabled: true })
    expect(getByText(BUTTON_LABEL, { selector: "button" })).toBeInTheDocument()
  })

  it("renders icon when provided, and converts label to aria-label", () => {
    const { getByRole } = renderBaseButton({ icon: <svg /> })
    const button = getByRole("button", { name: BUTTON_LABEL })
    expect(button.getAttribute("aria-label")).toBe(BUTTON_LABEL)
    expect(button.childElementCount).toBe(1)
    expect(button.firstChild?.nodeName).toEqual("svg")
  })

  it("applies the reversed styles when isReversed is true", async () => {
    const { getByText } = renderBaseButton({ isReversed: true })
    expect(getByText(BUTTON_LABEL)).toHaveClass(styles.themeReversed)
  })
})
