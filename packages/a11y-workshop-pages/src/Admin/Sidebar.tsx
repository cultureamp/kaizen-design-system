import React from "react"
import styles from "./Admin.module.scss"

interface SidebarProps {
  onNavPress: (page: string) => void
}

export const Sidebar = (props: SidebarProps): JSX.Element => (
  <>
    <button
      type="button"
      className={styles.navItem}
      onClick={() => props.onNavPress("settings")}
    >
      Survey settings
    </button>
    <button
      type="button"
      className={styles.navItem}
      onClick={() => props.onNavPress("admin")}
    >
      Administrators
    </button>
    <button
      type="button"
      className={styles.navItem}
      onClick={() => props.onNavPress("")}
    >
      Communications
    </button>
    <button
      type="button"
      className={styles.navItem}
      onClick={() => props.onNavPress("")}
    >
      Demographics
    </button>
    <button
      type="button"
      className={styles.navItem}
      onClick={() => props.onNavPress("")}
    >
      Confidentiality
    </button>
  </>
)
