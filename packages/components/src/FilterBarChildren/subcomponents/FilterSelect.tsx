import React, { useEffect } from "react"
import {
  FilterSelect,
  FilterSelectProps,
  SelectOption,
} from "~components/FilterSelect"
import { useFilterBarContext } from "../context/FilterBarContext"

export type FilterBarSelectProps<Option extends SelectOption = SelectOption> =
  Omit<FilterSelectProps<Option>, "isOpen" | "setIsOpen">

export const FilterBarSelect = <Option extends SelectOption = SelectOption>(
  props: FilterBarSelectProps<Option>
): JSX.Element | null => {
  const { addFilter, updateSelectedValue, getFilterState, toggleOpenFilter } =
    useFilterBarContext()
  const { label, onSelectionChange, renderTrigger } = props

  useEffect(() => {
    addFilter(label, {
      isRemovable:
        renderTrigger({ label }).props?.removeButtonProps !== undefined,
    })
  }, [])

  const state = getFilterState(label)

  if (!state || state.isHidden) return null

  return (
    <FilterSelect<Option>
      {...props}
      onSelectionChange={(key): void => {
        updateSelectedValue(label, key)
        onSelectionChange?.(key)
      }}
      isOpen={state.isOpen ?? false}
      setIsOpen={(open): void => toggleOpenFilter(label, open)}
    />
  )
}
