import React from "react"
import styles from "./LabelledMessage.module.scss"

export interface LabelledMessageProps {
  label: string | React.ReactElement
  message: string | React.ReactElement
}

export const LabelledMessage = ({
  label,
  message,
}: LabelledMessageProps): JSX.Element => (
  <span className={styles.labelledMessage}>
    <span>{label}</span>
    <span className={styles.labelSeparator}>:</span>
    <span>{message}</span>
  </span>
)

LabelledMessage.displayName = "LabelledMessage"
