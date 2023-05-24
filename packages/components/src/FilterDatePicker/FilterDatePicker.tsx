import React from "react"
import { formatDateAsText } from "@kaizen/date-picker/src/utils/formatDateAsText"
import { getLocale } from "@kaizen/date-picker/src/utils/getLocale"
import { Filter, FilterContents, FilterProps } from "../Filter"
import { FilterButtonProps } from "../FilterButton"
import {
  FilterDatePickerField,
  FilterDatePickerFieldProps,
} from "./subcomponents/FilterDatePickerField"

export interface FilterDatePickerProps extends FilterDatePickerFieldProps {
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
      <FilterDatePickerField
        locale={locale}
        selectedDate={selectedDate}
        setFilterOpen={setIsOpen}
        {...restProps}
      />
    </FilterContents>
  </Filter>
)

FilterDatePicker.displayName = "FilterDatePicker"
