const caMonogramIcon = require("@cultureamp/kaizen-component-library/icons/ca-monogram.icon.svg")
  .default
const kebabIcon = require("@cultureamp/kaizen-component-library/icons/kebab.icon.svg")
  .default
const printIcon = require("@cultureamp/kaizen-component-library/icons/print.icon.svg")
  .default
import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"
import * as React from "react"

import {
  Dropdown,
  MenuHeader,
  MenuItem,
  MenuList,
  MenuSeparator,
} from "@cultureamp/kaizen-component-library"

const Menu: React.FunctionComponent = () => (
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
  </MenuList>
)
storiesOf("Dropdown (React)", module)
  .add("Default (Meatball)", () => (
    <Dropdown>
      <Menu />
    </Dropdown>
  ))
  .add("Default (Kebab)", () => (
    <Dropdown icon={kebabIcon}>
      <Menu />
    </Dropdown>
  ))
  .add("Label and Icon", () => (
    <Dropdown label="Print" icon={kebabIcon}>
      <Menu />
    </Dropdown>
  ))
  .add("Text Only", () => (
    <Dropdown label="Print">
      <Menu />
    </Dropdown>
  ))
  .add("Control action", () => (
    <Dropdown label="Print" icon={printIcon} controlAction>
      <Menu />
    </Dropdown>
  ))
  .add("Reversed Control action", () => (
    <Dropdown label="Print" icon={printIcon} controlAction reversedColor>
      <Menu />
    </Dropdown>
  ))
