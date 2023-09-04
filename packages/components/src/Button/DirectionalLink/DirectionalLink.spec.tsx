import React from "react"
import { render } from "@testing-library/react"
import { DirectionalLink, DirectionalLinkProps } from "./DirectionalLink"

const DirectionalLinkWrapper = (customProps?: Partial<DirectionalLinkProps>): JSX.Element => (
  <DirectionalLink
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<DirectionalLink />", () => {
  it("does something", () => {
    render(<DirectionalLinkWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
