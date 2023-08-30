import React from "react"
import { HeadingProps } from "@kaizen/typography"
import { GenericNotification, NotificationType } from "../subcomponents"
import styles from "./components/GenericNotification.module.scss"

export type InlineNotificationProps = {
  type: NotificationType
  children?: React.ReactNode
  autohide?: boolean
  autohideDelay?: "short" | "long"
  persistent: boolean
  hideCloseIcon: boolean
  onHide?: () => void
  automationId?: string
  noBottomMargin?: boolean
  forceMultiline?: boolean
  headingProps?: HeadingProps
  isSubtle?: boolean
  /**
   * **Deprecated:** Use headingProps
   * @deprecated
   */
  title?: string
}

/**
 * {@link https://cultureamp.design/components/inline-notification/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-notification-inline-notification--default-kaizen-demo Storybook}
 */
export const InlineNotification = ({
  persistent,
  hideCloseIcon,
  isSubtle,
  ...otherProps
}: InlineNotificationProps): JSX.Element => (
  <GenericNotification
    style="inline"
    persistent={persistent || hideCloseIcon}
    classNameOverride={isSubtle ? styles.subtle : undefined}
    {...otherProps}
  />
)

InlineNotification.defaultProps = {
  autohideDelay: "short",
  autohide: false,
  hideCloseIcon: false,
  persistent: false,
}

InlineNotification.displayName = "InlineNotification"
