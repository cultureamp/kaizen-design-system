import { default as React, ReactElement } from "react"

export type Navigation = {
  primary?: NavigationItem[]
  secondary?: NavigationItem[]
  final?: NavigationItem[]
}

export type NavigationItem = ReactElement<LinkProps> | ReactElement<MenuProps>

export type LinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => void

export type LinkProps = {
  icon?: React.SVGAttributes<SVGSymbolElement>
  text?: string
  iconOnly?: boolean
  href: string
  active?: boolean
  id?: string
  onClick?: LinkClick
  target?: "_self" | "_blank"
  hasMenu?: boolean
  menuOpen?: boolean
  badge?: {
    kind: "new" | "notification"
    text: string
  }
  opaque?: boolean
  small?: boolean
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
  onLinkClick?: LinkClick
}

export type MenuItemProps = {
  label: string
  url: string
  method?: "get" | "post" | "put" | "delete"
  showArrowIcon?: boolean
  onLinkClick?: LinkClick
  active?: boolean
}

export type MenuGroupProps = {
  title: string
  items: MenuItemProps[]
  offCanvas?: boolean
  first?: boolean
  onLinkClick?: LinkClick
}
