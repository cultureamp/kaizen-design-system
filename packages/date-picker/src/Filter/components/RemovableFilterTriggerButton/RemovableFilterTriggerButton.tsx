import React, { forwardRef } from "react"
import { Icon } from "@kaizen/component-library"
import iconClear from "@kaizen/component-library/icons/clear.icon.svg"
import { DataAttributes } from "../../../types"
import { isRefObject } from "../../../utils/isRefObject"
import { useFilterContext } from "../../context/useFilterContext"
import { useFilterContextSol3 } from "../../context/useFilterContextSol3"
import {
  FilterBaseTooltipButton,
  FilterBaseTooltipButtonProps,
} from "../FilterBaseTooltipButton"
import { FilterButtonGroup, FilterButtonGroupProps } from "../FilterButtonGroup"
import {
  FilterTriggerButton,
  FilterTriggerButtonContext,
  FilterTriggerButtonContextProps,
  FilterTriggerButtonProps,
  FilterTriggerButtonSol3,
} from "../FilterTriggerButton"

export interface RemovableFilterTriggerButtonProps
  extends Omit<FilterButtonGroupProps, "children"> {
  triggerButtonProps: FilterTriggerButtonProps & DataAttributes
  removeButtonProps: Partial<Omit<FilterBaseTooltipButtonProps, "children">> &
    DataAttributes
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
      <FilterBaseTooltipButton
        ref={removeButtonRef}
        tooltipText={removeButtonLabel}
        {...removeButtonProps}
      >
        <Icon icon={iconClear} title={removeButtonLabel} />
      </FilterBaseTooltipButton>
    </FilterButtonGroup>
  )
})

RemovableFilterTriggerButton.displayName = "RemovableFilterTriggerButton"

export interface RemovableFilterTriggerButtonContextProps
  extends Omit<FilterButtonGroupProps, "children"> {
  triggerButtonProps?: FilterTriggerButtonContextProps & DataAttributes
  removeButtonProps: Partial<Omit<FilterBaseTooltipButtonProps, "children">> &
    DataAttributes
}

export type RemovableFilterTriggerButtonContextRefs = {
  triggerButtonRef?: React.RefObject<HTMLButtonElement>
  removeButtonRef?: React.RefObject<HTMLButtonElement>
}

export const RemovableFilterTriggerButtonContext = forwardRef<
  RemovableFilterTriggerButtonContextRefs,
  RemovableFilterTriggerButtonContextProps
>(({ triggerButtonProps, removeButtonProps, ...restProps }, ref) => {
  const { label } = useFilterContext()

  const customRefObject = isRefObject(ref) ? ref.current : null
  const triggerButtonRef = customRefObject?.triggerButtonRef
  const removeButtonRef = customRefObject?.removeButtonRef

  const removeButtonLabel =
    removeButtonProps?.tooltipText ?? `Remove filter - ${label}`

  return (
    <FilterButtonGroup {...restProps}>
      <FilterTriggerButtonContext
        {...triggerButtonProps}
        ref={triggerButtonRef}
      />
      <FilterBaseTooltipButton
        ref={removeButtonRef}
        {...removeButtonProps}
        tooltipText={removeButtonLabel}
      >
        <Icon icon={iconClear} title={removeButtonLabel} />
      </FilterBaseTooltipButton>
    </FilterButtonGroup>
  )
})

RemovableFilterTriggerButtonContext.displayName =
  "RemovableFilterTriggerButtonContext"

// export const RemovableFilterTriggerButtonContextSol3 = forwardRef<
//   RemovableFilterTriggerButtonContextRefs,
//   RemovableFilterTriggerButtonContextProps
// >(({ triggerButtonProps, removeButtonProps, ...restProps }, ref) => {
//   const { label } = useFilterContextSol3()

//   const customRefObject = isRefObject(ref) ? ref.current : null
//   const triggerButtonRef = customRefObject?.triggerButtonRef
//   const removeButtonRef = customRefObject?.removeButtonRef

//   const removeButtonLabel =
//     removeButtonProps?.tooltipText ?? `Remove filter - ${label}`

//   return (
//     <FilterButtonGroup {...restProps}>
//       <FilterTriggerButtonSol3 ref={triggerButtonRef} {...triggerButtonProps} />
//       <FilterBaseTooltipButton
//         ref={removeButtonRef}
//         {...removeButtonProps}
//         tooltipText={removeButtonLabel}
//       >
//         <Icon icon={iconClear} title={removeButtonLabel} />
//       </FilterBaseTooltipButton>
//     </FilterButtonGroup>
//   )
// })

// RemovableFilterTriggerButtonContextSol3.displayName =
//   "RemovableFilterTriggerButtonContextSol3"
