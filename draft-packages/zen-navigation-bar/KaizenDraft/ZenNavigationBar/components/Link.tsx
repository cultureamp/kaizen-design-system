import { Heading, Icon } from "@kaizen/component-library"
import classNames from "classnames"
import * as React from "react"
import ReactTooltip from "react-tooltip"
import uuid from "uuid/v4"
import { NavBarContext } from "../context"
import { LinkProps } from "../types"

const arrowForwardIcon = require("@kaizen/component-library/icons/arrow-forward.icon.svg")
  .default
const styles = require("./Link.module.scss")

export default class Link extends React.PureComponent<LinkProps> {
  static displayName = "Link"
  static contextType = NavBarContext
  static defaultProps = {
    iconOnly: false,
    active: false,
    opaque: false,
    small: false,
    new: false,
    content: false,
    target: "_self",
  }

  render = () => {
    const { handleNavigationChange, hasExtendedNavigation } = this.context
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
      colorScheme,
      tooltip,
    } = this.props

    const toolId = uuid()

    return (
      <>
        {icon && small && (
          <ReactTooltip
            className={hasExtendedNavigation}
            id={toolId}
            place={"left"}
            effect={"solid"}
          >
            <span className={styles.tooltip}>
              <Heading color="white" variant="heading-6">
                {text}
              </Heading>
              {tooltip && tooltip}
            </span>
          </ReactTooltip>
        )}

        <a
          className={classNames(styles.link, {
            [styles.active]: active,
            [styles.containsText]: !!text,
            [styles.opaque]: opaque,
            [styles.small]: small,
            [styles.menuOpen]: hasMenu && menuOpen,
            [styles[colorScheme]]: !!colorScheme,
            [styles.extendedNavigation]: hasExtendedNavigation,
          })}
          tabIndex={0}
          onClick={event => {
            onClick && onClick(event)
            handleNavigationChange && handleNavigationChange(event)
          }}
          {...{
            href,
            id,
            target,
            ...(!!icon && { "data-tip": true, "data-for": toolId }),
          }}
        >
          <span className={styles.hoverArea}>
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
              <span className={classNames(styles.linkText)}>
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
          </span>
        </a>
      </>
    )
  }
}
