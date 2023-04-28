import React, { useEffect } from "react"
import {
  FilterDateRangePicker,
  FilterDateRangePickerProps,
} from "~components/FilterDateRangePicker"
import { useFilterBarContext } from "../context/FilterBarContext"

export type FilterDRPProps = Omit<
  FilterDateRangePickerProps,
  "isOpen" | "setIsOpen" | "selectedRange" | "onRangeChange"
> & {
  onRangeChange?: FilterDateRangePickerProps["onRangeChange"]
}

export const FilterDRP = (props: FilterDRPProps): JSX.Element | null => {
  const { addFilter, updateSelectedValue, getFilterState, toggleOpenFilter } =
    useFilterBarContext()
  const { label, renderTrigger } = props

  useEffect(() => {
    addFilter(label, {
      isRemovable:
        renderTrigger({ label }).props?.removeButtonProps !== undefined,
    })
  }, [])

  const state = getFilterState(label)

  if (!state || state.isHidden) return null

  return (
    <FilterDateRangePicker
      {...props}
      selectedRange={state.selectedValue}
      onRangeChange={(range): void => updateSelectedValue(label, range)}
      isOpen={state.isOpen ?? false}
      setIsOpen={(open): void => toggleOpenFilter(label, open)}
    />
  )
}
