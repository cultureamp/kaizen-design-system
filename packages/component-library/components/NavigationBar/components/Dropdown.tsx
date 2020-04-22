import React, { useLayoutEffect, useRef, useState } from "react"

import classNames from "classnames"
import { MenuGroup, MenuItemProps } from "../types"
import MenuItem from "./MenuItem"

const styles = require("./Menu.module.scss")

type Props = {
  header?: React.ReactElement<any>
  items: Array<MenuItemProps | MenuGroup>
}

const Dropdown = ({ items, header }: Props) => {
  const [shiftLeft, setShiftLeft] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const menuElem = menuRef.current

    if (menuElem) {
      const bounding = menuElem.getBoundingClientRect()

      if (
        bounding.right >
        (window.innerWidth || document.documentElement.clientWidth)
      ) {
        // Right side of menu is out of viewport
        setShiftLeft(true)
      }
    }
  }, [])

  const renderMenuGroup = (menuGroup: MenuGroup) => {
    return (
      <li className={styles.menuGroup}>
        <h4 className={styles.menuGroupTitle}>{menuGroup.title}</h4>
        {menuGroup.items.map(item => (
          <MenuItem {...item} />
        ))}
      </li>
    )
  }

  return (
    <div
      className={classNames(styles.menu, {
        [styles.shiftMenuLeft]: shiftLeft,
      })}
      ref={menuRef}
    >
      {header}
      <ul className={styles.menuItems}>
        {items.map(item => {
          if ("url" in item) {
            return <MenuItem {...item} />
          } else if ("title" in item) {
            return renderMenuGroup(item)
          }
        })}
      </ul>
    </div>
  )
}

export default Dropdown
