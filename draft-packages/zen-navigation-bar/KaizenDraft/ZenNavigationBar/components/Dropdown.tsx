import classNames from "classnames"
import React, { useLayoutEffect, useRef, useState } from "react"
import { MenuGroupProps, MenuItemProps } from "../types"
import MenuGroup from "./MenuGroup"
import MenuItem from "./MenuItem"

import styles from "./Dropdown.module.scss"

type Props = {
  header?: React.ReactElement<any>
  items: Array<MenuItemProps | MenuGroupProps>
}

// Unfortunately, you'll notice below, that I needed to use the array index,
// against react best practices (https://reactjs.org/docs/lists-and-keys.html)
// This is because the menu items have no unique identifier.

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

  return (
    <div
      className={classNames(styles.dropdown, {
        [styles.shiftDropdownLeft]: shiftLeft,
      })}
      ref={dropdownRef}
    >
      {header}
      <ul className={styles.menuItems}>
        {items.map((item, index) => {
          if ("url" in item) {
            // This key should not be derived from the array index, see note above
            return <MenuItem key={`${item.url}-${index}`} {...item} />
          } else if ("title" in item) {
            return (
              <MenuGroup
                // This key should not be derived from the array index, see note above
                key={`${item.title}-${index}`}
                {...item}
                first={index === 0}
              />
            )
          }
        })}
      </ul>
    </div>
  )
}

export default Dropdown
