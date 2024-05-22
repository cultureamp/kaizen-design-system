import React from "react"
import { Button, IconButton } from "~components/Button"
import { ChevronDownIcon, MeatballsIcon } from "~components/Icon"
import { Menu, MenuList } from "~components/Menu"
import styles from "../TitleBlockZen.module.scss"
import { TITLE_BLOCK_ZEN_SECONDARY_MENU_HTML_ID } from "../constants"
import { SecondaryActionsProps, TitleBlockMenuItemProps } from "../types"
import { TitleBlockMenuItem } from "./TitleBlockMenuItem"
import { Toolbar } from "./Toolbar"

type Props = {
  secondaryActions?: SecondaryActionsProps
  secondaryOverflowMenuItems?: TitleBlockMenuItemProps[]
  reversed?: boolean
}

const renderSecondaryOverflowMenu = (
  secondaryOverflowMenuItems?: TitleBlockMenuItemProps[],
  reversed?: boolean
): JSX.Element | undefined => {
  if (!secondaryOverflowMenuItems) return undefined
  return (
    <Menu
      align="right"
      button={
        <IconButton
          label="Open secondary menu"
          reversed={reversed}
          icon={<MeatballsIcon role="presentation" />}
          id={TITLE_BLOCK_ZEN_SECONDARY_MENU_HTML_ID}
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

// Unfortunately, you'll notice below, that I needed to use the array index,
// against react best practices (https://reactjs.org/docs/lists-and-keys.html)
// This is because the menu items have no unique identifier.

export const SecondaryActions = ({
  secondaryActions,
  secondaryOverflowMenuItems,
  reversed = false,
}: Props): JSX.Element | null => {
  if (!secondaryActions && !secondaryOverflowMenuItems) return null

  const secondaryActionsAsToolbarItems = secondaryActions
    ? secondaryActions.map((action, i) => {
        if ("menuItems" in action) {
          return {
            key: `${i}`, // We shouldn't use an index here, see note above
            node: (
              <Menu
                align="right"
                button={
                  <Button
                    secondary
                    label={action.label}
                    reversed={reversed}
                    icon={<ChevronDownIcon role="presentation" />}
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
            ),
          }
        } else {
          if ("onClick" in action && "href" in action) {
            // eslint-disable-next-line no-console
            console.warn(
              "\u001b[33m \nTITLE BLOCK WARNING:\nSecondary actions only support " +
                "either an href or an onClick, not both simultaneously.\n"
            )
          }
          return {
            key: `${i}`, // We shouldn't use an index here, see note above
            node: (
              <Button
                secondary
                reversed={reversed}
                {...action}
                data-automation-id="title-block-secondary-actions-button"
                data-testid="title-block-secondary-actions-button"
              />
            ),
          }
        }
      })
    : []

  const overflowMenu = renderSecondaryOverflowMenu(
    secondaryOverflowMenuItems,
    reversed
  )

  const toolbarItems = [
    ...secondaryActionsAsToolbarItems,
    ...(overflowMenu
      ? [
          {
            key: "overflowMenu",
            node: overflowMenu,
          },
        ]
      : []),
  ]

  return (
    <div className={styles.secondaryActionsContainer}>
      <Toolbar
        items={toolbarItems}
        noGap
        automationId="title-block-secondary-actions-toolbar"
      />
    </div>
  )
}

SecondaryActions.displayName = "SecondaryActions"
