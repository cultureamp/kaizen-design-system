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

  describe("addToastNotification", () => {
    it('creates a "status" container for notifications', async () => {
      await act(async () => {
        addToastNotification({
          type: "informative",
          title: "Test portal",
          message: <p>Message goes here</p>,
          persistent: false,
        })
      })

      const toastPortalManager = await screen.findByRole("status")

      expect(toastPortalManager).toBeInTheDocument()

      // This is currently hard coded
      expect(
        await screen.getByTestId("toast-notification-manager-portal")
      ).toBeInTheDocument()
    })

    it("creates a notification", async () => {
      await act(async () => {
        addToastNotification({
          id: "abc-123",
          type: "informative",
          title: "Test portal",
          message: <p>Message goes here</p>,
          persistent: false,
        })
      })

      const toastItem = await screen.findByText("Message goes here")

      expect(toastItem).toBeInTheDocument()
    })

    it("updates the existing notification if addToastNotification is called with the same id", async () => {
      await act(async () => {
        addToastNotification({
          id: "abc-123",
          type: "informative",
          title: "Test portal",
          message: <p>Message goes here</p>,
          persistent: false,
          testId: "bbc-324",
        })
      })

      const toastItem = await screen.getByTestId("bbc-324")

      expect(toastItem).toHaveTextContent("Message goes here")

      await act(async () => {
        addToastNotification({
          id: "abc-123",
          type: "informative",
          title: "Test portal",
          message: <p>Updated Message</p>,
          persistent: false,
          testId: "bbc-324",
        })
      })

      expect(toastItem).toHaveTextContent("Updated Message")
    })
  })

  describe("removeToastNotification", () => {
    it("removes a single notifciation", async () => {
      await act(async () => {
        addToastNotification({
          id: "abc-123",
          type: "informative",
          title: "Test portal",
          message: <p>Message goes here</p>,
          persistent: false,
        })
      })

      const toastItem = await screen.findByText("Message goes here")
      expect(toastItem).toBeInTheDocument()

      await act(async () => {
        removeToastNotification("abc-123")
      })
      expect(toastItem).not.toBeInTheDocument()
    })
  })

  // describe("clearToastNotifications", () => {
  //   it("clears all notifications", () => {})
  // })

  // it("removes individual notifications by ID", async () => {
  //   const id = "remove-notifications"
  //   await act(async () => {
  //     addToastNotification({
  //       id,
  //       type: "informative",
  //       title: "Remove me",
  //       message: <p>Message goes here</p>,
  //       automationId: "remove-me",
  //       persistent: false,
  //     })
  //   })

  //   const element = screen.getByTestId("remove-me")
  //   expect(element).toHaveTextContent("Remove me")

  //   await act(async () => {
  //     removeToastNotification(id)
  //   })

  //   expect(queryByTestId(document.body, "first")).toBe(null)
  // })

  // it("clears all notifications", async () => {
  //   await act(async () => {
  //     addToastNotification({
  //       id: "clear-notifications-1",
  //       type: "informative",
  //       title: "Clear me",
  //       message: <p>Message goes here</p>,
  //       automationId: "clear-notifications-1",
  //       persistent: false,
  //     })
  //     addToastNotification({
  //       id: "clear-notifications-2",
  //       type: "informative",
  //       title: "Clear me too",
  //       message: <p>Message goes here</p>,
  //       automationId: "clear-notifications-2",
  //       persistent: false,
  //     })
  //   })

  //   const toastNotifications = document.querySelectorAll(".toast")
  //   expect(toastNotifications.length).toBe(2)

  //   await act(async () => {
  //     clearToastNotifications()
  //   })
  //   await waitFor(() => {
  //     expect(document.querySelectorAll(".toast").length).toBe(0)
  //   })
  // })
})
