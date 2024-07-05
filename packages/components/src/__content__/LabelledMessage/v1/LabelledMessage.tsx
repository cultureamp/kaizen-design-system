import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./LabelledMessage.module.scss"

export type LabelledMessageProps = {
  label: string | React.ReactElement
  message: string | React.ReactElement
} & OverrideClassName<HTMLAttributes<HTMLSpanElement>>

export const LabelledMessage = ({
  label,
  message,
  classNameOverride,
  ...restProps
}: LabelledMessageProps): JSX.Element => (
  <span
    className={classnames(styles.labelledMessage, classNameOverride)}
    {...restProps}
  >
    <span>{label}</span>
    <span className={styles.labelSeparator}>:</span>
    <span>{message}</span>
  </span>
)

LabelledMessage.displayName = "LabelledMessage"
