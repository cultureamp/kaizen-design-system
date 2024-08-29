import React from "react"
import { Menu, MenuList, Button, IconButton } from "~components/__actions__/v2"
import {
  ChevronDownIcon,
  MeatballsIcon,
} from "~components/__illustrations__/v1"
import { TITLE_BLOCK_ZEN_SECONDARY_MENU_HTML_ID } from "../constants"
import {
  DefaultActionProps,
  PrimaryActionProps,
  TitleBlockMenuItemProps,
} from "../types"
import { isMenuGroupNotButton } from "../utils"
import { TitleBlockMenuItem } from "./TitleBlockMenuItem"
import { Toolbar } from "./Toolbar"
import styles from "./MainActions.module.scss"

type MainActionsProps = {
  primaryAction?: PrimaryActionProps
  defaultAction?: DefaultActionProps
  reversed?: boolean
  overflowMenuItems?: TitleBlockMenuItemProps[]
  showOverflowMenu?: boolean
}

export const MainActions = ({
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
        data-automation-id={`main-action-primary-menu-item-${idx}`}
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
                      icon={<ChevronDownIcon role="presentation" />}
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
                id={TITLE_BLOCK_ZEN_SECONDARY_MENU_HTML_ID}
                label="Open secondary menu"
                reversed={reversed}
                icon={<MeatballsIcon role="presentation" />}
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

MainActions.displayName = "MainActions"
