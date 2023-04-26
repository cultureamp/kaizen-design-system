import React from "react"
import { FilterSelect, FilterSelectProps } from "~components/FilterSelect"
import { useFilterBarContext } from "../context/FilterBarContext"

export type FilterBarSelectProps = FilterSelectProps

export const FilterBarSelect = (props: FilterBarSelectProps): JSX.Element => {
  const { updateSelectedValue } = useFilterBarContext()

  return (
    <FilterSelect
      {...props}
      onSelectionChange={(key): void => {
        updateSelectedValue(props.label, key)
        props.onSelectionChange?.(key)
      }}
    />
  )
}
