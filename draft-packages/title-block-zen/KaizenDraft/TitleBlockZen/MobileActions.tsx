import { Icon } from "@kaizen/component-library"
import { ButtonProps } from "@kaizen/draft-button"
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
  MenuGroup,
  PrimaryActionProps,
  SecondaryActionsProps,
} from "./TitleBlockZen"
const chevronDownIcon = require("@kaizen/component-library/icons/chevron-down.icon.svg")
  .default
const chevronUpIcon = require("@kaizen/component-library/icons/chevron-up.icon.svg")
  .default

const styles = require("./MobileActions.scss")

const renderPrimaryLinks = (primaryAction: PrimaryActionProps) => {
  if (!primaryAction) return null
  if (isMenuGroupNotButton(primaryAction)) {
    return primaryAction.menuItems
      .filter(item => typeof item.action === "string")
      .map((item, idx) => (
        <MenuItem
          action={item.action}
          label={item.label}
          icon={item.hasOwnProperty("icon") ? item.icon : undefined}
          key={`primary-link-${idx}`}
        />
      ))
  }
}

const renderPrimaryActions = (primaryAction: PrimaryActionProps) => {
  if (
    isMenuGroupNotButton(primaryAction) &&
    primaryAction.menuItems.length > 0
  ) {
    return [
      <MenuSeparator />,
      primaryAction.menuItems
        .filter(item => typeof item.action !== "string")
        .map((item, idx) => (
          <MenuItem
            action={item.action}
            label={item.label}
            icon={item.hasOwnProperty("icon") ? item.icon : undefined}
            key={`primary-action-${idx}`}
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

  return flattened.map((item, idx) => (
    <MenuItem
      action={item.action}
      label={item.label}
      icon={item.icon}
      key={`secondary-action-${idx}`}
    />
  ))
}

const rendersecondaryOverflowMenuItems = (
  secondaryOverflowMenuItems: MenuItemProps[]
) => {
  return secondaryOverflowMenuItems.map((item, idx) => (
    <MenuItem
      action={item.action}
      label={item.label}
      icon={item.icon}
      key={`overflow-menu-item-${idx}`}
    />
  ))
}

type DrawerMenuContentProps = {
  primaryMenuActions?: any[]
  primaryAction?: PrimaryActionProps
  defaultAction?: ButtonWithOnClickOrHref
  secondaryActions?: SecondaryActionsProps
  secondaryOverflowMenuItems?: MenuItemProps[]
}

type ConditionalOtherActionsHeadingProps = {
  primaryAction?: PrimaryActionProps
  defaultAction?: ButtonWithOnClickOrHref
  secondaryActions?: SecondaryActionsProps
  secondaryOverflowMenuItems?: MenuItemProps[]
}

const ConditionalOtherActionsHeading = ({
  primaryAction,
  defaultAction,
  secondaryActions,
  secondaryOverflowMenuItems,
}: ConditionalOtherActionsHeadingProps) => {
  return (
    <>
      {(defaultAction ||
        (primaryAction && primaryAction.hasOwnProperty("menuItems"))) && (
        <MenuSeparator />
      )}
      {((defaultAction && defaultAction.onClick) ||
        secondaryActions ||
        secondaryOverflowMenuItems) && <MenuHeader title="Other actions" />}
    </>
  )
}

const DrawerMenuContent = ({
  primaryMenuActions,
  primaryAction,
  defaultAction,
  secondaryActions,
  secondaryOverflowMenuItems,
}: DrawerMenuContentProps) => {
  return (
    <>
      {primaryAction && renderPrimaryLinks(primaryAction)}
      {defaultAction && renderDefaultLink(defaultAction)}
      {primaryAction && renderPrimaryActions(primaryAction)}
      <ConditionalOtherActionsHeading
        primaryAction={primaryAction}
        defaultAction={defaultAction}
        secondaryActions={secondaryActions}
        secondaryOverflowMenuItems={secondaryOverflowMenuItems}
      />
      {defaultAction && renderDefaultAction(defaultAction)}
      {secondaryActions && renderSecondaryActions(secondaryActions)}
      {secondaryOverflowMenuItems &&
        rendersecondaryOverflowMenuItems(secondaryOverflowMenuItems)}
    </>
  )
}

const renderDrawerHandleLabel = (
  label: string,
  icon?: React.SVGAttributes<SVGSymbolElement>,
  drawerHandleLabelIconPosition?: Pick<ButtonProps, "iconPosition">
) => {
  if (drawerHandleLabelIconPosition === "end") {
    return (
      <>
        <span
          className={styles.drawerHandleLabelText}
          data-testid="drawer-handle-lable-text"
        >
          {label}
        </span>
        <>
          {icon && (
            <span className={styles.drawerHandleIcon}>
              <Icon icon={icon} />
            </span>
          )}
        </>
      </>
    )
  } else {
    return (
      <>
        <>
          {icon && (
            <span className={styles.drawerHandleIcon}>
              <Icon icon={icon} />
            </span>
          )}
        </>
        <span
          className={styles.drawerHandleLabelText}
          data-testid="drawer-handle-lable-text"
        >
          {label}
        </span>
      </>
    )
  }
}

type ButtonOrLinkProps = {
  action: Pick<ButtonProps, "href" | "onClick">
  children: React.ReactNode
}

const ButtonOrLink = ({ action, children }: ButtonOrLinkProps) => {
  if (typeof action === "function") {
    return (
      <button
        onClick={action}
        className={classnames(
          styles.mobileActionsPrimaryLabel,
          styles.mobileActionsPrimaryButton
        )}
      >
        {children}
      </button>
    )
  }
  if (typeof action === "string") {
    return (
      <a
        href={action}
        className={classnames(
          styles.mobileActionsPrimaryLabel,
          styles.mobileActionsPrimaryButton
        )}
      >
        {children}
      </a>
    )
  }
  // If there is no onClick or href (should never happen)
  return (
    <button
      className={classnames(
        styles.mobileActionsPrimaryLabel,
        styles.mobileActionsPrimaryButton
      )}
    >
      {children}
    </button>
  )
}

const getAction = primaryAction => {
  if (primaryAction) {
    if (primaryAction.onClick) {
      return primaryAction.onClick
    }
    if (primaryAction.href) {
      return primaryAction.href
    }
  }
}

type DrawerHandleProps = {
  primaryAction: PrimaryActionProps | undefined
  secondaryActions: SecondaryActionsProps | undefined
  defaultAction?: ButtonWithOnClickOrHref | MenuGroup
  secondaryOverflowMenuItems?: MenuItemProps[]
  drawerHandleLabelIconPosition?: Pick<ButtonProps, "iconPosition">
  toggleDisplay: () => void
  isOpen: boolean
}

const DrawerHandle = ({
  primaryAction,
  secondaryActions,
  defaultAction,
  secondaryOverflowMenuItems,
  drawerHandleLabelIconPosition,
  toggleDisplay,
  isOpen,
}: DrawerHandleProps) => {
  if (primaryAction) {
    // If the primary action is a menu
    if (isMenuGroupNotButton(primaryAction)) {
      return (
        <div className={styles.mobileActionsTopRow}>
          <button
            className={classnames(
              styles.mobileActionsExpandButtonFullWidth,
              styles.mobileActionsPrimaryLabel
            )}
            onClick={toggleDisplay}
          >
            {primaryAction.label}
            <div className={styles.mobileActionsChevronSquare}>
              <Icon icon={isOpen ? chevronDownIcon : chevronUpIcon} />
            </div>
          </button>
        </div>
      )
    } else {
      // If the primary action is a button, or has no onClick/href/action
      return (
        <div className={styles.mobileActionsTopRow}>
          {
            <ButtonOrLink action={getAction(primaryAction)}>
              {renderDrawerHandleLabel(
                primaryAction.label,
                primaryAction.icon,
                drawerHandleLabelIconPosition
              )}
            </ButtonOrLink>
          }

          {/* If there are no secondary etc. actions, just show the button without drawer */}
          {(defaultAction ||
            secondaryActions ||
            secondaryOverflowMenuItems) && (
            <button
              className={styles.mobileActionsExpandButton}
              onClick={toggleDisplay}
            >
              <Icon icon={isOpen ? chevronDownIcon : chevronUpIcon} />
            </button>
          )}
        </div>
      )
    }
  }
  return null
}

export type MobileActionsProps = {
  primaryAction?: PrimaryActionProps
  defaultAction?: ButtonWithOnClickOrHref
  secondaryActions?: SecondaryActionsProps
  secondaryOverflowMenuItems?: MenuItemProps[]
  drawerHandleLabelIconPosition?: Pick<ButtonProps, "iconPosition">
  // TODO add types for menuContent
  // menuContent?: any
}

export default class MobileActions extends React.Component<MobileActionsProps> {
  state = {
    isOpen: false,
  }

  toggleDisplay() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const {
      primaryAction,
      defaultAction,
      secondaryActions,
      secondaryOverflowMenuItems,
      drawerHandleLabelIconPosition,
    } = this.props

    this.toggleDisplay = this.toggleDisplay.bind(this)

    return (
      <div
        className={classnames(styles.mobileActionsContainer, {
          [styles.isOpen]: this.state.isOpen,
        })}
      >
        <DrawerHandle
          primaryAction={primaryAction}
          secondaryActions={secondaryActions}
          defaultAction={defaultAction}
          secondaryOverflowMenuItems={secondaryOverflowMenuItems}
          drawerHandleLabelIconPosition={drawerHandleLabelIconPosition}
          toggleDisplay={this.toggleDisplay}
          isOpen={this.state.isOpen}
        />
        {(defaultAction || secondaryActions) && (
          <div className={styles.mobileActionsMenuContainer}>
            <MenuContent>
              <DrawerMenuContent
                primaryAction={primaryAction}
                defaultAction={defaultAction}
                secondaryActions={secondaryActions}
                secondaryOverflowMenuItems={secondaryOverflowMenuItems}
              />
            </MenuContent>
          </div>
        )}
      </div>
    )
  }
}
