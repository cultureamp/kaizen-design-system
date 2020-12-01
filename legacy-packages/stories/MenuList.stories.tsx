import * as React from "react"

import {
  MenuHeader,
  MenuItem,
  MenuList,
  MenuSeparator,
} from "@kaizen/component-library"
import caMonogramIcon from "@kaizen/component-library/icons/ca-monogram.icon.svg"

export default {
  title: "MenuList (React, deprecated)",
  parameters: {
    info: {
      text: `
        # Deprecated
        MenuList is deprecated. Please use @kaizen/draft-menu instead. 
      `,
    },
  },
}

export const Default = () => (
  <MenuList>
    <MenuHeader title="Contextual Select Menu" />
    <MenuItem
      action={(e: any) => {
        e.preventDefault()
      }}
      icon={caMonogramIcon}
    >
      Action label with icon
    </MenuItem>
    <MenuItem
      action={(e: any) => {
        e.preventDefault()
      }}
      icon={caMonogramIcon}
      hoverIcon
    >
      Action label with hover icon
    </MenuItem>
    <MenuItem
      action={(e: any) => {
        e.preventDefault()
      }}
    >
      Action label
    </MenuItem>
    <MenuSeparator />
    <MenuItem action="https://www.cultureamp.com/" icon={caMonogramIcon}>
      Link label with icon
    </MenuItem>
    <MenuItem
      action="https://www.cultureamp.com/"
      icon={caMonogramIcon}
      hoverIcon
    >
      Link label with hover icon
    </MenuItem>
    <MenuItem action="https://www.cultureamp.com/">Link label</MenuItem>
    <MenuSeparator />
    <MenuItem
      action={(e: any) => {
        e.preventDefault()
      }}
      icon={caMonogramIcon}
      destructive
    >
      Destructive Action label with icon
    </MenuItem>
    <MenuItem
      action={(e: any) => {
        e.preventDefault()
      }}
      icon={caMonogramIcon}
      hoverIcon
      destructive
    >
      Destructive Action label with hover icon
    </MenuItem>
    <MenuItem
      action={(e: any) => {
        e.preventDefault()
      }}
      destructive
    >
      Destructive Action label
    </MenuItem>
  </MenuList>
)

export const SimpleList = () => (
  <MenuList>
    <MenuItem
      action={(e: any) => {
        e.preventDefault()
      }}
      icon={caMonogramIcon}
      active
    >
      Active action label with icon
    </MenuItem>
    <MenuItem
      action={(e: any) => {
        e.preventDefault()
      }}
      icon={caMonogramIcon}
    >
      Action label with icon
    </MenuItem>
    <MenuItem
      action={(e: any) => {
        e.preventDefault()
      }}
      icon={caMonogramIcon}
      hoverIcon
    >
      Action label with hover icon
    </MenuItem>
    <MenuItem
      action={(e: any) => {
        e.preventDefault()
      }}
    >
      Action label
    </MenuItem>
  </MenuList>
)
