import React, { ReactNode } from "react"

export interface MenuProps {
  children: ReactNode
}

export const Menu = (props: MenuProps) => {
  const { children } = props
  return <div {...props}>{children}</div>
}
