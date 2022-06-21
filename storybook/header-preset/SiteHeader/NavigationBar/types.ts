import React from "react"

export type NavigationItem = React.ReactElement<LinkProps>

type LinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => void

export type LinkProps = {
  icon?: React.SVGAttributes<SVGSymbolElement>
  text?: string
  iconOnly?: boolean
  href: string
  active?: boolean
  id?: string
  onClick?: LinkClick
  target?: "_self" | "_blank"
}
