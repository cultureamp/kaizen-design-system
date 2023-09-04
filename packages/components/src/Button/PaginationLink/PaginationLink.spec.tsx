import React from "react"
import { render } from "@testing-library/react"
import { PaginationLink, PaginationLinkProps } from "./PaginationLink"

const PaginationLinkWrapper = (customProps?: Partial<PaginationLinkProps>): JSX.Element => (
  <PaginationLink
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<PaginationLink />", () => {
  it("does something", () => {
    render(<PaginationLinkWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
