import React from "react"
import { ModalContext } from "../../context/ModalContext"
import styles from "./ModalDescription.module.scss"

export type ModalDescriptionProps = {
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
