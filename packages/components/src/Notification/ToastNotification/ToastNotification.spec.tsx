import React from "react"
import { render } from "@testing-library/react"
import { ToastNotification } from "./ToastNotification"

describe("<ToastNotification />", () => {
  it("renders a basic notification correctly", async () => {
    const { findByText } = render(
      <ToastNotification type="positive" title="Success">
        It worked!
      </ToastNotification>
    )

    const notifcation = await findByText("Success")
    expect(notifcation).toBeInTheDocument()
  })
})
