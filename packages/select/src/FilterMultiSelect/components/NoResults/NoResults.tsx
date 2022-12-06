import React, { HTMLAttributes } from "react"
import { Paragraph } from "@kaizen/typography"
import styles from "./NoResults.module.scss"

export interface NoResultsProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const NoResults: React.VFC<NoResultsProps> = ({
  children,
  ...restProps
}) => (
  <div className={styles.container} {...restProps}>
    <Paragraph variant="extra-small">{children}</Paragraph>
  </div>
)
