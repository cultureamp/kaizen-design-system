/* !!! This component is deprecated. Please do not use for new code  !!! */

import React from "react"
import classnames from "classnames"
import { Icon } from "../Icon"

import styles from "./Menu.module.scss"

/**
 * @deprecated MenuItem is deprecated. Please use draft-menu instead (it has its own menu item component).
 */
const MenuItem = (props: {
  icon?: React.SVGAttributes<SVGSymbolElement>
  hoverIcon?: boolean
  active?: boolean
  destructive?: boolean
  children: React.ReactNode
  action: string | ((e: React.MouseEvent<HTMLAnchorElement>) => void)
  automationId?: string
}): JSX.Element => {
  const {
    icon,
    hoverIcon,
    children,
    action,
    active,
    destructive,
    automationId,
  } = props
  const isLink = typeof action === "string"

  const label = (
    <span className={styles.menuItem__Label}>
      {children}
      {isLink && "…"}
    </span>
  )
  const iconNode = icon && (
    <span className={styles.menuItem__Icon}>
      <Icon icon={icon} role="presentation" />
    </span>
  )

  const className = classnames(
    styles.menuItem,
    icon && hoverIcon && styles.hoverIcon,
    active && styles["menuItem--active"],
    destructive && styles["menuItem--destructive"]
  )

  if (typeof action === "string") {
    return (
      <a href={action} className={className} data-automation-id={automationId}>
        {label}
        {iconNode}
      </a>
    )
  }

  return (
    // Disabling instead of addressing because this component is deprecated.
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href="#"
      onClick={action}
      className={className}
      data-automation-id={automationId}
    >
      {label}
      {iconNode}
    </a>
  )
}
MenuItem.displayName = "MenuItem"

export default MenuItem
