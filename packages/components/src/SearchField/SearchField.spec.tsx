import React from "react"
import { render } from "@testing-library/react"
import { SearchField, SearchFieldProps } from "./SearchField"

const SearchFieldWrapper = (customProps?: Partial<SearchFieldProps>): JSX.Element => (
  <SearchField
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<SearchField />", () => {
  it("does something", () => {
    render(<SearchFieldWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
