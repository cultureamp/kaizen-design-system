import React from "react"
import styles from "../GenericModal.module.scss"
import { ModalContext } from "./ModalContext"

export interface ModalDescriptionProps {
  children: React.ReactNode
}

export const ModalDescription = ({
  children,
}: ModalDescriptionProps): JSX.Element => (
  <ModalContext.Consumer>
    {({ describedByID }): JSX.Element => (
      <div id={describedByID} className={styles.modalDescription}>
        {children}
      </div>
    )}
  </ModalContext.Consumer>
)

ModalDescription.displayName = "ModalDescription"
