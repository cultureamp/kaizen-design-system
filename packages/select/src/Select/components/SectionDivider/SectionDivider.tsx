import React from "react"
import { Divider } from "@kaizen/draft-divider"
import styles from "./SectionDivider.module.scss"

export const SectionDivider = (): JSX.Element => (
  <Divider classNameOverride={styles.divider} variant="canvas" />
)

SectionDivider.displayName = "SectionDivider"
