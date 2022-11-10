import { HeadingProps } from "@kaizen/typography"
import * as React from "react"
import GenericNotification, {
  NotificationType,
} from "./components/GenericNotification"

type Props = {
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
const InlineNotification = ({
  persistent,
  hideCloseIcon,
  ...otherProps
}: Props) => (
  <GenericNotification
    style="inline"
    persistent={persistent || hideCloseIcon}
    {...otherProps}
  />
)

InlineNotification.defaultProps = {
  autohideDelay: "short",
  autohide: false,
  hideCloseIcon: false,
  persistent: false,
}

export default InlineNotification
