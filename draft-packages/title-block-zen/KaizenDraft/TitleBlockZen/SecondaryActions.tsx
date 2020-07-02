import { Button, IconButton } from "@kaizen/draft-button"
import { Menu, MenuContent, MenuItem, MenuItemProps } from "@kaizen/draft-menu"
import * as React from "react"
import { isMenuGroupNotButton, SecondaryActionsProps } from "./TitleBlockZen"
import Toolbar from "./Toolbar"
const chevronDownIcon = require("@kaizen/component-library/icons/chevron-down.icon.svg")
  .default
const meatballsIcon = require("@kaizen/component-library/icons/meatballs.icon.svg")
  .default

const styles = require("./TitleBlockZen.scss")

type Props = {
  secondaryActions?: SecondaryActionsProps
  secondaryOverflowMenuItems?: MenuItemProps[]
  reversed?: boolean
}

const renderSecondaryOverflowMenu = (
  secondaryOverflowMenuItems?: MenuItemProps[],
  reversed?: boolean
) => {
  if (!secondaryOverflowMenuItems) return null
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

  let toolbarItems
  if (secondaryActions) {
    toolbarItems = secondaryActions.map(a => {
      if (isMenuGroupNotButton(a)) {
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
        return <Button secondary reversed={reversed} {...a} />
      }
    })
  }

  const overflowMenu = renderSecondaryOverflowMenu(
    secondaryOverflowMenuItems,
    reversed
  )
  if (overflowMenu !== null) {
    toolbarItems = [...toolbarItems, overflowMenu]
  }

  return (
    <div className={styles.secondaryActionsContainer}>
      <Toolbar items={toolbarItems} noGap />
    </div>
  )
}

export default SecondaryActions
