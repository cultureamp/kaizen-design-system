import * as React from "react"
const styles = require("./styles.module.scss")

export interface VisuallyHiddenProps {
  /**
   * Any child nodes will be visually hidden.
   */
  children?: React.ReactNode

  /**
   * Uniquely identify this component for testing purposes
   */
  automationId?: string
}

/**
 * A component to make content visually hidden, but available to screen readers.
 *
 * Elements that are natively focusable will become visible when focused.
 * This is useful for "Skip to content" links etc.
 *
 * This will create a span with a CSS class that visually hides content using the clip pattern.
 * See https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content/
 */
export const VisuallyHidden = ({
  children,
  automationId,
}: VisuallyHiddenProps) => (
  <span data-automation-id={automationId} className={styles.visuallyHidden}>
    {children}
  </span>
)
