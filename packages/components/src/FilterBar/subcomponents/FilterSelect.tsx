import React from "react"
import { FilterButton, FilterButtonRemovable } from "~components/FilterButton"
import {
  FilterSelect,
  FilterSelectProps,
  SelectOption,
} from "~components/FilterSelect"
import { useFilterBarContext } from "../context/FilterBarContext"

export type FilterBarSelectProps<Option extends SelectOption = SelectOption> =
  Omit<
    FilterSelectProps<Option>,
    "isOpen" | "setIsOpen" | "renderTrigger" | "label"
  > & {
    id: string
  }

export const FilterBarSelect = <Option extends SelectOption = SelectOption>({
  onSelectionChange,
  ...props
}: FilterBarSelectProps<Option>): JSX.Element | null => {
  const { getFilterState, updateSelectedValue, toggleOpenFilter, hideFilter } =
    useFilterBarContext()

  const filterState = getFilterState(props.id)

  return (
    <FilterSelect<Option>
      {...props}
      selectedKey={filterState.selectedValue || null}
      label={filterState.label}
      renderTrigger={(triggerProps): JSX.Element =>
        filterState.isRemovable ? (
          <FilterButtonRemovable
            triggerButtonProps={{ ...triggerProps }}
            removeButtonProps={{
              onClick: () => hideFilter(props.id),
            }}
          />
        ) : (
          <FilterButton {...triggerProps} />
        )
      }
      onSelectionChange={(key): void => {
        updateSelectedValue(props.id, key)
        onSelectionChange?.(key)
      }}
      isOpen={filterState.isOpen ?? false}
      setIsOpen={(open): void => toggleOpenFilter(props.id, open)}
    />
  )
}
