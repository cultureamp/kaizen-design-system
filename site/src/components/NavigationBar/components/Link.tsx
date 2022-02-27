import classNames from "classnames"
import * as React from "react"
import { Icon } from "@kaizen/component-library/components/Icon"
import chevronRightIcon from "@kaizen/component-library/icons/chevron-right.icon.svg"

import { LinkProps } from "../types"
import styles from "./Link.module.scss"
import Indicator from "./Indicator"

class Link extends React.PureComponent<LinkProps> {
  static displayName = "Link"
  static defaultProps = {
    iconOnly: false,
    active: false,
    secondary: false,
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
      section,
      showIndicator,
    } = this.props

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <a
        className={classNames(styles.link, {
          [styles.active]: active,
          [styles.containsText]: text !== "",
          [styles.secondary]: section === "secondary",
        })}
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
            {showIndicator && hasMenu && <Indicator />}
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
            <Icon icon={chevronRightIcon} role="presentation" />
          </span>
        )}
      </a>
    )
  }
}

export default Link
