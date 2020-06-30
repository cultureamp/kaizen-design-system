import { Heading, Icon } from "@kaizen/component-library"
import { Button, ButtonProps } from "@kaizen/draft-button"
import {
  Menu,
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuItemProps,
  MenuSeparator,
} from "@kaizen/draft-menu"
import { Tag } from "@kaizen/draft-tag"
import classNames from "classnames"
import * as React from "react"
import MainActions from "./MainActions"
import MobileActions from "./MobileActions"
import NavigationTab, { NavigationTabProps } from "./NavigationTabs"
import SecondaryActions from "./SecondaryActions"

const styles = require("./TitleBlockZen.scss")
const leftArrow = require("@kaizen/component-library/icons/arrow-backward.icon.svg")
  .default
const rightArrow = require("@kaizen/component-library/icons/arrow-forward.icon.svg")
  .default
const hamburgerIcon = require("@kaizen/component-library/icons/hamburger.icon.svg")
  .default

/**
 * @param TitleBlockProps  If the primary action is a menu, primaryAction must take a `label` and list of `menuItem`s.
 */
export interface TitleBlockProps {
  children?: React.ReactNode
  title: string
  variant?: Variant
  breadcrumb?: Breadcrumb
  avatar?: JSX.Element
  subtitle?: string
  sectionTitle?: string
  sectionTitleDescription?: string
  handleHamburgerClick?: (event: React.MouseEvent) => void
  primaryAction?: PrimaryActionProps
  defaultAction?: ButtonWithOnClickOrHref
  secondaryActions?: SecondaryActionsProps
  secondaryOverflowMenuItems?: MenuItemProps[]
  navigationTabs?: NavigationTabs
  textDirection?: TextDirection
  surveyStatus?: SurveyStatus
}

export type ButtonWithOnClickOrHref = ButtonProps &
  Pick<ButtonProps, "href" | "onClick">

export type MenuGroup = {
  label: string
  menuItems: MenuItemProps[]
}

export type PrimaryActionProps =
  | MenuGroup
  | (ButtonWithOnClickOrHref & { primary: true })

/**
 * @param SecondaryActionsProps Secondary actions can only be buttons, menus, or an overflow menu,
 * which the Title Block will render as a Menu component with a "meatballs" IconButton.
 * For the menu, pass in an array of menu items.
 */
export type SecondaryActionsProps = Array<MenuGroup | ButtonWithOnClickOrHref>

export const isMenuItemNotButton = (
  value: ButtonWithOnClickOrHref | MenuItemProps
): value is MenuItemProps => {
  return value.hasOwnProperty("action")
}

export const isMenuGroupNotButton = (
  value: ButtonWithOnClickOrHref | MenuGroup
): value is MenuGroup => {
  return value.hasOwnProperty("menuItems")
}

type Variant = "admin" | "education" // the default is wisteria bg (AKA "reporting")

type NavigationTabs = Array<React.ReactElement<NavigationTabProps>>

type TextDirection = "ltr" | "rtl"

type SurveyStatus = {
  text: string
  status: "draft" | "live"
}

type Breadcrumb = {
  path: string
  text: string
  handleClick?: (event: React.MouseEvent) => void
}

const renderTag = (surveyStatus: SurveyStatus) => {
  let variant
  if (surveyStatus.status === "draft") {
    variant = "statusDraft"
  }
  if (surveyStatus.status === "live") {
    variant = "statusLive"
  }

  return (
    <div className={styles.tag}>
      <Tag variant={variant} size="small">
        {surveyStatus.text}
      </Tag>
    </div>
  )
}

const renderAvatar = (image: JSX.Element) => (
  <div className={styles.avatar}>{image}</div>
)

const renderSubtitle = (subtitle: string) => (
  <div className={styles.subtitle}>{subtitle}</div>
)

const renderSectionTitle = (
  sectionTitle?: string,
  sectionTitleDescription?: string,
  variant?: Variant
) => (
  <div className={styles.sectionTitleContainer}>
    <div className={styles.sectionTitleInner}>
      {sectionTitle && (
        <div className={styles.sectionTitle}>
          <Heading
            variant="heading-2"
            color={
              variant === "education" || variant === "admin" ? "dark" : "white"
            }
            classNameAndIHaveSpokenToDST={styles.sectionTitleOverride}
          >
            {sectionTitle}
          </Heading>
        </div>
      )}
      {sectionTitleDescription && (
        <div
          className={classNames(styles.sectionTitleDescription, {
            [styles.dark]: variant === "education" || variant === "admin",
          })}
        >
          {sectionTitleDescription}
        </div>
      )}
    </div>
  </div>
)

const renderBreadcrumb = (
  breadcrumb: Breadcrumb,
  textDirection?: TextDirection
) => {
  const icon = textDirection === "rtl" ? rightArrow : leftArrow

  return (
    <a
      href={breadcrumb.path}
      className={styles.breadcrumb}
      data-automation-id="TitleBlock__Breadcrumb"
      onClick={breadcrumb.handleClick}
      aria-label="Back to previous page"
    >
      <div className={styles.circle}>
        <Icon icon={icon} role="presentation" />
      </div>
      <span className={styles.breadcrumbText}>{breadcrumb.text}</span>
    </a>
  )
}

const renderNavigationTabs = (navigationTabs: NavigationTabs) => {
  return (
    <div className={styles.navigationTabScrollerContainer}>
      <div className={styles.navigationTabsContainer}>
        <span className={styles.navigationTabEdgeShadowLeft} />
        {navigationTabs}
        <span className={styles.navigationTabEdgeShadowRight} />
      </div>
    </div>
  )
}

/**
 * ### primaryAction
 *
 * The primary action (the "main" button in the top right) can either be a Button, or a Button that reveals a Menu.
 *
 * If you want it to be a Button, you can't pass in a `<Button />`, because the Title Block needs to grab the Button's
 * props and use them to render the mobile actions drawer as well as the Button itself. Instead, you have to pass
 * in the ButtonProps as an object.
 *
 * If you want it to be a Menu, pass in this object as your primaryAction:
 * ```typescript
 * {
 *    label: string
 *    menuItems: MenuItemProps[]
 * }
 * ```
 * Using the `label`, the Title Block will render a Button with a chevron icon and your `menuItems` will appear
 * in the dropdown menu when you click it.
 */
const TitleBlockZen = ({
  title,
  variant,
  breadcrumb,
  avatar,
  subtitle,
  sectionTitle,
  sectionTitleDescription,
  handleHamburgerClick,
  primaryAction,
  defaultAction,
  secondaryActions,
  secondaryOverflowMenuItems,
  navigationTabs,
  textDirection,
  surveyStatus,
}: TitleBlockProps) => (
  <>
    <div
      className={classNames(styles.titleBlock, {
        [styles.hasSubtitle]: Boolean(subtitle),
        [styles.educationVariant]: variant === "education",
        [styles.adminVariant]: variant === "admin",
      })}
    >
      <div className={styles.titleRow}>
        <div className={styles.titleRowInner}>
          <div className={styles.titleRowInnerContent}>
            <div className={styles.titleAndAdjacent}>
              {breadcrumb && renderBreadcrumb(breadcrumb, textDirection)}
              <div className={styles.titleAndAdjacentNotBreadcrumb}>
                <div
                  className={styles.hamburger}
                  onClick={handleHamburgerClick}
                >
                  <Icon
                    icon={hamburgerIcon}
                    role="presentation"
                    title="Open menu"
                  />
                </div>
                {avatar && renderAvatar(avatar)}
                <div className={styles.titleAndSubtitle}>
                  <div className={styles.titleAndSubtitleInner}>
                    <div className={styles.title}>
                      <Heading
                        variant="heading-1"
                        color={
                          variant === "education" || variant === "admin"
                            ? "dark"
                            : "white"
                        }
                        classNameAndIHaveSpokenToDST={styles.titleTextOverride}
                      >
                        {title}
                      </Heading>
                    </div>
                    {subtitle && renderSubtitle(subtitle)}
                  </div>
                </div>
                {surveyStatus && renderTag(surveyStatus)}
              </div>
            </div>
            {(primaryAction || defaultAction) && (
              <MainActions
                primaryAction={primaryAction}
                defaultAction={defaultAction}
                reversed={true}
              />
            )}
          </div>
        </div>
      </div>
      <div className={styles.rowBelowSeparator}>
        <div className={styles.rowBelowSeparatorInner}>
          <div className={styles.rowBelowSeparatorInnerContent}>
            {(sectionTitle || sectionTitleDescription) &&
              renderSectionTitle(
                sectionTitle,
                sectionTitleDescription,
                variant
              )}
            {navigationTabs && renderNavigationTabs(navigationTabs)}
            <SecondaryActions
              secondaryActions={secondaryActions}
              secondaryOverflowMenuItems={secondaryOverflowMenuItems}
              reversed={variant !== "education" && variant !== "admin"}
            />
          </div>
        </div>
      </div>
    </div>
    <MobileActions
      primaryAction={primaryAction}
      defaultAction={defaultAction}
      secondaryActions={secondaryActions}
    />
  </>
)

export default TitleBlockZen
export { NavigationTab }
