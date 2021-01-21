import * as React from "react"
import styles from "./styles.module.scss"

export interface SliderProps {
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

export const Slider = ({ children, automationId }: SliderProps) => (
  <h1 data-automation-id={automationId} className={styles.wrapper}>
    Hello, {children}
  </h1>
)
