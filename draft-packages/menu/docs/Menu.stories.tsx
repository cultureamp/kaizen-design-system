import { Box, Paragraph } from "@kaizen/component-library"
import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import { Button, IconButton } from "@kaizen/draft-button"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"
import duplicateIcon from "@kaizen/component-library/icons/duplicate.icon.svg"
import editIcon from "@kaizen/component-library/icons/edit.icon.svg"
import trashIcon from "@kaizen/component-library/icons/trash.icon.svg"
import kebabIcon from "@kaizen/component-library/icons/kebab.icon.svg"
import meatballsIcon from "@kaizen/component-library/icons/meatballs.icon.svg"

import React, { useState } from "react"
import {
  Menu,
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuSeparator,
  StatelessMenu,
} from ".."

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
      }}
      icon={duplicateIcon}
      label="Menu button but the label is too long"
    />
    <MenuItem
      action={(e: any) => {
        e.preventDefault()
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
      dropdownId="dropdown"
    >
      <MenuInstance />
    </Menu>
  </StoryWrapper>
)

LabelAndIcon.storyName = "Label and Icon (Kaizen Site Demo)"

export const LabelAndIconWithoutAutoHide = () => (
  <StoryWrapper>
    <Menu
      button={<Button label="Label" icon={chevronDown} iconPosition="end" />}
      dropdownId="dropdown"
      autoHideOnClick={false}
    >
      <MenuInstance />
    </Menu>
  </StoryWrapper>
)

LabelAndIconWithoutAutoHide.storyName = "Label and Icon without auto hide"

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

LabelAndIconReversed.storyName = "Label and Icon (reversed)"
LabelAndIconReversed.parameters = {
  backgrounds: {
    default: "Wisteria 700",
  },
}

export const DefaultMeatball = () => (
  <StoryWrapper>
    <Menu button={<IconButton label="" icon={meatballsIcon} />} align="right">
      <MenuInstance />
    </Menu>
  </StoryWrapper>
)

DefaultMeatball.storyName = "Default (Meatball)"

export const DefaultKebab = () => (
  <StoryWrapper>
    <Menu button={<IconButton label="" icon={kebabIcon} />} align="right">
      <MenuInstance />
    </Menu>
  </StoryWrapper>
)

DefaultKebab.storyName = "Default (Kebab)"

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

LabelAndIconBottom.storyName = "Label and Icon (bottom of screen)"
LabelAndIconBottom.parameters = {
  viewport: { defaultViewport: "mobile1" },
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

export const DefaultStatelessMenu = () => (
  <StoryWrapper>
    <Box p={1}>
      <StatelessMenuExample />
    </Box>
    <Box p={1}>
      <Paragraph variant="body">
        Use the StatelessMenu component if you need to{" "}
        <a href="https://reactjs.org/docs/lifting-state-up.html">lift state</a>{" "}
        from the Menu component. This gives the flexibility to be able to
        control the state of the dropdown however you like and respond to state
        changes, but it requires more work to configure. It can be used instead
        of `Menu` if this level of flexibility is required. This component is
        used in the FilterDrawer component. View the source code{" "}
        <a
          href={
            "https://github.com/cultureamp/kaizen-design-system/blob/master/draft-packages/stories/Menu.stories.tsx"
          }
        >
          here
        </a>
        .
      </Paragraph>
    </Box>
  </StoryWrapper>
)

DefaultStatelessMenu.storyName = "StatelessMenu (example usage)"

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

DropdownWidthContain.storyName = 'Label and Icon (dropdownWidth="contain")'
