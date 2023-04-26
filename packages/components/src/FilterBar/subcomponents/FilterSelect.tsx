import React from "react"
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
): JSX.Element => {
  const { updateSelectedValue, state, toggleOpenFilter } = useFilterBarContext()
  const { label, onSelectionChange } = props

  return (
    <FilterSelect<Option>
      {...props}
      onSelectionChange={(key): void => {
        updateSelectedValue(label, key)
        onSelectionChange?.(key)
      }}
      isOpen={state[label].isOpen ?? false}
      setIsOpen={(open): void => toggleOpenFilter(label, open)}
    />
  )
}
