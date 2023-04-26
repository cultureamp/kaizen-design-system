import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import { Menu, MenuList, MenuItem } from "@kaizen/draft-menu"
import { useFilterBarContext } from "../context/FilterBarContext"

export const FilterAddButton = (): JSX.Element => {
  const c = useFilterBarContext()
   return (
    <Menu
      button={<button>Add filter</button>}
    >
    <MenuList>
      <MenuItem
        label="Carrots"
      />
    </MenuList>
  </Menu>
  )
}
