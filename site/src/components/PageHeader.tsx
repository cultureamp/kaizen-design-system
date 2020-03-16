import classnames from "classnames"
import { graphql, StaticQuery } from "gatsby"
import * as React from "react"
import Tag from "./Tag"
import { Heading } from "@kaizen/component-library/components/Heading"
const styles = require("./PageHeader.scss")

type PageHeaderProps = {
  children?: React.ReactNode
  headingText: string | React.ReactNode
  summaryParagraph?: string
  tags?: string[]
  image?: React.ReactNode
  headingOnly?: boolean
}

const PageHeader: React.SFC<PageHeaderProps> = ({
  children,
  headingText,
  summaryParagraph,
  tags,
  image,
  headingOnly,
}) => (
  <StaticQuery
    query={graphql`
      query PageHeaderImagesQuery {
        amoeba: file(name: { eq: "amoeba" }) {
          publicURL
        }
        emptyState: file(name: { eq: "empty-state-placeholder" }) {
          publicURL
        }
      }
    `}
    render={data => (
      <div
        className={classnames({
          [styles.pageHeader]: true,
          [styles.headingOnly]: headingOnly,
        })}
      >
        <div className={styles.pageHeaderInner}>
          {!headingOnly && (
            <div className={styles.sideSection}>
              <div className={styles.image}>
                <img
                  src={data.amoeba.publicURL}
                  className={styles.imageBackdrop}
                />
                {image ? image : <img src={data.emptyState.publicURL} />}
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
          )}
          <div className={styles.mainSection}>
            <div className={styles.headingTextContainer}>
              <Heading
                variant={headingOnly ? "display-0" : "heading-1"}
                tag="h1"
                classNameAndIHaveSpokenToDST={styles.headingTextOverrides}
              >
                {headingText}
              </Heading>
            </div>
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
