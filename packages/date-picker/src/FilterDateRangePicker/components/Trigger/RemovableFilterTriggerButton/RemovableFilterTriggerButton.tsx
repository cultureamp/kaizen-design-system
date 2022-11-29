import React, { forwardRef } from "react"
import { Icon } from "@kaizen/component-library"
import iconClear from "@kaizen/component-library/icons/clear.icon.svg"
import { isRefObject } from "../../../../utils/isRefObject"
import { FilterButtonGroup, FilterButtonGroupProps } from "../FilterButtonGroup"
import {
  FilterTooltipButton,
  FilterTooltipButtonProps,
} from "../FilterTooltipButton"
import {
  FilterTriggerButton,
  FilterTriggerButtonProps,
} from "../FilterTriggerButton"

export interface RemovableFilterTriggerButtonProps
  extends Omit<FilterButtonGroupProps, "children"> {
  triggerButtonProps: FilterTriggerButtonProps
  removeButtonProps: Partial<Omit<FilterTooltipButtonProps, "children">>
}

export type RemovableFilterTriggerButtonRefs = {
  triggerButtonRef?: React.RefObject<HTMLButtonElement>
  removeButtonRef?: React.RefObject<HTMLButtonElement>
}

export const RemovableFilterTriggerButton = forwardRef<
  RemovableFilterTriggerButtonRefs,
  RemovableFilterTriggerButtonProps
>(({ triggerButtonProps, removeButtonProps, ...restProps }, ref) => {
  const customRefObject = isRefObject(ref) ? ref.current : null
  const triggerButtonRef = customRefObject?.triggerButtonRef
  const removeButtonRef = customRefObject?.removeButtonRef

  const removeButtonLabel =
    removeButtonProps?.tooltipText ??
    `Remove filter - ${triggerButtonProps?.label}`

  return (
    <FilterButtonGroup {...restProps}>
      <FilterTriggerButton ref={triggerButtonRef} {...triggerButtonProps} />
      <FilterTooltipButton
        ref={removeButtonRef}
        {...removeButtonProps}
        tooltipText={removeButtonLabel}
      >
        <Icon icon={iconClear} title={removeButtonLabel} />
      </FilterTooltipButton>
    </FilterButtonGroup>
  )
})

RemovableFilterTriggerButton.displayName = "RemovableFilterTriggerButton"
