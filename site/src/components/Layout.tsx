import * as React from "react"
import "../styles/global.scss"
import Footer from "./Footer"
import Head from "./Head"
import MainNav from "./MainNav"

const styles = require("./Layout.scss")

type LayoutProps = {
  currentPath?: string
  pageTitle?: string
  children?: React.ReactNode
  reverseFooter?: boolean
  pageHeader?: React.ReactNode
  fullWidthContent?: boolean
}

const Layout: React.SFC<LayoutProps> = ({
  pageTitle,
  currentPath,
  children,
  pageHeader,
  reverseFooter = false,
  fullWidthContent = false,
}) => (
  <>
    <Head pageTitle={pageTitle} />
    <div className={styles.root}>
      <div className={styles.navigationBarContainer}>
        <MainNav currentPath={currentPath} />
      </div>
      <div className={styles.page}>
        {pageHeader}
        {fullWidthContent ? (
          children
        ) : (
          <div className={styles.contentContainer}>
            <div className={styles.content}>{children}</div>
          </div>
        )}
      </div>
      <div className={styles.footerContainer}>
        <Footer reverseVariant={reverseFooter} />
      </div>
    </div>
  </>
)

export default Layout
