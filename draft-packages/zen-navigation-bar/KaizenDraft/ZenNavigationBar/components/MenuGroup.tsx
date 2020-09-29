import classNames from "classnames"
import React from "react"
import uuid from "uuid/v4"
import { MenuGroupProps, MenuItemProps } from "../types"
import Link from "./Link"
import MenuItem from "./MenuItem"

import styles from "./MenuGroup.module.scss"

const MenuGroup = ({
  title,
  items,
  first = false,
  offCanvas,
}: MenuGroupProps) => {
  const renderOffCanvasMenuItem = (item: MenuItemProps) => (
    <Link
      key={`${item.url}-${uuid()}`}
      text={item.label}
      href={item.url}
      badge={item.badge}
    />
  )

  const renderOffCanvasMenuGroup = () => (
    <ul
      className={classNames(styles.container, {
        [styles.offCanvas]: true,
        [styles.firstMenuItem]: first,
      })}
    >
      <h4 className={styles.title}>{title}</h4>
      {items.map(renderOffCanvasMenuItem)}
    </ul>
  )

  const renderMenuGroup = () => (
    <li className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
      <ul className={styles.subList}>
        {items.map(item => (
          <MenuItem key={`${item.url}-${uuid()}`} {...item} />
        ))}
      </ul>
    </li>
  )

  return offCanvas ? renderOffCanvasMenuGroup() : renderMenuGroup()
}

export default MenuGroup
