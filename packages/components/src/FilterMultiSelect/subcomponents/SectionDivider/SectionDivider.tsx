import React from "react"
import { Divider } from "@kaizen/draft-divider"
import styles from "./SectionDivider.module.scss"

export const SectionDivider = (): JSX.Element => (
  <li className={styles.divider} aria-hidden="true">
    <Divider variant="canvas" />
  </li>
)
