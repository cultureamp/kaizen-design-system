import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./InlineNotification.module.scss"

/**
 * @todo: Refer to `docs/` for further code standards and guidelines
 */

/**
 * @todo: Replace `HTMLAttributes<HTMLDivElement>` with attributes/props you need to extend
 */
export type InlineNotificationProps = {
  /** @todo: Add custom props here */
  exampleRequiredString: string
  isReversed?: boolean
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const InlineNotification = ({
  exampleRequiredString,
  isReversed = false,
  classNameOverride,
  ...restProps
}: InlineNotificationProps): JSX.Element => {
  return (
    <div
      className={classnames(
        styles.inlineNotification,
        isReversed && styles.isReversed,
        classNameOverride,
      )}
      {...restProps}
    >
      {exampleRequiredString}
    </div>
  )
}

InlineNotification.displayName = "InlineNotification"
