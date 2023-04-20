/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react"
import { FilterMultiSelect, getSelectedOptionLabels } from "@kaizen/select"
import { useSimpleFilterSelect } from "../hooks/useSimpleFilterSelect"
import { useSimpleFilterState } from "../hooks/useSimpleFilterState"
import { FilterOption, FilterValues, IBaseFilter } from "../types"

export const SimpleFilterSelectBox = <T extends string | number>({
  id = "",
  options = [],
}: {
  id: string
  options: Array<FilterOption<T>>
}) => {
  const { filters } = useSimpleFilterState()
  const activeFilter = filters.find(f => f.id === id)
  if (!activeFilter) {
    return null
  }

  return <Select filter={activeFilter} options={options} />
}

const Select = ({
  filter,
  options,
}: {
  filter: IBaseFilter<FilterValues>
  options: FilterOption[]
}) => {
  const { selectedOptions, onCheckboxChange } = useSimpleFilterSelect(
    filter,
    options
  )

  return (
    <FilterMultiSelect
      label={filter.name}
      onSelectionChange={onCheckboxChange}
      selectedKeys={new Set(selectedOptions.map(o => o.value))}
      items={options}
      trigger={() => (
        <FilterMultiSelect.TriggerButton
          selectedOptionLabels={getSelectedOptionLabels(
            new Set(selectedOptions.map(o => o.value)),
            options
          )}
          label={filter.name}
        />
      )}
    >
      {() => (
        <>
          <FilterMultiSelect.SearchInput />
          <FilterMultiSelect.ListBox>
            {({ allItems }) =>
              allItems.map(item => (
                <FilterMultiSelect.Option key={item.key} item={item} />
              ))
            }
          </FilterMultiSelect.ListBox>
          <FilterMultiSelect.MenuFooter>
            <FilterMultiSelect.SelectAllButton />
            <FilterMultiSelect.ClearButton />
          </FilterMultiSelect.MenuFooter>
        </>
      )}
    </FilterMultiSelect>
  )
}
