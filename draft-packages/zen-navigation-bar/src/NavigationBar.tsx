import * as React from "react"

import classNames from "classnames"
import Media from "react-media"
import uuid from "uuid/v4"
import { ZenControlledOffCanvas } from "./offCanvas"
import Badge from "./components/Badge"
import Link from "./components/Link"
import Menu from "./components/Menu"
import { NavBarContext } from "./context"
import {
  ColorScheme,
  Navigation,
  NavigationChange,
  NavigationItem,
} from "./types"

import styles from "./NavigationBar.module.scss"

type Props = {
  environment?: "production" | "staging" | "test" | "local"
  loading?: boolean
  colorScheme?: ColorScheme
  badgeHref?: string
  onNavigationChange: NavigationChange
  headerComponent?: {
    desktop: React.ReactElement
    mobile: React.ReactElement
  }
  footerComponent?: React.ReactNode
  children?: Navigation
}

type State = {
  mobileKey: number
}

class NavigationBar extends React.Component<Props, State> {
  static displayName = "NavigationBar"
  static Link = Link
  static Menu = Menu
  static defaultProps = {
    environment: "production",
    loading: false,
    colorScheme: "cultureamp",
    badgeHref: "/",
    onNavigationChange: () => null,
  }

  constructor(props) {
    super(props)
    this.state = { mobileKey: 1 }
  }

  render() {
    const {
      children,
      colorScheme = "cultureamp",
      headerComponent,
      onNavigationChange,
    } = this.props

    return (
      <NavBarContext.Provider
        value={{
          handleNavigationChange: event => {
            const navigationHref = event.currentTarget.getAttribute("href")
            if (navigationHref && navigationHref !== "#") {
              this.setState({
                mobileKey: this.state.mobileKey + 1,
              })
              onNavigationChange(event)
            }
          },
          hasExtendedNavigation: !!children?.secondary?.length,
        }}
      >
        <Media query={`(max-width: ${styles.caBreakpointMobileMax})`}>
          {(matches: boolean) =>
            matches ? (
              <ZenControlledOffCanvas
                key={this.state.mobileKey}
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
                    {headerComponent.desktop &&
                      React.cloneElement(headerComponent.desktop, {
                        colorScheme,
                      })}
                  </span>
                ) : (
                  this.renderBadge()
                )}
                {this.renderNav(children)}
              </header>
            )
          }
        </Media>
      </NavBarContext.Provider>
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
        key={section}
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
        colorScheme: this.props.colorScheme,
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
export default NavigationBar
