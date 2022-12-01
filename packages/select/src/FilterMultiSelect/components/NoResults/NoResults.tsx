import * as React from "react"
import { Paragraph } from "@kaizen/typography"
import styles from "./NoResults.module.scss"

interface NoResultsProps {
  children: React.ReactNode
}

export const NoResults: React.VFC<NoResultsProps> = (props: NoResultsProps) => (
  <div className={styles.container}>
    <Paragraph variant="extra-small">{props.children}</Paragraph>
  </div>
)
