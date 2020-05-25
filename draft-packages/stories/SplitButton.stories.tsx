import { MenuItem, MenuList } from "@kaizen/component-library"
import { SplitButton } from "@kaizen/draft-split-button"
import { action } from "@storybook/addon-actions"
import * as React from "react"

const duplicateIcon = require("@kaizen/component-library/icons/duplicate.icon.svg")
  .default
const editIcon = require("@kaizen/component-library/icons/edit.icon.svg")
  .default

export default {
  title: "SplitButton (React)",
}

export const DefaultKaizenSiteDemo = () => (
  <SplitButton
    label="Edit"
    onClick={() => action("Button clicked")}
    dropdownContent={
      <MenuList>
        <MenuItem
          action={(e: any) => {
            e.preventDefault()
            action("Menu item 1 pressed")()
          }}
          icon={editIcon}
        >
          Menu Item 1
        </MenuItem>
        <MenuItem
          action={(e: any) => {
            e.preventDefault()
            action("Menu item 2 pressed")()
          }}
          icon={duplicateIcon}
        >
          Menu Item 2
        </MenuItem>
      </MenuList>
    }
    dropdownAltText="Open menu"
  />
)

DefaultKaizenSiteDemo.story = {
  name: "Default (Kaizen Site Demo)",
}

export const Disabled = () => (
  <SplitButton
    label="Edit"
    onClick={() => action("Button clicked")}
    disabled
    dropdownContent={
      <MenuList>
        <MenuItem
          action={(e: any) => {
            e.preventDefault()
            action("Menu item 1 pressed")()
          }}
          icon={editIcon}
        >
          Menu Item 1
        </MenuItem>
      </MenuList>
    }
    dropdownAltText="Open menu"
  />
)

Disabled.story = {
  name: "Default disabled",
}

export const Primary = () => (
  <SplitButton
    label="Edit"
    variant="primary"
    onClick={() => action("Button clicked")}
    dropdownContent={
      <MenuList>
        <MenuItem
          action={(e: any) => {
            e.preventDefault()
            action("Menu item 1 pressed")()
          }}
          icon={editIcon}
        >
          Menu Item 1
        </MenuItem>
        <MenuItem
          action={(e: any) => {
            e.preventDefault()
            action("Menu item 2 pressed")()
          }}
          icon={duplicateIcon}
        >
          Menu Item 2
        </MenuItem>
      </MenuList>
    }
    dropdownAltText="Open menu"
  />
)

Primary.story = {
  name: "Primary",
}

export const PrimaryDisabled = () => (
  <SplitButton
    label="Edit"
    variant="primary"
    onClick={() => action("Button clicked")}
    disabled
    dropdownContent={
      <MenuList>
        <MenuItem
          action={(e: any) => {
            e.preventDefault()
            action("Menu item 1 pressed")()
          }}
          icon={editIcon}
        >
          Menu Item 1
        </MenuItem>
        <MenuItem
          action={(e: any) => {
            e.preventDefault()
            action("Menu item 2 pressed")()
          }}
          icon={duplicateIcon}
        >
          Menu Item 2
        </MenuItem>
      </MenuList>
    }
    dropdownAltText="Open menu"
  />
)

PrimaryDisabled.story = {
  name: "Primary disabled",
}

export const AnchorLink = () => (
  <SplitButton
    label="Edit"
    href="//example.com"
    dropdownContent={
      <MenuList>
        <MenuItem
          action={(e: any) => {
            e.preventDefault()
            action("Menu item 1 pressed")()
          }}
          icon={editIcon}
        >
          Menu Item 1
        </MenuItem>
      </MenuList>
    }
    dropdownAltText="Open menu"
  />
)

AnchorLink.story = {
  name: "Anchor link",
}

export const Rtl = () => (
  <SplitButton
    label="Edit"
    onClick={() => action("Button clicked")}
    dropdownContent={
      <MenuList>
        <MenuItem
          action={(e: any) => {
            e.preventDefault()
            action("Menu item 1 pressed")()
          }}
          icon={editIcon}
        >
          Menu Item 1
        </MenuItem>
        <MenuItem
          action={(e: any) => {
            e.preventDefault()
            action("Menu item 2 pressed")()
          }}
          icon={duplicateIcon}
        >
          Menu Item 2
        </MenuItem>
      </MenuList>
    }
    dir="rtl"
    dropdownAltText="Open menu"
  />
)

Rtl.story = {
  name: "RTL",
}

export const PrimaryRtl = () => (
  <SplitButton
    label="Edit"
    variant="primary"
    onClick={() => action("Button clicked")}
    dropdownContent={
      <MenuList>
        <MenuItem
          action={(e: any) => {
            e.preventDefault()
            action("Menu item 1 pressed")()
          }}
          icon={editIcon}
        >
          Menu Item 1
        </MenuItem>
        <MenuItem
          action={(e: any) => {
            e.preventDefault()
            action("Menu item 2 pressed")()
          }}
          icon={duplicateIcon}
        >
          Menu Item 2
        </MenuItem>
      </MenuList>
    }
    dir="rtl"
    dropdownAltText="Open menu"
  />
)

PrimaryRtl.story = {
  name: "Primary RTL",
}
