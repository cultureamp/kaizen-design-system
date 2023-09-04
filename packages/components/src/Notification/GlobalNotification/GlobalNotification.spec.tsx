import React from "react"
import { render } from "@testing-library/react"
import { GlobalNotification } from "./GlobalNotification"

describe("<GlobalNotification />", () => {
  it("renders the positive notification correctly", () => {
    const { getByText } = render(
      <GlobalNotification type="positive">
        This is my positive notification
      </GlobalNotification>
    )

    expect(getByText("This is my positive notification")).toBeInTheDocument()
  })
  it("removes the notification from the DOM", () => {
    const { getByRole } = render(
      <GlobalNotification type="positive">
        This is my positive notification
      </GlobalNotification>
    )

    expect(
      getByRole("button", { name: "Close notification" })
    ).toBeInTheDocument()
  })
})
