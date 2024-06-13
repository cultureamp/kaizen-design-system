import React, { ReactNode } from "react"
import { Text } from "~components/Text"
import styles from "./Tooltip.module.scss"

export const Tooltip = ({ children }: { children: ReactNode }): JSX.Element => (
  <div className={styles.tooltip} role="tooltip">
    <div className={styles.tooltipContent}>
      <Text classNameOverride={styles.tooltipTextTest} variant="body">
        {children}
      </Text>
      <p>There should be margin above</p>
    </div>
    <div className={styles.arrow}>
      <div className={styles.arrowInner}>
        <div className={styles.arrowMain} />
        <div className={styles.arrowShadow} />
      </div>
    </div>
  </div>
)

Tooltip.displayName = "Tooltip"
