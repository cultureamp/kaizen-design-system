import classNames from "classnames"
import * as React from "react"
import uuidv4 from "uuid/v4"
import { MenuProps } from "../../NavigationBar/types"
import styles from "./Menu.module.scss"

type Props = {
  section: string
  links: MenuProps
}

const Menu = ({ links, section }: Props) => {
  const renderNavItem = (link: MenuProps) => (
    <li
      key={`${link.heading}-${uuidv4()}`}
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
      {[links].map(link => renderNavItem(link))}
    </ul>
  )
}

export default Menu
