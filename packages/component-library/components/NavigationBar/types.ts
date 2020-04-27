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
  badge?: {
    kind: "new" | "notification"
    text: string
  }
  section?: string
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
}

export type MenuItem = {
  label: string
  url: string
  active?: boolean
  method?: "get" | "post" | "put" | "delete"
}

export type MenuGroup = {
  title: string
  items: MenuItem[]
}
