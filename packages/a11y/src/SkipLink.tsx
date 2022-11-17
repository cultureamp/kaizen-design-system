import * as React from "react"
import { Icon } from "@kaizen/component-library"
import skipWhite from "@kaizen/component-library/icons/skip.icon.svg"
import styles from "./SkipLink.module.scss"

export interface SkipLinkProps {
  /**
   * The text to display in the skip link.
   */
  label: string
  /**
   * The id of the element to skip to.
   */
  skipTo: string
}

/**
 * The skip link should be the first focusable element in the page.
 */
export const SkipLink: React.VFC<SkipLinkProps> = ({ label, skipTo }) => (
  <a className={styles.skipLinkContainer} href={`#${skipTo}`}>
    <span className={styles.skipLinkContent}>
      <span className={styles.skipLinkIcon}>
        <Icon icon={skipWhite} role="presentation" />
      </span>
      <span>{label}</span>
    </span>
  </a>
)
