import * as React from "react"
import classNames from "classnames"

import styles from "./GenericModalSection.scss"

export interface GenericModalSectionProps {
  readonly inputEdit?: boolean
  readonly children: React.ReactNode
}

const GenericModalSection: React.FunctionComponent<
  GenericModalSectionProps
> = ({ inputEdit = false, children }) => (
  <div
    className={classNames({
      [styles.inputEdit]: inputEdit,
    })}
  >
    {children}
  </div>
)

export default GenericModalSection
