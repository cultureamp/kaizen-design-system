import React from "react"
import { Divider } from "@kaizen/draft-divider"

import styles from "./SectionDivider.module.scss"

export const SectionDivider = () => (
  <Divider classNameOverride={styles.divider} variant="canvas" />
)
