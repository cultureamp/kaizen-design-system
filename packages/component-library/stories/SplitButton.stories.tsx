import { MenuItem, MenuList } from "@cultureamp/kaizen-component-library"
import { SplitButton } from "@cultureamp/kaizen-component-library/draft"
import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"
import * as React from "react"

const duplicateIcon = require("@cultureamp/kaizen-component-library/icons/duplicate.icon.svg")
  .default
const editIcon = require("@cultureamp/kaizen-component-library/icons/edit.icon.svg")
  .default

storiesOf("SplitButton", module)
  .add("Default", () => (
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
  ))
  .add("Disabled", () => (
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
  ))
  .add("Anchor link", () => (
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
  ))
  .add("RTL", () => (
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
  ))
  .add("Primary", () => (
    <SplitButton
      label="Edit"
      primary={true}
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
  ))
  .add("Primary disable", () => (
    <SplitButton
      label="Edit"
      primary={true}
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
  ))
  .add("Primary RTL", () => (
    <SplitButton
      label="Edit"
      primary={true}
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
  ))
