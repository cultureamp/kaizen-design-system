import { Icon } from "@kaizen/component-library"
import { ButtonProps } from "@kaizen/draft-button"
import { MenuItem, MenuSection } from "@kaizen/draft-menu"
import classnames from "classnames"
import * as React from "react"
import chevronDownIcon from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUpIcon from "@kaizen/component-library/icons/chevron-up.icon.svg"
import {
  TitleBlockButtonProps,
  isMenuGroupNotButton,
  MenuGroup,
  PrimaryActionProps,
  SecondaryActionsProps,
  TitleBlockMenuItemProps,
  convertSecondaryActionsToMenuItems,
} from "./TitleBlockZen"
import styles from "./MobileActions.scss"

const buttonIsLink: (action: TitleBlockButtonProps) => boolean = action =>
  "href" in action
const buttonIsAction: (action: TitleBlockButtonProps) => boolean = action =>
  !("href" in action) && "onClick" in action

const renderPrimaryLinks = (primaryAction: PrimaryActionProps) => {
  if (!primaryAction) return null
  if (isMenuGroupNotButton(primaryAction)) {
    return primaryAction.menuItems
      .filter(item => typeof item.action === "string")
      .map((item, idx) => (
        <MenuItem
          {...item}
          key={`title-block-mobile-actions-primary-link-${idx}`}
          automationId={`title-block-mobile-actions-primary-link-${idx}`}
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
      primaryAction.menuItems
        .filter(item => typeof item.action !== "string")
        .map((item, idx) => (
          <MenuItem
            {...item}
            key={`title-block-mobile-actions-primary-action-${idx}`}
            automationId={`title-block-mobile-actions-primary-action-${idx}`}
          />
        )),
    ]
  }
}

const renderDefaultLinkOrAction = (
  defaultAction: TitleBlockButtonProps,
  kind: "action" | "link"
) => {
  if (kind === "action" && buttonIsAction(defaultAction)) {
    return (
      defaultAction.onClick && (
        <MenuItem
          action={defaultAction.onClick}
          label={defaultAction.label}
          icon={defaultAction.icon}
          disabled={defaultAction.disabled}
          automationId="title-block-mobile-actions-default-action"
        />
      )
    )
  }
  if (kind === "link" && buttonIsLink(defaultAction)) {
    return (
      defaultAction.href && (
        <MenuItem
          action={defaultAction.href}
          label={defaultAction.label}
          icon={defaultAction.icon}
          disabled={defaultAction.disabled}
          automationId="title-block-mobile-actions-default-link"
        />
      )
    )
  }
}

const renderSecondaryActions = (
  secondaryActions: SecondaryActionsProps | undefined
) => {
  if (!secondaryActions) return null
  const secondaryActionMenuItems: TitleBlockMenuItemProps[] = convertSecondaryActionsToMenuItems(
    secondaryActions
  )

  return secondaryActionMenuItems.map((item, idx) => (
    <MenuItem
      {...item}
      key={`title-block-mobile-actions-secondary-action-${idx}`}
      automationId={"title-block-mobile-actions-secondary-action"}
    />
  ))
}

const renderSecondaryOverflowMenuItems = (
  secondaryOverflowMenuItems: TitleBlockMenuItemProps[]
) =>
  secondaryOverflowMenuItems.map((item, idx) => (
    <MenuItem
      {...item}
      key={`title-block-mobile-actions-overflow-menu-item-${idx}`}
      automationId={"title-block-mobile-actions-overflow-menu-item"}
    />
  ))

type DrawerMenuContentProps = {
  primaryAction?: PrimaryActionProps
  defaultAction?: TitleBlockButtonProps
  secondaryActions?: SecondaryActionsProps
  secondaryOverflowMenuItems?: TitleBlockMenuItemProps[]
}

const DrawerMenuContent = ({
  primaryAction,
  defaultAction,
  secondaryActions,
  secondaryOverflowMenuItems,
}: DrawerMenuContentProps) => (
  <ul className={styles.mobileMenuWrapper}>
    {primaryAction && (
      <MenuSection>{renderPrimaryLinks(primaryAction)}</MenuSection>
    )}

    {defaultAction && defaultAction.href && (
      <MenuSection>
        {renderDefaultLinkOrAction(defaultAction, "link")}
      </MenuSection>
    )}

    {primaryAction && (
      <MenuSection>{renderPrimaryActions(primaryAction)}</MenuSection>
    )}

    {(defaultAction || secondaryActions || secondaryOverflowMenuItems) && (
      <MenuSection heading="Other actions">
        {defaultAction && renderDefaultLinkOrAction(defaultAction, "action")}
        {secondaryActions && renderSecondaryActions(secondaryActions)}
        {secondaryOverflowMenuItems &&
          renderSecondaryOverflowMenuItems(secondaryOverflowMenuItems)}
      </MenuSection>
    )}
  </ul>
)

const renderDrawerHandleLabel = (
  label: string,
  icon?: React.SVGAttributes<SVGSymbolElement>,
  drawerHandleLabelIconPosition?: ButtonProps["iconPosition"]
) => {
  if (drawerHandleLabelIconPosition === "end") {
    return (
      <>
        <span
          className={styles.drawerHandleLabelText}
          data-automation-id="drawer-handle-lable-text"
        >
          {label}
        </span>
        <>
          {icon && (
            <span className={styles.drawerHandleIcon}>
              <Icon icon={icon} role="presentation" />
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
              <Icon icon={icon} role="presentation" />
            </span>
          )}
        </>
        <span
          className={styles.drawerHandleLabelText}
          data-automation-id="drawer-handle-lable-text"
        >
          {label}
        </span>
      </>
    )
  }
}

type HrefAndOnClick = Pick<TitleBlockButtonProps, "href" | "onClick">

type ButtonOrLinkProps = {
  action?:
    | TitleBlockButtonProps["href"]
    | TitleBlockButtonProps["onClick"]
    | HrefAndOnClick
  children: React.ReactNode
}

const ButtonOrLink = ({ action, children }: ButtonOrLinkProps) => {
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
      >
        {children}
      </a>
    )
  }
  if (typeof action === "function") {
    return (
      <button
        onClick={action}
        className={classnames(
          styles.mobileActionsPrimaryLabel,
          styles.mobileActionsPrimaryButton
        )}
        data-automation-id="title-block-mobile-actions-primary-button"
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
      >
        {children}
      </a>
    )
  }

  // when there's no action (e.g. primary button is disabled)
  return (
    <button
      className={classnames(
        styles.mobileActionsPrimaryLabel,
        styles.mobileActionsPrimaryButton
      )}
      data-automation-id="title-block-mobile-actions-primary-button"
    >
      {children}
    </button>
  )
}

const getAction = (primaryAction: TitleBlockButtonProps) => {
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
  } else {
    return undefined
  }
}

type DrawerHandleProps = {
  primaryAction: PrimaryActionProps | undefined
  secondaryActions: SecondaryActionsProps | undefined
  defaultAction?: TitleBlockButtonProps | MenuGroup
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
}: DrawerHandleProps) => {
  if (primaryAction) {
    // If the primary action is a menu
    if (isMenuGroupNotButton(primaryAction)) {
      return (
        <div
          className={styles.mobileActionsTopRow}
          data-automation-id="title-block-mobile-actions-drawer-handle"
        >
          <button
            className={classnames(
              styles.mobileActionsExpandButtonFullWidth,
              styles.mobileActionsPrimaryLabel
            )}
            onClick={toggleDisplay}
          >
            {primaryAction.label}
            <div className={styles.mobileActionsChevronSquare}>
              <Icon
                icon={isOpen ? chevronDownIcon : chevronUpIcon}
                role="presentation"
              />
            </div>
          </button>
        </div>
      )
    } else {
      // If the primary action is a button, or has no onClick/href/action
      return (
        <div
          className={styles.mobileActionsTopRow}
          data-automation-id="title-block-mobile-actions-drawer-handle"
        >
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
              <Icon
                icon={isOpen ? chevronDownIcon : chevronUpIcon}
                role="presentation"
              />
            </button>
          )}
        </div>
      )
    }
  }
  // if there are default/secondary actions but no primary action
  if (defaultAction || secondaryActions || secondaryOverflowMenuItems) {
    return (
      <div
        className={styles.mobileActionsTopRow}
        data-automation-id="title-block-mobile-actions-drawer-handle"
      >
        <button
          className={classnames(
            styles.mobileActionsExpandButtonFullWidth,
            styles.mobileActionsPrimaryLabel
          )}
          onClick={toggleDisplay}
        >
          {renderDrawerHandleLabel("Other actions")}
          <div className={styles.mobileActionsChevronSquare}>
            <Icon
              icon={isOpen ? chevronDownIcon : chevronUpIcon}
              role="presentation"
            />
          </div>
        </button>
      </div>
    )
  }
  return null
}

export type MobileActionsProps = {
  primaryAction?: PrimaryActionProps
  defaultAction?: TitleBlockButtonProps
  secondaryActions?: SecondaryActionsProps
  secondaryOverflowMenuItems?: TitleBlockMenuItemProps[]
  drawerHandleLabelIconPosition?: ButtonProps["iconPosition"]
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

    // If things are disabled, strip hrefs/onClicks
    const newPrimaryAction =
      primaryAction &&
      "disabled" in primaryAction &&
      primaryAction.disabled &&
      "href" in primaryAction
        ? {
            ...primaryAction,
            href: "",
          }
        : primaryAction

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
        {(defaultAction ||
          secondaryActions ||
          secondaryOverflowMenuItems ||
          (primaryAction && isMenuGroupNotButton(primaryAction))) && (
          <div className={styles.mobileActionsMenuContainer}>
            <MenuSection>
              <DrawerMenuContent
                primaryAction={primaryAction}
                defaultAction={defaultAction}
                secondaryActions={secondaryActions}
                secondaryOverflowMenuItems={secondaryOverflowMenuItems}
              />
            </MenuSection>
          </div>
        )}
      </div>
    )
  }
}
