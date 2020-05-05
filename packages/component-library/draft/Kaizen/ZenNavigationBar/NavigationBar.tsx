import * as React from "react"

import { ZenControlledOffCanvas } from "@kaizen/component-library/draft/Kaizen/ZenOffCanvas"
import classNames from "classnames"
import Media from "react-media"
import uuid from "uuid/v4"
import Badge from "./components/Badge"
import Link from "./components/Link"
import Menu from "./components/Menu"
import { LinkClickContext } from "./context"
import { Navigation, NavigationChange, NavigationItem } from "./types"

const styles = require("./NavigationBar.module.scss")

type Props = {
  environment?: "production" | "staging" | "test" | "local"
  loading?: boolean
  colorScheme?: ColorScheme
  badgeHref?: string
  onNavigationChange: NavigationChange
  headerComponent?: {
    desktop: React.ReactNode
    mobile: React.ReactNode
  }
  footerComponent?: React.ReactNode
  children?: Navigation
  mobileMaxWidth?: number
}

export type ColorScheme = "cultureamp" | "kaizen" | "content"

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
    onNavigationChange: () => null,
  }

  render() {
    const {
      children,
      colorScheme = "cultureamp",
      headerComponent,
      mobileMaxWidth,
      onNavigationChange,
    } = this.props

    return (
      <LinkClickContext.Provider
        value={{ handleNavigationChange: onNavigationChange }}
      >
        <Media query={`(max-width: ${mobileMaxWidth}px)`}>
          {(matches: boolean) =>
            matches ? (
              <ZenControlledOffCanvas
                headerComponent={this.renderBadge()}
                footerComponent={this.props.footerComponent}
                productSwitcher={headerComponent && headerComponent.mobile}
                links={children}
                heading="Menu"
                menuId="menu"
                colorScheme={colorScheme}
              />
            ) : (
              <header
                className={classNames(
                  styles.navigationBar,
                  styles[colorScheme]
                )}
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
      </LinkClickContext.Provider>
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
      props: {
        ...linkProps,
        opaque: isFinal,
        small: isFinal,
        content: this.props.colorScheme === "content",
      },
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
      loading = false,
      badgeHref = "/",
      colorScheme = "kaizen",
    } = this.props

    return (
      <Badge loading={loading} href={badgeHref} colorScheme={colorScheme} />
    )
  }
}
