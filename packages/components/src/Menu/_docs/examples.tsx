import React from "react"
import { action } from "@storybook/addon-actions"
import { DuplicateIcon, EditIcon } from "~components/Icon"
import { MenuItem, MenuList } from "~components/Menu"

export const exampleActionButtonPropsButton = {
  label: "Edit Survey",
  onClick: action("clicked"),
}

export const exampleActionButtonPropsAnchor = {
  label: "Edit Survey",
  href: "//example.com",
}

export const exampleDropdownContentEnabled = (
  <MenuList>
    <MenuItem
      icon={<EditIcon role="presentation" />}
      label="Menu Item 1"
      onClick={action("clicked")}
    />
    <MenuItem
      icon={<DuplicateIcon role="presentation" />}
      label="Menu Item 2"
    />
  </MenuList>
)

export const exampleDropdownContentOneDisabled = (
  <MenuList>
    <MenuItem
      icon={<EditIcon role="presentation" />}
      label="Menu Item 1"
      disabled
    />
    <MenuItem
      icon={<DuplicateIcon role="presentation" />}
      label="Menu Item 2"
    />
  </MenuList>
)
