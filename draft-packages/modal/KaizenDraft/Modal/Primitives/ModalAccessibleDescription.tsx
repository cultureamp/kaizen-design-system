import * as React from "react"
import { ModalAccessibleContext } from "./ModalAccessibleContext"
import styles from "./ModalAccessibleDescription.scss"

export interface ModalAccessibleDescriptionProps {
  readonly children: React.ReactNode
}

const ModalAccessibleDescription: React.FunctionComponent<
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

export default ModalAccessibleDescription
