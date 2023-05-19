import * as React from "react"
import type { AriaPopoverProps } from "@react-aria/overlays"
import { usePopover, DismissButton, Overlay } from "@react-aria/overlays"
import type { OverlayTriggerState } from "react-stately"

interface PopoverProps extends Omit<AriaPopoverProps, "popoverRef"> {
  children: React.ReactNode
  state: OverlayTriggerState
}

export function Popover(props: PopoverProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const { state, children } = props

  const { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef: ref,
    },
    state
  )

  return (
    <Overlay>
      <div {...underlayProps} className="fixed inset-0" />
      <div
        {...popoverProps}
        ref={ref}
        className="z-10 shadow-lg border border-gray-300 bg-white rounded-md mt-2"
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  )
}
