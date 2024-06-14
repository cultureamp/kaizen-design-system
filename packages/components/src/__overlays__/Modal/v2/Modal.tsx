import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"

export type ModalProps = {
  children?: React.ReactNode
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const Modal = ({
  children,
  classNameOverride,
  ...restProps
}: ModalProps): JSX.Element => (
  <div className={classnames(classNameOverride)} {...restProps}>
    {children}
  </div>
)

Modal.displayName = "Modal"
