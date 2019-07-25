import * as React from "react"
import classnames from "classnames"
import { Link } from "gatsby"
import styles from "./SidebarAndContent.scss"

type SidebarAndContentProps = {
  children: React.ReactNode
}

type SidebarProps = {
  children: React.ReactNode
}

export const Sidebar: React.SFC<SidebarProps> = ({ children }) => (
  <div className={styles.sidebar}>
    <ul className={styles.tabList}>
      <li className={styles.tab}>
        <Link to="">Overview</Link>
      </li>
      <li className={classnames(styles.tab, { [styles.active]: true })}>
        <Link to="">Color</Link>
      </li>
      <li className={styles.tab}>
        <Link to="">Typography</Link>
      </li>
      <li className={styles.tab}>
        <Link to="">Icons</Link>
      </li>
      <li className={styles.tab}>
        <Link to="">Localisation</Link>
      </li>
      <li className={styles.tab}>
        <Link to="">Animation</Link>
      </li>
      <li className={styles.tab}>
        <Link to="">Product language style guide</Link>
      </li>
    </ul>
  </div>
)

export const Content: React.SFC = ({ children }) => (
  <div className={styles.content}>{children}</div>
)

export const SidebarAndContent: React.SFC<SidebarAndContentProps> = ({
  children,
}) => <div className={styles.sidebarAndContent}>{children}</div>
