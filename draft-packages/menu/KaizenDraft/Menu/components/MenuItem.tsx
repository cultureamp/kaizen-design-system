import React from "react"
import classnames from "classnames"
import { Icon } from "@kaizen/component-library"
import styles from "./MenuItem.module.scss"

export type MenuItemProps = {
  label: string
  /**
   * Historically, we only had `action`, which would accept either a string for
   * the href, or a function for an onClick callback.
   * The limitation here was that it prevented us from having
   * both a href and an onClick callback at the same time.
   * This field has been deprecated in favour of `onClick` and `href`.
   * @deprecated
   */
  action?: string | ((e: React.MouseEvent<HTMLButtonElement>) => void)
  href?: string
  // Only applicable if href is supplied above
  target?: string
  onClick?:
    | ((e: React.MouseEvent<HTMLButtonElement>) => void)
    | ((e: React.MouseEvent<HTMLAnchorElement>) => void)
  icon?: React.SVGAttributes<SVGSymbolElement>
  destructive?: boolean
  disabled?: boolean
  automationId?: string
  /**
   * Not recommended - this was added for use in exceptional cases like the navigation bar, which needs
   * to highlight which page the user is currently on. By design, Menus don't have active items,
   * because they are supposed to be a bunch of links/actions.
   */
  isActive?: boolean
}

export const MenuItem = (props: MenuItemProps): JSX.Element => {
  const {
    label,
    icon,
    action,
    destructive,
    disabled,
    automationId,
    onClick,
    href,
    target,
    isActive,
  } = props

  const wrappedLabel = <span className={styles.menuItem__Label}>{label}</span>
  const iconNode = icon && (
    <span className={styles.menuItem__Icon}>
      <Icon icon={icon} role="presentation" />
    </span>
  )

  const className = classnames(
    styles.menuItem,
    destructive && styles["menuItem--destructive"],
    disabled && styles["menuItem--disabled"],
    isActive && styles["menuItem--active"]
  )

  // Use the legacy `action` property, if the new onClick or href as not supplied
  const onClickCombined =
    onClick != null ? onClick : typeof action !== "string" ? action : undefined
  const hrefCombined =
    href != null ? href : typeof action === "string" ? action : undefined

  if (disabled) {
    return (
      <li className={styles.menuListItem}>
        <button
          type="button"
          disabled={true}
          className={className}
          data-automation-id={automationId}
        >
          {iconNode}
          {wrappedLabel}
        </button>
      </li>
    )
  }

  if (hrefCombined) {
    return (
      <li className={styles.menuListItem}>
        <a
          href={hrefCombined}
          onClick={
            onClickCombined as (e: React.MouseEvent<HTMLAnchorElement>) => void
          }
          className={className}
          data-automation-id={automationId}
          target={target}
          // this tells screenreaders that this link represents the current page
          // (only intended for use in things like a nav with dropdowns)
          aria-current={isActive ? "page" : undefined}
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
        onClick={
          onClickCombined as (e: React.MouseEvent<HTMLButtonElement>) => void
        }
        className={className}
        data-automation-id={automationId}
      >
        {iconNode}
        {wrappedLabel}
      </button>
    </li>
  )
}

MenuItem.displayName = "MenuItem"
