import React, { useRef } from "react"
import { FilterTriggerRef } from "~components/Filter"
import { FilterButtonRemovable } from "~components/FilterButton"
import { useMenuTriggerContext } from "../../../provider"
import { getTruncatedLabels } from "../../../utils"
import { FilterTriggerButtonProps } from "../FilterTriggerButton"

export type RemovableFilterTriggerProps = FilterTriggerButtonProps & {
  onRemove: () => void
}

export const RemovableFilterTrigger = ({
  label,
  selectedOptionLabels,
  labelCharacterLimitBeforeTruncate = 50,
  classNameOverride,
  onRemove,
}: RemovableFilterTriggerProps): JSX.Element => {
  const { buttonProps, buttonRef, menuTriggerState } = useMenuTriggerContext()
  const ref = useRef<FilterTriggerRef>({ triggerRef: buttonRef })

  return (
    <FilterButtonRemovable
      ref={ref}
      triggerButtonProps={{
        ...buttonProps,
        label,
        selectedValue: getTruncatedLabels(
          selectedOptionLabels,
          labelCharacterLimitBeforeTruncate
        ),
        isOpen: menuTriggerState.isOpen,
        classNameOverride,
      }}
      removeButtonProps={{
        onClick: onRemove,
      }}
    />
  )
}

RemovableFilterTrigger.displayName = "FilterMultiSelect.RemovableTrigger"
