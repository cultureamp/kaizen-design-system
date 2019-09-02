import * as React from "react"
import styles from "./PageHeader.scss"

type PageHeaderProps = {
  children?: React.ReactNode
  headingText: string
  summaryParagraph?: string
  tags?: Tag[]
  image?: React.ReactNode
}

type Tag = {
  text: string
  link: string
}

// The <span> in here should be replaced with a Kaizen "Tag" component
const LinkTag = ({ text, link }) => (
  <a
    href={link}
    style={{
      color: "inherit",
      background: "rgba(255,255,255,0.1)",
      display: "inline-block",
      padding: "0.08em 0.75em",
      margin: "0 0.25em 0.5rem",
      borderRadius: "50px",
      textDecoration: "none",
      fontSize: "0.875rem",
      lineHeight: "1.7142857143",
    }}
  >
    <span>{text}</span>
  </a>
)

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
              <div className={styles.tags}>
                {tags.map(tag => (
                  <LinkTag text={tag.text} link={tag.link} />
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
)

export default PageHeader
