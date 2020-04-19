import { default as React, ReactElement } from "react"

export type Navigation = {
  primary?: NavigationItem[]
  secondary?: NavigationItem[]
  final?: NavigationItem[]
}

export type NavigationItem = ReactElement<LinkProps> | ReactElement<MenuProps>

export type LinkProps = {
  icon?: React.SVGAttributes<SVGSymbolElement>
  text?: string
  iconOnly?: boolean
  href: string
  active?: boolean
  id?: string
  secondary?: boolean
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
  target?: "_self" | "_blank"
  hasMenu?: boolean
  badge?: {
    kind: "new" | "notification"
    text: string
  }
}

export type MenuProps = {
  header?: React.ReactElement<any>
  items: Array<MenuItem | MenuGroup>
  automationId?: string
  heading: string
  mobileEnabled?: boolean
  active?: boolean
}

export type MenuItem = {
  label: string
  url: string
  method?: "get" | "post" | "put" | "delete"
}

export type MenuGroup = {
  title: string
  items: MenuItem[]
}
