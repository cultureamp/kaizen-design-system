import { Button, IconButton } from "@kaizen/draft-button"
import { Menu, MenuContent, MenuItem } from "@kaizen/draft-menu"
import * as React from "react"
import { SecondaryActionsProps, TitleBlockMenuItemProps } from "./TitleBlockZen"
import Toolbar from "./Toolbar"
import chevronDownIcon from "@kaizen/component-library/icons/chevron-down.icon.svg"
import meatballsIcon from "@kaizen/component-library/icons/meatballs.icon.svg"

import styles from "./TitleBlockZen.scss"

type Props = {
  secondaryActions?: SecondaryActionsProps
  secondaryOverflowMenuItems?: TitleBlockMenuItemProps[]
  reversed?: boolean
}

const renderSecondaryOverflowMenu = (
  secondaryOverflowMenuItems?: TitleBlockMenuItemProps[],
  reversed?: boolean
) => {
  if (!secondaryOverflowMenuItems) return undefined
  return (
    <Menu
      align="right"
      button={<IconButton label="" reversed={reversed} icon={meatballsIcon} />}
    >
      <MenuContent>
        {secondaryOverflowMenuItems.map(menuItem => (
          <MenuItem {...menuItem} />
        ))}
      </MenuContent>
    </Menu>
  )
}

const SecondaryActions = ({
  secondaryActions,
  secondaryOverflowMenuItems,
  reversed = false,
}: Props) => {
  if (!secondaryActions && !secondaryOverflowMenuItems) return null

  const secondaryActionsAsToolbarItems = secondaryActions
    ? secondaryActions.map(a => {
        if ("menuItems" in a) {
          return (
            <Menu
              align="right"
              button={
                <Button
                  secondary
                  label={a.label}
                  reversed={reversed}
                  icon={chevronDownIcon}
                  iconPosition="end"
                />
              }
            >
              <MenuContent>
                {a.menuItems.map(menuItem => (
                  <MenuItem {...menuItem} />
                ))}
              </MenuContent>
            </Menu>
          )
        } else {
          if ("onClick" in a && "href" in a) {
            // eslint-disable-next-line no-console
            console.warn(
              "\u001b[33m \nTITLE BLOCK WARNING:\nSecondary actions only support " +
                "either an href or an onClick, not both simultaneously.\n"
            )
          }
          return (
            <Button
              secondary
              reversed={reversed}
              {...a}
              data-automation-id="title-block-secondary-actions-button"
            />
          )
        }
      })
    : []

  const overflowMenu = renderSecondaryOverflowMenu(
    secondaryOverflowMenuItems,
    reversed
  )

  const toolbarItems = [
    ...secondaryActionsAsToolbarItems,
    ...(overflowMenu ? [overflowMenu] : []),
  ]

  return (
    <div className={styles.secondaryActionsContainer}>
      <Toolbar items={toolbarItems} noGap />
    </div>
  )
}

export default SecondaryActions
