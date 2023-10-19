import React from "react"
import classnames from "classnames"
import styles from "./ModalSection.module.scss"

export type ModalSectionProps = {
  inputEdit?: boolean
  children: React.ReactNode
}

export const ModalSection = ({
  inputEdit = false,
  children,
}: ModalSectionProps): JSX.Element => (
  <div className={classnames(inputEdit && styles.inputEdit)}>{children}</div>
)

ModalSection.displayName = "ModalSection"
