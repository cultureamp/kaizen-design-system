import React, { useRef } from "react"
import { FilterTriggerRef } from "~components/Filter"
import { FilterButton } from "~components/FilterButton"
import { useMenuTriggerContext } from "../../../context"
import { getTruncatedLabels } from "../../../utils"

export type FilterTriggerButtonProps = {
  label: string
  selectedOptionLabels: string[]
  /**
   * Character limit of the button label.
   * It will always show the first selected label regardless if it exceeds the given character limit.
   */
  labelCharacterLimitBeforeTruncate?: number
  classNameOverride?: string // TODO: migrate it to use OverrideClassName<T> and omit the props controlled by React-Aria
}

export const FilterTriggerButton = ({
  selectedOptionLabels,
  label,
  classNameOverride,
  labelCharacterLimitBeforeTruncate = 50,
}: FilterTriggerButtonProps): JSX.Element => {
  const { buttonProps, buttonRef, menuTriggerState } = useMenuTriggerContext()
  const ref = useRef<FilterTriggerRef>({ triggerRef: buttonRef })

  return (
    <FilterButton
      ref={ref}
      {...buttonProps}
      label={label}
      selectedValue={getTruncatedLabels(
        selectedOptionLabels,
        labelCharacterLimitBeforeTruncate
      )}
      classNameOverride={classNameOverride}
      isOpen={menuTriggerState.isOpen}
    />
  )
}

FilterTriggerButton.displayName = "FilterMultiSelect.TriggerButton"
