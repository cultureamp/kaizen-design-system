import * as React from "react"
import styles from "../styles/ModalAccessibleLabel.scss"
import { ModalAccessibleContext } from "./ModalAccessibleContext"

export interface ModalAccessibleLabelProps {
  readonly children: React.ReactNode
}

type ModalAccessibleLabel = React.FunctionComponent<ModalAccessibleLabelProps>

const ModalAccessibleLabel: ModalAccessibleLabel = ({ children }) => (
  <ModalAccessibleContext.Consumer>
    {({ labelledByID }) => (
      <div id={labelledByID} tabIndex={-1} className={styles.label}>
        {children}
      </div>
    )}
  </ModalAccessibleContext.Consumer>
)

export default ModalAccessibleLabel
