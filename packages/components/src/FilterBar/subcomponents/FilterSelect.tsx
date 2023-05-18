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
    "isOpen" | "setIsOpen" | "renderTrigger" | "label" | "selectedKey"
  > & {
    id?: string
  }

export const FilterBarSelect = <Option extends SelectOption = SelectOption>({
  id,
  onSelectionChange,
  ...props
}: FilterBarSelectProps<Option>): JSX.Element | null => {
  const { getFilterState, updateSelectedValue, toggleOpenFilter, hideFilter } =
    useFilterBarContext<Option["value"]>()

  if (!id) throw Error("Missing `id` prop")

  const filterState = getFilterState(id)

  return (
    <FilterSelect<Option>
      {...props}
      selectedKey={filterState.selectedValue || null}
      label={filterState.name}
      renderTrigger={(triggerProps): JSX.Element =>
        filterState.isRemovable ? (
          <FilterButtonRemovable
            triggerButtonProps={{ ...triggerProps }}
            removeButtonProps={{
              onClick: () => hideFilter(id),
            }}
          />
        ) : (
          <FilterButton {...triggerProps} />
        )
      }
      onSelectionChange={(key): void => {
        updateSelectedValue(id, key)
        onSelectionChange?.(key)
      }}
      isOpen={filterState.isOpen}
      setIsOpen={(open): void => toggleOpenFilter(id, open)}
    />
  )
}
