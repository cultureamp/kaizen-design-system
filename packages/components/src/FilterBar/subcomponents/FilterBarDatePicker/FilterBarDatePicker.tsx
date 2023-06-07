import React from "react"
import { FilterButton } from "~components/FilterButton"
import {
  FilterDatePicker,
  FilterDatePickerProps,
} from "~components/FilterDatePicker"
import { useFilterBarContext } from "../../context/FilterBarContext"

export type FilterBarDatePickerProps = Omit<
  FilterDatePickerProps,
  | "isOpen"
  | "setIsOpen"
  | "renderTrigger"
  | "label"
  | "selectedDate"
  | "id"
  | "locale"
  | "onDateChange"
> & {
  id?: string
  locale?: FilterDatePickerProps["locale"]
  onDateChange?: FilterDatePickerProps["onDateChange"]
}

export const FilterBarDatePicker = ({
  id,
  onDateChange,
  locale,
  ...props
}: FilterBarDatePickerProps): JSX.Element => {
  const { getFilterState, toggleOpenFilter, updateValue } = useFilterBarContext<
    Date | undefined
  >()

  if (!id) throw Error("Missing `id` prop in FilterBarDatePicker")

  const filterState = getFilterState(id)

  return (
    <FilterDatePicker
      {...props}
      id={id}
      locale={locale || "en-AU"}
      selectedDate={filterState.value || undefined}
      label={filterState.name}
      renderTrigger={(triggerProps): JSX.Element => (
        <FilterButton {...triggerProps} />
      )}
      onDateChange={(key): void => {
        updateValue(id, key)
        onDateChange?.(key)
      }}
      isOpen={filterState.isOpen}
      setIsOpen={(open): void => toggleOpenFilter(id, open)}
    />
  )
}

FilterBarDatePicker.displayName = "FilterBar.DatePicker"
