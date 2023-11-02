import React, { ReactNode } from "react"
import { Heading } from "~components/Heading"
import styles from "./Label.module.scss"

type Label = {
  content: ReactNode
  isReversed: boolean
}

export const Label = ({ content, isReversed = false }: Label): JSX.Element => (
  <div className={styles.label}>
    <Heading variant="heading-4" tag="p" color={isReversed ? "white" : "dark"}>
      {content}
    </Heading>
  </div>
)

Label.displayName = "Label"
