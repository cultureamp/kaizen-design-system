import classNames from "classnames"
import * as React from "react"
import { MenuProps } from "../../NavigationBar/types"

const styles = require("./Menu.module.scss")

type Props = {
  section: string
  links: MenuProps
}

const Menu = ({ links, section }: Props) => {
  const renderNavItem = (link: MenuProps, index) => (
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
      className={classNames({
        [styles.primary]: section === "primary",
      })}
    >
      {[links].map((link, index) => renderNavItem(link, index))}
    </ul>
  )
}

export default Menu
