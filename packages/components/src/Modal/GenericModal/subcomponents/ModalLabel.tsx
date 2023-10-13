import React from "react"
import classnames from "classnames"
import styles from "../GenericModal.module.scss"
import { ModalContext } from "./ModalContext"

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
