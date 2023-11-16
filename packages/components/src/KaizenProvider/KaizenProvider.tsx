import React from "react"
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
}: KaizenProviderProps): JSX.Element => (
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

KaizenProvider.displayName = "KaizenProvider"
