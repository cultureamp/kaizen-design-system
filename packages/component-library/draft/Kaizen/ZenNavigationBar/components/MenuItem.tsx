import { Icon } from "@kaizen/component-library"
import classNames from "classnames"
import React from "react"
import { LinkClickContext } from "../context"
import { MenuItemProps } from "../types"

const arrowForwardIcon = require("@kaizen/component-library/icons/arrow-forward.icon.svg")
  .default
const styles = require("./MenuItem.module.scss")

const MenuItem = ({
  label,
  url,
  method,
  onClick,
  showArrowIcon = false,
  active = false,
}: MenuItemProps) => {
  const { handleNavigationClick } = React.useContext(LinkClickContext)

  const handleItemClick = event => {
    onClick && onClick(event)
    handleNavigationClick && handleNavigationClick(event)
  }

  const renderArrowIcon = () => (
    <span className={styles.arrowIcon}>
      <Icon icon={arrowForwardIcon} role="presentation" />
    </span>
  )

  const renderForm = () => (
    // HTML forms only accept POST. We use a hidden `_method` input as a convention for emulating other HTTP verbs.
    // This behaviour is the same as what is implemented by UJS and supported by Rails:
    // https://github.com/rails/jquery-ujs
    <form method="post" action={url} onSubmit={handleItemClick}>
      <input name="_method" value={method} type="hidden" />
      <button type="submit" className={styles.itemBtn}>
        {label}
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
      {label}
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
