import { Icon } from "@cultureamp/kaizen-component-library"
const chevronRightIcon = require("@cultureamp/kaizen-component-library/icons/chevron-right.icon.svg")
  .default
import classNames from "classnames"
import * as React from "react"

const styles = require("./Link.module.scss")

export type LinkProps = {
  icon?: React.SVGAttributes<SVGSymbolElement>
  text?: string
  iconOnly?: boolean
  href: string
  active?: boolean
  id?: string
  secondary?: boolean
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
  target?: "_self" | "_blank"
  hasMenu?: boolean
  notificationText?: string
}

export default class Link extends React.PureComponent<LinkProps> {
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
      icon,
      text,
      href,
      active,
      id,
      onClick,
      secondary,
      iconOnly,
      target,
      hasMenu,
      notificationText,
    } = this.props

    return (
      <a
        className={classNames(styles.link, {
          [styles.active]: active,
          [styles.containsText]: text !== "",
          [styles.secondary]: secondary,
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
            {notificationText && (
              <span className={styles.notificationPill}>
                {notificationText}
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
