import React, { ReactNode } from "react"
import {
  InlineNotification,
  InlineNotificationProps,
} from "~components/Notification"

export type StoryInlineNotificationProps = {
  content: ReactNode
} & InlineNotificationProps

export const StoryInlineNotification = ({
  content,
  ...otherProps
}: StoryInlineNotificationProps): JSX.Element => (
  <InlineNotification {...otherProps}>{content}</InlineNotification>
)

StoryInlineNotification.displayName = "StoryInlineNotification"
