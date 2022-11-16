import React from "react"

import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"
import duplicateIcon from "@kaizen/component-library/icons/duplicate.icon.svg"
import editIcon from "@kaizen/component-library/icons/edit.icon.svg"
import kebabIcon from "@kaizen/component-library/icons/kebab.icon.svg"
import meatballsIcon from "@kaizen/component-library/icons/meatballs.icon.svg"
import trashIcon from "@kaizen/component-library/icons/trash.icon.svg"

import { MenuList, MenuItem, StatelessMenu } from "../.."

/**
 * This is an mocked example of a Menu's children using all of the subcomponents.
 */
export const MenuContentExample: React.FunctionComponent = () => (
  <>
    <MenuList heading="Links">
      <MenuItem href="https://www.cultureamp.com/" label="Menu link" />
      <MenuItem href="https://www.cultureamp.com/" label="Menu link" />
      <MenuItem href="https://www.cultureamp.com/" label="Menu link" />
    </MenuList>
    <MenuList heading="Buttons">
      <MenuItem
        onClick={(e: any) => {
          alert("Hello")
          e.preventDefault()
        }}
        icon={editIcon}
        label="Menu button"
      />
      <MenuItem
        onClick={(e: any) => {
          e.preventDefault()
        }}
        icon={duplicateIcon}
        label="Menu button but the label is too long"
      />
      <MenuItem
        onClick={(e: any) => {
          e.preventDefault()
        }}
        icon={trashIcon}
        destructive
        label="Destructive Menu button"
      />
      <MenuItem
        onClick={(e: any) => {
          e.preventDefault()
        }}
        icon={trashIcon}
        disabled
        label="Disabled Menu button"
      />
      <MenuItem
        onClick={(e: any) => {
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
        onClick={(e: any) => {
          e.preventDefault()
        }}
        label="Menu button no icons"
      />
      <MenuItem
        onClick={(e: any) => {
          e.preventDefault()
        }}
        disabled
        label="Disabled button no icon"
      />
    </MenuList>
  </>
)
