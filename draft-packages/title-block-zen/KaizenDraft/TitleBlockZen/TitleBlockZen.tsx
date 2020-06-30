import { Heading, Icon } from "@kaizen/component-library"
import * as layoutTokens from "@kaizen/design-tokens/tokens/layout.json"
import { ButtonProps } from "@kaizen/draft-button"
import { MenuItemProps } from "@kaizen/draft-menu"
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

const NON_REVERSED_VARIANTS = ["education", "admin"]

/**
 * @param TitleBlockProps ### Accessing internal types of TitleBlockProps
 * If you want access to types like `PrimaryActionProps` (for example, in the scenario
 * where you want to create an object containing menu items to be passed in for the primary
 * menu button), you can use the shorthand:
 * ```
 * const myMenu: TitleBlockProps["primaryAction"] = ...
 * ```
 * This will ensure that `myMenu` has a type of `PrimaryActionProps`.
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
  let tagVariant
  if (surveyStatus.status === "draft") {
    tagVariant = "statusDraft"
  }
  if (surveyStatus.status === "live") {
    tagVariant = "statusLive"
  }

  return (
    <div className={styles.tag}>
      <Tag variant={tagVariant} size="small">
        {surveyStatus.text}
      </Tag>
    </div>
  )
}

const renderAvatar = (image: JSX.Element) => (
  <div className={styles.avatar}>{image}</div>
)

const renderSubtitle = (subtitle: string) => (
  <div className={styles.subtitle}>
    <span className={styles.subtitleText}>{subtitle}</span>
  </div>
)

const renderSectionTitle = (
  sectionTitle?: string,
  sectionTitleDescription?: string,
  variant?: Variant
) => (
  <div className={styles.sectionTitleContainer}>
    <div className={styles.sectionTitleInner}>
      <div className={styles.sectionTitle}>
        <Heading
          variant="heading-2"
          color={isReversed(variant) ? "white" : "dark"}
          classNameAndIHaveSpokenToDST={styles.sectionTitleOverride}
        >
          {sectionTitle}
        </Heading>
      </div>
      {sectionTitleDescription && (
        <div
          className={classNames(styles.sectionTitleDescription, {
            [styles.dark]: !isReversed(variant),
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

const isReversed = (variant: Variant | undefined): boolean => {
  // The default variant (no variant prop) is reversed (dark background)
  if (variant === undefined) return true
  return !NON_REVERSED_VARIANTS.includes(variant)
}

const createTabletOverflowMenuItems = (
  secondaryActions?: SecondaryActionsProps,
  secondaryOverflowMenuItems?: MenuItemProps[]
): MenuItemProps[] => {
  let secondaryActionsList = new Array()
  if (secondaryActions) {
    secondaryActionsList = secondaryActions.map(
      (el: MenuGroup | ButtonWithOnClickOrHref) => {
        if (isMenuGroupNotButton(el)) {
          return el.menuItems
        } else {
          return [
            {
              ...el,
              action: el.onClick || el.href,
            },
          ]
        }
      }
    )
  }
  const flatSecondaryActionsList = Array.prototype.concat.apply(
    [],
    secondaryActionsList
  )
  const flatSecondaryOverflowItemsList = secondaryOverflowMenuItems || []
  return flatSecondaryActionsList.concat(flatSecondaryOverflowItemsList)
}

const largeViewMinSizeInPixels = parseInt(
  layoutTokens.kz.layout.breakpoints.large,
  10
)
const smallAndMediumMediaQuery = window.matchMedia(
  `(max-width: ${largeViewMinSizeInPixels - 1}px)`
)

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
}: TitleBlockProps) => {
  const [isSmallOrMediumViewport, setSmallOrMediumViewport] = React.useState(
    false
  )

  const updateOnViewportChange = mediaQuery => {
    if (mediaQuery.matches && !isSmallOrMediumViewport) {
      setSmallOrMediumViewport(true)
    }
    if (!mediaQuery.matches && isSmallOrMediumViewport) {
      setSmallOrMediumViewport(false)
    }
  }

  React.useEffect(() => {
    smallAndMediumMediaQuery.addListener(updateOnViewportChange)
    return () => {
      smallAndMediumMediaQuery.removeListener(updateOnViewportChange)
    }
  })
  updateOnViewportChange(smallAndMediumMediaQuery)

  return (
    <>
      <div
        className={classNames(styles.titleBlock, {
          [styles.hasSubtitle]: Boolean(subtitle),
          [styles.educationVariant]: variant === "education",
          [styles.adminVariant]: variant === "admin",
          [styles.hasLongTitle]: title.length >= 30,
          [styles.hasLongSubtitle]: subtitle && subtitle.length >= 34,
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
                          color={isReversed(variant) ? "white" : "dark"}
                          classNameAndIHaveSpokenToDST={
                            styles.titleTextOverride
                          }
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
                  reversed={isReversed(variant)}
                  overflowMenuItems={createTabletOverflowMenuItems(
                    secondaryActions,
                    secondaryOverflowMenuItems
                  )}
                  showOverflowMenu={isSmallOrMediumViewport}
                />
              )}
            </div>
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
              reversed={isReversed(variant)}
            />
          </div>
        </div>
      </div>
      <MobileActions
        primaryAction={primaryAction}
        defaultAction={defaultAction}
        secondaryActions={secondaryActions}
        secondaryOverflowMenuItems={secondaryOverflowMenuItems}
        drawerHandleLabelIconPosition={
          primaryAction && "iconPosition" in primaryAction
            ? (primaryAction.iconPosition as Pick<ButtonProps, "iconPosition">)
            : undefined
        }
      />
    </>
  )
}

export default TitleBlockZen
export { NavigationTab }
