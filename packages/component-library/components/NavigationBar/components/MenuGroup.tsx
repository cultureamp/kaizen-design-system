import React from "react"

import classNames from "classnames"
import { MenuItemProps } from "../types"
import Link from "./Link"
import MenuItem from "./MenuItem"

const styles = require("./MenuGroup.module.scss")

type Props = {
  title: string
  items: MenuItemProps[]
  index: number
  offCanvas?: boolean
}

const MenuGroup = ({ title, items, index, offCanvas }: Props) => {
  const renderOffCanvasMenuItem = (item: MenuItemProps) => (
    <Link key={item.url} text={item.label} href={item.url} />
  )

  const renderOffCanvasMenuGroup = () => {
    return (
      <ul
        className={classNames(styles.container, {
          [styles.offCanvas]: true,
          [styles.firstMenuItem]: index === 0,
        })}
      >
        <h4 className={styles.title}>{title}</h4>
        {items.map(renderOffCanvasMenuItem)}
      </ul>
    )
  }

  const renderMenuGroup = () => (
    <li className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
      {items.map(item => (
        <MenuItem {...item} />
      ))}
    </li>
  )

  return offCanvas ? renderOffCanvasMenuGroup() : renderMenuGroup()
}

export default MenuGroup
