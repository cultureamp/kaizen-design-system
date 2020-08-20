import { MenuItem, MenuContent } from "@kaizen/draft-menu"
import { SplitButton } from "@kaizen/draft-split-button"
import { action } from "@storybook/addon-actions"
import * as React from "react"

const duplicateIcon = require("@kaizen/component-library/icons/duplicate.icon.svg")
  .default
const editIcon = require("@kaizen/component-library/icons/edit.icon.svg")
  .default

export default {
  title: "SplitButton (React)",
  component: SplitButton,
  parameters: {
    info: {
      text: `
      import { SplitButton } from "@kaizen/draft-split-button"
      `,
    },
  },
}

export const DefaultKaizenSiteDemo = () => (
  <SplitButton
    label="Edit"
    onClick={() => action("Button clicked")}
    dropdownContent={
      <MenuContent>
        <MenuItem
          action={(e: any) => {
            e.preventDefault()
            action("Menu item 1 pressed")()
          }}
          icon={editIcon}
          label="Menu Item 1"
        />
        <MenuItem
          action={(e: any) => {
            e.preventDefault()
            action("Menu item 2 pressed")()
          }}
          icon={duplicateIcon}
          label="Menu Item 2"
        />
      </MenuContent>
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
      <MenuContent>
        <MenuItem
          action={(e: any) => {
            e.preventDefault()
            action("Menu item 1 pressed")()
          }}
          icon={editIcon}
          label="Menu Item 1"
        />
      </MenuContent>
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
      <MenuContent>
        <MenuItem
          action={(e: any) => {
            e.preventDefault()
            action("Menu item 1 pressed")()
          }}
          icon={editIcon}
          label="Menu Item 1"
        />
        <MenuItem
          action={(e: any) => {
            e.preventDefault()
            action("Menu item 2 pressed")()
          }}
          icon={duplicateIcon}
          label="Menu Item 2"
        />
      </MenuContent>
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
      <MenuContent>
        <MenuItem
          action={(e: any) => {
            e.preventDefault()
            action("Menu item 1 pressed")()
          }}
          icon={editIcon}
          label="Menu Item 1"
        />
        <MenuItem
          action={(e: any) => {
            e.preventDefault()
            action("Menu item 2 pressed")()
          }}
          icon={duplicateIcon}
          label="Menu Item 2"
        />
      </MenuContent>
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
      <MenuContent>
        <MenuItem
          action={(e: any) => {
            e.preventDefault()
            action("Menu item 1 pressed")()
          }}
          icon={editIcon}
          label="Menu Item 1"
        />
      </MenuContent>
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
      <MenuContent>
        <MenuItem
          action={(e: any) => {
            e.preventDefault()
            action("Menu item 1 pressed")()
          }}
          icon={editIcon}
          label="Menu Item 1"
        />
        <MenuItem
          action={(e: any) => {
            e.preventDefault()
            action("Menu item 2 pressed")()
          }}
          icon={duplicateIcon}
          label="Menu Item 2"
        />
      </MenuContent>
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
      <MenuContent>
        <MenuItem
          action={(e: any) => {
            e.preventDefault()
            action("Menu item 1 pressed")()
          }}
          icon={editIcon}
          label="
          Menu Item 1
        "
        />
        <MenuItem
          action={(e: any) => {
            e.preventDefault()
            action("Menu item 2 pressed")()
          }}
          icon={duplicateIcon}
          label="Menu Item 2"
        />
      </MenuContent>
    }
    dir="rtl"
    dropdownAltText="Open menu"
  />
)

PrimaryRtl.story = {
  name: "Primary RTL",
}
