import React, { useRef } from "react"
import { DateRangeDisplayLabel } from "../FilterDateRangePicker/components/DateRangeDisplayLabel"
import { isCompleteDateRange } from "../FilterDateRangePicker/utils/isCompleteDateRange"
import { DataAttributes } from "../types"
import { getLocale } from "../utils/getLocale"
import { FilterDateRangePickerFieldNoContext, FilterDateRangePickerFieldNoContextProps } from "./FilterDateRangePickerField"
import { FilterRef, FilterSolution2NoContext, FilterSolution2NoContextProps } from "./FilterSolution2"
import { FilterSolution3NoContext } from "./FilterSolution3"
import { FilterTriggerButtonProps } from "./components"
import { FilterContents } from "./components/FilterContents"
import { FilterPopoverWithFocusLock } from "./components/FilterPopover"

export interface FilterDRP3Props extends FilterDateRangePickerFieldNoContextProps {
  isOpen: FilterSolution2NoContextProps["isOpen"]
  setIsOpen: FilterSolution2NoContextProps["setIsOpen"]
  filterButton: (triggerButtonProps: FilterTriggerButtonProps & DataAttributes) => JSX.Element & { ref?: React.RefObject<FilterRef> }
}

export const FilterDRP3 = ({
  isOpen,
  setIsOpen,
  filterButton,
  selectedRange,
  label,
  ...drpProps }: FilterDRP3Props): JSX.Element => {
    const filterButtonComponent = filterButton({
      selectedValue: isCompleteDateRange(selectedRange) ? (
        <DateRangeDisplayLabel
          dateRange={selectedRange}
          locale={getLocale("en-AU")}
        />
      ) : undefined,
      label,
      isOpen,
      onClick: (): void => setIsOpen(!isOpen),
    })

    const inbuiltButtonRef = useRef<HTMLButtonElement>(null)
    const inbuiltRef = useRef<FilterRef>({
      triggerButtonRef: inbuiltButtonRef
    })
    const filterButtonRef = filterButtonComponent.ref ?? inbuiltRef

    return (
    <FilterSolution3NoContext>
      {React.cloneElement(filterButtonComponent, {
        ref: filterButtonRef,
      })}
      {isOpen && (
        <FilterPopoverWithFocusLock
          referenceElement={filterButtonRef.current?.triggerButtonRef?.current || null}
          onClose={(): void => setIsOpen(false)}
        >
          <FilterContents>
            <FilterDateRangePickerFieldNoContext
              label={label}
              selectedRange={selectedRange}
              {...drpProps}
            />
          </FilterContents>
        </FilterPopoverWithFocusLock>
      )}
    </FilterSolution3NoContext>
  )
      }
