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

type Props = {
  environment?: "production" | "staging" | "test" | "local"
  loading?: boolean
  colorScheme?: "cultureamp" | "kaizen"
  badgeHref?: string
  footerComponent?: React.ReactNode
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
    const links: React.ReactElement<LinkProps>[] = []
    const otherChildren: React.ReactElement<MenuProps>[] = []

    React.Children.toArray(children).forEach(child => {
      if (!child) {
        return
      }

      // Because react-hot-loader wraps the type, and uglify changes the type name,
      // we compare the displayName rather than comparing the type of name directly.
      const childElement = child as any

      if (
        childElement.type &&
        childElement.type.displayName === Link.displayName
      ) {
        links.push(child as React.ReactElement<LinkProps>)
      } else if (
        childElement.type &&
        childElement.type.displayName === Menu.displayName
      ) {
        otherChildren.push(child as React.ReactElement<MenuProps>)
      } else {
        console.warn(
          "A child Element has been provided to <NavigationBar /> that is not of type `Menu` or `Link`."
        )
      }
    })

    return (
      <Media query={MOBILE_QUERY}>
        {(matches: boolean) =>
          matches ? (
            <ControlledOffCanvas
              headerComponent={this.renderBadge()}
              footerComponent={this.props.footerComponent}
              links={[...links, ...otherChildren]}
              heading="Menu"
              menuId="menu"
            />
          ) : (
            <header
              className={classNames(styles.navigationBar, styles[colorScheme])}
            >
              {this.renderBadge()}
              {this.renderLinks(links)}
              {this.renderOtherChildren(otherChildren)}
            </header>
          )
        }
      </Media>
    )
  }

  renderBadge() {
    const {
      environment = "production",
      loading = false,
      badgeHref = "/",
    } = this.props

    const badges = {
      production: ProductionBadge,
      staging: StagingBadge,
      test: TestBadge,
      local: LocalBadge,
    }

    const Badge = badges[environment] || namedBadge(environment)

    return <Badge loading={loading} href={badgeHref} />
  }

  renderLinks(links: React.ReactElement<LinkProps>[]) {
    const indexOfFirstSecondaryLink = links.findIndex(
      link => !!link.props.secondary
    )

    return (
      <nav className={styles.links}>
        <ul>
          {links.map((link: React.ReactElement<LinkProps>, index) => (
            <li
              key={link.key || index}
              className={classNames(styles.child, {
                [styles.active]: link.props.active,
                [styles.secondary]: link.props.secondary,
                [styles.first]: index === indexOfFirstSecondaryLink,
              })}
            >
              {link}
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  renderOtherChildren(otherChildren: SupportedChild[]) {
    return (
      <div className={styles.otherChildren}>
        {otherChildren.map((child, index) => (
          <div key={child.key || index} className={styles.child}>
            {child}
          </div>
        ))}
      </div>
    )
  }
}
