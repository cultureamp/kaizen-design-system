import classnames from "classnames"
import { Link } from "gatsby"
import * as React from "react"
import markdownStyles from "../styles/markdown.scss"
import styles from "./SidebarAndContent.scss"

type SidebarAndContentProps = {
  children: React.ReactNode
}

type SidebarProps = {
  children: React.ReactNode
}

type SidebarTabProps = {
  href?: string
  active?: boolean
  children: React.ReactNode
}

export const Sidebar: React.SFC<SidebarProps> = ({ children }) => (
  <div className={styles.sidebar}>
    <ul className={styles.tabList}>{children}</ul>
  </div>
)

export const SidebarTab: React.SFC<SidebarTabProps> = ({
  href = "#",
  children,
  active = false,
}) => (
  <li className={classnames(styles.tab, { [styles.active]: active })}>
    <Link to={href}>{children}</Link>
  </li>
)

export const Content: React.SFC = ({ children }) => (
  <div className={classnames(styles.content, markdownStyles.markdownContainer)}>
    {children}
  </div>
)

export const SidebarAndContent: React.SFC<SidebarAndContentProps> = ({
  children,
}) => <div className={styles.sidebarAndContent}>{children}</div>
