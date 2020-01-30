import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"
import * as React from "react"

import {
  MenuHeader,
  MenuItem,
  MenuList,
  MenuSeparator,
} from "@kaizen/component-library"
const caMonogramIcon = require("@kaizen/component-library/icons/ca-monogram.icon.svg")
  .default

storiesOf("MenuList (React)", module)
  .add("Default", () => (
    <MenuList>
      <MenuHeader title="Contextual Select Menu" />
      <MenuItem
        action={(e: any) => {
          e.preventDefault()
          action("I am an onClick handler")()
        }}
        icon={caMonogramIcon}
      >
        Action label with icon
      </MenuItem>
      <MenuItem
        action={(e: any) => {
          e.preventDefault()
          action("I am an onClick handler")()
        }}
        icon={caMonogramIcon}
        hoverIcon
      >
        Action label with hover icon
      </MenuItem>
      <MenuItem
        action={(e: any) => {
          e.preventDefault()
          action("I am an onClick handler")()
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
          action("I am an onClick handler")()
        }}
        icon={caMonogramIcon}
        destructive
      >
        Destructive Action label with icon
      </MenuItem>
      <MenuItem
        action={(e: any) => {
          e.preventDefault()
          action("I am an onClick handler")()
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
          action("I am an onClick handler")()
        }}
        destructive
      >
        Destructive Action label
      </MenuItem>
    </MenuList>
  ))
  .add("Simple List", () => (
    <MenuList>
      <MenuItem
        action={(e: any) => {
          e.preventDefault()
          action("I am an onClick handler")()
        }}
        icon={caMonogramIcon}
        active
      >
        Active action label with icon
      </MenuItem>
      <MenuItem
        action={(e: any) => {
          e.preventDefault()
          action("I am an onClick handler")()
        }}
        icon={caMonogramIcon}
      >
        Action label with icon
      </MenuItem>
      <MenuItem
        action={(e: any) => {
          e.preventDefault()
          action("I am an onClick handler")()
        }}
        icon={caMonogramIcon}
        hoverIcon
      >
        Action label with hover icon
      </MenuItem>
      <MenuItem
        action={(e: any) => {
          e.preventDefault()
          action("I am an onClick handler")()
        }}
      >
        Action label
      </MenuItem>
    </MenuList>
  ))
