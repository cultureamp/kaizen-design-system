import React from "react"
import { getTruncatedLabels } from "../../../utils"
import { TriggerButtonBase } from "../TriggerButtonBase"
import styles from "./FilterTriggerButton.scss"

export type FilterTriggerButtonProps = {
  label: string
  selectedOptionLabels: string[]
  classNameOverride?: string // TODO: migrate it to use OverrideClassName<T> and omit the props controlled by React-Aria
  characterLimit?: number
}

export const FilterTriggerButton: React.VFC<FilterTriggerButtonProps> = ({
  selectedOptionLabels,
  label,
  classNameOverride,
  characterLimit = 100,
}) => {
  const hasSelectedValues = selectedOptionLabels.length > 0

  return (
    <TriggerButtonBase classNameOverride={classNameOverride}>
      <span className={hasSelectedValues ? styles.hasSelectedValues : ""}>
        {label}
      </span>
      {hasSelectedValues && (
        <span>{`: ${getTruncatedLabels(
          selectedOptionLabels,
          characterLimit
        )}`}</span>
      )}
    </TriggerButtonBase>
  )
}

FilterTriggerButton.displayName = "FilterTriggerButton"
