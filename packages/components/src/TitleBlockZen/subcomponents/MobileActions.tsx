import React, { useState } from "react"
import classnames from "classnames"
import { FocusOn } from "react-focus-on"
import { ButtonProps } from "~components/Button"
import { ChevronDownIcon, ChevronUpIcon } from "~components/Icon"
import { MenuItem, MenuList, MenuHeading } from "~components/Menu"
import {
  DefaultActionProps,
  PrimaryActionProps,
  SecondaryActionsProps,
  TitleBlockButtonProps,
  TitleBlockMenuGroup,
} from "../types"
import {
  convertSecondaryActionsToMenuItems,
  isMenuGroupNotButton,
} from "../utils"
import {
  TitleBlockMenuItem,
  TitleBlockMenuItemProps,
} from "./TitleBlockMenuItem"

import styles from "./MobileActions.module.scss"

const menuItemIsLink: (item: TitleBlockMenuItemProps) => boolean = item =>
  "href" in item

const defaultActionIsLink: (action: DefaultActionProps) => boolean = action =>
  "href" in action

const defaultActionIsButton: (action: DefaultActionProps) => boolean = action =>
  (!("href" in action) && "onClick" in action) || "component" in action

const filterActions = (
  menuItems: TitleBlockMenuItemProps[],
  filterType: "link" | "action"
): TitleBlockMenuItemProps[] =>
  menuItems.filter(item =>
    filterType === "link" ? menuItemIsLink(item) : !menuItemIsLink(item)
  )

/** Returns a filtered array of TitleBlockMenuItem based on actionType
 * This is use to sort a selectively render the action into a specifc order
 */
const renderPrimaryActionDrawerContent = (
  primaryAction: PrimaryActionProps,
  actionType: "link" | "action"
): JSX.Element[] | null => {
  if (!primaryAction) return null

  if (isMenuGroupNotButton(primaryAction)) {
    const filteredActions = filterActions(primaryAction.menuItems, actionType)
    return filteredActions.map((item, idx) => {
      const itemType = menuItemIsLink(item) ? "link" : "action"

      return (
        <TitleBlockMenuItem
          {...item}
          key={`title-block-mobile-actions-primary-${itemType}-${idx}`}
          automationId={`title-block-mobile-actions-primary-${itemType}-${idx}`}
          data-testid={`title-block-mobile-actions-primary-${itemType}-${idx}`}
        />
      )
    })
  }

  return null
}

const renderDefaultLink = (
  defaultAction: DefaultActionProps
): JSX.Element | undefined => {
  if (!defaultActionIsLink(defaultAction)) return
  if ("component" in defaultAction) {
    return (
      <TitleBlockMenuItem
        {...defaultAction}
        key="title-block-mobile-actions-default-link"
        automationId="title-block-mobile-actions-default-link"
        data-testid="title-block-mobile-actions-default-link"
      />
    )
  }
  return (
    <MenuItem
      href={defaultAction.href}
      label={defaultAction.label}
      icon={defaultAction.icon}
      disabled={defaultAction.disabled}
      key="title-block-mobile-actions-default-link"
      automationId="title-block-mobile-actions-default-link"
      data-testid="title-block-mobile-actions-default-link"
    />
  )
}

const renderDefaultAction = (
  defaultAction: DefaultActionProps
): JSX.Element | null => {
  if (!defaultActionIsLink(defaultAction)) {
    return (
      <TitleBlockMenuItem
        {...defaultAction}
        key="title-block-mobile-actions-default-action"
        automationId="title-block-mobile-actions-default-action"
        data-testid="title-block-mobile-actions-default-action"
      />
    )
  }

  return null
}

const renderSecondaryActions = (
  secondaryActions: SecondaryActionsProps | undefined
): JSX.Element[] | null => {
  if (!secondaryActions) return null
  const secondaryActionMenuItems: TitleBlockMenuItemProps[] =
    convertSecondaryActionsToMenuItems(secondaryActions)

  return secondaryActionMenuItems.map((item, idx) => (
    <TitleBlockMenuItem
      {...item}
      key={`title-block-mobile-actions-secondary-action-${idx}`}
      automationId="title-block-mobile-actions-secondary-action"
      data-testid="title-block-mobile-actions-secondary-action"
    />
  ))
}

const renderSecondaryOverflowMenuItems = (
  secondaryOverflowMenuItems: TitleBlockMenuItemProps[]
): JSX.Element[] =>
  secondaryOverflowMenuItems.map((item, idx) => (
    <TitleBlockMenuItem
      {...item}
      key={`title-block-mobile-actions-overflow-menu-item-${idx}`}
      automationId="title-block-mobile-actions-overflow-menu-item"
      data-testid="title-block-mobile-actions-overflow-menu-item"
    />
  ))

type DrawerMenuContentProps = {
  primaryAction?: PrimaryActionProps
  defaultAction?: DefaultActionProps
  secondaryActions?: SecondaryActionsProps
  secondaryOverflowMenuItems?: TitleBlockMenuItemProps[]
}

const DrawerMenuContent = ({
  primaryAction,
  defaultAction,
  secondaryActions,
  secondaryOverflowMenuItems,
}: DrawerMenuContentProps): JSX.Element => {
  const showOtherActionsHeading =
    (defaultAction && defaultActionIsButton(defaultAction)) ||
    secondaryActions ||
    secondaryOverflowMenuItems

  return (
    <>
      <MenuList>
        {primaryAction &&
          renderPrimaryActionDrawerContent(primaryAction, "link")}
        {defaultAction && renderDefaultLink(defaultAction)}
        {primaryAction &&
          renderPrimaryActionDrawerContent(primaryAction, "action")}
      </MenuList>
      {(defaultAction || secondaryActions || secondaryOverflowMenuItems) && (
        <MenuList
          heading={
            showOtherActionsHeading && <MenuHeading>Other actions</MenuHeading>
          }
        >
          {defaultAction && renderDefaultAction(defaultAction)}
          {secondaryActions && renderSecondaryActions(secondaryActions)}
          {secondaryOverflowMenuItems &&
            renderSecondaryOverflowMenuItems(secondaryOverflowMenuItems)}
        </MenuList>
      )}
    </>
  )
}

const renderDrawerHandleLabel = (
  label: string,
  icon?: JSX.Element,
  drawerHandleLabelIconPosition?: ButtonProps["iconPosition"]
): JSX.Element => {
  if (drawerHandleLabelIconPosition === "end") {
    return (
      <>
        <span
          className={styles.drawerHandleLabelText}
          data-automation-id="drawer-handle-lable-text"
          data-testid="drawer-handle-lable-text"
        >
          {label}
        </span>
        <>{icon && <span className={styles.drawerHandleIcon}>{icon}</span>}</>
      </>
    )
  } else {
    return (
      <>
        <>{icon && <span className={styles.drawerHandleIcon}>{icon}</span>}</>
        <span
          className={styles.drawerHandleLabelText}
          data-automation-id="drawer-handle-lable-text"
          data-testid="drawer-handle-lable-text"
        >
          {label}
        </span>
      </>
    )
  }
}

type HrefAndOnClick = Pick<TitleBlockButtonProps, "href" | "onClick">
type ButtonOrLinkActionProps =
  | HrefAndOnClick
  | TitleBlockButtonProps["href"]
  | TitleBlockButtonProps["onClick"]
type ButtonOrLinkProps = {
  action?: ButtonOrLinkActionProps
  children: React.ReactNode
}

const ButtonOrLink = ({ action, children }: ButtonOrLinkProps): JSX.Element => {
  if (typeof action === "object" && "onClick" in action && "href" in action) {
    return (
      <a
        onClick={action.onClick}
        href={action.href}
        className={classnames(
          styles.mobileActionsPrimaryLabel,
          styles.mobileActionsPrimaryButton
        )}
        data-automation-id="title-block-mobile-actions-primary-button"
        data-testid="title-block-mobile-actions-primary-button"
      >
        {children}
      </a>
    )
  }
  if (typeof action === "function") {
    return (
      <button
        type="button"
        onClick={action}
        className={classnames(
          styles.mobileActionsPrimaryLabel,
          styles.mobileActionsPrimaryButton
        )}
        data-automation-id="title-block-mobile-actions-primary-button"
        data-testid="title-block-mobile-actions-primary-button"
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
        data-automation-id="title-block-mobile-actions-primary-button"
        data-testid="title-block-mobile-actions-primary-button"
      >
        {children}
      </a>
    )
  }

  // when there's no action (e.g. primary button is disabled)
  return (
    <button
      type="button"
      className={classnames(
        styles.mobileActionsPrimaryLabel,
        styles.mobileActionsPrimaryButton
      )}
      data-automation-id="title-block-mobile-actions-primary-button"
      data-testid="title-block-mobile-actions-primary-button"
    >
      {children}
    </button>
  )
}

const getAction = (
  primaryAction: TitleBlockButtonProps
): ButtonOrLinkActionProps => {
  if (primaryAction && !primaryAction.disabled) {
    if (primaryAction.onClick && primaryAction.href) {
      return {
        href: primaryAction.href,
        onClick: primaryAction.onClick,
      }
    }
    if (primaryAction.onClick) {
      return primaryAction.onClick
    }
    if (primaryAction.href) {
      return primaryAction.href
    }
  }

  return undefined
}

type DrawerHandleProps = {
  primaryAction: PrimaryActionProps | undefined
  secondaryActions: SecondaryActionsProps | undefined
  defaultAction?: DefaultActionProps | TitleBlockMenuGroup
  secondaryOverflowMenuItems?: TitleBlockMenuItemProps[]
  drawerHandleLabelIconPosition?: ButtonProps["iconPosition"]
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
}: DrawerHandleProps): JSX.Element | null => {
  const showDrawer =
    defaultAction || secondaryActions || secondaryOverflowMenuItems
  if (primaryAction) {
    // If the primary action is a menu
    if (isMenuGroupNotButton(primaryAction)) {
      return (
        <div
          className={classnames(
            styles.mobileActionsTopRow,
            styles.mobileActionsTopRowSingleButton
          )}
          data-automation-id="title-block-mobile-actions-drawer-handle"
          data-testid="title-block-mobile-actions-drawer-handle"
        >
          <button
            type="button"
            className={classnames(
              styles.mobileActionsExpandButton,
              styles.mobileActionsPrimaryLabel
            )}
            onClick={toggleDisplay}
            aria-expanded={isOpen}
          >
            {primaryAction.label}
            <span className={styles.mobileActionsChevronSquare}>
              {isOpen ? (
                <ChevronDownIcon role="presentation" />
              ) : (
                <ChevronUpIcon role="presentation" />
              )}
            </span>
          </button>
        </div>
      )
    }

    // If the primary action is a button, or has no onClick/href/action
    return (
      <div
        className={classnames(
          styles.mobileActionsTopRow,
          !showDrawer && styles.mobileActionsTopRowSingleButton
        )}
        data-automation-id="title-block-mobile-actions-drawer-handle"
        data-testid="title-block-mobile-actions-drawer-handle"
      >
        {"component" in primaryAction ? (
          <primaryAction.component
            className={classnames(
              styles.mobileActionsPrimaryLabel,
              styles.mobileActionsPrimaryButton
            )}
            {...primaryAction}
          >
            {primaryAction.label &&
              renderDrawerHandleLabel(
                primaryAction.label,
                primaryAction.icon,
                drawerHandleLabelIconPosition
              )}
          </primaryAction.component>
        ) : (
          <ButtonOrLink action={getAction(primaryAction)}>
            {renderDrawerHandleLabel(
              primaryAction.label,
              primaryAction.icon,
              drawerHandleLabelIconPosition
            )}
          </ButtonOrLink>
        )}

        {/* If there are no secondary etc. actions, just show the button without drawer */}
        {showDrawer && (
          <button
            type="button"
            className={styles.mobileActionsExpandButton}
            onClick={toggleDisplay}
            aria-expanded={isOpen}
            aria-label="Other actions"
          >
            {isOpen ? (
              <ChevronDownIcon role="presentation" />
            ) : (
              <ChevronUpIcon role="presentation" />
            )}
          </button>
        )}
      </div>
    )
  }

  // if there are default/secondary actions but no primary action
  if (showDrawer) {
    return (
      <div
        className={classnames(
          styles.mobileActionsTopRow,
          styles.mobileActionsTopRowSingleButton
        )}
        data-automation-id="title-block-mobile-actions-drawer-handle"
        data-testid="title-block-mobile-actions-drawer-handle"
      >
        <button
          type="button"
          className={classnames(
            styles.mobileActionsExpandButton,
            styles.mobileActionsPrimaryLabel
          )}
          onClick={toggleDisplay}
          aria-expanded={isOpen}
        >
          {renderDrawerHandleLabel("Other actions")}
          <span className={styles.mobileActionsChevronSquare}>
            {isOpen ? (
              <ChevronDownIcon role="presentation" />
            ) : (
              <ChevronUpIcon role="presentation" />
            )}
          </span>
        </button>
      </div>
    )
  }
  return null
}

export type MobileActionsProps = {
  primaryAction?: PrimaryActionProps
  defaultAction?: DefaultActionProps
  secondaryActions?: SecondaryActionsProps
  secondaryOverflowMenuItems?: TitleBlockMenuItemProps[]
  drawerHandleLabelIconPosition?: ButtonProps["iconPosition"]
}

export const MobileActions = ({
  primaryAction,
  defaultAction,
  secondaryActions,
  secondaryOverflowMenuItems,
  drawerHandleLabelIconPosition,
}: MobileActionsProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleDisplay = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={classnames(
        styles.mobileActionsContainer,
        isOpen && styles.isOpen
      )}
    >
      <FocusOn enabled={isOpen} scrollLock={false}>
        <DrawerHandle
          primaryAction={primaryAction}
          secondaryActions={secondaryActions}
          defaultAction={defaultAction}
          secondaryOverflowMenuItems={secondaryOverflowMenuItems}
          drawerHandleLabelIconPosition={drawerHandleLabelIconPosition}
          toggleDisplay={toggleDisplay}
          isOpen={isOpen}
        />
        {(defaultAction ||
          secondaryActions ||
          secondaryOverflowMenuItems ||
          (primaryAction && isMenuGroupNotButton(primaryAction))) && (
          <div className={styles.mobileActionsMenuContainer}>
            <DrawerMenuContent
              primaryAction={primaryAction}
              defaultAction={defaultAction}
              secondaryActions={secondaryActions}
              secondaryOverflowMenuItems={secondaryOverflowMenuItems}
            />
          </div>
        )}
      </FocusOn>
    </div>
  )
}

MobileActions.displayName = "MobileActions"
