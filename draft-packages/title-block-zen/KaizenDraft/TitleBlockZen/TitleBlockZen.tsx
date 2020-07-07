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

export const NON_REVERSED_VARIANTS = ["education", "admin"]

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

/**
 * ### PrimaryActionProps
 *
 * The primary action (the "main" button in the top right) can either be a Button,
 * or a Button that reveals a Menu (a menu button).
 *
 * For a button, pass in an object containing the same props you would normally use
 * for a Button component.
 *
 * For a menu button, pass in a `MenuGroup`:
 * ```typescript
 * {
 *   label: string
 *   menuItems: MenuItemProps[]
 * }
 * ```
 * Using the `label`, the Title Block will render a Button with a chevron icon and your `menuItems` will appear
 * in the dropdown menu when you click it. (`MenuItemProps` is a type imported from the `Menu` component.)
 */
export type PrimaryActionProps =
  | MenuGroup
  | (ButtonWithOnClickOrHref & { primary: boolean })

/**
 * ### SecondaryActionsProps
 *
 * Secondary actions can only be buttons or button menus
 * (a button that reveals a dropdown menu).
 *
 * **IMPORTANT:** The visual order of these from left to right should always be:
 * ```text
 * buttons -> menu buttons
 * ```
 *
 * For a button, pass in an object containing the same props you would normally use
 * for a Button component.
 *
 * For a menu button, pass in a `MenuGroup`:
 *
 * ```typescript
 * {
 *   label: string
 *   menuItems: MenuItemProps[]
 * }
 * ```
 * (`MenuItemProps` is imported from the Menu component.)
 *
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

export type Variant = "admin" | "education" // the default is wisteria bg (AKA "reporting")

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
      {sectionTitle && (
        <div className={styles.sectionTitle}>
          <Heading
            variant="heading-2"
            color={isReversed(variant) ? "white" : "dark"}
            classNameAndIHaveSpokenToDST={styles.sectionTitleOverride}
          >
            {sectionTitle}
          </Heading>
        </div>
      )}
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

// We want to accept undefined here because the NavigationTabs container is
// important for the flex-based layout (it pushes Secondary Actions over to the right)
const renderNavigationTabs = (navigationTabs: NavigationTabs | undefined) => {
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
 * The primary action (the "main" button in the top right) can either be a Button,
 * or a Button that reveals a Menu (a menu button).
 *
 * If you want it to be a Button, you can't pass in a `<Button />`, because the Title Block needs to grab the Button's
 * props and use them to render the mobile actions drawer as well as the Button itself. Instead, you have to pass
 * in the Button's props as an object, and there must be a `primary` property set to `true`.
 *
 * ```typescript
 * type PrimaryActionProps =
 *  | MenuGroup
 *  | (ButtonWithOnClickOrHref & { primary: true })
 * ```
 *
 * If you want it to be a Menu, pass in this object of type `MenuGroup`:
 * ```typescript
 * {
 *   label: string
 *   menuItems: MenuItemProps[]
 * }
 * ```
 * Using the `label`, the Title Block will render a Button with a chevron icon and your `menuItems` will appear
 * in the dropdown menu when you click it. (`MenuItemProps` is a type imported from the `Menu` component.)
 *
 * ### secondaryActions & secondaryOverflowMenuItems
 *
 * Secondary Actions sit below the Primary Actions, and consist of
 * - actions/links (just a button),
 * - menus (a menu button), and
 * - the overflow menu (a menu button with a "meatballs" icon).
 *
 * **IMPORTANT:** The visual order of these from left to right should always be:
 * ```text
 * buttons (far left) -> menu buttons -> overflow menu (far right)
 * ```
 *
 * The overflow menu has a separate prop that accepts an array of `MenuItemProps`:
 *
 * ```typescript
 * secondaryOverflowMenuItems?: MenuItemProps[]
 * ```
 *
 * The `secondaryActions` prop accepts an **array** of objects.
 * Each object can be a MenuGroup (see code snippet for `primaryAction` above) or an object containing Button props:
 *
 * ```typescript
 * type SecondaryActionsProps = Array<MenuGroup | ButtonWithOnClickOrHref>
 * ```
 * The order of elements in the array will determine the visual order on the page, so
 * please be aware of the intended order mentioned above.
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
          [styles.hasLongTitle]: title && title.length >= 30,
          [styles.hasLongSubtitle]: subtitle && subtitle.length >= 18,
          [styles.hasNavigationTabs]:
            navigationTabs && navigationTabs.length > 0,
        })}
      >
        <div className={styles.titleRow}>
          <div className={styles.titleRowInner}>
            <div className={styles.titleRowInnerContent}>
              <div className={styles.titleAndAdjacent}>
                {breadcrumb && renderBreadcrumb(breadcrumb, textDirection)}
                <div className={styles.titleAndAdjacentNotBreadcrumb}>
                  {handleHamburgerClick && (
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
                  )}
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
        <div className={styles.rowBelowSeparator}>
          <div className={styles.rowBelowSeparatorInner}>
            <div className={styles.rowBelowSeparatorInnerContent}>
              {(sectionTitle || sectionTitleDescription) &&
                renderSectionTitle(
                  sectionTitle,
                  sectionTitleDescription,
                  variant
                )}
              {renderNavigationTabs(navigationTabs)}
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
              ? (primaryAction.iconPosition as Pick<
                  ButtonProps,
                  "iconPosition"
                >)
              : undefined
          }
        />
      </div>
    </>
  )
}

export default TitleBlockZen
export { NavigationTab }
