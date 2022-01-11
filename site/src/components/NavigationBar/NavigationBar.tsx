import classNames from "classnames"
import * as React from "react"
import Media from "react-media"
import { Brand } from "@kaizen/brand"
import { Icon } from "@kaizen/component-library/components/Icon"
import caMonogramIcon from "@kaizen/component-library/icons/ca-monogram.icon.svg"
import { ControlledOffCanvas } from "../OffCanvas"
import { MOBILE_QUERY } from "./constants"
import { NavigationItem } from "./types"

import styles from "./NavigationBar.module.scss"
import badgeStyles from "./components/Badge.module.scss"

type Props = {
  links?: NavigationItem[]
}

/**
 * @deprecated NavigationBar is deprecated. See https://github.com/cultureamp/unified-navigation instead
 */
class NavigationBar extends React.Component<Props, unknown> {
  static displayName = "NavigationBar"

  render() {
    const { links } = this.props

    return (
      <Media query={MOBILE_QUERY}>
        {(matches: boolean) =>
          matches ? (
            <ControlledOffCanvas
              links={links}
              heading="Menu"
              menuId="menu"
              headerComponent={
                <div
                  className={classNames(badgeStyles.badge, badgeStyles.kaizen)}
                >
                  <a href={"/"}>
                    <Icon icon={caMonogramIcon} title="Culture Amp" />
                  </a>
                </div>
              }
            />
          ) : (
            <header
              className={classNames(styles.navigationBar, styles.cultureamp)}
            >
              <span className={styles.caLogoContainer}>
                <Brand reversed variant="logo-horizontal" alt="Culture Amp" />
              </span>
              <nav className={styles.links}>
                {Boolean(links) && (
                  <ul>{links.map((link, i) => this.renderNavItem(link, i))}</ul>
                )}
              </nav>
            </header>
          )
        }
      </Media>
    )
  }

  renderNavItem(link: NavigationItem, index: number) {
    const linkWithSection = { ...link, props: { ...link.props } }

    return (
      <li
        key={index}
        className={classNames(styles.child, {
          [styles.active]: linkWithSection.props.active,
        })}
      >
        {linkWithSection}
      </li>
    )
  }
}

export default NavigationBar
