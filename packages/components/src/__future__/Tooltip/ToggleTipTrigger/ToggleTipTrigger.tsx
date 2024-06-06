import React, { HTMLAttributes, ReactNode, useRef } from "react"
import classnames from "classnames"
import { AriaButtonOptions, useButton } from "react-aria"
import styles from "./ToggleTipTrigger.module.scss"

export type ToggleTipTriggerProps = {
  children: ReactNode
  className?: HTMLAttributes<HTMLButtonElement>["className"]
} & AriaButtonOptions<"button">

export const ToggleTipTrigger = ({
  children,
  className,
  ...props
}: ToggleTipTriggerProps): JSX.Element => {
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, ref)

  return (
    <button
      ref={ref}
      type="button"
      className={classnames(
        styles.toggleTipTrigger,
        className)}
      data-non-interactive
      {...buttonProps}
      // Cannot use react-aria's Button component as it prevents adding aria-hidden
      aria-hidden="true"
    >
      {children}
    </button>
  )
}
