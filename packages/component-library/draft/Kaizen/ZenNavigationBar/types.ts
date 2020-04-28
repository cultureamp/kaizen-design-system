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
  target?: "_self" | "_blank"
  hasMenu?: boolean
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
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
}

export type MenuItemProps = {
  label: string
  url: string
  method?: "get" | "post" | "put" | "delete"
  showArrowIcon?: boolean
  active?: boolean
  onClick?: (
    event:
      | React.MouseEvent<HTMLAnchorElement>
      | React.FormEvent<HTMLFormElement>
  ) => void
}

export type MenuGroupProps = {
  title: string
  items: MenuItemProps[]
  offCanvas?: boolean
  first?: boolean
}
