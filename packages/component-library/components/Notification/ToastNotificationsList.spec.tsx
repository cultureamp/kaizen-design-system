import { act, configure, render, waitFor } from "@testing-library/react"
import { fireEvent } from "@testing-library/dom"
import * as React from "react"
import { ToastNotificationsListContainer } from "./ToastNotificationsList"
import { ToastNotification } from "./types"

configure({ testIdAttribute: "data-automation-id" })

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

  it("renders notifications added through the setNotifications callback", () => {
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
          children: <>Child content</>,
          autohide: false,
          onHide: removeToastNotification,
        },
      ])
    })
    expect(getByRole("heading").textContent).toEqual("Title goes here")
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
          children: <>Child content</>,
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
