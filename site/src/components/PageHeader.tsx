import * as React from "react"
import styles from "./PageHeader.scss"

type PageHeaderProps = {
  children?: React.ReactNode
  headingText: string
  summaryParagraph?: string
  tags?: React.ReactNode
  image?: React.ReactNode
}

const PageHeader: React.SFC<PageHeaderProps> = ({
  children,
  headingText,
  summaryParagraph,
  tags,
  image,
}) => (
  <div className={styles.pageHeader}>
    <div className={styles.pageHeaderInner}>
      <div className={styles.sideSection}>
        <div className={styles.image}>{image && image}</div>
        <div className={styles.tagsContainer}>
          {tags && (
            <>
              <div className={styles.tagsLabel}>Also known as:</div>
              <div className={styles.tags}>{tags}</div>
            </>
          )}
        </div>
      </div>
      <div className={styles.mainSection}>
        <h1 className={styles.headingText}>{headingText}</h1>
        {summaryParagraph && (
          <h3 className={styles.summaryParagraph}>{summaryParagraph}</h3>
        )}
        {children}
      </div>
    </div>
  </div>
)

export default PageHeader
