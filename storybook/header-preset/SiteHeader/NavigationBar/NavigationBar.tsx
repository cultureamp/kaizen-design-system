import React from "react"
import classNames from "classnames"
import { Brand } from "../../../../packages/brand"
import { NavigationItem } from "./types"
import styles from "./NavigationBar.module.scss"

const NavItem: React.VFC<{ link: NavigationItem }> = ({ link }) => (
  <li
    className={classNames(styles.child, {
      [styles.active]: link.props.active,
    })}
  >
    {link}
  </li>
)

type NavigationBarProps = {
  logoUrl: string
  links: NavigationItem[]
}

export const NavigationBar: React.VFC<NavigationBarProps> = ({
  logoUrl,
  links,
}) => (
  <header className={classNames(styles.navigationBar, styles.cultureamp)}>
    <span className={styles.caLogoContainer}>
      <a href={logoUrl}>
        <Brand reversed variant="logo-horizontal" alt="Culture Amp" />
      </a>
    </span>
    <nav className={styles.links}>
      <ul>
        {links.map(link => (
          <NavItem key={link.props.text} link={link} />
        ))}
      </ul>
    </nav>
  </header>
)
