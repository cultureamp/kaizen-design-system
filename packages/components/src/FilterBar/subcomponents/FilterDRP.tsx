import React from "react"
import { FilterButton, FilterButtonRemovable } from "~components/FilterButton"
import {
  DateRange,
  FilterDateRangePicker,
  FilterDateRangePickerProps,
} from "~components/FilterDateRangePicker"
import { useFilterBarContext } from "../context/FilterBarContext"

export type FilterDRPProps = Omit<
  FilterDateRangePickerProps,
  | "id"
  | "isOpen"
  | "setIsOpen"
  | "selectedRange"
  | "onRangeChange"
  | "renderTrigger"
  | "label"
> & {
  id?: FilterDateRangePickerProps["id"]
  onRangeChange?: FilterDateRangePickerProps["onRangeChange"]
}

export const FilterDRP = ({
  id,
  onRangeChange,
  ...props
}: FilterDRPProps): JSX.Element | null => {
  const { getFilterState, updateSelectedValue, toggleOpenFilter, hideFilter } =
    useFilterBarContext<DateRange>()

  if (!id) throw Error("Missing `id` prop")

  const filterState = getFilterState(id)

  return (
    <FilterDateRangePicker
      {...props}
      id={id}
      label={filterState.name}
      renderTrigger={(triggerProps): JSX.Element =>
        filterState.isRemovable ? (
          <FilterButtonRemovable
            triggerButtonProps={{ ...triggerProps }}
            removeButtonProps={{
              onClick: () => hideFilter(id),
            }}
          />
        ) : (
          <FilterButton {...triggerProps} />
        )
      }
      selectedRange={filterState.selectedValue}
      onRangeChange={(range): void => {
        updateSelectedValue(id, range)
        onRangeChange?.(range)
      }}
      isOpen={filterState.isOpen}
      setIsOpen={(open): void => toggleOpenFilter(id, open)}
    />
  )
}
