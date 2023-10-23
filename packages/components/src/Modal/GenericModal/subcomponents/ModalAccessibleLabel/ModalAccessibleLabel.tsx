import React from "react"
import classnames from "classnames"
import { ModalContext } from "../../context/ModalContext"
import styles from "./ModalAccessibleLabel.module.scss"

export type ModalAccessibleLabelProps = {
  children: React.ReactNode
  isProminent?: boolean
}

export const ModalAccessibleLabel = ({
  children,
  isProminent = false,
}: ModalAccessibleLabelProps): JSX.Element => (
  <ModalContext.Consumer>
    {({ labelledByID }): JSX.Element => (
      <div
        id={labelledByID}
        tabIndex={-1}
        className={classnames(
          styles.modalLabel,
          isProminent && styles.prominent
        )}
      >
        {children}
      </div>
    )}
  </ModalContext.Consumer>
)

ModalAccessibleLabel.displayName = "ModalAccessibleLabel"
