import React, { forwardRef } from "react"
import { Icon } from "@kaizen/component-library"
import iconClear from "@kaizen/component-library/icons/clear.icon.svg"
import { Tooltip } from "@kaizen/draft-tooltip"
import { ButtonGroup, ButtonGroupProps } from "../../../ButtonGroup"
import { DataAttributes } from "../../../types"
import { isRefObject } from "../../../utils/isRefObject"
import {
  FilterTriggerButton,
  FilterTriggerButtonProps,
} from "../FilterTriggerButton"
import { FilterButton } from "../_primitives/FilterButton"

export interface FilterButtonRemovableProps
  extends Omit<ButtonGroupProps, "children"> {
  triggerButtonProps: FilterTriggerButtonProps & DataAttributes
  removeButtonProps: Partial<Omit<FilterTriggerButtonProps, "children">> &
    DataAttributes & { tooltipText?: string }
}

export type FilterButtonRemovableRefs = {
  triggerButtonRef?: React.RefObject<HTMLButtonElement>
  removeButtonRef?: React.RefObject<HTMLButtonElement>
}

export const FilterButtonRemovable = forwardRef<
  FilterButtonRemovableRefs,
  FilterButtonRemovableProps
>(({ triggerButtonProps, removeButtonProps, ...restProps }, ref) => {
  const customRefObject = isRefObject(ref) ? ref.current : null
  const removeButtonRef = customRefObject?.removeButtonRef

  const removeButtonLabel =
    removeButtonProps?.tooltipText ??
    `Remove filter - ${triggerButtonProps?.label}`

  return (
    <ButtonGroup {...restProps}>
      <FilterTriggerButton ref={ref} {...triggerButtonProps} />
      <Tooltip text={removeButtonLabel} display="inline-block" position="below">
        <FilterButton ref={removeButtonRef} {...removeButtonProps}>
          <Icon icon={iconClear} title={removeButtonLabel} />
        </FilterButton>
      </Tooltip>
    </ButtonGroup>
  )
})

FilterButtonRemovable.displayName = "FilterButtonRemovable"
