import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import { Menu, MenuList, MenuItem } from "@kaizen/draft-menu"
import { useFilterBarContext } from "../context/FilterBarContext"

export const FilterAddButton = (): JSX.Element => {
  const { getHiddenFilters, showFilter } = useFilterBarContext()
  return (
    <Menu button={<button type="button">Add filter</button>}>
      <MenuList>
        {getHiddenFilters().map(({ id, label }) => (
          <MenuItem
            key={id}
            label={label}
            onClick={(): void => showFilter(id)}
          />
        ))}
      </MenuList>
    </Menu>
  )
}
