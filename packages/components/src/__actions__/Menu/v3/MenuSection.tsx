import React from "react"
import { Section } from "react-aria-components"
import styles from "./MenuSection.module.scss"

type MenuSectionProps = {
  children: any
}

/**
 *
 */
export const MenuSection = (props: MenuSectionProps): JSX.Element => (
  <Section className={styles.section} {...props} />
)
