import React from "react"
import { HeadingProps } from "@kaizen/typography"
import GenericNotification, {
  NotificationType,
} from "../subcomponents/GenericNotification"
import styles from "../subcomponents/GenericNotification/GenericNotification.module.scss"

export type InlineNotificationProps = {
  type: NotificationType
  children?: React.ReactNode
  /** @default false */
  autohide?: boolean
  /** @default "short" */
  autohideDelay?: "short" | "long"
  /** @default false */
  persistent?: boolean
  /** @default false */
  hideCloseIcon?: boolean
  onHide?: () => void
  noBottomMargin?: boolean
  forceMultiline?: boolean
  headingProps?: HeadingProps
  isSubtle?: boolean
}

/**
 * {@link https://cultureamp.design/components/inline-notification/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-notification-inline-notification--default-kaizen-demo Storybook}
 */
export const InlineNotification = ({
  isSubtle,
  autohideDelay = "short",
  autohide = false,
  hideCloseIcon = false,
  persistent = false,
  ...otherProps
}: InlineNotificationProps): JSX.Element => (
  <GenericNotification
    style="inline"
    autohide={autohide}
    autohideDelay={autohideDelay}
    persistent={persistent || hideCloseIcon}
    classNameOverride={isSubtle ? styles.subtle : undefined}
    {...otherProps}
  />
)

InlineNotification.displayName = "InlineNotification"
