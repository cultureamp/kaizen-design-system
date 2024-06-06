import React, { HTMLAttributes, ReactNode, useRef } from "react"
import classnames from "classnames"
import { AriaButtonOptions, useButton } from "react-aria"
import styles from "./PopoverTrigger.module.scss"

export type PopoverTriggerProps = {
  children: ReactNode
  className?: HTMLAttributes<HTMLButtonElement>["className"]
} & AriaButtonOptions<"button">

export const PopoverTrigger = ({
  children,
  className,
  ...props
}: PopoverTriggerProps): JSX.Element => {
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, ref)

  return (
    <button
      ref={ref}
      type="button"
      className={classnames(styles.popoverTrigger, className)}
      data-tooltip-sr-content
      {...buttonProps}
      // Cannot use react-aria's Button component as it prevents adding aria-hidden
      aria-hidden="true"
    >
      {children}
    </button>
  )
}
