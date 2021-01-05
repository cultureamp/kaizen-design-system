import * as React from "react"
import styles from "../styles/ModalAccessibleLabel.scss"
import { ModalAccessibleContext } from "./ModalAccessibleContext"

interface Props {
  readonly children: React.ReactNode
}

type ModalAccessibleLabel = React.FunctionComponent<Props>

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
