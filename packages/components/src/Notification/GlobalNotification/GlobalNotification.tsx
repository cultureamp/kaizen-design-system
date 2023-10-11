import React from "react"
import { NotificationType } from "~components/Notification/types"
import { OverrideClassName } from "~types/OverrideClassName"
import { GenericNotification } from "../GenericNotification"

export type GlobalNotificationProps = OverrideClassName<{
  type: NotificationType
  children: React.ReactNode
  onHide?: () => void
  persistent?: boolean
}>

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
