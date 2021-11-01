import React, { ReactNode } from "react"

import styles from "./VisuallyHidden.module.scss"

interface VisuallyHiddenProps {
  children: ReactNode
}

export const VisuallyHidden = ({ children }: VisuallyHiddenProps) => (
  <span className={styles.srOnly}>{children}</span>
)
