import React from "react"
import { FilterButton, FilterButtonRemovable } from "~components/FilterButton"
import {
  FilterDateRangePicker,
  FilterDateRangePickerProps,
} from "~components/FilterDateRangePicker"
import { useFilterBarContext } from "../context/FilterBarContext"

export type FilterDRPProps = Omit<
  FilterDateRangePickerProps,
  | "isOpen"
  | "setIsOpen"
  | "selectedRange"
  | "onRangeChange"
  | "renderTrigger"
  | "label"
> & {
  onRangeChange?: FilterDateRangePickerProps["onRangeChange"]
}

export const FilterDRP = ({
  onRangeChange,
  ...props
}: FilterDRPProps): JSX.Element | null => {
  const { getFilterState, updateSelectedValue, toggleOpenFilter, hideFilter } =
    useFilterBarContext()

  const filterState = getFilterState(props.id)

  return (
    <FilterDateRangePicker
      {...props}
      label={filterState.name}
      renderTrigger={(triggerProps): JSX.Element =>
        filterState.isRemovable ? (
          <FilterButtonRemovable
            triggerButtonProps={{ ...triggerProps }}
            removeButtonProps={{
              onClick: () => hideFilter(props.id),
            }}
          />
        ) : (
          <FilterButton {...triggerProps} />
        )
      }
      selectedRange={filterState.selectedValue}
      onRangeChange={(range): void => {
        updateSelectedValue(props.id, range)
        onRangeChange?.(range)
      }}
      isOpen={filterState.isOpen ?? false}
      setIsOpen={(open): void => toggleOpenFilter(props.id, open)}
    />
  )
}
