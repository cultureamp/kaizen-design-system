import React, { HTMLAttributes } from "react"

export type DropdownProps = HTMLAttributes<HTMLUListElement>

const DropdownMenu = (props: DropdownProps) => {
  const { children } = props
  return <ul {...props}>{children}</ul>
}

export default DropdownMenu
