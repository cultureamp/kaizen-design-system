import React from "react"
import { render } from "@testing-library/react"
import { MultiSelectOptions, MultiSelectOptionsProps } from "./MultiSelectOptions"

const MultiSelectOptionsWrapper = (customProps?: Partial<MultiSelectOptionsProps>): JSX.Element => (
  <MultiSelectOptions
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<MultiSelectOptions />", () => {
  it("does something", () => {
    render(<MultiSelectOptionsWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
