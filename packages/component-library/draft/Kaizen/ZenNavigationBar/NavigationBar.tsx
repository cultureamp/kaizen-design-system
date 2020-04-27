import * as React from "react"

import { ZenControlledOffCanvas } from "@kaizen/component-library/draft/Kaizen/ZenOffCanvas"
import classNames from "classnames"
import Media from "react-media"
import uuid from "uuid/v4"
import {
  LocalBadge,
  namedBadge,
  ProductionBadge,
  StagingBadge,
  TestBadge,
} from "./components/Badge"
import Link from "./components/Link"
import Menu from "./components/Menu"
import { Navigation, NavigationItem } from "./types"

const styles = require("./NavigationBar.module.scss")

type Props = {
  environment?: "production" | "staging" | "test" | "local"
  loading?: boolean
  colorScheme?: "cultureamp" | "kaizen" | "content"
  badgeHref?: string
  headerComponent?: {
    desktop: React.ReactNode
    mobile: React.ReactNode
  }
  footerComponent?: React.ReactNode
  children?: Navigation
  mobileMaxWidth?: number
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
    mobileMaxWidth: 767,
  }

  render() {
    const {
      children,
      colorScheme = "cultureamp",
      headerComponent,
      mobileMaxWidth,
    } = this.props

    return (
      <Media query={`(max-width: ${mobileMaxWidth}px)`}>
        {(matches: boolean) =>
          matches ? (
            <ZenControlledOffCanvas
              headerComponent={
                headerComponent ? headerComponent.mobile : this.renderBadge()
              }
              footerComponent={this.props.footerComponent}
              links={children}
              heading="Menu"
              menuId="menu"
            />
          ) : (
            <header
              className={classNames(styles.navigationBar, styles[colorScheme])}
            >
              {headerComponent ? (
                <span className={styles.headerSlot}>
                  {headerComponent.desktop}
                </span>
              ) : (
                this.renderBadge()
              )}
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
        {Object.keys(children).map(key =>
          this.renderNavSection(key, children[key])
        )}
      </nav>
    )
  }

  renderNavSection(section: string, items: NavigationItem[]) {
    return items.length > 0 ? (
      <ul
        key={`${section}-${uuid()}`}
        className={classNames({
          [styles.primary]: section === "primary",
          [styles.secondary]: section === "secondary",
          [styles.final]: section === "final",
        })}
      >
        {items.map(item => this.renderNavItem(item, section))}
      </ul>
    ) : null
  }

  renderNavItem(link: NavigationItem, section) {
    const { props: linkProps } = link
    const isFinal = section === "final"
    const linkWithProps = {
      ...link,
      props: { ...linkProps, opaque: isFinal, small: isFinal },
    }
    const key = "href" in linkProps ? linkProps.href : linkProps.heading

    return (
      <li
        key={`${key}-${uuid()}`}
        className={classNames(styles.child, {
          [styles.active]: linkProps.active,
        })}
      >
        {linkWithProps}
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
