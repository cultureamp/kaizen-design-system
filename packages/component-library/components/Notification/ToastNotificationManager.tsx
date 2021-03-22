import React from "react"
import ReactDOM from "react-dom"
import {
  AddToastNotification,
  ClearToastNotifications,
  RemoveToastNotification,
  ToastNotification,
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

  const addToastNotification = (notification: ToastNotification) => {
    const notificationIndex = state.notifications.findIndex(
      n => n.id === notification.id
    )

    if (notificationIndex > -1) {
      const copy = state.notifications.slice()
      copy.splice(notificationIndex, 1, notification) // Mutation to insert notification over itself
      state.notifications = copy
    } else {
      state.notifications = [...state.notifications, notification]
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
