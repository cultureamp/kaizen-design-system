import { CompanyAvatarProps, GenericAvatarProps } from "~components/Avatar"
import { ButtonProps, CustomButtonProps } from "~components/Button"
import { MenuItemProps } from "~components/Menu"
import { Select } from "~components/Select"
import { NavigationTabProps } from "./subcomponents/NavigationTabs"

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
export type TitleBlockProps = {
  children?: React.ReactNode
  title: string
  variant?: TitleBlockVariant
  breadcrumb?: TitleBlockBreadcrumbType
  avatar?: JSX.Element | TitleBlockAvatarProps
  subtitle?: React.ReactNode
  sectionTitle?: string
  sectionTitleDescription?: string
  renderSectionTitle?: (renderProps: SectionTitleRenderProps) => React.ReactNode
  pageSwitcherSelect?: TitleBlockSelectProps
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
  | (TitleBlockMenuGroup & { badge?: TitleBlockBadgeProps })
  | ((TitleBlockButtonProps | TitleBlockCustomButtonProps) & {
      badge?: TitleBlockBadgeProps
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
  | TitleBlockMenuGroup
  | (
      | ButtonWithHrefNotOnClick
      | ButtonWithOnClickNotHref
      | TitleBlockCustomButtonProps
    )

export type TitleBlockBadgeProps = {
  text: string
  animateChange?: boolean
}

export type TitleBlockButtonProps = TitleBlockDistributiveOmit<
  ButtonProps,
  "onClick" | "component"
> & {
  onClick?: (e: any) => void
}

export type TitleBlockCustomButtonProps = TitleBlockDistributiveOmit<
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

export type ButtonWithHrefNotOnClick = TitleBlockDistributiveOmit<
  ButtonProps,
  "onClick"
>
export type ButtonWithOnClickNotHref = TitleBlockDistributiveOmit<
  TitleBlockButtonProps,
  "href"
>

export type TitleBlockMenuGroup = {
  label: string
  menuItems: TitleBlockMenuItemProps[]
}

export type TitleBlockSelectProps = React.ComponentProps<typeof Select>

/*
  This type exists to support omitting keys from a union or intersection type in a distributive manner. `Omit` out of the box will cause you to lose any union or intersection information about the type,
  thus you might lose the ability to access some fields that only exist conditionally based on another (e.g. discriminated unions).
  `T extends any ? Omit<T, K>` is a trick used to spread the action of Omit across every variant within the union or intersection.
  So, if T is something like `{foo: string} | {bar: string}`, it becomes `Omit<{foo: string}, K> | Omit<{bar: string}, K>
  https://davidgomes.com/pick-omit-over-union-types-in-typescript/
*/
export type TitleBlockDistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never

export type TitleBlockAvatarProps =
  | Omit<GenericAvatarProps, "size">
  | Omit<CompanyAvatarProps, "size">

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

export type TitleBlockVariant = "admin" | "education" // the default is wisteria bg (AKA "reporting")

export type NavigationTabs = Array<React.ReactElement<NavigationTabProps>>

export type TextDirection = "ltr" | "rtl"

export type SurveyStatus = {
  text: string
  status:
    | "draft"
    | "live"
    | "scheduled"
    | "closed"
    | "sentimentPositive"
    | "default"
}

export type TitleBlockBreadcrumbType = {
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

export type TitleBlockBreadcrumbProps = {
  breadcrumb: TitleBlockBreadcrumbType
  automationId: string
  textAutomationId: string
  textDirection?: TextDirection
}

export type CustomBreadcrumbProps = TitleBlockBreadcrumbProps & {
  className: string
  children: React.ReactNode
}
