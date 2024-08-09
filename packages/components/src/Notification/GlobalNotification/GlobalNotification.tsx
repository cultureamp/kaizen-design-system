import React from "react"
import { OverrideClassName } from "~types/OverrideClassName"
import {
  GenericNotification,
  GenericNotificationType,
  GenericNotificationVariant,
} from "../subcomponents/GenericNotification"

export type GlobalNotificationBase = OverrideClassName<{
  children: React.ReactNode
  onHide?: () => void
  persistent?: boolean
}>

export type GlobalNotificationProps = GlobalNotificationBase &
  (GenericNotificationType | GenericNotificationVariant)

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082060757/Global+Notification Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-notifications-global-notification--docs Storybook}
 */
export const GlobalNotification = ({
  persistent = false,
  ...props
}: GlobalNotificationProps): JSX.Element => (
  <GenericNotification persistent={persistent} style="global" {...props} />
)

GlobalNotification.displayName = "GlobalNotification"
