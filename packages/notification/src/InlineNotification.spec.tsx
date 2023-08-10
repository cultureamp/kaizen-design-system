import React from "react"
import { render, screen } from "@testing-library/react"
import { HeadingProps } from "@kaizen/typography"
import { InlineNotification } from "./InlineNotification"

describe("<InlineNotification />", () => {
  it("renders a basic notification correctly", () => {
    const { container } = render(
      <InlineNotification type="cautionary" title="Warning">
        Something has gone wrong
      </InlineNotification>
    )

    expect(container.querySelector(".cancel")).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders a notification with a custom heading level", () => {
    const customHeadingProps: HeadingProps = {
      variant: "heading-6",
      tag: "h2",
      children: "Custom",
    }
    render(
      <InlineNotification
        type="positive"
        headingProps={customHeadingProps}
        persistent
      >
        Something has gone wrong
      </InlineNotification>
    )

    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument()
  })
})
