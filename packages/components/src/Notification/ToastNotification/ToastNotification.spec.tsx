import React from "react"
import { render, screen } from "@testing-library/react"
import { ToastNotification, ToastNotificationProps } from "./ToastNotification"
import { ToastNotificationsPortal } from "./ToastNotificationsPortal"
import { ToastNotificationProvider } from "./context/ToastNotificationContext"

const ToastNotificationWrapper = ({
  children,
  ...props
}: Partial<ToastNotificationProps>): JSX.Element => (
  <ToastNotificationProvider>
    <ToastNotificationsPortal />
    <ToastNotification type="positive" title="Success" {...props}>
      {children ?? "It worked!"}
    </ToastNotification>
  </ToastNotificationProvider>
)

describe("<ToastNotification />", () => {
  it('creates a single "status" container for notifications', async () => {
    render(<ToastNotificationWrapper />)

    const toastPortalManager = screen.getAllByRole("status")
    expect(toastPortalManager).toHaveLength(1)
  })

  it("renders a basic notification correctly", async () => {
    render(<ToastNotificationWrapper />)

    const notification = await screen.findByText("Success")
    expect(notification).toBeInTheDocument()
  })
})
