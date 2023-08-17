import React from "react"
import { Menu, MenuItem, MenuList } from "@kaizen/draft-menu"
import { Button, ButtonRef } from "~components/Button"

export interface DemographicMenuProps {
  isAddFilterDisabled: boolean
  addFilterButtonRef?: React.Ref<ButtonRef | undefined>
  groups: Array<{
    id: string
    name: string
  }>
  isSelected: (id: string) => boolean
  addFilter: (id: string) => void
}
export const DemographicMenu = ({
  isAddFilterDisabled,
  addFilterButtonRef,
  groups,
  isSelected,
  addFilter,
}: DemographicMenuProps): JSX.Element => (
  <Menu
    button={
      <Button
        disabled={isAddFilterDisabled}
        ref={addFilterButtonRef}
        label="Add filter"
        secondary
      />
    }
  >
    <MenuList>
      {groups
        .filter(group => !isSelected(group.id))
        .map(group => (
          <MenuItem
            label={group.name}
            key={group.id}
            onClick={(): void => addFilter(group.id)}
          />
        ))}
    </MenuList>
  </Menu>
)
