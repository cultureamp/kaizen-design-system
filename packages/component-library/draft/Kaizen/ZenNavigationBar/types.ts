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
  section?: string
  onLinkClick?: LinkClick
}

export type MenuProps = {
  header?: React.ReactElement<any>
  items: Array<MenuItemProps | MenuGroupProps>
  automationId?: string
  heading: string
  mobileEnabled?: boolean
  active?: boolean
  section?: string
}

export type MenuItemProps = {
  label: string
  url: string
  method?: "get" | "post" | "put" | "delete"
  switcher?: boolean
  onLinkClick?: LinkClick
}

export type MenuGroupProps = {
  title: string
  items: MenuItemProps[]
}
