import { default as React, ReactElement } from "react"

export type NavigationItem = ReactElement<LinkProps>

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
  section?: string
  showIndicator?: boolean
}

export type MenuItem = {
  label: string
  url: string
  active?: boolean
}

export type MenuGroup = {
  title: string
  items: MenuItem[]
}
