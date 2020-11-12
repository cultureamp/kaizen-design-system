import { Icon } from "@kaizen/component-library"
/**
 * Eslint throws a false negative for modules that use require. Ensure you
 * are importing @kaizen/component-library into your package before turning
 * this rule off.
 */
// eslint-disable-next-line import/no-extraneous-dependencies
import chevronRightIcon from "@kaizen/component-library/icons/chevron-right.icon.svg"

import classNames from "classnames"
import * as React from "react"

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
      <a
        className={classNames(styles.link, {
          [styles.active]: active,
          [styles.containsText]: text !== "",
          [styles.secondary]: section === "secondary",
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
