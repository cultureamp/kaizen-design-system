import React, { useState } from "react"
import { v4 } from "uuid"
import { getLocale } from "@kaizen/date-picker/src/utils/getLocale"
import { Filter, FilterContents, FilterProps } from "../Filter"
import { FilterButtonProps } from "../FilterButton"
import { DateRangeDisplayLabel } from "./subcomponents/DateRangeDisplayLabel"
import {
  FilterDateRangePickerField,
  FilterDateRangePickerFieldProps,
} from "./subcomponents/FilterDateRangePickerField"
import { isValidRange } from "./subcomponents/FilterDateRangePickerField/utils/isValidRange"
import { isCompleteDateRange } from "./utils/isCompleteDateRange"

export interface FilterDateRangePickerProps
  extends Omit<FilterDateRangePickerFieldProps, "id"> {
  id?: string
  isOpen: FilterProps["isOpen"]
  setIsOpen: FilterProps["setIsOpen"]
  renderTrigger: (triggerProps: FilterButtonProps) => JSX.Element
}

export const FilterDateRangePicker = ({
  id: propsId,
  isOpen,
  setIsOpen,
  renderTrigger,
  selectedRange,
  label,
  locale,
  ...restProps
}: FilterDateRangePickerProps): JSX.Element => {
  const [id] = useState<string>(propsId || v4())
  return (
    <Filter
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      renderTrigger={(triggerProps): JSX.Element =>
        renderTrigger({
          selectedValue:
            isCompleteDateRange(selectedRange) &&
            isValidRange(selectedRange.from, selectedRange.to) ? (
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
          id={`${id}--input`}
          label={label}
          locale={locale}
          selectedRange={selectedRange}
          {...restProps}
        />
      </FilterContents>
    </Filter>
  )
}

FilterDateRangePicker.displayName = "FilterDateRangePicker"
