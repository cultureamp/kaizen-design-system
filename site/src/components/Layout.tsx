import classnames from "classnames"
import * as React from "react"
import contentStyles from "./Content.scss"
import Head from "./Head"
// import { TitleBlock } from "@cultureamp/kaizen-component-library/draft"
import styles from "./Layout.scss"
import MainNav from "./MainNav"

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
        <div className={styles.titleBlockContainer}>
          {/* {titleBlock && (
          <TitleBlock title={titleBlock.title} subtitle={titleBlock.subtitle} />
        )} */}
        </div>
        <div className={styles.contentContainer}>
          <div className={classnames(styles.content, contentStyles)}>
            {children}
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Layout
