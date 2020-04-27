import React from "react"

import classNames from "classnames"

import { Icon } from "@kaizen/component-library"
import { MenuItemProps } from "../types"

const arrowForwardIcon = require("@kaizen/component-library/icons/arrow-forward.icon.svg")
  .default
const styles = require("./MenuItem.module.scss")

const MenuItem = ({
  label,
  url,
  method,
  showArrowIcon = false,
  onLinkClick,
  active = false,
}: MenuItemProps) => {
  const renderArrowIcon = () => (
    <span className={styles.arrowIcon}>
      <Icon icon={arrowForwardIcon} role="presentation" />
    </span>
  )

  const renderForm = () => (
    // HTML forms only accept POST. We use a hidden `_method` input as a convention for emulating other HTTP verbs.
    // This behaviour is the same as what is implemented by UJS and supported by Rails:
    // https://github.com/rails/jquery-ujs
    <form method="post" action={url}>
      <input name="_method" value={method} type="hidden" />
      <button type="submit" className={styles.itemBtn}>
        {label}
        {showArrowIcon && renderArrowIcon()}
      </button>
    </form>
  )

  const renderLink = () => (
    <a href={url} className={styles.item} tabIndex={0} onClick={onLinkClick}>
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
