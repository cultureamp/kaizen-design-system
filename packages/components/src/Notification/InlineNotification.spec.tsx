import React from "react"
import { render } from "@testing-library/react"
import { InlineNotification, InlineNotificationProps } from "./InlineNotification"

const InlineNotificationWrapper = (customProps?: Partial<InlineNotificationProps>): JSX.Element => (
  <InlineNotification
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<InlineNotification />", () => {
  it("does something", () => {
    render(<InlineNotificationWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
