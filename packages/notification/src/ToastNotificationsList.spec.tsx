import React from "react"
import { fireEvent } from "@testing-library/dom"
import { act, render, waitFor, screen } from "@testing-library/react"
import { ToastNotificationsListContainer } from "./ToastNotificationsList"
import { ToastNotification } from "./types"

describe("<ToastNotificationsListContainer />", () => {
  it("passes the setNotifications callback", () => {
    const registerCallback = vi.fn()
    render(
      <ToastNotificationsListContainer
        registerSetNotificationsCallback={registerCallback}
        removeToastNotification={vi.fn()}
      />
    )

    expect(registerCallback).toHaveBeenCalledTimes(1)
  })

  it("renders notifications added through the setNotifications callback", async () => {
    let callback: (notifications: ToastNotification[]) => void | undefined
    const registerCallback = vi.fn(cb => (callback = cb))
    const removeToastNotification = vi.fn()
    render(
      <ToastNotificationsListContainer
        registerSetNotificationsCallback={registerCallback}
        removeToastNotification={removeToastNotification}
      />
    )
    act(() => {
      callback([
        {
          id: "abc123",
          type: "informative",
          title: "Title goes here",
          message: <>Child content</>,
          autohide: false,
          onHide: removeToastNotification,
        },
      ])
    })

    expect(await screen.findByText("Title goes here")).toBeInTheDocument()
  })

  it("calls removeToastNotification when a notification is hidden", async () => {
    let callback: (notifications: ToastNotification[]) => void | undefined
    const registerCallback = vi.fn(cb => (callback = cb))
    const removeToastNotification = vi.fn()
    const { getByRole } = render(
      <ToastNotificationsListContainer
        registerSetNotificationsCallback={registerCallback}
        removeToastNotification={removeToastNotification}
      />
    )
    act(() => {
      callback([
        {
          id: "abc123",
          type: "informative",
          title: "Title goes here",
          message: <>Child content</>,
          autohide: false,
          onHide: removeToastNotification,
        },
      ])
    })
    const button = getByRole("button")
    fireEvent.click(button)

    waitFor(() => {
      expect(removeToastNotification).toHaveBeenCalled()
    })
  })
})
