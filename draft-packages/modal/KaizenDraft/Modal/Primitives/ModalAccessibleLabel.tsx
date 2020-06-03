import * as React from "react"
import { ModalAccessibleContext } from "./ModalAccessibleContext"

interface Props {
  readonly children: React.ReactNode
}

type ModalAccessibleLabel = React.FunctionComponent<Props>

const ModalAccessibleLabel: ModalAccessibleLabel = ({ children }) => (
  <ModalAccessibleContext.Consumer>
    {({ labelledByID }) => <div id={labelledByID}>{children}</div>}
  </ModalAccessibleContext.Consumer>
)

export default ModalAccessibleLabel
