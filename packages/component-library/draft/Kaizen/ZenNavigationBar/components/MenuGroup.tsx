import React from "react"

import classNames from "classnames"
import { MenuGroupProps, MenuItemProps } from "../types"
import Link from "./Link"
import MenuItem from "./MenuItem"

const styles = require("./MenuGroup.module.scss")

const MenuGroup = ({
  title,
  items,
  first = false,
  offCanvas,
  onLinkClick,
}: MenuGroupProps) => {
  const renderOffCanvasMenuItem = (item: MenuItemProps) => (
    <Link
      key={item.url}
      text={item.label}
      href={item.url}
      onClick={onLinkClick}
    />
  )

  const renderOffCanvasMenuGroup = () => {
    return (
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
  }

  const renderMenuGroup = () => (
    <li className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
      {items.map(item => (
        <MenuItem {...item} onLinkClick={onLinkClick} />
      ))}
    </li>
  )

  return offCanvas ? renderOffCanvasMenuGroup() : renderMenuGroup()
}

export default MenuGroup
