import React from "react"
import { render } from "@testing-library/react"
import { Filter, FilterProps } from "./Filter"

const FilterWrapper = (customProps?: Partial<FilterProps>): JSX.Element => (
  <Filter
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<Filter />", () => {
  it("does something", () => {
    render(<FilterWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
