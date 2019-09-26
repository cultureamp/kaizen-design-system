import classnames from "classnames"
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
  footer?: React.ReactNode
  pageHeader?: React.ReactNode
  fullWidthContent?: boolean
}

const Layout: React.SFC<LayoutProps> = ({
  pageTitle,
  currentPath,
  children,
  pageHeader,
  fullWidthContent = false,
  footer,
}) => (
  <>
    <Head pageTitle={pageTitle} />
    <div className={styles.root}>
      <div className={styles.navigationBarContainer}>
        <MainNav currentPath={currentPath} />
      </div>
      <div
        className={classnames({
          [styles.page]: true,
          [styles.noBottomPadding]: fullWidthContent,
          [styles.noPageHeader]: !pageHeader,
        })}
      >
        {pageHeader}
        {fullWidthContent ? (
          children
        ) : (
          <div className={styles.contentContainer}>
            <div className={styles.content}>{children}</div>
          </div>
        )}
      </div>
      <div className={styles.footerContainer}>{footer}</div>
    </div>
  </>
)

export default Layout
