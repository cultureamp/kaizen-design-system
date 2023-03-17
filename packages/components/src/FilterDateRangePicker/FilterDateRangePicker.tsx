import React from "react"
import { getLocale } from "@kaizen/date-picker/src/utils/getLocale"
import { Filter, FilterContents, FilterProps } from "../Filter"
import { FilterButtonProps } from "../FilterButton"
import { DateRangeDisplayLabel } from "./components/DateRangeDisplayLabel"
import {
  FilterDateRangePickerField,
  FilterDateRangePickerFieldProps,
} from "./components/FilterDateRangePickerField"
import { isCompleteDateRange } from "./utils/isCompleteDateRange"

export type FilterDateRangePickerProps = FilterDateRangePickerFieldProps & {
  isOpen: FilterProps["isOpen"]
  setIsOpen: FilterProps["setIsOpen"]
  renderTrigger: (triggerProps: FilterButtonProps) => JSX.Element
}

export const FilterDateRangePicker = ({
  isOpen,
  setIsOpen,
  renderTrigger,
  selectedRange,
  label,
  locale,
  ...restProps
}: FilterDateRangePickerProps): JSX.Element => (
  <Filter
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    renderTrigger={(triggerProps): JSX.Element =>
      renderTrigger({
        selectedValue: isCompleteDateRange(selectedRange) ? (
          <DateRangeDisplayLabel
            dateRange={selectedRange}
            locale={getLocale(locale)}
          />
        ) : undefined,
        label,
        ...triggerProps,
      })
    }
  >
    <FilterContents>
      <FilterDateRangePickerField
        label={label}
        locale={locale}
        selectedRange={selectedRange}
        {...restProps}
      />
    </FilterContents>
  </Filter>
)

FilterDateRangePicker.displayName = "FilterDateRangePicker"
