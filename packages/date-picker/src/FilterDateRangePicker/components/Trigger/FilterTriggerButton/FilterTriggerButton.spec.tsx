import React from "react"
import { render, screen } from "@testing-library/react"
import { FilterTriggerButton, FilterTriggerButtonProps } from "."

const FilterTriggerButtonWrapper = (
  props: Partial<FilterTriggerButtonProps>
): JSX.Element => (
  <FilterTriggerButton label="Desserts" isOpen={false} {...props} />
)

describe("<FilterTriggerButton />", () => {
  it("has the required attributes when not expanded", () => {
    render(<FilterTriggerButtonWrapper />)
    const button = screen.getByRole("button", { name: "Desserts" })
    expect(button).toHaveAttribute("aria-haspopup", "true")
    expect(button).toHaveAttribute("aria-expanded", "false")
  })

  it("has the required attributes when expanded", () => {
    render(<FilterTriggerButtonWrapper isOpen />)
    const button = screen.getByRole("button", {
      name: "Desserts",
    })
    expect(button).toHaveAttribute("aria-haspopup", "true")
    expect(button).toHaveAttribute("aria-expanded", "true")
  })

  it("should only show the label when there is no value", () => {
    render(<FilterTriggerButtonWrapper />)
    expect(screen.getByRole("button", { name: "Desserts" })).toBeVisible()
  })

  it("should show the label and selected value when defined", () => {
    render(<FilterTriggerButtonWrapper selectedValue="Cake" />)
    expect(
      screen.getByRole("button", { name: "Desserts : Cake" })
    ).toBeVisible()
  })

  it("should only show the label when selected value is an empty string", () => {
    render(<FilterTriggerButtonWrapper selectedValue="" />)
    expect(screen.getByRole("button", { name: "Desserts" })).toBeVisible()
  })
})
