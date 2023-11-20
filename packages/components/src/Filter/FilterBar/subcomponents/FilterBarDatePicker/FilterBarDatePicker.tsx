import React from "react"
import {
  FilterDatePicker,
  FilterDatePickerProps,
} from "~components/Filter/FilterDatePicker"
import { useFilterBarContext } from "../../context/FilterBarContext"
import { FilterBarButton } from "../FilterBarButton"

export type FilterBarDatePickerProps = Omit<
  FilterDatePickerProps,
  | "id"
  | "label"
  | "renderTrigger"
  | "isOpen"
  | "setIsOpen"
  | "selectedDate"
  | "onDateChange"
  | "locale"
> & {
  id?: string
  locale?: FilterDatePickerProps["locale"]
  onDateChange?: FilterDatePickerProps["onDateChange"]
}

export const FilterBarDatePicker = ({
  id,
  onDateChange,
  locale = "en-AU",
  ...props
}: FilterBarDatePickerProps): JSX.Element => {
  const { getFilterState, setFilterOpenState, updateValue } =
    useFilterBarContext<Date | undefined>()

  if (!id) throw Error("Missing `id` prop in FilterBarDatePicker")

  const filterState = getFilterState(id)

  return (
    <FilterDatePicker
      {...props}
      id={id}
      locale={locale}
      selectedDate={filterState.value || undefined}
      label={filterState.name}
      renderTrigger={(triggerProps): JSX.Element => (
        <FilterBarButton
          {...triggerProps}
          id={id}
          isRemovable={filterState.isRemovable}
        />
      )}
      onDateChange={(key): void => {
        updateValue(id, key)
        onDateChange?.(key)
      }}
      isOpen={filterState.isOpen}
      setIsOpen={(open): void => setFilterOpenState(id, open)}
    />
  )
}

FilterBarDatePicker.displayName = "FilterBar.DatePicker"
