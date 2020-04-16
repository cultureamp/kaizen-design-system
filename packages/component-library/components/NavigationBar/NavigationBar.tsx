import { ControlledOffCanvas } from "@kaizen/component-library"
import classNames from "classnames"
import * as React from "react"
import Media from "react-media"
import {
  LocalBadge,
  namedBadge,
  ProductionBadge,
  StagingBadge,
  TestBadge,
} from "./components/Badge"
import Link, { LinkProps } from "./components/Link"
import Menu, { MenuProps } from "./components/Menu"
import { MOBILE_QUERY } from "./constants"

const styles = require("./NavigationBar.module.scss")

type SupportedChild =
  | React.ReactElement<LinkProps>
  | React.ReactElement<MenuProps>

type Children = {
  primary?: SupportedChild[]
  secondary?: SupportedChild[]
  final?: SupportedChild[]
}

type Props = {
  environment?: "production" | "staging" | "test" | "local"
  loading?: boolean
  colorScheme?: "cultureamp" | "kaizen" | "content"
  badgeHref?: string
  footerComponent?: React.ReactNode
  children?: Children
}

export default class NavigationBar extends React.Component<Props> {
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

  renderNav(children?: Children) {
    if (!children) return null;
    return (
      <nav className={styles.links}>
        {Object.keys(children).map(key =>
          this.renderNavSection(key, children[key])
        )}
      </nav>
    )
  }

  renderNavSection(section, items: SupportedChild[]) {
    return (
      <ul
        className={classNames({
          [styles.primary]: section === "primary",
          [styles.secondary]: section === "secondary",
          [styles.final]: section === "final",
        })}
      >
        {items.map((item, index) => this.renderNavItem(item, index))}
      </ul>
    )
  }

  renderNavItem(link: SupportedChild, index) {
    return (
      <li
        key={link.key || index}
        className={classNames(styles.child, {
          [styles.active]: link.props.active,
        })}
      >
        {link}
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
