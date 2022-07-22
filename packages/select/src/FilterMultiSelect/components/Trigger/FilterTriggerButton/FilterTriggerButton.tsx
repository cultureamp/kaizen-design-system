import React from "react"
import { getTruncatedLabels } from "../../../utils"
import { TriggerButtonBase } from "../TriggerButtonBase"
import styles from "./FilterTriggerButton.scss"

export type FilterTriggerButtonProps = {
  label: string
  selectedOptionLabels: string[]
}

export const FilterTriggerButton: React.VFC<FilterTriggerButtonProps> = ({
  selectedOptionLabels,
  label,
}) => (
  <TriggerButtonBase hasSelectedValues={selectedOptionLabels.length > 0}>
    <span className={styles.label}>{`${label}: `}</span>
    <span>{getTruncatedLabels(selectedOptionLabels)}</span>
  </TriggerButtonBase>
)

FilterTriggerButton.displayName = "FilterTriggerButton"
