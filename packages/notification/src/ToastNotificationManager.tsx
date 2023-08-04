import React from "react"
import { Root, createRoot } from "react-dom/client"
import { v4 } from "uuid"
import { ToastNotificationsListContainer } from "./ToastNotificationsList"
import {
  AddToastNotification,
  ClearToastNotifications,
  RemoveToastNotification,
  ToastNotification,
  ToastNotificationWithOptionals,
} from "./types"

type ToastNotificationApi = {
  addToastNotification: AddToastNotification
  removeToastNotification: RemoveToastNotification
  clearToastNotifications: ClearToastNotifications
}

/**
 * Persistent reference to a "portal" for rendering the separate DOM tree
 */
let portal: HTMLDivElement | undefined
let portalRoot: Root

/**
 * Set default values for optional params
 */
const setDefaults = (
  notificationMaybe: ToastNotificationWithOptionals
): ToastNotification => {
  const copy = { ...notificationMaybe }
  if (typeof copy.id === "undefined") {
    copy.id = v4()
  }
  if (typeof copy.autohide === "undefined") {
    copy.autohide = true
  }
  return copy as ToastNotification
}

/**
 * Create an instance of the toast notification manager
 * Renders ToastNotifications in an independent React tree
 * @returns {addToastNotification, removeToastNotification, clearToastNotifications}
 */
const createToastNotificationManager = (): ToastNotificationApi => {
  let setNotifications:
    | React.Dispatch<React.SetStateAction<ToastNotification[]>>
    | undefined
  if (portal === undefined && typeof window !== "undefined") {
    portal = document.createElement("div")
    portal.setAttribute(
      "data-automation-id",
      "toast-notification-manager-portal"
    )
    portal.setAttribute("data-testid", "toast-notification-manager-portal")
    portal.setAttribute("role", "status")
    document.body.appendChild(portal)
    portalRoot = createRoot(portal)
  }

  const state: {
    notifications: ToastNotification[]
  } = {
    notifications: [],
  }

  const addToastNotification: AddToastNotification = notification => {
    const notificationWithId = setDefaults(notification)

    const notificationIndex = state.notifications.findIndex(
      n => n.id === notification.id
    )

    if (notificationIndex > -1) {
      const copy = state.notifications.slice()
      copy.splice(notificationIndex, 1, notificationWithId) // Mutation to insert notification over itself
      state.notifications = copy
    } else {
      state.notifications = [...state.notifications, notificationWithId]
    }
    render()
  }

  const removeToastNotification = (notificationID: string): void => {
    const notificationIndex = state.notifications.findIndex(
      notification => notification.id === notificationID
    )
    const copy = state.notifications.slice()
    copy.splice(notificationIndex, 1) // Mutation
    state.notifications = copy
    render()
  }

  const clearToastNotifications = (): void => {
    state.notifications = []
    render()
  }

  const registerSetNotificationsCallback = (
    cb: React.Dispatch<React.SetStateAction<ToastNotification[]>>
  ): void => {
    setNotifications = cb
    render()
  }

  const render = (): void => {
    if (setNotifications) {
      setNotifications(state.notifications)
    }
  }

  if (portalRoot) {
    portalRoot.render(
      <ToastNotificationsListContainer
        removeToastNotification={removeToastNotification}
        registerSetNotificationsCallback={registerSetNotificationsCallback}
      />
    )
  }

  return {
    addToastNotification,
    clearToastNotifications,
    removeToastNotification,
  }
}

/**
 * Singleton instance of the toast notification manager
 */
const instance = createToastNotificationManager()

/**
 * Export the curried API methods
 */
export const addToastNotification = instance.addToastNotification
export const clearToastNotifications = instance.clearToastNotifications
export const removeToastNotification = instance.removeToastNotification
