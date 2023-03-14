import React from "react"
import classnames from "classnames"
import { ModalAccessibleContext } from "./ModalAccessibleContext"
import styles from "./ModalAccessibleLabel.module.scss"

export interface ModalAccessibleLabelProps {
  readonly children: React.ReactNode
  readonly isProminent?: boolean
}

const ModalAccessibleLabel = ({
  children,
  isProminent = false,
}: ModalAccessibleLabelProps): JSX.Element => (
  <ModalAccessibleContext.Consumer>
    {({ labelledByID }): JSX.Element => (
      <div
        id={labelledByID}
        tabIndex={-1}
        className={classnames(styles.modalLabel, {
          [styles.prominent]: isProminent,
        })}
      >
        {children}
      </div>
    )}
  </ModalAccessibleContext.Consumer>
)

export default ModalAccessibleLabel
