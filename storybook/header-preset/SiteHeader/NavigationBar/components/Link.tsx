import React from "react"
import classNames from "classnames"
import { Icon } from "../../../../../packages/component-library/components/Icon"
import { LinkProps } from "../types"
import styles from "./Link.module.scss"

class Link extends React.PureComponent<LinkProps> {
  static displayName = "Link"
  static defaultProps = {
    iconOnly: false,
    active: false,
    new: false,
    target: "_self",
  }

  render = (): JSX.Element => {
    const { icon, text, href, active, id, onClick, iconOnly, target } =
      this.props

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <a
        className={classNames(styles.link, {
          [styles.active]: active,
          [styles.containsText]: text !== "",
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
          <span className={styles.linkText}>{text}</span>
        )}
      </a>
    )
  }
}

export default Link
