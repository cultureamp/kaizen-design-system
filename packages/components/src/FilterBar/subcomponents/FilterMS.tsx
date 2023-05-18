import React from "react"
import { Selection } from "@react-types/shared"
import { FilterMultiSelect, getSelectedOptionLabels } from "@kaizen/select"
import { RootProps } from "@kaizen/select/src/FilterMultiSelect/components/Root"
import { useFilterBarContext } from "../context/FilterBarContext"

export type FilterBarMultiSelectProps = Omit<
  RootProps,
  "trigger" | "label" | "selectedKeys" | "isOpen" | "isOpenChange"
> & {
  id?: string
}

export const FilterBarMultiSelect = ({
  id,
  items,
  children,
  onSelectionChange,
  ...props
}: FilterBarMultiSelectProps): JSX.Element | null => {
  const { getFilterState, updateSelectedValue, toggleOpenFilter, hideFilter } =
    useFilterBarContext<Selection>()

  if (!id) throw Error("Missing `id` prop")

  const filterState = getFilterState(id)

  return (
    <FilterMultiSelect
      label={filterState.name}
      // Convert the incoming FilterBar state to a Set (internal FilterMultiSelect state)
      selectedKeys={new Set(filterState.selectedValue)}
      onSelectionChange={(keys): void => {
        // Convert the internal FilterMultiSelect state (Set) to an Array for FilterBar state
        updateSelectedValue(id, Array.from(keys))
        onSelectionChange?.(keys)
      }}
      items={items}
      isOpen={filterState.isOpen}
      onOpenChange={(open): void => toggleOpenFilter(id, open)}
      trigger={(): JSX.Element =>
        filterState.isRemovable ? (
          <FilterMultiSelect.RemovableTrigger
            selectedOptionLabels={getSelectedOptionLabels(
              filterState.selectedValue,
              items
            )}
            onRemove={() => hideFilter(id)}
            label={filterState.name}
          />
        ) : (
          <FilterMultiSelect.TriggerButton
            selectedOptionLabels={getSelectedOptionLabels(
              filterState.selectedValue,
              items
            )}
            label={filterState.name}
          />
        )
      }
      {...props}
    >
      {children}
    </FilterMultiSelect>
  )
}
