import React from "react"
import { render, screen } from "@testing-library/react"
import { ToastNotification } from "./ToastNotification"

describe("<ToastNotification />", () => {
  it("renders a basic notification correctly", async () => {
    render(
      <ToastNotification type="positive" title="Success">
        It worked!
      </ToastNotification>
    )

    const notifcation = await screen.findByText("Success")
    expect(notifcation).toBeInTheDocument()
  })
})
