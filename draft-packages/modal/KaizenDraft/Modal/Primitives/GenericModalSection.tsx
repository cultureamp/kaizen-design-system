import React from "react"
import classNames from "classnames"
import styles from "./GenericModalSection.module.scss"

export interface GenericModalSectionProps {
  readonly inputEdit?: boolean
  readonly children: React.ReactNode
}

type GenericModalSection = React.FunctionComponent<GenericModalSectionProps>

const GenericModalSection: GenericModalSection = ({
  inputEdit = false,
  children,
}) => (
  <div
    className={classNames({
      [styles.inputEdit]: inputEdit,
    })}
  >
    {children}
  </div>
)

export default GenericModalSection
