import React from "react"
import { render } from "@testing-library/react"
import { TextArea, TextAreaProps } from "./TextArea"

const TextAreaWrapper = (customProps?: Partial<TextAreaProps>): JSX.Element => (
  <TextArea
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<TextArea />", () => {
  it("does something", () => {
    render(<TextAreaWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
