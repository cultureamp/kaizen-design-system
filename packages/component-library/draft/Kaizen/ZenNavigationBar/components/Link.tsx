import { Icon } from "@kaizen/component-library"
import classNames from "classnames"
import * as React from "react"
import { LinkClickContext } from "../context"
import { LinkProps } from "../types"

const arrowForwardIcon = require("@kaizen/component-library/icons/arrow-forward.icon.svg")
  .default
const styles = require("./Link.module.scss")

export default class Link extends React.PureComponent<LinkProps> {
  static displayName = "Link"
  static contextType = LinkClickContext
  static defaultProps = {
    iconOnly: false,
    active: false,
    opaque: false,
    small: false,
    new: false,
    target: "_self",
  }

  render = () => {
    const { handleNavigationClick } = this.context
    const {
      badge,
      icon,
      text,
      href,
      active,
      id,
      iconOnly,
      target,
      hasMenu,
      opaque,
      onClick,
      small,
      menuOpen,
    } = this.props

    return (
      <a
        className={classNames(styles.link, {
          [styles.active]: active,
          [styles.containsText]: !!text,
          [styles.opaque]: opaque,
          [styles.small]: small,
          [styles.menuOpen]: hasMenu && menuOpen,
        })}
        tabIndex={0}
        onClick={event => {
          onClick && onClick(event)
          handleNavigationClick && handleNavigationClick(event)
        }}
        {...{ href, id, target }}
      >
        {icon && (
          <span className={styles.linkIcon}>
            <Icon
              icon={icon}
              role={iconOnly ? "img" : "presentation"}
              title={iconOnly ? text : undefined}
            />
          </span>
        )}
        {text && !(icon && iconOnly) && (
          <span className={styles.linkText}>
            {text}
            {badge && (
              <span
                className={classNames(styles.badge, {
                  [styles.badgeNotification]: badge.kind === "notification",
                  [styles.badgeNew]: badge.kind === "new",
                })}
              >
                {badge.text}
              </span>
            )}
          </span>
        )}
        {hasMenu && (
          <span className={styles.menuIcon}>
            <Icon icon={arrowForwardIcon} role="presentation" />
          </span>
        )}
      </a>
    )
  }
}
