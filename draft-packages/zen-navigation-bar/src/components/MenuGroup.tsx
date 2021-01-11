import classNames from "classnames"
import React from "react"
import uuid from "uuid/v4"
import { MenuGroupProps, MenuItemProps } from "../types"
import styles from "../../styles/MenuGroup.module.scss"
import Link from "./Link"
import MenuItem from "./MenuItem"

const MenuGroup = ({
  title,
  items,
  first = false,
  offCanvas,
}: MenuGroupProps) => {
  const renderOffCanvasMenuItem = (item: MenuItemProps, index: number) => (
    <Link
      // Unfortunately, I needed to use the array index,
      // against react best practices (https://reactjs.org/docs/lists-and-keys.html)
      // This is because the menu items have no unique identifier.
      key={`${item.url}-${index}`}
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
