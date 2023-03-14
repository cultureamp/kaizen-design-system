import React, { forwardRef } from "react"
import { Icon } from "@kaizen/component-library"
import iconClear from "@kaizen/component-library/icons/clear.icon.svg"

import { DataAttributes } from "../../types"
import { isRefObject } from "../../utils/isRefObject"
import {
  FilterRef,
  FilterTriggerButton,
  FilterTriggerButtonProps,
} from "../FilterTriggerButton"
import {
  FilterButtonGroup,
  FilterButtonGroupProps,
} from "../_primitives/FilterButtonGroup"
import {
  FilterButtonWithTooltip,
  FilterButtonWithTooltipProps,
} from "../_primitives/FilterButtonWithTooltip"

export interface FilterTriggerButtonRemovableProps
  extends Omit<FilterButtonGroupProps, "children"> {
  triggerButtonProps: FilterTriggerButtonProps & DataAttributes
  removeButtonProps: Partial<Omit<FilterButtonWithTooltipProps, "children">> &
    DataAttributes
}

export type FilterTriggerButtonRemovableRefs = {
  triggerButtonRef?: React.RefObject<HTMLButtonElement>
  removeButtonRef?: React.RefObject<HTMLButtonElement>
}

export const FilterTriggerButtonRemovable = forwardRef<
  FilterTriggerButtonRemovableRefs,
  FilterTriggerButtonRemovableProps
>(({ triggerButtonProps, removeButtonProps, ...restProps }, ref) => {
  const customRefObject = isRefObject(ref) ? ref.current : null
  const removeButtonRef = customRefObject?.removeButtonRef

  const removeButtonLabel =
    removeButtonProps?.tooltipText ??
    `Remove filter - ${triggerButtonProps?.label}`

  return (
    <FilterButtonGroup {...restProps}>
      <FilterTriggerButton ref={ref} {...triggerButtonProps} />
      <FilterButtonWithTooltip
        ref={removeButtonRef}
        tooltipText={removeButtonLabel}
        {...removeButtonProps}
      >
        <Icon icon={iconClear} title={removeButtonLabel} />
      </FilterButtonWithTooltip>
    </FilterButtonGroup>
  )
})

FilterTriggerButtonRemovable.displayName = "FilterTriggerButtonRemovable"
