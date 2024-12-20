import React, { useEffect, useRef, useState } from 'react'
import { type Key, type Selection } from '@react-types/shared'
import {
  FilterMultiSelect,
  getSelectedOptionLabels,
  type FilterMultiSelectProps,
  type ItemType,
} from '~components/Filter/FilterMultiSelect'
import { useFilterBarContext } from '../../context/FilterBarContext'
import { checkArraysMatch } from '../../utils/checkArraysMatch'
import styles from './FilterBarMultiSelect.module.css'

export type FilterBarMultiSelectProps = Omit<FilterMultiSelectProps, 'label' | 'trigger'> & {
  id?: string
  label?: FilterMultiSelectProps['label']
  trigger?: FilterMultiSelectProps['trigger']
}

// This should technically be handled within the FilterMultiSelect
// so that it only returns consumable formats instead of Set.
// Someone fix please.
export type ConsumableSelection = string | Key[] | undefined

const convertSelectionToAConsumableFormat = (value: Selection): ConsumableSelection => {
  if (value === 'all') return 'all'
  const arrayOfValues = Array.from(value)

  return arrayOfValues.length > 0 ? Array.from(value) : undefined
}

const convertConsumableFormatIntoSelection = (value: ConsumableSelection): Selection =>
  new Set(value)

export const FilterBarMultiSelect = ({
  id,
  items: propsItems,
  children,
  onSelectionChange,
  ...props
}: FilterBarMultiSelectProps): JSX.Element | null => {
  const { getFilterState, setFilterOpenState, updateValue, hideFilter, focusId, setFocus } =
    useFilterBarContext<ConsumableSelection>()
  const [items, setItems] = useState<ItemType[]>(propsItems)
  const buttonRef = useRef<HTMLButtonElement>(null)

  if (!id) throw Error('Missing `id` prop in FilterBarMultiSelect')

  const filterState = getFilterState(id)

  useEffect(() => {
    if (!checkArraysMatch(items, propsItems)) {
      setItems(propsItems)
    }
    // We only want to run this effect when propsItems changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propsItems])

  useEffect(() => {
    if (Array.isArray(filterState.value)) {
      const itemValues = items.map(({ value }) => value)
      const filteredValues = filterState.value.filter((value) => itemValues.includes(value))

      if (!checkArraysMatch(filterState.value, filteredValues)) {
        updateValue(id, filteredValues)
      }
    }
    // We only want to run this effect when items changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  useEffect(() => {
    if (focusId === id) {
      buttonRef.current?.focus()
      setFocus(undefined)
    }
  }, [focusId, id, setFocus])

  return (
    <FilterMultiSelect
      label={filterState.name}
      // Convert the incoming FilterBar state to a Set (internal FilterMultiSelect state)
      selectedKeys={new Set(filterState.value ?? null)}
      onSelectionChange={(keys): void => {
        // Convert the internal FilterMultiSelect state (Set) to an Array for FilterBar state
        updateValue(id, convertSelectionToAConsumableFormat(keys))
        onSelectionChange?.(keys)
      }}
      items={items}
      isOpen={filterState.isOpen}
      onOpenChange={(open): void => setFilterOpenState(id, open)}
      className={styles.filterMultiSelect}
      trigger={(): JSX.Element => {
        const triggerProps = {
          selectedOptionLabels: filterState.value
            ? getSelectedOptionLabels(
                convertConsumableFormatIntoSelection(filterState.value),
                items,
              )
            : [],
          label: filterState.name,
        }

        return filterState.isRemovable ? (
          <FilterMultiSelect.RemovableTrigger
            {...triggerProps}
            onRemove={() => hideFilter(id)}
            classNameOverride={styles.triggerButton}
          />
        ) : (
          <FilterMultiSelect.TriggerButton
            classNameOverride={styles.triggerButton}
            {...triggerProps}
          />
        )
      }}
      triggerRef={buttonRef}
      {...props}
    >
      {children}
    </FilterMultiSelect>
  )
}

FilterBarMultiSelect.displayName = 'FilterBar.MultiSelect'
