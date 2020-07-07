import { Box, Paragraph } from "@kaizen/component-library"
import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import { Button, IconButton } from "@kaizen/draft-button"
const chevronDown = require("@kaizen/component-library/icons/chevron-down.icon.svg")
  .default
const chevronUp = require("@kaizen/component-library/icons/chevron-up.icon.svg")
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
import React, { useState } from "react"
import {
  Menu,
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuSeparator,
  StatelessMenu,
} from "../menu"

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

const StatelessMenuExample = props => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  const hideMenu = () => {
    setIsMenuVisible(false)
  }

  const label = `I'm ${isMenuVisible ? "open!" : "closed!"}`

  return (
    <div>
      <Button
        secondary={true}
        onClick={() => toggleMenu()}
        label="Toggle Menu"
      />
      <Button secondary={true} onClick={() => hideMenu()} label="Hide Menu" />
      <Paragraph variant="body">
        I'm {isMenuVisible ? "open!" : "closed!"}
      </Paragraph>
      <StatelessMenu
        isMenuVisible={isMenuVisible}
        toggleMenuDropdown={toggleMenu}
        hideMenuDropdown={hideMenu}
        renderButton={buttonProps => (
          <Button
            label="Label"
            icon={isMenuVisible ? chevronUp : chevronDown}
            iconPosition="end"
            {...buttonProps}
          />
        )}
      >
        <div onClick={e => e.stopPropagation()}>
          <MenuInstance />
        </div>
      </StatelessMenu>
    </div>
  )
}

export const DefaultStatelessMenu = () => {
  return (
    <StoryWrapper>
      <Box p={1}>
        <StatelessMenuExample />
      </Box>
      <Box p={1}>
        <Paragraph variant="body">
          Use the StatelessMenu component if you need to{" "}
          <a href="https://reactjs.org/docs/lifting-state-up.html">
            lift state
          </a>{" "}
          from the Menu component. This gives the flexibility to be able to
          control the state of the dropdown however you like and respond to
          state changes, but it requires more work to configure. It can be used
          instead of `Menu` if this level of flexibility is required. This
          component is used in the FilterDrawer component. View the source code{" "}
          <a href="https://github.com/cultureamp/kaizen-design-system/blob/master/draft-packages/stories/Menu.stories.tsx">
            here
          </a>
          .
        </Paragraph>
      </Box>
    </StoryWrapper>
  )
}

DefaultStatelessMenu.story = {
  name: "StatelessMenu (example usage)",
}

export const DropdownWidthContain = () => (
  <StoryWrapper>
    <Menu
      button={<Button label="Label" icon={chevronDown} iconPosition="end" />}
      dropdownWidth="contain"
    >
      <MenuContent>
        <div style={{ width: "500px" }}>
          The dropdown is as wide as this 500px div
        </div>
      </MenuContent>
    </Menu>
  </StoryWrapper>
)

DropdownWidthContain.story = {
  name: 'Label and Icon (dropdownWidth="contain")',
}
