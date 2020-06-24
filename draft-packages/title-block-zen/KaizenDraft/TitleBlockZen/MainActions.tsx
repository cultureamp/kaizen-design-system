import { Button, ButtonProps } from "@kaizen/draft-button"
import { Menu, MenuContent, MenuItem } from "@kaizen/draft-menu"
import * as React from "react"
import {
  ButtonWithOnClickOrHref,
  isMenuGroupNotButton,
  isMenuItemNotButton,
  MenuGroup,
  PrimaryActionProps,
  SecondaryActionsProps,
} from "./TitleBlockZen"
import Toolbar from "./Toolbar"
const chevronDownIcon = require("@kaizen/component-library/icons/chevron-down.icon.svg")
  .default

const styles = require("./TitleBlockZen.scss")

type MainActionsProps = {
  primaryAction?: PrimaryActionProps
  secondaryActions?: SecondaryActionsProps
  defaultAction?: ButtonWithOnClickOrHref
  reversed?: boolean
}

const MainActions = ({
  primaryAction,
  defaultAction,
  reversed = false,
}: MainActionsProps) => {
  let items
  if (primaryAction && isMenuGroupNotButton(primaryAction)) {
    const menuContent = (
      <MenuContent>
        {primaryAction.menuItems.map(item => (
          <MenuItem {...item} />
        ))}
      </MenuContent>
    )
    items = [
      ...(defaultAction ? [<Button {...defaultAction} />] : []),
      ...(primaryAction
        ? [
            <Menu
              button={
                <Button
                  label={primaryAction.label}
                  primary
                  reversed={reversed}
                  icon={chevronDownIcon}
                  iconPosition="end"
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
      ...(defaultAction ? [<Button {...defaultAction} />] : []),
      ...(primaryAction ? [<Button {...primaryAction} />] : []),
    ]
  }

  return (
    <div className={styles.mainActionsContainer}>
      <Toolbar items={items} />
    </div>
  )
}

export default MainActions
