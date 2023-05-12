import React from "react"
import classnames from "classnames"
import { IconButton, ButtonProps, CustomButtonProps } from "@kaizen/button"
import { Icon } from "@kaizen/component-library"
import leftArrow from "@kaizen/component-library/icons/arrow-backward.icon.svg"
import rightArrow from "@kaizen/component-library/icons/arrow-forward.icon.svg"
import hamburgerIcon from "@kaizen/component-library/icons/hamburger.icon.svg"
import {
  Avatar,
  GenericAvatarProps,
  CompanyAvatarProps,
} from "@kaizen/draft-avatar"
import { MenuItemProps } from "@kaizen/draft-menu"
import { Select } from "@kaizen/draft-select"
import { Tag } from "@kaizen/draft-tag"
import { useMediaQueries } from "@kaizen/responsive"
import { Heading } from "@kaizen/typography"
import MainActions from "./MainActions"
import MobileActions from "./MobileActions"
import { NavigationTabProps } from "./NavigationTabs"
import SecondaryActions from "./SecondaryActions"
import styles from "./TitleBlockZen.module.scss"

/*
  This type exists to support omitting keys from a union or intersection type in a distributive manner. `Omit` out of the box will cause you to lose any union or intersection information about the type,
  thus you might lose the ability to access some fields that only exist conditionally based on another (e.g. discriminated unions).
  `T extends any ? Omit<T, K>` is a trick used to spread the action of Omit across every variant within the union or intersection.
  So, if T is something like `{foo: string} | {bar: string}`, it becomes `Omit<{foo: string}, K> | Omit<{bar: string}, K>
  https://davidgomes.com/pick-omit-over-union-types-in-typescript/
*/
type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never

type AvatarProps =
  | Omit<GenericAvatarProps, "size">
  | Omit<CompanyAvatarProps, "size">

export const NON_REVERSED_VARIANTS = ["education", "admin"]

export type DefaultActionProps =
  | TitleBlockButtonProps
  | TitleBlockCustomButtonProps

export type SectionTitleRenderProps = Pick<
  TitleBlockProps,
  | "sectionTitle"
  | "sectionTitleAutomationId"
  | "sectionTitleDescription"
  | "sectionTitleDescriptionAutomationId"
>

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
  breadcrumb?: BreadcrumbType
  avatar?: JSX.Element | AvatarProps
  subtitle?: React.ReactNode
  sectionTitle?: string
  sectionTitleDescription?: string
  renderSectionTitle?: (renderProps: SectionTitleRenderProps) => React.ReactNode
  pageSwitcherSelect?: SelectProps
  handleHamburgerClick?: (event: React.MouseEvent) => void
  primaryAction?: PrimaryActionProps
  defaultAction?: DefaultActionProps
  secondaryActions?: SecondaryActionsProps
  secondaryOverflowMenuItems?: TitleBlockMenuItemProps[]
  navigationTabs?: NavigationTabs
  collapseNavigationAreaWhenPossible?: boolean
  textDirection?: TextDirection
  surveyStatus?: SurveyStatus
  titleAutomationId?: string
  breadcrumbAutomationId?: string
  breadcrumbTextAutomationId?: string
  avatarAutomationId?: string
  subtitleAutomationId?: string
  sectionTitleAutomationId?: string
  sectionTitleDescriptionAutomationId?: string
}

export type BadgeProps = {
  text: string
  animateChange?: boolean
}

export type TitleBlockButtonProps = DistributiveOmit<
  ButtonProps,
  "onClick" | "component"
> & {
  onClick?: (e: any) => void
}

export type TitleBlockCustomButtonProps = DistributiveOmit<
  TitleBlockButtonProps,
  "component"
> & {
  className?: string
  component: (props: CustomButtonProps) => JSX.Element
}

export type TitleBlockMenuItemProps =
  | (Omit<MenuItemProps, "action"> & {
      action: ((e: any) => void) | string
    })
  | TitleBlockCustomButtonProps

export type ButtonWithHrefNotOnClick = DistributiveOmit<ButtonProps, "onClick">
export type ButtonWithOnClickNotHref = DistributiveOmit<
  TitleBlockButtonProps,
  "href"
>

export type MenuGroup = {
  label: string
  menuItems: TitleBlockMenuItemProps[]
}

export type SelectProps = React.ComponentProps<typeof Select>

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
  | (MenuGroup & { badge?: BadgeProps })
  | ((TitleBlockButtonProps | TitleBlockCustomButtonProps) & {
      badge?: BadgeProps
    })

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
export type SecondaryActionsProps = SecondaryActionItemProps[]

export type SecondaryActionItemProps =
  | MenuGroup
  | (
      | ButtonWithHrefNotOnClick
      | ButtonWithOnClickNotHref
      | TitleBlockCustomButtonProps
    )

export const isMenuItemNotButton = (
  value: TitleBlockButtonProps | MenuItemProps
): value is MenuItemProps => "action" in value

export const isMenuGroupNotButton = (
  value: (TitleBlockButtonProps | TitleBlockCustomButtonProps) | MenuGroup
): value is MenuGroup => "menuItems" in value

export type Variant = "admin" | "education" // the default is wisteria bg (AKA "reporting")

type NavigationTabs = Array<React.ReactElement<NavigationTabProps>>

type TextDirection = "ltr" | "rtl"

type SurveyStatus = {
  text: string
  status: "draft" | "live" | "scheduled" | "closed" | "default"
}

const renderTag = (surveyStatus: SurveyStatus): JSX.Element | void => {
  let tagVariant: React.ComponentPropsWithoutRef<typeof Tag>["variant"]

  if (tagVariant === "profile") {
    return
  }

  if (surveyStatus.status === "draft") {
    tagVariant = "statusDraft"
  }

  /*
    scheduled is actually a draft survey status that has a launch job scheduled
    still, we want to differentiate on the UI and render a specific tag
    the styles must be identical to the draft style

    we have similar behaviour on programs index page's table
  */
  if (surveyStatus.status === "scheduled") {
    tagVariant = "statusClosed"
  }

  if (surveyStatus.status === "live") {
    tagVariant = "statusLive"
  }

  if (surveyStatus.status === "closed") {
    tagVariant = "statusClosed"
  }

  if (surveyStatus.status === "default") {
    tagVariant = "default"
  }

  return (
    <div
      data-automation-id="survey-status-tag"
      data-testid="survey-status-tag"
      className={styles.tag}
    >
      <Tag variant={tagVariant} size="small">
        {surveyStatus.text}
      </Tag>
    </div>
  )
}

const isJSXElement = (
  imageElementOrAvatarProps: JSX.Element | AvatarProps
): imageElementOrAvatarProps is JSX.Element =>
  "props" in imageElementOrAvatarProps

const renderAvatar = (
  imageElementOrAvatarProps: JSX.Element | AvatarProps,
  avatarAutomationId: string
): JSX.Element =>
  isJSXElement(imageElementOrAvatarProps) ? (
    <div
      data-automation-id={avatarAutomationId}
      data-testid={avatarAutomationId}
      className={classnames(styles.avatar, styles.withBorder)}
    >
      {imageElementOrAvatarProps}
    </div>
  ) : (
    <div
      data-automation-id={avatarAutomationId}
      data-testid={avatarAutomationId}
      className={styles.avatar}
    >
      <Avatar {...imageElementOrAvatarProps} size="medium" />
    </div>
  )

const renderSubtitle = (
  subtitle: React.ReactNode,
  subtitleAutomationId: string
): JSX.Element => (
  <div className={styles.subtitle}>
    <span
      data-automation-id={subtitleAutomationId}
      data-testid={subtitleAutomationId}
      className={styles.subtitleText}
    >
      {subtitle}
    </span>
  </div>
)

const defaultRenderSectionTitle = (
  sectionTitle?: string,
  sectionTitleDescription?: string,
  variant?: Variant,
  sectionTitleAutomationId?: string,
  sectionTitleDescriptionAutomationId?: string
): JSX.Element => (
  <>
    {sectionTitle && (
      <div className={styles.sectionTitle}>
        <Heading
          variant="heading-2"
          color={isReversed(variant) ? "white" : "dark"}
          classNameOverride={styles.sectionTitleOverride}
          data-automation-id={sectionTitleAutomationId}
          data-testid={sectionTitleAutomationId}
        >
          {sectionTitle}
        </Heading>
      </div>
    )}
    {sectionTitleDescription && (
      <div
        data-automation-id={sectionTitleDescriptionAutomationId}
        data-testid={sectionTitleDescriptionAutomationId}
        className={classnames(
          styles.sectionTitleDescription,
          !isReversed(variant) && styles.dark
        )}
      >
        {sectionTitleDescription}
      </div>
    )}
  </>
)

type BreadcrumbType = {
  text: string
  path?: string
  handleClick?: (event: React.MouseEvent) => void
  /**
   * Custom render for the breadcrumb. Commonly used to replace the parent link with a router link component.
   * Props given to the breadcrumb component will be passed back, along with a decorated className and children.
   * It is up to you to reapply them to your custom component.
   */
  render?: (props: CustomBreadcrumbProps) => JSX.Element
}

interface BreadcrumbProps {
  breadcrumb: BreadcrumbType
  automationId: string
  textAutomationId: string
  textDirection?: TextDirection
}

export type CustomBreadcrumbProps = BreadcrumbProps & {
  className: string
  children: React.ReactNode
}

const Breadcrumb = ({
  breadcrumb,
  automationId,
  textAutomationId,
  textDirection,
}: BreadcrumbProps): JSX.Element => {
  const { path, handleClick, text, render } = breadcrumb
  const icon = textDirection === "rtl" ? rightArrow : leftArrow
  const InnerContents = (): JSX.Element => (
    <>
      <div className={styles.circle}>
        <Icon icon={icon} role="presentation" />
      </div>
      <span
        className={styles.breadcrumbTextLink}
        data-automation-id={textAutomationId}
        data-testid={textAutomationId}
      >
        <span className={styles.breadcrumbText}>{text}</span>
      </span>
    </>
  )

  if (render) {
    const CustomRender = render
    return (
      <CustomRender
        breadcrumb={breadcrumb}
        className={styles.breadcrumb}
        automationId={automationId}
        textAutomationId={textAutomationId}
        textDirection={textDirection}
      >
        <InnerContents />
      </CustomRender>
    )
  }

  const TagName = path ? "a" : "button"

  return (
    <TagName
      {...(path && { href: path })}
      className={styles.breadcrumb}
      data-automation-id={automationId}
      data-testid={automationId}
      onClick={handleClick}
    >
      <InnerContents />
    </TagName>
  )
}

// We want to accept undefined here because the NavigationTabs container is
// important for the flex-based layout (it pushes Secondary Actions over to the right)
const renderNavigationTabs = (
  navigationTabs: NavigationTabs | undefined,
  collapse: boolean,
  ariaLabel: string
): JSX.Element => (
  <div className={styles.navigationTabScrollerContainer}>
    <div
      className={classnames(
        styles.navigationTabsContainer,
        collapse && styles.navigationTabsContainerCollapsed
      )}
    >
      {!collapse && navigationTabs !== undefined && (
        <>
          <span className={styles.navigationTabEdgeShadowLeft} />
          <nav className={styles.navigationTabsNav} aria-label={ariaLabel}>
            <ul className={styles.navigationTabsList}>
              {navigationTabs.map((navigationTab, index) => (
                <li key={index}>{navigationTab}</li>
              ))}
            </ul>
          </nav>
          <span className={styles.navigationTabEdgeShadowRight} />
        </>
      )}
    </div>
  </div>
)

const isReversed = (variant: Variant | undefined): boolean => {
  // The default variant (no variant prop) is reversed (dark background)
  if (variant === undefined) return true
  return !NON_REVERSED_VARIANTS.includes(variant)
}

export const convertSecondaryActionsToMenuItems = (
  secondaryActions: SecondaryActionsProps
): TitleBlockMenuItemProps[] =>
  secondaryActions.reduce((acc, cur) => {
    if ("menuItems" in cur) {
      return [...acc, ...cur.menuItems]
    }

    if ("component" in cur) {
      return [...acc, cur]
    }

    const out = {
      label: cur.label,
      icon: cur.icon,
      destructive: cur.destructive,
      disabled: cur.disabled,
    }

    if ("onClick" in cur || ("onClick" in cur && "href" in cur)) {
      return [
        ...acc,
        {
          ...out,
          action: cur.onClick,
        },
      ]
    }
    if ("href" in cur) {
      return [
        ...acc,
        {
          ...out,
          action: cur.href,
        },
      ]
    }
    return acc
  }, new Array())

const createTabletOverflowMenuItems = (
  secondaryActions?: SecondaryActionsProps,
  secondaryOverflowMenuItems?: TitleBlockMenuItemProps[]
): TitleBlockMenuItemProps[] => {
  let secondaryActionsList: TitleBlockMenuItemProps[]
  if (secondaryActions) {
    secondaryActionsList = secondaryActions
      ? convertSecondaryActionsToMenuItems(secondaryActions)
      : []
  } else {
    secondaryActionsList = []
  }
  const flatSecondaryOverflowItemsList = secondaryOverflowMenuItems || []
  return secondaryActionsList.concat(flatSecondaryOverflowItemsList)
}

/**
 * {@link https://cultureamp.design/components/title-block/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/story/components-title-block--default Storybook}
 *
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
 *  | (TitleBlockButtonProps & { primary: true })
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
 * type SecondaryActionsProps = Array<MenuGroup | TitleBlockButtonProps>
 * ```
 * The order of elements in the array will determine the visual order on the page, so
 * please be aware of the intended order mentioned above.
 */

export const TitleBlockZen = ({
  title,
  variant,
  breadcrumb,
  avatar,
  subtitle,
  sectionTitle,
  sectionTitleDescription,
  renderSectionTitle,
  pageSwitcherSelect,
  handleHamburgerClick,
  primaryAction,
  defaultAction,
  secondaryActions,
  secondaryOverflowMenuItems,
  navigationTabs,
  collapseNavigationAreaWhenPossible = false,
  textDirection,
  surveyStatus,
  titleAutomationId = "TitleBlock__Title",
  avatarAutomationId = "TitleBlock__Avatar",
  subtitleAutomationId = "TitleBlock__Subtitle",
  sectionTitleAutomationId = "TitleBlock__SectionTitle",
  sectionTitleDescriptionAutomationId = "TitleBlock__SectionTitleDescription",
  breadcrumbAutomationId = "TitleBlock__Breadcrumb",
  breadcrumbTextAutomationId = "TitleBlock__BreadcrumbText",
}: TitleBlockProps): JSX.Element => {
  const hasNavigationTabs = navigationTabs && navigationTabs.length > 0
  const collapseNavigationArea =
    collapseNavigationAreaWhenPossible &&
    !hasNavigationTabs &&
    secondaryActions === undefined

  const {
    queries: { isSmall, isMedium },
  } = useMediaQueries()
  const isSmallOrMediumViewport = isMedium || isSmall
  return (
    <>
      <div
        className={classnames(
          styles.titleBlock,
          styles[`${variant}Variant`],
          Boolean(subtitle) && styles.hasSubtitle,
          Boolean(pageSwitcherSelect) && styles.hasPageSwitcherSelect,
          collapseNavigationArea &&
            !(sectionTitle || sectionTitleDescription || renderSectionTitle) &&
            styles.collapseNavigationArea,
          title && title.length >= 30 && styles.hasLongTitle,
          subtitle &&
            typeof subtitle === "string" &&
            subtitle.length >= 18 &&
            styles.hasLongSubtitle,
          hasNavigationTabs && styles.hasNavigationTabs
        )}
      >
        <div className={styles.titleRow}>
          <div className={styles.titleRowInner}>
            <div className={styles.titleRowInnerContent}>
              <div className={styles.titleAndAdjacent}>
                {breadcrumb && (
                  <Breadcrumb
                    breadcrumb={breadcrumb}
                    automationId={breadcrumbAutomationId}
                    textAutomationId={breadcrumbTextAutomationId}
                    textDirection={textDirection}
                  />
                )}
                <div className={styles.titleAndAdjacentNotBreadcrumb}>
                  <>
                    {handleHamburgerClick && (
                      <div className={styles.hamburger}>
                        <IconButton
                          onClick={handleHamburgerClick}
                          icon={hamburgerIcon}
                          label="Open menu"
                          reversed={isReversed(variant)}
                        />
                      </div>
                    )}
                    {avatar && renderAvatar(avatar, avatarAutomationId)}
                    <div className={styles.titleAndSubtitle}>
                      <div className={styles.titleAndSubtitleInner}>
                        <div className={styles.title}>
                          <Heading
                            variant="heading-1"
                            color={isReversed(variant) ? "white" : "dark"}
                            classNameOverride={styles.titleTextOverride}
                            data-automation-id={titleAutomationId}
                            data-testid={titleAutomationId}
                          >
                            {title}
                          </Heading>
                        </div>
                        {isSmallOrMediumViewport && pageSwitcherSelect && (
                          <div
                            className={styles.pageSwitcherSelectUnderneathTitle}
                          >
                            <Select
                              {...pageSwitcherSelect}
                              variant="secondary-small"
                              reversed
                            />
                          </div>
                        )}
                        {subtitle &&
                          renderSubtitle(subtitle, subtitleAutomationId)}
                      </div>
                    </div>
                    {surveyStatus && renderTag(surveyStatus)}
                    {!isSmallOrMediumViewport && pageSwitcherSelect && (
                      <div className={styles.pageSwitcherSelectNextToTitle}>
                        <Select
                          {...pageSwitcherSelect}
                          variant="secondary"
                          reversed
                          fullWidth
                        />
                      </div>
                    )}
                  </>
                </div>
              </div>
              {(primaryAction ||
                defaultAction ||
                secondaryActions ||
                secondaryOverflowMenuItems) && (
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
              {(sectionTitle ||
                sectionTitleDescription ||
                renderSectionTitle) && (
                <div className={styles.sectionTitleContainer}>
                  <div className={styles.sectionTitleInner}>
                    {!!renderSectionTitle
                      ? renderSectionTitle({
                          sectionTitle,
                          sectionTitleAutomationId,
                          sectionTitleDescription,
                          sectionTitleDescriptionAutomationId,
                        })
                      : defaultRenderSectionTitle(
                          sectionTitle,
                          sectionTitleDescription,
                          variant,
                          sectionTitleAutomationId,
                          sectionTitleDescriptionAutomationId
                        )}
                  </div>
                </div>
              )}
              {renderNavigationTabs(
                navigationTabs,
                collapseNavigationArea,
                title
              )}
              {(secondaryActions || secondaryOverflowMenuItems) && (
                <SecondaryActions
                  secondaryActions={secondaryActions}
                  secondaryOverflowMenuItems={secondaryOverflowMenuItems}
                  reversed={isReversed(variant)}
                />
              )}
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
              ? primaryAction.iconPosition
              : undefined
          }
        />
      </div>
    </>
  )
}

TitleBlockZen.displayName = "TitleBlockZen"
