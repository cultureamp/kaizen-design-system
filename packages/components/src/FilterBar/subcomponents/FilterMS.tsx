import React from "react"
import { FilterMultiSelect, getSelectedOptionLabels } from "@kaizen/select"
import { RootProps } from "@kaizen/select/src/FilterMultiSelect/components/Root"
import { useFilterBarContext } from "../context/FilterBarContext"

export type FilterBarMultiSelectProps = Omit<RootProps, "trigger" | "label"> & {
  id: string
}

export const FilterBarMultiSelect = ({
  items,
  children,
  ...props
}: FilterBarMultiSelectProps): JSX.Element | null => {
  const { getFilterState, updateSelectedValue, toggleOpenFilter, hideFilter } =
    useFilterBarContext()

  const filterState = getFilterState(props.id)

  return (
    <FilterMultiSelect
      label={filterState.name}
      // Convert the incoming FilterBar state to a Set (internal FilterMultiSelect state)
      selectedKeys={new Set(filterState.selectedValue)}
      onSelectionChange={(keys): void => {
        // Convert the internal FilterMultiSelect state (Set) to an Array for FilterBar state
        updateSelectedValue(props.id, Array.from(keys))
      }}
      items={items}
      isOpen={filterState.isOpen ?? false}
      onOpenChange={(open): void => toggleOpenFilter(props.id, open)}
      trigger={(): JSX.Element =>
        filterState.isRemovable ? (
          <FilterMultiSelect.RemovableTrigger
            selectedOptionLabels={getSelectedOptionLabels(
              filterState.selectedValue,
              items
            )}
            onRemove={() => hideFilter(props.id)}
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
