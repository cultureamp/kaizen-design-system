import * as React from "react"
import styles from "./MenuSection.module.scss"

type MenuSectionProps = {
  heading?: React.ReactNode
  children: React.ReactNode
}

const MenuSection = (props: MenuSectionProps) => {
  const { heading, children } = props
  return (
    <li className={styles.menuSectionWrapper}>
      {heading && <span className={styles.header}>{heading}</span>}
      <ul className={styles.menuSection}>
        <li className={styles.menuItemList}>{children}</li>
      </ul>
    </li>
  )
}

MenuSection.displayName = "MenuSection"

export default MenuSection
