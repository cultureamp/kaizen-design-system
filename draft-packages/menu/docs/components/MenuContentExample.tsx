import React from "react"

import duplicateIcon from "@kaizen/component-library/icons/duplicate.icon.svg"
import editIcon from "@kaizen/component-library/icons/edit.icon.svg"
import trashIcon from "@kaizen/component-library/icons/trash.icon.svg"

import { MenuList, MenuItem } from "../.."

/**
 * This is an mocked example of a Menu's children using all of the subcomponents.
 */
export const MenuContentExample = (): JSX.Element => (
  <>
    <MenuList heading="Links">
      <MenuItem href="https://www.cultureamp.com/" label="Menu link" />
      <MenuItem href="https://www.cultureamp.com/" label="Menu link" />
      <MenuItem href="https://www.cultureamp.com/" label="Menu link" />
    </MenuList>
    <MenuList heading="Buttons">
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
    <MenuList heading="Buttons (no icons)">
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
