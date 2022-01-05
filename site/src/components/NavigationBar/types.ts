import { default as React, ReactElement } from "react"

export type Navigation = {
  primary?: NavigationItem[]
  secondary?: NavigationItem[]
  final?: NavigationItem[]
}

export type NavigationItem = ReactElement<LinkProps> | ReactElement<MenuProps>

export type LinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => void

type Badge = {
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
  onClick?: LinkClick
  target?: "_self" | "_blank"
  hasMenu?: boolean
  badge?: Badge
  section?: string
  showIndicator?: boolean
}

export type MenuProps = {
  active?: boolean
  header?: React.ReactElement<any>
  items: Array<MenuItem | MenuGroup>
  automationId?: string
  heading: string
  mobileEnabled?: boolean
  section?: string
  onLinkClick?: LinkClick
  showIndicator?: boolean
  badge?: Badge
}

export type MenuItem = {
  label: string
  url: string
  active?: boolean
  method?: "get" | "post" | "put" | "delete"
  badge?: Badge
}

export type MenuGroup = {
  title: string
  items: MenuItem[]
}
