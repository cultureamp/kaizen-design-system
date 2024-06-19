import React, { HTMLAttributes, ReactNode, useContext, useRef } from "react"
import classnames from "classnames"
import { AriaButtonOptions, useTooltipTrigger } from "react-aria"
import { TooltipTriggerStateContext } from "react-aria-components"
import styles from "./ToggleTip.module.scss"

export type ToggleTipProps = {
  children: ReactNode
  className?: HTMLAttributes<HTMLButtonElement>["className"]
} & AriaButtonOptions<"button">

export const ToggleTip = ({
  children,
  className,
  ...props
}: ToggleTipProps): JSX.Element => {
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
      className={classnames(styles.toggleTip, className)}
      data-inline-hidden-content
      onKeyDown={e => {
        if (e.key === "Enter" || e.key === " ") toggle()
      }}
      onPointerDown={toggle}
      onBlur={() => state.close(true)}
      {...props}
      // we're hiding the button for screen readers because we're rendered the content inline and so the button itself carries no information or value
      aria-hidden="true"
      data-a11y-ignore="aria-hidden-focus"
    >
      {children}
    </button>
  )
}
