import React from "react"
import { OptionalRemovable, TriggerButtonBase } from "./TriggerButtonBase"
import styles from "./TriggerButton.scss"

const LABELS_TRUNCATED_LIMIT = 3

const getTruncatedLabels = (labels: string[], limit: number): string => {
  if (labels.length <= limit) {
    return labels.join(",")
  }

  return `${[...labels].splice(0, limit).join(",")} +${
    labels.length - limit
  } more`
}

export type TriggerButtonProps = {
  label: string
  selectedLabels: string[]
} & OptionalRemovable

export const TriggerButton: React.VFC<TriggerButtonProps> = ({
  selectedLabels,
  ...props
}) => (
  <TriggerButtonBase {...props} hasSelectedValues={selectedLabels.length > 0}>
    <span className={styles.label}>{`${props.label}: `}</span>
    <span>{getTruncatedLabels(selectedLabels, LABELS_TRUNCATED_LIMIT)}</span>
  </TriggerButtonBase>
)

TriggerButton.displayName = "TriggerButton"
