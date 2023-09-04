import React from "react"
import { HeadingProps } from "@kaizen/typography"
import GenericNotification from "../GenericNotification"
import styles from "../GenericNotification/GenericNotification.module.scss"
import { NotificationType } from "../types"

export type InlineNotificationProps = {
  type: NotificationType
  children?: React.ReactNode
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
  hideCloseIcon = false,
  persistent = false,
  ...otherProps
}: InlineNotificationProps): JSX.Element => (
  <GenericNotification
    style="inline"
    persistent={persistent || hideCloseIcon}
    classNameOverride={isSubtle ? styles.subtle : undefined}
    {...otherProps}
  />
)

InlineNotification.displayName = "InlineNotification"
