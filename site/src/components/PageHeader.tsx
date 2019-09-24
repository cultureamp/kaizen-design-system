import { graphql, StaticQuery } from "gatsby"
import * as React from "react"
import Tag from "./Tag"
const styles = require("./PageHeader.scss")

type PageHeaderProps = {
  children?: React.ReactNode
  headingText: string
  summaryParagraph?: string
  tags?: Array<string>
  image?: React.ReactNode
}

const PageHeader: React.SFC<PageHeaderProps> = ({
  children,
  headingText,
  summaryParagraph,
  tags,
  image,
}) => (
  <StaticQuery
    query={graphql`
      query PageHeaderImagesQuery {
        amoeba: file(name: { eq: "amoeba" }) {
          publicURL
        }
      }
    `}
    render={data => (
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <div className={styles.sideSection}>
            <div className={styles.image}>
              {image ? image : <img src={data.amoeba.publicURL} />}
            </div>
            <div className={styles.tagsContainer}>
              {tags && (
                <>
                  <div className={styles.tagsLabel}>Also known as:</div>
                  <div className={styles.tags}>
                    {tags.map((tagText, i) => (
                      <Tag text={tagText} key={`tag-${i}`} />
                    ))}
                  </div>
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
    )}
  />
)

export default PageHeader
