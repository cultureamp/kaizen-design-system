import React from "react"
import { render } from "@testing-library/react"
import { CheckboxGroup } from "./CheckboxGroup"

describe("<CheckboxGroup />", () => {
  it("has an accessible name when not provided a labelId", () => {
    const { getByRole } = render(<CheckboxGroup labelText="Label title" />)
    expect(getByRole("group", { name: "Label title" })).toBeInTheDocument()
  })
  it("has an accessible name when provided a labelId", () => {
    const { getByRole } = render(
      <CheckboxGroup labelText="Label title" labelId="some-custom-id" />
    )
    expect(getByRole("group", { name: "Label title" })).toBeInTheDocument()
  })
})
