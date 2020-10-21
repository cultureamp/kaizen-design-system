import { default as React, ReactElement } from "react"

export type ColorScheme = "cultureamp" | "kaizen" | "content" | "admin"

export type Navigation = {
  primary?: NavigationItem[]
  secondary?: NavigationItem[]
  final?: NavigationItem[]
}

export type NavigationChange = (
  event: React.MouseEvent<HTMLAnchorElement>
) => void

export type NavigationItem = ReactElement<LinkProps> | ReactElement<MenuProps>

export type Badge = {
  kind: "new" | "notification"
  text: string
}

export type LinkProps = {
  icon?: React.SVGAttributes<SVGSymbolElement>
  text?: string
  iconOnly?: boolean
  href: string
  active?: boolean
  id?: string
  target?: "_self" | "_blank"
  hasMenu?: boolean
  onClick?: NavigationChange
  menuOpen?: boolean
  badge?: Badge
  opaque?: boolean
  small?: boolean
  colorScheme?: ColorScheme
  tooltip?: string
  showIndicator?: boolean
}

export type MenuProps = {
  header?: React.ReactElement<any>
  items: Array<MenuItemProps | MenuGroupProps>
  automationId?: string
  heading: string
  mobileEnabled?: boolean
  active?: boolean
  icon?: React.SVGAttributes<SVGSymbolElement>
  opaque?: boolean
  small?: boolean
  colorScheme?: ColorScheme
  showIndicator?: boolean
}

export type MenuItemProps = {
  label: string
  url: string
  method?: "get" | "post" | "put" | "delete"
  showArrowIcon?: boolean
  active?: boolean
  onClick?: NavigationChange
  badge?: Badge
}

export type MenuGroupProps = {
  title: string
  items: MenuItemProps[]
  offCanvas?: boolean
  first?: boolean
}
