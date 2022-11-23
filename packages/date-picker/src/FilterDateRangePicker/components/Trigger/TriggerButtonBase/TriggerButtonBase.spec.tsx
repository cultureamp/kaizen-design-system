import React from "react"
import { render, screen } from "@testing-library/react"
import { TriggerButtonBase, TriggerButtonBaseProps } from "."

const TriggerButtonBaseWrapper = (props: Partial<TriggerButtonBaseProps>) => (
  <TriggerButtonBase isOpen={false} {...props}>
    Pancake
  </TriggerButtonBase>
)

describe("<TriggerButtonBase />", () => {
  it("has the required attributes when not expanded", () => {
    render(<TriggerButtonBaseWrapper />)
    const button = screen.getByRole("button", { name: "Open filter - Pancake" })
    expect(button).toHaveAttribute("aria-haspopup", "true")
    expect(button).toHaveAttribute("aria-expanded", "false")
  })

  it("has the required attributes when expanded", () => {
    render(<TriggerButtonBaseWrapper isOpen />)
    const button = screen.getByRole("button", {
      name: "Close filter - Pancake",
    })
    expect(button).toHaveAttribute("aria-haspopup", "true")
    expect(button).toHaveAttribute("aria-expanded", "true")
  })
})
