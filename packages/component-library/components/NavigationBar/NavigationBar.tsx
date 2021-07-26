import classNames from "classnames"
import * as React from "react"
import Media from "react-media"
import uuidv4 from "uuid/v4"
import { withDeprecatedComponent } from "@kaizen/react-deprecate-warning"
import { ControlledOffCanvas } from "../OffCanvas"
import {
  LocalBadge,
  namedBadge,
  ProductionBadge,
  StagingBadge,
  TestBadge,
} from "./components/Badge"
import Link from "./components/Link"
import Menu from "./components/Menu"
import { MOBILE_QUERY } from "./constants"
import { Navigation, NavigationItem } from "./types"

import styles from "./NavigationBar.module.scss"

type Props = {
  environment?: "production" | "staging" | "test" | "local"
  loading?: boolean
  colorScheme?: "cultureamp" | "kaizen" | "content"
  badgeHref?: string
  footerComponent?: React.ReactNode
  children?: Navigation
}

/**
 * @deprecated NavigationBar is deprecated. See https://github.com/cultureamp/unified-navigation instead
 */
class NavigationBar extends React.Component<Props, unknown> {
  static displayName = "NavigationBar"
  static Link = Link
  static Menu = Menu
  static defaultProps = {
    environment: "production",
    loading: false,
    colorScheme: "cultureamp",
    badgeHref: "/",
  }

  render() {
    const { children, colorScheme = "cultureamp" } = this.props

    return (
      <Media query={MOBILE_QUERY}>
        {(matches: boolean) =>
          matches ? (
            <ControlledOffCanvas
              headerComponent={this.renderBadge()}
              footerComponent={this.props.footerComponent}
              links={children}
              heading="Menu"
              menuId="menu"
            />
          ) : (
            <header
              className={classNames(styles.navigationBar, styles[colorScheme])}
            >
              {this.renderBadge()}
              {this.renderNav(children)}
            </header>
          )
        }
      </Media>
    )
  }

  renderNav(children?: Navigation) {
    if (!children) return null

    return (
      <nav className={styles.links}>
        {(Object.keys(children) as Array<keyof typeof children>).map(key =>
          this.renderNavSection(key, children[key] || [])
        )}
      </nav>
    )
  }

  renderNavSection(section: string, items: NavigationItem[]) {
    return (
      <ul
        key={`${section}-${uuidv4()}`}
        className={classNames({
          [styles.primary]: section === "primary",
          [styles.secondary]: section === "secondary",
          [styles.final]: section === "final",
        })}
      >
        {items.map(item => this.renderNavItem(item, section))}
      </ul>
    )
  }

  renderNavItem(link: NavigationItem, section: string) {
    const linkWithSection = { ...link, props: { ...link.props, section } }

    const key =
      "href" in linkWithSection.props
        ? linkWithSection.props.href
        : linkWithSection.props.heading

    return (
      <li
        key={`${key}-${uuidv4()}`}
        className={classNames(styles.child, {
          [styles.active]: linkWithSection.props.active,
        })}
      >
        {linkWithSection}
      </li>
    )
  }

  renderBadge() {
    const {
      environment = "production",
      loading = false,
      badgeHref = "/",
      colorScheme = "kaizen",
    } = this.props

    const badges = {
      production: ProductionBadge,
      staging: StagingBadge,
      test: TestBadge,
      local: LocalBadge,
    }

    const Badge = badges[environment] || namedBadge(environment)

    return (
      <Badge loading={loading} href={badgeHref} colorScheme={colorScheme} />
    )
  }
}

export default withDeprecatedComponent(NavigationBar, {
  warning:
    "NavigationBar is deprecated. See https://github.com/cultureamp/unified-navigation instead",
})
