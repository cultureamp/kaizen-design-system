import React from "react"
import { render, screen } from "@testing-library/react"
import { FilterTriggerButton, FilterTriggerButtonProps } from "."

const FilterTriggerButtonWrapper = (
  props: Partial<FilterTriggerButtonProps>
) => <FilterTriggerButton label="Desserts" isOpen={false} {...props} />

describe("<FilterTriggerButton />", () => {
  it("should only show the label when there is no value", () => {
    render(<FilterTriggerButtonWrapper />)
    expect(
      screen.getByRole("button", { name: "Open filter - Desserts" })
    ).toBeVisible()
  })

  it("should show the label and selected value when defined", () => {
    render(<FilterTriggerButtonWrapper selectedValue="Cake" />)
    expect(
      screen.getByRole("button", { name: "Open filter - Desserts: Cake" })
    ).toBeVisible()
  })
})
