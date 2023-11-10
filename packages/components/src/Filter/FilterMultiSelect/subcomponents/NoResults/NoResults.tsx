import React, { HTMLAttributes } from "react"
import { Text } from "~components/Text"
import styles from "./NoResults.module.scss"

export type NoResultsProps = {
  children: React.ReactNode
} & HTMLAttributes<HTMLDivElement>

export const NoResults = ({
  children,
  ...restProps
}: NoResultsProps): JSX.Element => (
  <div className={styles.container} {...restProps}>
    <Text variant="extra-small" color="dark-reduced-opacity">
      {children}
    </Text>
  </div>
)

NoResults.displayName = "FilterMultiSelect.NoResults"
