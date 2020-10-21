import { Heading, Icon } from "@kaizen/component-library"
import classNames from "classnames"
import * as React from "react"
import Media from "react-media"
import ReactTooltip from "react-tooltip"
import uuid from "uuid/v4"
import { NavBarContext } from "../context"
import { LinkProps } from "../types"
import Indicator from "./Indicator"

import arrowForwardIcon from "@kaizen/component-library/icons/arrow-forward.icon.svg"
import styles from "./Link.module.scss"

class Link extends React.PureComponent<LinkProps> {
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
    showIndicator: false,
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
      showIndicator,
    } = this.props

    const toolId = uuid()

    return (
      <>
        {icon && small && (
          <Media
            query={`(max-width: ${styles.caBreakpointMobileMax}), (min-width: ${styles.navbarBreakpointExtendedMin})`}
          >
            {matches =>
              matches ? null : (
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
              )
            }
          </Media>
        )}

        <a
          className={classNames([
            styles.link,
            ...(colorScheme ? [styles[colorScheme]] : []),
            {
              [styles.active]: active,
              [styles.containsText]: !!text,
              [styles.opaque]: opaque,
              [styles.small]: small,
              [styles.menuOpen]: hasMenu && menuOpen,
              [styles.extendedNavigation]: hasExtendedNavigation,
            },
          ])}
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
            {showIndicator && !icon && <Indicator />}
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
export default Link
