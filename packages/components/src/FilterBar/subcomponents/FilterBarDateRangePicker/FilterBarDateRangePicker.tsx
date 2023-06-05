import React from "react"
import { FilterButton } from "~components/FilterButton"
import {
  DateRange,
  FilterDateRangePicker,
  FilterDateRangePickerProps,
} from "~components/FilterDateRangePicker"
import { useFilterBarContext } from "../../context/FilterBarContext"

export type FilterBarDateRangePickerProps = Omit<
  FilterDateRangePickerProps,
  | "id"
  | "label"
  | "renderTrigger"
  | "isOpen"
  | "setIsOpen"
  | "selectedRange"
  | "onRangeChange"
> & {
  id?: string
  onRangeChange?: FilterDateRangePickerProps["onRangeChange"]
}

export const FilterBarDateRangePicker = ({
  id,
  onRangeChange,
  ...props
}: FilterBarDateRangePickerProps): JSX.Element => {
  const { getFilterState, toggleOpenFilter, updateValue } = useFilterBarContext<
    DateRange | undefined
  >()

  if (!id) throw Error("Missing `id` prop in FilterBarDateRangePicker")

  const filterState = getFilterState(id)

  return (
    <FilterDateRangePicker
      {...props}
      id={id}
      label={filterState.name}
      renderTrigger={(triggerProps): JSX.Element => (
        <FilterButton {...triggerProps} />
      )}
      isOpen={filterState.isOpen}
      setIsOpen={(open): void => toggleOpenFilter(id, open)}
      selectedRange={filterState.value}
      onRangeChange={(range): void => {
        updateValue(id, range)
        onRangeChange?.(range)
      }}
    />
  )
}

FilterBarDateRangePicker.displayName = "FilterBar.DateRangePicker"
