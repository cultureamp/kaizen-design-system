import * as React from "react"
import { ID_LABELLEDBY } from "./constants"

interface Props {
  readonly children: React.ReactNode
}

type ModalAccessibleLabel = React.FunctionComponent<Props>

const ModalAccessibleLabel: ModalAccessibleLabel = ({ children }) => (
  <div id={ID_LABELLEDBY}>{children}</div>
)

export default ModalAccessibleLabel
