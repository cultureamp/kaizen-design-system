import React from "react"
import { render } from "@testing-library/react"
import { GlobalNotification } from "./GlobalNotification"

describe("<GlobalNotification />", () => {
  it("renders the positive notification correctly", () => {
    const { container } = render(
      <GlobalNotification type="positive">
        This is my positive notification
      </GlobalNotification>
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders the informative notification correctly", () => {
    const { container } = render(
      <GlobalNotification type="informative">
        This is my <em>informational</em> notification
      </GlobalNotification>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
