import React, { useCallback, useContext, useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { type GenericNotificationVariant } from '~components/Notification/subcomponents/GenericNotification'
import { type ToastNotificationObj, type ToastNotificationObjBase } from '../types'

type ToastNotificationObjOptionalId = Omit<ToastNotificationObjBase, 'id'> & {
  id?: string
} & GenericNotificationVariant

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

  const addToastNotification = useCallback<ToastNotificationContextValue['addToastNotification']>(
    (notification) => {
      const notificationWithId = { ...notification, id: notification.id ?? uuidv4() }

      setNotifications((existing) => {
        const notificationExists = existing.some(({ id }) => id === notificationWithId.id)

        return notificationExists ? existing : [...existing, notificationWithId]
      })
    },
    [],
  )

  const updateToastNotification = useCallback<
    ToastNotificationContextValue['updateToastNotification']
  >((notification) => {
    setNotifications((existing) => {
      const notificationIndex = existing.findIndex(({ id }) => id === notification.id)

      if (notificationIndex === -1) return existing

      const updated = existing.slice()
      updated[notificationIndex] = notification
      return updated
    })
  }, [])

  const removeToastNotification = useCallback<
    ToastNotificationContextValue['removeToastNotification']
  >((notificationId) => {
    setNotifications((existing) => existing.filter(({ id }) => id !== notificationId))
  }, [])

  const clearToastNotifications = useCallback<
    ToastNotificationContextValue['clearToastNotifications']
  >(() => {
    setNotifications([])
  }, [])

  const value = useMemo(
    () =>
      ({
        notifications,
        addToastNotification,
        updateToastNotification,
        removeToastNotification,
        clearToastNotifications,
      }) satisfies ToastNotificationContextValue,
    [
      notifications,
      addToastNotification,
      updateToastNotification,
      removeToastNotification,
      clearToastNotifications,
    ],
  )

  return (
    <ToastNotificationContext.Provider value={value}>{children}</ToastNotificationContext.Provider>
  )
}

ToastNotificationProvider.displayName = 'ToastNotificationProvider'
