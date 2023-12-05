import React, { ReactNode } from "react"
import {
  InlineNotification,
  InlineNotificationProps,
} from "~components/Notification"

export type SbNotificationProps = {
  content: ReactNode
} & InlineNotificationProps

export const SbNotification = ({
  content,
  type = "cautionary",
  persistent = true,
  ...otherProps
}: SbNotificationProps): JSX.Element => (
  <InlineNotification persistent={persistent} type={type} {...otherProps}>
    {content}
  </InlineNotification>
)

SbNotification.displayName = "SbNotification"
