import { Icon } from "@kaizen/component-library"
const arrowForwardIcon = require("@kaizen/component-library/icons/arrow-forward.icon.svg")
  .default
import classNames from "classnames"
import * as React from "react"

const styles = require("./Link.module.scss")
import { LinkProps } from "../types"

export default class Link extends React.PureComponent<LinkProps> {
  static displayName = "Link"
  static defaultProps = {
    iconOnly: false,
    active: false,
    opaque: false,
    small: false,
    new: false,
    target: "_self",
  }

  render = () => {
    const {
      badge,
      icon,
      text,
      href,
      active,
      id,
      onClick,
      iconOnly,
      target,
      hasMenu,
      opaque,
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
        {...{ href, id, onClick, target }}
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
