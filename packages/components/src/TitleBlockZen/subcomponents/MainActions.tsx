import React from 'react'
import { Button, IconButton } from '~components/Button'
import { Menu, MenuList } from '~components/Menu'
import { Icon } from '~components/__next__/Icon'
import { TITLE_BLOCK_ZEN_SECONDARY_MENU_HTML_ID } from '../constants'
import {
  type DefaultActionProps,
  type PrimaryActionProps,
  type TitleBlockMenuItemProps,
} from '../types'
import { isMenuGroupNotButton } from '../utils'
import { TitleBlockMenuItem } from './TitleBlockMenuItem'
import { Toolbar } from './Toolbar'
import styles from './MainActions.module.scss'

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
              key: 'defaultAction',
              node: (
                <Button
                  {...{
                    ...defaultAction,
                    reversed: defaultAction.reversed ?? reversed,
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
              key: 'primaryAction',
              node: (
                <Menu
                  align="right"
                  button={
                    <Button
                      label={primaryAction.label}
                      primary
                      reversed={reversed}
                      icon={<Icon name="keyboard_arrow_down" isPresentational />}
                      iconPosition="end"
                      data-automation-id="title-block-primary-action-button"
                      data-testid="title-block-primary-action-button"
                      badge={
                        primaryAction.badge
                          ? {
                              ...primaryAction.badge,
                              variant: 'dark',
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
              key: 'defaultAction',
              node: (
                <Button
                  {...{
                    ...defaultAction,
                    reversed: defaultAction.reversed ?? reversed,
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
              key: 'primaryAction',
              node: (
                <Button
                  {...{
                    ...primaryAction,
                    primary: primaryAction.primary ?? true,
                    reversed: primaryAction.reversed ?? reversed,
                  }}
                  data-automation-id="title-block-primary-action-button"
                  data-testid="title-block-primary-action-button"
                  badge={
                    primaryAction.badge
                      ? {
                          ...primaryAction.badge,
                          variant: 'dark',
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
        key: 'overflowMenu',
        node: (
          <Menu
            align="right"
            button={
              <IconButton
                id={TITLE_BLOCK_ZEN_SECONDARY_MENU_HTML_ID}
                label="Open secondary menu"
                reversed={reversed}
                icon={<Icon name="more_horiz" isPresentational />}
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

MainActions.displayName = 'MainActions'
