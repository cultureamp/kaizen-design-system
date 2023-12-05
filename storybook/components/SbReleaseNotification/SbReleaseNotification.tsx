import React, { ReactNode } from "react"
import {
  InlineNotification,
  InlineNotificationProps,
} from "~components/Notification"

export type SbReleaseNotificationProps = {
  content: ReactNode
} & InlineNotificationProps

export const SbReleaseNotification = ({
  content,
  type = "cautionary",
  persistent = true,
  ...otherProps
}: SbReleaseNotificationProps): JSX.Element => (
  <InlineNotification persistent={persistent} type={type} {...otherProps}>
    {content}
  </InlineNotification>
)

SbReleaseNotification.displayName = "SbReleaseNotification"
