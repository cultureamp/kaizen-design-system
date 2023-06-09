import React from "react"
import { formatDateAsText, getLocale } from "@kaizen/date-picker"
import { Filter, FilterContents, FilterProps } from "../Filter"
import { FilterButtonProps } from "../FilterButton"
import {
  FilterDatePickerForm,
  FilterDatePickerFormProps,
} from "./subcomponents/FilterDatePickerForm"

export interface FilterDatePickerProps extends FilterDatePickerFormProps {
  label: string
  isOpen: FilterProps["isOpen"]
  setIsOpen: FilterProps["setIsOpen"]
  renderTrigger: (triggerProps: FilterButtonProps) => JSX.Element
}

export const FilterDatePicker = ({
  isOpen,
  setIsOpen,
  renderTrigger,
  selectedDate,
  label,
  locale,
  onDateSubmit,
  ...restProps
}: FilterDatePickerProps): JSX.Element => (
  <Filter
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    renderTrigger={(triggerProps): JSX.Element =>
      renderTrigger({
        selectedValue: selectedDate
          ? formatDateAsText(selectedDate, undefined, getLocale(locale))
          : undefined,
        label,
        ...triggerProps,
      })
    }
  >
    <FilterContents>
      <FilterDatePickerForm
        locale={locale}
        selectedDate={selectedDate}
        onDateSubmit={date => {
          setIsOpen(false)
          onDateSubmit?.(date)
        }}
        {...restProps}
      />
    </FilterContents>
  </Filter>
)

FilterDatePicker.displayName = "FilterDatePicker"
