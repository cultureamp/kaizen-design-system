import caMonogramIcon from "@kaizen/component-library/icons/ca-monogram.icon.svg"
import kebabIcon from "@kaizen/component-library/icons/kebab.icon.svg"
import printIcon from "@kaizen/component-library/icons/print.icon.svg"

// import { action } from "@storybook/addon-actions"
import * as React from "react"

import {
  Dropdown,
  MenuHeader,
  MenuItem,
  MenuList,
  MenuSeparator,
} from "@kaizen/component-library"

const Menu: React.FunctionComponent = () => (
  <MenuList>
    <MenuHeader title="Contextual Select Menu" />
    <MenuItem
      action={(e: any) => {
        e.preventDefault()
        // action("I am an onClick handler")()
      }}
      icon={caMonogramIcon}
    >
      Action label with icon
    </MenuItem>
    <MenuItem
      action={(e: any) => {
        e.preventDefault()
        // action("I am an onClick handler")()
      }}
      icon={caMonogramIcon}
      hoverIcon
    >
      Action label with hover icon
    </MenuItem>
    <MenuItem
      action={(e: any) => {
        e.preventDefault()
        // action("I am an onClick handler")()
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

export default {
  title: "Dropdown (React)",
  component: Dropdown,
  parameters: {
    info: {
      text: `
        import { Dropdown, MenuHeader, MenuItem, MenuList, MenuSeparator } from "@kaizen/component-library";
      `,
    },
  },
}

export const DefaultMeatball = () => (
  <Dropdown>
    <Menu />
  </Dropdown>
)

DefaultMeatball.story = {
  name: "Default (Meatball)",
}

export const DefaultKebab = () => (
  <Dropdown icon={kebabIcon}>
    <Menu />
  </Dropdown>
)

DefaultKebab.story = {
  name: "Default (Kebab)",
}

export const LabelAndIcon = () => (
  <Dropdown label="Print" icon={kebabIcon}>
    <Menu />
  </Dropdown>
)

LabelAndIcon.story = {
  name: "Label and Icon",
}

export const TextOnly = () => (
  <Dropdown label="Print">
    <Menu />
  </Dropdown>
)

export const ControlAction = () => (
  <Dropdown label="Print" icon={printIcon} controlAction>
    <Menu />
  </Dropdown>
)

ControlAction.story = {
  name: "Control action",
}

export const ReversedControlAction = () => (
  <Dropdown label="Print" icon={printIcon} controlAction reversedColor>
    <Menu />
  </Dropdown>
)

ReversedControlAction.story = {
  name: "Reversed Control action",
}
