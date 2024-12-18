import React, { useEffect, useState } from 'react'
import {
  FilterSelect,
  type FilterSelectProps,
  type SelectItem,
  type SelectOption,
} from '~components/Filter/FilterSelect'
import { useFilterBarContext } from '../../context/FilterBarContext'
import { checkArraysMatch } from '../../utils/checkArraysMatch'
import { FilterBarButton } from '../FilterBarButton'

export type FilterBarSelectProps<Option extends SelectOption = SelectOption> = Omit<
  FilterSelectProps<Option>,
  'isOpen' | 'setIsOpen' | 'renderTrigger' | 'label' | 'selectedKey'
> & {
  id?: string
}

export const FilterBarSelect = <Option extends SelectOption = SelectOption>({
  id,
  items: propsItems,
  onSelectionChange,
  ...props
}: FilterBarSelectProps<Option>): JSX.Element => {
  const { getFilterState, setFilterOpenState, updateValue } = useFilterBarContext<
    Option['value'] | undefined
  >()
  const [items, setItems] = useState<SelectItem<Option>[]>(propsItems)

  if (!id) throw Error('Missing `id` prop in FilterBarSelect')

  const filterState = getFilterState(id)

  useEffect(() => {
    if (!checkArraysMatch(items, propsItems)) {
      setItems(propsItems)
    }
    // We only want to run this effect when propsItems changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propsItems])

  useEffect(() => {
    if (filterState.value) {
      const itemValues = items.map((item) => (item as Option)?.value)
      if (!itemValues.includes(filterState.value)) {
        updateValue(id, undefined)
      }
    }
    // We only want to run this effect when items changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  return (
    <FilterSelect<Option>
      {...props}
      items={items}
      selectedKey={filterState.value ?? null}
      label={filterState.name}
      renderTrigger={(triggerProps): JSX.Element => (
        <FilterBarButton {...triggerProps} filterId={id} isRemovable={filterState.isRemovable} />
      )}
      onSelectionChange={(key): void => {
        updateValue(id, key)
        onSelectionChange?.(key)
      }}
      isOpen={filterState.isOpen}
      setIsOpen={(open): void => setFilterOpenState(id, open)}
    />
  )
}

FilterBarSelect.displayName = 'FilterBarSelect'
