import * as React from "react"
import Footer from "./Footer"
import Head from "./Head"
// import { TitleBlock } from "@cultureamp/kaizen-component-library/draft"
import styles from "./Layout.scss"
import MainNav from "./MainNav"

type LayoutProps = {
  currentPath?: string
  pageTitle?: string
  children?: React.ReactNode
  reverseFooter?: boolean
  titleBlock?: {
    title: string
    subtitle: string
  }
}

const Layout: React.SFC<LayoutProps> = ({
  pageTitle,
  currentPath,
  children,
  titleBlock,
  reverseFooter = false,
}) => (
  <>
    <Head pageTitle={pageTitle} />
    <div className={styles.root}>
      <div className={styles.navigationBarContainer}>
        <MainNav currentPath={currentPath} />
      </div>
      <div className={styles.page}>
        <div className={styles.titleBlockContainer}>
          {/* {titleBlock && (
          <TitleBlock title={titleBlock.title} subtitle={titleBlock.subtitle} />
        )} */}
        </div>
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
