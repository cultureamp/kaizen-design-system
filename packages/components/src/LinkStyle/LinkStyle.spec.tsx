import React from "react"
import { render } from "@testing-library/react"
import { LinkStyle, LinkStyleProps } from "./LinkStyle"

const LinkStyleWrapper = (customProps?: Partial<LinkStyleProps>): JSX.Element => (
  <LinkStyle
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<LinkStyle />", () => {
  it("does something", () => {
    render(<LinkStyleWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
