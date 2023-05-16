import React from "react"
import { queryByTestId, getByTestId, waitFor } from "@testing-library/dom"
import { act, screen } from "@testing-library/react"
import {
  addToastNotification,
  removeToastNotification,
  clearToastNotifications,
} from "."

describe("ToastNotificationsManager", () => {
  beforeEach(() => {
    act(() => {
      clearToastNotifications()
    })
  })

  it("creates a portal", async () => {
    await act(async () => {
      addToastNotification({
        type: "informative",
        title: "Test portal",
        autohide: false,
        message: <p>Message goes here</p>,
        persistent: false,
      })
    })

    expect(
      getByTestId(document.body, "toast-notification-manager-portal")
    ).not.toBe(null)
  })

  it("re-renders notifications with the same ID", async () => {
    await act(async () => {
      addToastNotification({
        id: "abc123",
        type: "informative",
        title: "First render",
        autohide: false,
        message: <p>Message goes here</p>,
        automationId: "first",
        persistent: false,
      })
    })

    expect(screen.getByTestId("first")).toHaveTextContent("First render")

    await act(async () => {
      addToastNotification({
        id: "abc123",
        type: "informative",
        title: "Second render",
        autohide: false,
        message: <p>Message goes here</p>,
        automationId: "second",
        persistent: false,
      })
    })

    expect(queryByTestId(document.body, "first")).not.toBeInTheDocument()
    const elementSecond = screen.getByTestId("second")

    expect(elementSecond).toHaveTextContent("Second render")
  })

  it("removes individual notifications by ID", async () => {
    const id = "remove-notifications"
    await act(async () => {
      addToastNotification({
        id,
        type: "informative",
        title: "Remove me",
        autohide: false,
        message: <p>Message goes here</p>,
        automationId: "remove-me",
        persistent: false,
      })
    })

    const element = screen.getByTestId("remove-me")
    expect(element).toHaveTextContent("Remove me")

    await act(async () => {
      removeToastNotification(id)
    })

    expect(queryByTestId(document.body, "first")).toBe(null)
  })

  it("clears all notifications", async () => {
    await act(async () => {
      addToastNotification({
        id: "clear-notifications-1",
        type: "informative",
        title: "Clear me",
        autohide: false,
        message: <p>Message goes here</p>,
        automationId: "clear-notifications-1",
        persistent: false,
      })
      addToastNotification({
        id: "clear-notifications-2",
        type: "informative",
        title: "Clear me too",
        autohide: false,
        message: <p>Message goes here</p>,
        automationId: "clear-notifications-2",
        persistent: false,
      })
    })

    const toastNotifications = document.querySelectorAll(".toast")
    expect(toastNotifications.length).toBe(2)

    await act(async () => {
      clearToastNotifications()
    })
    await waitFor(() => {
      expect(document.querySelectorAll(".toast").length).toBe(0)
    })
  })
})
