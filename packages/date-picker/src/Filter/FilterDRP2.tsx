import React from "react"
import { DateRangeDisplayLabel } from "../FilterDateRangePicker/components/DateRangeDisplayLabel"
import { isCompleteDateRange } from "../FilterDateRangePicker/utils/isCompleteDateRange"
import { DataAttributes } from "../types"
import { getLocale } from "../utils/getLocale"
import { FilterDateRangePickerFieldNoContext, FilterDateRangePickerFieldNoContextProps } from "./FilterDateRangePickerField"
import { FilterRef, FilterSolution2NoContext, FilterSolution2NoContextProps } from "./FilterSolution2"
import { FilterTriggerButtonProps } from "./components"
import { FilterContents } from "./components/FilterContents"

export interface FilterDRP2Props extends FilterDateRangePickerFieldNoContextProps {
  isOpen: FilterSolution2NoContextProps["isOpen"]
  setIsOpen: FilterSolution2NoContextProps["setIsOpen"]
  filterButton: (triggerButtonProps: FilterTriggerButtonProps) => JSX.Element
}

export const FilterDRP2 = ({
  isOpen,
  setIsOpen,
  filterButton,
  selectedRange,
  label,
  ...drpProps }: FilterDRP2Props): JSX.Element => (
    <FilterSolution2NoContext
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    filterButton={(triggerButtonProps): JSX.Element => filterButton({
      selectedValue: isCompleteDateRange(selectedRange) ? (
        <DateRangeDisplayLabel
          dateRange={selectedRange}
          locale={getLocale("en-AU")}
        />
      ) : undefined,
      label,
      ...triggerButtonProps,
    })}
  >
    <FilterContents>
      <FilterDateRangePickerFieldNoContext
        label={label}
        selectedRange={selectedRange}
        {...drpProps}
      />
    </FilterContents>
  </FilterSolution2NoContext>
  )
