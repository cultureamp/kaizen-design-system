import React, { Key } from "react"
import { Selection } from "@react-types/shared"
import {
  FilterMultiSelect,
  FilterMultiSelectProps,
  getSelectedOptionLabels,
} from "~components/FilterMultiSelect"
import { useFilterBarContext } from "../../context/FilterBarContext"

export type FilterBarMultiSelectProps = Omit<
  FilterMultiSelectProps,
  | "isOpen"
  | "setIsOpen"
  | "renderTrigger"
  | "label"
  | "selectedKeys"
  | "trigger"
> & {
  id?: string
}

// This should technically be handled within the FilterMultiSelect
// so that it only returns consumable formats instead of Set.
// Someone fix please.
export type ConsumableSelection = string | Key[] | undefined

const convertSelectionToAConsumableFormat = (
  value: Selection
): ConsumableSelection => {
  if (value === "all") return "all"
  const arrayOfValues = Array.from(value)

  return arrayOfValues.length > 0 ? Array.from(value) : undefined
}

const convertConsumableFormatIntoSelection = (
  value: ConsumableSelection
): Selection => new Set(value)

export const FilterBarMultiSelect = ({
  id,
  items,
  children,
  onSelectionChange,
  ...props
}: FilterBarMultiSelectProps): JSX.Element | null => {
  const { getFilterState, toggleOpenFilter, updateValue } =
    useFilterBarContext<ConsumableSelection>()

  if (!id) throw Error("Missing `id` prop in FilterBarMultiSelect")

  const filterState = getFilterState(id)

  return (
    <FilterMultiSelect
      label={filterState.name}
      // Convert the incoming FilterBar state to a Set (internal FilterMultiSelect state)
      selectedKeys={new Set(filterState.value || null)}
      onSelectionChange={(keys): void => {
        // Convert the internal FilterMultiSelect state (Set) to an Array for FilterBar state
        updateValue(id, convertSelectionToAConsumableFormat(keys))
        onSelectionChange?.(keys)
      }}
      items={items}
      isOpen={filterState.isOpen}
      onOpenChange={(open): void => toggleOpenFilter(id, open)}
      trigger={(): JSX.Element => {
        const triggerProps = {
          selectedOptionLabels: filterState.value
            ? getSelectedOptionLabels(
                convertConsumableFormatIntoSelection(filterState.value),
                items
              )
            : [],
          label: filterState.name,
        }

        return filterState.isRemovable ? (
          <FilterMultiSelect.RemovableTrigger
            {...triggerProps}
            onRemove={() => undefined}
          />
        ) : (
          <FilterMultiSelect.TriggerButton {...triggerProps} />
        )
      }}
      {...props}
    >
      {children}
    </FilterMultiSelect>
  )
}

FilterBarMultiSelect.displayName = "FilterBar.MultiSelect"
