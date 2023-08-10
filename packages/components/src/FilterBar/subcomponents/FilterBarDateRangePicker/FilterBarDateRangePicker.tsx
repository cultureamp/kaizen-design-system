import React from "react"
import {
  FilterDateRangePicker,
  FilterDateRangePickerProps,
} from "~components/FilterDateRangePicker"
import { DateRange } from "~types/DatePicker"
import { useFilterBarContext } from "../../context/FilterBarContext"
import { FilterBarButton } from "../FilterBarButton"

export type FilterBarDateRangePickerProps = Omit<
  FilterDateRangePickerProps,
  | "id"
  | "label"
  | "renderTrigger"
  | "isOpen"
  | "setIsOpen"
  | "selectedRange"
  | "onRangeChange"
  | "locale"
> & {
  id?: string
  onRangeChange?: FilterDateRangePickerProps["onRangeChange"]
  locale?: FilterDateRangePickerProps["locale"]
}

export const FilterBarDateRangePicker = ({
  id,
  onRangeChange,
  locale = "en-AU",
  ...props
}: FilterBarDateRangePickerProps): JSX.Element => {
  const { getFilterState, setFilterOpenState, updateValue } =
    useFilterBarContext<DateRange | undefined>()

  if (!id) throw Error("Missing `id` prop in FilterBarDateRangePicker")

  const filterState = getFilterState(id)

  return (
    <FilterDateRangePicker
      {...props}
      id={id}
      label={filterState.name}
      renderTrigger={(triggerProps): JSX.Element => (
        <FilterBarButton
          {...triggerProps}
          id={id}
          isRemovable={filterState.isRemovable}
        />
      )}
      isOpen={filterState.isOpen}
      setIsOpen={(open): void => setFilterOpenState(id, open)}
      selectedRange={filterState.value}
      onRangeChange={(range): void => {
        updateValue(id, range)
        onRangeChange?.(range)
      }}
      locale={locale}
    />
  )
}

FilterBarDateRangePicker.displayName = "FilterBar.DateRangePicker"
