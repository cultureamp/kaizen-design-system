import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
const styles = require("./ToastNotificationManager.module.scss")

import GenericNotification, {
  NotificationType,
} from "./components/GenericNotification"

const ToastNotificationsList = ({ notifications, onHide }) => (
  <div className={styles.list}>
    {notifications.map(notification => (
      <GenericNotification
        key={notification.id}
        style="toast"
        {...notification}
        onHide={() => onHide(notification.id)}
      />
    ))}
  </div>
)

const ToastNotificationManager = ({ remove, registerCallback }) => {
  const [notifications, setNotifications] = useState([])

  // Pass the setter upwards
  useEffect(() => {
    registerCallback(setNotifications)
  }, [setNotifications])

  return (
    <ToastNotificationsList notifications={notifications} onHide={remove} />
  )
}

export type ToastNotification = {
  type: NotificationType
  title: string
  children: React.ReactNode
  autohide: boolean
  autohideDelay?: "short" | "long"
  onHide?: () => void
  automationId?: string
  persistent?: boolean
}

export type ToastNotificationWithID = ToastNotification & { id?: string }

type State = {
  notifications: ToastNotificationWithID[]
}

type AddToastNotification = (notification: ToastNotificationWithID) => void
type RemoveToastNotification = (notificationID: string) => void
type ClearToastNotifications = () => void

type Callback = ((notifications: ToastNotificationWithID[]) => void) | null

let portal: HTMLDivElement | null = null

const createNotificationManager = (): {
  add: AddToastNotification
  remove: RemoveToastNotification
  clear: ClearToastNotifications
} => {
  let callback: Callback = null
  if (portal === null) {
    portal = document.createElement("div")
    document.body.appendChild(portal)
  }

  const state: State = {
    notifications: [],
  }

  const add = notification => {
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

  const remove = (notificationID: string) => {
    const notificationIndex = state.notifications.findIndex(
      notification => notification.id === notificationID
    )
    const copy = state.notifications.slice()
    copy.splice(notificationIndex, 1) // Mutation
    state.notifications = copy
    render()
  }

  const clear = () => {
    state.notifications = []
    render()
  }

  const registerCallback = (
    cb: (notifications: ToastNotificationWithID[]) => void
  ) => {
    callback = cb
  }

  const render = () => {
    if (callback !== null) {
      callback(state.notifications)
    }
  }

  ReactDOM.render(
    <ToastNotificationManager
      remove={remove}
      registerCallback={registerCallback}
    />,
    portal
  )

  return {
    add,
    clear,
    remove,
  }
}

export default createNotificationManager
