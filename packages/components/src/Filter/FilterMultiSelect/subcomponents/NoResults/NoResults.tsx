import React, { HTMLAttributes } from "react"
import { Paragraph } from "@kaizen/typography"
import styles from "./NoResults.module.scss"

export type NoResultsProps = {
  children: React.ReactNode
} & HTMLAttributes<HTMLDivElement>

export const NoResults = ({
  children,
  ...restProps
}: NoResultsProps): JSX.Element => (
  <div className={styles.container} {...restProps}>
    <Paragraph variant="extra-small" color="dark-reduced-opacity">
      {children}
    </Paragraph>
  </div>
)

NoResults.displayName = "FilterMultiSelect.NoResults"
