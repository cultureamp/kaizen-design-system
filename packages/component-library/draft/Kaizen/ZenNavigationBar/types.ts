import { default as React, ReactElement } from "react"

export type Navigation = {
  primary?: NavigationItem[]
  secondary?: NavigationItem[]
  final?: NavigationItem[]
}

export type NavigationChange = (
  event: React.MouseEvent<HTMLAnchorElement>
) => void

export type NavigationItem = ReactElement<LinkProps> | ReactElement<MenuProps>

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
  badge?: {
    kind: "new" | "notification"
    text: string
  }
  opaque?: boolean
  small?: boolean
  content?: boolean
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
}

export type MenuItemProps = {
  label: string
  url: string
  method?: "get" | "post" | "put" | "delete"
  showArrowIcon?: boolean
  active?: boolean
  onClick?: NavigationChange
}

export type MenuGroupProps = {
  title: string
  items: MenuItemProps[]
  offCanvas?: boolean
  first?: boolean
}

export type ColorScheme = "cultureamp" | "kaizen" | "content"
