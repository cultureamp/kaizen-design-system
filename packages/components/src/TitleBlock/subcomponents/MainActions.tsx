import React from 'react'
import { Button, IconButton } from '~components/ButtonV1'
import { Icon } from '~components/Icon'
import { Menu, MenuList } from '~components/MenuV1'
import { TITLE_BLOCK_ZEN_SECONDARY_MENU_HTML_ID } from '~components/TitleBlock'
import {
  type DefaultActionProps,
  type PrimaryActionProps,
  type SecondaryActionsProps,
  type TitleBlockMenuItemProps,
} from '../types'
import { createTabletOverflowMenuItems, isMenuGroupNotButton } from '../utils'
import { TitleBlockMenuItem } from './TitleBlockMenuItem'
import { Toolbar } from './Toolbar'
import styles from './MainActions.module.scss'

type MainActionsProps = {
  primaryAction?: PrimaryActionProps
  defaultAction?: DefaultActionProps
  reversed?: boolean
  secondaryActions?: SecondaryActionsProps
  secondaryOverflowMenuItems?: TitleBlockMenuItemProps[]
  showOverflowMenu?: boolean
}

const renderSecondaryAndOverflowMenu = (
  secondaryOverflowMenuItems?: TitleBlockMenuItemProps[],
  reversed?: boolean,
): JSX.Element | undefined => {
  if (!secondaryOverflowMenuItems) return undefined
  return (
    <Menu
      align="right"
      button={
        <IconButton
          label={'Open secondary and overflow menu'}
          reversed={reversed}
          icon={<Icon name="more_horiz" isPresentational />}
          id={TITLE_BLOCK_ZEN_SECONDARY_MENU_HTML_ID}
          classNameOverride={styles.overflowMenuButton}
        />
      }
    >
      <MenuList>
        {secondaryOverflowMenuItems.map((menuItem, i) => (
          <TitleBlockMenuItem key={i} {...menuItem} />
        ))}
      </MenuList>
    </Menu>
  )
}

export const MainActions = ({
  primaryAction,
  defaultAction,
  secondaryActions,
  secondaryOverflowMenuItems,
  reversed = false,
}: MainActionsProps): JSX.Element => {
  let items

  // Build combined secondary + overflow menu items once, to be spread into the toolbar items
  const secondaryAndOverflowMenu: { key: string; node: JSX.Element }[] = []

  // Convert defaultAction to menu item format and prepend to combined list
  let defaultActionMenuItem: TitleBlockMenuItemProps | undefined
  if (defaultAction) {
    if ('component' in defaultAction) {
      defaultActionMenuItem = defaultAction
    } else if ('onClick' in defaultAction) {
      defaultActionMenuItem = {
        label: defaultAction.label,
        icon: defaultAction.icon,
        onClick: defaultAction.onClick,
        disabled: defaultAction.disabled,
      }
    } else if ('href' in defaultAction) {
      defaultActionMenuItem = {
        label: defaultAction.label,
        icon: defaultAction.icon,
        href: defaultAction.href,
        disabled: defaultAction.disabled,
      }
    }
  }

  const combinedSecondaryOverflowItems = createTabletOverflowMenuItems(
    secondaryActions,
    secondaryOverflowMenuItems,
  )

  // Prepend defaultAction to the combined list if it exists
  const allMenuItems = defaultActionMenuItem
    ? [defaultActionMenuItem, ...combinedSecondaryOverflowItems]
    : combinedSecondaryOverflowItems

  if (allMenuItems.length > 0) {
    secondaryAndOverflowMenu.push({
      key: 'overflowMenu',
      node: renderSecondaryAndOverflowMenu(allMenuItems, reversed)!,
    })
  }

  const defaultActionItem = defaultAction
    ? [
        {
          key: 'defaultAction',
          node: (
            <Button
              classNameOverride={styles.defaultActionButton}
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
    : []

  const defaultActionItemMinimized = defaultAction
    ? [
        {
          key: 'defaultActionMinimized',
          node: (
            <div className={styles.defaultActionButtonMinimized}>
              <Menu
                align="right"
                button={
                  <IconButton
                    label={'Open default action overflow menu'}
                    reversed={reversed}
                    icon={<Icon name="more_horiz" isPresentational />}
                    id={TITLE_BLOCK_ZEN_SECONDARY_MENU_HTML_ID}
                  />
                }
              >
                <MenuList>
                  {defaultActionMenuItem && <TitleBlockMenuItem {...defaultActionMenuItem} />}
                </MenuList>
              </Menu>
            </div>
          ),
        },
      ]
    : []

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
      ...defaultActionItem,
      ...defaultActionItemMinimized,
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
      ...defaultActionItem,
      ...defaultActionItemMinimized,
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
