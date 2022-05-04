import React from "react"
import { ModalAccessibleContext } from "./ModalAccessibleContext"
import styles from "./ModalAccessibleDescription.scss"

export interface ModalAccessibleDescriptionProps {
  children: React.ReactNode
}

export const ModalAccessibleDescription: React.VFC<
  ModalAccessibleDescriptionProps
> = ({ children }) => (
  <ModalAccessibleContext.Consumer>
    {({ describedByID }) => (
      <div id={describedByID} className={styles.modalDescription}>
        {children}
      </div>
    )}
  </ModalAccessibleContext.Consumer>
)

ModalAccessibleDescription.displayName = "ModalAccessibleDescription"
