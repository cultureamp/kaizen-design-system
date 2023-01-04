import React from "react"
import classNames from "classnames"
import styles from "./GenericModalSection.module.scss"

export interface GenericModalSectionProps {
  readonly inputEdit?: boolean
  readonly children: React.ReactNode
}

const GenericModalSection = ({
  inputEdit = false,
  children,
}: GenericModalSectionProps): JSX.Element => (
  <div
    className={classNames({
      [styles.inputEdit]: inputEdit,
    })}
  >
    {children}
  </div>
)

export default GenericModalSection
