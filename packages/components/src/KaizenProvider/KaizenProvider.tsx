import React, { useEffect, useState } from 'react'
import { ToastNotificationsList } from '~components/Notification'
import { ToastNotificationProvider } from '~components/Notification/ToastNotification/context/ToastNotificationContext'
import { FontDefinitions } from './subcomponents/FontDefinitions'
import { OptionalIntlProvider } from './subcomponents/OptionalIntlProvider'

export type KaizenProviderProps = {
  children: React.ReactNode
  locale?: string
}

export const KaizenProvider = ({ children, locale = 'en' }: KaizenProviderProps): JSX.Element => {
  const [documentIsAvailable, setDocumentIsAvailable] = useState<boolean>(false)

  useEffect(() => {
    // SSR does not have a document, which is required for ToastNotificationsList.
    // Await document render before rendering the component.
    if (document !== undefined) {
      setDocumentIsAvailable(true)
    }
  }, [])

  return (
    <OptionalIntlProvider locale={locale}>
      <ToastNotificationProvider>
        {documentIsAvailable && <ToastNotificationsList />}
        {children}
      </ToastNotificationProvider>
      <FontDefinitions />
    </OptionalIntlProvider>
  )
}

KaizenProvider.displayName = 'KaizenProvider'
