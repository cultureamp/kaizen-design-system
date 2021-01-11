import { Icon, Paragraph } from "@kaizen/component-library"
import classNames from "classnames"
import React from "react"
import arrowForwardIcon from "@kaizen/component-library/icons/arrow-forward.icon.svg"
import { NavBarContext } from "../context"
import { Badge, MenuItemProps } from "../types"

import styles from "../../styles/MenuItem.module.scss"

const MenuItem = ({
  label,
  url,
  method,
  onClick,
  showArrowIcon = false,
  active = false,
  badge,
}: MenuItemProps) => {
  const { handleNavigationChange } = React.useContext(NavBarContext)

  const handleItemClick = event => {
    onClick && onClick(event)
    handleNavigationChange && handleNavigationChange(event)
  }

  const renderArrowIcon = () => (
    <span className={styles.arrowIcon}>
      <Icon icon={arrowForwardIcon} role="presentation" />
    </span>
  )

  const renderBadge = ({ kind, text }: Badge) => (
    <div
      className={classNames(styles.badge, {
        [styles.badgeNotification]: kind === "notification",
        [styles.badgeNew]: kind === "new",
      })}
    >
      <Paragraph
        variant="extra-small"
        color={kind === "new" ? "dark" : "white"}
      >
        {text}
      </Paragraph>
    </div>
  )

  const renderForm = () => (
    // HTML forms only accept POST. We use a hidden `_method` input as a convention for emulating other HTTP verbs.
    // This behaviour is the same as what is implemented by UJS and supported by Rails:
    // https://github.com/rails/jquery-ujs
    <form method="post" action={url}>
      <input name="_method" value={method} type="hidden" />
      <button type="submit" className={styles.itemBtn}>
        <div className={styles.linkLabel}>
          {label}
          {badge && renderBadge(badge)}
        </div>
        {showArrowIcon && renderArrowIcon()}
      </button>
    </form>
  )

  const renderLink = () => (
    <a
      href={url}
      className={styles.item}
      tabIndex={0}
      onClick={handleItemClick}
    >
      <div className={styles.linkLabel}>
        {label}
        {badge && renderBadge(badge)}
      </div>
      {showArrowIcon && renderArrowIcon()}
    </a>
  )

  return (
    <li
      className={classNames(styles.container, {
        [styles.active]: active,
      })}
    >
      {method && method !== "get" ? renderForm() : renderLink()}
    </li>
  )
}

export default MenuItem
