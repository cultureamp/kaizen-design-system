import React from "react"
import { getTruncatedLabels } from "../../../utils"
import { TriggerButtonBase } from "../TriggerButtonBase"
import styles from "./FilterTriggerButton.scss"

export type FilterTriggerButtonProps = {
  label: string
  selectedOptionLabels: string[]
  ClassNameOverriden?: string
}

export const FilterTriggerButton: React.VFC<FilterTriggerButtonProps> = ({
  selectedOptionLabels,
  label,
  ClassNameOverriden,
}) => {
  const hasSelectedValues = selectedOptionLabels.length > 0

  return (
    <TriggerButtonBase ClassNameOverriden={ClassNameOverriden}>
      <span className={hasSelectedValues ? styles.hasSelectedValues : ""}>
        {label}
      </span>
      {hasSelectedValues && (
        <span>{`: ${getTruncatedLabels(selectedOptionLabels)}`}</span>
      )}
    </TriggerButtonBase>
  )
}

FilterTriggerButton.displayName = "FilterTriggerButton"
