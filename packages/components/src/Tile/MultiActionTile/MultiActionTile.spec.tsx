import React from "react"
import { render } from "@testing-library/react"
import { MultiActionTile, MultiActionTileProps } from "./MultiActionTile"

const MultiActionTileWrapper = (customProps?: Partial<MultiActionTileProps>): JSX.Element => (
  <MultiActionTile
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<MultiActionTile />", () => {
  it("does something", () => {
    render(<MultiActionTileWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
