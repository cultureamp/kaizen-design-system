import React from "react"
import { configure, queryByTestId, getByTestId } from "@testing-library/dom"
import { act } from "@testing-library/react"
import {
  addToastNotification,
  removeToastNotification,
  clearToastNotifications,
} from "."

configure({ testIdAttribute: "data-automation-id" })

describe("ToastNotificationsManager", () => {
  beforeEach(() => {
    act(() => {
      clearToastNotifications()
    })
  })

  it("creates a portal", () => {
    act(() => {
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
    act(() => {
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

    expect(
      getByTestId(document.body, "first").querySelector("h6")?.textContent
    ).toBe("First render")

    act(() => {
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

    expect(queryByTestId(document.body, "first")).toBe(null)
    expect(
      getByTestId(document.body, "second").querySelector("h6")?.textContent
    ).toBe("Second render")
  })

  it("removes individual notifications by ID", async () => {
    const id = "remove-notifications"
    act(() => {
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

    expect(
      getByTestId(document.body, "remove-me").querySelector("h6")?.textContent
    ).toBe("Remove me")

    act(() => {
      removeToastNotification(id)
    })

    expect(queryByTestId(document.body, "first")).toBe(null)
  })

  it("clears all notifications", async () => {
    act(() => {
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

    expect(document.querySelectorAll(".toast").length).toBe(2)

    act(() => {
      clearToastNotifications()
    })

    expect(document.querySelectorAll(".toast").length).toBe(0)
  })
})
