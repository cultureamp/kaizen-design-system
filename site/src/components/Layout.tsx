/* !!! This component is deprecated. Please do not use for new code  !!! */

import classnames from "classnames"
import * as React from "react"
import "../styles/global.scss"
import { useSSRHeartTheme } from "../utils/useSSRHeartTheme"
import Footer from "./Footer"
import Head from "./Head"
import MainNav from "./MainNav"
import styles from "./Layout.scss"

type LayoutProps = {
  currentPath?: string
  pageTitle?: string
  children?: React.ReactNode
  footer?: React.ReactNode
  pageHeader?: React.ReactNode
  fullWidthContent?: boolean
  trimBottomOfCardToContent?: boolean
}

const Layout: React.SFC<LayoutProps> = ({
  pageTitle,
  currentPath,
  children,
  pageHeader,
  fullWidthContent = false,
  trimBottomOfCardToContent = false,
  footer,
}) =>
  useSSRHeartTheme(
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
          <main>
            {pageHeader}
            {fullWidthContent ? (
              children
            ) : (
              <div
                className={classnames({
                  [styles.fullWidthContent]: true,
                  [styles.contentContainer]: true,
                  [styles.trimBottomOfCardToContent]: trimBottomOfCardToContent,
                })}
              >
                <div className={styles.content}>{children}</div>
              </div>
            )}
          </main>
        </div>
        <footer>
          <div className={styles.footerContainer}>{footer}</div>
        </footer>
      </div>
    </>
  )

export default Layout
