import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { CautionWhiteIcon, ExclamationWhiteIcon } from "~components/Icon"
import { Text } from "~components/Text"
import { OverrideClassName } from "~components/types/OverrideClassName"
import styles from "./FieldMessage.module.css"

export type FieldMessageStatus = "default" | "success" | "error" | "caution"

export type FieldMessageVariant =
  | "default"
  | "success"
  | "warning"
  | "cautionary"

export type FieldMessageProps = {
  message?: React.ReactNode
  /**
   * If transitioning from `status`:
   * - `error` -> `warning`
   * - `caution` -> `cautionary`
   * @default "success"
   */
  variant?: FieldMessageVariant
  /**
   * @deprecated Use `variant` instead
   */
  status?: FieldMessageStatus
  /** @default "bottom" */
  position?: "top" | "bottom"
  reversed?: boolean
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const FieldMessage = ({
  message,
  variant = "default",
  status = "default",
  position = "bottom",
  reversed = false,
  classNameOverride,
  ...restProps
}: FieldMessageProps): JSX.Element => (
  <div
    className={classnames(
      styles.message,
      styles[variant],
      styles[status],
      classNameOverride,
      reversed && styles.reversed,
      position === "bottom" && styles.positionBottom,
      position === "top" && styles.positionTop
    )}
    {...restProps}
  >
    {variant && (
      <>
        {(variant === "cautionary" || status === "caution") && (
          <span className={styles.icon}>
            <CautionWhiteIcon
              role="img"
              inheritSize={false}
              aria-label={`${variant} message`}
            />
          </span>
        )}
        {(variant === "warning" || status === "error") && (
          <span className={styles.icon}>
            <ExclamationWhiteIcon
              role="img"
              inheritSize={false}
              aria-label={`${variant} message`}
            />
          </span>
        )}
      </>
    )}
    <Text
      variant="small"
      tag={typeof message === "string" ? "p" : "div"}
      classNameOverride={styles.text}
    >
      {message}
    </Text>
  </div>
)

FieldMessage.displayName = "FieldMessage"
