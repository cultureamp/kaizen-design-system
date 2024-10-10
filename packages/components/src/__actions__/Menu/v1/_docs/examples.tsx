import React from "react"
import { action } from "@storybook/addon-actions"
import { Icon } from "~components/__future__/Icon"
import { MenuItem, MenuList } from "../"

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
      icon={<Icon name="edit" isPresentational isFilled />}
      label="Menu Item 1"
      onClick={action("clicked")}
    />
    <MenuItem
      icon={<Icon name="content_copy" isPresentational isFilled />}
      label="Menu Item 2"
    />
  </MenuList>
)

export const exampleDropdownContentOneDisabled = (
  <MenuList>
    <MenuItem
      icon={<Icon name="edit" isPresentational isFilled />}
      label="Menu Item 1"
      disabled
    />
    <MenuItem
      icon={<Icon name="content_copy" isPresentational isFilled />}
      label="Menu Item 2"
    />
  </MenuList>
)
