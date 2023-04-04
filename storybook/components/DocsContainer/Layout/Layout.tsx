import React, { ReactNode } from "react"
import styles from "./Layout.module.scss"

export const Main = ({ children }: { children: ReactNode }): JSX.Element => (
  <main className={styles.main}>{children}</main>
)

export const Sidebar = ({ children }: { children: ReactNode }): JSX.Element => (
  <aside className={styles.sidebar}>{children}</aside>
)

export const Content = ({ children }: { children: ReactNode }): JSX.Element => (
  <div className={`${styles.content} tocbot-content`}>{children}</div>
)
