import * as React from "react"
import "../styles/global.scss"
import Footer from "./Footer"
import Head from "./Head"
const styles = require("./Layout.scss")
import MainNav from "./MainNav"

type LayoutProps = {
  currentPath?: string
  pageTitle?: string
  children?: React.ReactNode
  reverseFooter?: boolean
  pageHeader?: React.ReactNode
}

const Layout: React.SFC<LayoutProps> = ({
  pageTitle,
  currentPath,
  children,
  pageHeader,
  reverseFooter = false,
}) => (
  <>
    <Head pageTitle={pageTitle} />
    <div className={styles.root}>
      <div className={styles.navigationBarContainer}>
        <MainNav currentPath={currentPath} />
      </div>
      <div className={styles.page}>
        {pageHeader}
        <div className={styles.contentContainer}>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
      <div className={styles.footerContainer}>
        <Footer reverseVariant={reverseFooter} />
      </div>
    </div>
  </>
)

export default Layout
