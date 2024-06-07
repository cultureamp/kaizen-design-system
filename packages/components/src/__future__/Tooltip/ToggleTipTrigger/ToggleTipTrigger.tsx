import React, { HTMLAttributes, ReactNode, useContext, useRef } from "react"
import classnames from "classnames"
import { AriaButtonOptions, useTooltipTrigger } from "react-aria"
import { TooltipTriggerStateContext } from "react-aria-components"
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
  const state = useContext(TooltipTriggerStateContext)!

  // registers ref to triggerRef for positioning the tooltip
  // it also registers event handler for escape key to close the tooltip
  // other handlers like onKeyDown or onPointerDown we provide own
  useTooltipTrigger(props, state, ref)

  const toggle = (): void =>
    state.isOpen ? state.close(true) : state.open(true)

  return (
    <button
      ref={ref}
      type="button"
      className={classnames(styles.toggleTipTrigger, className)}
      data-inline-hidden-content
      onKeyDown={e => {
        if (e.key === "Enter" || e.key === " ") toggle()
      }}
      onPointerDown={toggle}
      onBlur={() => state.close(true)}
      {...props}
      // Cannot use react-aria's Button component as it prevents adding aria-hidden
      aria-hidden="true"
    >
      {children}
    </button>
  )
}
