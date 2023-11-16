import React, { useEffect, useRef, useState } from "react"
import {
  ToastNotificationProvider,
  ToastNotificationsPortal,
} from "~components/Notification"
import { FontDefinitions } from "./subcomponents/FontDefinitions"
import { OptionalIntlProvider } from "./subcomponents/OptionalIntlProvider"

export type KaizenProviderProps = {
  children: React.ReactNode
  locale?: string
}

export const KaizenProvider = ({
  children,
  locale = "en",
}: KaizenProviderProps): JSX.Element => {
  const notificationsPortalRef = useRef<HTMLDivElement>(null)
  const [notificationsPortal, setNotificationsPortal] =
    useState<HTMLDivElement>()

  useEffect(() => {
    if (!notificationsPortal && notificationsPortalRef.current) {
      setNotificationsPortal(notificationsPortalRef.current)
    }
  }, [notificationsPortalRef.current])

  return (
    <OptionalIntlProvider locale={locale}>
      <>
        <ToastNotificationProvider>
          <ToastNotificationsPortal />
          {children}
        </ToastNotificationProvider>
        <FontDefinitions />
      </>
    </OptionalIntlProvider>
  )
}

KaizenProvider.displayName = "KaizenProvider"
