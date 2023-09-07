import React from "react"
import { render } from "@testing-library/react"
import { MultiSelect, MultiSelectProps } from "./MultiSelect"

const MultiSelectWrapper = (
  customProps?: Partial<MultiSelectProps>
): JSX.Element => (
  <MultiSelect
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<MultiSelect />", () => {
  it("does something", () => {
    render(<MultiSelectWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
