import React from "react"
import { Button } from "@kaizen/button"
import filterIcon from "@kaizen/component-library/icons/filter.icon.svg"
import { Menu, MenuList, MenuItem } from "@kaizen/draft-menu"

import { useExpandableFilterState } from "../hooks/useExpandableFilterState"
import { FilterValues, IFilter } from "../types"

export const openFilter = <T extends FilterValues>(
  filter: IFilter<T>,
  filters: Array<IFilter<T>>
) =>
  filters
    .filter(f => f.id !== filter.id)
    .concat({
      ...filter,
      visibility: "open",
    })

export const AddFilterButton = <T extends FilterValues>() => {
  const { additionalFilters, filters, dispatch } = useExpandableFilterState()
  if (!additionalFilters.length) {
    return null
  }

  const selectOption = (filter: IFilter<T>) => {
    dispatch({ type: "setFilters", data: openFilter(filter, filters) })
  }

  return (
    <Menu
      button={
        <Button
          label="Add filter"
          secondary
          iconPosition="start"
          icon={filterIcon}
        />
      }
      dropdownWidth="contain"
    >
      <MenuList>
        {additionalFilters.map(f => (
          <MenuItem
            key={String(f.id)}
            label={f.name}
            onClick={() => selectOption(f)}
          />
        ))}
      </MenuList>
    </Menu>
  )
}
