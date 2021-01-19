import classNames from "classnames"
import * as React from "react"
import uuidv4 from "uuid/v4"
import { MenuProps } from "../../types"

import styles from "../../../styles/Menu.module.scss"

type Props = {
  section: string
  link: MenuProps
}

const Menu = ({ link, section }: Props) => (
  <div
    className={classNames(styles.menu, {
      [styles.final]: section === "final",
      [styles.active]: !!link.active,
    })}
    key={`${link.heading}-${uuidv4()}`}
  >
    {link}
  </div>
)

export default Menu
