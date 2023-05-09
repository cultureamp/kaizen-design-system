import React from "react"

import duplicateIcon from "@kaizen/component-library/icons/duplicate.icon.svg"
import editIcon from "@kaizen/component-library/icons/edit.icon.svg"
import trashIcon from "@kaizen/component-library/icons/trash.icon.svg"

import { MenuList, MenuItem, MenuHeading } from "../.."

/**
 * This is an mocked example of a Menu's children using all of the subcomponents.
 */
export const MenuContentExample = (): JSX.Element => (
  <>
    <MenuHeading id="menu-links-heading">Links</MenuHeading>
    <MenuList aria-labelledby="menu-links-heading">
      <MenuItem href="https://www.cultureamp.com/" label="Menu link" />
      <MenuItem href="https://www.cultureamp.com/" label="Menu link" />
      <MenuItem href="https://www.cultureamp.com/" label="Menu link" />
    </MenuList>
    <MenuHeading id="menu-buttons-heading">Buttons</MenuHeading>
    <MenuList aria-labelledby="menu-buttons-heading">
      <MenuItem
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
          alert("Hello")
          e.preventDefault()
        }}
        icon={editIcon}
        label="Menu button"
      />
      <MenuItem
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
          e.preventDefault()
        }}
        icon={duplicateIcon}
        label="Menu button but the label is too long"
      />
      <MenuItem
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
          e.preventDefault()
        }}
        icon={trashIcon}
        destructive
        label="Destructive Menu button"
      />
      <MenuItem
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
          e.preventDefault()
        }}
        icon={trashIcon}
        disabled
        label="Disabled Menu button"
      />
      <MenuItem
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
          e.preventDefault()
        }}
        icon={trashIcon}
        disabled
        destructive
        label="Disabled Destructive Menu button"
      />
    </MenuList>
    <MenuHeading id="buttons-no-icons-heading">Buttons (no icons)</MenuHeading>
    <MenuList aria-labelledby="buttons-no-icons-heading">
      <MenuItem
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
          e.preventDefault()
        }}
        label="Menu button no icons"
      />
      <MenuItem
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
          e.preventDefault()
        }}
        disabled
        label="Disabled button no icon"
      />
    </MenuList>
  </>
)
