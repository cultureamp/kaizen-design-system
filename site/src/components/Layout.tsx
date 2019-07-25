import * as React from "react"
import MainNav from "./MainNav"
import Head from "./Head"
// import { TitleBlock } from "@cultureamp/kaizen-component-library/draft"
import styles from "./Layout.scss"

type LayoutProps = {
  currentPath?: string
  pageTitle?: string
  children?: React.ReactNode
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
}) => (
  <>
    <Head pageTitle={pageTitle} />
    <div className={styles.root}>
      <div className={styles.navigationBarContainer}>
        <MainNav currentPath={currentPath} />
      </div>
      <div className={styles.page}>
        {/* {titleBlock && (
          <TitleBlock title={titleBlock.title} subtitle={titleBlock.subtitle} />
        )} */}
        <div className={styles.contentContainer}>{children}</div>
      </div>
    </div>
  </>
)

export default Layout
