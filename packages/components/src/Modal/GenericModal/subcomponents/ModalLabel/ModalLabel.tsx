import React from "react"
import classnames from "classnames"
import { ModalContext } from "../../context/ModalContext"
import styles from "./ModalLabel.module.scss"

export type ModalLabelProps = {
  children: React.ReactNode
  isProminent?: boolean
}

export const ModalLabel = ({
  children,
  isProminent = false,
}: ModalLabelProps): JSX.Element => (
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

ModalLabel.displayName = "ModalLabel"
