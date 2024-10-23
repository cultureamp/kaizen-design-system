import React, { useEffect, useRef, useState } from "react"
import { Selection, Key } from "@react-types/shared"
import {
  FilterMultiSelect,
  FilterMultiSelectProps,
  ItemType,
  getSelectedOptionLabels,
} from "~components/Filter/FilterMultiSelect"
import { useFilterBarContext } from "../../context/FilterBarContext"
import { checkArraysMatch } from "../../utils/checkArraysMatch"

export type FilterBarMultiSelectProps = Omit<
  FilterMultiSelectProps,
  "label" | "trigger"
> & {
  id?: string
  label?: FilterMultiSelectProps["label"]
  trigger?: FilterMultiSelectProps["trigger"]
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
  items: propsItems,
  children,
  onSelectionChange,
  ...props
}: FilterBarMultiSelectProps): JSX.Element | null => {
  const {
    getFilterState,
    setFilterOpenState,
    updateValue,
    hideFilter,
    focusId,
    setFocus,
  } = useFilterBarContext<ConsumableSelection>()
  const [items, setItems] = useState<ItemType[]>(propsItems)
  const buttonRef = useRef<HTMLButtonElement>(null)

  if (!id) throw Error("Missing `id` prop in FilterBarMultiSelect")

  const filterState = getFilterState(id)

  useEffect(() => {
    if (!checkArraysMatch(items, propsItems)) {
      setItems(propsItems)
    }
  }, [propsItems])

  useEffect(() => {
    if (Array.isArray(filterState.value)) {
      const itemValues = items.map(({ value }) => value)
      const filteredValues = filterState.value.filter(value =>
        itemValues.includes(value)
      )

      if (!checkArraysMatch(filterState.value, filteredValues)) {
        updateValue(id, filteredValues)
      }
    }
  }, [items])

  useEffect(() => {
    if (focusId === id) {
      buttonRef.current?.focus()
      setFocus(undefined)
    }
  }, [focusId])

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
      onOpenChange={(open): void => setFilterOpenState(id, open)}
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
            onRemove={() => hideFilter(id)}
          />
        ) : (
          <FilterMultiSelect.TriggerButton {...triggerProps} />
        )
      }}
      triggerRef={buttonRef}
      {...props}
    >
      {children}
    </FilterMultiSelect>
  )
}

FilterBarMultiSelect.displayName = "FilterBar.MultiSelect"
