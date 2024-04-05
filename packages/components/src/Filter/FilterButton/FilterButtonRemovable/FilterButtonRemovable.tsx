import React, { forwardRef } from "react"
import { useIntl } from "@cultureamp/i18n-react-intl"
import { ButtonGroup, ButtonGroupProps } from "~components/ButtonGroup"
import { FilterTriggerRef } from "~components/Filter/Filter"
import { ClearIcon } from "~components/Icon"
import { Tooltip } from "~components/Tooltip"
import { DataAttributes } from "~types/DataAttributes"
import { isRefObject } from "~utils/isRefObject"
import { FilterButton, FilterButtonProps } from "../FilterButton"
import {
  FilterButtonBase,
  FilterButtonBaseProps,
} from "../subcomponents/FilterButtonBase"

export type FilterButtonRemovableProps = {
  triggerButtonProps: FilterButtonProps & DataAttributes
  removeButtonProps: Partial<Omit<FilterButtonBaseProps, "children">> &
    DataAttributes & { tooltipText?: string }
} & Omit<ButtonGroupProps, "children">

export type FilterButtonRemovableRefs = FilterTriggerRef & {
  removeButtonRef?: React.RefObject<HTMLButtonElement>
}

export const FilterButtonRemovable = forwardRef<
  FilterButtonRemovableRefs,
  FilterButtonRemovableProps
>(({ triggerButtonProps, removeButtonProps, ...restProps }, ref) => {
  const { formatMessage } = useIntl()
  const customRefObject = isRefObject(ref) ? ref.current : null
  const removeButtonRef = customRefObject?.removeButtonRef

  const removeButtonLabel = formatMessage(
    {
      id: "filterButtonRemovable.tooltipText",
      defaultMessage: "Remove filter - {filter}",
      description: "Label for the tooltip used in a filter remove button",
    },
    {
      filter: removeButtonProps?.tooltipText || triggerButtonProps?.label,
    }
  )

  return (
    <ButtonGroup {...restProps}>
      <FilterButton ref={ref} {...triggerButtonProps} />
      <Tooltip text={removeButtonLabel} display="inline-block" position="below">
        <FilterButtonBase ref={removeButtonRef} {...removeButtonProps}>
          <ClearIcon role="img" aria-label={removeButtonLabel} />
        </FilterButtonBase>
      </Tooltip>
    </ButtonGroup>
  )
})

FilterButtonRemovable.displayName = "FilterButtonRemovable"
