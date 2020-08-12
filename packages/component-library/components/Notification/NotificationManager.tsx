import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"

import GenericNotification, {
  NotificationType,
} from "./components/GenericNotification"
import createStore from "./simple-store"

function Notifications({ notifications, onHide }) {
  console.log(notifications)
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

export function NotificationManager({ store }) {
  const [storeState, setStoreState] = useState(store.getState())

  // Update the React state whenever the store changes to trigger rendering
  // updates
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setStoreState(store.getState())
    })
    return unsubscribe
  }, [store, setStoreState])

  const { notifications } = storeState

  return (
    <Notifications
      notifications={notifications}
      onHide={store.actions.remove}
    />
  )
}

let portal = null

export default function createNotificationManager() {
  if (portal === null) {
    portal = document.createElement("div")
    document.body.appendChild(portal)
  }

  const store = createStore(
    {
      notifications: [],
    },
    {
      add: notification => state => {
        const notificationIndex = state.notifications.findIndex(
          n => n.id === notification.id
        )

        if (notificationIndex > -1) {
          const copy = state.notifications.slice()
          copy.splice(notificationIndex, 1, notification) // Mutation to insert notification over itself
          return {
            notifications: copy,
          }
        } else {
          return {
            notifications: [...state.notifications, notification],
          }
        }
      },
      remove: notificationId => state => {
        const notificationIndex = state.notifications.findIndex(
          notification => notification.id === notificationId
        )
        const copy = state.notifications.slice()
        copy.splice(notificationIndex, 1) // Mutation
        return {
          notifications: copy,
        }
      },
    }
  )

  ReactDOM.render(<NotificationManager store={store} />, portal)

  return {
    add: store.actions.add,
    remove: store.actions.remove,
  }
}
