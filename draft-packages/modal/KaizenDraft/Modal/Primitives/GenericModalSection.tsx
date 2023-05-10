import React from "react"
import classnames from "classnames"
import styles from "./GenericModalSection.module.scss"

export interface GenericModalSectionProps {
  readonly inputEdit?: boolean
  readonly children: React.ReactNode
}

const GenericModalSection = ({
  inputEdit = false,
  children,
}: GenericModalSectionProps): JSX.Element => (
  <div className={classnames(inputEdit && styles.inputEdit)}>{children}</div>
)

export default GenericModalSection
