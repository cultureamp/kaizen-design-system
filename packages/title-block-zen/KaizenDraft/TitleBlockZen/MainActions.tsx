import { Button, IconButton } from "@kaizen/button"
import { Menu, MenuContent, MenuItem, MenuItemProps } from "@kaizen/menu"
import * as React from "react"
import chevronDownIcon from "@kaizen/component-library/icons/chevron-down.icon.svg"
import meatballsIcon from "@kaizen/component-library/icons/meatballs.icon.svg"
import Toolbar from "./Toolbar"
import {
  TitleBlockButtonProps,
  isMenuGroupNotButton,
  PrimaryActionProps,
} from "./TitleBlockZen"

import styles from "./TitleBlockZen.scss"

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
            {
              key: "defaultAction",
              node: (
                <Button
                  {...{
                    ...defaultAction,
                    reversed:
                      defaultAction.reversed !== undefined
                        ? defaultAction.reversed
                        : reversed,
                  }}
                  data-automation-id="title-block-default-action-button"
                />
              ),
            },
          ]
        : []),
      ...(primaryAction
        ? [
            {
              key: "primaryAction",
              node: (
                <Menu
                  align="right"
                  button={
                    <Button
                      label={primaryAction.label}
                      primary
                      reversed={reversed}
                      icon={chevronDownIcon}
                      iconPosition="end"
                      data-automation-id="title-block-primary-action-button"
                      badge={
                        primaryAction.badge
                          ? {
                              ...primaryAction.badge,
                              variant: "dark",
                            }
                          : undefined
                      }
                    />
                  }
                >
                  {menuContent}
                </Menu>
              ),
            },
          ]
        : []),
    ]
  } else {
    items = [
      ...(defaultAction
        ? [
            {
              key: "defaultAction",
              node: (
                <Button
                  {...{
                    ...defaultAction,
                    reversed:
                      defaultAction.reversed !== undefined
                        ? defaultAction.reversed
                        : reversed,
                  }}
                  data-automation-id="title-block-default-action-button"
                />
              ),
            },
          ]
        : []),
      ...(primaryAction
        ? [
            {
              key: "primaryAction",
              node: (
                <Button
                  {...{
                    ...primaryAction,
                    primary:
                      primaryAction.primary !== undefined
                        ? primaryAction.primary
                        : true,
                    reversed:
                      primaryAction.reversed !== undefined
                        ? primaryAction.reversed
                        : reversed,
                  }}
                  data-automation-id="title-block-primary-action-button"
                  badge={
                    primaryAction.badge
                      ? {
                          ...primaryAction.badge,
                          variant: "dark",
                        }
                      : undefined
                  }
                />
              ),
            },
          ]
        : []),
    ]
  }

  if (overflowMenuItems && showOverflowMenu && overflowMenuItems.length > 0) {
    items = [
      {
        key: "overflowMenu",
        node: (
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
          </Menu>
        ),
      },
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
