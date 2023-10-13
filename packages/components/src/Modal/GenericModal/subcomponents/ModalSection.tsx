import React from "react"
import classnames from "classnames"
import styles from "../GenericModal.module.scss"

export interface GenericModalSectionProps {
  inputEdit?: boolean
  children: React.ReactNode
}

const GenericModalSection = ({
  inputEdit = false,
  children,
}: GenericModalSectionProps): JSX.Element => (
  <div className={classnames(inputEdit && styles.inputEdit)}>{children}</div>
)

export default GenericModalSection
