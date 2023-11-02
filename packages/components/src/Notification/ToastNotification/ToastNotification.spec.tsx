import React from "react"
import { render, screen } from "@testing-library/react"
import { ToastNotification } from "./ToastNotification"
import { clearToastNotifications } from "./subcomponents/ToastNotificationManager"

describe("<ToastNotification />", () => {
  beforeEach(() => {
    clearToastNotifications()
  })
  it('creates a single "status" container for notifications', async () => {
    render(
      <ToastNotification type="positive" title="Success">
        It worked!
      </ToastNotification>
    )

    const toastPortalManager = await screen.getAllByRole("status")

    expect(toastPortalManager).toHaveLength(1)
  })
  it("renders a basic notification correctly", async () => {
    render(
      <ToastNotification type="positive" title="Success">
        It worked!
      </ToastNotification>
    )

    const notification = await screen.findByText("Success")
    expect(notification).toBeInTheDocument()
  })
})
