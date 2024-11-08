import React, { ReactNode } from "react"
import { Heading } from "~components/Heading"
import styles from "./Label.module.scss"

type LabelProps = {
  content: ReactNode
  isReversed: boolean
}

export const Label = ({
  content,
  isReversed = false,
}: LabelProps): JSX.Element => (
  <div className={styles.label}>
    <Heading variant="heading-4" tag="p" color={isReversed ? "white" : "dark"}>
      {content}
    </Heading>
  </div>
)

Label.displayName = "ProgressBar.Label"
