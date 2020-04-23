import React, { useLayoutEffect, useRef, useState } from "react"

import classNames from "classnames"
import { MenuGroupProps, MenuItemProps } from "../types"
import MenuItem from "./MenuItem"

const styles = require("./Dropdown.module.scss")

type Props = {
  header?: React.ReactElement<any>
  items: Array<MenuItemProps | MenuGroupProps>
}

const Dropdown = ({ items, header }: Props) => {
  const [shiftLeft, setShiftLeft] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const dropdownElem = dropdownRef.current

    if (dropdownElem) {
      const bounding = dropdownElem.getBoundingClientRect()

      if (
        bounding.right >
        (window.innerWidth || document.documentElement.clientWidth)
      ) {
        // Right side of menu is out of viewport
        setShiftLeft(true)
      }
    }
  }, [])

  const renderMenuGroup = (menuGroup: MenuGroupProps) => {
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
      className={classNames(styles.dropdown, {
        [styles.shiftDropdownLeft]: shiftLeft,
      })}
      ref={dropdownRef}
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
