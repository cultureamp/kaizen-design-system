import React from "react"
import classnames from "classnames"
import styles from "./ModalBody.module.scss"

export type ModalBodyProps = {
  inputEdit?: boolean
  children: React.ReactNode
}

export const ModalBody = ({
  inputEdit = false,
  children,
}: ModalBodyProps): JSX.Element => (
  <div className={classnames(inputEdit && styles.inputEdit)}>{children}</div>
)

ModalBody.displayName = "ModalBody"
