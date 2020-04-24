import classNames from "classnames"
import * as React from "react"
import uuidv4 from "uuid/v4"
import { MenuProps } from "../../ZenNavigationBar/types"

const styles = require("./Menu.module.scss")

type Props = {
  section: string
  link: MenuProps
}

const Menu = ({ link, section }: Props) => {
  return (
    <div
      className={classNames(styles.menu, {
        [styles.primary]: section === "primary",
        [styles.secondary]: section === "secondary",
        [styles.active]: link.active,
      })}
      key={`${link.heading}-${uuidv4()}`}
    >
      {link}
    </div>
  )
}

export default Menu
