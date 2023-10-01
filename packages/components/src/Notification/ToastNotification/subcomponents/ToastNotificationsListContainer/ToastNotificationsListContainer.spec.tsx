import React from "react"
import { fireEvent } from "@testing-library/dom"
import { render, act, waitFor, screen } from "@testing-library/react"
import { ToastNotification } from "../../types"
import { ToastNotificationsListContainer } from "."

describe("<ToastNotificationsListContainer />", () => {
  it("passes the setNotifications callback", () => {
    const registerCallback = jest.fn()
    render(
      <ToastNotificationsListContainer
        registerSetNotificationsCallback={registerCallback}
        removeToastNotification={jest.fn()}
      />
    )

    expect(registerCallback).toHaveBeenCalledTimes(1)
  })

  it("renders notifications added through the setNotifications callback", async () => {
    let callback: (notifications: ToastNotification[]) => void | undefined
    const registerCallback = jest.fn(cb => (callback = cb))
    const removeToastNotification = jest.fn()
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
    const registerCallback = jest.fn(cb => (callback = cb))
    const removeToastNotification = jest.fn()
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
