import React from "react"
import { Button } from "@kaizen/button"
import { Menu, MenuList, MenuItem } from "@kaizen/draft-menu"
import { useFilterBarContext } from "../../context/FilterBarContext"

export const AddFiltersMenu = (): JSX.Element => {
  const { getInactiveFilters } = useFilterBarContext()
  const inactiveFilters = getInactiveFilters()

  return (
    <Menu button={<Button label="Add Filters" secondary />}>
      <MenuList>
        {inactiveFilters.map(({ id, name }) => (
          <MenuItem key={id} label={name} onClick={(): void => undefined} />
        ))}
      </MenuList>
    </Menu>
  )
}

AddFiltersMenu.displayName = "FilterBar.AddFiltersMenu"
