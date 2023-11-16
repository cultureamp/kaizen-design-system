import React, { useContext, useState } from "react"
import { v4 } from "uuid"
import { ToastNotification, ToastNotificationWithOptionals } from "../types"

type ToastNotificationContextValue = {
  notifications: ToastNotification[]
  addToastNotification: (notification: ToastNotificationWithOptionals) => void
  updateToastNotification: (notification: ToastNotification) => void
  removeToastNotification: (notificationId: string) => void
  clearToastNotifications: () => void
}

const ToastNotificationContext =
  React.createContext<ToastNotificationContextValue | null>(null)

export const useToastNotificationContext =
  (): ToastNotificationContextValue => {
    const context = useContext(ToastNotificationContext)

    if (!context) {
      throw new Error(
        "useToastNotificationContext must be used within the ToastNotificationContext.Provider"
      )
    }

    return context
  }

type ToastNotificationProviderProps = {
  children: React.ReactNode
}

export const ToastNotificationProvider = ({
  children,
}: ToastNotificationProviderProps): JSX.Element | null => {
  const [notifications, setNotifications] = useState<ToastNotification[]>([])

  const addToastNotification = (
    notification: ToastNotificationWithOptionals
  ): void => {
    const reactId = v4()
    const notificationWithId = { id: reactId, ...notification }

    const notificationExists = notifications.find(
      ({ id }) => id === notification.id
    )

    if (!notificationExists) {
      setNotifications(existing => [...existing, notificationWithId])
    }
  }

  const updateToastNotification = (notification: ToastNotification): void => {
    const notificationIndex = notifications.findIndex(
      ({ id }) => id === notification.id
    )

    const copy = notifications.slice()
    copy.splice(notificationIndex, 1, notification) // Mutation to insert notification over itself
    setNotifications(copy)
  }

  const removeToastNotification = (notificationID: string): void => {
    const notificationIndex = notifications.findIndex(
      ({ id }) => id === notificationID
    )
    const copy = notifications.slice()
    copy.splice(notificationIndex, 1) // Mutation
    setNotifications(copy)
  }

  const clearToastNotifications = (): void => {
    setNotifications([])
  }

  const value = {
    notifications,
    addToastNotification,
    updateToastNotification,
    removeToastNotification,
    clearToastNotifications,
  } satisfies ToastNotificationContextValue

  return (
    <>
      <ToastNotificationContext.Provider value={value}>
        {children}
      </ToastNotificationContext.Provider>
    </>
  )
}

ToastNotificationProvider.displayName = "ToastNotificationProvider"
