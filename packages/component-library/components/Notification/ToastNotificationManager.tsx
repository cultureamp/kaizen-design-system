import React from "react"
import ReactDOM from "react-dom"
import { v4 } from "uuid"
import {
  AddToastNotification,
  ClearToastNotifications,
  RemoveToastNotification,
  ToastNotification,
  ToastNotificationWithOptionals,
} from "./types"
import { ToastNotificationsListContainer } from "./ToastNotificationsList"

type ToastNotificationApi = {
  addToastNotification: AddToastNotification
  removeToastNotification: RemoveToastNotification
  clearToastNotifications: ClearToastNotifications
}

/**
 * Persistent reference to a "portal" for rendering the separate DOM tree
 */
let portal: HTMLDivElement | undefined

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
    document.body.appendChild(portal)
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

  const removeToastNotification = (notificationID: string) => {
    const notificationIndex = state.notifications.findIndex(
      notification => notification.id === notificationID
    )
    const copy = state.notifications.slice()
    copy.splice(notificationIndex, 1) // Mutation
    state.notifications = copy
    render()
  }

  const clearToastNotifications = () => {
    state.notifications = []
    render()
  }

  const registerSetNotificationsCallback = (
    cb: React.Dispatch<React.SetStateAction<ToastNotification[]>>
  ) => {
    setNotifications = cb
    render()
  }

  const render = () => {
    if (setNotifications) {
      setNotifications(state.notifications)
    }
  }

  if (portal) {
    ReactDOM.render(
      <ToastNotificationsListContainer
        removeToastNotification={removeToastNotification}
        registerSetNotificationsCallback={registerSetNotificationsCallback}
      />,
      portal
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
