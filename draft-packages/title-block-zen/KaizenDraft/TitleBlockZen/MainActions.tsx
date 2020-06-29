import { Button, ButtonProps, IconButton } from "@kaizen/draft-button"
import { Menu, MenuContent, MenuItem, MenuItemProps } from "@kaizen/draft-menu"
import * as React from "react"
import {
  ButtonWithOnClickOrHref,
  isMenuGroupNotButton,
  isMenuItemNotButton,
  MenuGroup,
  PrimaryActionProps,
  SecondaryActionsProps,
} from "./TitleBlockZen"
import Toolbar from "./Toolbar"
const chevronDownIcon = require("@kaizen/component-library/icons/chevron-down.icon.svg")
  .default
const meatballsIcon = require("@kaizen/component-library/icons/meatballs.icon.svg")
  .default

const styles = require("./TitleBlockZen.scss")

type MainActionsProps = {
  primaryAction?: PrimaryActionProps
  defaultAction?: ButtonWithOnClickOrHref
  reversed?: boolean
  overflowMenuItems?: MenuItemProps[]
  showOverflowMenu?: boolean
}

const MainActions = ({
  primaryAction,
  defaultAction,
  reversed = false,
  overflowMenuItems,
  showOverflowMenu = false,
}: MainActionsProps) => {
  let items
  if (primaryAction && isMenuGroupNotButton(primaryAction)) {
    const menuContent = (
      <MenuContent>
        {primaryAction.menuItems.map(item => (
          <MenuItem {...item} />
        ))}
      </MenuContent>
    )
    items = [
      ...(defaultAction ? [<Button {...defaultAction} />] : []),
      ...(primaryAction
        ? [
            <Menu
              button={
                <Button
                  label={primaryAction.label}
                  primary
                  reversed={reversed}
                  icon={chevronDownIcon}
                  iconPosition="end"
                />
              }
            >
              {menuContent}
            </Menu>,
          ]
        : []),
    ]
  } else {
    items = [
      ...(defaultAction ? [<Button {...defaultAction} />] : []),
      ...(primaryAction ? [<Button {...primaryAction} />] : []),
    ]
  }

  if (overflowMenuItems && showOverflowMenu) {
    items = [
      <Menu
        button={
          <IconButton label="" reversed={reversed} icon={meatballsIcon} />
        }
      >
        <MenuContent>
          {overflowMenuItems.map(menuItem => (
            <MenuItem {...menuItem} />
          ))}
        </MenuContent>
      </Menu>,
      ...items,
    ]
  }

  return (
    <div className={styles.mainActionsContainer}>
      <Toolbar items={items} />
    </div>
  )
}

export default MainActions
