import React from 'react'
import { formatDateAsText } from '~components/Calendar'
import { getLocale } from '~components/DatePicker/utils/getLocale'
import { Filter, FilterContents, type FilterProps } from '../Filter'
import { type FilterButtonProps } from '../FilterButton'
import {
  FilterDatePickerField,
  type FilterDatePickerFieldProps,
} from './subcomponents/FilterDatePickerField'

export type FilterDatePickerProps = {
  id?: string
  label: string
  isOpen: FilterProps['isOpen']
  setIsOpen: FilterProps['setIsOpen']
  renderTrigger: (triggerProps: FilterButtonProps) => JSX.Element
} & Omit<FilterDatePickerFieldProps, 'id'>

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
      <FilterDatePickerField
        locale={locale}
        selectedDate={selectedDate}
        onDateSubmit={(date) => {
          setIsOpen(false)
          onDateSubmit?.(date)
        }}
        {...restProps}
      />
    </FilterContents>
  </Filter>
)

FilterDatePicker.displayName = 'FilterDatePicker'
