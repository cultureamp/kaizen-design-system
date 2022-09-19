import React from "react"
import { getTruncatedLabels } from "../../../utils"
import { TriggerButtonBase } from "../TriggerButtonBase"
import styles from "./FilterTriggerButton.scss"

export type FilterTriggerButtonProps = {
  label: string
  selectedOptionLabels: string[]
  classNameOverride?: string // TODO: migrate it to use OverrideClassName<T> and omit the props controlled by React-Aria
  /**
   * @default 50
   * Character limit of the button label.
   * It will always show the first selected label regardless if it exceeds the given character limit.
   */
  labelCharacterLimitBeforeTruncate?: number
}

export const FilterTriggerButton: React.VFC<FilterTriggerButtonProps> = ({
  selectedOptionLabels,
  label,
  classNameOverride,
  labelCharacterLimitBeforeTruncate = 50,
}) => {
  console.log("FilterTriggerButton", selectedOptionLabels)
  const hasSelectedValues = selectedOptionLabels.length > 0

  return (
    <TriggerButtonBase classNameOverride={classNameOverride}>
      <span className={hasSelectedValues ? styles.hasSelectedValues : ""}>
        {label}
      </span>
      {hasSelectedValues && (
        <span>{`: ${getTruncatedLabels(
          selectedOptionLabels,
          labelCharacterLimitBeforeTruncate
        )}`}</span>
      )}
    </TriggerButtonBase>
  )
}

FilterTriggerButton.displayName = "FilterTriggerButton"
