import { Box, Paragraph } from "@kaizen/component-library"
import { Button, IconButton } from "@kaizen/draft-button"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"
import duplicateIcon from "@kaizen/component-library/icons/duplicate.icon.svg"
import editIcon from "@kaizen/component-library/icons/edit.icon.svg"
import trashIcon from "@kaizen/component-library/icons/trash.icon.svg"
import kebabIcon from "@kaizen/component-library/icons/kebab.icon.svg"
import meatballsIcon from "@kaizen/component-library/icons/meatballs.icon.svg"
import { withDesign } from "storybook-addon-designs"
import React, { useState } from "react"
import { figmaEmbed } from "../../../storybook/helpers"

import {
  Menu,
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuSeparator,
  StatelessMenu,
} from ".."

const MenuInstance: React.FunctionComponent = () => (
  <MenuContent>
    <MenuItem action="https://www.cultureamp.com/" label="Menu link" />
    <MenuItem action="https://www.cultureamp.com/" label="Menu link" />
    <MenuItem action="https://www.cultureamp.com/" label="Menu link" />
    <MenuSeparator />
    <MenuHeader title="Other actions" />
    <MenuItem
      action={(e: any) => {
        alert("Hello")
        e.preventDefault()
      }}
      icon={editIcon}
      label="Menu button"
    />
    <MenuItem
      action={(e: any) => {
        e.preventDefault()
      }}
      icon={duplicateIcon}
      label="Menu button but the label is too long"
    />
    <MenuItem
      action="https://www.cultureamp.com/"
      icon={trashIcon}
      destructive
      label="Destructive Menu button"
    />
    <MenuItem
      action="https://www.cultureamp.com/"
      icon={trashIcon}
      disabled
      label="Disabled Menu button"
    />
    <MenuItem
      action="https://www.cultureamp.com/"
      icon={trashIcon}
      disabled
      destructive
      label="Disabled Destructive Menu button"
    />
    <MenuItem
      action="https://www.cultureamp.com/"
      disabled
      label="Menu button no icon"
    />
  </MenuContent>
)

export default {
  title: "Menu (React)",
  component: Menu,
  parameters: {
    docs: {
      description: {
        component:
          'import { Menu, MenuHeader, MenuItem, MenuContent, MenuSeparator } from "@kaizen/draft-menu";',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=6262%3A1233"
    ),
  },
  decorators: [withDesign],
}

export const LabelAndIcon = () => (
  <Menu
    button={<Button label="Label" icon={chevronDown} iconPosition="end" />}
    dropdownId="dropdown"
  >
    <MenuInstance />
  </Menu>
)

LabelAndIcon.storyName = "Label and Icon (Kaizen Site Demo)"

export const AutoHideBehaviours = () => (
  <>
    <Box mb={1}>
      <Paragraph variant="body">
        Auto hide turned on (default behaviour):
      </Paragraph>
      <Menu
        button={<Button label="Label" icon={chevronDown} iconPosition="end" />}
        dropdownId="dropdown"
        autoHide="on"
      >
        <MenuInstance />
      </Menu>
    </Box>
    <Box mb={1}>
      <Paragraph variant="body">
        Auto hide when clicking outside the menu, but not inside:
      </Paragraph>
      <Menu
        button={<Button label="Label" icon={chevronDown} iconPosition="end" />}
        dropdownId="dropdown"
        autoHide="outside-click-only"
      >
        <MenuInstance />
      </Menu>
    </Box>
    <Box mb={1}>
      <Paragraph variant="body">Auto hide turned off:</Paragraph>
      <Menu
        button={<Button label="Label" icon={chevronDown} iconPosition="end" />}
        dropdownId="dropdown"
        autoHide="off"
      >
        <MenuInstance />
      </Menu>
    </Box>
  </>
)

AutoHideBehaviours.storyName = "Auto hide behaviours"

export const LabelAndIconReversed = () => (
  <Menu
    button={
      <Button label="Label" icon={chevronDown} iconPosition="end" reversed />
    }
  >
    <MenuInstance />
  </Menu>
)

LabelAndIconReversed.storyName = "Label and Icon (reversed)"
LabelAndIconReversed.parameters = {
  backgrounds: {
    default: "Wisteria 700",
  },
}

export const DefaultMeatball = () => (
  <Menu button={<IconButton label="" icon={meatballsIcon} />} align="right">
    <MenuInstance />
  </Menu>
)

DefaultMeatball.storyName = "Default (Meatball)"

export const DefaultKebab = () => (
  <Menu button={<IconButton label="" icon={kebabIcon} />} align="right">
    <MenuInstance />
  </Menu>
)

DefaultKebab.storyName = "Default (Kebab)"

export const LabelAndIconBottom = () => (
  <Menu button={<Button label="Label" icon={chevronDown} iconPosition="end" />}>
    <MenuInstance />
  </Menu>
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
  <>
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
  </>
)

DefaultStatelessMenu.storyName = "StatelessMenu (example usage)"

export const DropdownWidthContain = () => (
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
)

DropdownWidthContain.storyName = 'Label and Icon (dropdownWidth="contain")'

export const MenuPositioning = () => (
  <>
    <div
      style={{
        position: "absolute",
        top: "10px",
        left: "10px",
        width: "200px",
      }}
    >
      <Paragraph variant="body">
        This menu is near the top of page. Resize your browser so it's about
        300px high. Note that the menu still shows below the menu button.
      </Paragraph>
      <Menu
        button={<Button label="Label" icon={chevronDown} iconPosition="end" />}
      >
        <MenuInstance />
      </Menu>
    </div>
    <div
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        width: "200px",
      }}
    >
      <Paragraph variant="body">
        This menu is near right of the page. If there is no room to the right,
        it push the menu to the left.
      </Paragraph>
      <Menu
        button={<Button label="Label" icon={chevronDown} iconPosition="end" />}
      >
        <MenuInstance />
      </Menu>
    </div>
    <div
      style={{
        position: "absolute",
        bottom: "10px",
        left: "10px",
        width: "200px",
      }}
    >
      <Paragraph variant="body">
        This menu is near the bottom of the page. If there is no room below, it
        will display above the menu button.
      </Paragraph>
      <Menu
        button={<Button label="Label" icon={chevronDown} iconPosition="end" />}
      >
        <MenuInstance />
      </Menu>
    </div>
    <div
      style={{
        position: "absolute",
        bottom: "10px",
        right: "10px",
        width: "200px",
      }}
    >
      <Paragraph variant="body">
        This menu is near the bottom right of the page. If there is no room to
        the right or bottom, it push the menu to the left and above.
      </Paragraph>
      <Menu
        button={<Button label="Label" icon={chevronDown} iconPosition="end" />}
      >
        <MenuInstance />
      </Menu>
    </div>
  </>
)

MenuPositioning.storyName = "Menu positioning"

export const MenuWithActiveItem = () => (
  <Box mt={2} mx={2}>
    <Box mb={1}>
      <Paragraph variant="body">
        Menus don't usually have "active" items, since they are just a
        collection of links or actions, but in non-standard cases like the
        navigation bar, the `isActive` prop provides a way to do this.
      </Paragraph>
    </Box>
    <Menu
      button={<Button label="Label" icon={chevronDown} iconPosition="end" />}
    >
      <MenuContent>
        <MenuItem action="https://www.cultureamp.com/" label="Menu link" />
        <MenuItem
          action="https://www.cultureamp.com/"
          label="Menu link"
          isActive
        />
        <MenuItem action="https://www.cultureamp.com/" label="Menu link" />
      </MenuContent>
    </Menu>
  </Box>
)

MenuWithActiveItem.storyName = "Menu with active item"

export const OverflowScroll = () => (
  <>
    <div style={{ overflowX: "scroll", width: "200px", height: "100px" }}>
      <div style={{ width: "500px", textAlign: "center" }}>
        <Menu
          button={
            <Button label="Label" icon={chevronDown} iconPosition="end" />
          }
          // Normally, you'd specify a div by ID, but since this is only in storybook,
          // using `body` is fine (I think). DO NOT USE "BODY" AS A VALUE IN PRODUCTION.
          portalSelector="body"
        >
          <MenuInstance />
        </Menu>
      </div>
    </div>
    <p>
      Scroll the panel above, and open the menu. Notice that the dropdown does
      not get cropped.
    </p>
  </>
)

OverflowScroll.storyName = "overflow: scroll"
