import * as React from "react"
import MainNav from "./MainNav"
import Head from "./Head"
import styles from "./Layout.scss"

type LayoutProps = {
  currentPath?: string
  pageTitle?: string
  children?: React.ReactNode
}

const Layout: React.SFC<LayoutProps> = props => (
  <>
    <Head pageTitle={props.pageTitle} />
    <div className={styles.root}>
      <div className={styles.navigationBarContainer}>
        <MainNav currentPath={props.currentPath} />
      </div>
      <div>{props.children}</div>
    </div>
  </>
)

export default Layout
