import classnames from "classnames"
import * as React from "react"
import { ModalAccessibleContext } from "./ModalAccessibleContext"
import styles from "./ModalAccessibleLabel.scss"

export interface ModalAccessibleLabelProps {
  readonly children: React.ReactNode
}

type ModalAccessibleLabel = React.FunctionComponent<ModalAccessibleLabelProps>

const ModalAccessibleLabel: ModalAccessibleLabel = ({ children }) => (
  <ModalAccessibleContext.Consumer>
    {({ labelledByID }) => (
      <div
        id={labelledByID}
        tabIndex={-1}
        className={classnames(styles.modalLabel)}
      >
        {children}
      </div>
    )}
  </ModalAccessibleContext.Consumer>
)

export default ModalAccessibleLabel
