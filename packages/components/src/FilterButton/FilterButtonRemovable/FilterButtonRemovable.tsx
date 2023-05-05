import React, { forwardRef } from "react"
import { Tooltip } from "@kaizen/draft-tooltip"
import { ClearIcon } from "~icons/ClearIcon"
import { DataAttributes } from "~types/DataAttributes"
import { isRefObject } from "~utils/isRefObject"
import { ButtonGroup, ButtonGroupProps } from "../../ButtonGroup"
import { FilterTriggerRef } from "../../Filter"
import { FilterButton, FilterButtonProps } from "../FilterButton"

import {
  FilterButtonBase,
  FilterButtonBaseProps,
} from "../_subcomponents/FilterButtonBase"

export interface FilterButtonRemovableProps
  extends Omit<ButtonGroupProps, "children"> {
  triggerButtonProps: FilterButtonProps & DataAttributes
  removeButtonProps: Partial<Omit<FilterButtonBaseProps, "children">> &
    DataAttributes & { tooltipText?: string }
}

export type FilterButtonRemovableRefs = FilterTriggerRef & {
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
      <FilterButton ref={ref} {...triggerButtonProps} />
      <Tooltip text={removeButtonLabel} display="inline-block" position="below">
        <FilterButtonBase ref={removeButtonRef} {...removeButtonProps}>
          <ClearIcon title={removeButtonLabel} />
        </FilterButtonBase>
      </Tooltip>
    </ButtonGroup>
  )
})

FilterButtonRemovable.displayName = "FilterButtonRemovable"
