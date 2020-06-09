import * as React from "react"
import { ModalAccessibleContext } from "./ModalAccessibleContext"

interface Props {
  readonly children: React.ReactNode
}

type ModalAccessibleDescription = React.FunctionComponent<Props>

const ModalAccessibleDescription: ModalAccessibleDescription = ({
  children,
}) => (
  <ModalAccessibleContext.Consumer>
    {({ describedByID }) => <div id={describedByID}>{children}</div>}
  </ModalAccessibleContext.Consumer>
)

export default ModalAccessibleDescription
