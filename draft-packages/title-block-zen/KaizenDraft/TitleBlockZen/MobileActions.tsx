import { Button } from "@kaizen/draft-button"
import {
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuItemProps,
  MenuSeparator,
} from "@kaizen/draft-menu"
import classnames from "classnames"
import * as React from "react"
import {
  ButtonWithOnClickOrHref,
  isMenuGroupNotButton,
  isMenuItemNotButton,
  MenuGroup,
  PrimaryActionProps,
  SecondaryActionsProps,
} from "./TitleBlockZen"
const starIcon = require("@kaizen/component-library/icons/star-on.icon.svg")
  .default

const styles = require("./MobileActions.scss")

const PRIMARY_ACTION_AS_BUTTON = {
  label: "Primary action as button",
  icon: starIcon,
  reversed: true,
  primary: true,
}

const PRIMARY_ACTIONS_AS_MENU = {
  label: "Primary actions as menu",
  menuItems: [
    {
      action: "#",
      label: "Item 1",
    },
    {
      action: () => {
        alert("Item 2 clicked")
      },
      label: "Item 2",
    },
    {
      action: "#",
      label: "Item 3",
    },
  ],
}

const DEFAULT_ACTION = {
  label: "Default button",
  reversed: true,
  href: "#",
}

type renderMenuContentProps = {
  drawerHandleAction?: object
  primaryMenuActions?: any[]
  primaryAction?: PrimaryActionProps
  defaultAction?: ButtonWithOnClickOrHref
  secondaryActions?: SecondaryActionsProps
}

const renderPrimaryLinks = (primaryAction: PrimaryActionProps) => {
  if (!primaryAction) return null
  if (isMenuGroupNotButton(primaryAction)) {
    return primaryAction.menuItems
      .filter(item => typeof item.action === "string")
      .map(item => (
        <MenuItem
          action={item.action}
          label={item.label}
          icon={item.hasOwnProperty("icon") ? item.icon : undefined}
        />
      ))
  }
}

const renderPrimaryActions = (primaryAction: PrimaryActionProps) => {
  if (isMenuGroupNotButton(primaryAction)) {
    return [
      <MenuSeparator />,
      primaryAction.menuItems
        .filter(item => typeof item.action !== "string")
        .map(item => (
          <MenuItem
            action={item.action}
            label={item.label}
            icon={item.hasOwnProperty("icon") ? item.icon : undefined}
          />
        )),
    ]
  }
}

const renderDefaultLink = defaultAction => {
  if (defaultAction && defaultAction.hasOwnProperty("href")) {
    return (
      <MenuItem
        action={defaultAction.href}
        label={defaultAction.label}
        icon={defaultAction.icon}
      />
    )
  }
}
const renderDefaultAction = defaultAction => {
  if (defaultAction && defaultAction.hasOwnProperty("onClick")) {
    return (
      <MenuItem
        action={defaultAction.onClick}
        label={defaultAction.label}
        icon={defaultAction.icon}
      />
    )
  }
}

const renderSecondaryActions = secondaryActions => {
  if (!secondaryActions) return null
  const secondaryActionMenuItems = secondaryActions.map(a => {
    if (isMenuGroupNotButton(a)) {
      return a.menuItems
    } else {
      return [a]
    }
  })
  const flattened = Array.prototype.concat.apply([], secondaryActionMenuItems)

  return flattened.map(item => (
    <MenuItem action={item.action} label={item.label} icon={item.icon} />
  ))
}

const renderMenuContent = ({
  drawerHandleAction,
  primaryMenuActions,
  primaryAction,
  defaultAction,
  secondaryActions,
}: renderMenuContentProps) => {
  return (
    <>
      {primaryAction && renderPrimaryLinks(primaryAction)}
      {defaultAction && renderDefaultLink(defaultAction)}
      {primaryAction && renderPrimaryActions(primaryAction)}
      {/* TODO: Only render this if there are either Default or Secondary actions present */}
      <MenuSeparator />
      <MenuHeader title="Other actions" />
      {defaultAction && renderDefaultAction(defaultAction)}
      {secondaryActions && renderSecondaryActions(secondaryActions)}
    </>
  )
}

const renderDrawerHandle = (primaryAction: PrimaryActionProps | undefined) => {
  if (primaryAction) {
    return primaryAction.label
  } else {
    return "Other actions"
  }
}

export type MobileActionsProps = {
  primaryAction?: PrimaryActionProps
  defaultAction?: ButtonWithOnClickOrHref
  secondaryActions?: SecondaryActionsProps
  // TODO add types for menuContent
  // menuContent?: any
}

const MobileActions = ({
  primaryAction,
  defaultAction,
  secondaryActions,
}: MobileActionsProps) => (
  <div className={styles.mobileActionsContainer}>
    <div className={styles.mobileActionsTopRow}>
      <span className={styles.mobileActionsPrimaryLabel}>
        {renderDrawerHandle(primaryAction)}
      </span>
    </div>
    <div className={styles.mobileActionsMenuContainer}>
      <MenuContent>
        {renderMenuContent({
          primaryAction,
          defaultAction,
          secondaryActions,
        })}
      </MenuContent>
    </div>
  </div>
)

export default MobileActions
