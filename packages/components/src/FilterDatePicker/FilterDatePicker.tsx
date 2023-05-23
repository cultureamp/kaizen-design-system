import React from "react"
import { formatDateAsText } from "@kaizen/date-picker/src/utils/formatDateAsText"
import { getLocale } from "@kaizen/date-picker/src/utils/getLocale"
import { LabelledMessage } from "~components/LabelledMessage"
import { Filter, FilterContents, FilterProps } from "../Filter"
import { FilterButtonProps } from "../FilterButton"
import {
  FilterDatePickerField,
  FilterDatePickerFieldProps,
} from "./subcomponents/FilterDatePickerField"
import { isCompleteDate } from "./utils/isCompleteDateRange"

export interface FilterDatePickerProps extends FilterDatePickerFieldProps {
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
        selectedValue: isCompleteDate(selectedDate)
          ? formatDateAsText(selectedDate, undefined, getLocale(locale))
          : undefined,
        label,
        ...triggerProps,
      })
    }
  >
    <FilterContents>
      <FilterDatePickerField
        label={label}
        locale={locale}
        selectedDate={selectedDate}
        {...restProps}
      />
    </FilterContents>
  </Filter>
)

FilterDatePicker.displayName = "FilterDatePicker"
