import { Button, IconButton } from "@kaizen/draft-button"
import { Menu, MenuContent, MenuItem, MenuItemProps } from "@kaizen/draft-menu"
import * as React from "react"
import {
  TitleBlockButtonProps,
  isMenuGroupNotButton,
  PrimaryActionProps,
} from "./TitleBlockZen"
import Toolbar from "./Toolbar"
const chevronDownIcon = require("@kaizen/component-library/icons/chevron-down.icon.svg")
  .default
const meatballsIcon = require("@kaizen/component-library/icons/meatballs.icon.svg")
  .default

const styles = require("./TitleBlockZen.scss")

type MainActionsProps = {
  primaryAction?: PrimaryActionProps
  defaultAction?: TitleBlockButtonProps
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
        {primaryAction.menuItems.map((item, idx) => (
          <MenuItem
            {...item}
            key={`main-action-primary-menu-item-${idx}`}
            automationId={`main-action-primary-menu-item-${idx}`}
          />
        ))}
      </MenuContent>
    )
    items = [
      ...(defaultAction
        ? [
            <Button
              {...defaultAction}
              automationId="title-block-default-action-button"
            />,
          ]
        : []),
      ...(primaryAction
        ? [
            <Menu
              align="right"
              button={
                <Button
                  label={primaryAction.label}
                  primary
                  reversed={reversed}
                  icon={chevronDownIcon}
                  iconPosition="end"
                  automationId="title-block-primary-action-button"
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
      ...(defaultAction
        ? [
            <Button
              {...defaultAction}
              automationId="title-block-default-action-button"
            />,
          ]
        : []),
      ...(primaryAction
        ? [
            <Button
              {...primaryAction}
              automationId="title-block-primary-action-button"
            />,
          ]
        : []),
    ]
  }

  if (overflowMenuItems && showOverflowMenu && overflowMenuItems.length > 0) {
    items = [
      <Menu
        align="right"
        button={
          <IconButton label="" reversed={reversed} icon={meatballsIcon} />
        }
      >
        <MenuContent>
          {overflowMenuItems.map((menuItem, idx) => (
            <MenuItem
              {...menuItem}
              key={`main-action-overflow-item-menu-item-${idx}`}
            />
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
