import { MenuProps } from "@kaizen/component-library/draft/Kaizen/ZenNavigationBar/types"
import classNames from "classnames"
import * as React from "react"
import uuidv4 from "uuid/v4"

const styles = require("./Menu.module.scss")

type Props = {
  section: string
  link: MenuProps
}

const Menu = ({ link, section }: Props) => {
  return (
    <div
      className={classNames(styles.menu, {
        [styles.secondary]: section === "secondary",
        [styles.active]: !!link.active,
      })}
      key={`${link.heading}-${uuidv4()}`}
    >
      {link}
    </div>
  )
}

export default Menu
