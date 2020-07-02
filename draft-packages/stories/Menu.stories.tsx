import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import { Button, IconButton } from "@kaizen/draft-button"
const chevronDown = require("@kaizen/component-library/icons/chevron-down.icon.svg")
  .default
const duplicateIcon = require("@kaizen/component-library/icons/duplicate.icon.svg")
  .default
const editIcon = require("@kaizen/component-library/icons/edit.icon.svg")
  .default
const trashIcon = require("@kaizen/component-library/icons/trash.icon.svg")
  .default
const kebabIcon = require("@kaizen/component-library/icons/kebab.icon.svg")
  .default
const meatballsIcon = require("@kaizen/component-library/icons/meatballs.icon.svg")
  .default
import { action } from "@storybook/addon-actions"
import * as React from "react"

import { Menu, MenuContent, MenuHeader, MenuItem, MenuSeparator } from "../menu"

const StoryWrapper = ({ children }) => (
  <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
    <div style={{ display: "inline-block" }}>{children}</div>
  </div>
)

const MenuInstance: React.FunctionComponent = () => (
  <MenuContent>
    <MenuItem action="https://www.cultureamp.com/" label="Menu link" />
    <MenuItem action="https://www.cultureamp.com/" label="Menu link" />
    <MenuItem action="https://www.cultureamp.com/" label="Menu link" />
    <MenuSeparator />
    <MenuHeader title="Other actions" />
    <MenuItem
      action={(e: any) => {
        e.preventDefault()
        action("I am an onClick handler")()
      }}
      icon={duplicateIcon}
      label="Menu button but the label is too long"
    />
    <MenuItem
      action={(e: any) => {
        e.preventDefault()
        action("I am an onClick handler")()
      }}
      icon={editIcon}
      label="Menu button"
    />

    <MenuItem
      action="https://www.cultureamp.com/"
      icon={trashIcon}
      destructive
      label="Menu button"
    />
    <MenuItem
      action="https://www.cultureamp.com/"
      disabled
      label="Menu button"
    />
  </MenuContent>
)

export default {
  title: "Menu (React)",
  component: Menu,
  parameters: {
    info: {
      text: `
        import { Menu, MenuHeader, MenuItem, MenuContent, MenuSeparator } from "@kaizen/draft-menu";
      `,
    },
  },
}

export const LabelAndIcon = () => (
  <StoryWrapper>
    <Menu
      button={<Button label="Label" icon={chevronDown} iconPosition="end" />}
    >
      <MenuInstance />
    </Menu>
  </StoryWrapper>
)

LabelAndIcon.story = {
  name: "Label and Icon (Kaizen Site Demo)",
}

export const LabelAndIconReversed = () => (
  <StoryWrapper>
    <Menu
      button={
        <Button label="Label" icon={chevronDown} iconPosition="end" reversed />
      }
    >
      <MenuInstance />
    </Menu>
  </StoryWrapper>
)

LabelAndIconReversed.story = {
  name: "Label and Icon (reversed)",
  parameters: {
    backgrounds: [
      {
        name: "Wisteria 700",
        value: colorTokens.kz.color.wisteria[700],
        default: true,
      },
    ],
  },
}

export const DefaultMeatball = () => (
  <StoryWrapper>
    <Menu button={<IconButton label="" icon={meatballsIcon} />} align="right">
      <MenuInstance />
    </Menu>
  </StoryWrapper>
)

DefaultMeatball.story = {
  name: "Default (Meatball)",
}

export const DefaultKebab = () => (
  <StoryWrapper>
    <Menu button={<IconButton label="" icon={kebabIcon} />} align="right">
      <MenuInstance />
    </Menu>
  </StoryWrapper>
)

DefaultKebab.story = {
  name: "Default (Kebab)",
}

export const LabelAndIconBottom = () => (
  <StoryWrapper>
    <div style={{ marginTop: "400px" }}></div>
    <Menu
      button={<Button label="Label" icon={chevronDown} iconPosition="end" />}
    >
      <MenuInstance />
    </Menu>
  </StoryWrapper>
)

LabelAndIconBottom.story = {
  name: "Label and Icon (bottom of screen)",
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
}
