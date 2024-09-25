import React, { forwardRef, HTMLAttributes } from "react"
import classnames from "classnames"
import { HeadingProps } from "~components/Heading"
import { OverrideClassName } from "~components/types/OverrideClassName"
import {
  GenericNotification,
  GenericNotificationType,
  GenericNotificationVariant,
} from "../subcomponents/GenericNotification"
import styles from "../subcomponents/GenericNotification/GenericNotification.module.scss"

export type InlineNotificationBase = {
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
} & Omit<OverrideClassName<HTMLAttributes<HTMLDivElement>>, "style">
// Omitted `style` above because GenericNotification has its own `style` prop

export type InlineNotificationProps = InlineNotificationBase &
  (GenericNotificationType | GenericNotificationVariant)

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082093392/Inline+Notification Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-notifications-inline-notification--docs Storybook}
 */
export const InlineNotification = forwardRef<
  HTMLDivElement,
  InlineNotificationProps
>(
  (
    {
      isSubtle,
      hideCloseIcon = false,
      persistent = false,
      classNameOverride,
      ...otherProps
    },
    ref
  ): JSX.Element => (
    <GenericNotification
      style="inline"
      persistent={persistent || hideCloseIcon}
      classNameOverride={classnames(classNameOverride, [
        isSubtle && styles.subtle,
      ])}
      ref={ref}
      {...otherProps}
    />
  )
)

InlineNotification.displayName = "InlineNotification"
