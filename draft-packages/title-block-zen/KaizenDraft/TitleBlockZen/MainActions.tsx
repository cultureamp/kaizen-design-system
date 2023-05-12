import React from "react"
import { Button, IconButton } from "@kaizen/button"
import chevronDownIcon from "@kaizen/component-library/icons/chevron-down.icon.svg"
import meatballsIcon from "@kaizen/component-library/icons/meatballs.icon.svg"
import { Menu, MenuList } from "@kaizen/draft-menu"
import {
  TitleBlockMenuItem,
  TitleBlockMenuItemProps,
} from "./TitleBlockMenuItem"
import {
  isMenuGroupNotButton,
  PrimaryActionProps,
  DefaultActionProps,
} from "./TitleBlockZen"
import Toolbar from "./Toolbar"
import styles from "./MainActions.module.scss"

type MainActionsProps = {
  primaryAction?: PrimaryActionProps
  defaultAction?: DefaultActionProps
  reversed?: boolean
  overflowMenuItems?: TitleBlockMenuItemProps[]
  showOverflowMenu?: boolean
}

const MainActions = ({
  primaryAction,
  defaultAction,
  reversed = false,
  overflowMenuItems,
  showOverflowMenu = false,
}: MainActionsProps): JSX.Element => {
  let items
  if (primaryAction && isMenuGroupNotButton(primaryAction)) {
    const menuContent = primaryAction.menuItems.map((item, idx) => (
      <TitleBlockMenuItem
        {...item}
        key={`main-action-primary-menu-item-${idx}`}
        automationId={`main-action-primary-menu-item-${idx}`}
        data-testid={`main-action-primary-menu-item-${idx}`}
      />
    ))

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
                  data-testid="title-block-default-action-button"
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
                      data-testid="title-block-primary-action-button"
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
                  <MenuList>{menuContent}</MenuList>
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
                  data-testid="title-block-default-action-button"
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
                  data-testid="title-block-primary-action-button"
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
              <IconButton
                label="Open secondary menu"
                reversed={reversed}
                icon={meatballsIcon}
              />
            }
          >
            <MenuList>
              {overflowMenuItems.map((menuItem, idx) => (
                <TitleBlockMenuItem
                  {...menuItem}
                  key={`main-action-overflow-item-menu-item-${idx}`}
                />
              ))}
            </MenuList>
          </Menu>
        ),
      },
      ...items,
    ]
  }

  return (
    <div className={styles.mainActionsContainer}>
      <Toolbar
        items={items}
        automationId="title-block-main-actions-toolbar"
        data-testid="title-block-main-actions-toolbar"
      />
    </div>
  )
}

export default MainActions
