import React from "react"
import { render } from "@testing-library/react"
import { InformationTile, InformationTileProps } from "./InformationTile"

const InformationTileWrapper = (customProps?: Partial<InformationTileProps>): JSX.Element => (
  <InformationTile
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<InformationTile />", () => {
  it("does something", () => {
    render(<InformationTileWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
