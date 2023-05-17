import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import { Menu, MenuList, MenuItem } from "@kaizen/draft-menu"
import { useFilterBarContext } from "../context/FilterBarContext"

export const FilterAddButton = (): JSX.Element => {
  const { getHiddenFilters, showFilter } = useFilterBarContext()

  const hiddenFilters = getHiddenFilters()
  return (
    <Menu
      button={
        <button type="button">Add filter ({hiddenFilters.length})</button>
      }
    >
      <MenuList>
        {hiddenFilters.map(({ id, name }) => (
          <MenuItem
            key={id}
            label={name}
            onClick={(): void => showFilter(id)}
          />
        ))}
      </MenuList>
    </Menu>
  )
}
