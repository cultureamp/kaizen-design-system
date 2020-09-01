import * as React from "react"
const styles = require("./styles.module.scss")

export interface VisuallyHiddenProps {
  /**
   * Remember to annotate your props! The typehints make developers happy
   * @default ""
   */
  children?: React.ReactNode

  /**
   * Uniquely identify this component for testing purposes
   * @default ""
   */
  automationId?: string
}

export const VisuallyHidden = ({
  children,
  automationId,
}: VisuallyHiddenProps) => (
  <h1 data-automation-id={automationId} className={styles.wrapper}>
    Hello, {children}
  </h1>
)
