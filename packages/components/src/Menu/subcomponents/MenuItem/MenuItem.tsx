import React from "react"
import classnames from "classnames"
import styles from "./MenuItem.module.scss"

export type MenuItemProps = {
  label: string
  href?: string
  // Only applicable if href is supplied above
  target?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  icon?: JSX.Element
  destructive?: boolean
  disabled?: boolean
  /**
   * @deprecated use data-test-id
   */
  automationId?: string
  /**
   * Not recommended - this was added for use in exceptional cases like the navigation bar, which needs
   * to highlight which page the user is currently on. By design, Menus don't have active items,
   * because they are supposed to be a bunch of links/actions.
   */
  isActive?: boolean
  "data-testid"?: string
}

export const MenuItem = ({
  label,
  icon,
  destructive,
  disabled,
  onClick,
  href,
  target,
  isActive,
  "data-testid": dataTestId,
}: MenuItemProps): JSX.Element => {
  const wrappedLabel = <span className={styles.menuItem__Label}>{label}</span>
  const iconNode = icon && <span className={styles.menuItem__Icon}>{icon}</span>

  const className = classnames(
    styles.menuItem,
    destructive && styles["menuItem--destructive"],
    disabled && styles["menuItem--disabled"],
    isActive && styles["menuItem--active"]
  )

  if (disabled) {
    return (
      <li className={styles.menuListItem}>
        <button
          type="button"
          disabled={true}
          className={className}
          data-testid={dataTestId}
        >
          {iconNode}
          {wrappedLabel}
        </button>
      </li>
    )
  }

  if (href) {
    return (
      <li className={styles.menuListItem}>
        <a
          href={href}
          className={className}
          target={target}
          // this tells screenreaders that this link represents the current page
          // (only intended for use in things like a nav with dropdowns)
          aria-current={isActive ? "page" : undefined}
          data-testid={dataTestId}
        >
          {iconNode}
          {wrappedLabel}
        </a>
      </li>
    )
  }

  return (
    <li className={styles.menuListItem}>
      <button
        type="button"
        onClick={onClick}
        className={className}
        data-testid={dataTestId}
      >
        {iconNode}
        {wrappedLabel}
      </button>
    </li>
  )
}

MenuItem.displayName = "MenuItem"
