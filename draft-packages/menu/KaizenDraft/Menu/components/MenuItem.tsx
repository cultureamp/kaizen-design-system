import { Icon } from "@kaizen/component-library"
import classNames from "classnames"
import * as React from "react"

import styles from "./MenuContent.module.scss"

export type MenuItemProps = {
  label: string
  action: string | ((e: React.MouseEvent<HTMLAnchorElement>) => void)
  icon?: React.SVGAttributes<SVGSymbolElement>
  destructive?: boolean
  disabled?: boolean
  automationId?: string
}

const MenuItem = (props: MenuItemProps) => {
  const { label, icon, action, destructive, disabled, automationId } = props

  const wrappedLabel = <span className={styles.menuItem__Label}>{label}</span>
  const iconNode = icon && (
    <span className={styles.menuItem__Icon}>
      <Icon icon={icon} role="presentation" />
    </span>
  )

  const className = classNames(styles.menuItem, {
    [styles["menuItem--destructive"]]: destructive,
    [styles["menuItem--disabled"]]: disabled,
  })

  if (disabled) {
    return (
      <div className={className} data-automation-id={automationId}>
        {iconNode}
        {wrappedLabel}
      </div>
    )
  }

  if (typeof action === "string") {
    return (
      <a href={action} className={className} data-automation-id={automationId}>
        {iconNode}
        {wrappedLabel}
      </a>
    )
  }

  return (
    <a
      href="#"
      onClick={action}
      className={className}
      data-automation-id={automationId}
    >
      {iconNode}
      {wrappedLabel}
    </a>
  )
}

MenuItem.displayName = "MenuItem"

export default MenuItem
