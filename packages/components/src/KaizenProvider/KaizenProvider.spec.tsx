import React from "react"
import { render } from "@testing-library/react"
import { KaizenProvider, KaizenProviderProps } from "./KaizenProvider"

const KaizenProviderWrapper = (customProps?: Partial<KaizenProviderProps>): JSX.Element => (
  <KaizenProvider
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<KaizenProvider />", () => {
  it("does something", () => {
    render(<KaizenProviderWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
