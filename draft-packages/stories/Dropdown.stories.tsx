import caMonogramIcon from "@kaizen/component-library/icons/ca-monogram.icon.svg"
import kebabIcon from "@kaizen/component-library/icons/kebab.icon.svg"
import printIcon from "@kaizen/component-library/icons/print.icon.svg"

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

const reversedBg = {
  backgrounds: {
    default: "Wisteria 700",
  },
}

export const DefaultMeatball = () => (
  <Dropdown>
    <Menu />
  </Dropdown>
)
DefaultMeatball.storyName = "Default (Meatball)"

export const DefaultKebab = () => (
  <Dropdown icon={kebabIcon}>
    <Menu />
  </Dropdown>
)
DefaultKebab.storyName = "Default (Kebab)"

export const LabelAndIcon = () => (
  <Dropdown label="Print" icon={kebabIcon}>
    <Menu />
  </Dropdown>
)
LabelAndIcon.storyName = "Label and Icon"

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
ControlAction.storyName = "Control action"

export const ReversedControlAction = () => (
  <Dropdown label="Print" icon={printIcon} controlAction reversedColor>
    <Menu />
  </Dropdown>
)
ReversedControlAction.storyName = "Reversed Control action"
ReversedControlAction.parameters = { ...reversedBg }
