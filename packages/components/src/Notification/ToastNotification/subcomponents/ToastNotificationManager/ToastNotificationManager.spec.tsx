import React from "react"
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
    it('creates a single "status" container for notifications', async () => {
      await act(async () => {
        addToastNotification({
          type: "informative",
          title: "Test portal",
          message: <p>Message goes here</p>,
          persistent: false,
        })
      })

      const toastPortalManager = await screen.getAllByRole("status")

      expect(toastPortalManager).toHaveLength(1)

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
          "data-testid": "bbc-324",
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
          "data-testid": "bbc-324",
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

  describe("clearToastNotifications", () => {
    it("clears all notifications", async () => {
      await act(async () => {
        addToastNotification({
          id: "abc-123",
          type: "informative",
          title: "Test portal",
          message: <p>Message goes here</p>,
          persistent: false,
          "data-testid": "id--toast-1",
        })
      })

      await act(async () => {
        addToastNotification({
          id: "abc-456",
          type: "informative",
          title: "Test portal 2",
          message: <p>Second message goes here</p>,
          persistent: false,
          "data-testid": "id--toast-2",
        })
      })

      const toastItem1 = await screen.getByTestId("id--toast-1")
      const toastItem2 = await screen.getByTestId("id--toast-2")

      // const toastItem = await screen.findByText("Message goes here")
      expect(toastItem1).toBeInTheDocument()
      expect(toastItem2).toBeInTheDocument()

      await act(async () => {
        clearToastNotifications()
      })

      await expect(toastItem1).not.toBeInTheDocument()
      await expect(toastItem2).not.toBeInTheDocument()
    })
  })
})
