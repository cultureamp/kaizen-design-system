import { cleanup, render } from "@testing-library/react"
import * as React from "react"
import GlobalNotification from "./GlobalNotification"

afterEach(cleanup)

test("The basic notification renders correctly", () => {
  const { container } = render(
    <GlobalNotification type="affirmative">
      This is my positive notification
    </GlobalNotification>
  )

  expect(container.firstChild).toMatchSnapshot()
})

test("You can change the type", () => {
  const { container } = render(
    <GlobalNotification type="informative">
      This is my <em>informational</em> notification
    </GlobalNotification>
  )

  expect(container.firstChild).toMatchSnapshot()
})
