import React from "react"
import { render } from "@testing-library/react"
import { Pagination, PaginationProps } from "./Pagination"

const PaginationWrapper = (customProps?: Partial<PaginationProps>): JSX.Element => (
  <Pagination
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<Pagination />", () => {
  it("does something", () => {
    render(<PaginationWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
