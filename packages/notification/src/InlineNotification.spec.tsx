import { HeadingProps } from "@kaizen/typography"
import { cleanup, render, screen } from "@testing-library/react"
import * as React from "react"
import InlineNotification from "./InlineNotification"

afterEach(cleanup)

test("The basic notification renders correctly", () => {
  const { container } = render(
    <InlineNotification type="cautionary" title="Warning">
      Something has gone wrong
    </InlineNotification>
  )

  expect(container.querySelector(".cancel")).toBeTruthy()
  expect(container.firstChild).toMatchSnapshot()
})

test("Persistent versions of the notifications work", () => {
  const { container } = render(
    <InlineNotification type="negative" title="Error" persistent>
      Something has gone wrong
    </InlineNotification>
  )

  expect(container.querySelector(".cancel")).toBeFalsy()
  expect(container.firstChild).toMatchSnapshot()
})

test("Custom heading level is applied", () => {
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
