import React from "react"
import { Button } from "~components/Button"
import { AddIcon } from "~components/Icon"
import { Menu, MenuList, MenuItem } from "~components/Menu"
import { useFilterBarContext } from "../../context/FilterBarContext"

export const AddFiltersMenu = (): JSX.Element => {
  const { getInactiveFilters, showFilter } = useFilterBarContext()
  const inactiveFilters = getInactiveFilters()

  return (
    <Menu
      button={
        <Button
          label="Add Filters"
          secondary
          disabled={inactiveFilters.length === 0}
          icon={<AddIcon role="presentation" />}
        />
      }
    >
      <MenuList>
        {inactiveFilters.map(({ id, name }) => (
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

AddFiltersMenu.displayName = "FilterBar.AddFiltersMenu"
