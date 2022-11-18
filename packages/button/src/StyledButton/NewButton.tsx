import React, { ButtonHTMLAttributes } from "react"
import { OverrideClassName } from "@kaizen/component-base"

export interface NewButtonProps extends OverrideClassName<ButtonHTMLAttributes<HTMLButtonElement>> {
  test?: boolean
}

export const NewButton: React.VFC<NewButtonProps> = ({
  children
}) => (
  <button>{children}</button>
)
