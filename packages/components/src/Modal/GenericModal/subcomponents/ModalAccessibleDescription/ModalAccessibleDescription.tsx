import React from "react"
import { ModalContext } from "../../context/ModalContext"
import styles from "./ModalAccessibleDescription.module.scss"

export type ModalAccessibleDescriptionProps = {
  children: React.ReactNode
}

export const ModalAccessibleDescription = ({
  children,
}: ModalAccessibleDescriptionProps): JSX.Element => (
  <ModalContext.Consumer>
    {({ describedByID }): JSX.Element => (
      <div id={describedByID} className={styles.modalDescription}>
        {children}
      </div>
    )}
  </ModalContext.Consumer>
)

ModalAccessibleDescription.displayName = "ModalAccessibleDescription"
