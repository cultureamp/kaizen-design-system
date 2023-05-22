import * as React from "react"
import {
  AriaPopoverProps,
  usePopover,
  DismissButton,
  Overlay,
} from "@react-aria/overlays"
import type { OverlayTriggerState } from "react-stately"
import styles from "./MenuPopup.module.scss"

interface PopoverProps extends Omit<AriaPopoverProps, "popoverRef"> {
  children: React.ReactNode
  state: OverlayTriggerState
}

export function Popover(props: PopoverProps): JSX.Element {
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
      <div {...popoverProps} ref={ref} className={styles.menuPopup}>
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  )
}
