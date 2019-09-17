const iconStyles = require("@cultureamp/kaizen-component-library/components/Icon/Icon.module.scss")
import classnames from "classnames"
import GatsbyLink from "gatsby-link"
import * as React from "react"
const styles = require("./Link.scss")

export const Link = ({ to, children }) => (
  <GatsbyLink
    to={to}
    className={classnames(styles.link, iconStyles.interactiveIconWrapper)}
  >
    {children}
  </GatsbyLink>
)

export const ExternalLink = ({ to, children }) => (
  <a
    href={to}
    className={classnames(styles.link, iconStyles.interactiveIconWrapper)}
  >
    {children}
  </a>
)

export const ActionLink = ({ action, children }) => (
  <button
    onClick={action}
    className={classnames(styles.buttonLink, iconStyles.interactiveIconWrapper)}
    // Prevent the element from being left in an "active" state after the click is complete.
    onMouseDown={e => e.preventDefault()}
  >
    {children}
  </button>
)

export default Link
