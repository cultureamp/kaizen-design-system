import React from "react"
import { render, screen } from "@testing-library/react"
import { FilterButton, FilterButtonProps } from "."

const FilterButtonWrapper = (
  props: Partial<FilterButtonProps>
): JSX.Element => <FilterButton label="Desserts" isOpen={false} {...props} />

describe("<FilterButton />", () => {
  it("has the required attributes when not expanded", () => {
    render(<FilterButtonWrapper />)
    const button = screen.getByRole("button", { name: "Desserts" })
    expect(button).toHaveAttribute("aria-haspopup", "true")
    expect(button).toHaveAttribute("aria-expanded", "false")
  })

  it("has the required attributes when expanded", () => {
    render(<FilterButtonWrapper isOpen />)
    const button = screen.getByRole("button", {
      name: "Desserts",
    })
    expect(button).toHaveAttribute("aria-haspopup", "true")
    expect(button).toHaveAttribute("aria-expanded", "true")
  })

  it("should only show the label when there is no value", () => {
    render(<FilterButtonWrapper />)
    expect(screen.getByRole("button", { name: "Desserts" })).toBeVisible()
  })

  it("should show the label and selected value when defined", () => {
    render(<FilterButtonWrapper selectedValue="Cake" />)
    expect(
      screen.getByRole("button", { name: "Desserts : Cake" })
    ).toBeVisible()
  })

  it("should only show the label when selected value is an empty string", () => {
    render(<FilterButtonWrapper selectedValue="" />)
    expect(screen.getByRole("button", { name: "Desserts" })).toBeVisible()
  })
})
