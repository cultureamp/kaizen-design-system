import React from "react"
import { FilterMultiSelect, getSelectedOptionLabels } from "@kaizen/select"
import { RootProps } from "@kaizen/select/src/FilterMultiSelect/components/Root"
import { useFilterBarContext } from "../context/FilterBarContext"

export type FilterBarMultiSelectProps = Omit<RootProps, "trigger" | "label"> & {
  id: string
}

export const FilterBarMultiSelect = ({
  onSelectionChange,
  items,
  children,
  ...props
}: FilterBarMultiSelectProps): JSX.Element | null => {
  const { getFilterState, updateSelectedValue, toggleOpenFilter, hideFilter } =
    useFilterBarContext()

  const filterState = getFilterState(props.id)

  return (
    <FilterMultiSelect
      label={filterState.label}
      onSelectionChange={(key): void => {
        updateSelectedValue(props.id, key)
        onSelectionChange?.(key)
      }}
      selectedKeys={filterState.selectedValue}
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
            label={filterState.label}
          />
        ) : (
          <FilterMultiSelect.TriggerButton
            selectedOptionLabels={getSelectedOptionLabels(
              filterState.selectedValue,
              items
            )}
            label={filterState.label}
          />
        )
      }
    >
      {children}
    </FilterMultiSelect>
  )
}
