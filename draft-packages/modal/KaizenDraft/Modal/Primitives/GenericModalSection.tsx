import * as React from "react"
import classNames from "classnames"

import styles from "./GenericModalSection.scss"

export interface GenericModalSectionProps {
  readonly unpadded?: boolean
  readonly inputEdit?: boolean
  readonly children: React.ReactNode
}

type GenericModalSection = React.FunctionComponent<GenericModalSectionProps>

const GenericModalSection: GenericModalSection = ({
  unpadded = false,
  inputEdit = false,
  children,
}) => (
  <div
    className={classNames(
      unpadded ? undefined : styles.padded,
      inputEdit && styles.inputEdit
    )}
  >
    {children}
  </div>
)

export default GenericModalSection
