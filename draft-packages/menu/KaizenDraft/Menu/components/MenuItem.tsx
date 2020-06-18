import { Icon } from "@kaizen/component-library"
import classNames from "classnames"
import * as React from "react"

const styles = require("./MenuContent.module.scss")

const MenuItem = (props: {
  label: string
  action: string | ((e: React.MouseEvent<HTMLAnchorElement>) => void)
  icon?: React.SVGAttributes<SVGSymbolElement>
  hoverIcon?: boolean
  active?: boolean
  destructive?: boolean
  disabled?: boolean
  automationId?: string
}) => {
  const {
    label,
    icon,
    hoverIcon,
    action,
    active,
    destructive,
    disabled,
    automationId,
  } = props

  const wrappedLabel = <span className={styles.menuItem__Label}>{label}</span>
  const iconNode = icon && (
    <span className={styles.menuItem__Icon}>
      <Icon icon={icon} role="presentation" />
    </span>
  )

  const className = classNames({
    [styles.menuItem]: true,
    [styles.hoverIcon]: icon && hoverIcon,
    [styles["menuItem--active"]]: active,
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
