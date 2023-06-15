import React from "react"
import {
  FilterSelect,
  FilterSelectProps,
  SelectOption,
} from "~components/FilterSelect"
import { useFilterBarContext } from "../../context/FilterBarContext"
import { FilterBarButton } from "../FilterBarButton"

export type FilterBarSelectProps<Option extends SelectOption = SelectOption> =
  Omit<
    FilterSelectProps<Option>,
    "isOpen" | "setIsOpen" | "renderTrigger" | "label" | "selectedKey"
  > & {
    id?: string
  }

export const FilterBarSelect = <Option extends SelectOption = SelectOption>({
  id,
  onSelectionChange,
  ...props
}: FilterBarSelectProps<Option>): JSX.Element => {
  const { getFilterState, toggleOpenFilter, updateValue } =
    useFilterBarContext<Option["value"]>()

  if (!id) throw Error("Missing `id` prop in FilterBarSelect")

  const filterState = getFilterState(id)

  return (
    <FilterSelect<Option>
      {...props}
      selectedKey={filterState.value || null}
      label={filterState.name}
      renderTrigger={(triggerProps): JSX.Element => (
        <FilterBarButton
          {...triggerProps}
          isRemovable={filterState.isRemovable}
        />
      )}
      onSelectionChange={(key): void => {
        updateValue(id, key)
        onSelectionChange?.(key)
      }}
      isOpen={filterState.isOpen}
      setIsOpen={(open): void => toggleOpenFilter(id, open)}
    />
  )
}

FilterBarSelect.displayName = "FilterBarSelect"
