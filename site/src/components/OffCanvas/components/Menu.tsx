import classNames from "classnames"
import * as React from "react"
import { MenuProps } from "../../NavigationBar/types"
import styles from "./Menu.module.scss"

type Props = {
  section: string
  links: MenuProps
}

const Menu = ({ links, section }: Props) => {
  const renderNavItem = (link: MenuProps, index: number) => (
    <li
      key={index}
      className={classNames({
        [styles.active]: link.active,
      })}
    >
      {link}
    </li>
  )

  return (
    <ul
      className={classNames(styles.menu, {
        [styles.primary]: section === "primary",
      })}
    >
      {[links].map((link, i) => renderNavItem(link, i))}
    </ul>
  )
}

export default Menu
