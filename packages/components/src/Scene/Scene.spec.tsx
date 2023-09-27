import React from "react"
import { render } from "@testing-library/react"
import { Scene, SceneProps } from "./Scene"

const SceneWrapper = (customProps?: Partial<SceneProps>): JSX.Element => (
  <Scene
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<Scene />", () => {
  it("does something", () => {
    render(<SceneWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
