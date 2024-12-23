import React, { useCallback, useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
  type GenericNotificationType,
  type GenericNotificationVariant,
} from '~components/Notification/subcomponents/GenericNotification'
import { type ToastNotificationObj, type ToastNotificationObjBase } from '../types'

type ToastNotificationObjOptionalId = Omit<ToastNotificationObjBase, 'id'> & {
  id?: string
} & (GenericNotificationType | GenericNotificationVariant)

export type ToastNotificationContextValue = {
  notifications: ToastNotificationObj[]
  addToastNotification: (notification: ToastNotificationObjOptionalId) => void
  updateToastNotification: (notification: ToastNotificationObj) => void
  removeToastNotification: (notificationId: string) => void
  clearToastNotifications: () => void
}

const ToastNotificationContext = React.createContext<ToastNotificationContextValue | null>(null)

export const useToastNotificationContext = (): ToastNotificationContextValue => {
  const context = useContext(ToastNotificationContext)

  if (!context) {
    throw new Error(
      'useToastNotificationContext must be used within the ToastNotificationContext.Provider',
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
  const [notifications, setNotifications] = useState<ToastNotificationObj[]>([])

  const addToastNotification: ToastNotificationContextValue['addToastNotification'] = useCallback(
    (notification) => {
      const uuid = uuidv4()
      const notificationWithId = { id: uuid, ...notification }

      setNotifications((existing) => {
        const notificationExists = existing.find(({ id }) => id === notification.id)

        return notificationExists ? existing : [...existing, notificationWithId]
      })
    },
    [setNotifications],
  )

  const updateToastNotification = useCallback(
    (notification: ToastNotificationObj): void => {
      const notificationIndex = notifications.findIndex(({ id }) => id === notification.id)

      const copy = notifications.slice()
      copy.splice(notificationIndex, 1, notification) // Mutation to insert notification over itself
      setNotifications(copy)
    },
    [notifications, setNotifications],
  )

  const removeToastNotification = useCallback(
    (notificationID: string): void => {
      setNotifications((prev) => prev.filter(({ id }) => id !== notificationID))
    },
    [setNotifications],
  )

  const clearToastNotifications = useCallback((): void => {
    setNotifications([])
  }, [setNotifications])

  const value = {
    notifications,
    addToastNotification,
    updateToastNotification,
    removeToastNotification,
    clearToastNotifications,
  } satisfies ToastNotificationContextValue

  return (
    <ToastNotificationContext.Provider value={value}>{children}</ToastNotificationContext.Provider>
  )
}

ToastNotificationProvider.displayName = 'ToastNotificationProvider'
