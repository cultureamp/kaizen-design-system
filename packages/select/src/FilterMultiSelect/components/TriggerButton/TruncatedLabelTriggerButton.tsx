import React from "react"
import { OptionalRemovable, TriggerButtonBase } from "./TriggerButtonBase"
import styles from "./TruncatedLabelTriggerButton.scss"

const LABELS_TRUNCATED_LIMIT = 3
const CONNECTOR = ", "

const getTruncatedLabels = (labels: string[], limit: number): string => {
  if (labels.length <= limit) {
    return labels.join(CONNECTOR)
  }

  return `${[...labels].splice(0, limit).join(CONNECTOR)} +${
    labels.length - limit
  } more`
}

export type TruncatedLabelTriggerButtonProps = {
  label: string
  selectedLabels: string[]
} & OptionalRemovable

export const TruncatedLabelTriggerButton: React.VFC<
  TruncatedLabelTriggerButtonProps
> = ({ selectedLabels, ...props }) => (
  <TriggerButtonBase {...props} hasSelectedValues={selectedLabels.length > 0}>
    <span className={styles.label}>{`${props.label}: `}</span>
    <span>{getTruncatedLabels(selectedLabels, LABELS_TRUNCATED_LIMIT)}</span>
  </TriggerButtonBase>
)

TruncatedLabelTriggerButton.displayName = "TruncatedLabelTriggerButton"
