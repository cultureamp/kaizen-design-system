/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react"
import { FilterMultiSelect, ItemType } from "@kaizen/select"
import { useExpandableFilterSelect } from "../hooks/useExpandableFilterSelect"
import { useExpandableFilterState } from "../hooks/useExpandableFilterState"
import { FilterOption, FilterValues, IFilter } from "../types"

export const ExpandableSelectBox = <T extends string | number>({
  id = "",
  options = [],
}: {
  id: string
  options: Array<FilterOption<T>>
}) => {
  const { filters, dispatch } = useExpandableFilterState()
  const activeFilter = filters.find(f => f.id === id)
  if (!activeFilter) {
    return null
  }

  const onRemove = () => dispatch({ type: "removeFilter", data: activeFilter })
  return <Select filter={activeFilter} onRemove={onRemove} options={options} />
}

const Select = ({
  filter,
  options,
  onRemove,
}: {
  filter: IFilter<FilterValues>
  options: FilterOption[]
  onRemove: () => void
}) => {
  const { selectedOptions, onCheckboxChange, setOpen } =
    useExpandableFilterSelect(filter, options)
  const open = filter.visibility === "open"
  const labels = selectedOptions
    .filter(o => o.value === o.value)
    .map(v => v.label)

  return (
    <FilterMultiSelect
      isOpen={open}
      onOpenChange={setOpen}
      label={filter.name}
      onSelectionChange={onCheckboxChange}
      selectedKeys={new Set(selectedOptions.map(o => o.value))}
      items={options as ItemType[]}
      trigger={() =>
        filter.removable ? (
          <FilterMultiSelect.RemovableTrigger
            selectedOptionLabels={labels}
            label={filter.name}
            onRemove={onRemove}
          />
        ) : (
          <FilterMultiSelect.TriggerButton
            selectedOptionLabels={labels}
            label={filter.name}
          />
        )
      }
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
