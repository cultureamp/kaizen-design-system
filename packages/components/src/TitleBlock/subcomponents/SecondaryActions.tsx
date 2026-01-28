import React from 'react'
import { useIntl } from '@cultureamp/i18n-react-intl'
import { Button, IconButton } from '~components/ButtonV1'
import { Icon } from '~components/Icon'
import { Menu, MenuList } from '~components/MenuV1'
import styles from '../TitleBlock.module.scss'
import { TITLE_BLOCK_ZEN_SECONDARY_MENU_HTML_ID } from '../constants'
import { type SecondaryActionsProps, type TitleBlockMenuItemProps } from '../types'
import { convertSecondaryActionsToMenuItems } from '../utils'
import { TitleBlockMenuItem } from './TitleBlockMenuItem'
import { Toolbar } from './Toolbar'

type Props = {
  secondaryActions?: SecondaryActionsProps
  secondaryOverflowMenuItems?: TitleBlockMenuItemProps[]
  reversed?: boolean
}

const renderSecondaryOverflowMenu = (
  menuLabel: string,
  secondaryOverflowMenuItems?: TitleBlockMenuItemProps[],
  reversed?: boolean,
): JSX.Element | undefined => {
  if (!secondaryOverflowMenuItems || secondaryOverflowMenuItems.length === 0) return undefined
  return (
    <div className={styles.secondaryOverflowMenu}>
      <Menu
        align="right"
        button={
          <Button
            secondary
            reversed={reversed}
            label={menuLabel}
            data-automation-id={TITLE_BLOCK_ZEN_SECONDARY_MENU_HTML_ID}
            data-testid={TITLE_BLOCK_ZEN_SECONDARY_MENU_HTML_ID}
            icon={<Icon name="keyboard_arrow_down" isPresentational />}
            iconPosition={'end'}
          />
        }
      >
        <MenuList>
          {secondaryOverflowMenuItems.map((menuItem, i) => (
            <TitleBlockMenuItem key={i} {...menuItem} />
          ))}
        </MenuList>
      </Menu>
    </div>
  )
}

// New: combined overflow menu (secondary actions converted + overflow menu items)
const renderCombinedSecondaryOverflowMenu = (
  combinedMenuLabel: string,
  secondaryActions?: SecondaryActionsProps,
  secondaryOverflowMenuItems?: TitleBlockMenuItemProps[],
  reversed?: boolean,
): JSX.Element | undefined => {
  const secondaryConverted = secondaryActions
    ? convertSecondaryActionsToMenuItems(secondaryActions)
    : []
  const overflowItems = secondaryOverflowMenuItems ?? []

  if (secondaryConverted.length === 0 && overflowItems.length === 0) return undefined
  const combined = [...secondaryConverted, ...overflowItems]

  return (
    <div className={styles.secondaryOverflowCombinedMenu}>
      <Menu
        align="right"
        button={
          <IconButton
            label={combinedMenuLabel}
            reversed={reversed}
            icon={<Icon name="more_horiz" isPresentational />}
            id={`${TITLE_BLOCK_ZEN_SECONDARY_MENU_HTML_ID}__combined`}
          />
        }
      >
        <MenuList>
          {combined.map((menuItem, i) => (
            <TitleBlockMenuItem key={i} {...menuItem} />
          ))}
        </MenuList>
      </Menu>
    </div>
  )
}

// Unfortunately, you'll notice below, that I needed to use the array index,
// against react best practices (https://reactjs.org/docs/lists-and-keys.html)
// This is because the menu items have no unique identifier.

export const SecondaryActions = ({
  secondaryActions,
  secondaryOverflowMenuItems,
  reversed = false,
}: Props): JSX.Element | null => {
  const { formatMessage } = useIntl()

  if (!secondaryActions && !secondaryOverflowMenuItems) return null

  const menuLabel = formatMessage({
    id: 'kzTitleBlock.overflowMenuLabel',
    defaultMessage: 'Menu',
    description: 'Label for the dropdown menu which displays additional action items',
  })

  const combinedMenuLabel = formatMessage({
    id: 'kzTitleBlock.combinedOverflowMenuLabel',
    defaultMessage: 'Open combined secondary + overflow menu',
    description:
      'Label for the dropdown menu which displays additional action items and secondary actions',
  })

  const secondaryActionsAsToolbarItems = secondaryActions
    ? secondaryActions.map((action, i) => {
        if ('menuItems' in action) {
          return {
            key: `titleblock_secondary_action_${i}`,
            node: (
              <div className={styles.secondaryButtonContainer}>
                <Menu
                  align="right"
                  button={
                    <Button
                      secondary
                      label={action.label}
                      reversed={reversed}
                      icon={<Icon name="keyboard_arrow_down" isPresentational />}
                      iconPosition="end"
                    />
                  }
                >
                  <MenuList>
                    {action.menuItems.map((menuItem, i2) => (
                      <TitleBlockMenuItem key={i2} {...menuItem} />
                    ))}
                  </MenuList>
                </Menu>
              </div>
            ),
          }
        } else {
          if ('onClick' in action && 'href' in action) {
            // eslint-disable-next-line no-console
            console.warn(
              '\u001b[33m \nTITLE BLOCK WARNING:\nSecondary actions only support ' +
                'either an href or an onClick, not both simultaneously.\n',
            )
          }
          return {
            key: `${i}`,
            node: (
              <div className={styles.secondaryButtonContainer}>
                <Button
                  secondary
                  reversed={reversed}
                  {...action}
                  data-automation-id="title-block-secondary-actions-button"
                  data-testid="title-block-secondary-actions-button"
                />
              </div>
            ),
          }
        }
      })
    : []

  const overflowMenu = renderSecondaryOverflowMenu(menuLabel, secondaryOverflowMenuItems, reversed)
  const combinedOverflowMenu = renderCombinedSecondaryOverflowMenu(
    combinedMenuLabel,
    secondaryActions,
    secondaryOverflowMenuItems,
    reversed,
  )

  const toolbarItems = [
    ...secondaryActionsAsToolbarItems,
    ...(overflowMenu
      ? [
          {
            key: 'overflowMenu',
            node: overflowMenu,
          },
        ]
      : []),
    ...(combinedOverflowMenu
      ? [
          {
            key: 'combinedOverflowMenu',
            node: combinedOverflowMenu,
          },
        ]
      : []),
  ]

  return (
    <div className={styles.secondaryActionsContainer}>
      <Toolbar items={toolbarItems} noGap automationId="title-block-secondary-actions-toolbar" />
    </div>
  )
}

SecondaryActions.displayName = 'SecondaryActions'
