import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"

import GenericNotification, {
  NotificationType,
} from "./components/GenericNotification"

function Notifications({ notifications, onHide }) {
  return (
    <div>
      {notifications.map(notification => (
        <GenericNotification
          key={notification.id}
          style={"toast"}
          {...notification}
          onHide={() => onHide(notification.id)}
        />
      ))}
    </div>
  )
}

export function NotificationManager({ remove, registerCallback }) {
  const [notifications, setNotifications] = useState([])

  // Update the React state whenever the store changes to trigger rendering
  // updates
  useEffect(() => {
    registerCallback(setNotifications)
  }, [setNotifications])

  return <Notifications notifications={notifications} onHide={remove} />
}

type ToastNotification = {
  type: NotificationType
  title: string
  children: React.ReactNode
  autohide: boolean
  autohideDelay?: "short" | "long"
  hideCloseIcon: boolean
  onHide?: () => void
  automationId?: string
}

type ToastNotificationWithID = ToastNotification & { id?: string }

type State = {
  notifications: ToastNotificationWithID[]
}

type AddNotification = (notification: ToastNotificationWithID) => void
type RemoveNotification = (id: string) => void
type ClearNotifications = () => void

type API = {
  add: AddNotification
  remove: RemoveNotification
  clear: ClearNotifications
}

type Callback = ((notifications: ToastNotificationWithID[]) => void) | null

let portal: HTMLDivElement | null = null

export default function createNotificationManager(): API {
  let callback: Callback = null
  if (portal === null) {
    portal = document.createElement("div")
    document.body.appendChild(portal)
  }

  const state: State = {
    notifications: [],
  }

  function add(notification) {
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

  function remove(notificationId) {
    const notificationIndex = state.notifications.findIndex(
      notification => notification.id === notificationId
    )
    const copy = state.notifications.slice()
    copy.splice(notificationIndex, 1) // Mutation
    state.notifications = copy
    render()
  }

  function clear() {
    state.notifications = []
    render()
  }

  function registerCallback(
    cb: (notifications: ToastNotificationWithID[]) => void
  ) {
    callback = cb
  }

  function render() {
    if (callback !== null) {
      callback(state.notifications)
    }
  }

  ReactDOM.render(
    <NotificationManager remove={remove} registerCallback={registerCallback} />,
    portal
  )

  return {
    add,
    clear,
    remove,
  }
}
