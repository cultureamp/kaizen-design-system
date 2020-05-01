import * as React from "react"
import { ID_DESCRIBEDBY } from "./constants"

interface Props {
  readonly children: React.ReactNode
}

type ModalAccessibleDescription = React.FunctionComponent<Props>

const ModalAccessibleDescription: ModalAccessibleDescription = ({
  children,
}) => <div id={ID_DESCRIBEDBY}>{children}</div>

export default ModalAccessibleDescription
