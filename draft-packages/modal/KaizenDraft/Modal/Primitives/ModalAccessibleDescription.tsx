import React from "react"
import { ModalAccessibleContext } from "./ModalAccessibleContext"
import styles from "./ModalAccessibleDescription.module.scss"

export interface ModalAccessibleDescriptionProps {
  children: React.ReactNode
}

export const ModalAccessibleDescription = ({
  children,
}: ModalAccessibleDescriptionProps): JSX.Element => (
  <ModalAccessibleContext.Consumer>
    {({ describedByID }): JSX.Element => (
      <div id={describedByID} className={styles.modalDescription}>
        {children}
      </div>
    )}
  </ModalAccessibleContext.Consumer>
)

ModalAccessibleDescription.displayName = "ModalAccessibleDescription"
